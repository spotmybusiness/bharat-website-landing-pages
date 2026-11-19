import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import PageLayout from '@/components/PageLayout';
import PageHero from '@/components/PageHero';
import SectionHeader from '@/components/ui/SectionHeader';
import FAQAccordion from '@/components/FAQAccordion';
import JsonLd from '@/components/JsonLd';
import MandatoryDocumentsBlock from '@/components/MandatoryDocumentsBlock';
import { generatePageMetadata } from '@/lib/metadata';
import { BUSINESS, getTelUrl, getWhatsAppUrl } from '@/lib/business';
import { getFAQSchema, buildGraphSchema } from '@/lib/schema';

export const metadata: Metadata = generatePageMetadata({
  title: 'Moving Process — How Bharat Relocators Handles Your Move',
  description:
    'Understand the Bharat Relocators moving process, from planning and packing to secure transit, delivery, unpacking, and final handover across Kolkata and PAN India.',
  path: '/process',
});

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
    desc: '5-ply dish-barrel cartons, 4mm EPE foam sheets, 23-micron waterproof stretch film, and ISPM-15 pinewood crating matched to item fragility.',
    icon: (
      <svg className="w-5 h-5 text-[#E53935]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
  },
  {
    title: 'Monitored During Transit',
    desc: 'Transported in dedicated 14ft, 17ft, or 19ft steel-roof closed containers with stamped LR/Bilty dispatch IDs and scheduled highway check-ins.',
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
    title: 'Society & Lane Coordination',
    desc: 'Our Haltu and Behala coordinators verify MyGate, NKDA (New Town), and NDITA (Salt Lake Sector V) service-lift permits, 8-ft para-lane Tata Ace shuttles, and Kolkata Traffic Police No-Entry windows.',
    tag: 'Pre-Move Planning',
  },
  {
    title: 'Sequential Carbon-Copy Inventory',
    desc: 'Packing crews categorize cartons room by room, apply sequential numbering, and log remarks on your Numbered Carbon-Copy Packing List (and VCR sheet for cars/bikes) before loading.',
    tag: 'Inventory Protocol',
  },
  {
    title: 'Balanced Container Lashing',
    desc: 'Heavier appliances sit over truck axles inside 14ft, 17ft, or 19ft steel-roof closed containers, lined with floor padding and anchored by nylon ratchet straps.',
    tag: 'Transit Engineering',
  },
  {
    title: 'LR / Bilty & Direct Check-Ins',
    desc: 'You receive a Stamped Consignment Note (LR/Bilty) at dispatch plus direct coordinator phone and WhatsApp check-ins at highway toll points and prior to arrival.',
    tag: 'LR / Bilty Tracking',
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
    a: 'Fragile items receive multi-layer protection including 4mm EPE foam sheets, 5-ply dish-barrel cartons with corrugated dividers, and 23-micron waterproof stretch film. Flat-screen LED TVs, marble idols, and glass tops receive custom ISPM-15 pinewood crating where needed.',
  },
  {
    q: 'How is my shipment handled and monitored during transit?',
    a: 'Shipments travel in 14ft, 17ft, or 19ft closed steel containers equipped with internal cargo tie-downs and shock-absorbing base padding. You receive your stamped LR/Bilty number, direct coordinator contact, and dispatch plus highway checkpoint updates.',
  },
  {
    q: 'What happens when the shipment reaches the destination?',
    a: 'Our crew unloads all items into their respective designated rooms, reassembles dismantled beds and modular furniture, reconciles carton counts against your carbon-copy packing list, clears used wrapping debris, and hands over your GST Tax Invoice.',
  },
];

const pageSchema = buildGraphSchema([
  {
    '@type': 'HowTo',
    name: 'How Bharat Relocators Handles Your Move',
    description:
      'A step-by-step moving process from pre-move CFT survey and 5-layer packing to closed-container transit, 4-document handover, and room setup.',
    step: [
      {
        '@type': 'HowToStep',
        name: 'Survey, Planning & Custom Quote',
        text: 'CFT volume audit, Kolkata No-Entry and society lift slot planning, shuttle assessment, and itemized written survey quote.',
        position: 1,
      },
      {
        '@type': 'HowToStep',
        name: 'Professional Packing & Preparation',
        text: '5-ply dish-barrels, 4mm EPE foam sheets, 23-micron stretch film, pinewood crating, furniture dismantling, and numbered packing list tagging.',
        position: 2,
      },
      {
        '@type': 'HowToStep',
        name: 'Secure Loading & Monitored Transit',
        text: 'Organized loading inside 14ft/17ft/19ft closed steel containers, Tata Ace para-lane shuttles, stamped LR/Bilty dispatch, and highway checkpoint calls.',
        position: 3,
      },
      {
        '@type': 'HowToStep',
        name: 'Delivery, Unpacking & Final Handover',
        text: 'Room-wise placement, furniture reassembly, carbon-copy packing list sign-off, debris removal, and GSTIN 19AAWFB0500G1ZL tax invoice delivery.',
        position: 4,
      },
    ],
  },
  getFAQSchema(processFaqs),
]);

export default function ProcessPage() {
  return (
    <PageLayout>
      <JsonLd data={pageSchema} />

      {/* 1. Page Hero */}
      <PageHero
        label="How We Move"
        title={
          <>
            From Your First Call to Final Handover,{' '}
            <span className="text-[#F28A32]">Every Move Has a Process.</span>
          </>
        }
        subtitle="At Bharat Relocators, every relocation in Kolkata and across India follows a structured workflow designed around careful planning, safe packing, monitored transit, and a smooth handover at your destination."
        breadcrumbs={[{ label: 'Process' }]}
        /* Hero Visual Image: Drop your image in /public/images/ and set src="/images/your-image.png" */
        image={
          <div className="rounded-2xl border border-white/20 bg-white/5 backdrop-blur-sm p-3 shadow-[0_4px_24px_rgba(0,0,0,0.25)]">
            <img
              src="/images/process.png"
              alt="Step-by-step relocation and packing process workflow at Bharat Relocators"
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
                  Every reliable move begins with a physical or video CFT inventory audit coordinated from our Haltu (700078) or Behala (700061) office. We lock stair/lift rules, narrow-lane shuttle requirements, and route timing before issuing your itemized written survey quote.
                </p>

                <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200/70">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#082F52] mb-3">
                    What this stage covers:
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-sm text-slate-700">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E53935]" />
                      Room-wise CFT volume &amp; fragile-item audit
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E53935]" />
                      Kolkata No-Entry slot planning (EM Bypass, Vidyasagar Setu, D.H. Road)
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E53935]" />
                      Container sizing (14ft/17ft/19ft) &amp; 8-ft para-lane Tata Ace check
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E53935]" />
                      Itemized Written Survey Quote (CFT, floor &amp; shuttle locked upfront)
                    </li>
                    <li className="flex items-center gap-2 sm:col-span-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E53935]" />
                      MyGate / NKDA / NDITA service-lift booking &amp; society gate-pass clearance
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
                  Stage 2 · Material Protection &amp; Packing
                </span>
                <h3 className="text-2xl sm:text-2xl font-bold font-display text-[#082F52] mb-4">
                  Professional Packing &amp; Preparation
                </h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                  On packing morning, our crew arrives with fresh 5-ply cartons, EPE foam rolls, waterproof stretch film, and crating timber. Every box is numbered sequentially on your Carbon-Copy Packing List for fast room-wise unpacking.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/70">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#082F52] mb-2">
                      Packaging Materials:
                    </h4>
                    <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700">
                      <li>• 5-ply dish-barrel &amp; double-wall cartons</li>
                      <li>• 4mm EPE foam sheets &amp; 23-micron stretch film</li>
                      <li>• Corrugated corner guards &amp; edge boards</li>
                      <li>• ISPM-15 pinewood crating for LED TVs &amp; idols</li>
                    </ul>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/70">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#082F52] mb-2">
                      Preparation Work:
                    </h4>
                    <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700">
                      <li>• Modular bed &amp; wardrobe dismantling</li>
                      <li>• Partitioned crockery &amp; glassware wrapping</li>
                      <li>• Anti-static electronics &amp; appliance prep</li>
                      <li>• Numbered Carbon-Copy Packing List &amp; room tags</li>
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
                  Stage 3 · Vehicle Loading &amp; Transit
                </span>
                <h3 className="text-2xl sm:text-2xl font-bold font-display text-[#082F52] mb-4">
                  Secure Loading &amp; Monitored Transit
                </h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                  Where narrow 8-ft Kolkata <em>para</em> lanes restrict heavy rigs, our crew performs a supervised <em>Tata Ace</em> shuttle transfer to our 14ft, 17ft, or 19ft steel-roof closed container. Heavy appliances sit over truck axles and are secured with nylon ratchet straps.
                </p>

                <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200/70">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#082F52] mb-3">
                    Transit safeguards:
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-sm text-slate-700">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E53935]" />
                      14ft/17ft/19ft steel-roof closed containers (rain &amp; dust sealed)
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E53935]" />
                      Nylon ratchet lashing belts &amp; floor padding
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E53935]" />
                      8-ft para-lane Tata Ace shuttle transfers where needed
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E53935]" />
                      Stamped Consignment Note (LR / Bilty) &amp; WhatsApp check-ins
                    </li>
                    <li className="flex items-center gap-2 sm:col-span-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E53935]" />
                      Declared-value transit insurance coverage active throughout
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
                  Stage 4 · Arrival &amp; Destination Setup
                </span>
                <h3 className="text-2xl sm:text-2xl font-bold font-display text-[#082F52] mb-4">
                  Delivery, Unpacking &amp; Final Handover
                </h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                  Destination handover follows the same checklist discipline as origin packing: room-tagged unloading, bed and wardrobe reassembly, carbon-copy packing list reconciliation, debris sweep, and GST Tax Invoice delivery.
                </p>

                <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200/70">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#082F52] mb-3">
                    Destination completion:
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-sm text-slate-700">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E53935]" />
                      Careful unloading &amp; hallway/lift protection
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E53935]" />
                      Room-wise carton and furniture placement
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E53935]" />
                      Bed &amp; modular wardrobe reassembly
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E53935]" />
                      Collection &amp; removal of used stretch film &amp; cartons
                    </li>
                    <li className="flex items-center gap-2 sm:col-span-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E53935]" />
                      Signed Carbon-Copy Packing List check &amp; GST Tax Invoice ({BUSINESS.gstin})
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3.5 Mandatory Move Documentation */}
      <section className="py-16 sm:py-20 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MandatoryDocumentsBlock
            serviceContext="Issued on every Kolkata local and PAN-India relocation — from Written Survey Quote at Stage 1 to SAC 9965 / 9987 GST Tax Invoice at Stage 4."
          />
        </div>
      </section>

      {/* 4. What Happens Behind the Scenes */}
      <section className="py-20 sm:py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Operational Rigor"
            title="What Makes the Process Work"
            subtitle="Reliable relocations are built on verifiable backend dispatch. Here is how our Haltu and Behala coordinators keep moving day on schedule."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {behindTheScenesCards.map((card) => (
              <div
                key={card.title}
                className="bg-white p-6 rounded-2xl border border-slate-200/80 flex flex-col justify-between"
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

      {/* 5. Service-Specific Handling Protocols */}
      <section className="py-14 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs text-center">
            <span className="inline-block bg-red-50 text-[#E53935] text-xs font-semibold uppercase tracking-[0.08em] px-4 py-1.5 rounded-full mb-3 border border-red-200">
              Specialized Protocols
            </span>
            <h2 className="text-xl sm:text-2xl font-display font-bold text-[#082F52] mb-2">
              Service-Specific Handling &amp; Cost Guides
            </h2>
            <p className="text-slate-600 text-sm max-w-2xl mx-auto mb-6">
              Each cargo division follows tailored packing grades, closed-carrier loading rules, and transit timelines.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-2.5">
              <Link
                href="/household-shifting"
                className="bg-white hover:bg-[#082F52] text-[#082F52] hover:text-white border border-slate-200 text-xs sm:text-sm font-semibold px-4 py-2 rounded-full transition-colors"
              >
                Household Shifting
              </Link>
              <Link
                href="/car-shifting"
                className="bg-white hover:bg-[#082F52] text-[#082F52] hover:text-white border border-slate-200 text-xs sm:text-sm font-semibold px-4 py-2 rounded-full transition-colors"
              >
                Car Transportation
              </Link>
              <Link
                href="/bike-shifting"
                className="bg-white hover:bg-[#082F52] text-[#082F52] hover:text-white border border-slate-200 text-xs sm:text-sm font-semibold px-4 py-2 rounded-full transition-colors"
              >
                Bike Transport
              </Link>
              <Link
                href="/parcel-shifting"
                className="bg-white hover:bg-[#082F52] text-[#082F52] hover:text-white border border-slate-200 text-xs sm:text-sm font-semibold px-4 py-2 rounded-full transition-colors"
              >
                Parcel &amp; Cargo
              </Link>
              <Link
                href="/office-relocation"
                className="bg-white hover:bg-[#082F52] text-[#082F52] hover:text-white border border-slate-200 text-xs sm:text-sm font-semibold px-4 py-2 rounded-full transition-colors"
              >
                Office Relocation
              </Link>
              <Link
                href="/international-moving"
                className="bg-white hover:bg-[#082F52] text-[#082F52] hover:text-white border border-slate-200 text-xs sm:text-sm font-semibold px-4 py-2 rounded-full transition-colors"
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
              From origin loading to destination handover, you stay updated through documented LR/Bilty dispatch checkpoints, schedule clarity, and direct branch support.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div className="text-2xl font-bold font-display text-[#F28A32] mb-2">01</div>
              <h3 className="font-bold text-white text-base mb-2">Haltu &amp; Behala Desks</h3>
              <p className="text-white/70 text-xs sm:text-sm leading-relaxed">
                Direct coordinator lines at Haltu HQ ({BUSINESS.locations.main.phoneFormatted}) and Behala Branch ({BUSINESS.locations.secondary.phoneFormatted}).
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div className="text-2xl font-bold font-display text-[#F28A32] mb-2">02</div>
              <h3 className="font-bold text-white text-base mb-2">LR / Bilty &amp; Checkpoint Alerts</h3>
              <p className="text-white/70 text-xs sm:text-sm leading-relaxed">
                Stamped consignment number shared at departure, followed by toll-plaza and arrival updates via WhatsApp and phone.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div className="text-2xl font-bold font-display text-[#F28A32] mb-2">03</div>
              <h3 className="font-bold text-white text-base mb-2">Proactive Check-Ins</h3>
              <p className="text-white/70 text-xs sm:text-sm leading-relaxed">
                Scheduled check-ins during long-distance NH-19 and NH-16 transit so you always know where your container stands.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div className="text-2xl font-bold font-display text-[#F28A32] mb-2">04</div>
              <h3 className="font-bold text-white text-base mb-2">Realistic Schedules</h3>
              <p className="text-white/70 text-xs sm:text-sm leading-relaxed">
                Delivery windows calculated around highway corridor transit hours and city No-Entry rules rather than guesswork.
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
            title="Room Placement, Carpentry Reassembly & GST Handover"
            subtitle="Our crew stays until cartons are placed in tagged rooms, beds and wardrobes are reassembled, used wrapping is swept clear, and your manifest is signed off."
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
              <h3 className="font-bold text-[#082F52] text-base mb-2">Assembly &amp; Setup</h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Beds, wardrobes, and dining tables disassembled at origin are reconstructed securely by our trained carpentry crew.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <span className="w-8 h-8 rounded-full bg-[#082F52] text-white text-xs font-bold flex items-center justify-center mb-4">
                C
              </span>
              <h3 className="font-bold text-[#082F52] text-base mb-2">Manifest Sign-Off &amp; GST Invoice</h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Carton counts are tallied against your Numbered Carbon-Copy Packing List, used wrap is cleared, and your GST Tax Invoice ({BUSINESS.gstin}, {BUSINESS.sacCodes}) is issued.
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
