import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import PageLayout from '@/components/PageLayout';
import PageHero from '@/components/PageHero';
import AppImage from '@/components/ui/AppImage';
import SectionHeader from '@/components/ui/SectionHeader';
import { generatePageMetadata } from '@/lib/metadata';
import { BUSINESS, getWhatsAppUrl } from '@/lib/business';
import { getRelatedServices } from '@/data/services';

export const metadata: Metadata = generatePageMetadata({
  title: 'International Moving Services in Kolkata',
  description:
    'Reliable international relocation from Kolkata. Export-grade seaworthy packing, customs documentation guidance, air and sea freight coordination, and global destination delivery.',
  path: '/international-moving',
});

const internationalSteps = [
  {
    step: '01',
    title: 'Pre-Move Survey & Mode Selection',
    desc: 'Detailed inventory evaluation to determine optimal shipping mode: Full Container Load (FCL), Less than Container Load (LCL), or Priority Air Cargo.',
  },
  {
    step: '02',
    title: 'Export-Standard Seaworthy Packing',
    desc: 'Multi-layer moisture-barrier wrapping, heavy export cartons, custom wooden lift-vans, and anti-fungal silica desiccant protection.',
  },
  {
    step: '03',
    title: 'Documentation & Customs Support',
    desc: 'Assistance in drafting the comprehensive itemized packing list, customs declaration forms, and insurance declaration papers.',
  },
  {
    step: '04',
    title: 'Freight Transit & Destination Handover',
    desc: 'Port handling, ocean/air carrier transit, destination port clearance assistance, and final delivery to your overseas residence.',
  },
];

const internationalInclusions = [
  {
    title: 'Export-Grade Packaging Materials',
    desc: 'Seaworthy wooden cases, moisture-proof barrier foil, multi-wall heavy cartons, and heavy-duty corner reinforcements.',
  },
  {
    title: 'Air & Sea Cargo Options',
    desc: 'Flexible logistics routing via sea freight containers for full households and air freight for urgent personal effects.',
  },
  {
    title: 'Itemized Packing List Preparation',
    desc: 'Structured, box-by-box bilingual packing inventory lists required for international port customs authorities.',
  },
  {
    title: 'International Transit Insurance',
    desc: 'Comprehensive marine and air transit policy covering origin-to-destination international shipping risks.',
  },
  {
    title: 'Customs Documentation Guidance',
    desc: 'Expert guidance on required personal identity papers, transfer of residence regulations, and duty declarations.',
  },
  {
    title: 'Dedicated International Move Coordinator',
    desc: 'A specialized global move coordinator overseeing port paperwork and carrier booking throughout the move.',
  },
];

/** Standard document categories required for international freight dispatch */
const internationalDocChecklist = [
  {
    doc: 'Valid Passport & Photo ID',
    desc: 'Clear copies of the passport information page and relevant pages. Must remain valid throughout the expected transit and clearance window.',
  },
  {
    doc: 'Destination Visa / Residence Permit',
    desc: 'Copy of valid employment visa, student visa, permanent residency, or relevant entry authorization for the destination country.',
  },
  {
    doc: 'Detailed Itemized Packing Inventory',
    desc: 'Box-by-box listing of packed goods, item quantities, and approximate declared values required for origin and destination customs declarations.',
  },
  {
    doc: 'Customs Baggage Declaration Forms',
    desc: 'Standard signed export declaration forms certifying that the consignment contains used personal and household effects.',
  },
];

/** Practical customs-planning considerations and compliance principles */
const customsPreparationPrinciples = [
  {
    title: 'Accurate & Truthful Inventory',
    desc: 'Every packed carton must correspond to the itemized packing list. Ambiguous descriptions such as "miscellaneous" or "general items" should be avoided to prevent port inspection delays.',
  },
  {
    title: 'Personal Effects vs. Restricted Cargo',
    desc: 'Used personal clothing, books, and household goods generally follow personal-effects clearance channels. Ensure restricted items (perishables, flammables, plants, seeds, controlled items) are excluded.',
  },
  {
    title: 'Transfer of Residence (TR) Awareness',
    desc: 'Relocating individuals should review applicable Transfer of Residence provisions for their move. Customs duty exemptions on personal effects depend on residency duration and destination regulations.',
  },
  {
    title: 'Destination Authority Verification',
    desc: 'Import duties, quarantine inspections, and restricted items lists are established by destination customs agencies. Customers should verify current rules for their specific destination country.',
  },
];

/** Major stages of an international relocation workflow */
const internationalMoveStages = [
  {
    stage: '01',
    title: 'Survey & Freight Mode Selection',
    desc: 'Inventory assessment to evaluate volume and decide between Full Container Load (FCL), Less than Container Load (LCL / Lift-van), or Priority Air Cargo.',
  },
  {
    stage: '02',
    title: 'Export Packaging & Packing List Creation',
    desc: 'Moisture-barrier wrapping, seaworthy crating, and generation of the structured box-by-box inventory list by our packing crew.',
  },
  {
    stage: '03',
    title: 'Origin Customs Formalities & Port Dispatch',
    desc: 'Export documentation verification, origin port customs processing, and container handover to international maritime or air carriers.',
  },
  {
    stage: '04',
    title: 'International Freight Transit',
    desc: 'Ocean shipping or air cargo transit along international routes with consignment waybill and milestone tracking.',
  },
  {
    stage: '05',
    title: 'Destination Port Customs Clearance',
    desc: 'Submission of cargo documents to destination port customs authorities and quarantine inspections as required by local law.',
  },
  {
    stage: '06',
    title: 'Inland Transport & Overseas Residence Delivery',
    desc: 'Final transport from the destination port to your new home address, unloading, and positioning of household goods.',
  },
];

export default function InternationalMovingPage() {
  const relatedServices = getRelatedServices('international-moving', 3);

  return (
    <PageLayout>
      <PageHero
        label="Global Freight & Relocation"
        title={
          <>
            International Moving & Cross-Border <span className="text-[#F28A32]">Relocation Services</span>
          </>
        }
        subtitle="End-to-end overseas household shifting from Kolkata with export-grade seaworthy packing, customs paperwork guidance, and air/sea freight coordination."
        breadcrumbs={[
          { label: 'Services' },
          { label: 'International Moving' },
        ]}
        actions={
          <>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#E53935] hover:bg-[#c62828] text-white font-semibold text-sm px-6 py-3.5 rounded-xl shadow-md transition-colors"
            >
              Request a Callback
            </Link>
            <a
              href={`https://wa.me/${BUSINESS.phone.primary.replace(/\s+/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold text-sm px-5 py-3.5 rounded-xl border border-emerald-400 transition-colors shadow-md"
            >
              Chat on WhatsApp
            </a>
          </>
        }
      />

      {/* Overview Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <span className="inline-block bg-red-50 text-[#E53935] text-xs font-semibold uppercase tracking-[0.08em] px-4 py-1.5 rounded-full mb-4 border border-red-200">
                Overseas Moving
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-[#082F52] mb-5 leading-tight">
                Seaworthy Packaging & Worldwide Freight Coordination
              </h2>
              <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                <p>
                  Relocating overseas involves navigating strict maritime cargo standards, air freight weight limitations, and stringent customs inspection regulations.
                </p>
                <p>
                  Bharat Relocators provides comprehensive international relocation support from Kolkata for families, expatriates, and corporate professionals moving abroad. From specialized moisture-barrier packing and wooden lift-van fabrication to port customs documentation, our team manages the complex steps of international shipping. <Link href="/contact" className="text-[#E53935] font-semibold hover:underline">Speak with a relocation expert</Link>.
                </p>
                <p>
                  We coordinate with reputable global maritime and air freight lines to ensure your household goods and personal effects arrive securely at your new international destination.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <span className="text-xs bg-slate-100 text-slate-700 font-semibold px-3.5 py-1.5 rounded-lg">
                  âœ“ Full Container Load (FCL)
                </span>
                <span className="text-xs bg-slate-100 text-slate-700 font-semibold px-3.5 py-1.5 rounded-lg">
                  âœ“ Less than Container (LCL)
                </span>
                <span className="text-xs bg-slate-100 text-slate-700 font-semibold px-3.5 py-1.5 rounded-lg">
                  âœ“ Priority Air Baggage Freight
                </span>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] border border-slate-200">
                <AppImage
                  src="https://images.unsplash.com/photo-1528259105746-48a73c688cd2"
                  alt="Cargo containers at international shipping port"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mid-Page Contact Banner */}
      <section className="py-12 bg-emerald-50 border-y border-emerald-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl sm:text-2xl font-display font-bold text-emerald-900 mb-2">Planning an international move?</h3>
            <p className="text-emerald-700 text-sm sm:text-base">Consult with our overseas relocation specialists to discuss timelines, packing requirements, and customs documentation.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <a href="tel:+919123046504" className="bg-[#082F52] hover:bg-[#0b3b60] text-white px-6 py-3 rounded-xl font-semibold shadow-md transition-colors flex items-center justify-center gap-2 text-sm">
              Call Coordinator
            </a>
            <a href={`https://wa.me/919123046504`} target="_blank" rel="noopener noreferrer" className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-xl font-semibold shadow-md transition-colors flex items-center justify-center gap-2 text-sm">
              WhatsApp Now
            </a>
          </div>
        </div>
      </section>

      {/* 4-Step Process */}
      <section className="py-20 bg-slate-50 border-y border-slate-200/80 dot-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Cross-Border Workflow"
            title="Our 4-Step International Relocation Process"
            subtitle="From survey and export-grade packing to customs clearance support and destination delivery."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {internationalSteps.map((step) => (
              <div
                key={step.step}
                className="bg-white rounded-2xl p-6 border-2 border-[#082F52] shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-black font-display text-[#E53935]">
                      {step.step}
                    </span>
                    <span className="text-xs uppercase font-bold text-slate-400 tracking-wider">
                      Stage {step.step}
                    </span>
                  </div>
                  <h3 className="font-bold text-[#082F52] text-base font-display mb-2">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What is Included */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Service Scope"
            title="What Our International Moving Service Covers"
            subtitle="Specialized international packing and freight management protocols."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {internationalInclusions.map((item) => (
              <div
                key={item.title}
                className="p-6 bg-slate-50 rounded-2xl border border-slate-200/80 hover:border-[#F28A32] transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-red-50 text-[#E53935] flex items-center justify-center font-bold text-sm mb-3">
                  âœ“
                </div>
                <h3 className="font-bold text-[#082F52] text-base font-display mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* â”€â”€ International Preparation, Customs Documentation & Move Stages â”€â”€ */}
      <section className="py-20 bg-slate-50 border-t border-slate-200/80 dot-pattern">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Global Relocation Preparation"
            title="International Customs Documentation & Move Stages"
            subtitle="Moving overseas involves maritime freight packaging, customs inventories, and destination-country import regulations. Here is what to prepare for an organized cross-border relocation."
          />

          {/* Subsection 1: Documentation Checklist */}
          <div className="mb-14">
            <h3 className="text-lg font-bold font-display text-[#082F52] mb-4">
              1. Essential Document Categories for Overseas Moves
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {internationalDocChecklist.map((doc) => (
                <div key={doc.doc} className="p-6 bg-white rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between">
                  <div>
                    <div className="w-7 h-7 rounded-md bg-[#082F52] text-white flex items-center justify-center font-bold text-xs mb-3">
                      ðŸ“„
                    </div>
                    <h4 className="font-bold text-[#082F52] text-sm font-display mb-2">
                      {doc.doc}
                    </h4>
                    <p className="text-slate-600 text-xs leading-relaxed">
                      {doc.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Subsection 2: Customs Planning & TR Principles */}
          <div className="mb-14">
            <h3 className="text-lg font-bold font-display text-[#082F52] mb-4">
              2. Customs Planning & Compliance Principles
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {customsPreparationPrinciples.map((item) => (
                <div key={item.title} className="p-6 bg-white rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between">
                  <div>
                    <h4 className="font-bold text-[#082F52] text-base font-display mb-2">
                      {item.title}
                    </h4>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Subsection 3: International Move Stages */}
          <div className="mb-10">
            <h3 className="text-lg font-bold font-display text-[#082F52] mb-4">
              3. High-Level Stages of an International Move
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {internationalMoveStages.map((stage) => (
                <div
                  key={stage.stage}
                  className="p-6 bg-white rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xl font-black font-display text-[#E53935]">
                        {stage.stage}
                      </span>
                      <span className="text-[11px] uppercase font-bold text-slate-400 tracking-wider">
                        Stage {stage.stage}
                      </span>
                    </div>
                    <h4 className="font-bold text-[#082F52] text-sm font-display mb-2">
                      {stage.title}
                    </h4>
                    <p className="text-slate-600 text-xs leading-relaxed">
                      {stage.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Regulatory Advisory Callout */}
          <div className="p-5 bg-amber-50 rounded-xl border border-amber-200 text-xs text-amber-900 leading-relaxed text-center">
            ðŸ’¡ <strong>Regulatory &amp; Customs Advisory:</strong> Import regulations, quarantine requirements, duty exemptions (including Transfer of Residence rules), and restricted cargo lists vary by destination country. Customers should independently confirm destination customs guidelines prior to dispatch. Our move coordinators assist with Indian origin export documentation and freight waybill management.
          </div>

          {/* Navigation Links */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
            <Link
              href="/moving-checklist"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#E53935] hover:underline"
            >
              <span>View Full Moving Checklist &amp; Timeline Guide</span>
              <span aria-hidden="true">â†’</span>
            </Link>
            <span className="hidden sm:inline text-slate-300">Â·</span>
            <Link
              href="/household-shifting"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#082F52] hover:underline"
            >
              <span>Planning Domestic Relocation in India?</span>
              <span aria-hidden="true">â†’</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Related Services Navigation */}
      <section className="py-16 bg-white border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
            <div>
              <h3 className="text-xl font-bold font-display text-[#082F52]">
                Explore Related Relocation Services
              </h3>
              <p className="text-slate-500 text-xs sm:text-sm">
                Moving locally in India or need domestic household shifting?
              </p>
            </div>
            <Link
              href="/household-shifting"
              className="text-[#E53935] text-xs font-semibold hover:underline"
            >
              Domestic Household Shifting â†’
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {relatedServices.map((service) => (
              <Link
                key={service.slug}
                href={service.canonicalPath}
                className="p-5 bg-slate-50 rounded-2xl border border-slate-200 hover:border-[#E53935] hover:bg-white transition-all group"
              >
                <span className="text-[11px] font-semibold text-[#E53935] uppercase tracking-wider block mb-1">
                  {service.category}
                </span>
                <h4 className="font-bold text-[#082F52] text-base font-display group-hover:text-[#E53935] transition-colors mb-2">
                  {service.title}
                </h4>
                <p className="text-slate-600 text-xs leading-relaxed line-clamp-2">
                  {service.shortDesc}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Conversion CTA */}
      <section className="py-20 bg-[#082F52] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <span className="inline-block bg-white/10 text-[#F28A32] text-xs font-semibold uppercase tracking-[0.08em] px-4 py-1.5 rounded-full mb-4 border border-white/20">
            Global Relocation Desk
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold mb-4 text-white">
            Planning an Overseas Move from Kolkata?
          </h2>
          <p className="text-white/80 text-sm sm:text-base leading-relaxed mb-8 max-w-2xl mx-auto">
            Speak with our international relocation coordinators to plan packing schedules, freight options, and documentation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/get-a-quote"
              className="inline-flex items-center justify-center gap-2 bg-[#E53935] hover:bg-[#c62828] text-white font-semibold text-sm px-7 py-4 rounded-xl shadow-lg transition-colors w-full sm:w-auto"
            >
              Get International Quote
            </Link>
            <a
              href={getWhatsAppUrl('Hi, I need assistance with an international move with Bharat Relocators.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm px-6 py-4 rounded-xl shadow-lg transition-colors w-full sm:w-auto"
            >
              WhatsApp International Desk
            </a>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}

