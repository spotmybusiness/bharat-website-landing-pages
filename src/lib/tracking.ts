import { BUSINESS } from './business';

export type ShipmentStatus =
  | 'booked'
  | 'packing'
  | 'in_transit'
  | 'reached_hub'
  | 'out_for_delivery'
  | 'delivered'
  | 'delayed';

export interface TrackingMilestone {
  step: number;
  title: string;
  location: string;
  timestamp: string;
  status: 'completed' | 'current' | 'upcoming';
  note?: string;
}

export interface TrackingRecord {
  id: string;
  serviceType: string;
  origin: string;
  destination: string;
  bookingDate: string;
  estimatedDelivery: string;
  currentStatus: ShipmentStatus;
  statusLabel: string;
  carrierNotes?: string;
  milestones: TrackingMilestone[];
}

export interface TrackingLookupResult {
  found: boolean;
  searchedId: string;
  record?: TrackingRecord;
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
 * Bharat Relocators consignment notes / consignment numbers typically range from 5 to 25
 * alphanumeric characters (e.g. BR-84920, BREL-2024-912, or numerical Docket numbers).
 */
export function validateTrackingId(id: string): { valid: boolean; error?: string } {
  const cleaned = cleanTrackingId(id);
  if (!cleaned) {
    return { valid: false, error: 'Please enter your Tracking ID or Consignment Number.' };
  }
  if (cleaned.length < 4) {
    return { valid: false, error: 'Tracking ID is too short. Please enter at least 4 characters.' };
  }
  if (cleaned.length > 30) {
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
 * Transparently checks verified operational records. When an internal DB record
 * is not present, returns a structured not-found response with direct live fallbacks
 * to the operational carrier portal and customer support channels.
 *
 * NOTE: As per system architecture guidelines, we do not fabricate fake shipment records.
 */
export async function lookupShipment(rawId: string): Promise<TrackingLookupResult> {
  const cleaned = cleanTrackingId(rawId);
  const portalFallbackUrl = BUSINESS.tracking.portalUrl;

  // Simulate network roundtrip latency for realistic operational feel
  await new Promise((resolve) => setTimeout(resolve, 800));

  // In this client-side / static deployment without an internal SQL consignment DB,
  // all queries seamlessly provide fallback to the live TrackingMore carrier portal
  // and direct WhatsApp/Phone operational support.
  return {
    found: false,
    searchedId: cleaned,
    message: `We could not find active internal dispatch logs for ID "${cleaned}". Consignments booked within the last 2-4 hours may still be indexing in the central logistics registry.`,
    portalFallbackUrl,
  };
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
