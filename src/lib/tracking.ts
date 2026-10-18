import { BUSINESS } from './business';

export type ShipmentStatus =
  | 'booked'
  | 'packing'
  | 'in_transit'
  | 'reached_hub'
  | 'out_for_delivery'
  | 'delivered'
  | 'delayed';

export interface LiveTimelineEvent {
  status: string;
  date: string;
  isBooked?: boolean;
  location?: string;
  lat?: number;
  lng?: number;
}

export interface RoutePoint {
  name: string;
  city?: string;
  status?: string;
  date?: string;
  lat: number;
  lng: number;
  type: 'origin' | 'transit' | 'current' | 'destination';
}

export interface LiveShipmentData {
  carrier: string;
  trackingNumber: string;
  pickupLocation?: string;
  pickupDate?: string;
  deliveryDestination?: string;
  deliveryDate?: string;
  receiversName?: string;
  remark?: string;
  gaRemark?: string;
  podUrl?: string;
  gstInvoiceUrl?: string;
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
  timeline: LiveTimelineEvent[];
}

export interface TrackingLookupResult {
  found: boolean;
  searchedId: string;
  data?: LiveShipmentData;
  message?: string;
  portalFallbackUrl: string;
  carrierFallbackUrl?: string;
}

/**
 * Built-in coordinate directory for major Indian logistics hubs & cities.
 * Used when a carrier endpoint provides a city/hub name without explicit lat/lng (e.g. destination ETA city or Allcargo hubs).
 */
const INDIA_LOGISTICS_COORDS: Record<string, { lat: number; lng: number }> = {
  kolkata: { lat: 22.5726, lng: 88.3639 },
  taratala: { lat: 22.4974, lng: 88.2261 },
  hooghly: { lat: 22.622, lng: 88.4139 },
  dankuni: { lat: 22.6778, lng: 88.2944 },
  howrah: { lat: 22.5958, lng: 88.2636 },
  asansol: { lat: 23.6739, lng: 86.9524 },
  durgapur: { lat: 23.5204, lng: 87.3119 },
  bardhaman: { lat: 23.2324, lng: 87.8615 },
  malda: { lat: 25.0108, lng: 88.1411 },
  siliguri: { lat: 26.7271, lng: 88.3953 },
  bagdogra: { lat: 26.6987, lng: 88.3117 },
  jalpaiguri: { lat: 26.5215, lng: 88.7196 },
  darjiling: { lat: 27.041, lng: 88.2663 },
  darjeeling: { lat: 27.041, lng: 88.2663 },
  guwahati: { lat: 26.1445, lng: 91.7362 },
  patna: { lat: 25.5575, lng: 85.2185 },
  gaya: { lat: 24.7914, lng: 85.0002 },
  muzaffarpur: { lat: 26.1197, lng: 85.391 },
  ranchi: { lat: 23.3441, lng: 85.3096 },
  jamshedpur: { lat: 22.8046, lng: 86.2029 },
  dhanbad: { lat: 23.7957, lng: 86.4304 },
  bhubaneswar: { lat: 20.2961, lng: 85.8245 },
  cuttack: { lat: 20.4625, lng: 85.883 },
  varanasi: { lat: 25.2602, lng: 82.8466 },
  rajatalab: { lat: 25.2602, lng: 82.8466 },
  prayagraj: { lat: 25.4358, lng: 81.8463 },
  allahabad: { lat: 25.4358, lng: 81.8463 },
  kanpur: { lat: 26.4206, lng: 80.3081 },
  lucknow: { lat: 26.8467, lng: 80.9462 },
  agra: { lat: 27.1767, lng: 78.0081 },
  meerut: { lat: 28.9845, lng: 77.7064 },
  ghaziabad: { lat: 28.6692, lng: 77.4538 },
  noida: { lat: 28.5355, lng: 77.391 },
  'greater noida': { lat: 28.4744, lng: 77.504 },
  gurgaon: { lat: 28.3045, lng: 76.8233 },
  gurugram: { lat: 28.4595, lng: 77.0266 },
  faridabad: { lat: 28.4089, lng: 77.3178 },
  delhi: { lat: 28.6139, lng: 77.209 },
  'new delhi': { lat: 28.6139, lng: 77.209 },
  chandigarh: { lat: 30.7333, lng: 76.7794 },
  ambala: { lat: 30.3782, lng: 76.7767 },
  ludhiana: { lat: 30.901, lng: 75.8573 },
  jalandhar: { lat: 31.326, lng: 75.5762 },
  amritsar: { lat: 31.634, lng: 74.8723 },
  dehradun: { lat: 30.3165, lng: 78.0322 },
  jaipur: { lat: 26.9124, lng: 75.7873 },
  udaipur: { lat: 24.5854, lng: 73.7125 },
  jodhpur: { lat: 26.2389, lng: 73.0243 },
  kota: { lat: 25.2138, lng: 75.8648 },
  ahmedabad: { lat: 23.0225, lng: 72.5714 },
  surat: { lat: 21.1702, lng: 72.8311 },
  vadodara: { lat: 22.3072, lng: 73.1812 },
  rajkot: { lat: 22.3039, lng: 70.8022 },
  mumbai: { lat: 19.076, lng: 72.8777 },
  'navi mumbai': { lat: 19.033, lng: 73.0297 },
  thane: { lat: 19.2183, lng: 72.9781 },
  bhiwandi: { lat: 19.2813, lng: 73.0483 },
  pune: { lat: 18.5204, lng: 73.8567 },
  nagpur: { lat: 21.1458, lng: 79.0882 },
  nashik: { lat: 19.9975, lng: 73.7898 },
  indore: { lat: 22.7196, lng: 75.8577 },
  bhopal: { lat: 23.2599, lng: 77.4126 },
  gwalior: { lat: 26.2183, lng: 78.1828 },
  jabalpur: { lat: 23.1815, lng: 79.9864 },
  raipur: { lat: 21.2514, lng: 81.6296 },
  hyderabad: { lat: 17.385, lng: 78.4867 },
  secunderabad: { lat: 17.4399, lng: 78.4983 },
  visakhapatnam: { lat: 17.6868, lng: 83.2185 },
  vijayawada: { lat: 16.5062, lng: 80.648 },
  bengaluru: { lat: 12.9716, lng: 77.5946 },
  bangalore: { lat: 12.9716, lng: 77.5946 },
  mysuru: { lat: 12.2958, lng: 76.6394 },
  mangaluru: { lat: 12.9141, lng: 74.856 },
  chennai: { lat: 13.0827, lng: 80.2707 },
  coimbatore: { lat: 11.0168, lng: 76.9558 },
  madurai: { lat: 9.9252, lng: 78.1198 },
  kochi: { lat: 9.9312, lng: 76.2673 },
  ernakulam: { lat: 9.9816, lng: 76.2999 },
  trivandrum: { lat: 8.5241, lng: 76.9366 },
  thiruvananthapuram: { lat: 8.5241, lng: 76.9366 },
  goa: { lat: 15.2993, lng: 74.124 },
};

export function resolveIndianCityCoords(text?: string): { lat: number; lng: number } | null {
  if (!text) return null;
  const lower = text.toLowerCase().trim();
  if (INDIA_LOGISTICS_COORDS[lower]) {
    return INDIA_LOGISTICS_COORDS[lower];
  }
  for (const [key, coords] of Object.entries(INDIA_LOGISTICS_COORDS)) {
    if (lower.includes(key)) {
      return coords;
    }
  }
  return null;
}

/**
 * Returns the best direct tracking portal link based on consignment format:
 * - 1847xxxxxx (10 digits) -> DP World Express India Live Portal
 * - 8-10 digits -> Allcargo Gati Tracking Portal
 * - 4 letters + 7 digits -> DP World Container Tracking
 * - Default -> Bharat Relocators Tracking Portal
 */
export function getTrackingPortalUrl(trackingId: string): string {
  const clean = trackingId.trim().toUpperCase();
  if (/^1847\d{6}$/.test(clean)) {
    return `https://www.logistics.dpworld.com/tracking/in/express?shipment=${encodeURIComponent(clean)}`;
  }
  if (/^\d{8,10}$/.test(clean)) {
    return `https://www.allcargologistics.com/tracking?docket_no=${encodeURIComponent(clean)}`;
  }
  if (/^[A-Z]{4}\d{7}$/.test(clean)) {
    return `https://www.logistics.dpworld.com/container-tracking?booking=${encodeURIComponent(clean)}`;
  }
  return `${BUSINESS.tracking.portalUrl}?nums=${encodeURIComponent(clean)}`;
}

/**
 * Normalizes input tracking identifier string by removing surrounding whitespace
 * and common non-alphanumeric noise characters.
 */
export function cleanTrackingId(raw: string): string {
  return raw.trim().toUpperCase();
}

/**
 * Validates tracking ID structure.
 * Bharat Relocators consignment notes / consignment numbers typically range from 4 to 35
 * alphanumeric characters (e.g. 430803710, 1847004934, BR-84920, or container codes).
 */
export function validateTrackingId(id: string): { valid: boolean; error?: string } {
  const cleaned = cleanTrackingId(id);
  if (!cleaned) {
    return { valid: false, error: 'Please enter your Tracking ID or Consignment Number.' };
  }
  if (cleaned.length < 4) {
    return { valid: false, error: 'Tracking ID is too short. Please enter at least 4 characters.' };
  }
  if (cleaned.length > 35) {
    return { valid: false, error: 'Tracking ID is too long. Please verify your consignment document.' };
  }
  // Alphanumeric + hyphens/slashes
  const validPattern = /^[A-Z0-9\-_/]+$/;
  if (!validPattern.test(cleaned)) {
    return {
      valid: false,
      error: 'Tracking ID may only contain letters, numbers, hyphens, and slashes.',
    };
  }
  return { valid: true };
}

/**
 * Primary shipment lookup engine.
 * Directly contacts the live Next.js tracking API route (/api/track) which coordinates
 * with central logistics production systems in real-time.
 */
export async function lookupShipment(rawId: string, carrier?: string): Promise<TrackingLookupResult> {
  const cleaned = cleanTrackingId(rawId);
  const portalFallbackUrl = getTrackingPortalUrl(cleaned);

  try {
    const res = await fetch('/api/track', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        trackingNumber: cleaned,
        carrier,
      }),
    });

    if (!res.ok) {
      return {
        found: false,
        searchedId: cleaned,
        message: `Consignment "${cleaned}" could not be verified at this moment. Please check the tracking portal or contact dispatch.`,
        portalFallbackUrl,
      };
    }

    const json = await res.json();

    if (json.success && json.data) {
      return {
        found: true,
        searchedId: cleaned,
        data: json.data as LiveShipmentData,
        message: json.message || 'Consignment located successfully.',
        portalFallbackUrl,
      };
    }

    return {
      found: false,
      searchedId: cleaned,
      message: json.message || `We could not find active internal dispatch logs for ID "${cleaned}". Consignments booked recently may still be indexing in the central logistics registry.`,
      portalFallbackUrl,
    };
  } catch {
    return {
      found: false,
      searchedId: cleaned,
      message: `Unable to connect to logistics servers. Please try again or connect directly with our dispatch desk.`,
      portalFallbackUrl,
    };
  }
}

export const TRACKING_FAQS = [
  {
    question: 'Where can I find my Tracking ID / Consignment Number?',
    answer:
      'Your Tracking ID is printed at the top-right corner of your official Bharat Relocators Consignment Note (Lorry Receipt / Bilty). It is also sent to your registered mobile number via SMS and WhatsApp once your goods are inspected and dispatched.',
  },
  {
    question: 'How frequently are shipment tracking checkpoints updated?',
    answer:
      'Checkpoints are updated at key operational milestones: consignment pickup, hub departure, intermediate logistics hub scans, arrival at destination warehouse, and when dispatching out for final delivery.',
  },
  {
    question: 'Why does my Tracking ID show no status yet?',
    answer:
      'If your move was booked or packed recently, vehicle dispatch manifests typically take 2 to 4 hours to index into the central tracking system after transit vehicle seal verification. You can check the tracking portal or contact your move coordinator directly for immediate updates.',
  },
  {
    question: 'Can I change my delivery address or schedule while in transit?',
    answer:
      'Yes, route alterations or requested holds at our local destination warehouse can be coordinated with your dedicated Move Manager, subject to transit corridor feasibility.',
  },
  {
    question: 'Is car or bike tracking supported on this page?',
    answer:
      'Yes. Vehicle consignments (car carriers and crated motorcycle transports) use the same consignment note number assigned during the pre-loading vehicle condition inspection report.',
  },
];
