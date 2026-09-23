import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import PageLayout from '@/components/PageLayout';
import PageHero from '@/components/PageHero';
import SectionHeader from '@/components/ui/SectionHeader';
import FAQAccordion from '@/components/FAQAccordion';
import JsonLd from '@/components/JsonLd';
import { generatePageMetadata } from '@/lib/metadata';
import { BUSINESS, getTelUrl, getWhatsAppUrl } from '@/lib/business';
import ReviewsInteractiveList from './ReviewsInteractiveList';

export const metadata: Metadata = generatePageMetadata({
  title: 'Customer Reviews | Bharat Relocators',
  description:
    'Read customer reviews and experiences with Bharat Relocators across household shifting, vehicle transportation, office relocation and other moving services.',
  path: '/testimonials',
});

const pageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Customer Reviews — Bharat Relocators',
  description:
    'Read customer reviews and experiences with Bharat Relocators across household shifting, vehicle transportation, office relocation and other moving services.',
  mainEntity: {
    '@type': 'MovingCompany',
    name: BUSINESS.name,
    legalName: BUSINESS.legalName,
    telephone: BUSINESS.phone.primary,
    email: BUSINESS.email.primary,
    address: {
      '@type': 'PostalAddress',
      streetAddress: BUSINESS.address.street,
      addressLocality: BUSINESS.address.locality,
      addressRegion: BUSINESS.address.state,
      postalCode: BUSINESS.address.postalCode,
      addressCountry: BUSINESS.address.country,
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: BUSINESS.google.rating,
      reviewCount: BUSINESS.google.reviewCount,
    },
  },
};

const recurringThemes = [
  {
    title: 'Careful Item-by-Item Protection',
    desc: 'Reviewers consistently highlight that modular furniture, electronics, and delicate items are wrapped and crated individually so they arrive intact without transit damage.',
    quote: '“They even took care of each and every item... ensuring that nothing got broken.”',
  },
  {
    title: 'Helpful & Responsive Coordination',
    desc: 'Customers frequently note the value of direct coordinator support (such as Mr. Subhasish and the dispatch team), providing prompt answers and clear guidance.',
    quote: '“Mr. Subhasish is very helpful and the whole team was superb... answered my queries with patience.”',
  },
  {
    title: 'Punctual & Time-Bound Execution',
    desc: 'Clients appreciate that crews arrive as scheduled, complete multi-layer packing within planned hours, and coordinate timely arrival at the destination.',
    quote: '“Managed to pack all my stuff in just a couple hours and were able to complete everything on time.”',
  },
  {
    title: 'Reliable Long-Distance & Remote Logistics',
    desc: 'Several customers relocated while already present at their destination city (e.g. Bangalore), noting smooth pickup from home or showrooms without requiring their physical presence.',
    quote: '“Since I was already in Bangalore, they coordinated the pickup from my home smoothly, making it completely hassle-free.”',
  },
];

const serviceCards = [
  {
    title: 'Household Shifting',
    category: 'Residential Relocation',
    description: 'Complete home moves with 5-layer packing, modular furniture dismantling, and room-by-room placement.',
    href: '/household-shifting',
  },
  {
    title: 'Car Transportation',
    category: 'Automotive Logistics',
    description: 'Enclosed car carriers with hydraulic ramp loading and wheel chocks for scratch-free intercity haulage.',
    href: '/car-shifting',
  },
  {
    title: 'Bike Transport',
    category: 'Two-Wheeler Express',
    description: 'Custom wooden crating, mirror removal, bubble wrap wrapping, and dedicated two-wheeler slots.',
    href: '/bike-shifting',
  },
  {
    title: 'Parcel & Cargo',
    category: 'Express Intercity',
    description: 'Fast doorstep parcel pickup, luggage delivery, and partial consignments connecting 230+ cities.',
    href: '/parcel-shifting',
  },
  {
    title: 'Office Relocation',
    category: 'Corporate Shifting',
    description: 'Phased corporate moves with anti-static IT server packing and weekend execution to eliminate downtime.',
    href: '/office-relocation',
  },
  {
    title: 'International Moving',
    category: 'Global Freight',
    description: 'Air and ocean freight logistics with export-grade packaging and customs paperwork assistance.',
    href: '/international-moving',
  },
];

const reviewsFaqs = [
  {
    q: 'Where do these customer reviews come from?',
    a: 'Our reviews are submitted directly by verified customers on our Google Business Profile and through post-move handover sign-off feedback across Kolkata and PAN-India relocation routes.',
  },
  {
    q: 'Can I read reviews for a specific type of relocation?',
    a: 'Yes. You can use the category filter tabs in the review section above to view customer feedback specifically for household moves, bike transport, office shifting, or courier parcel shipping.',
  },
  {
    q: 'Do all moves follow the same experience?',
    a: 'While every relocation follows our standardized planning and multi-layer packing protocols, individual move experiences vary depending on cargo volume, transit distance, elevator accessibility, and timing.',
  },
  {
    q: 'How can I speak with a coordinator before booking?',
    a: 'You can call our primary coordination desk directly at +91 91230 46504, start a conversation on WhatsApp, or submit an inquiry through our online quote form for quick assistance.',
  },
  {
    q: 'How can I request an exact moving quote?',
    a: 'Simply share your pickup and drop locations, preferred moving date, and general list of belongings via our online quote tool or by phone to receive a transparent written estimate with zero hidden fees.',
  },
];

export default function TestimonialsPage() {
  return (
    <PageLayout>
      <JsonLd data={pageSchema} />

      {/* 1. Page Hero */}
      <PageHero
        label="Customer Reviews"
        title="Real Experiences From People Who Moved With Us"
        subtitle="Every move is different. Our customer reviews offer a glimpse into how people experienced the planning, handling, transportation and handover process with Bharat Relocators."
        breadcrumbs={[{ label: 'Reviews' }]}
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

      {/* 2. Review Overview / Trust Introduction */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block bg-red-50 text-[#E53935] text-xs font-semibold uppercase tracking-[0.08em] px-4 py-1.5 rounded-full mb-4 border border-red-200">
              Trust & Transparency
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#082F52] mb-4 tracking-tight">
              Why Customer Feedback Matters
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-8">
              Moving involves personal belongings, tight schedules, and careful coordination across unfamiliar routes. First-hand customer experiences offer practical insights into how our team handles challenges, communicates with clients, and delivers on moving day.
            </p>
          </div>

          {/* 3. Review Summary / Rating Information */}
          <div className="bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200 max-w-4xl mx-auto">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl bg-[#082F52] text-white flex flex-col items-center justify-center font-display shrink-0 shadow-sm">
                  <span className="text-2xl font-black leading-none">{BUSINESS.google.rating.toFixed(1)}</span>
                  <span className="text-[10px] text-[#F28A32] font-bold mt-0.5">★★★★★</span>
                </div>
                <div>
                  <div className="text-lg font-bold text-[#082F52] font-display">
                    Google Business Rating
                  </div>
                  <div className="text-xs sm:text-sm text-slate-500">
                    Based on <strong className="text-[#082F52] font-semibold">{BUSINESS.google.reviewCount}+ verified reviews</strong>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-3">
                <a
                  href={BUSINESS.google.mapsShortlink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white hover:bg-slate-100 text-[#082F52] text-xs font-bold px-4 py-2.5 rounded-xl border border-slate-200 shadow-2xs transition-colors"
                >
                  <span>Verify on Google Maps</span>
                  <span className="text-[#E53935]">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4 & 5. Customer Reviews Main Section with Interactive Service Filtering */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Verified Experiences"
            title="What Our Customers Say"
            subtitle="Browse authentic reviews from verified clients across household shifting, vehicle transport, corporate shifting, and express courier moves."
          />

          <ReviewsInteractiveList />
        </div>
      </section>

      {/* 6. What Customers Commonly Mention */}
      <section className="py-20 sm:py-24 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Recurring Feedback"
            title="What Customers Commonly Highlight"
            subtitle="Patterns and themes that consistently appear across our customer reviews and post-move feedback."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {recurringThemes.map((theme) => (
              <div
                key={theme.title}
                className="bg-slate-50 rounded-2xl p-6 border border-slate-200 flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-base sm:text-lg font-bold font-display text-[#082F52] mb-2">
                    {theme.title}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                    {theme.desc}
                  </p>
                </div>
                <div className="bg-white p-3.5 rounded-xl border border-slate-200/80 text-xs text-slate-700 italic border-l-4 border-l-[#E53935]">
                  {theme.quote}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Review Transparency */}
      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <span className="inline-block bg-white text-slate-600 text-[11px] font-bold uppercase tracking-wider px-3.5 py-1 rounded-full mb-3 border border-slate-200">
            Authentic Perspectives
          </span>
          <h3 className="text-xl sm:text-2xl font-bold font-display text-[#082F52] mb-3">
            Every Review Represents One Customer&apos;s Experience
          </h3>
          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto">
            Every relocation is subject to distinct variables &mdash; including volume, stairwell accessibility, weather conditions, highway traffic, and specialized handling needs. We treat each new move as a fresh commitment to structured planning and disciplined care.
          </p>
        </div>
      </section>

      {/* 8. Service Connection */}
      <section className="py-20 sm:py-24 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Our Services"
            title="Planning a Move of Your Own?"
            subtitle="Explore the specialized relocation services behind our customer reviews, each equipped with trained crews and purpose-built vehicles."
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
                  <span>Explore Service</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. FAQ / Review Questions */}
      <section className="py-20 sm:py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Customer Questions"
            title="Frequently Asked Questions About Our Reviews"
            subtitle="Common questions regarding our review verification, customer feedback, and how we approach every relocation."
          />

          <FAQAccordion items={reviewsFaqs} />

          <div className="mt-10 text-center">
            <p className="text-sm text-slate-600 mb-2">Have more questions about planning your move?</p>
            <Link
              href="/faqs"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-[#082F52] hover:text-[#E53935] transition-colors"
            >
              <span>Visit Our Complete FAQ Knowledge Base</span>
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 10. Final CTA / Conversion */}
      <section className="py-20 sm:py-24 bg-[#071A2B] text-white border-t border-white/10 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#1478B5]/15 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#E53935]/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="inline-block bg-white/10 border border-white/20 text-[#F28A32] text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full mb-4">
            Plan Your Move
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white mb-5 tracking-tight leading-tight">
            Planning Your Move?
          </h2>

          <p className="text-white/80 text-base sm:text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
            Read what other customers have experienced, then tell us about your own move. We&apos;ll help you understand the right relocation service for your requirements.
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
              <span>Call Us: {BUSINESS.phone.primaryFormatted}</span>
            </a>

            <a
              href={getWhatsAppUrl('Hi Bharat Relocators, I read your customer reviews and would like to get a moving quote.')}
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
