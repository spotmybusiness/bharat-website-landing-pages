import { UNVERIFIED } from '@/lib/business';

/**
 * GA4 Measurement ID
 * Resolved from NEXT_PUBLIC_GA_MEASUREMENT_ID environment variable with fallback to documented ID.
 */
export const GA_MEASUREMENT_ID =
  process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || UNVERIFIED.ga4MeasurementId;

/**
 * Global window type augmentations for gtag and dataLayer
 */
declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (
      command: 'config' | 'event' | 'js' | 'set',
      targetIdOrEventName: string | Date,
      params?: Record<string, unknown>
    ) => void;
  }
}

/**
 * Safe generic event tracker
 * Ensures execution only on client side when gtag is loaded.
 * Catches all errors silently so analytics failures never impact UX.
 */
export function trackEvent(
  eventName: string,
  params?: Record<string, unknown>
): void {
  if (typeof window === 'undefined') return;

  try {
    if (typeof window.gtag === 'function') {
      window.gtag('event', eventName, params);
    }

    if (process.env.NODE_ENV === 'development') {
      console.log(`[GA4 Track Event]: ${eventName}`, params || {});
    }
  } catch {
    // Fail silently in production
  }
}

/**
 * 1. generate_lead
 * Trigger: Genuine successful quote form submission.
 * Data Minimization: Strictly no PII (no name, phone, address, move date).
 */
export interface GenerateLeadParams {
  service_type?: string;
}

export function trackGenerateLead(params?: GenerateLeadParams): void {
  trackEvent('generate_lead', {
    service_type: params?.service_type || 'Unspecified',
    currency: 'INR',
  });
}

/**
 * 2. click_to_call
 * Trigger: Intentional click/tap on telephone links (tel:+919123046504).
 * Data Minimization: Sends only UI link location, no user personal information.
 */
export interface ClickToCallParams {
  link_location: string;
}

export function trackClickToCall(params: ClickToCallParams): void {
  trackEvent('click_to_call', {
    link_location: params.link_location,
  });
}

/**
 * 3. whatsapp_chat_start
 * Trigger: Intentional click/tap on WhatsApp links or buttons.
 * Data Minimization: Sends only button location, no message content or personal information.
 */
export interface WhatsAppChatStartParams {
  button_location: string;
}

export function trackWhatsAppChatStart(params: WhatsAppChatStartParams): void {
  trackEvent('whatsapp_chat_start', {
    button_location: params.button_location,
  });
}

/**
 * 4. track_shipment_launch
 * Trigger: Intentional click to open the tracking portal.
 * Data Minimization: Strictly no LR numbers, consignment IDs, customer names, or addresses.
 */
export function trackShipmentLaunch(): void {
  trackEvent('track_shipment_launch', {
    portal_destination: 'trackingmore',
  });
}

/**
 * 5. view_pillar_guide
 * Trigger: Meaningful entry/view of one of the 3 pillar educational guides.
 * Data Minimization: Sends only the static guide slug.
 */
export interface ViewPillarGuideParams {
  guide_slug: string;
}

export function trackViewPillarGuide(params: ViewPillarGuideParams): void {
  trackEvent('view_pillar_guide', {
    guide_slug: params.guide_slug,
  });
}
