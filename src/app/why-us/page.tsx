import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import PageLayout from '@/components/PageLayout';
import PageHero from '@/components/PageHero';
import SectionHeader from '@/components/ui/SectionHeader';
import FAQAccordion from '@/components/FAQAccordion';
import JsonLd from '@/components/JsonLd';
import MandatoryDocumentsBlock from '@/components/MandatoryDocumentsBlock';
import VerifiedCredentialsBlock from '@/components/VerifiedCredentialsBlock';
import { generatePageMetadata } from '@/lib/metadata';
import { BUSINESS, getSiteUrl, getTelUrl, getWhatsAppUrl } from '@/lib/business';
import { getOrganizationId, getFAQSchema, buildGraphSchema } from '@/lib/schema';
import { VERIFIED_REVIEWS } from '@/data/reviews';

export const metadata: Metadata = generatePageMetadata({
  title: 'Why Choose Bharat Relocators | Packers and Movers in Kolkata',
  description:
    'Why Kolkata households and offices choose Bharat Relocators: 5-ply dish-barrels, 4mm EPE foam, 8-ft para-lane Tata Ace shuttles, dual Haltu & Behala hubs, and GSTIN 19AAWFB0500G1ZL billing.',
  path: '/why-us',
});

// 6 Core Reasons
const coreReasons = [
  {
    num: '01',
    title: 'Structured Pre-Move Planning',
    desc: 'Before move day, our coordinators measure CFT cargo volume, reserve MyGate/NKDA/NDITA service-lift slots, verify 8-ft para-lane Tata Ace shuttle access, and align dispatch with Kolkata Traffic Police No-Entry windows along EM Bypass, Vidyasagar Setu, and D.H. Road.',
    icon: (
      <svg className="w-6 h-6 text-[#E53935]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
  {
    num: '02',
    title: '5-Layer Packing & Crating',
    desc: 'Every load uses 5-ply dish-barrel cartons, 4mm EPE foam sheets, 23-micron waterproof stretch film, corrugated edge guards, and ISPM-15 pinewood crating for LED TVs, marble idols, glassware, and glass dining tops.',
    icon: (
      <svg className="w-6 h-6 text-[#E53935]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
  },
  {
    num: '03',
    title: 'Service-Specific Divisions',
    desc: 'We assign specialized rigs and teams by cargo type: 14ft/17ft/19ft steel-roof closed containers for homes, hydraulic-ramp car carriers with wheel chocks, pinewood-crated bike bays, and anti-static ESD server crates for Salt Lake Sector V & New Town offices.',
    icon: (
      <svg className="w-6 h-6 text-[#E53935]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
      </svg>
    ),
  },
  {
    num: '04',
    title: 'Sealed Container Linehaul',
    desc: 'Goods travel inside weather-sealed 14ft, 17ft, or 19ft closed steel containers fitted with nylon ratchet lashing belts and moisture-barrier tarpaulins along NH-19 and NH-16 intercity corridors.',
    icon: (
      <svg className="w-6 h-6 text-[#E53935]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10l1 1h1m8-1h1l1-1v-3.65a1 1 0 00-.22-.624l-3.48-4.35A1 1 0 0011.52 6H10" />
      </svg>
    ),
  },
  {
    num: '05',
    title: 'Dual-Branch Dispatch & Billing',
    desc: 'Your Haltu (700078) or Behala (700061) coordinator issues an itemized written survey quote upfront, shares your Stamped Consignment Note (LR/Bilty) at loading, and sends scheduled highway checkpoint calls until delivery.',
    icon: (
      <svg className="w-6 h-6 text-[#E53935]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
  {
    num: '06',
    title: 'Signed Manifest & GST Handover',
    desc: 'Crews unload cartons into room-tagged zones, reassemble hydraulic beds and modular wardrobes, tally each box against your numbered carbon-copy packing list, clear used film and cartons, and hand over your GSTIN 19AAWFB0500G1ZL Tax Invoice.',
    icon: (
      <svg className="w-6 h-6 text-[#E53935]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
];

// Comparison items: Basic Transportation vs. Structured Relocation
const comparisonRows = [
  {
    aspect: 'Scope of Service',
    basic: 'Truck-only hire; customer manages packing, stairs, and unloading',
    structured: 'Written CFT survey, 5-layer packing, Tata Ace shuttle, linehaul, and room setup',
  },
  {
    aspect: 'Packing & Materials',
    basic: 'Recycled thin cartons with minimal tape or water protection',
    structured: '5-ply dish-barrel cartons, 4mm EPE foam, 23-micron stretch film, pinewood crates',
  },
  {
    aspect: 'Item Vulnerability',
    basic: 'Uniform stacking without crating for glass, TVs, or two-wheelers',
    structured: 'ISPM-15 pinewood crating, anti-static ESD sleeves, and wheel-chocked auto bays',
  },
  {
    aspect: 'Transit Visibility',
    basic: 'Irregular driver calls with no formal consignment note',
    structured: 'Stamped LR/Bilty tracking ID, Haltu/Behala coordinator check-ins, and 2-hour pre-arrival call',
  },
  {
    aspect: 'Destination Handover',
    basic: 'Curbside unloading with no carpentry reassembly or GST bill',
    structured: 'Room-wise placement, bed/wardrobe reassembly, carbon-copy manifest sign-off & SAC 9965/9987 GST invoice',
  },
];

// Practical customer benefits
const customerBenefits = [
  {
    title: 'Locked CFT & Access Scope',
    desc: 'Volume, floor level, MyGate/NKDA/NDITA lift timing, and 8-ft para-lane shuttle requirements are itemized in writing before crew arrival.',
  },
  {
    title: 'Monsoon-Ready Waterproofing',
    desc: '23-micron stretch film, 4mm EPE foam, and steel-roof closed containers protect furniture and electronics during heavy Kolkata rains.',
  },
  {
    title: 'Direct Haltu & Behala Desks',
    desc: 'Speak directly with our Haltu HQ (+91 91230 46504) or Behala Branch (+91 84201 22693) rather than an outsourced call center.',
  },
  {
    title: '4-Document Accountability',
    desc: 'Receive your Written Survey Quote, Numbered Carbon-Copy Packing List (or VCR), Stamped LR/Bilty, and GSTIN 19AAWFB0500G1ZL Tax Invoice.',
  },
  {
    title: 'Corporate & PSU Reimbursement Ready',
    desc: 'CBIC SAC 9965 (GTA) and SAC 9987 (Composite Packing) compliant invoices accepted by banks, PSUs, and corporate HR desks.',
  },
];

// Decision-Support FAQs
const decisionFaqs = [
  {
    q: 'What should I consider before choosing a relocation service?',
    a: 'Look beyond the lowest price quote. Verify active GST registration (ours is 19AAWFB0500G1ZL under SAC 9965 / 9987), check whether the mover issues a written pre-move CFT estimate, confirm 5-ply cartons and waterproof EPE/stretch-film packing, and verify physical local offices.',
  },
  {
    q: 'How does Bharat Relocators plan a move?',
    a: 'Every relocation starts with a virtual or on-site survey from our Haltu (700078) or Behala (700061) office to measure CFT volume, check MyGate/NKDA/NDITA service-lift slots, assess 8-ft para-lane Tata Ace shuttle needs, and schedule loading around Kolkata Traffic Police No-Entry hours.',
  },
  {
    q: 'Does every type of move follow the same process?',
    a: 'No. Household moves focus on 5-ply dish-barrels, EPE foam, and furniture assembly; car transport uses hydraulic ramps, wheel chocks, and a Vehicle Condition Report (VCR); bike shifts use timber crating; and office moves in Sector V or New Town use anti-static ESD crates on weekend schedules.',
  },
  {
    q: 'How are fragile or special items handled?',
    a: 'Glassware, crockery, LED TVs, framed mirrors, and marble idols are cushioned with honeycomb kraft paper, 4mm EPE foam, 23-micron stretch film, corrugated corner guards, and custom ISPM-15 pinewood crating for high-risk pieces.',
  },
  {
    q: 'How can I stay informed during my move?',
    a: 'At loading you receive your Stamped Consignment Note (LR/Bilty) tracking ID and direct phone/WhatsApp contact for your Haltu or Behala coordinator, with status updates at dispatch, key highway checkpoint calls, and a 2-hour pre-arrival notice at destination.',
  },
];

const pageSchema = buildGraphSchema([
  {
    '@type': 'WebPage',
    name: 'Why Choose Bharat Relocators',
    description:
      'Why Kolkata families and offices choose Bharat Relocators: 5-ply dish-barrels, 4mm EPE foam, 8-ft para-lane Tata Ace shuttles, dual Haltu & Behala hubs, and GSTIN 19AAWFB0500G1ZL billing.',
    url: `${getSiteUrl()}/why-us`,
    mainEntity: {
      '@id': getOrganizationId(),
    },
  },
  getFAQSchema(decisionFaqs),
]);

export default function WhyUsPage() {
  const featuredReviews = VERIFIED_REVIEWS.slice(0, 3);

  return (
    <PageLayout>
      <JsonLd data={pageSchema} />

      {/* 1. Page Hero */}
      <PageHero
        label="Why Bharat Relocators"
        title="More Than Moving a Load From One Place to Another."
        subtitle="Bharat Relocators provides structured relocation management across Kolkata and PAN India, coordinating every stage from initial survey and multi-layer packing to highway transit and room-by-room setup."
        breadcrumbs={[{ label: 'Why Us' }]}
        /* Hero Visual Image: Drop your image in /public/images/ and set src="/images/your-image.png" */
        image={
          <div className="rounded-2xl border border-white/20 bg-white/5 backdrop-blur-sm p-3 shadow-[0_4px_24px_rgba(0,0,0,0.25)]">
            <img
              src="/images/why_us.jpeg"
              alt="Bharat Relocators relocation team coordinating residential and commercial moves in Kolkata"
            />
          </div>
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
              href="/process"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 text-white font-semibold text-sm px-5 py-3.5 rounded-xl border border-white/20 transition-colors"
            >
              See How We Work
            </Link>
          </>
        }
      />

      {/* 2. Why Choosing a Relocation Partner Matters */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block bg-red-50 text-[#E53935] text-xs font-semibold uppercase tracking-[0.08em] px-4 py-1.5 rounded-full mb-4 border border-red-200">
              Beyond Transportation
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#082F52] mb-4 tracking-tight">
              A Move Has More Moving Parts Than the Truck
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Bharat Relocators plans every Kolkata and PAN-India relocation around real on-ground constraints—narrow 8-ft <em>para</em> lanes, society service-lift permissions, Kolkata Traffic Police No-Entry windows, monsoon-grade wrapping, and documented destination handover.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
              <div className="w-10 h-10 rounded-xl bg-red-50 text-[#E53935] flex items-center justify-center font-bold text-sm mb-4">
                01
              </div>
              <h3 className="font-bold text-[#082F52] text-lg font-display mb-2">
                Kolkata Site &amp; Access Audit
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Securing MyGate, NKDA, or NDITA service-lift slots, verifying 8-ft <em>para</em> lane <em>Tata Ace</em> shuttle needs, and timing trucks around EM Bypass, Vidyasagar Setu, and D.H. Road No-Entry restrictions.
              </p>
            </div>

            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
              <div className="w-10 h-10 rounded-xl bg-red-50 text-[#E53935] flex items-center justify-center font-bold text-sm mb-4">
                02
              </div>
              <h3 className="font-bold text-[#082F52] text-lg font-display mb-2">
                5-Layer Moisture &amp; Shock Seal
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Wrapping appliances and furniture in 4mm EPE foam, 5-ply dish-barrel cartons, and 23-micron waterproof stretch film, then lashing inside 14ft, 17ft, or 19ft closed steel containers.
              </p>
            </div>

            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
              <div className="w-10 h-10 rounded-xl bg-red-50 text-[#E53935] flex items-center justify-center font-bold text-sm mb-4">
                03
              </div>
              <h3 className="font-bold text-[#082F52] text-lg font-display mb-2">
                Room Setup &amp; Manifest Sign-Off
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Unloading into tagged rooms, reassembling beds and wardrobes, reconciling every box against your carbon-copy packing list, clearing used wrap, and delivering your GST invoice.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Core Reasons to Choose Bharat Relocators */}
      <section className="py-20 sm:py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Core Differentiators"
            title="Six Practical Reasons to Move With Us"
            subtitle="Rather than relying on slogans or unsupported superlatives, our service is defined by concrete operational standards that protect your belongings."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreReasons.map((reason) => (
              <div
                key={reason.num}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs hover:shadow-lg hover:border-[#1478B5]/40 transition-all duration-200 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center group-hover:scale-105 transition-transform">
                      {reason.icon}
                    </div>
                    <span className="text-xl font-extrabold text-slate-300 font-display">
                      {reason.num}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold font-display text-[#082F52] mb-3 group-hover:text-[#E53935] transition-colors">
                    {reason.title}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed">
                    {reason.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. What These Differences Mean for You */}
      <section className="py-20 sm:py-24 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="The Difference in Practice"
            title="What This Means When You're the One Moving"
            subtitle="Here is how a structured relocation approach contrasts with basic truck transportation, and what tangible advantages it brings to your moving day."
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left: Concept Comparison Table */}
            <div className="lg:col-span-7 bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs">
              <div className="mb-6">
                <span className="text-xs font-bold text-[#E53935] uppercase tracking-wider">
                  Service Comparison
                </span>
                <h3 className="text-xl font-bold font-display text-[#082F52] mt-1">
                  Basic Transportation vs. Structured Relocation
                </h3>
              </div>

              <div className="space-y-4">
                {comparisonRows.map((row) => (
                  <div
                    key={row.aspect}
                    className="bg-white rounded-xl p-4 border border-slate-200/80 text-xs sm:text-sm"
                  >
                    <div className="font-bold text-[#082F52] mb-2 font-display">
                      {row.aspect}
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-slate-600">
                      <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-200/60">
                        <span className="font-semibold text-slate-500 block text-[11px] uppercase tracking-wider mb-1">
                          Basic Transport
                        </span>
                        {row.basic}
                      </div>
                      <div className="bg-red-50/50 p-2.5 rounded-lg border border-red-100">
                        <span className="font-semibold text-[#E53935] block text-[11px] uppercase tracking-wider mb-1">
                          Structured Relocation
                        </span>
                        {row.structured}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Practical Customer Benefits */}
            <div className="lg:col-span-5 space-y-4">
              <div className="mb-4">
                <span className="text-xs font-bold text-[#F28A32] uppercase tracking-wider">
                  Customer Value
                </span>
                <h3 className="text-xl font-bold font-display text-[#082F52] mt-1">
                  Tangible Benefits for Your Move
                </h3>
              </div>

              {customerBenefits.map((benefit) => (
                <div
                  key={benefit.title}
                  className="bg-slate-50 p-4 rounded-xl border border-slate-200 hover:border-[#F28A32]/40 transition-colors"
                >
                  <h4 className="font-bold text-[#082F52] text-sm font-display mb-1 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E53935]" />
                    {benefit.title}
                  </h4>
                  <p className="text-slate-600 text-xs sm:text-[13px] leading-relaxed pl-3.5">
                    {benefit.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. 4 Mandatory Move Documents + Specialized Divisions */}
      <section className="py-16 sm:py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <MandatoryDocumentsBlock
            heading="4 Mandatory Documents You Receive on Every Move"
            serviceContext="Every Bharat Relocators booking—whether local Kolkata or PAN-India—includes four signed paper and digital records so billing, inventory count, and claim accountability stay verifiable."
          />

          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs text-center">
            <span className="inline-block bg-red-50 text-[#E53935] text-xs font-semibold uppercase tracking-[0.08em] px-4 py-1.5 rounded-full mb-3 border border-red-200">
              Specialized Moving Divisions
            </span>
            <h3 className="text-xl sm:text-2xl font-display font-bold text-[#082F52] mb-2">
              Explore Protocols &amp; Pricing by Service
            </h3>
            <p className="text-slate-600 text-sm max-w-2xl mx-auto mb-5">
              Review dedicated packing specs, closed-container options, and our 2026 Kolkata cost guide.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-2.5">
              <Link
                href="/household-shifting"
                className="bg-slate-50 hover:bg-[#082F52] text-[#082F52] hover:text-white border border-slate-200 text-xs sm:text-sm font-semibold px-4 py-2 rounded-full transition-colors"
              >
                Household Shifting
              </Link>
              <Link
                href="/car-shifting"
                className="bg-slate-50 hover:bg-[#082F52] text-[#082F52] hover:text-white border border-slate-200 text-xs sm:text-sm font-semibold px-4 py-2 rounded-full transition-colors"
              >
                Car Transportation
              </Link>
              <Link
                href="/bike-shifting"
                className="bg-slate-50 hover:bg-[#082F52] text-[#082F52] hover:text-white border border-slate-200 text-xs sm:text-sm font-semibold px-4 py-2 rounded-full transition-colors"
              >
                Bike Transport
              </Link>
              <Link
                href="/parcel-shifting"
                className="bg-slate-50 hover:bg-[#082F52] text-[#082F52] hover:text-white border border-slate-200 text-xs sm:text-sm font-semibold px-4 py-2 rounded-full transition-colors"
              >
                Parcel &amp; Cargo
              </Link>
              <Link
                href="/office-relocation"
                className="bg-slate-50 hover:bg-[#082F52] text-[#082F52] hover:text-white border border-slate-200 text-xs sm:text-sm font-semibold px-4 py-2 rounded-full transition-colors"
              >
                Office Relocation
              </Link>
              <Link
                href="/international-moving"
                className="bg-slate-50 hover:bg-[#082F52] text-[#082F52] hover:text-white border border-slate-200 text-xs sm:text-sm font-semibold px-4 py-2 rounded-full transition-colors"
              >
                International Moving
              </Link>
              <Link
                href="/blogs/packers-and-movers-kolkata-charges-rate-card"
                className="bg-red-50 hover:bg-[#E53935] text-[#E53935] hover:text-white border border-red-200 text-xs sm:text-sm font-bold px-4 py-2 rounded-full transition-colors"
              >
                2026 Kolkata Rate Card →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Communication & Transparency */}
      <section className="py-20 sm:py-24 bg-[#071A2B] text-white border-t border-white/10 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#1478B5]/15 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#E53935]/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mb-14 sm:mb-16">
            <span className="inline-block bg-white/10 border border-white/20 text-[#F28A32] text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full mb-3">
              Accountability &amp; Trust
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-4 tracking-tight">
              Know What&apos;s Happening With Your Move
            </h2>
            <p className="text-white/80 text-sm sm:text-base leading-relaxed">
              Written CFT surveys, dual-branch coordinator desks in Haltu and Behala, and traceable LR/Bilty dispatch records keep every charge and transit slot accountable.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[#0B253D]/80 border border-white/10 rounded-2xl p-6">
              <div className="w-10 h-10 rounded-xl bg-red-500/20 text-[#F28A32] flex items-center justify-center font-bold text-sm mb-4">
                01
              </div>
              <h3 className="text-base font-bold text-white font-display mb-2">
                Upfront Written Quotes
              </h3>
              <p className="text-xs sm:text-[13px] text-slate-300 leading-relaxed">
                Itemized CFT volume, staircase/lift scope, and shuttle requirements locked on paper before crew dispatch under GSTIN {BUSINESS.gstin}.
              </p>
            </div>

            <div className="bg-[#0B253D]/80 border border-white/10 rounded-2xl p-6">
              <div className="w-10 h-10 rounded-xl bg-red-500/20 text-[#F28A32] flex items-center justify-center font-bold text-sm mb-4">
                02
              </div>
              <h3 className="text-base font-bold text-white font-display mb-2">
                Haltu &amp; Behala Coordinators
              </h3>
              <p className="text-xs sm:text-[13px] text-slate-300 leading-relaxed">
                Reach our Haltu HQ ({BUSINESS.locations.main.phoneFormatted}) or Behala Branch ({BUSINESS.locations.secondary.phoneFormatted}) coordinator directly from survey through delivery.
              </p>
            </div>

            <div className="bg-[#0B253D]/80 border border-white/10 rounded-2xl p-6">
              <div className="w-10 h-10 rounded-xl bg-red-500/20 text-[#F28A32] flex items-center justify-center font-bold text-sm mb-4">
                03
              </div>
              <h3 className="text-base font-bold text-white font-display mb-2">
                LR / Bilty &amp; Highway Check-Ins
              </h3>
              <p className="text-xs sm:text-[13px] text-slate-300 leading-relaxed">
                Stamped LR/Bilty consignment number issued at loading with scheduled toll-plaza WhatsApp, SMS, and phone check-ins.
              </p>
            </div>

            <div className="bg-[#0B253D]/80 border border-white/10 rounded-2xl p-6">
              <div className="w-10 h-10 rounded-xl bg-red-500/20 text-[#F28A32] flex items-center justify-center font-bold text-sm mb-4">
                04
              </div>
              <h3 className="text-base font-bold text-white font-display mb-2">
                Delivery Slot Coordination
              </h3>
              <p className="text-xs sm:text-[13px] text-slate-300 leading-relaxed">
                Advance 2-hour pre-arrival call before the container arrives so you can book destination society service lifts and gate passes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Care Beyond Transportation */}
      <section className="py-20 sm:py-24 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <span className="inline-block bg-red-50 text-[#E53935] text-xs font-semibold uppercase tracking-[0.08em] px-4 py-1.5 rounded-full mb-4 border border-red-200">
                Destination Care
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-[#082F52] mb-5 leading-tight tracking-tight">
                Room Placement, Reassembly &amp; Signed Manifest Handover
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                Arrival at your new apartment or office follows the same checklist discipline as origin packing: room-tagged unloading, bed and wardrobe reassembly, carton reconciliation, and debris removal.
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                    ✓
                  </div>
                  <div>
                    <strong className="text-sm text-[#082F52] font-semibold block">Room-by-Room Placement</strong>
                    <span className="text-xs text-slate-600">Boxes and furniture placed directly into designated rooms according to numbered room tags.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                    ✓
                  </div>
                  <div>
                    <strong className="text-sm text-[#082F52] font-semibold block">Furniture Reassembly</strong>
                    <span className="text-xs text-slate-600">Modular beds, wardrobes, and dining tables reassembled safely using labeled hardware pouches.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                    ✓
                  </div>
                  <div>
                    <strong className="text-sm text-[#082F52] font-semibold block">Carbon-Copy Packing List Sign-Off</strong>
                    <span className="text-xs text-slate-600">Joint tally against your numbered packing list (and VCR for vehicles) before final handover.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                    ✓
                  </div>
                  <div>
                    <strong className="text-sm text-[#082F52] font-semibold block">Debris Clearance &amp; GST Invoice</strong>
                    <span className="text-xs text-slate-600">Collection of used EPE foam, stretch film, and opened cartons alongside your GSTIN {BUSINESS.gstin} tax invoice.</span>
                  </div>
                </div>
              </div>

              <Link
                href="/process"
                className="inline-flex items-center gap-2 bg-[#082F52] hover:bg-[#071A2B] text-white text-sm font-semibold px-6 py-3.5 rounded-xl shadow-md transition-colors"
              >
                <span>See Our Complete Moving Process</span>
                <span>→</span>
              </Link>
            </div>

            <div className="lg:col-span-6 bg-slate-50 rounded-3xl p-8 border border-slate-200">
              <h3 className="font-bold text-lg text-[#082F52] font-display mb-4">
                What Our Handover Commitment Means:
              </h3>
              <div className="space-y-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
                <p>
                  Many transport operators leave boxes stacked on the ground floor or curbside. Our crew brings heavy furniture upstairs, reassembles beds and tables, and reconciles every carton number before closing the job.
                </p>
                <p>
                  For corporate transfers and B2B moves, we also deliver the stamped LR/Bilty and {BUSINESS.sacCodes} GST Tax Invoice ready for HR or finance reimbursement.
                </p>
                <div className="bg-white p-4 rounded-2xl border border-slate-200 mt-4">
                  <span className="text-xs font-bold text-[#E53935] uppercase tracking-wider block mb-1">
                    Documented Closure
                  </span>
                  <span className="text-slate-700 text-xs">
                    Every move concludes with a signed Numbered Carbon-Copy Packing List and GST Tax Invoice ({BUSINESS.gstin}).
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Process + Service + Support Connection */}
      <section className="py-20 sm:py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Our Framework"
            title="Connecting Process, Service, and Support"
            subtitle="Our approach is built around connecting the right service with the right process and keeping communication open throughout the journey."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white rounded-2xl p-6 border border-slate-200 text-center">
              <div className="w-12 h-12 rounded-xl bg-red-50 text-[#E53935] flex items-center justify-center font-bold text-base mx-auto mb-4 font-display">
                PLAN
              </div>
              <h3 className="font-bold text-base text-[#082F52] font-display mb-2">
                1. Plan Thoroughly
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                Understand the specific moving requirements, assess item volume, identify fragile belongings, and establish clear timelines.
              </p>
              <Link
                href="/about"
                className="text-xs font-bold text-[#082F52] hover:text-[#E53935] inline-flex items-center gap-1 transition-colors"
              >
                <span>About Our Approach</span>
                <span>→</span>
              </Link>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-200 text-center">
              <div className="w-12 h-12 rounded-xl bg-orange-50 text-[#F28A32] flex items-center justify-center font-bold text-base mx-auto mb-4 font-display">
                SERVICE
              </div>
              <h3 className="font-bold text-base text-[#082F52] font-display mb-2">
                2. Deploy Right Service
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                Utilize specialized carrier vehicles, trained packing specialists, and tailored protection methods for your specific move.
              </p>
              <Link
                href="/#services"
                className="text-xs font-bold text-[#082F52] hover:text-[#E53935] inline-flex items-center gap-1 transition-colors"
              >
                <span>Explore Services</span>
                <span>→</span>
              </Link>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-200 text-center">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#1478B5] flex items-center justify-center font-bold text-base mx-auto mb-4 font-display">
                SUPPORT
              </div>
              <h3 className="font-bold text-base text-[#082F52] font-display mb-2">
                3. Continuous Support
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                Stamped LR/Bilty tracking, highway checkpoint calls, and signed manifest handover at your destination.
              </p>
              <Link
                href="/process"
                className="text-xs font-bold text-[#082F52] hover:text-[#E53935] inline-flex items-center gap-1 transition-colors"
              >
                <span>View Full Process</span>
                <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Customer Proof */}
      <section className="py-20 sm:py-24 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Verified Reputation"
            title="See What Customers Have to Say"
            subtitle="Authentic feedback from real families and businesses who experienced our structured relocation service firsthand."
          />

          {/* Rating Summary Bar */}
          <div className="max-w-3xl mx-auto mb-12 bg-slate-50 rounded-2xl p-6 border border-slate-200 flex flex-wrap items-center justify-around gap-6 text-center">
            <div>
              <div className="text-3xl font-extrabold text-[#082F52] font-display">
                {BUSINESS.google.rating} ★
              </div>
              <div className="text-xs text-slate-500 font-medium">Google Average Rating</div>
            </div>
            <div className="h-8 w-px bg-slate-200 hidden sm:block" />
            <div>
              <div className="text-3xl font-extrabold text-[#082F52] font-display">
                {BUSINESS.google.reviewCount}+
              </div>
              <div className="text-xs text-slate-500 font-medium">Verified Google Reviews</div>
            </div>
            <div className="h-8 w-px bg-slate-200 hidden sm:block" />
            <div>
              <div className="text-3xl font-extrabold text-[#E53935] font-display">
                230+
              </div>
              <div className="text-xs text-slate-500 font-medium">Cities Connected Across India</div>
            </div>
          </div>

          {/* Real Review Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {featuredReviews.map((rev) => (
              <div
                key={rev.name}
                className="bg-slate-50 rounded-2xl p-6 border border-slate-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-1 text-[#F28A32] mb-3">
                    {[...Array(rev.rating)].map((_, i) => (
                      <span key={i} className="text-sm">★</span>
                    ))}
                  </div>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6 italic">
                    &ldquo;{rev.text}&rdquo;
                  </p>
                </div>

                <div className="border-t border-slate-200/80 pt-4 flex items-center justify-between">
                  <div>
                    <h3 className="font-bold text-xs sm:text-sm text-[#082F52] font-display">
                      {rev.name}
                    </h3>
                    <span className="text-[11px] text-slate-500">{rev.role}</span>
                  </div>
                  <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    Verified
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/testimonials"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-[#082F52] hover:text-[#E53935] transition-colors"
            >
              <span>Read All Customer Reviews</span>
              <span>→</span>
            </Link>
          </div>

          <VerifiedCredentialsBlock compact className="mt-12" />
        </div>
      </section>

      {/* 10. Decision-Support / FAQ Section */}
      <section className="py-20 sm:py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Decision Support"
            title="Questions to Ask Before Choosing a Mover"
            subtitle="Helpful considerations to evaluate relocation services and choose the right moving partner for your requirements."
          />

          <FAQAccordion items={decisionFaqs} />

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

      {/* 11. Final CTA / Conversion */}
      <section className="py-20 sm:py-24 bg-[#071A2B] text-white border-t border-white/10 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#1478B5]/15 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#E53935]/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="inline-block bg-white/10 border border-white/20 text-[#F28A32] text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full mb-4">
            Plan Your Move
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white mb-5 tracking-tight leading-tight">
            Looking for a Moving Partner?
          </h2>

          <p className="text-white/80 text-base sm:text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
            Tell us what you&apos;re moving, where you&apos;re moving from, and where you&apos;re headed. We&apos;ll help you understand the right relocation service for your requirements.
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
              href={getWhatsAppUrl('Hi Bharat Relocators, I am planning a move and would like to understand your relocation approach.')}
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
