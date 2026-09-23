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
 * GoogleAnalytics Component
 *
 * 1. Loads GA4 gtag.js script asynchronously (strategy="afterInteractive").
 * 2. Injects GA4 initialization script.
 * 3. Provides global delegated click listeners for telephone, WhatsApp, and tracking links across the entire site,
 *    enabling complete conversion tracking without turning server components into client components.
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
      const locationOverride = anchor.getAttribute('data-analytics-location');

      // 1. Explicit Action Override
      if (actionOverride === 'track_shipment_launch') {
        trackShipmentLaunch();
        return;
      }

      // 2. Telephone link tracking (click_to_call)
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

      // 3. WhatsApp link tracking (whatsapp_chat_start)
      if (
        href.includes('wa.me') ||
        href.includes('api.whatsapp.com') ||
        href.includes('whatsapp.com')
      ) {
        let location = locationOverride;
        if (!location) {
          if (anchor.classList.contains('wa-pulse') || anchor.closest('.wa-pulse')) {
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

      // 4. Shipment Tracking Portal link
      if (href.includes('trackingmore.com') || href.includes('trackingmore.org')) {
        trackShipmentLaunch();
      }
    };

    document.addEventListener('click', handleGlobalClick, { capture: true });
    return () => {
      document.removeEventListener('click', handleGlobalClick, { capture: true });
    };
  }, []);

  if (!GA_MEASUREMENT_ID) {
    return null;
  }

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />
      <Script
        id="ga4-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
              send_page_view: true,
              anonymize_ip: true
            });
          `,
        }}
      />
    </>
  );
}

