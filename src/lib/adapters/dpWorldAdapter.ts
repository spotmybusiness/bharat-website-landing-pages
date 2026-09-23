/**
 * DP World / CARGOES Live Tracking Adapter
 * 
 * Directly queries the live DP World / CARGOES production tracking services:
 * - Primary: https://api-fr.cargoes.com/track/v5 (standard JSON without X-Encoded-Payload)
 * - Fallback: https://api-fr.cargoes.com/track/v4
 * - Authenticated: https://tracking.searates.com (if DP_WORLD_API_KEY is configured)
 * 
 * Strict live data only - no mock or synthetic data.
 */

export interface DPWorldTimelineEvent {
  status: string;
  date: string;
  rawDate?: number;
}

export interface DPWorldTrackingData {
  carrier: string;
  trackingNumber: string;
  pickupLocation?: string;
  pickupDate?: string;
  deliveryDestination?: string;
  deliveryDate?: string;
  currentLocation?: string;
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
        error: 'Invalid tracking number length. Please enter a valid DP World container, booking, or docket number.'
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
   */
  private async _trackLiveProduction(trackingNumber: string): Promise<DPWorldTrackResult> {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), this.timeout);

    try {
      // 1. Try primary track/v5 endpoint (without X-Encoded-Payload to receive standard JSON)
      const v5Url = `https://api-fr.cargoes.com/track/v5?trackingId=${encodeURIComponent(trackingNumber)}`;
      const response = await fetch(v5Url, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Origin': 'https://www.logistics.dpworld.com',
          'Referer': 'https://www.logistics.dpworld.com/container-tracking',
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
        },
        signal: controller.signal
      });

      clearTimeout(timeoutId);

      if (response.ok) {
        const json = await response.json();

        // Check if trackings array is returned and has content
        if (json.data && Array.isArray(json.data.trackings) && json.data.trackings.length > 0) {
          const rawTracking = json.data.trackings[0];
          const normalized = this.normalizeResponse(trackingNumber, rawTracking);
          if (normalized) {
            return {
              success: true,
              data: normalized,
              message: 'DP World tracking details retrieved successfully.'
            };
          }
        }

        // DP World standard "not found" response format:
        // { status: 'success', message: 'No bookings found in the last 6 months', code: '40417' }
        if (json.code === '40417' || (typeof json.message === 'string' && json.message.toLowerCase().includes('no bookings found'))) {
          return {
            success: false,
            code: 'NOT_FOUND',
            message: `No active DP World shipments or container bookings found for: ${trackingNumber}.`
          };
        }
      }

      // 2. Try fallback track/v4 endpoint
      const v4Controller = new AbortController();
      const v4TimeoutId = setTimeout(() => v4Controller.abort(), 8000);
      try {
        const v4Url = `https://api-fr.cargoes.com/track/v4?trackingId=${encodeURIComponent(trackingNumber)}`;
        const v4Res = await fetch(v4Url, {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
            'Origin': 'https://www.logistics.dpworld.com',
            'Referer': 'https://www.logistics.dpworld.com/',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
          },
          signal: v4Controller.signal
        });
        clearTimeout(v4TimeoutId);

        if (v4Res.ok) {
          const v4Json = await v4Res.json();
          if (v4Json.data && Array.isArray(v4Json.data.trackings) && v4Json.data.trackings.length > 0) {
            const normalized = this.normalizeResponse(trackingNumber, v4Json.data.trackings[0]);
            if (normalized) {
              return {
                success: true,
                data: normalized,
                message: 'DP World tracking details retrieved successfully.'
              };
            }
          }

          if (v4Json.data && Array.isArray(v4Json.data.failedTrackings) && v4Json.data.failedTrackings.includes(trackingNumber)) {
            return {
              success: false,
              code: 'NOT_FOUND',
              message: `No DP World shipment records found for: ${trackingNumber}.`
            };
          }
        }
      } catch {
        // Fallback error ignored
      }

      return {
        success: false,
        code: 'NOT_FOUND',
        message: `No DP World shipment records found for tracking number: ${trackingNumber}.`
      };
    } catch (error: unknown) {
      const isAbort = error instanceof Error && error.name === 'AbortError';
      if (isAbort) {
        return {
          success: false,
          code: 'TIMEOUT',
          message: 'DP World tracking request timed out. Please try again.'
        };
      }
      const msg = error instanceof Error ? error.message : String(error);
      return {
        success: false,
        code: 'NETWORK_ERROR',
        message: `Failed to connect to DP World tracking service: ${msg}`
      };
    }
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
        signal: controller.signal
      });

      clearTimeout(timeoutId);

      if (response.status === 401 || response.status === 403) {
        return {
          success: false,
          code: 'AUTHENTICATION_FAILED',
          message: 'DP World API key authentication failed. Please check credentials.'
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
          message: `DP World service error: HTTP ${response.status}`
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
   * e.g. 2026-09-17T11:14:30 -> 17 Sep 2026, 11:14
   */
  private _formatDate(dateStr?: string): string {
    if (!dateStr) return '';
    try {
      const d = new Date(dateStr);
      if (isNaN(d.getTime())) return dateStr;
      const day = String(d.getDate()).padStart(2, '0');
      const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      const month = months[d.getMonth()];
      const year = d.getFullYear();
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
    if (!raw) return null;

    const result: DPWorldTrackingData = {
      carrier: raw.trackingType === 'express' ? 'DP World Express' : 'DP World / CARGOES',
      trackingNumber: raw.identifier?.identifierValue || trackingNumber,
      timeline: []
    };

    // Shipping details (origin, destination, ETA, packages)
    const shipping = raw.shippingDetails || {};

    // Origin
    if (shipping.origin) {
      const parts: string[] = [];
      if (shipping.origin.name) parts.push(shipping.origin.name);
      if (shipping.origin.city) parts.push(shipping.origin.city);
      if (shipping.origin.pincode) parts.push(`(${shipping.origin.pincode})`);
      result.pickupLocation = parts.join(', ') || shipping.origin.code;
    }

    // Destination
    if (shipping.destination) {
      const parts: string[] = [];
      if (shipping.destination.name) parts.push(shipping.destination.name);
      if (shipping.destination.city) parts.push(shipping.destination.city);
      if (shipping.destination.pincode) parts.push(`(${shipping.destination.pincode})`);
      result.deliveryDestination = parts.join(', ') || shipping.destination.code;
    }

    // ETA or Delivery Date
    if (shipping.placeOfDestinationEta || raw.eta) {
      result.deliveryDate = this._formatDate(shipping.placeOfDestinationEta || raw.eta);
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
    const rawEvents: any[] = [];

    // Check containersTrackingEvents first
    if (raw.containersTrackingEvents) {
      const keys = Object.keys(raw.containersTrackingEvents);
      if (keys.length > 0 && Array.isArray(raw.containersTrackingEvents[keys[0]])) {
        const cList = raw.containersTrackingEvents[keys[0]];
        for (const item of cList) {
          if (Array.isArray(item.sub_events) && item.sub_events.length > 0) {
            for (const sub of item.sub_events) {
              rawEvents.push(sub);
            }
          } else {
            rawEvents.push(item);
          }
        }
      }
    }

    // Check bookingTrackingEvents
    if (Array.isArray(raw.bookingTrackingEvents)) {
      for (const item of raw.bookingTrackingEvents) {
        rawEvents.push(item);
      }
    }

    // Check generic events
    if (Array.isArray(raw.events)) {
      for (const item of raw.events) {
        rawEvents.push(item);
      }
    }

    // Format and deduplicate timeline
    const timeline: { status: string; date: string; rawDate: number }[] = [];
    const seen = new Set<string>();

    for (const evt of rawEvents) {
      const statusText = evt.event_desc || evt.status || evt.description || evt.name || evt.event_code;
      const rawDate = evt.event_time || evt.event_datetime || evt.event_date || evt.date || evt.timestamp || evt.ata;
      const formattedDate = this._formatDate(rawDate);
      const locText = evt.event_location?.name || evt.event_location?.city || evt.event_location?.rawDescription || evt.location || '';

      if (statusText) {
        const key = `${statusText}_${rawDate}_${locText}`;
        if (!seen.has(key)) {
          seen.add(key);
          let displayStatus = statusText;
          if (locText && !statusText.toLowerCase().includes(locText.toLowerCase())) {
            displayStatus = `${statusText} - ${locText}`;
          }
          timeline.push({
            status: displayStatus,
            date: formattedDate || 'Completed',
            rawDate: rawDate ? new Date(rawDate).getTime() : 0
          });
        }
      }
    }

    // Sort timeline so latest is first (descending)
    timeline.sort((a, b) => b.rawDate - a.rawDate);

    result.timeline = timeline.map(t => ({ status: t.status, date: t.date }));

    // Pickup Date (earliest event)
    if (timeline.length > 0) {
      result.pickupDate = timeline[timeline.length - 1].date;
    }

    // Current Status / Remark
    if (raw.containerDetails?.status) {
      const s = raw.containerDetails.status;
      result.remark = s.charAt(0).toUpperCase() + s.slice(1);
    } else if (timeline.length > 0) {
      result.remark = timeline[0].status;
    } else if (raw.status) {
      result.remark = raw.status;
    }

    return result;
  }
}

export const dpWorldAdapter = new DPWorldAdapter();
