'use client';

import React, { useEffect } from 'react';
import Script from 'next/script';
import {
  GA_MEASUREMENT_ID,
  trackClickToCall,
  trackWhatsAppChatStart,
  trackShipmentLaunch,
} from '@/lib/analytics';

/**
 * Google Analytics
 *
 * GA4 is loaded with lazyOnload so it does not compete with the
 * critical rendering path and initial page performance.
 */
export default function GoogleAnalytics() {
  useEffect(() => {
    if (!GA_MEASUREMENT_ID) return;

    const handleGlobalClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      if (!target) return;

      const anchor = target.closest('a');
      if (!anchor) return;

      const href = anchor.getAttribute('href') || '';
      const actionOverride = anchor.getAttribute('data-analytics-action');
      const locationOverride = anchor.getAttribute(
        'data-analytics-location'
      );

      // Explicit action override
      if (actionOverride === 'track_shipment_launch') {
        trackShipmentLaunch();
        return;
      }

      // Telephone link tracking
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

      // WhatsApp link tracking
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

      // Shipment tracking portal
      if (
        href.includes('trackingmore.com') ||
        href.includes('trackingmore.org')
      ) {
        trackShipmentLaunch();
      }
    };

    document.addEventListener('click', handleGlobalClick, {
      capture: true,
    });

    return () => {
      document.removeEventListener('click', handleGlobalClick, {
        capture: true,
      });
    };
  }, []);

  if (!GA_MEASUREMENT_ID) {
    return null;
  }

  return (
    <>
      {/* Load GA4 only after the page has finished loading */}
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />

      {/* Initialize GA4 */}
      <Script
        id="ga4-init"
        strategy="lazyOnload"
      >
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}', {
            page_path: window.location.pathname,
            send_page_view: true,
            anonymize_ip: true
          });
        `}
      </Script>
    </>
  );
}
