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
 * alphanumeric characters (e.g. 430803710, 1847004934, BR-84920, or DP World container codes).
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
 * with Allcargo Gati and DP World / CARGOES production systems in real-time.
 */
export async function lookupShipment(rawId: string, carrier?: string): Promise<TrackingLookupResult> {
  const cleaned = cleanTrackingId(rawId);
  const portalFallbackUrl = BUSINESS.tracking.portalUrl;

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
        message: `Consignment "${cleaned}" could not be verified at this moment. Please check the carrier portal or contact dispatch.`,
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
      'If your move was booked or packed recently, vehicle dispatch manifests typically take 2 to 4 hours to index into the central tracking system after transit vehicle seal verification. You can check the live carrier portal or contact your move coordinator directly for immediate updates.',
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
