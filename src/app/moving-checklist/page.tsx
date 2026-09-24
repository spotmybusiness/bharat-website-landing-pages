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

export const metadata: Metadata = generatePageMetadata({
  title: 'Home Shifting Checklist & Pre-Move Guide',
  description:
    'Comprehensive step-by-step moving checklist and timeline for home shifting in Kolkata & PAN India. Practical tips for packing, decluttering, utilities, and move-day preparation.',
  path: '/moving-checklist',
});

const timelineSteps = [
  {
    timeframe: '4 Weeks Before Move',
    title: 'Planning, Decluttering & Initial Survey',
    summary:
      'Early preparation significantly reduces relocation stress and helps optimize overall moving volume and costs.',
    tasks: [
      {
        task: 'Schedule your pre-move survey',
        detail:
          'Contact your relocation coordinator to arrange an in-person or virtual survey of all rooms and storage spaces.',
      },
      {
        task: 'Conduct room-by-room decluttering',
        detail:
          'Sort belongings into keep, donate, sell, and discard categories to avoid transporting unwanted items.',
      },
      {
        task: 'Gather personal and property documents',
        detail:
          'Safely group personal IDs, passports, medical records, property papers, and financial files in a dedicated travel folder.',
      },
      {
        task: 'Confirm housing society / building rules',
        detail:
          'Check with both current and new building managements regarding service elevator bookings, security gate passes, and moving-hour restrictions.',
      },
    ],
  },
  {
    timeframe: '2 Weeks Before Move',
    title: 'Utilities, Address Updates & Category Packing',
    summary:
      'Begin organizing daily services, updating communication addresses, and packing non-essential seasonal items.',
    tasks: [
      {
        task: 'Initiate utility transfers & disconnections',
        detail:
          'Notify broadband providers, DTH operators, newspaper delivery, and piped cooking gas or cylinder agencies of your moving date.',
      },
      {
        task: 'Update address records across key accounts',
        detail:
          'Update your residential address on banking profiles, e-commerce deliveries, subscription services, and insurance policies.',
      },
      {
        task: 'Sort out-of-season clothes and books',
        detail:
          'Pack seasonal clothing, decorative ornaments, extra linens, and library books into clearly labeled cartons.',
      },
      {
        task: 'Plan vehicle shipping logistics',
        detail:
          'If transporting a two-wheeler or car, ensure the vehicle registration certificate (RC), valid insurance, and PUC documents are ready.',
      },
    ],
  },
  {
    timeframe: '3 to 5 Days Before Move',
    title: 'Essential Bag, Appliances & Final Confirmations',
    summary:
      'Focus on appliance preparation and setting aside items needed during your first 24–48 hours at the new home.',
    tasks: [
      {
        task: 'Pack your "First-Night Survival" bag',
        detail:
          'Include 2 days of clothing, phone chargers, daily toiletries, essential medications, basic utensils, and fresh bedsheets.',
      },
      {
        task: 'Defrost and clean your refrigerator',
        detail:
          'Turn off, empty, and thoroughly defrost the refrigerator at least 24 hours prior to moving day to prevent moisture leaks during highway transit.',
      },
      {
        task: 'Back up electronic data & safely pack laptops',
        detail:
          'Create secure cloud backups of critical digital files. Laptops, portable hard drives, and tablets should always travel with you personally.',
      },
      {
        task: 'Confirm arrival time with your moving crew',
        detail:
          'Confirm the exact reporting time with your move supervisor and verify parking access for the transport container truck.',
      },
    ],
  },
  {
    timeframe: 'Moving Day Protocol',
    title: 'Supervision, Inventory Verification & Handover',
    summary:
      'Maintain clear oversight as our professional crew executes multi-layer packing, dismantling, and secure loading.',
    tasks: [
      {
        task: 'Perform initial walkthrough with the supervisor',
        detail:
          'Point out high-fragility glassware, antique wooden furniture, and items requiring specialized wooden crating.',
      },
      {
        task: 'Review the packing inventory list',
        detail:
          'Ensure every box is numbered, categorized by room, and clearly marked before it is loaded onto the carrier vehicle.',
      },
      {
        task: 'Conduct a final property sweep',
        detail:
          'Inspect all cupboards, lofts, balconies, and bathrooms to verify nothing has been left behind. Switch off main power and water valves.',
      },
      {
        task: 'Collect your Consignment Note (LR copy)',
        detail:
          'Receive the signed Consignment Note and tracking number from the team supervisor for in-transit milestone monitoring.',
      },
    ],
  },
  {
    timeframe: 'Arrival & Post-Move Setup',
    title: 'Unloading, Furniture Reassembly & Room Placement',
    summary:
      'Systematic unloading and settling into your new living space with room-wise placement.',
    tasks: [
      {
        task: 'Direct box placement by designated room',
        detail:
          'Guide the unloading crew to place furniture and labeled cartons directly into their target rooms (Master Bedroom, Living Room, Kitchen).',
      },
      {
        task: 'Inspect furniture reassembly',
        detail:
          'Check that double beds, modular wardrobes, and dining tables are properly reassembled by the crew carpenters before sign-off.',
      },
      {
        task: 'Verify box count against the inventory sheet',
        detail:
          'Count all unloaded boxes against your original consignment list before acknowledging the delivery receipt.',
      },
      {
        task: 'Dispose of unpacking debris responsibly',
        detail:
          'Our crew gathers outer corrugated scraps and protective stretch wrap to leave your new home clean and uncluttered.',
      },
    ],
  },
];

const prohibitedItems = [
  {
    category: 'Hazardous & Flammable Materials',
    items: 'LPG cooking gas cylinders, petrol/diesel cans, paint thinners, kerosene, fireworks, and matches.',
    reason: 'Strictly prohibited on highway transit carriers per standard transport safety regulations.',
  },
  {
    category: 'Perishable Food Items',
    items: 'Cooked meals, raw meat/fish, fresh dairy products, and unsealed liquid containers.',
    reason: 'Liable to spoil and damage adjacent dry goods during long-distance road transit.',
  },
  {
    category: 'Personal High-Value Valuables',
    items: 'Gold/silver jewelry, cash currency, bearer bonds, original land deeds, and passport originals.',
    reason: 'Must always be carried personally by the customer for complete security.',
  },
  {
    category: 'Live Plants & Pets',
    items: 'Indoor potted plants (long routes) and domestic animals/pets.',
    reason: 'Require climate-controlled, specialized care and cannot be transported in enclosed cargo containers.',
  },
];

const roomTips = [
  {
    room: 'Kitchen & Crockery',
    tips: [
      'Pack delicate glassware and ceramic plates vertically on their rims with heavy bubble cushioning, never flat.',
      'Seal all spice jars, oil bottles, and condiments tightly with plastic tape before boxing.',
    ],
  },
  {
    room: 'Wardrobes & Bedrooms',
    tips: [
      'Keep clothing on hangers and use wardrobe cartons to minimize folding wrinkles and speed up setup.',
      'Place mattress transit covers over all mattresses to prevent dust, grime, and moisture absorption.',
    ],
  },
  {
    room: 'Electronics & Appliances',
    tips: [
      'Photograph the rear wiring of televisions, sound systems, and desktop computers before disconnection.',
      'Deploy custom wooden frame crating for large LED/OLED televisions and high-end monitors.',
    ],
  },
];

export default function MovingChecklistPage() {
  return (
    <PageLayout>
      <TrackPillarGuide slug="moving-checklist" />
      <PageHero
        label="Relocation Guide"
        title={
          <>
            The Ultimate <span className="text-[#F28A32]">Home Shifting Checklist</span> & Pre-Move Guide
          </>
        }
        subtitle="A structured, week-by-week timeline to help you plan, organize, and execute a seamless household relocation in Kolkata and across India."
        breadcrumbs={[
          { label: 'Moving Checklist' },
        ]}
        /* Hero Visual Image: Drop your image in /public/images/ and set src="/images/your-image.png" */
        image={
          <img
            src="/images/Moving_guides.png"
            alt="Home Shifting Checklist and Moving Guide - Bharat Relocators"
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
              Speak to Move Coordinator
            </a>
          </>
        }
      />

      {/* Guide Overview Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <span className="inline-block bg-red-50 text-[#E53935] text-xs font-semibold uppercase tracking-[0.08em] px-4 py-1.5 rounded-full mb-4 border border-red-200">
                Systematic Relocation Planning
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-[#082F52] mb-5 leading-tight">
                Why a Structured Moving Checklist Matters
              </h2>
              <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                <p>
                  Relocating an entire home involves coordinating hundreds of individual belongings, service transfers, and building permissions. Without a clear plan, the days leading up to a move can quickly become overwhelming.
                </p>
                <p>
                  At Bharat Relocators, we have managed thousands of residential relocations across Kolkata and PAN India. We created this comprehensive checklist to provide a practical, stress-free roadmap that keeps your preparation organized from four weeks out to moving day.
                </p>
                <p>
                  For specialized packing methods, review our dedicated{' '}
                  <Link href="/household-shifting" className="text-[#E53935] font-semibold hover:underline">
                    Household Shifting Services
                  </Link>
                  , consult our{' '}
                  <Link href="/intercity-moving-guide" className="text-[#E53935] font-semibold hover:underline">
                    Intercity Moving Guide
                  </Link>
                  , or check our{' '}
                  <Link href="/faqs" className="text-[#082F52] font-semibold hover:underline">
                    Frequently Asked Questions
                  </Link>{' '}
                  for pricing and transit details.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] border border-slate-200">
                <AppImage
                  src="/images/packaging.png"
                  alt="Packed home relocation boxes organized systematically"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Structured Moving Timeline */}
      <section className="py-20 bg-slate-50 border-y border-slate-200/80">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Step-by-Step Timeline"
            title="The 5-Phase Relocation Countdown"
            subtitle="Follow this structured schedule to keep your packing, utilities, and logistics on track."
          />

          <div className="space-y-8 mt-12">
            {timelineSteps.map((phase, idx) => (
              <div
                key={phase.timeframe}
                className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs hover:border-[#082F52] transition-colors"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-slate-100 mb-6">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#E53935] bg-red-50 px-3 py-1 rounded-md border border-red-100">
                      Phase {idx + 1}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold font-display text-[#082F52] mt-2">
                      {phase.timeframe}: {phase.title}
                    </h3>
                  </div>
                </div>

                <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                  {phase.summary}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {phase.tasks.map((t) => (
                    <div
                      key={t.task}
                      className="p-4 rounded-xl bg-slate-50/80 border border-slate-200/70 flex gap-3.5 items-start"
                    >
                      <div className="w-5 h-5 rounded-md bg-[#082F52] text-white flex items-center justify-center text-xs shrink-0 mt-0.5">
                        ✓
                      </div>
                      <div>
                        <div className="text-sm font-bold text-[#082F52] font-display">
                          {t.task}
                        </div>
                        <div className="text-xs text-slate-600 mt-1 leading-relaxed">
                          {t.detail}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Room-by-Room Packing Guide */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Practical Tips"
            title="Room-by-Room Preparation Guidelines"
            subtitle="Targeted recommendations for high-risk categories across your living space."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {roomTips.map((room) => (
              <div
                key={room.room}
                className="bg-slate-50 rounded-2xl p-6 sm:p-7 border border-slate-200 flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-lg font-bold font-display text-[#082F52] mb-4 pb-2 border-b border-slate-200">
                    {room.room}
                  </h3>
                  <ul className="space-y-3">
                    {room.tips.map((tip, i) => (
                      <li key={i} className="text-xs sm:text-sm text-slate-600 leading-relaxed flex gap-2.5">
                        <span className="text-[#E53935] font-bold">•</span>
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hazardous & Prohibited Items Awareness */}
      <section className="py-16 bg-red-50/60 border-y border-red-200/60">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="inline-block bg-red-100 text-[#E53935] text-xs font-bold uppercase tracking-[0.08em] px-4 py-1.5 rounded-full mb-3 border border-red-200">
              Safety & Compliance
            </span>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-[#082F52]">
              Non-Movable & Prohibited Goods
            </h2>
            <p className="text-slate-600 text-sm mt-2">
              For highway safety regulations and cargo protection, our transport containers cannot load the following items:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {prohibitedItems.map((item) => (
              <div
                key={item.category}
                className="bg-white p-5 rounded-2xl border border-red-200 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="text-sm font-bold text-[#E53935] font-display mb-1 flex items-center gap-2">
                    <span>⚠️</span>
                    <span>{item.category}</span>
                  </div>
                  <div className="text-xs font-medium text-slate-800 mb-2">
                    {item.items}
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {item.reason}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Helpful Links & Tracking Handoff */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-xl sm:text-2xl font-display font-bold text-[#082F52] mb-3">
            Already Booked Your Move with Us?
          </h2>
          <p className="text-slate-600 text-sm mb-6 max-w-xl mx-auto">
            Once your consignment is dispatched, you can monitor live milestone checkpoints directly through our online portal.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/tracking"
              className="inline-flex items-center gap-2 bg-[#082F52] hover:bg-[#0b3b60] text-white font-semibold text-xs sm:text-sm px-5 py-3 rounded-xl transition-colors"
            >
              <span>Go to Shipment Tracking</span>
              <span aria-hidden="true">→</span>
            </Link>
            <Link
              href="/faqs"
              className="inline-flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs sm:text-sm px-5 py-3 rounded-xl transition-colors"
            >
              <span>View Moving FAQs</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Bottom Conversion Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <SectionHeader
            label="Plan Your Move"
            title="Ready for a Structured, Stress-Free Relocation?"
            subtitle="Share your moving inventory with our Kolkata coordinators for an all-inclusive, transparent estimate."
          />
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/get-a-quote"
              className="inline-flex items-center justify-center gap-2 bg-[#E53935] hover:bg-[#c62828] text-white font-semibold text-sm px-7 py-4 rounded-xl shadow-md transition-colors w-full sm:w-auto"
            >
              Get Free Moving Quote
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

