/**
 * DP World / CARGOES Live Tracking Adapter
 * 
 * Directly queries the live DP World / CARGOES production tracking services:
 * - Primary: https://api-fr.cargoes.com/track/v3/{id} (with transportMode=express, container/ocean, cold_chain failsafes)
 * - Fallback: https://api-fr.cargoes.com/track/v5 & /track/v4
 * - Authenticated: https://tracking.searates.com (if DP_WORLD_API_KEY is configured)
 * 
 * Strict live data only - no mock or synthetic data.
 */

import { RoutePoint, resolveIndianCityCoords } from '../tracking';

export interface DPWorldTimelineEvent {
  status: string;
  date: string;
  rawDate?: number;
  location?: string;
  lat?: number;
  lng?: number;
}

export interface DPWorldTrackingData {
  carrier: string;
  trackingNumber: string;
  pickupLocation?: string;
  pickupDate?: string;
  deliveryDestination?: string;
  deliveryDate?: string;
  currentLocation?: string;
  currentCoordinates?: {
    lat: number;
    lng: number;
    label?: string;
  };
  routePoints?: RoutePoint[];
  packagesCount?: number | string;
  vessel?: string;
  containerType?: string;
  remark?: string;
  timeline: DPWorldTimelineEvent[];
}

export interface DPWorldTrackResult {
  success: boolean;
  data?: DPWorldTrackingData;
  code?: string;
  message: string;
}

export class DPWorldAdapter {
  private apiKey: string;
  private baseUrl: string;
  private timeout: number;

  constructor(options: { apiKey?: string; baseUrl?: string; timeout?: number } = {}) {
    this.apiKey = options.apiKey || process.env.DP_WORLD_API_KEY || '';
    this.baseUrl = options.baseUrl || process.env.DP_WORLD_API_BASE_URL || 'https://api-fr.cargoes.com';
    this.timeout = options.timeout || 18000;
  }

  /**
   * Validate tracking / container / booking number format.
   * Accepts ISO containers, DP World bookings, DP World Express dockets, B/L numbers.
   */
  validate(trackingNumber: string): { valid: boolean; sanitized?: string; error?: string } {
    if (!trackingNumber || typeof trackingNumber !== 'string') {
      return { valid: false, error: 'Tracking, Container, or Docket number is required.' };
    }

    const sanitized = trackingNumber.trim().toUpperCase().replace(/[^A-Z0-9-]/g, '');

    if (sanitized.length < 4 || sanitized.length > 35) {
      return {
        valid: false,
        error: 'Invalid tracking number length. Please enter a valid container, booking, or docket number.'
      };
    }

    return { valid: true, sanitized };
  }

  /**
   * Query DP World tracking information from live production endpoints.
   */
  async track(rawTrackingNumber: string): Promise<DPWorldTrackResult> {
    const validation = this.validate(rawTrackingNumber);
    if (!validation.valid || !validation.sanitized) {
      return {
        success: false,
        code: 'VALIDATION_ERROR',
        message: validation.error || 'Invalid tracking number.'
      };
    }

    const trackingNumber = validation.sanitized;

    // Mode 1: If user supplied an official API key, use official SeaRates / CARGOES API
    if (this.apiKey && this.apiKey.trim() !== '') {
      return await this._trackWithApiKey(trackingNumber);
    }

    // Mode 2: Live production consumer query via DP World / CARGOES tracking service
    return await this._trackLiveProduction(trackingNumber);
  }

  /**
   * Live production query via DP World's cloud tracking infrastructure.
   * Uses a multi-step failsafe chain across DP World's live endpoints so that
   * if any single mode or version fails (400/404/500/timeout), subsequent endpoints are tried automatically.
   */
  private async _trackLiveProduction(trackingNumber: string): Promise<DPWorldTrackResult> {
    const isIsoContainer = /^[A-Z]{4}\d{7}$/.test(trackingNumber);
    const encodedId = encodeURIComponent(trackingNumber);

    // Ordered failsafe trials:
    // 1. /track/v3 direct live endpoints (no client-side reCAPTCHA required)
    const v3Trials = isIsoContainer
      ? [
          `${this.baseUrl}/track/v3/${encodedId}`,
          `${this.baseUrl}/track/v3/${encodedId}?transportMode=express`,
          `${this.baseUrl}/track/v3/${encodedId}?transportMode=cold_chain`,
        ]
      : [
          `${this.baseUrl}/track/v3/${encodedId}?transportMode=express`,
          `${this.baseUrl}/track/v3/${encodedId}`,
          `${this.baseUrl}/track/v3/${encodedId}?transportMode=cold_chain`,
        ];

    // 2. /track/v5 and /track/v4 secondary fallback endpoints
    const legacyTrials = [
      `${this.baseUrl}/track/v5?trackingId=${encodedId}&transportMode=express`,
      `${this.baseUrl}/track/v5?trackingId=${encodedId}`,
      `${this.baseUrl}/track/v4?trackingId=${encodedId}&transportMode=express`,
      `${this.baseUrl}/track/v4?trackingId=${encodedId}`,
    ];

    const allTrialUrls = [...v3Trials, ...legacyTrials];
    let hadNetworkReachability = false;

    for (const trialUrl of allTrialUrls) {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 8000);

      try {
        const response = await fetch(trialUrl, {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
            'Origin': 'https://www.logistics.dpworld.com',
            'Referer': 'https://www.logistics.dpworld.com/tracking/in/express',
            'User-Agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
          },
          cache: 'no-store',
          signal: controller.signal,
        });

        clearTimeout(timeoutId);
        hadNetworkReachability = true;

        if (!response.ok) {
          // Continue to next failsafe trial on 400 / 404 / 500
          continue;
        }

        const json = await response.json();

        // Case A: /track/v4 or /track/v5 wrapped format ({ data: { trackings: [...] } })
        if (json?.data && Array.isArray(json.data.trackings) && json.data.trackings.length > 0) {
          const normalized = this.normalizeResponse(trackingNumber, json.data.trackings[0]);
          if (normalized) {
            return {
              success: true,
              data: normalized,
              message: 'Tracking details retrieved successfully.',
            };
          }
        }

        // Case B: /track/v3 direct shipment format ({ containersTrackingEvents, shippingDetails, ... })
        const rawPayload = json?.data && !Array.isArray(json.data.trackings) ? json.data : json;
        const normalized = this.normalizeResponse(trackingNumber, rawPayload);
        if (normalized) {
          return {
            success: true,
            data: normalized,
            message: 'Tracking details retrieved successfully.',
          };
        }
      } catch {
        clearTimeout(timeoutId);
        // Continue to next trial in failsafe chain without throwing
      }
    }

    if (!hadNetworkReachability) {
      return {
        success: false,
        code: 'NETWORK_ERROR',
        message: 'Failed to connect to DP World tracking service. Please try again.',
      };
    }

    return {
      success: false,
      code: 'NOT_FOUND',
      message: `No shipment records found for tracking number: ${trackingNumber}.`,
    };
  }

  /**
   * Official API Key integration if DP_WORLD_API_KEY is configured.
   */
  private async _trackWithApiKey(trackingNumber: string): Promise<DPWorldTrackResult> {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), this.timeout);

    try {
      const url = new URL('/v2/tracking', this.baseUrl);
      url.searchParams.set('number', trackingNumber);

      const response = await fetch(url.toString(), {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'x-api-key': this.apiKey,
          'Authorization': `Bearer ${this.apiKey}`
        },
        cache: 'no-store',
        signal: controller.signal
      });

      clearTimeout(timeoutId);

      if (response.status === 401 || response.status === 403) {
        return {
          success: false,
          code: 'AUTHENTICATION_FAILED',
          message: 'Tracking service authentication failed. Please check credentials.'
        };
      }

      if (response.status === 404) {
        return {
          success: false,
          code: 'NOT_FOUND',
          message: `No shipment found for: ${trackingNumber}.`
        };
      }

      if (!response.ok) {
        return {
          success: false,
          code: 'API_ERROR',
          message: `Logistics service error: HTTP ${response.status}`
        };
      }

      const json = await response.json();
      const normalized = this.normalizeResponse(trackingNumber, json.data || json);

      if (!normalized) {
        return {
          success: false,
          code: 'NOT_FOUND',
          message: `No tracking details available for: ${trackingNumber}.`
        };
      }

      return {
        success: true,
        data: normalized,
        message: 'Tracking details retrieved successfully.'
      };
    } catch (error: unknown) {
      const isAbort = error instanceof Error && error.name === 'AbortError';
      if (isAbort) {
        return { success: false, code: 'TIMEOUT', message: 'Request timed out.' };
      }
      const msg = error instanceof Error ? error.message : String(error);
      return { success: false, code: 'NETWORK_ERROR', message: msg };
    }
  }

  /**
   * Format ISO date string into readable format.
   * e.g. 2026-09-17T11:14:30 -> 17 Sep 2026, 11:14 (or 17 Sep 2026 when includeTime is false)
   */
  private _formatDate(dateStr?: string, includeTime: boolean = true): string {
    if (!dateStr) return '';
    try {
      const d = new Date(dateStr);
      if (isNaN(d.getTime())) return dateStr;
      const day = String(d.getDate()).padStart(2, '0');
      const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      const month = months[d.getMonth()];
      const year = d.getFullYear();
      if (!includeTime) {
        return `${day} ${month} ${year}`;
      }
      const hours = String(d.getHours()).padStart(2, '0');
      const mins = String(d.getMinutes()).padStart(2, '0');
      return `${day} ${month} ${year}, ${hours}:${mins}`;
    } catch {
      return dateStr;
    }
  }

  /**
   * Normalize DP World live tracking response into uniform format.
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  normalizeResponse(trackingNumber: string, raw: any): DPWorldTrackingData | null {
    if (!raw || typeof raw !== 'object') return null;

    const result: DPWorldTrackingData = {
      carrier: 'Bharat Relocators',
      trackingNumber: raw.identifier?.identifierValue || raw.shippingDetails?.id || trackingNumber,
      timeline: []
    };

    // Shipping details (origin, destination, ETA, packages)
    const shipping = raw.shippingDetails || {};

    // Origin (prefer city for clean display matching DP World Express portal, fallback to name/code)
    if (shipping.origin) {
      result.pickupLocation =
        shipping.origin.city ||
        shipping.origin.name ||
        shipping.origin.code ||
        undefined;
    }

    // Destination (prefer city, fallback to name/code)
    if (shipping.destination) {
      result.deliveryDestination =
        shipping.destination.city ||
        shipping.destination.name ||
        shipping.destination.code ||
        undefined;
    }

    // ETA or Delivery Date
    if (shipping.placeOfDestinationEta || raw.eta) {
      result.deliveryDate = this._formatDate(shipping.placeOfDestinationEta || raw.eta, false);
    }

    // Total Packages
    if (shipping.totalPackages) {
      result.packagesCount = shipping.totalPackages;
    }

    // Current Location
    if (raw.currentLocation?.locationName) {
      result.currentLocation = raw.currentLocation.locationName;
    }

    // Booking Route fallback if shippingDetails is empty
    let vesselName: string | null = null;
    let voyageNo: string | null = null;

    if (Array.isArray(raw.bookingRoute) && raw.bookingRoute.length > 0) {
      const firstLeg = raw.bookingRoute[0];
      const lastLeg = raw.bookingRoute[raw.bookingRoute.length - 1];

      if (!result.pickupLocation) {
        result.pickupLocation = firstLeg.origin_location?.location?.place_name || firstLeg.origin_location?.name || firstLeg.origin_location?.city;
      }
      if (!result.deliveryDestination) {
        result.deliveryDestination = lastLeg.destination_location?.location?.place_name || lastLeg.destination_location?.name || lastLeg.destination_location?.city;
      }

      for (const leg of raw.bookingRoute) {
        if (leg.vessel_name) vesselName = leg.vessel_name;
        if (leg.voyage_number) voyageNo = leg.voyage_number;
      }
    }

    if (vesselName) {
      result.vessel = voyageNo ? `${vesselName} (Voyage ${voyageNo})` : vesselName;
    }

    // Container metadata (size, type)
    if (raw.containersMetadata) {
      const cKeys = Object.keys(raw.containersMetadata);
      if (cKeys.length > 0) {
        const meta = raw.containersMetadata[cKeys[0]];
        if (meta.containerType || meta.isoCode || meta.size) {
          result.containerType = [meta.size, meta.containerType, meta.isoCode].filter(Boolean).join(' ');
        }
      }
    }

    // Events and Timeline
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const rawEvents: { evt: any; isParentMilestone?: boolean }[] = [];
    let latestTopLevelStatus: string | undefined;

    // Check containersTrackingEvents first
    if (raw.containersTrackingEvents && typeof raw.containersTrackingEvents === 'object') {
      const keys = Object.keys(raw.containersTrackingEvents);
      if (keys.length > 0 && Array.isArray(raw.containersTrackingEvents[keys[0]])) {
        const cList = raw.containersTrackingEvents[keys[0]];
        for (const item of cList) {
          // Record the top-level milestone itself (e.g., "In Transit, GURGAON Hub" or "Received, Kolkata Taratala")
          rawEvents.push({ evt: item, isParentMilestone: true });

          const itemStatus = item.event_desc || item.status || item.description;
          const itemLoc = item.event_location?.name || item.event_location?.city || '';
          if (itemStatus) {
            latestTopLevelStatus = itemLoc && !itemStatus.toLowerCase().includes(itemLoc.toLowerCase())
              ? `${itemStatus}, ${itemLoc}`
              : itemStatus;
          }

          // Also include detailed hub transit sub_events if present
          if (Array.isArray(item.sub_events) && item.sub_events.length > 0) {
            for (const sub of item.sub_events) {
              rawEvents.push({ evt: sub, isParentMilestone: false });
            }
          }
        }
      }
    }

    // Check bookingTrackingEvents
    if (Array.isArray(raw.bookingTrackingEvents)) {
      for (const item of raw.bookingTrackingEvents) {
        rawEvents.push({ evt: item, isParentMilestone: true });
      }
    }

    // Check generic events
    if (Array.isArray(raw.events)) {
      for (const item of raw.events) {
        rawEvents.push({ evt: item, isParentMilestone: true });
      }
    }

    // Format and deduplicate timeline
    const timeline: {
      status: string;
      date: string;
      rawDate: number;
      isParentMilestone: boolean;
      location?: string;
      city?: string;
      lat?: number;
      lng?: number;
    }[] = [];
    const seen = new Set<string>();

    for (const { evt, isParentMilestone } of rawEvents) {
      const statusText = evt.event_desc || evt.status || evt.description || evt.name || evt.event_code;
      const rawDate = evt.event_time || evt.event_datetime || evt.event_date || evt.date || evt.timestamp || evt.ata;
      const formattedDate = this._formatDate(rawDate);
      const locText = evt.event_location?.name || evt.event_location?.city || evt.event_location?.rawDescription || evt.location || '';
      const cityText = evt.event_location?.city || locText;

      const rawLat = evt.event_location?.latitude ?? evt.latitude;
      const rawLng = evt.event_location?.longitude ?? evt.longitude;
      let lat = typeof rawLat === 'number' ? rawLat : rawLat ? Number(rawLat) : undefined;
      let lng = typeof rawLng === 'number' ? rawLng : rawLng ? Number(rawLng) : undefined;

      if (lat === undefined || lng === undefined || isNaN(lat) || isNaN(lng)) {
        const fallback = resolveIndianCityCoords(cityText) || resolveIndianCityCoords(locText) || resolveIndianCityCoords(statusText);
        if (fallback) {
          lat = fallback.lat;
          lng = fallback.lng;
        } else {
          lat = undefined;
          lng = undefined;
        }
      }

      if (statusText) {
        const key = `${statusText}_${rawDate}_${locText}`;
        if (!seen.has(key)) {
          seen.add(key);
          let displayStatus = statusText;
          if (locText && !statusText.toLowerCase().includes(locText.toLowerCase())) {
            displayStatus = isParentMilestone ? `${statusText}, ${locText}` : `${statusText} - ${locText}`;
          }
          timeline.push({
            status: displayStatus,
            date: formattedDate || 'Completed',
            rawDate: rawDate ? new Date(rawDate).getTime() : 0,
            isParentMilestone: Boolean(isParentMilestone),
            location: locText || undefined,
            city: cityText || undefined,
            lat,
            lng,
          });
        }
      }
    }

    // Sort timeline so latest is first (descending); if timestamps tie, place parent milestone above its sub-event
    timeline.sort((a, b) => {
      if (b.rawDate !== a.rawDate) return b.rawDate - a.rawDate;
      if (a.isParentMilestone !== b.isParentMilestone) return a.isParentMilestone ? -1 : 1;
      return 0;
    });

    result.timeline = timeline.map(t => ({
      status: t.status,
      date: t.date,
      location: t.location,
      lat: t.lat,
      lng: t.lng,
    }));

    // Build chronological routePoints for the live cargo map
    const chronological = [...timeline].reverse();
    const routePoints: RoutePoint[] = [];

    const pushUniqueRoutePoint = (pt: RoutePoint) => {
      const prev = routePoints[routePoints.length - 1];
      if (
        prev &&
        Math.abs(prev.lat - pt.lat) < 0.03 &&
        Math.abs(prev.lng - pt.lng) < 0.03
      ) {
        // Update status/date on existing hub pin to the latest milestone at this hub
        if (pt.status) prev.status = pt.status;
        if (pt.date) prev.date = pt.date;
        if (pt.name && prev.type !== 'origin') prev.name = pt.name;
        return;
      }
      routePoints.push(pt);
    };

    // 1. Seed Origin if available
    const originLat = shipping.origin?.latitude ? Number(shipping.origin.latitude) : undefined;
    const originLng = shipping.origin?.longitude ? Number(shipping.origin.longitude) : undefined;
    const originFallback = resolveIndianCityCoords(result.pickupLocation);
    const finalOriginLat = originLat && !isNaN(originLat) ? originLat : originFallback?.lat;
    const finalOriginLng = originLng && !isNaN(originLng) ? originLng : originFallback?.lng;

    if (finalOriginLat !== undefined && finalOriginLng !== undefined && result.pickupLocation) {
      pushUniqueRoutePoint({
        name: result.pickupLocation,
        city: shipping.origin?.city || result.pickupLocation,
        status: 'Origin Hub',
        date: chronological[0]?.date,
        lat: finalOriginLat,
        lng: finalOriginLng,
        type: 'origin',
      });
    }

    // 2. Add chronological scan hubs
    for (const item of chronological) {
      if (item.lat !== undefined && item.lng !== undefined) {
        pushUniqueRoutePoint({
          name: item.location || item.city || item.status,
          city: item.city,
          status: item.status,
          date: item.date,
          lat: item.lat,
          lng: item.lng,
          type: 'transit',
        });
      }
    }

    // Mark the first point as origin and latest reached point as current
    if (routePoints.length > 0) {
      routePoints[0].type = 'origin';
      const currentIdx = routePoints.length - 1;
      routePoints[currentIdx].type = 'current';
      const curr = routePoints[currentIdx];
      result.currentCoordinates = {
        lat: curr.lat,
        lng: curr.lng,
        label: curr.name,
      };
      if (!result.currentLocation) {
        result.currentLocation = curr.name;
      }
    }

    // 3. Append Destination point if shipment has not yet reached destination
    if (result.deliveryDestination) {
      const destLat = shipping.destination?.latitude ? Number(shipping.destination.latitude) : undefined;
      const destLng = shipping.destination?.longitude ? Number(shipping.destination.longitude) : undefined;
      const destFallback = resolveIndianCityCoords(result.deliveryDestination);
      const finalDestLat = destLat && !isNaN(destLat) ? destLat : destFallback?.lat;
      const finalDestLng = destLng && !isNaN(destLng) ? destLng : destFallback?.lng;

      const isDelivered = (result.remark || '').toLowerCase().includes('delivered');
      if (finalDestLat !== undefined && finalDestLng !== undefined && !isDelivered) {
        const lastPt = routePoints[routePoints.length - 1];
        if (
          !lastPt ||
          Math.abs(lastPt.lat - finalDestLat) >= 0.05 ||
          Math.abs(lastPt.lng - finalDestLng) >= 0.05
        ) {
          routePoints.push({
            name: result.deliveryDestination,
            city: result.deliveryDestination,
            status: result.deliveryDate ? `Destination (ETA: ${result.deliveryDate})` : 'Delivery Destination',
            date: result.deliveryDate,
            lat: finalDestLat,
            lng: finalDestLng,
            type: 'destination',
          });
        }
      }
    }

    if (routePoints.length > 0) {
      result.routePoints = routePoints;
    }

    // Reject empty/unrecognized responses that contain neither events nor route details
    if (result.timeline.length === 0 && !result.pickupLocation && !result.deliveryDestination) {
      return null;
    }

    // Pickup Date (earliest event)
    if (timeline.length > 0) {
      result.pickupDate = timeline[timeline.length - 1].date;
    }

    // Current Status / Remark (prefer latest top-level milestone like "In Transit, GURGAON Hub")
    if (latestTopLevelStatus) {
      result.remark = latestTopLevelStatus;
    } else if (timeline.length > 0) {
      result.remark = timeline[0].status;
    } else if (raw.containerDetails?.status) {
      const s = raw.containerDetails.status;
      result.remark = s.charAt(0).toUpperCase() + s.slice(1);
    } else if (raw.status) {
      result.remark = raw.status;
    }

    return result;
  }
}

export const dpWorldAdapter = new DPWorldAdapter();
