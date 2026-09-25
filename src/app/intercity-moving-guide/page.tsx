import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import PageLayout from '@/components/PageLayout';
import PageHero from '@/components/PageHero';
import AppImage from '@/components/ui/AppImage';
import SectionHeader from '@/components/ui/SectionHeader';
import { generatePageMetadata } from '@/lib/metadata';
import { BUSINESS, getTelUrl } from '@/lib/business';
import TrackPillarGuide from '@/components/analytics/TrackPillarGuide';
import JsonLd from '@/components/JsonLd';
import { getArticleSchema, buildGraphSchema } from '@/lib/schema';

export const metadata: Metadata = generatePageMetadata({
  title: 'Intercity Relocation Guide: Moving from Kolkata',
  description:
    'Comprehensive guide to interstate moving from Kolkata across India. Understand long-distance packing, highway container transport, documentation, and major national corridors.',
  path: '/intercity-moving-guide',
});

const articleSchema = buildGraphSchema([
  getArticleSchema({
    headline: 'Intercity Relocation Guide: Moving from Kolkata',
    description:
      'Comprehensive guide to interstate moving from Kolkata across India. Understand long-distance packing, highway container transport, documentation, and major national corridors.',
    path: '/intercity-moving-guide',
  }),
]);

const intercityPhases = [
  {
    phase: '01',
    title: 'Pre-Move Survey & Route Planning',
    desc: 'Our relocation planners assess total household volume, fragile inventory, and vehicle shipping requirements to determine the appropriate container size and highway routing.',
  },
  {
    phase: '02',
    title: 'High-Grade Protective Packaging',
    desc: 'Because long-distance road transit involves highway vibrations and climatic changes, goods receive 5-layer corrugated wrapping, bubble cushioning, edge guards, and custom crating.',
  },
  {
    phase: '03',
    title: 'Container Loading & Consignment Note',
    desc: 'Items are balanced and strapped inside dedicated or shared container trucks. A formal Consignment Waybill (LR) and itemized inventory sheet are generated.',
  },
  {
    phase: '04',
    title: 'Highway Transit & Milestone Monitoring',
    desc: 'Your shipment travels via national highway corridors driven by experienced long-haul drivers, with periodic milestone updates provided by your dedicated move coordinator.',
  },
  {
    phase: '05',
    title: 'Destination Unloading & Furniture Assembly',
    desc: 'Upon arrival in your new city, the delivery crew unloads boxes into designated rooms, reassembles major furniture, and conducts a joint inventory check before handover.',
  },
];

const majorCorridors = [
  {
    destination: 'Kolkata → Bangalore & South India',
    corridor: 'Connecting via NH 16 (Eastern Coastal Corridor) & Southern Highway Networks',
    description:
      'A primary technology relocation route connecting Kolkata with Bangalore, Chennai, and Hyderabad. Frequently utilized for dedicated household containers and enclosed vehicle shipping.',
  },
  {
    destination: 'Kolkata → Delhi NCR & North India',
    corridor: 'Connecting via NH 19 (Northern Trunk Corridor) & Regional Expressways',
    description:
      'The central northern highway corridor serving New Delhi, Noida, Gurgaon, and neighboring industrial regions with regular scheduled container movements.',
  },
  {
    destination: 'Kolkata → Mumbai, Pune & West India',
    corridor: 'Connecting via NH 53 / NH 16 & Western Industrial Corridors',
    description:
      'High-traffic commercial and residential route connecting West Bengal with Maharashtra financial, business, and industrial centers.',
  },
  {
    destination: 'Kolkata → Hyderabad & Telangana',
    corridor: 'Connecting via NH 16 & NH 65 Highway Networks',
    description:
      'Rapidly growing technology corridor catering to corporate transfers and residential moves with established highway connectivity.',
  },
];

const evaluationCriteria = [
  {
    factor: 'Physical Office & Verifiable Credentials',
    advice:
      'Verify that the company maintains a physical office address, verifiable GST registration, and responsive contact channels rather than operating solely as an anonymous online broker.',
  },
  {
    factor: 'Transparent, Written All-Inclusive Quotes',
    advice:
      'Insist on an all-inclusive written quotation that clearly specifies packing supplies, loading, highway toll transit, unloading, and unpacking with zero hidden surcharges.',
  },
  {
    factor: 'Transit Insurance Coverage',
    advice:
      'Ensure your consignment is covered under goods-in-transit insurance to provide financial safeguard against unforeseen highway transit incidents.',
  },
  {
    factor: 'Closed Container Vehicles',
    advice:
      'Confirm whether your belongings will travel inside closed, weatherproof container trucks rather than open, tarp-covered vehicles.',
  },
];

export default function IntercityMovingGuidePage() {
  return (
    <PageLayout>
      <JsonLd data={articleSchema} />
      <TrackPillarGuide slug="intercity-moving-guide" />
      <PageHero
        label="Interstate Relocation Guide"
        title={
          <>
            Intercity Relocation Guide: <span className="text-[#F28A32]">Moving from Kolkata</span>
          </>
        }
        subtitle="A comprehensive guide by Bharat Relocators to planning, packing, and executing long-distance household and vehicle relocations across India."
        breadcrumbs={[
          { label: 'Intercity Moving Guide' },
        ]}
        actions={
          <>
            <Link
              href="/get-a-quote"
              className="inline-flex items-center gap-2 bg-[#E53935] hover:bg-[#c62828] text-white font-semibold text-sm px-6 py-3.5 rounded-xl shadow-md transition-colors"
            >
              Get Intercity Moving Quote
            </Link>
            <a
              href={getTelUrl(BUSINESS.phone.primary)}
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 text-white font-semibold text-sm px-5 py-3.5 rounded-xl border border-white/20 transition-colors"
            >
              Speak with Interstate Planner
            </a>
          </>
        }
      />

      {/* Guide Introduction */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <span className="inline-block bg-red-50 text-[#E53935] text-xs font-semibold uppercase tracking-[0.08em] px-4 py-1.5 rounded-full mb-4 border border-red-200">
                Pan-India Interstate Moving
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-[#082F52] mb-5 leading-tight">
                Navigating Long-Distance Relocation with Confidence
              </h2>
              <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                <p>
                  This intercity moving guide from Bharat Relocators explains how to plan, pack, and execute long-distance relocations originating from Kolkata across major national highway corridors in India. Over hundreds or thousands of highway kilometers, cargo experiences continuous road vibrations, temperature fluctuations, and state border documentation checkposts.
                </p>
                <p>
                  With intercity operations spanning 230+ cities across India, we built this comprehensive guide to help families, professionals, and corporate transferees understand interstate logistics — from initial volume estimation to final destination unpacking.
                </p>
                <p>
                  Before starting your packing, consult our step-by-step{' '}
                  <Link href="/moving-checklist" className="text-[#E53935] font-semibold hover:underline">
                    Home Shifting Checklist
                  </Link>{' '}
                  or review our dedicated{' '}
                  <Link href="/household-shifting" className="text-[#082F52] font-semibold hover:underline">
                    Household Shifting Services
                  </Link>
                  .
                </p>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] border border-slate-200">
                <AppImage
                  src="/images/cargo_shifting.jpeg"
                  alt="Intercity container truck and cargo parcels being prepared for highway transit across India"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5-Phase Intercity Workflow */}
      <section className="py-20 bg-slate-50 border-y border-slate-200/80">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Logistics Lifecycle"
            title="The 5-Stage Intercity Moving Process"
            subtitle="How professional movers manage long-distance cargo safety from pickup to delivery."
          />

          <div className="space-y-6 mt-12">
            {intercityPhases.map((phase) => (
              <div
                key={phase.phase}
                className="bg-white p-6 sm:p-7 rounded-2xl border border-slate-200 shadow-xs flex flex-col sm:flex-row gap-5 items-start"
              >
                <div className="w-12 h-12 rounded-xl bg-[#082F52] text-white flex items-center justify-center font-bold text-lg font-display shrink-0">
                  {phase.phase}
                </div>
                <div>
                  <h3 className="text-lg font-bold font-display text-[#082F52] mb-2">
                    {phase.title}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {phase.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Major Outbound Corridors from Kolkata */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="National Routes"
            title="Major Intercity Corridors from Kolkata"
            subtitle="Overview of prominent highway routes connecting Kolkata with India’s leading metropolitan regions."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            {majorCorridors.map((route) => (
              <div
                key={route.destination}
                className="bg-slate-50/80 p-6 sm:p-7 rounded-3xl border border-slate-200 flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#E53935] bg-red-50 px-3 py-1 rounded-md border border-red-100 inline-block mb-3">
                    {route.corridor}
                  </span>
                  <h3 className="text-xl font-bold font-display text-[#082F52] mb-3">
                    {route.destination}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                    {route.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 p-4 rounded-xl bg-slate-100 border border-slate-200 text-xs text-slate-700 leading-relaxed text-center max-w-3xl mx-auto">
            <em>Transit schedules and road routes may vary based on weather, highway checkposts, container type, and seasonal road conditions. Your move coordinator will provide realistic transit estimates upon booking.</em>
          </div>
        </div>
      </section>

      {/* Full Truck Load vs Part Load Comparison */}
      <section className="py-20 bg-slate-50 border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Load Options"
            title="Dedicated Container vs. Shared Part-Load"
            subtitle="Choosing the right shipping option for your household volume and budget."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="bg-white p-7 sm:p-8 rounded-3xl border-2 border-[#082F52] shadow-sm">
              <span className="inline-block bg-[#082F52] text-white text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full mb-4">
                Full Household (FTL)
              </span>
              <h3 className="text-xl sm:text-2xl font-bold font-display text-[#082F52] mb-3">
                Dedicated Container Truck
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Your goods occupy the entire enclosed truck container with direct transit from your Kolkata doorstep straight to your destination address with zero intermediate hub transfers.
              </p>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2.5">
                  <span className="text-[#E53935] font-bold">✓</span>
                  <span><strong>Direct Point-to-Point:</strong> Direct route transit without intermediate freight consolidation stops.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#E53935] font-bold">✓</span>
                  <span><strong>Ideal for 2–3+ BHK Homes:</strong> Maximum space for large furniture, appliances, and fragile goods.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#E53935] font-bold">✓</span>
                  <span><strong>Sealed Container:</strong> Truck is locked and sealed at origin in your presence.</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-7 sm:p-8 rounded-3xl border border-slate-200 shadow-xs">
              <span className="inline-block bg-slate-100 text-slate-700 text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full mb-4">
                Partial Load / Luggage (LTL)
              </span>
              <h3 className="text-xl sm:text-2xl font-bold font-display text-[#082F52] mb-3">
                Shared Part-Load Transport
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Cost-effective solution where smaller volume moves (1 BHK, student luggage, or few boxes) share container space heading toward the same destination corridor.
              </p>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2.5">
                  <span className="text-[#E53935] font-bold">✓</span>
                  <span><strong>Economical:</strong> Pay only for the specific volume or weight your boxes occupy.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#E53935] font-bold">✓</span>
                  <span><strong>Barcoded Labeling:</strong> Every carton is barcoded and inventoried to prevent mix-ups.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#E53935] font-bold">✓</span>
                  <span>Explore our dedicated <Link href="/parcel-shifting" className="text-[#E53935] underline font-semibold">Parcel & Cargo Shifting</Link> service for smaller loads.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How to Evaluate Interstate Movers */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Consumer Protection"
            title="How to Evaluate Interstate Moving Companies"
            subtitle="Key safeguards to look for when choosing a reliable relocation partner."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            {evaluationCriteria.map((item) => (
              <div
                key={item.factor}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between"
              >
                <div>
                  <h3 className="font-bold text-[#082F52] text-base font-display mb-2">
                    {item.factor}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {item.advice}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-slate-600 text-sm mb-4">
              Moving outside India? We also provide global overseas relocation solutions.
            </p>
            <Link
              href="/international-moving"
              className="text-[#E53935] font-bold text-sm hover:underline inline-flex items-center gap-1.5"
            >
              <span>Explore International Moving Services</span>
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Bottom Conversion Banner */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <SectionHeader
            label="Get Started"
            title="Planning an Interstate Move from Kolkata?"
            subtitle="Request a transparent, all-inclusive estimate for your intercity household and vehicle relocation."
          />
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/get-a-quote"
              className="inline-flex items-center justify-center gap-2 bg-[#E53935] hover:bg-[#c62828] text-white font-semibold text-sm px-7 py-4 rounded-xl shadow-md transition-colors w-full sm:w-auto"
            >
              Get Free Intercity Quote
            </Link>
            <a
              href={getTelUrl(BUSINESS.phone.primary)}
              className="inline-flex items-center justify-center gap-2 bg-[#082F52] hover:bg-[#0b3b60] text-white font-semibold text-sm px-7 py-4 rounded-xl shadow-md transition-colors w-full sm:w-auto"
            >
              Call Coordinator: {BUSINESS.phone.primaryFormatted}
            </a>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}

