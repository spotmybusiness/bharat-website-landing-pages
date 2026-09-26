import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import PageLayout from '@/components/PageLayout';
import PageHero from '@/components/PageHero';
import SectionHeader from '@/components/ui/SectionHeader';
import FAQAccordion from '@/components/FAQAccordion';
import JsonLd from '@/components/JsonLd';
import { generatePageMetadata } from '@/lib/metadata';
import { BUSINESS, getSiteUrl, getTelUrl, getWhatsAppUrl } from '@/lib/business';
import { getOrganizationId, getFAQSchema, buildGraphSchema } from '@/lib/schema';
import { VERIFIED_REVIEWS } from '@/data/reviews';

export const metadata: Metadata = generatePageMetadata({
  title: 'Why Choose Bharat Relocators | Packers and Movers in Kolkata',
  description:
    'Discover how Bharat Relocators approaches household, vehicle, office and other relocation services through organized planning, careful handling, transit coordination and customer support.',
  path: '/why-us',
});

// 6 Core Reasons
const coreReasons = [
  {
    num: '01',
    title: 'Structured Planning',
    desc: 'We understand your requirements before moving day begins. Cargo volume, stairwell or elevator permissions, vehicle parking clearances, and transit schedules are mapped out in advance to prevent unexpected delays.',
    icon: (
      <svg className="w-6 h-6 text-[#E53935]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
  {
    num: '02',
    title: 'Careful Packing & Preparation',
    desc: 'Different belongings require different packaging techniques. From high-grade 5-layer corrugated boxes and bubble cushioning to custom wooden crating, materials are chosen based on the specific fragility of your items.',
    icon: (
      <svg className="w-6 h-6 text-[#E53935]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
  },
  {
    num: '03',
    title: 'Service-Specific Handling',
    desc: 'A family home, an executive sedan, a motorcycle, a corporate office, and international freight do not follow the same approach. We operate specialized divisions and distinct loading procedures for each move type.',
    icon: (
      <svg className="w-6 h-6 text-[#E53935]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
      </svg>
    ),
  },
  {
    num: '04',
    title: 'Organized Transit',
    desc: 'Your belongings travel in weather-tight closed container vehicles equipped with interior cargo lashing to prevent shift damage, operated by verified highway drivers adhering to strict road safety guidelines.',
    icon: (
      <svg className="w-6 h-6 text-[#E53935]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10l1 1h1m8-1h1l1-1v-3.65a1 1 0 00-.22-.624l-3.48-4.35A1 1 0 0011.52 6H10" />
      </svg>
    ),
  },
  {
    num: '05',
    title: 'Clear Communication',
    desc: 'A move has enough uncertainty without wondering what happens next. You are paired with a dedicated move coordinator providing transparent pricing with zero hidden surcharges and milestone updates during transit.',
    icon: (
      <svg className="w-6 h-6 text-[#E53935]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
  {
    num: '06',
    title: 'Support Through Handover',
    desc: 'Our work doesn&apos;t end when the vehicle arrives. We unload into designated rooms, reassemble beds and tables, review the itemized inventory together, and clear packing debris so you can settle in comfortably.',
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
    basic: 'Vehicle-focused; customer handles preparation and delivery logistics',
    structured: 'Complete end-to-end relocation: survey, packing, loading, transit, placement',
  },
  {
    aspect: 'Packing & Materials',
    basic: 'Customer arranges cartons; minimal or uncoordinated protection',
    structured: 'Coordinated multi-layer packing: 5-ply cartons, bubble cushioning, edge guards',
  },
  {
    aspect: 'Item Vulnerability',
    basic: 'Uniform loading without special crating for fragile items or electronics',
    structured: 'Category-specific protocols: custom wood crates, anti-static wraps, furniture pads',
  },
  {
    aspect: 'Transit Visibility',
    basic: 'Irregular driver phone calls with little or no advance scheduling notice',
    structured: 'Dedicated move coordinator with proactive milestone updates and tracking support',
  },
  {
    aspect: 'Destination Handover',
    basic: 'Curbside or tailgate unloading; customer arranges heavy room carrying',
    structured: 'Room-by-room placement, furniture reassembly, inventory sign-off, debris clearance',
  },
];

// Practical customer benefits
const customerBenefits = [
  {
    title: 'Less Guesswork',
    desc: 'Requirements, timelines, and vehicle sizing are evaluated and confirmed prior to moving day, eliminating unexpected surprises.',
  },
  {
    title: 'Better Preparation',
    desc: 'Belongings are categorized and wrapped according to their specific fragility, shape, and transit distance.',
  },
  {
    title: 'Clearer Coordination',
    desc: 'You always know what stage your relocation is in, with direct phone and WhatsApp contact to your coordinator.',
  },
  {
    title: 'One Structured Journey',
    desc: 'Pre-move planning, packing, loading, highway transit, and handover are treated as interconnected, accountable phases.',
  },
  {
    title: 'Support When You Need It',
    desc: 'A dedicated team is ready to address special requests, access constraints, or schedule adjustments promptly.',
  },
];

// 6 Service Cards
const serviceExpertise = [
  {
    title: 'Household Shifting',
    desc: 'Furniture, home appliances, delicate chinaware, and personal wardrobes each require distinct packaging layers and room-specific placement.',
    href: '/household-shifting',
    badge: 'Residential Moves',
  },
  {
    title: 'Car Transportation',
    desc: 'Vehicle haulage requires specialized enclosed carrier trailers, wheel chocks, hydraulic ramps, and scratch-free highway transit coordination.',
    href: '/car-shifting',
    badge: 'Automotive Logistics',
  },
  {
    title: 'Bike Transport',
    desc: 'Two-wheelers need custom wooden crating, mirror removal, bubble cushioning, and secure wheel clamping inside dedicated carrier slots.',
    href: '/bike-shifting',
    badge: 'Two-Wheeler Express',
  },
  {
    title: 'Parcel & Cargo',
    desc: 'Consignments vary significantly by volume, weight, and urgency. We offer fast doorstep pickup and scheduled linehaul connecting 230+ cities.',
    href: '/parcel-shifting',
    badge: 'Intercity Cargo',
  },
  {
    title: 'Office Relocation',
    desc: 'Commercial shifting demands anti-static IT server packing, numbered workstation crates, and phased weekend execution to eliminate work downtime.',
    href: '/office-relocation',
    badge: 'Corporate Shifting',
  },
  {
    title: 'International Moving',
    desc: 'Overseas relocation involves export-grade sea/air packing, comprehensive customs documentation assistance, and vetted destination partners.',
    href: '/international-moving',
    badge: 'Global Freight',
  },
];

// Decision-Support FAQs
const decisionFaqs = [
  {
    q: 'What should I consider before choosing a relocation service?',
    a: 'Look beyond the lowest price quote. Check whether the company provides a transparent written estimate with itemized inclusions, uses dedicated multi-layer packing materials (such as 5-layer corrugated boxes and bubble wrap), operates closed container vehicles, assigns a dedicated move coordinator, and has verifiable customer feedback.',
  },
  {
    q: 'How does Bharat Relocators plan a move?',
    a: 'Every relocation starts with a comprehensive pre-move survey (virtual or in-person) to calculate cargo volume, evaluate building accessibility (lifts, stairwells, truck parking clearances), identify items needing special crating, and formulate a confirmed schedule with an all-inclusive written quote.',
  },
  {
    q: 'Does every type of move follow the same process?',
    a: 'No. While all moves benefit from structured planning and careful transit, operational workflows adapt to the cargo. Household moves prioritize room-by-room packing and furniture assembly, car transport uses enclosed carriers with wheel chocks, and office moves focus on IT server protection and phased weekend scheduling.',
  },
  {
    q: 'How are fragile or special items handled?',
    a: 'Delicate belongings such as fine glassware, crystal stemware, LED TVs, framed mirrors, and artwork are wrapped in honeycomb paper, high-density bubble cushioning, and corrugated corner guards. High-value or irregularly shaped items receive custom wooden crating for maximum transit protection.',
  },
  {
    q: 'How can I stay informed during my move?',
    a: 'You are assigned a dedicated move coordinator as your primary point of contact. You receive direct status updates at packing completion, vehicle dispatch, key highway transit milestones, and advance coordination before the delivery vehicle arrives at your destination.',
  },
];

const pageSchema = buildGraphSchema([
  {
    '@type': 'WebPage',
    name: 'Why Choose Bharat Relocators',
    description:
      'Discover how Bharat Relocators approaches household, vehicle, office and other relocation services through organized planning, careful handling, transit coordination and customer support.',
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
              Bharat Relocators manages relocations across Kolkata and PAN India as a complete logistics lifecycle rather than a simple transport run. A smooth move depends on methodical preparation before the carrier arrives, protective packing for transit, and careful room placement after reaching your destination.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
              <div className="w-10 h-10 rounded-xl bg-red-50 text-[#E53935] flex items-center justify-center font-bold text-sm mb-4">
                01
              </div>
              <h3 className="font-bold text-[#082F52] text-lg font-display mb-2">
                Preparation & Sorting
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Evaluating volume, identifying delicate items, securing elevator permissions, and dismantling modular furniture before loading day prevents rushed decisions.
              </p>
            </div>

            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
              <div className="w-10 h-10 rounded-xl bg-red-50 text-[#E53935] flex items-center justify-center font-bold text-sm mb-4">
                02
              </div>
              <h3 className="font-bold text-[#082F52] text-lg font-display mb-2">
                Protection in Transit
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Road vibration, sudden braking, and weather variations can impact cargo. Appropriate multi-layer cushioning and interior cargo lashing protect your belongings on the road.
              </p>
            </div>

            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
              <div className="w-10 h-10 rounded-xl bg-red-50 text-[#E53935] flex items-center justify-center font-bold text-sm mb-4">
                03
              </div>
              <h3 className="font-bold text-[#082F52] text-lg font-display mb-2">
                Destination Placement
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Leaving cartons dumped on the ground creates hours of stress. Careful unloading directly into assigned rooms, furniture reassembly, and debris removal complete the move.
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

      {/* 5. Service-Specific Expertise */}
      <section className="py-20 sm:py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Service Scope"
            title="Different Moves Need Different Thinking"
            subtitle="Belongings vary widely by fragility, weight, dimensions, and destination. We apply specialized packing methods and equipment tailored to each service category."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceExpertise.map((srv) => (
              <div
                key={srv.title}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs flex flex-col justify-between group hover:border-[#1478B5]/50 transition-all duration-200"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-semibold text-[#F28A32] uppercase tracking-wider bg-orange-50 px-2.5 py-1 rounded-md border border-orange-100">
                      {srv.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold font-display text-[#082F52] mb-2 group-hover:text-[#E53935] transition-colors">
                    {srv.title}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {srv.desc}
                  </p>
                </div>

                <Link
                  href={srv.href}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#082F52] group-hover:text-[#E53935] transition-colors pt-4 border-t border-slate-100"
                >
                  <span>Explore Service Details</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </div>
            ))}
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
              Accountability & Trust
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-4 tracking-tight">
              Know What&apos;s Happening With Your Move
            </h2>
            <p className="text-white/80 text-sm sm:text-base leading-relaxed">
              A well-organized move isn&apos;t only about what happens to the belongings. It&apos;s also about keeping the customer informed along the way.
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
                Clear pricing with detailed inventory inclusions, packing specifications, and zero hidden surcharges on moving day.
              </p>
            </div>

            <div className="bg-[#0B253D]/80 border border-white/10 rounded-2xl p-6">
              <div className="w-10 h-10 rounded-xl bg-red-500/20 text-[#F28A32] flex items-center justify-center font-bold text-sm mb-4">
                02
              </div>
              <h3 className="text-base font-bold text-white font-display mb-2">
                Dedicated Coordinator
              </h3>
              <p className="text-xs sm:text-[13px] text-slate-300 leading-relaxed">
                A single point of contact who understands your move requirements and coordinates packing crews, vehicle arrival, and dispatch.
              </p>
            </div>

            <div className="bg-[#0B253D]/80 border border-white/10 rounded-2xl p-6">
              <div className="w-10 h-10 rounded-xl bg-red-500/20 text-[#F28A32] flex items-center justify-center font-bold text-sm mb-4">
                03
              </div>
              <h3 className="text-base font-bold text-white font-display mb-2">
                Milestone Transit Alerts
              </h3>
              <p className="text-xs sm:text-[13px] text-slate-300 leading-relaxed">
                Timely updates via phone, SMS, or WhatsApp as your shipment passes major checkpoints and prepares for delivery.
              </p>
            </div>

            <div className="bg-[#0B253D]/80 border border-white/10 rounded-2xl p-6">
              <div className="w-10 h-10 rounded-xl bg-red-500/20 text-[#F28A32] flex items-center justify-center font-bold text-sm mb-4">
                04
              </div>
              <h3 className="text-base font-bold text-white font-display mb-2">
                Delivery Coordination
              </h3>
              <p className="text-xs sm:text-[13px] text-slate-300 leading-relaxed">
                Advance confirmation before the carrier arrives at your destination, allowing you to prepare building access and elevator availability.
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
                The Journey Doesn&apos;t End When the Vehicle Arrives
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                Reaching the destination is only half the journey. What happens when the carrier doors open dictates whether your arrival feels calm or overwhelming. We treat unloading, placement, and handover with the same rigor as packing.
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                    ✓
                  </div>
                  <div>
                    <strong className="text-sm text-[#082F52] font-semibold block">Room-by-Room Placement</strong>
                    <span className="text-xs text-slate-600">Boxes and furniture placed directly into designated rooms according to color-coded labels.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                    ✓
                  </div>
                  <div>
                    <strong className="text-sm text-[#082F52] font-semibold block">Furniture Reassembly</strong>
                    <span className="text-xs text-slate-600">Modular beds, dining tables, and large furniture reassembled safely using original hardware.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                    ✓
                  </div>
                  <div>
                    <strong className="text-sm text-[#082F52] font-semibold block">Itemized Inventory Reconciliation</strong>
                    <span className="text-xs text-slate-600">Joint sign-off against the initial packing manifest to confirm all items arrived safely.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                    ✓
                  </div>
                  <div>
                    <strong className="text-sm text-[#082F52] font-semibold block">Debris Clearance</strong>
                    <span className="text-xs text-slate-600">Collection of unpacked cartons, plastic film, and tape scraps so your new home remains tidy.</span>
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
                  Many movers consider their job done the moment boxes are unloaded onto the floor or curbside. For our team, handover is an essential part of the relocation contract.
                </p>
                <p>
                  By ensuring beds are ready to sleep in, large items are positioned correctly, and packing clutter is minimized, we help you transition into your new space without unnecessary stress.
                </p>
                <div className="bg-white p-4 rounded-2xl border border-slate-200 mt-4">
                  <span className="text-xs font-bold text-[#E53935] uppercase tracking-wider block mb-1">
                    Quality Standard
                  </span>
                  <span className="text-slate-700 text-xs">
                    Every move is concluded with a joint inventory check sheet signed by both the customer and the move supervisor.
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
                Coordinate transparent communication, milestone updates during transit, and respectful destination handover.
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
