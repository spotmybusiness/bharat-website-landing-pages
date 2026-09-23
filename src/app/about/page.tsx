import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import PageLayout from '@/components/PageLayout';
import PageHero from '@/components/PageHero';
import AppImage from '@/components/ui/AppImage';
import SectionHeader from '@/components/ui/SectionHeader';
import JsonLd from '@/components/JsonLd';
import { generatePageMetadata } from '@/lib/metadata';
import { BUSINESS, getTelUrl, getWhatsAppUrl } from '@/lib/business';

export const metadata: Metadata = generatePageMetadata({
  title: 'About Us — Trusted Packers and Movers in Kolkata',
  description:
    'Learn about Bharat Relocators, our approach to household, vehicle, office and other relocation services, and how we help customers plan and manage their moves across Kolkata and PAN India.',
  path: '/about',
});

const aboutSchema = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  name: 'About Bharat Relocators',
  description:
    'Learn about Bharat Relocators, our approach to household, vehicle, office and other relocation services, and how we help customers plan and manage their moves.',
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

// 6 Canonical Services
const servicesList = [
  {
    title: 'Household Shifting',
    category: 'Residential Moves',
    description:
      'Complete home relocation with 5-layer packing, modular furniture dismantling, room-by-room labeling, and placement at your new home.',
    href: '/household-shifting',
    icon: (
      <svg className="w-6 h-6 text-[#E53935]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    title: 'Car Transportation',
    category: 'Automotive Logistics',
    description:
      'Safe intercity car hauling in closed container trailers with wheel-locking clamps, hydraulic ramp loading, and scratch-free transit.',
    href: '/car-shifting',
    icon: (
      <svg className="w-6 h-6 text-[#E53935]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10l1 1h1m8-1h1l1-1v-3.65a1 1 0 00-.22-.624l-3.48-4.35A1 1 0 0011.52 6H10" />
      </svg>
    ),
  },
  {
    title: 'Bike Transport',
    category: 'Two-Wheeler Express',
    description:
      'Dedicated motorcycle and scooter transit using heavy-duty wooden crating, bubble wrapping, mirror removal, and tied-down wheel slots.',
    href: '/bike-shifting',
    icon: (
      <svg className="w-6 h-6 text-[#E53935]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <circle cx="5.5" cy="17.5" r="3.5" />
        <circle cx="18.5" cy="17.5" r="3.5" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 6a1 1 0 100-2 1 1 0 000 2zm-3 11.5V14l-3-3 4-3 2 3h4" />
      </svg>
    ),
  },
  {
    title: 'Parcel & Cargo',
    category: 'Express Intercity',
    description:
      'Fast doorstep parcel pickup, student luggage delivery, and partial household consignments connecting Kolkata with 230+ cities.',
    href: '/parcel-shifting',
    icon: (
      <svg className="w-6 h-6 text-[#E53935]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
  },
  {
    title: 'Office Relocation',
    category: 'Commercial & Corporate',
    description:
      'Phased corporate workplace shifting with anti-static IT server packing, numbered workstation crates, and weekend execution to avoid downtime.',
    href: '/office-relocation',
    icon: (
      <svg className="w-6 h-6 text-[#E53935]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    title: 'International Moving',
    category: 'Global Freight',
    description:
      'End-to-end overseas relocation logistics with export-grade sea/air packing, customs paperwork guidance, and trusted overseas destination partners.',
    href: '/international-moving',
    icon: (
      <svg className="w-6 h-6 text-[#E53935]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

// 5 Approach Stages: PLAN -> PREPARE -> PROTECT -> MOVE -> DELIVER
const approachSteps = [
  {
    stage: 'PLAN',
    num: '01',
    title: 'Pre-Move Planning',
    desc: 'Assessing volume, parking accessibility, floor levels, elevator permissions, and transit timeline before moving day.',
  },
  {
    stage: 'PREPARE',
    num: '02',
    title: 'Inventory & Materials',
    desc: 'Curating room-specific packing supplies: 5-layer corrugated boxes, wardrobe cartons, moisture barriers, and tagging sheets.',
  },
  {
    stage: 'PROTECT',
    num: '03',
    title: 'Structured Packing',
    desc: 'Multi-layer bubble wrap, shock-absorbent corner guards, modular furniture dismantling, and custom crating for fragile items.',
  },
  {
    stage: 'MOVE',
    num: '04',
    title: 'Monitored Transit',
    desc: 'Organized loading inside dedicated, weather-sealed carrier trucks with interior cargo lashing and vetted highway drivers.',
  },
  {
    stage: 'DELIVER',
    num: '05',
    title: 'Handover & Placement',
    desc: 'Safe unloading directly into designated rooms, reassembling beds and tables, joint inventory sign-off, and debris clearing.',
  },
];

// 8 Handling Categories
const handlingCategories = [
  {
    title: 'Household Furniture',
    items: 'Modular beds, wardrobes, dining sets, sofas, ergonomic chairs',
    method: 'Dismantled with hardware secured in labeled pouches, wrapped with protective foam and stretch film.',
    icon: (
      <svg className="w-5 h-5 text-[#E53935]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
  },
  {
    title: 'Home Appliances',
    items: 'Double-door refrigerators, front-load washers, LED TVs, microwaves',
    method: 'Transit bolts installed, drum stabilization, thermo-foam edge cushioning, and moisture-resistant wrap.',
    icon: (
      <svg className="w-5 h-5 text-[#E53935]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12h.01M10 12h.01M14 12h.01M18 12h.01" />
      </svg>
    ),
  },
  {
    title: 'Fragile Belongings & Glassware',
    items: 'Fine china, crystal stemware, framed mirrors, artwork, chandeliers',
    method: 'Nested individually in honeycomb kraft paper, heavy-duty bubble wrap, and partitioned double-wall cartons.',
    icon: (
      <svg className="w-5 h-5 text-[#E53935]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V6a2 2 0 10-2 2h2zm0 13c-3 0-5-2-5-5h10c0 3-2 5-5 5z" />
      </svg>
    ),
  },
  {
    title: 'Personal Effects & Wardrobe',
    items: 'Garments, shoes, family heirlooms, books, linens, personal documents',
    method: 'Placed inside upright wardrobe cartons, moisture-barrier shrink wrap, and sealed tamper-evident boxes.',
    icon: (
      <svg className="w-5 h-5 text-[#E53935]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
  },
  {
    title: 'Personal Vehicles',
    items: 'Hatchbacks, sedans, luxury SUVs, commuter bikes, premium motorcycles',
    method: 'Wheel-locked inside enclosed auto-carriers, hydraulic ramp loading, and continuous milestone tracking.',
    icon: (
      <svg className="w-5 h-5 text-[#E53935]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 17a2 2 0 100-4 2 2 0 000 4zm8 0a2 2 0 100-4 2 2 0 000 4z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 9l2-4h14l2 4M3 9v8h2m14 0h2V9m-4 0v4H7V9" />
      </svg>
    ),
  },
  {
    title: 'Office IT & Electronics',
    items: 'Workstations, desktop monitors, server racks, networking switches',
    method: 'Anti-static bubble wrap, color-coded desk numbered boxes, and specialized protective foam inserts.',
    icon: (
      <svg className="w-5 h-5 text-[#E53935]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'Commercial Goods & Freight',
    items: 'Retail inventory, boxed cargo, corporate files, exhibition merchandise',
    method: 'Palletized, strapped, and manifested with itemized consignment numbers and scheduled dispatch.',
    icon: (
      <svg className="w-5 h-5 text-[#E53935]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
  },
  {
    title: 'Express Parcels & Single Items',
    items: 'Single furniture items, student luggage, cartons, emergency packages',
    method: 'Reinforced 5-layer outer boxing, plastic strapping, and door-to-door express highway connectivity.',
    icon: (
      <svg className="w-5 h-5 text-[#E53935]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
      </svg>
    ),
  },
];

// 5 Core Values
const valuesList = [
  {
    title: 'Careful Handling',
    desc: 'A move represents your home or business, not just weight on a truck. We treat every carton and piece of furniture with the attentiveness it requires, avoiding rushed dragging, tossing, or stacking shortcuts.',
    icon: (
      <svg className="w-6 h-6 text-[#E53935]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    title: 'Clear Communication',
    desc: 'A move has enough uncertainty without wondering what happens next. From your initial survey to final delivery, we keep you informed with straightforward pricing, exact timelines, and direct coordinator contact.',
    icon: (
      <svg className="w-6 h-6 text-[#E53935]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
  {
    title: 'Organized Planning',
    desc: 'Unplanned moves create chaos. We assess stairwells, elevator restrictions, truck parking clearances, and packing requirements days before dispatch, so moving day runs smoothly without unneeded surprises.',
    icon: (
      <svg className="w-6 h-6 text-[#E53935]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: 'Responsible Transit',
    desc: 'Your possessions travel in dedicated closed-body container vehicles engineered to prevent water ingress and highway dust, piloted by verified long-distance drivers adhering to road safety protocols.',
    icon: (
      <svg className="w-6 h-6 text-[#E53935]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: 'Customer-Focused Service',
    desc: 'Relocation is a deeply personal life event. Our packing teams and coordinators are polite, respectful of family routines, attentive to specific requests, and committed to leaving your home tidy and settled.',
    icon: (
      <svg className="w-6 h-6 text-[#E53935]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

// 5 Customer Journey Steps
const customerJourney = [
  {
    step: '01',
    title: 'Tell Us About Your Move',
    desc: 'Reach out by phone, WhatsApp, or our online quote form. Share your origin, destination, planned moving date, and general inventory scope.',
  },
  {
    step: '02',
    title: 'Understand the Requirements',
    desc: 'We conduct a virtual or in-person survey to identify delicate items, evaluate floor access and parking, and calculate precise packing volume.',
  },
  {
    step: '03',
    title: 'Plan the Relocation',
    desc: 'Receive a transparent, all-inclusive written quote with zero hidden surcharges, a confirmed timeline, and practical guidance on pre-move prep.',
  },
  {
    step: '04',
    title: 'Prepare & Transport',
    desc: 'Our uniformed crew arrives on time with high-grade boxes, packs room by room, loads with weight balance, and begins monitored transit.',
  },
  {
    step: '05',
    title: 'Deliver & Complete Handover',
    desc: 'We unload into your specified rooms, reassemble dismantled beds and tables, cross-check the itemized inventory, and clear packing materials.',
  },
];

export default function AboutPage() {
  return (
    <PageLayout>
      <JsonLd data={aboutSchema} />

      {/* 1. Page Hero */}
      <PageHero
        label="About Bharat Relocators"
        title={
          <>
            Moving More Than Belongings.{' '}
            <span className="text-[#F28A32]">Moving What Matters.</span>
          </>
        }
        subtitle="Bharat Relocators helps individuals, families and businesses plan, pack and move their belongings with a structured approach to relocation."
        breadcrumbs={[{ label: 'About Us' }]}
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

      {/* 2. Who We Are */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Visual Asset */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] sm:aspect-[1/1] border border-slate-200">
                <AppImage
                  src="/images/figures.png"
                  alt="Bharat Relocators team packing and managing residential goods safely"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
              </div>

              {/* Verified Quality Standards Badge */}
              <div className="absolute -bottom-6 -right-3 sm:right-6 bg-white rounded-2xl shadow-xl p-5 border border-slate-200 max-w-xs">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center text-[#E53935] flex-shrink-0">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a10.993 10.993 0 00-.022 1.949v3.084a1 1 0 00.553.894l4.5 2.25a1 1 0 00.894 0l4.5-2.25a1 1 0 00.553-.894v-3.084c0-.655-.008-1.306-.022-1.949L18.75 6.92a1 1 0 000-1.84l-7-3zM6.75 10.793l3.25 1.625 3.25-1.625v2.332L10 14.737l-3.25-1.612v-2.332z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-base font-extrabold text-[#082F52] font-display">
                      Structured Process
                    </div>
                    <div className="text-xs text-slate-500 font-medium">
                      Verified Relocation Specialists
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Editorial Narrative */}
            <div className="lg:col-span-7">
              <span className="inline-block bg-red-50 text-[#E53935] text-xs font-semibold uppercase tracking-[0.08em] px-4 py-1.5 rounded-full mb-4 border border-red-200">
                Who We Are
              </span>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-[#082F52] mb-5 leading-tight tracking-tight">
                Built Around the Way a Move Should Be Handled
              </h2>

              <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed mb-8">
                <p>
                  Relocation is far more than simply loading a truck and driving from one address to another. Moving represents a major transition in people&apos;s lives, involving family heirlooms, hard-earned furniture, sensitive home appliances, and high-value office assets built over years.
                </p>
                <p>
                  Different belongings require completely different handling. A fine crockery set cannot be boxed the same way as books; an LED television requires edge-cushioning and upright transport; modular wardrobes must be systematically dismantled and cataloged so they fit together perfectly at the destination.
                </p>
                <p>
                  Based in Kolkata, Bharat Relocators approaches each relocation as a structured, well-coordinated process. By combining comprehensive pre-move surveys, multi-layer packing materials, and clear customer communication, we aim to make relocation organized, predictable, and stress-free.
                </p>
              </div>

              {/* Grounded Value Highlight Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200">
                  <div className="flex items-center gap-2.5 mb-1.5">
                    <div className="w-8 h-8 rounded-lg bg-red-50 flex items-center justify-center text-[#E53935] shrink-0">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="font-bold text-[#082F52] text-sm font-display">
                      Methodical Packing Standards
                    </h3>
                  </div>
                  <p className="text-slate-600 text-xs sm:text-[13px] leading-relaxed">
                    Itemized sorting with 5-layer corrugated boxes, bubble cushioning, and custom crating designed for fragile goods.
                  </p>
                </div>

                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200">
                  <div className="flex items-center gap-2.5 mb-1.5">
                    <div className="w-8 h-8 rounded-lg bg-red-50 flex items-center justify-center text-[#E53935] shrink-0">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="font-bold text-[#082F52] text-sm font-display">
                      Accountable Communication
                    </h3>
                  </div>
                  <p className="text-slate-600 text-xs sm:text-[13px] leading-relaxed">
                    Direct access to your dedicated move coordinator with transparent milestone updates from pickup to final room placement.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. What We Do */}
      <section className="py-20 sm:py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="What We Do"
            title="Relocation Services Built Around Your Move"
            subtitle="Whether moving a 1BHK apartment locally, shipping a family car across states, or coordinating a multi-workstation office move, we have specialized operational teams for each requirement."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesList.map((service) => (
              <div
                key={service.title}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs hover:shadow-lg hover:border-[#1478B5]/40 transition-all duration-200 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center group-hover:scale-105 transition-transform">
                      {service.icon}
                    </div>
                    <span className="text-[11px] font-semibold text-[#F28A32] uppercase tracking-wider bg-orange-50 px-2.5 py-1 rounded-md border border-orange-100">
                      {service.category}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold font-display text-[#082F52] mb-2 group-hover:text-[#E53935] transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                <Link
                  href={service.href}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#082F52] group-hover:text-[#E53935] transition-colors pt-4 border-t border-slate-100"
                >
                  <span>Explore Service</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Our Approach to Relocation */}
      <section className="py-20 sm:py-24 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Our Approach"
            title="A Move Is Easier When Everything Is Planned"
            subtitle="Moving becomes stressful only when critical steps are rushed or skipped. By structuring every project into five deliberate phases, we maintain control from origin to destination."
          />

          {/* Visual Progression Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 relative">
            {approachSteps.map((step, idx) => (
              <div
                key={step.stage}
                className="bg-slate-50 rounded-2xl p-5 border border-slate-200 flex flex-col justify-between relative group hover:border-[#F28A32]/60 hover:shadow-md transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-extrabold text-[#F28A32] uppercase tracking-wider">
                      {step.stage}
                    </span>
                    <span className="text-xl font-extrabold text-slate-300 font-display">
                      {step.num}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-[#082F52] font-display mb-2">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                {idx < approachSteps.length - 1 && (
                  <div className="hidden lg:block absolute -right-2.5 top-1/2 -translate-y-1/2 z-10 text-slate-300 font-bold text-sm pointer-events-none">
                    →
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Contextual Link to Process Page */}
          <div className="mt-12 text-center">
            <Link
              href="/process"
              className="inline-flex items-center gap-2 bg-[#082F52] hover:bg-[#071A2B] text-white text-sm font-semibold px-6 py-3.5 rounded-xl shadow-md transition-colors"
            >
              <span>See How Our Process Works</span>
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 5. What We Handle */}
      <section className="py-20 sm:py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="What We Handle"
            title="Tailored Care for Every Category of Belonging"
            subtitle="Different items have unique physical properties and vulnerabilities. We do not apply a generic packing method to everything — handling techniques adapt to what is inside."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {handlingCategories.map((cat) => (
              <div
                key={cat.title}
                className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center mb-3">
                    {cat.icon}
                  </div>

                  <h3 className="font-bold text-base text-[#082F52] font-display mb-1.5">
                    {cat.title}
                  </h3>

                  <p className="text-xs text-slate-500 font-medium mb-3">
                    {cat.items}
                  </p>

                  <p className="text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                    <strong className="text-[#082F52] font-semibold">Handling: </strong>
                    {cat.method}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. What Matters to Us */}
      <section className="py-20 sm:py-24 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="What Matters to Us"
            title="The Values Behind Every Relocation"
            subtitle="Rather than relying on abstract corporate slogans, our daily operations are guided by five practical principles that directly safeguard customer cargo and peace of mind."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {valuesList.map((val, idx) => (
              <div
                key={val.title}
                className={`bg-slate-50 rounded-2xl p-6 border border-slate-200 flex flex-col justify-between ${
                  idx === 4 ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center mb-4">
                    {val.icon}
                  </div>

                  <h3 className="text-lg font-bold font-display text-[#082F52] mb-3">
                    {val.title}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed">
                    {val.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. How We Work With Customers */}
      <section className="py-20 sm:py-24 bg-[#071A2B] text-white border-t border-white/10 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#1478B5]/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#E53935]/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mb-14 sm:mb-16">
            <span className="inline-block bg-white/10 border border-white/20 text-[#F28A32] text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full mb-3">
              Customer Journey
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-4 tracking-tight">
              From First Conversation to Final Handover
            </h2>
            <p className="text-white/80 text-sm sm:text-base leading-relaxed">
              Here is what you can expect when choosing Bharat Relocators to coordinate and execute your move.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {customerJourney.map((step) => (
              <div
                key={step.step}
                className="bg-[#0B253D]/80 border border-white/10 rounded-2xl p-5 flex flex-col justify-between"
              >
                <div>
                  <div className="text-2xl font-extrabold text-[#F28A32] font-display mb-3">
                    {step.step}
                  </div>

                  <h3 className="text-base font-bold text-white font-display mb-2">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-[13px] text-slate-300 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Contextual Link Banner */}
          <div className="mt-12 bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="text-white font-bold text-base font-display">
                Want to see our comprehensive 4-stage operational breakdown?
              </h4>
              <p className="text-slate-300 text-xs sm:text-sm mt-0.5">
                Review our complete pre-move survey, packing materials, carrier specifications, and handover protocols.
              </p>
            </div>
            <Link
              href="/process"
              className="bg-[#E53935] hover:bg-[#c62828] text-white text-xs sm:text-sm font-semibold px-5 py-3 rounded-xl shadow-md transition-colors shrink-0 inline-flex items-center gap-1.5"
            >
              <span>Explore Our Moving Process</span>
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 8. Service Reach / Capabilities */}
      <section className="py-20 sm:py-24 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Service Scope"
            title="Relocation That Goes Beyond One Address"
            subtitle="From local neighborhood shifting in Kolkata to long-distance domestic relocations across India, our network coordinates every route with scheduled dispatches."
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Local Moves */}
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center text-[#E53935] mb-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold font-display text-[#082F52] mb-2">
                  Kolkata & Greater Kolkata
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  Same-day and scheduled residential moves across Behala, Haltu, Jadavpur, Alipore, Salt Lake, New Town, Rajarhat, Ballygunge, Garia, Howrah, and surrounding neighborhoods.
                </p>
                <div className="bg-white p-3 rounded-xl border border-slate-200 text-xs text-slate-600 space-y-1">
                  <div>• Dedicated local packing crews</div>
                  <div>• Lift & narrow stairwell handling</div>
                  <div>• Same-day pickup and delivery</div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200">
                <Link
                  href="/moving-checklist"
                  className="text-xs font-bold text-[#082F52] hover:text-[#E53935] inline-flex items-center gap-1 transition-colors"
                >
                  <span>Read Home Moving Checklist</span>
                  <span>→</span>
                </Link>
              </div>
            </div>

            {/* Intercity PAN India */}
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center text-[#E53935] mb-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold font-display text-[#082F52] mb-2">
                  Domestic & PAN-India Shifting
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  Regular long-distance container routes connecting Kolkata to 230+ cities including Delhi NCR, Mumbai, Bengaluru, Hyderabad, Pune, Chennai, and Ahmedabad.
                </p>
                <div className="bg-white p-3 rounded-xl border border-slate-200 text-xs text-slate-600 space-y-1">
                  <div>• Sealed closed-container trucks</div>
                  <div>• Highway driver verification</div>
                  <div>• Transit milestone tracking</div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200">
                <Link
                  href="/intercity-moving-guide"
                  className="text-xs font-bold text-[#082F52] hover:text-[#E53935] inline-flex items-center gap-1 transition-colors"
                >
                  <span>Read Intercity Moving Guide</span>
                  <span>→</span>
                </Link>
              </div>
            </div>

            {/* Specialized Vehicle & Cargo Logistics */}
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center text-[#E53935] mb-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold font-display text-[#082F52] mb-2">
                  Specialized Freight & Vehicles
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  Dedicated automotive car carriers, crated motorcycle express transit, partial cargo parcel shifting, and international customs coordination.
                </p>
                <div className="bg-white p-3 rounded-xl border border-slate-200 text-xs text-slate-600 space-y-1">
                  <div>• Enclosed car carrier trailers</div>
                  <div>• Custom wooden two-wheeler crates</div>
                  <div>• Export packaging & documentation</div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200">
                <Link
                  href="/vehicle-transportation-guide"
                  className="text-xs font-bold text-[#082F52] hover:text-[#E53935] inline-flex items-center gap-1 transition-colors"
                >
                  <span>Vehicle Transportation Guide</span>
                  <span>→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Trust / Proof */}
      <section className="py-20 sm:py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-md">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7">
                <span className="inline-block bg-red-50 text-[#E53935] text-xs font-semibold uppercase tracking-[0.08em] px-4 py-1.5 rounded-full mb-3 border border-red-200">
                  Trust & Transparency
                </span>
                <h2 className="text-2xl sm:text-3xl font-display font-bold text-[#082F52] mb-4">
                  Real Feedback. Verified Standards.
                </h2>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                  We build our reputation move by move, through punctual arrivals, careful cargo protection, and clear quotes without hidden last-minute surcharges. Our track record reflects our ongoing commitment to professional service.
                </p>

                <div className="flex flex-wrap gap-4 items-center">
                  <Link
                    href="/testimonials"
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-[#082F52] hover:text-[#E53935] transition-colors"
                  >
                    <span>Read Customer Reviews</span>
                    <span>→</span>
                  </Link>

                  <span className="text-slate-300">|</span>

                  <Link
                    href="/faqs"
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-[#082F52] hover:text-[#E53935] transition-colors"
                  >
                    <span>Frequently Asked Questions</span>
                    <span>→</span>
                  </Link>
                </div>
              </div>

              {/* Verified Metrics Grid */}
              <div className="lg:col-span-5 grid grid-cols-2 gap-4">
                <div className="bg-slate-50 p-4 sm:p-5 rounded-2xl border border-slate-200 text-center">
                  <div className="text-3xl sm:text-4xl font-extrabold text-[#082F52] font-display mb-1">
                    {BUSINESS.google.rating} ★
                  </div>
                  <div className="text-xs text-slate-500 font-medium">
                    Google Average Rating
                  </div>
                </div>

                <div className="bg-slate-50 p-4 sm:p-5 rounded-2xl border border-slate-200 text-center">
                  <div className="text-3xl sm:text-4xl font-extrabold text-[#082F52] font-display mb-1">
                    {BUSINESS.google.reviewCount}+
                  </div>
                  <div className="text-xs text-slate-500 font-medium">
                    Verified Reviews
                  </div>
                </div>

                <div className="bg-slate-50 p-4 sm:p-5 rounded-2xl border border-slate-200 text-center">
                  <div className="text-3xl sm:text-4xl font-extrabold text-[#082F52] font-display mb-1">
                    230+
                  </div>
                  <div className="text-xs text-slate-500 font-medium">
                    Cities Connected
                  </div>
                </div>

                <div className="bg-slate-50 p-4 sm:p-5 rounded-2xl border border-slate-200 text-center">
                  <div className="text-3xl sm:text-4xl font-extrabold text-[#E53935] font-display mb-1">
                    100%
                  </div>
                  <div className="text-xs text-slate-500 font-medium">
                    Transparent Estimates
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. Final CTA / Contact */}
      <section className="py-20 sm:py-24 bg-[#071A2B] text-white border-t border-white/10 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#1478B5]/15 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#E53935]/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="inline-block bg-white/10 border border-white/20 text-[#F28A32] text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full mb-4">
            Plan Your Move
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white mb-5 tracking-tight leading-tight">
            Planning a Move?
          </h2>

          <p className="text-white/80 text-base sm:text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
            Tell us what you&apos;re moving, where you&apos;re moving from, and where you&apos;re headed. We&apos;ll help you understand the right relocation approach for your requirements.
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
