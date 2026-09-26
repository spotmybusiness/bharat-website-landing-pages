'use client';

import React, { useEffect } from 'react';
import {
  GA_MEASUREMENT_ID,
  trackClickToCall,
  trackWhatsAppChatStart,
  trackShipmentLaunch,
} from '@/lib/analytics';

/**
 * Google Analytics
 *
 * GA4 is loaded only after the browser has finished its initial work.
 * This keeps analytics off the critical loading path while preserving
 * click/conversion tracking.
 */
export default function GoogleAnalytics() {
  useEffect(() => {
    if (!GA_MEASUREMENT_ID) return;

    let scriptLoaded = false;

    const loadAnalytics = () => {
      if (scriptLoaded || document.querySelector(`script[data-ga4="${GA_MEASUREMENT_ID}"]`)) {
        return;
      }

      scriptLoaded = true;

      window.dataLayer = window.dataLayer || [];

      window.gtag = function gtag(
        command: 'config' | 'event' | 'js' | 'set',
        targetIdOrEventName: string | Date,
        params?: Record<string, unknown>
      ) {
        window.dataLayer?.push([command, targetIdOrEventName, params]);
      };

      window.gtag('js', new Date());

      window.gtag('config', GA_MEASUREMENT_ID, {
        page_path: window.location.pathname,
        send_page_view: true,
        anonymize_ip: true,
      });

      const script = document.createElement('script');
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
      script.dataset.ga4 = GA_MEASUREMENT_ID;

      document.head.appendChild(script);
    };

    const idleCallback =
      'requestIdleCallback' in window
        ? window.requestIdleCallback(loadAnalytics, { timeout: 5000 })
        : window.setTimeout(loadAnalytics, 3000);

    const handleGlobalClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      if (!target) return;

      const anchor = target.closest('a');
      if (!anchor) return;

      const href = anchor.getAttribute('href') || '';
      const actionOverride = anchor.getAttribute('data-analytics-action');
      const locationOverride = anchor.getAttribute('data-analytics-location');

      if (actionOverride === 'track_shipment_launch') {
        trackShipmentLaunch();
        return;
      }

      if (href.startsWith('tel:')) {
        let location = locationOverride;

        if (!location) {
          if (anchor.closest('header')) {
            location = 'header';
          } else if (anchor.closest('footer')) {
            location = 'footer';
          } else if (anchor.closest('#quote')) {
            location = 'quote_section';
          } else if (anchor.closest('section')) {
            location = 'content_section';
          } else {
            location = 'general_link';
          }
        }

        trackClickToCall({ link_location: location });
        return;
      }

      if (
        href.includes('wa.me') ||
        href.includes('api.whatsapp.com') ||
        href.includes('whatsapp.com')
      ) {
        let location = locationOverride;

        if (!location) {
          if (
            anchor.classList.contains('wa-pulse') ||
            anchor.closest('.wa-pulse')
          ) {
            location = 'floating_button';
          } else if (anchor.closest('#quote')) {
            location = 'quote_section';
          } else if (anchor.closest('header')) {
            location = 'header';
          } else if (anchor.closest('footer')) {
            location = 'footer';
          } else {
            location = 'inline_cta';
          }
        }

        trackWhatsAppChatStart({ button_location: location });
        return;
      }

      if (
        href.includes('trackingmore.com') ||
        href.includes('trackingmore.org')
      ) {
        trackShipmentLaunch();
      }
    };

    document.addEventListener('click', handleGlobalClick, { capture: true });

    return () => {
      if ('cancelIdleCallback' in window && typeof idleCallback === 'number') {
        window.cancelIdleCallback(idleCallback);
      } else {
        window.clearTimeout(idleCallback);
      }

      document.removeEventListener('click', handleGlobalClick, { capture: true });
    };
  }, []);

  if (!GA_MEASUREMENT_ID) {
    return null;
  }

  return null;
}
