import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import PageLayout from '@/components/PageLayout';
import PageHero from '@/components/PageHero';
import SectionHeader from '@/components/ui/SectionHeader';
import AppImage from '@/components/ui/AppImage';
import JsonLd from '@/components/JsonLd';
import { generatePageMetadata } from '@/lib/metadata';
import { BUSINESS, getTelUrl, getWhatsAppUrl } from '@/lib/business';
import { SERVICES } from '@/data/services';

export const metadata: Metadata = generatePageMetadata({
  title: 'Relocation & Moving Services | Bharat Relocators',
  description:
    'Explore Bharat Relocators services including household shifting, car transportation, bike transport, parcel and cargo movement, office relocation and international moving.',
  path: '/services',
});

const serviceIcons: Record<string, React.ReactNode> = {
  household: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>
  ),
  bike: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <circle cx="5.5" cy="16.5" r="3.5" strokeWidth={1.75} />
      <circle cx="18.5" cy="16.5" r="3.5" strokeWidth={1.75} />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M5.5 16.5h3.5l3-5h4l2 5h1M12 11.5V7m-3 0h6" />
    </svg>
  ),
  car: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M5 17a2 2 0 100-4 2 2 0 000 4zm14 0a2 2 0 100-4 2 2 0 000 4z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M3 13l2-5h14l2 5M5 13h14v4H5v-4z" />
    </svg>
  ),
  parcel: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
    </svg>
  ),
  international: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  office: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  ),
};

const decisionPathways = [
  {
    movingWhat: 'Moving a Complete Home or Apartment?',
    description: 'Requires multi-layer protective packing, modular furniture dismantling, wardrobe boxes, and room-wise unpacking.',
    serviceName: 'Household Shifting',
    href: '/household-shifting',
    tag: 'Residential Move',
  },
  {
    movingWhat: 'Relocating Your Personal Car Intercity?',
    description: 'Demands specialized closed container car carriers with hydraulic ramp loading and wheel-locking chocks.',
    serviceName: 'Car Transportation',
    href: '/car-shifting',
    tag: 'Automotive Haulage',
  },
  {
    movingWhat: 'Transporting a Motorcycle or Scooter?',
    description: 'Needs custom wooden crating, bubble wrapping, mirror removal, and dedicated two-wheeler transit slots.',
    serviceName: 'Bike Transport',
    href: '/bike-shifting',
    tag: 'Two-Wheeler Express',
  },
  {
    movingWhat: 'Sending Boxes, Luggage, or Express Freight?',
    description: 'Fast doorstep pickup for excess luggage, cartons, or small partial loads connecting 230+ cities across India.',
    serviceName: 'Parcel & Cargo',
    href: '/parcel-shifting',
    tag: 'Intercity Cargo',
  },
  {
    movingWhat: 'Shifting Workstations, IT Racks, or an Entire Office?',
    description: 'Phased corporate relocation with anti-static IT server handling, modular desk dismantling, and weekend execution.',
    serviceName: 'Office Relocation',
    href: '/office-relocation',
    tag: 'Corporate & Commercial',
  },
  {
    movingWhat: 'Relocating Abroad or Shipping Overseas Goods?',
    description: 'Air and sea cargo shipping with export-standard multi-layer crating, customs documentation, and foreign destination delivery.',
    serviceName: 'International Moving',
    href: '/international-moving',
    tag: 'Cross-Border Logistics',
  },
];

const serviceComparisonRows = [
  {
    whatMoved: 'Home furniture, appliances, kitchenware, personal belongings',
    service: 'Household Shifting',
    href: '/household-shifting',
    highlight: '5-Layer packing, carpentry assembly, room-by-room setup',
    scope: 'Local Kolkata & Intercity PAN India',
  },
  {
    whatMoved: 'Sedans, hatchbacks, SUVs, luxury passenger vehicles',
    service: 'Car Transportation',
    href: '/car-shifting',
    highlight: 'Enclosed car carriers, hydraulic ramps, transit insurance',
    scope: 'Intercity Highway Corridors',
  },
  {
    whatMoved: 'Commuter motorbikes, premium superbikes, scooters',
    service: 'Bike Transport',
    href: '/bike-shifting',
    highlight: 'Custom wooden crates, mirror removal, bubble wrapping',
    scope: 'Kolkata to 230+ Indian Cities',
  },
  {
    whatMoved: 'Luggage bags, student cartons, small partial consignments',
    service: 'Parcel & Cargo',
    href: '/parcel-shifting',
    highlight: 'Doorstep pickup, volumetric freight pricing, live milestone scans',
    scope: 'Intercity Express Network',
  },
  {
    whatMoved: 'Workstations, IT servers, conference furniture, corporate files',
    service: 'Office Relocation',
    href: '/office-relocation',
    highlight: 'Weekend/night shifts, zero-downtime plan, anti-static IT packing',
    scope: 'Kolkata & Commercial Hubs Nationwide',
  },
  {
    whatMoved: 'Household shipments, baggage, commercial export cargo',
    service: 'International Moving',
    href: '/international-moving',
    highlight: 'Air/sea freight forwarding, export crating, customs guidance',
    scope: 'Global Destinations Worldwide',
  },
];

const movingSteps = [
  {
    number: '01',
    title: 'Understand Your Move',
    desc: 'Identify what you need to move, item categories, origin, destination, and preferred moving dates.',
  },
  {
    number: '02',
    title: 'Choose the Relevant Service',
    desc: 'Select the dedicated service matching your inventory: residential, vehicle, commercial, cargo, or global.',
  },
  {
    number: '03',
    title: 'Discuss Your Requirements',
    desc: 'Share inventory details with our move coordinators for transparent itemized planning with zero hidden charges.',
  },
  {
    number: '04',
    title: 'Plan the Move',
    desc: 'Confirm packing schedules, specialized crating needs, vehicle allocation, and transit timeline.',
  },
  {
    number: '05',
    title: 'Move & Handover',
    desc: 'Execution by trained handling crews, live milestone tracking, careful room placement, and final proof-of-delivery.',
  },
];

const servicesFaqs = [
  {
    q: 'Which service should I choose for an apartment or flat relocation?',
    a: 'Choose Household Shifting. It covers full end-to-end relocation including 5-layer packing, modular furniture dismantling, dedicated container transit, and room-wise unpacking at your new residence.',
  },
  {
    q: 'Can I transport my car or bike along with my household belongings?',
    a: 'Yes. We offer combined relocation packages where your vehicle can be scheduled alongside your home move. Cars are transported on specialized car carriers, while bikes can be crated and moved in containerized vehicles.',
  },
  {
    q: 'What is the difference between Parcel/Cargo Shifting and Household Shifting?',
    a: 'Household Shifting is a comprehensive full-home moving service with on-site packing crews, furniture carpentry, and room placement. Parcel & Cargo is an express freight service suited for sending luggage, boxes, or smaller consignments between cities.',
  },
  {
    q: 'Do you execute office moves during weekends or after business hours?',
    a: 'Yes. Our Office Relocation team specializes in weekend, holiday, and night-shift execution to ensure zero business downtime for your workstations and IT infrastructure.',
  },
  {
    q: 'Are bikes packed in wooden crates during transit?',
    a: 'Yes. We offer custom wooden crating alongside multi-layer bubble wrap, foam sheeting, and mirror removal to prevent scratches or transit vibration damage.',
  },
  {
    q: 'What documents are required for international relocation?',
    a: 'International moves require a valid passport, visa, work permit or residency papers, copy of flight tickets, and a detailed packing inventory. Our global move coordinators assist you through the paperwork and customs clearance procedures.',
  },
];

export default function ServicesPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: servicesFaqs.map((faq) => ({
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
        label="Our Services"
        title={
          <>
            Moving Solutions Built Around{' '}
            <span className="text-[#F28A32]">Your Needs</span>
          </>
        }
        subtitle="From household relocation and vehicle transportation to office moves, cargo and international moving, explore the complete relocation and logistics services offered by Bharat Relocators."
        breadcrumbs={[{ label: 'Services' }]}
        /* Hero Visual Image: Drop your image in /public/images/ and set src="/images/your-image.png" */
        image={
          <img
            src="/images/Services.png"
            alt="Packers and Movers Services - Bharat Relocators"
          />
        }
        actions={
          <>
            <Link
              href="/get-a-quote"
              className="inline-flex items-center gap-2 bg-[#E53935] hover:bg-[#c62828] text-white font-semibold text-sm px-6 py-3.5 rounded-xl shadow-md transition-all hover:scale-[1.02]"
            >
              <span>Get Free Moving Quote</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
            <Link
              href="/tracking"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 text-white font-semibold text-sm px-5 py-3.5 rounded-xl border border-white/20 transition-colors"
            >
              <span>Track Your Shipment</span>
              <span aria-hidden="true">→</span>
            </Link>
          </>
        }
      />

      {/* 2. Services Overview Intro */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Service Directory"
            title="Explore Our Relocation & Transportation Services"
            subtitle="Every move has different requirements. Choose the service that best matches what you need to move, where it needs to go, and the type of support you require."
          />

          {/* 3. Main 6-Service Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {SERVICES.map((service) => {
              const icon = serviceIcons[service.id] || serviceIcons.household;
              return (
                <div
                  key={service.id}
                  className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col justify-between"
                >
                  <div>
                    {/* Visual Preview */}
                    <Link
                      href={service.canonicalPath}
                      className="aspect-[16/10] overflow-hidden relative block"
                      aria-label={`Explore ${service.title}`}
                    >
                      <AppImage
                        src={service.img}
                        alt={service.alt}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent opacity-70 group-hover:opacity-85 transition-opacity" />

                      {/* Icon Badge */}
                      <div className="absolute top-4 left-4 w-11 h-11 bg-white/95 backdrop-blur-md rounded-2xl flex items-center justify-center text-[#E53935] shadow-lg group-hover:bg-[#E53935] group-hover:text-white transition-all duration-300 border border-white/40">
                        {icon}
                      </div>

                      {/* Category Chip */}
                      <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-medium text-white/90 border border-white/20">
                        {service.category}
                      </div>
                    </Link>

                    {/* Card Content */}
                    <div className="p-6 sm:p-7">
                      <h3 className="text-xl font-bold text-[#082F52] font-display mb-2 group-hover:text-[#E53935] transition-colors">
                        <Link href={service.canonicalPath}>
                          {service.title}
                        </Link>
                      </h3>
                      <p className="text-slate-600 text-sm leading-relaxed mb-5">
                        {service.shortDesc}
                      </p>

                      {/* Feature Chips */}
                      <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-100">
                        {service.features.map((feat) => (
                          <span
                            key={feat}
                            className="text-[11px] font-medium px-2.5 py-1 rounded-md bg-slate-50 border border-slate-200/70 text-slate-700"
                          >
                            ✓ {feat}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Card Action Footer */}
                  <div className="px-6 sm:px-7 pb-6 pt-2 border-t border-slate-100">
                    <Link
                      href={service.canonicalPath}
                      className="inline-flex items-center justify-between w-full text-[#E53935] hover:text-[#c62828] font-bold text-xs uppercase tracking-wider group-hover:translate-x-1 transition-all"
                    >
                      <span>Explore {service.title}</span>
                      <span className="text-base font-bold">→</span>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Decision Support: "Not Sure Which Service You Need?" */}
      <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Decision Guide"
            title="Not Sure Which Service You Need?"
            subtitle="The right service depends on what you are moving, your origin and destination, shipment size, vehicle requirements, and whether the move is domestic or international."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {decisionPathways.map((pathway, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded-md bg-[#F28A32]/10 text-[#F28A32] border border-[#F28A32]/20">
                      {pathway.tag}
                    </span>
                    <span className="text-xs font-mono font-bold text-slate-400">0{index + 1}</span>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-[#E53935] transition-colors mb-2">
                    {pathway.movingWhat}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    {pathway.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100">
                  <Link
                    href={pathway.href}
                    className="text-xs font-bold text-[#E53935] hover:text-[#c62828] inline-flex items-center gap-1 group/btn transition-colors"
                  >
                    <span>Recommended: {pathway.serviceName}</span>
                    <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Quick Service Comparison Table */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="At A Glance"
            title="Service Overview & Comparison"
            subtitle="Compare typical consignment types, specialized handling highlights, and geographic coverage across our six primary services."
          />

          <div className="mt-12 overflow-x-auto">
            <table className="w-full text-left border-collapse bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-xs">
              <thead>
                <tr className="bg-[#071A2B] text-white text-xs uppercase tracking-wider font-semibold">
                  <th className="py-4 px-6">What Are You Moving?</th>
                  <th className="py-4 px-6">Recommended Service</th>
                  <th className="py-4 px-6">Key Operational Highlight</th>
                  <th className="py-4 px-6">Coverage Scope</th>
                  <th className="py-4 px-6 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-sm">
                {serviceComparisonRows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50 transition-colors">
                    <td className="py-4 px-6 font-medium text-slate-800">
                      {row.whatMoved}
                    </td>
                    <td className="py-4 px-6">
                      <span className="font-bold text-[#082F52] block">{row.service}</span>
                    </td>
                    <td className="py-4 px-6 text-slate-600 text-xs sm:text-sm">
                      {row.highlight}
                    </td>
                    <td className="py-4 px-6 text-slate-600 text-xs">
                      <span className="inline-block px-2.5 py-1 rounded-md bg-slate-100 text-slate-700">
                        {row.scope}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-right whitespace-nowrap">
                      <Link
                        href={row.href}
                        className="text-xs font-bold text-[#E53935] hover:text-[#c62828] inline-flex items-center gap-1 group/row transition-colors"
                      >
                        <span>View Details</span>
                        <span className="group-hover/row:translate-x-1 transition-transform">→</span>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 6. "Every Move Has Different Requirements" */}
      <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#E53935]/10 text-[#E53935] border border-[#E53935]/20 mb-3">
            Tailored Logistics
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#082F52] mb-4">
            Every Move Has Different Requirements
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-3xl mx-auto mb-8">
            A household move, a vehicle transfer, and an office relocation are not the same kind of job.
            The items being moved, handling requirements, transit equipment, timing, and site coordination can all differ.
            That is why Bharat Relocators organizes its operations around dedicated specialized services, ensuring the right packaging materials, vehicles, and trained personnel are assigned to each assignment.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/process"
              className="inline-flex items-center gap-2 bg-[#082F52] hover:bg-[#0b3b60] text-white font-semibold text-xs sm:text-sm px-6 py-3.5 rounded-xl transition-colors"
            >
              <span>See How We Work</span>
              <span>→</span>
            </Link>
            <Link
              href="/why-us"
              className="inline-flex items-center gap-2 bg-white hover:bg-slate-100 text-slate-800 font-semibold text-xs sm:text-sm px-6 py-3.5 rounded-xl border border-slate-300 transition-colors shadow-xs"
            >
              <span>Why Bharat Relocators</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 7. How Our Services Fit Into a Move (5-Step Journey) */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Service Workflow"
            title="How Our Services Fit Into Your Move"
            subtitle="From initial assessment to final room delivery and setup, our relocation methodology guarantees accountability at every milestone."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-12">
            {movingSteps.map((step) => (
              <div
                key={step.number}
                className="bg-slate-50 rounded-2xl p-6 border border-slate-200 flex flex-col justify-between relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-20 h-20 bg-[#F28A32]/5 rounded-bl-full pointer-events-none" />
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-2xl font-black font-mono text-[#F28A32]">
                      {step.number}
                    </span>
                    <span className="w-2 h-2 rounded-full bg-[#E53935]" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/process"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-[#E53935] hover:text-[#c62828] group transition-colors"
            >
              <span>Read complete step-by-step moving process</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 8. Customer Journey Ecosystem */}
      <section className="py-14 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500">
              Explore The Complete Bharat Relocators Experience
            </h3>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {[
              { label: 'Our Services', desc: '6 Service Offerings', href: '/services', current: true },
              { label: 'Moving Process', desc: '5-Step Procedure', href: '/process' },
              { label: 'Moving Guides', desc: 'Tips & Checklists', href: '/moving-guides' },
              { label: 'Customer Reviews', desc: 'Verified Feedback', href: '/testimonials' },
              { label: 'Moving FAQs', desc: 'Common Questions', href: '/faqs' },
              { label: 'Free Quote', desc: 'Instant Pricing', href: '/get-a-quote' },
            ].map((node, i) => (
              <Link
                key={i}
                href={node.href}
                className={`p-4 rounded-xl border text-center transition-all ${
                  node.current
                    ? 'bg-[#071A2B] text-white border-transparent shadow-md'
                    : 'bg-white hover:bg-slate-100 text-slate-800 border-slate-200'
                }`}
              >
                <span className="block text-xs font-bold truncate">{node.label}</span>
                <span className={`block text-[11px] mt-0.5 truncate ${node.current ? 'text-slate-300' : 'text-slate-500'}`}>
                  {node.desc}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Service Selection FAQ Preview */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Service FAQs"
            title="Frequently Asked Questions About Our Services"
            subtitle="Quick answers to help you understand service differences, vehicle crating, corporate relocations, and international documentation."
          />

          <div className="mt-10 space-y-4">
            {servicesFaqs.map((faq, index) => (
              <div
                key={index}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-6 transition-all"
              >
                <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2">
                  {faq.q}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/faqs"
              className="inline-flex items-center gap-2 bg-[#082F52] hover:bg-[#0b3b60] text-white font-semibold text-xs sm:text-sm px-6 py-3 rounded-xl transition-colors"
            >
              <span>View All Frequently Asked Questions</span>
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 10. Track Existing Shipment Utility */}
      <section className="py-12 bg-slate-50 border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#0B253D] rounded-2xl p-6 sm:p-8 border border-white/10 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
            <div>
              <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider bg-[#E53935]/20 text-[#F28A32] border border-[#E53935]/30 mb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E53935] animate-ping" />
                Customer Utility
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">
                Already Booked Your Move with Us?
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm max-w-xl">
                Check real-time milestone logs, dispatch scans, and vehicle transit status using your official Consignment Note (LR Number).
              </p>
            </div>

            <Link
              href="/tracking"
              className="inline-flex items-center gap-2 bg-[#E53935] hover:bg-[#c62828] text-white font-bold text-xs sm:text-sm px-6 py-3.5 rounded-xl transition-all shadow-md shrink-0 hover:scale-[1.02]"
            >
              <span>Track Shipment</span>
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 11. Final Conversion CTA Section */}
      <section className="py-16 sm:py-24 bg-[#071A2B] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#F28A32_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#E53935]/20 text-[#F28A32] border border-[#E53935]/30 mb-4">
            Start Your Relocation
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mb-4">
            Know What You Need to Move?
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed mb-8">
            Tell Bharat Relocators about your move and get the conversation started with transparent, zero-obligation pricing tailored to your requirements.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/get-a-quote"
              className="inline-flex items-center gap-2 bg-[#E53935] hover:bg-[#c62828] text-white font-bold text-sm sm:text-base px-6 sm:px-8 py-3.5 rounded-xl shadow-lg hover:shadow-xl transition-all"
            >
              <span>Get Free Moving Quote</span>
              <span aria-hidden="true">→</span>
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold text-sm sm:text-base px-6 py-3.5 rounded-xl border border-white/20 transition-all"
            >
              <span>Contact Us</span>
            </Link>

            <a
              href={getTelUrl(BUSINESS.phone.primary)}
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold text-sm sm:text-base px-5 py-3.5 rounded-xl border border-white/20 transition-all"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-2.2 2.2a15.057 15.057 0 01-6.59-6.59l2.2-2.21a.96.96 0 00.25-1.01A11.36 11.36 0 018.57 3.9c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.52c0-.55-.45-1-1-1z" />
              </svg>
              <span>Call: {BUSINESS.phone.primaryFormatted}</span>
            </a>

            <a
              href={getWhatsAppUrl(BUSINESS.phone.primary)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm sm:text-base px-6 py-3.5 rounded-xl shadow-lg transition-all"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.353.101.173.45 0.742.965 1.201.664.591 1.224.774 1.397.86.173.086.275.072.376-.043.101-.116.433-.506.549-.679.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.043.073.043.419-.101.824z" />
              </svg>
              <span>WhatsApp</span>
            </a>
          </div>

          <div className="mt-8 text-xs text-slate-400">
            Physical Hubs in Haltu &amp; Behala, Kolkata • Serving Local &amp; All India Moves
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
