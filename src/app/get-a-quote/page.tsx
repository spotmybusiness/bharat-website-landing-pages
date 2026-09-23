import React from 'react';
import type { Metadata } from 'next';
import PageLayout from '@/components/PageLayout';
import PageHero from '@/components/PageHero';
import QuoteSection from '@/app/components/QuoteSection';
import { generatePageMetadata } from '@/lib/metadata';
import { BUSINESS, getTelUrl, getWhatsAppUrl } from '@/lib/business';

export const metadata: Metadata = generatePageMetadata({
  title: 'Get a Free Moving Quote',
  description:
    'Get an instant, transparent relocation estimate from Bharat Relocators for home shifting, car/bike transport, and office relocation in Kolkata and PAN India.',
  path: '/get-a-quote',
});

export default function GetAQuotePage() {
  return (
    <PageLayout>
      <PageHero
        label="Relocation Cost Estimation"
        title={
          <>
            Get Your Free <span className="text-[#F28A32]">Relocation Quote</span>
          </>
        }
        subtitle="Transparent pricing with zero hidden surcharges. Share your route and moving inventory to receive an accurate, customized logistical estimate."
        breadcrumbs={[{ label: 'Get a Quote' }]}
        actions={
          <>
            <a
              href={getTelUrl(BUSINESS.phone.primary)}
              className="inline-flex items-center gap-2 bg-[#E53935] hover:bg-[#c62828] text-white font-semibold text-sm px-6 py-3.5 rounded-xl shadow-md transition-colors"
            >
              <span>Call: {BUSINESS.phone.primaryFormatted}</span>
            </a>
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm px-5 py-3.5 rounded-xl shadow-md transition-colors"
            >
              <span>WhatsApp Direct</span>
            </a>
          </>
        }
      />

      {/* Embedded Quote Estimation Suite */}
      <QuoteSection />
    </PageLayout>
  );
}

