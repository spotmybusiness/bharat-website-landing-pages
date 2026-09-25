import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import PageLayout from '@/components/PageLayout';
import PageHero from '@/components/PageHero';
import SectionHeader from '@/components/ui/SectionHeader';
import JsonLd from '@/components/JsonLd';
import { generatePageMetadata } from '@/lib/metadata';
import { FAQS } from '@/data/faqs';
import { BUSINESS, getTelUrl, getWhatsAppUrl } from '@/lib/business';
import FAQInteractiveView from './FAQInteractiveView';

export const metadata: Metadata = generatePageMetadata({
  title: 'Frequently Asked Questions | Bharat Relocators',
  description:
    'Find answers to common questions about household shifting, vehicle transportation, parcel and cargo movement, office relocation, international moving, quotes, packing, transportation and delivery with Bharat Relocators.',
  path: '/faqs',
});

const serviceCards = [
  {
    title: 'Household Shifting',
    category: 'Residential Moves',
    description: 'Complete home relocation with 5-layer packing, modular furniture dismantling, and room-by-room placement.',
    href: '/household-shifting',
  },
  {
    title: 'Car Transportation',
    category: 'Automotive Logistics',
    description: 'Enclosed car carrier trailers with hydraulic ramps, wheel-locking chocks, and scratch-free intercity haulage.',
    href: '/car-shifting',
  },
  {
    title: 'Bike Transport',
    category: 'Two-Wheeler Express',
    description: 'Custom wooden crating, bubble wrap wrapping, mirror removal, and dedicated two-wheeler slots.',
    href: '/bike-shifting',
  },
  {
    title: 'Parcel & Cargo',
    category: 'Express Intercity',
    description: 'Fast doorstep parcel pickup, student luggage delivery, and partial consignments connecting 230+ cities.',
    href: '/parcel-shifting',
  },
  {
    title: 'Office Relocation',
    category: 'Corporate Shifting',
    description: 'Phased corporate shifting with anti-static IT server packing and weekend execution to eliminate downtime.',
    href: '/office-relocation',
  },
  {
    title: 'International Moving',
    category: 'Global Freight',
    description: 'Air and ocean freight logistics with export packaging, customs paperwork guidance, and overseas partner handling.',
    href: '/international-moving',
  },
];

export default function FAQsPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  };

  return (
    <PageLayout>
      <JsonLd data={faqSchema} />

      {/* 1. Page Hero */}
      <PageHero
        label="Frequently Asked Questions"
        title="Everything You Need to Know Before Your Move"
        subtitle="From planning and packing to transportation and delivery, find answers to common questions about moving with Bharat Relocators in Kolkata and across India."
        breadcrumbs={[{ label: 'FAQ' }]}
        /* Hero Visual Image: Drop your image in /public/images/ and set src="/images/your-image.png" */
        image={
          <img
            src="/images/faq.png"
            alt="Frequently asked questions about moving with Bharat Relocators in Kolkata"
          />
        }
        actions={
          <>
            <Link
              href="/get-a-quote"
              className="inline-flex items-center gap-2 bg-[#E53935] hover:bg-[#c62828] text-white font-semibold text-sm px-6 py-3.5 rounded-xl shadow-md transition-colors"
            >
              Get Free Moving Quote
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
            <Link
              href="/#services"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 text-white font-semibold text-sm px-5 py-3.5 rounded-xl border border-white/20 transition-colors"
            >
              Explore Our Services
            </Link>
          </>
        }
      />

      {/* 2. Interactive FAQ Knowledge Base (Search, Topic Tabs & Accordions) */}
      <section className="py-20 sm:py-24 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Knowledge Base"
            title="Browse by Topic or Search Below"
            subtitle="Explore categorized answers to common questions regarding preparation, packing, timelines, pricing, and handover."
          />

          <FAQInteractiveView />
        </div>
      </section>

      {/* 3. Explore Related Services */}
      <section className="py-20 sm:py-24 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Relocation Divisions"
            title="Learn More About Our Specialized Services"
            subtitle="Every move type follows dedicated operational workflows, packaging standards, and vehicle allocations."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceCards.map((service) => (
              <div
                key={service.title}
                className="bg-slate-50 rounded-2xl p-6 border border-slate-200 shadow-2xs flex flex-col justify-between group hover:border-[#1478B5]/50 transition-all duration-200"
              >
                <div>
                  <span className="text-[10px] font-bold text-[#F28A32] uppercase tracking-wider block mb-1">
                    {service.category}
                  </span>
                  <h3 className="text-base font-bold font-display text-[#082F52] mb-2 group-hover:text-[#E53935] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                <Link
                  href={service.href}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#082F52] group-hover:text-[#E53935] transition-colors pt-3 border-t border-slate-200/80"
                >
                  <span>Explore Service Details</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Still Have Questions Support Section */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <span className="inline-block bg-white text-slate-600 text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full mb-3 border border-slate-200">
            Dedicated Support
          </span>

          <h3 className="text-2xl sm:text-3xl font-bold font-display text-[#082F52] mb-3">
            Still Have Questions About Your Move?
          </h3>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-8 max-w-xl mx-auto">
            Every move has its own requirements. If you cannot find the answer you need, get in touch with Bharat Relocators and discuss your move directly.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/get-a-quote"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#E53935] hover:bg-[#c62828] text-white font-semibold text-sm px-7 py-3.5 rounded-xl shadow-md transition-colors"
            >
              Get Free Moving Quote
            </Link>

            <a
              href={getTelUrl(BUSINESS.phone.primary)}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#082F52] hover:bg-[#071A2B] text-white font-semibold text-sm px-6 py-3.5 rounded-xl shadow-md transition-colors"
            >
              <svg className="w-4 h-4 text-[#F28A32]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
              </svg>
              <span>Call: {BUSINESS.phone.primaryFormatted}</span>
            </a>

            <a
              href={getWhatsAppUrl('Hi Bharat Relocators, I have a question about planning my upcoming move.')}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#25D366]/20 hover:bg-[#25D366]/30 text-[#25D366] hover:text-[#1ebe57] font-semibold text-sm px-6 py-3.5 rounded-xl border border-[#25D366]/40 transition-colors"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.558 4.116 1.535 5.847L.057 23.5l5.82-1.527A11.953 11.953 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.891 0-3.66-.5-5.195-1.378l-.373-.22-3.453.906.921-3.365-.242-.388A9.954 9.954 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
              </svg>
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

      {/* 5. Final CTA / Conversion */}
      <section className="py-20 sm:py-24 bg-[#071A2B] text-white border-t border-white/10 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#1478B5]/15 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#E53935]/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="inline-block bg-white/10 border border-white/20 text-[#F28A32] text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full mb-4">
            Plan Your Move
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white mb-5 tracking-tight leading-tight">
            Ready to Plan Your Move?
          </h2>

          <p className="text-white/80 text-base sm:text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
            Tell us what you are moving, where it needs to go, and what support you need. We&apos;ll help you take the next step with an exact, all-inclusive quote.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/get-a-quote"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#E53935] hover:bg-[#c62828] text-white font-semibold text-sm px-8 py-4 rounded-xl shadow-lg transition-colors"
            >
              <span>Get Free Moving Quote</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>

            <a
              href={getTelUrl(BUSINESS.phone.primary)}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 text-white font-semibold text-sm px-7 py-4 rounded-xl border border-white/20 transition-colors"
            >
              <svg className="w-4 h-4 text-[#F28A32]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
              </svg>
              <span>Call Now: {BUSINESS.phone.primaryFormatted}</span>
            </a>

            <a
              href={getWhatsAppUrl('Hi Bharat Relocators, I am ready to plan my move and would like to get a quote.')}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#25D366]/20 hover:bg-[#25D366]/30 text-[#25D366] hover:text-white font-semibold text-sm px-6 py-4 rounded-xl border border-[#25D366]/40 transition-colors"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.558 4.116 1.535 5.847L.057 23.5l5.82-1.527A11.953 11.953 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.891 0-3.66-.5-5.195-1.378l-.373-.22-3.453.906.921-3.365-.242-.388A9.954 9.954 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
              </svg>
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
