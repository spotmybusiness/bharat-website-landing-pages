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

export const metadata: Metadata = generatePageMetadata({
  title: 'Moving Process — How Bharat Relocators Handles Your Move',
  description:
    'Understand the Bharat Relocators moving process, from planning and packing to secure transit, delivery, unpacking, and final handover across Kolkata and PAN India.',
  path: '/process',
});

// JSON-LD structured data for HowTo Process
const processSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How Bharat Relocators Handles Your Move',
  description:
    'A step-by-step moving process from survey and planning to multi-layer packing, secure transit, and final destination handover.',
  step: [
    {
      '@type': 'HowToStep',
      name: 'Survey, Planning & Custom Quote',
      text: 'Inventory assessment, route evaluation, scheduling, and transparent written quote preparation.',
      position: 1,
    },
    {
      '@type': 'HowToStep',
      name: 'Professional Packing & Preparation',
      text: 'Multi-layer bubble cushioning, 5-layer corrugated boxing, modular furniture dismantling, and itemized labeling.',
      position: 2,
    },
    {
      '@type': 'HowToStep',
      name: 'Secure Loading & Monitored Transit',
      text: 'Organized container loading, shock-absorption padding, verified highway drivers, and milestone transit tracking.',
      position: 3,
    },
    {
      '@type': 'HowToStep',
      name: 'Delivery, Unpacking & Final Handover',
      text: 'Safe destination unloading, room-specific placement, furniture reassembly, debris removal, and final customer sign-off.',
      position: 4,
    },
  ],
};

const overviewCards = [
  {
    title: 'Planned Before Moving Day',
    desc: 'Logistics requirements, inventory volume, building access, and schedules are mapped out well before trucks arrive.',
    icon: (
      <svg className="w-5 h-5 text-[#E53935]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'Packed for the Type of Item',
    desc: 'From high-density bubble cushioning for fragile crockery to custom crating for electronics, materials match item vulnerability.',
    icon: (
      <svg className="w-5 h-5 text-[#E53935]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
  },
  {
    title: 'Monitored During Transit',
    desc: 'Transported in dedicated, closed container vehicles driven by verified highway drivers with proactive milestone updates.',
    icon: (
      <svg className="w-5 h-5 text-[#E53935]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10l1 1h1m8-1h1l1-1v-3.65a1 1 0 00-.22-.624l-3.48-4.35A1 1 0 0011.52 6H10" />
      </svg>
    ),
  },
  {
    title: 'Delivered With Care',
    desc: 'Dedicated unloading, room-specific placement, bed and furniture reassembly, and packing debris removal for a complete transition.',
    icon: (
      <svg className="w-5 h-5 text-[#E53935]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
    ),
  },
];

const behindTheScenesCards = [
  {
    title: 'Careful Coordination',
    desc: 'Behind the scenes, our coordinators verify building permissions, lift availability, society timing rules, and road clearance so there are no surprises on moving day.',
    tag: 'Pre-Move Planning',
  },
  {
    title: 'Organized Packing',
    desc: 'Packing crews categorize items room by room, apply sequential numbering, and document item conditions to make unpacking and setup structured at destination.',
    tag: 'Inventory Protocol',
  },
  {
    title: 'Safer Loading',
    desc: 'Heavier goods are positioned over vehicle axles, shock-absorbing pads line the floor, and cargo tie-downs secure all cartons against road vibration.',
    tag: 'Transit Engineering',
  },
  {
    title: 'Clear Communication',
    desc: 'You have a dedicated point of contact who shares departure confirmations, highway progress checkpoints, and destination arrival notices throughout the move.',
    tag: 'Milestone Tracking',
  },
];

const serviceSpecificCards = [
  {
    title: 'Household Shifting',
    category: 'Residential Relocation',
    desc: 'Complete home relocations with multi-layer bubble packing for crockery, modular furniture dismantling, room-wise labeling, and doorstep reassembly.',
    href: '/household-shifting',
  },
  {
    title: 'Car Transportation',
    category: 'Automotive Logistics',
    desc: 'Pre-transit vehicle condition inspection, hydraulic ramp loading, internal wheel-chocks, closed carrier trucks, and specialized transit insurance.',
    href: '/car-shifting',
  },
  {
    title: 'Bike Transport',
    category: 'Two-Wheeler Express',
    desc: 'Protective handlebar/mirror detachment, custom wooden crating, bubble wrapping of painted body panels, and secure two-wheeler bay lashing.',
    href: '/bike-shifting',
  },
  {
    title: 'Parcel & Cargo',
    category: 'Express Intercity',
    desc: 'Doorstep pickup for part-loads and luggage, volumetric weight optimization, protective crating, and scheduled delivery across 230+ cities.',
    href: '/parcel-shifting',
  },
  {
    title: 'Office Relocation',
    category: 'Commercial & Corporate',
    desc: 'Phased corporate shifting, anti-static IT server protection, labeled employee workstation bins, and weekend moves to prevent business downtime.',
    href: '/office-relocation',
  },
  {
    title: 'International Moving',
    category: 'Global Freight',
    desc: 'Air and ocean container coordination, international export crating standards, customs documentation guidance, and port-to-door delivery assistance.',
    href: '/international-moving',
  },
];

const processFaqs = [
  {
    q: 'How early should I schedule my move with Bharat Relocators?',
    a: 'We recommend booking 3 to 5 days in advance for local moves within Kolkata, and 7 to 10 days ahead for intercity relocations across India. This allows our team to conduct a thorough survey, reserve dedicated container vehicles, and allocate the right packing crew.',
  },
  {
    q: 'What preparations should I make before the packing team arrives?',
    a: 'Please separate essential personal documents, jewelry, medications, keys, and daily personal necessities into a separate personal bag that you will carry yourself. Ensure refrigerators are defrosted and all closets are easily accessible.',
  },
  {
    q: 'How are fragile items, glassware, and electronics protected?',
    a: 'Fragile items receive multi-layer protection including high-density bubble wrap, tissue paper, corrugated dividers, and reinforced outer cartons. Flat-screen televisions and sensitive electronics are packed with custom foam corner guards and dedicated wooden crates where necessary.',
  },
  {
    q: 'How is my shipment handled and monitored during transit?',
    a: 'Shipments travel in closed container trucks equipped with internal cargo tie-downs and shock-absorbing base padding. You receive direct coordinator contact details and milestone updates at departure, key highway points, and destination arrival.',
  },
  {
    q: 'What happens when the shipment reaches the destination?',
    a: 'Our crew unloads all items into their respective designated rooms as directed by you. We reassemble dismantled beds and modular furniture, assist with opening primary essential boxes, cross-check the inventory manifest, and remove packing debris.',
  },
];

export default function ProcessPage() {
  return (
    <PageLayout>
      <JsonLd data={processSchema} />

      {/* 1. Page Hero */}
      <PageHero
        label="How We Move"
        title={
          <>
            From Your First Call to Final Handover,{' '}
            <span className="text-[#F28A32]">Every Move Has a Process.</span>
          </>
        }
        subtitle="At Bharat Relocators, every relocation follows a structured workflow designed around careful planning, safe packing, monitored transit, and a smooth handover at your destination."
        breadcrumbs={[{ label: 'Process' }]}
        /* Hero Visual Image: Drop your image in /public/images/ and set src="/images/your-image.png" */
        image={
          <img
            src="/iamges/process.png"
            alt="Relocation Process and Workflow - Bharat Relocators"
          />
        }
        actions={
          <>
            <Link
              href="/get-a-quote"
              className="inline-flex items-center gap-2 bg-[#E53935] hover:bg-[#c62828] text-white font-semibold text-sm px-6 py-3.5 rounded-xl shadow-md transition-colors"
            >
              Get Free Moving Quote
            </Link>
            <a
              href={getTelUrl(BUSINESS.phone.primary)}
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 text-white font-semibold text-sm px-5 py-3.5 rounded-xl border border-white/20 transition-colors"
            >
              Call Coordinator
            </a>
          </>
        }
      />

      {/* 2. Process Overview */}
      <section className="py-20 sm:py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Workflow Discipline"
            title="A Structured Moving Process, Built Around Your Move"
            subtitle="Professional relocation is far more than loading belongings into a truck. Every move at Bharat Relocators follows a synchronized operational framework engineered to protect your time, property, and peace of mind."
          />

          {/* Workflow Sequence Progression Bar */}
          <div className="mb-14 p-5 rounded-2xl bg-[#071A2B] text-white border border-white/10 shadow-lg overflow-x-auto">
            <div className="flex items-center justify-between min-w-[760px] gap-2">
              {[
                'Enquiry',
                'Assessment',
                'Planning',
                'Packing',
                'Loading',
                'Transit',
                'Delivery',
                'Handover',
              ].map((stage, idx, arr) => (
                <React.Fragment key={stage}>
                  <div className="flex flex-col items-center text-center">
                    <span className="w-7 h-7 rounded-full bg-[#E53935] text-white text-xs font-bold flex items-center justify-center mb-1.5 shadow-sm">
                      {idx + 1}
                    </span>
                    <span className="text-xs font-semibold text-white/90 whitespace-nowrap">
                      {stage}
                    </span>
                  </div>
                  {idx < arr.length - 1 && (
                    <div className="flex-1 h-0.5 bg-gradient-to-r from-[#E53935]/80 via-[#F28A32]/60 to-[#E53935]/80 mx-2" />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* 4 Supporting Overview Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {overviewCards.map((card) => (
              <div
                key={card.title}
                className="p-6 rounded-2xl bg-slate-50/80 border border-slate-200/80 hover:border-[#F28A32]/40 hover:shadow-md transition-all duration-200 group"
              >
                <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center mb-4 shadow-xs group-hover:scale-105 transition-transform">
                  {card.icon}
                </div>
                <h3 className="font-bold text-[#082F52] text-base font-display mb-2 group-hover:text-[#E53935] transition-colors">
                  {card.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Detailed 4-Step Moving Process (Core Timeline) */}
      <section className="py-20 sm:py-24 bg-slate-50 relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Complete Walkthrough"
            title="Step-by-Step: How Your Relocation Unfolds"
            subtitle="A closer look at the planning, protection, transit, and destination protocols that define every Bharat Relocators move."
          />

          <div className="space-y-12 sm:space-y-16 relative">
            {/* Connecting Vertical Track on Desktop */}
            <div className="hidden md:block absolute left-8 top-12 bottom-12 w-0.5 bg-gradient-to-b from-[#E53935] via-[#F28A32] to-[#082F52] pointer-events-none" />

            {/* STEP 01 */}
            <div className="relative flex flex-col md:flex-row gap-6 md:gap-10 items-start">
              <div className="w-16 h-16 rounded-2xl bg-[#082F52] text-white font-display font-extrabold text-2xl flex items-center justify-center shrink-0 border-4 border-white shadow-md z-10">
                01
              </div>
              <div className="flex-1 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                <span className="inline-block text-[#F28A32] text-xs font-bold uppercase tracking-wider mb-2">
                  Stage 1 · Survey & Logistics Planning
                </span>
                <h3 className="text-2xl sm:text-2xl font-bold font-display text-[#082F52] mb-4">
                  Survey, Planning & Custom Quote
                </h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                  Every reliable move starts with clear assessment. We take the time to understand your moving schedule, origin and destination locations, goods volume, elevator access, and any specialized assets before preparing an all-inclusive transparent quote.
                </p>

                <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200/70">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#082F52] mb-3">
                    What this stage covers:
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-sm text-slate-700">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E53935]" />
                      Comprehensive inventory assessment
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E53935]" />
                      Route evaluation & transit schedule
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E53935]" />
                      Vehicle sizing & crew allocation
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E53935]" />
                      Transparent written quote with zero hidden charges
                    </li>
                    <li className="flex items-center gap-2 sm:col-span-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E53935]" />
                      Clarifying building rules and society access passes
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* STEP 02 */}
            <div className="relative flex flex-col md:flex-row gap-6 md:gap-10 items-start">
              <div className="w-16 h-16 rounded-2xl bg-[#082F52] text-white font-display font-extrabold text-2xl flex items-center justify-center shrink-0 border-4 border-white shadow-md z-10">
                02
              </div>
              <div className="flex-1 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                <span className="inline-block text-[#F28A32] text-xs font-bold uppercase tracking-wider mb-2">
                  Stage 2 · Material Protection & Packing
                </span>
                <h3 className="text-2xl sm:text-2xl font-bold font-display text-[#082F52] mb-4">
                  Professional Packing & Preparation
                </h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                  On packing day, our trained packing crew arrives equipped with multi-layer packaging supplies. Each item is sorted, cushioned according to fragility, and labeled room by room to make destination setup effortless.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/70">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#082F52] mb-2">
                      Packaging Materials:
                    </h4>
                    <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700">
                      <li>• 5-layer heavy corrugated cartons</li>
                      <li>• High-density bubble wrap & film</li>
                      <li>• Reinforced edge & corner protectors</li>
                      <li>• Waterproof protective transit covers</li>
                    </ul>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/70">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#082F52] mb-2">
                      Preparation Work:
                    </h4>
                    <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700">
                      <li>• Modular bed & furniture dismantling</li>
                      <li>• Crockery & glassware shock separation</li>
                      <li>• Electronics custom cushioning</li>
                      <li>• Room-by-room box labeling</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* STEP 03 */}
            <div className="relative flex flex-col md:flex-row gap-6 md:gap-10 items-start">
              <div className="w-16 h-16 rounded-2xl bg-[#082F52] text-white font-display font-extrabold text-2xl flex items-center justify-center shrink-0 border-4 border-white shadow-md z-10">
                03
              </div>
              <div className="flex-1 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                <span className="inline-block text-[#F28A32] text-xs font-bold uppercase tracking-wider mb-2">
                  Stage 3 · Vehicle Loading & Transit
                </span>
                <h3 className="text-2xl sm:text-2xl font-bold font-display text-[#082F52] mb-4">
                  Secure Loading & Monitored Transit
                </h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                  Loading is an engineering exercise. Heavy furniture and appliances are positioned over the truck axles for balance, secured with industrial tie-down straps, and cushioned with shock-absorbent pads inside dedicated closed container trucks.
                </p>

                <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200/70">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#082F52] mb-3">
                    Transit safeguards:
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-sm text-slate-700">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E53935]" />
                      Closed container trucks protecting from rain & dust
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E53935]" />
                      Internal lashing belts & shock-absorbing padding
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E53935]" />
                      Verified interstate highway drivers
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E53935]" />
                      Milestone tracking updates via phone & WhatsApp
                    </li>
                    <li className="flex items-center gap-2 sm:col-span-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E53935]" />
                      Comprehensive transit insurance coverage active throughout
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* STEP 04 */}
            <div className="relative flex flex-col md:flex-row gap-6 md:gap-10 items-start">
              <div className="w-16 h-16 rounded-2xl bg-[#082F52] text-white font-display font-extrabold text-2xl flex items-center justify-center shrink-0 border-4 border-white shadow-md z-10">
                04
              </div>
              <div className="flex-1 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                <span className="inline-block text-[#F28A32] text-xs font-bold uppercase tracking-wider mb-2">
                  Stage 4 · Arrival & Destination Setup
                </span>
                <h3 className="text-2xl sm:text-2xl font-bold font-display text-[#082F52] mb-4">
                  Delivery, Unpacking & Final Handover
                </h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                  Our responsibility does not end when the vehicle arrives. We handle safe unloading, carry boxes into their designated rooms, reassemble beds and modular furniture, and clear away packing debris so your new home is ready to live in.
                </p>

                <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200/70">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#082F52] mb-3">
                    Destination completion:
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-sm text-slate-700">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E53935]" />
                      Careful unloading and entryway protection
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E53935]" />
                      Room-wise carton and furniture placement
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E53935]" />
                      Bed & modular furniture reassembly
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E53935]" />
                      Collection & removal of packing materials
                    </li>
                    <li className="flex items-center gap-2 sm:col-span-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E53935]" />
                      Physical inventory cross-check & customer sign-off
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. What Happens Behind the Scenes */}
      <section className="py-20 sm:py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Operational Rigor"
            title="What Makes the Process Work"
            subtitle="Reliable relocations are built on thorough backend coordination. Here is the operational thinking that keeps every move proceeding according to schedule."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {behindTheScenesCards.map((card) => (
              <div
                key={card.title}
                className="bg-slate-50 p-6 rounded-2xl border border-slate-200/80 flex flex-col justify-between"
              >
                <div>
                  <span className="inline-block text-[11px] font-bold uppercase tracking-wider text-[#F28A32] mb-3">
                    {card.tag}
                  </span>
                  <h3 className="font-bold text-[#082F52] text-lg font-display mb-2">
                    {card.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Service-Specific Handling */}
      <section className="py-20 sm:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Specialized Protocols"
            title="Every Move Has Different Requirements"
            subtitle="While our core discipline remains consistent, specific cargo types demand distinct handling protocols, specialized equipment, and custom logistics."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceSpecificCards.map((service) => (
              <div
                key={service.title}
                className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md hover:border-[#F28A32]/40 transition-all duration-200 flex flex-col justify-between group"
              >
                <div>
                  <span className="inline-block text-[11px] font-bold uppercase tracking-wider text-[#F28A32] mb-2">
                    {service.category}
                  </span>
                  <h3 className="font-bold text-[#082F52] text-xl font-display mb-3 group-hover:text-[#E53935] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {service.desc}
                  </p>
                </div>
                <Link
                  href={service.href}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#E53935] group-hover:text-[#c62828] transition-colors"
                >
                  Explore Service
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Communication & Transit Monitoring */}
      <section className="py-20 sm:py-24 bg-[#071A2B] text-white relative overflow-hidden">
        {/* Glow acccents */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#1478B5]/15 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-[#E53935]/15 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12 text-center mx-auto">
            <span className="inline-block bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white/90 mb-4">
              Direct Coordination
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white mb-4 tracking-tight">
              Stay Informed While Your Move Is Underway
            </h2>
            <p className="text-white/80 text-sm sm:text-base leading-relaxed">
              Moving shouldn’t be stressful. We ensure you are kept informed at every stage with clear milestone checkpoints, schedule clarity, and responsive coordinator support.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div className="text-2xl font-bold font-display text-[#F28A32] mb-2">01</div>
              <h3 className="font-bold text-white text-base mb-2">Dedicated Move Coordinator</h3>
              <p className="text-white/70 text-xs sm:text-sm leading-relaxed">
                A single point of contact who understands your move requirements and coordinates crews and vehicles.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div className="text-2xl font-bold font-display text-[#F28A32] mb-2">02</div>
              <h3 className="font-bold text-white text-base mb-2">Milestone Notifications</h3>
              <p className="text-white/70 text-xs sm:text-sm leading-relaxed">
                Updates shared upon departure, highway checkpoints, and destination arrival via WhatsApp and phone.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div className="text-2xl font-bold font-display text-[#F28A32] mb-2">03</div>
              <h3 className="font-bold text-white text-base mb-2">Proactive Check-Ins</h3>
              <p className="text-white/70 text-xs sm:text-sm leading-relaxed">
                Scheduled check-ins during long-distance intercity transit so you always know where your shipment stands.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div className="text-2xl font-bold font-display text-[#F28A32] mb-2">04</div>
              <h3 className="font-bold text-white text-base mb-2">Realistic Schedules</h3>
              <p className="text-white/70 text-xs sm:text-sm leading-relaxed">
                Realistic delivery estimates calculated around highway conditions rather than speculative promises.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Final Handover Section */}
      <section className="py-20 sm:py-24 bg-white border-b border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Destination Completion"
            title="The Move Isn't Finished Until the Handover Is Complete"
            subtitle="Our work continues until your belongings are safely positioned in your new home, furniture is reassembled, and packing debris is cleared away."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <span className="w-8 h-8 rounded-full bg-[#082F52] text-white text-xs font-bold flex items-center justify-center mb-4">
                A
              </span>
              <h3 className="font-bold text-[#082F52] text-base mb-2">Room-Wise Placement</h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Cartons and furniture are placed directly into their designated master bedrooms, kitchens, and living spaces according to your guidance.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <span className="w-8 h-8 rounded-full bg-[#082F52] text-white text-xs font-bold flex items-center justify-center mb-4">
                B
              </span>
              <h3 className="font-bold text-[#082F52] text-base mb-2">Assembly & Setup</h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Beds, wardrobes, and dining tables disassembled at origin are reconstructed securely by our trained carpentry crew.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <span className="w-8 h-8 rounded-full bg-[#082F52] text-white text-xs font-bold flex items-center justify-center mb-4">
                C
              </span>
              <h3 className="font-bold text-[#082F52] text-base mb-2">Manifest Verification & Cleanup</h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Carton counts are verified against your booking manifest, and used packing materials are collected and removed from your premises.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Process FAQ / Helpful Questions */}
      <section className="py-20 sm:py-24 bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Process Queries"
            title="Frequently Asked Questions About Our Process"
            subtitle="Straightforward answers about our survey, packing techniques, vehicle safety, transit timelines, and delivery completion."
          />

          <FAQAccordion items={processFaqs} />

          <div className="mt-12 text-center bg-white p-6 rounded-2xl border border-slate-200 shadow-xs">
            <p className="text-slate-700 text-sm mb-3">
              Have a question about your specific move or custom inventory requirements?
            </p>
            <Link
              href="/faqs"
              className="text-[#E53935] hover:text-[#c62828] font-bold text-sm inline-flex items-center gap-1.5 transition-colors"
            >
              View All Frequently Asked Questions →
            </Link>
          </div>
        </div>
      </section>

      {/* 9. Final Contact / Conversion Section */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeader
            label="Get Started"
            title="Ready to Plan Your Move?"
            subtitle="Tell us where you're moving from, where you're going, and what needs to be moved. Our team can help you understand the right relocation service for your requirements."
          />

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-xl mx-auto">
            <Link
              href="/get-a-quote"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#E53935] hover:bg-[#c62828] text-white font-bold text-sm px-8 py-4 rounded-xl shadow-md hover:shadow-lg transition-all"
            >
              Get Free Moving Quote
            </Link>
            <a
              href={getTelUrl(BUSINESS.phone.primary)}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#082F52] hover:bg-[#0b3b60] text-white font-semibold text-sm px-7 py-4 rounded-xl shadow-md transition-colors"
            >
              Call Coordinator
            </a>
            <a
              href={getWhatsAppUrl('Hi, I would like to understand your moving process and get an estimate for my move.')}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm px-7 py-4 rounded-xl shadow-md transition-colors"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
