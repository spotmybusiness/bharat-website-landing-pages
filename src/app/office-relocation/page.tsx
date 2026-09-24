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
  title: 'Office Relocation & Corporate Shifting in Kolkata',
  description:
    'Structured corporate and office relocation in Kolkata. Weekend shifts, IT server packing, modular workstation assembly, and minimal business downtime logistics.',
  path: '/office-relocation',
});

const officeSteps = [
  {
    step: '01',
    title: 'Site Survey & Floor Plan Assessment',
    desc: 'Our corporate move planners inspect your current and destination offices, reviewing floor plans, IT server rooms, and department layout seating.',
  },
  {
    step: '02',
    title: 'Color-Coded Packing & IT Protection',
    desc: 'Desks, files, and workstations are categorized with color-coded labels. Servers and IT assets receive anti-static bubble wrapping and dedicated padding.',
  },
  {
    step: '03',
    title: 'Weekend & After-Hours Shifting',
    desc: 'Moving is executed during weekends or overnight shifts to ensure zero disruption to daily business operations and client workflows.',
  },
  {
    step: '04',
    title: 'Destination Reassembly & Handover',
    desc: 'Workstations, conference tables, and filing cabinets are reassembled and positioned strictly according to the new office blueprint.',
  },
];

const officeInclusions = [
  {
    title: 'Minimal Business Downtime Execution',
    desc: 'Flexible scheduling over Friday nights, weekends, and public holidays so your team resumes work on Monday morning without interruption.',
  },
  {
    title: 'IT Server & Hardware Packing',
    desc: 'Specialized anti-static packaging and heavy cushioning for rack servers, network switches, monitors, and sensitive electronics.',
  },
  {
    title: 'Modular Workstation Assembly',
    desc: 'Trained technical carpenters for the precise dismantling and reassembly of cubicles, executive desks, and modular furniture.',
  },
  {
    title: 'Color-Coded Department Labeling',
    desc: "Systematic labeling protocol matching each employee's crate directly to their designated seat in the new office layout.",
  },
  {
    title: 'Confidential File & Archive Security',
    desc: 'Secure sealed container boxes for accounting files, legal records, and confidential corporate documentation.',
  },
  {
    title: 'Dedicated Project Manager',
    desc: 'An on-site corporate move coordinator managing logistics crews, building management permissions, and elevator logistics.',
  },
];

const corporatePlanningTips = [
  {
    title: 'IT & Server Decommissioning',
    desc: 'Coordinate with your internal IT team to power down and back up server data prior to physical hardware disconnect.',
  },
  {
    title: 'Employee Personal Effect Clearance',
    desc: 'Advise employees to pack personal desk items into pre-labeled personal crates ahead of moving weekend.',
  },
  {
    title: 'Building Management Approvals',
    desc: 'Obtain service elevator access, gate passes, and work permits from both origin and destination facility managers.',
  },
];

/** Practical relocation considerations across Kolkata commercial hubs */
const kolkataBusinessDistricts = [
  {
    district: 'Salt Lake & Sector V IT Corridor',
    focus: 'Tech Parks & Software Campuses',
    considerations:
      'Sector V complexes often have strict facility guidelines regarding service elevator booking slots, after-hours security clearance, and weekend work permits. Move planning emphasizes coordinated gate passes and structured weekend execution.',
  },
  {
    district: 'New Town & Rajarhat',
    focus: 'Corporate Towers & Commercial Business Parks',
    considerations:
      'Modern corporate parks in Action Area I, II, and III feature dedicated loading bays and freight elevators. Logistics planning focuses on loading-dock scheduling, building management coordination, and floor-by-floor asset placement.',
  },
  {
    district: 'Central Commercial Hubs (Park Street, Dalhousie, Camac Street)',
    focus: 'Established CBD & Mixed Commercial Buildings',
    considerations:
      'Legacy office buildings and dense commercial zones in central Kolkata frequently involve narrow approach roads, daytime parking curbs, and walk-up floors. Moves are typically scheduled for late evenings or weekends with manual stair-carry arrangements where needed.',
  },
];

/** Factors determining the scope and quotation for commercial relocations */
const officeScopeFactors = [
  {
    factor: 'Workstations & Seating Capacity',
    effect:
      'The total count of employee cubicles, executive desks, and ergonomic chairs directly shapes the required crew size, vehicle capacity, and reassembly timeline.',
  },
  {
    factor: 'IT Hardware & Electronic Inventory',
    effect:
      'Monitors, desktop towers, printers, and server hardware require specialized anti-static packaging, cushioned crates, and disciplined physical handling.',
  },
  {
    factor: 'Modular Furniture Carpentry',
    effect:
      'The complexity of modular cubicle partitions, executive conference tables, and custom shelving dictates the technical dismantling and reassembly hours needed.',
  },
  {
    factor: 'Physical Files & Archive Volume',
    effect:
      'Departmental filing cabinets, confidential records, and legal archives require sealed, categorized cartons and organized labeling for rapid retrieval.',
  },
  {
    factor: 'Building Access & Freight Facilities',
    effect:
      'Service elevator dimensions, loading dock proximity, and stair-carry requirements at both origin and destination buildings influence scheduling and labor allocation.',
  },
  {
    factor: 'Move Scheduling & Phased Execution',
    effect:
      'Single-session weekend transitions vs. phased multi-department shifts over consecutive weekends depend on your operational continuity requirements.',
  },
  {
    factor: 'Transit Distance & Destination Readiness',
    effect:
      'Intra-Kolkata transfers vs. interstate intercity relocations determine vehicle allocation, transit insurance scope, and highway logistics scheduling.',
  },
];

/** Division of responsibilities between relocation crew and client IT team */
const itBoundaryGuidelines = {
  physicalScope: [
    'Anti-static bubble wrapping and foam cushioning for monitors, PCs, and peripherals',
    'Careful physical handling and padded crating of server rack units and network hardware',
    'Secure, cushioned transport in closed container vehicles',
    'Room and desk-level physical placement according to your destination floor plan blueprint',
  ],
  technicalScope: [
    'Data backups, cloud syncing, and critical system image captures prior to moving',
    'Software shutdowns, server decommissioning, and internal IT cable labeling/unplugging',
    'Network reconfiguration, IP routing, server rack cabling, and domain connectivity testing',
    'Post-relocation IT infrastructure troubleshooting and employee workstation login validation',
  ],
};

export default function OfficeRelocationPage() {
  const relatedServices = getRelatedServices('office-relocation', 3);

  return (
    <PageLayout>
      <PageHero
        label="Commercial & Corporate Logistics"
        title={
          <>
            Office Relocation & Corporate <span className="text-[#F28A32]">Shifting Services</span>
          </>
        }
        subtitle="Structured corporate moving in Kolkata with IT server protection, modular workstation reassembly, weekend shift execution, and minimal business downtime."
        breadcrumbs={[
          { label: 'Services' },
          { label: 'Office Relocation' },
        ]}
        /* Hero Visual Image: Drop your image in /public/images/ and set src="/images/your-image.png" */
        image={
          <img
            src="images/office_relocation.png"
            alt="Office Relocation Corporate Shifting - Bharat Relocators"
          />
        }
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
                Seamless Commercial Moves
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-[#082F52] mb-5 leading-tight">
                Minimize Business Downtime with Planned Corporate Shifting
              </h2>
              <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                <p>
                  Relocating an office demands strict timeline precision, asset protection, and zero disruption to your company&apos;s core business operations.
                </p>
                <p>
                  Bharat Relocators delivers structured commercial relocation services for startups, IT firms, corporate headquarters, and commercial establishments in Kolkata and across India. From individual workstation breakdown and file archive transfers to specialized server rack handling, our crews manage the transition efficiently. <Link href="/contact" className="text-[#E53935] font-semibold hover:underline">Reach out for a custom corporate quote</Link>.
                </p>
                <p>
                  By planning and executing moves over weekends or overnight schedules, we ensure your employees walk into a fully assembled, operational office on Monday morning.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <span className="text-xs bg-slate-100 text-slate-700 font-semibold px-3.5 py-1.5 rounded-lg">
                  ✓ Corporate Offices & IT Hubs
                </span>
                <span className="text-xs bg-slate-100 text-slate-700 font-semibold px-3.5 py-1.5 rounded-lg">
                  ✓ Commercial Clinics & Retail
                </span>
                <span className="text-xs bg-slate-100 text-slate-700 font-semibold px-3.5 py-1.5 rounded-lg">
                  ✓ Document & File Archives
                </span>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] border border-slate-200">
                <AppImage
                  src="/images/office_relocation.png"
                  alt="Office equipment and desks being packed for commercial corporate move"
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
            <h3 className="text-xl sm:text-2xl font-display font-bold text-emerald-900 mb-2">Planning an office move? Let&apos;s discuss logistics.</h3>
            <p className="text-emerald-700 text-sm sm:text-base">Get a customized corporate relocation strategy that guarantees zero downtime.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <a href="tel:+919123046504" className="bg-[#082F52] hover:bg-[#0b3b60] text-white px-6 py-3 rounded-xl font-semibold shadow-md transition-colors flex items-center justify-center gap-2 text-sm">
              Call Coordinator
            </a>
            <a href={`https://wa.me/919123046504`} target="_blank" rel="noopener noreferrer" className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-xl font-semibold shadow-md transition-colors flex items-center justify-center gap-2 text-sm">
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* 4-Step Process */}
      <section className="py-20 bg-slate-50 border-y border-slate-200/80 dot-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Corporate Execution"
            title="Our 4-Step Commercial Relocation Protocol"
            subtitle="Engineered to transition your team smoothly with zero unnecessary work hours lost."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {officeSteps.map((step) => (
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
            label="Corporate Inclusions"
            title="Included in Our Office Relocation Service"
            subtitle="Tailored logistics features designed specifically for commercial and corporate moves."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {officeInclusions.map((item) => (
              <div
                key={item.title}
                className="p-6 bg-slate-50 rounded-2xl border border-slate-200/80 hover:border-[#F28A32] transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-red-50 text-[#E53935] flex items-center justify-center font-bold text-sm mb-3">
                  ✓
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

      {/* ── Kolkata Commercial Business Districts ──────────────────── */}
      <section className="py-20 bg-slate-50 border-t border-slate-200/80 dot-pattern">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="District Planning"
            title="Office Relocation Planning Across Kolkata Commercial Districts"
            subtitle="Different commercial hubs in Kolkata involve distinct property management rules, freight elevator booking windows, and access constraints. Here is how our corporate move coordinators plan for each area."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {kolkataBusinessDistricts.map((item) => (
              <div
                key={item.district}
                className="p-6 bg-white rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-semibold text-[#E53935] uppercase tracking-wider block mb-1">
                    {item.focus}
                  </span>
                  <h3 className="font-bold text-[#082F52] text-base font-display mb-2">
                    {item.district}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {item.considerations}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-6 text-center text-xs text-slate-500">
            Operating from another commercial park or business center in Greater Kolkata?{' '}
            <Link
              href="/get-a-quote"
              className="text-[#E53935] font-semibold hover:underline"
            >
              Consult our corporate planner
            </Link>{' '}
            for custom facility coordination.
          </p>
        </div>
      </section>

      {/* ── Office Scope & Cost Factors Framework ───────────────────── */}
      <section className="py-20 bg-white border-t border-slate-200/80">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Scope & Investment"
            title="What Determines Your Commercial Relocation Scope"
            subtitle="Every office transition has unique asset requirements, timeline constraints, and structural layouts. Understanding these core drivers helps your management team prepare an accurate relocation brief."
          />

          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-xs">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#082F52] text-white">
                  <th className="text-left px-5 py-3.5 font-semibold text-xs uppercase tracking-wider w-2/5">
                    Relocation Scope Driver
                  </th>
                  <th className="text-left px-5 py-3.5 font-semibold text-xs uppercase tracking-wider">
                    How It Affects Your Corporate Move Quotation
                  </th>
                </tr>
              </thead>
              <tbody>
                {officeScopeFactors.map((row, i) => (
                  <tr
                    key={row.factor}
                    className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}
                  >
                    <td className="px-5 py-4 font-semibold text-[#082F52] text-sm align-top">
                      {row.factor}
                    </td>
                    <td className="px-5 py-4 text-slate-600 leading-relaxed align-top">
                      {row.effect}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 p-5 bg-slate-50 rounded-2xl border border-slate-200 text-sm text-slate-700 leading-relaxed space-y-2">
            <p>
              <strong className="text-[#082F52]">How corporate proposals work:</strong>{' '}
              Commercial moves are quoted following a structured scope assessment or an
              on-site facility walk-through. We provide detailed written proposals with
              transparent breakdowns for packing materials, carpentry labor, transit
              insurance, and vehicle logistics with zero hidden surcharges.
            </p>
            <p>
              Relocating corporate assets or an office branch to another state? Read our{' '}
              <Link
                href="/intercity-moving-guide"
                className="text-[#E53935] font-semibold hover:underline"
              >
                Kolkata Intercity Relocation Guide
              </Link>{' '}
              for interstate highway logistics planning.
            </p>
          </div>

          <div className="mt-6 text-center">
            <Link
              href="/get-a-quote"
              className="inline-flex items-center gap-2 bg-[#E53935] hover:bg-[#c62828] text-white font-semibold text-sm px-7 py-3.5 rounded-xl shadow-md transition-colors"
            >
              Request Corporate Proposal
            </Link>
          </div>
        </div>
      </section>

      {/* ── Readiness Checklist & IT Responsibility Division ────────── */}
      <section className="py-20 bg-slate-50 border-t border-slate-200/80">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Facility Readiness"
            title="Corporate Readiness Checklist & IT Responsibility Division"
            subtitle="A seamless corporate transition depends on early facility coordination and a clear division between physical moving logistics and internal IT technical management."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {corporatePlanningTips.map((tip) => (
              <div key={tip.title} className="p-6 bg-white rounded-2xl border border-slate-200 shadow-xs">
                <h3 className="font-bold text-[#082F52] text-sm font-display mb-2">
                  {tip.title}
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  {tip.desc}
                </p>
              </div>
            ))}
          </div>

          {/* IT Equipment Responsibility Division Callout Box */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs">
            <h3 className="text-base sm:text-lg font-bold font-display text-[#082F52] mb-2">
              IT Asset Scope: Physical Logistics vs. Technical Responsibility
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
              To ensure data security, hardware safety, and swift post-move reconnection, we recommend defining clear boundaries between our physical logistics crew and your organization&apos;s IT engineering team:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-5 bg-slate-50 rounded-xl border border-slate-200">
                <h4 className="font-bold text-[#082F52] text-sm font-display mb-3 flex items-center gap-2">
                  <span className="w-5 h-5 rounded-md bg-[#082F52] text-white flex items-center justify-center text-xs">📦</span>
                  What Our Relocation Team Handles
                </h4>
                <ul className="space-y-2 text-xs text-slate-600 leading-relaxed">
                  {itBoundaryGuidelines.physicalScope.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="text-[#E53935] font-bold">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-5 bg-blue-50/50 rounded-xl border border-blue-200/80">
                <h4 className="font-bold text-[#082F52] text-sm font-display mb-3 flex items-center gap-2">
                  <span className="w-5 h-5 rounded-md bg-[#E53935] text-white flex items-center justify-center text-xs">💻</span>
                  What Your Internal IT Team Handles
                </h4>
                <ul className="space-y-2 text-xs text-slate-700 leading-relaxed">
                  {itBoundaryGuidelines.technicalScope.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="text-[#082F52] font-bold">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-6 p-4 bg-amber-50 rounded-xl border border-amber-200 text-xs text-amber-900 leading-relaxed text-center">
              💡 <strong>IT Coordination Tip:</strong> Reviewing this division with your IT department prior to moving weekend supports complete hardware readiness and prevents unscheduled downtime on launch morning.
            </div>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
            <Link
              href="/moving-checklist"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#E53935] hover:underline"
            >
              <span>View Full Moving Checklist &amp; Timeline Guide</span>
              <span aria-hidden="true">→</span>
            </Link>
            <span className="hidden sm:inline text-slate-300">·</span>
            <Link
              href="/household-shifting"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#082F52] hover:underline"
            >
              <span>Coordinate Employee Household Shifting</span>
              <span aria-hidden="true">→</span>
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
                Need residential employee shifting or dedicated vehicle transport?
              </p>
            </div>
            <Link
              href="/household-shifting"
              className="text-[#E53935] text-xs font-semibold hover:underline"
            >
              Employee Home Shifting →
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
            Corporate Move Planning
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold mb-4 text-white">
            Plan Your Office Move with Minimal Downtime
          </h2>
          <p className="text-white/80 text-sm sm:text-base leading-relaxed mb-8 max-w-2xl mx-auto">
            Schedule a site survey or speak with our commercial move planner for a structured quotation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/get-a-quote"
              className="inline-flex items-center justify-center gap-2 bg-[#E53935] hover:bg-[#c62828] text-white font-semibold text-sm px-7 py-4 rounded-xl shadow-lg transition-colors w-full sm:w-auto"
            >
              Request Corporate Proposal
            </Link>
            <a
              href={getWhatsAppUrl('Hi, I need a consultation for office relocation with Bharat Relocators.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm px-6 py-4 rounded-xl shadow-lg transition-colors w-full sm:w-auto"
            >
              WhatsApp Corporate Desk
            </a>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}

