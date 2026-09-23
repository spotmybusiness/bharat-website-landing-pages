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
  title: 'Household Shifting Services in Kolkata',
  description:
    'Reliable household shifting and home relocation in Kolkata & PAN India. 5-layer packing, trained carpenters for furniture assembly, and dedicated transit safety.',
  path: '/household-shifting',
});

const processSteps = [
  {
    step: '01',
    title: 'Survey & Transparent Quote',
    desc: 'Share your home inventory online or via call. Our move coordinators evaluate your move volume and site conditions to provide an all-inclusive transparent written quotation with zero hidden surcharges.',
  },
  {
    step: '02',
    title: '5-Layer Packing & Care',
    desc: 'Our packing team arrives with premium 5-layer corrugated boxes, heavy-duty bubble wrap, corner edge protectors, and custom wooden crating for fragile items and electronics.',
  },
  {
    step: '03',
    title: 'Container Loading & Transit',
    desc: 'Goods are securely loaded into dedicated container trucks with shock-absorption padding and full transit insurance coverage driven by verified highway drivers.',
  },
  {
    step: '04',
    title: 'Unpacking & Furniture Assembly',
    desc: 'At your new home, our crew unloads, unpacks, reassembles your beds and modular wardrobes, places items room-wise, and removes packing debris.',
  },
];

const inclusions = [
  {
    title: 'Complete Packing Materials',
    desc: '5-layer corrugated cartons, wardrobe boxes, LED TV wooden cases, stretch film, bubble wraps, and transit covers.',
  },
  {
    title: 'Furniture Dismantling & Assembly',
    desc: 'Carpentry support for double beds, modular wardrobes, dining tables, and wall fittings at no extra hidden cost.',
  },
  {
    title: 'Fragile & Glassware Protection',
    desc: 'Specialized handling and cushioning for delicate crockery, mirrors, chandeliers, and high-value decorative items.',
  },
  {
    title: 'Goods Transit Insurance',
    desc: 'Comprehensive transit insurance coverage providing financial protection against unforeseen road transit incidents.',
  },
  {
    title: 'Door-to-Door Delivery',
    desc: 'Direct transport from your current residence straight to your new rooms, whether moving within Kolkata or intercity.',
  },
  {
    title: 'Dedicated Move Coordinator',
    desc: 'A single point of contact providing milestone updates and coordination from pickup until handover.',
  },
];

/** Cost factors table â€” qualitative only, no fabricated â‚¹ figures */
const costFactors = [
  {
    factor: 'Home Size & Volume',
    effect:
      'The total number of rooms, furniture pieces, and packed cartons is the primary driver. A studio apartment requires significantly fewer resources than a 3 BHK with large furniture.',
  },
  {
    factor: 'Origin & Destination Distance',
    effect:
      'Local moves within Kolkata involve shorter transit time. Intercity moves to other states require dedicated container allocation and longer highway transit.',
  },
  {
    factor: 'Floor Level & Lift Access',
    effect:
      'Ground-floor or lift-served apartments are straightforward to load. Upper floors without a service lift require manual stair carries and additional crew time.',
  },
  {
    factor: 'Building Access Conditions',
    effect:
      'Narrow approach lanes, society gate restrictions, and service-elevator booking windows can influence crew scheduling and vehicle size selection.',
  },
  {
    factor: 'Packing Materials Required',
    effect:
      'Standard packing is included. Special requirements such as wooden TV crates, mirror frames, or anti-shock crating for fragile items influence material costs.',
  },
  {
    factor: 'Special Item Handling',
    effect:
      'Piano, large aquarium, gym equipment, or oversized antique furniture may require customised dismantling or crane assistance and are quoted separately.',
  },
  {
    factor: 'Move Date & Timing',
    effect:
      'Demand peaks around month-ends, public holidays, and the Octoberâ€“November festive season. Flexible mid-month or mid-week scheduling often allows better availability.',
  },
  {
    factor: 'Transit Insurance Coverage',
    effect:
      'Comprehensive goods-in-transit insurance is included. The declared value of your inventory affects the premium component of the total cost.',
  },
];

/** Kolkata geographic zones â€” framed around access planning, not coverage promises */
const kolkataZones = [
  {
    zone: 'South Kolkata',
    localities: 'Haltu Â· Behala Â· Jadavpur Â· Garia Â· Tollygunge Â· Ballygunge Â· Alipore Â· Joka',
    note: 'Our base of operations is in Haltu, South Kolkata. Many residential streets in this belt feature narrow access lanes and older multi-storey buildings, which we account for in crew and vehicle planning.',
  },
  {
    zone: 'East & North-East Kolkata',
    localities: 'Salt Lake (Sectors Iâ€“V) Â· New Town Â· Rajarhat Â· Kasba',
    note: 'Gated residential complexes in Salt Lake and New Town typically require advance gate pass requests and booked service-elevator time slots. Our move coordinators initiate this with your society office proactively.',
  },
  {
    zone: 'North, Central Kolkata & Howrah',
    localities: 'Park Street Â· Shyambazar Â· Dum Dum Â· Barasat Â· Howrah Â· Dalhousie',
    note: 'High-density residential and mixed-use buildings in central Kolkata and Howrah often have walkup floors without a service lift. Our trained crew is equipped for manual stair-carry operations and coordinates parking clearance for loading vehicles.',
  },
];

const prepTips = [
  {
    title: 'Segregate Personal Essentials',
    desc: 'Keep jewelry, passports, financial documents, laptops, and daily medicines in a personal carry bag.',
  },
  {
    title: 'Defrost Refrigerator in Advance',
    desc: 'Turn off and defrost your refrigerator at least 24 hours prior to moving day to prevent moisture leaks in transit.',
  },
  {
    title: 'Identify High-Value & Fragile Items',
    desc: 'Inform our move supervisor during initial packing so specialized custom crating can be deployed.',
  },
];

export default function HouseholdShiftingPage() {
  const relatedServices = getRelatedServices('household-shifting', 3);

  return (
    <PageLayout>
      <PageHero
        label="Residential Relocation"
        title={
          <>
            Household Shifting Services in <span className="text-[#F28A32]">Kolkata & PAN India</span>
          </>
        }
        subtitle="Complete residential relocation with 5-layer protective packing, safe furniture dismantling, dedicated container trucks, and room-wise unpacking."
        breadcrumbs={[
          { label: 'Services' },
          { label: 'Household Shifting' },
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
                Safe Home Moving
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-[#082F52] mb-5 leading-tight">
                Stress-Free Home Relocation for Apartments, Villas & Townhomes
              </h2>
              <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                <p>
                  Relocating your household requires more than just moving boxes â€” it requires structured care for personal belongings, heavy furniture, sensitive electronics, and delicate glassware.
                </p>
                <p>
                  At Bharat Relocators, our residential shifting service is built on systematic multi-layer packing standards. Whether you are shifting a 1 BHK locally within Kolkata or relocating a 3+ BHK villa across India, our trained crew manages the complete move from <Link href="/contact" className="text-[#E53935] font-semibold hover:underline">pre-move survey</Link> to final room placement.
                </p>
                <p>
                  Operating with structured quality standards, we utilize dedicated closed-body container trucks with shock-absorption padding, ensuring your home goods arrive on time and in intact condition.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <span className="text-xs bg-slate-100 text-slate-700 font-semibold px-3.5 py-1.5 rounded-lg">
                  âœ“ 1-2 BHK Local Moves
                </span>
                <span className="text-xs bg-slate-100 text-slate-700 font-semibold px-3.5 py-1.5 rounded-lg">
                  âœ“ 3+ BHK & Villa Relocation
                </span>
                <span className="text-xs bg-slate-100 text-slate-700 font-semibold px-3.5 py-1.5 rounded-lg">
                  âœ“ Intercity PAN India Shifting
                </span>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] border border-slate-200">
                <AppImage
                  src="/images/packaging.png"
                  alt="Living room with packed moving boxes and organized furniture for home relocation"
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
            <h3 className="text-xl sm:text-2xl font-display font-bold text-emerald-900 mb-2">Need immediate assistance with your household move?</h3>
            <p className="text-emerald-700 text-sm sm:text-base">Speak directly with our move coordinators for instant pricing and scheduling.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <a href="tel:+919123046504" className="bg-[#082F52] hover:bg-[#0b3b60] text-white px-6 py-3 rounded-xl font-semibold shadow-md transition-colors flex items-center justify-center gap-2 text-sm">
              Call: +91 91230 46504
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
            label="Structured Workflow"
            title="Our 4-Step Household Moving Process"
            subtitle="From initial estimation to final room setup, our structured protocol ensures complete transit safety."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step) => (
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
                      Phase {step.step}
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
            label="Comprehensive Scope"
            title="What is Included in Our Home Shifting Service"
            subtitle="All-inclusive residential moving with no hidden charges or unexpected surprise fees."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {inclusions.map((item) => (
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

      {/* â”€â”€ Cost Factors â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <section className="py-20 bg-white border-t border-slate-200/80">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Cost Guidance"
            title="What Affects Your Home Shifting Cost"
            subtitle="Every home move is different. Understanding these factors helps you plan your budget and have a more informed conversation with our coordinator."
          />

          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-xs">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#082F52] text-white">
                  <th className="text-left px-5 py-3.5 font-semibold text-xs uppercase tracking-wider w-2/5">
                    Factor
                  </th>
                  <th className="text-left px-5 py-3.5 font-semibold text-xs uppercase tracking-wider">
                    How It Affects Your Quote
                  </th>
                </tr>
              </thead>
              <tbody>
                {costFactors.map((row, i) => (
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
              <strong className="text-[#082F52]">How the estimate process works:</strong>{' '}
              Our move coordinator reviews your inventory â€” either via a brief call or a
              virtual survey â€” and provides a written, all-inclusive quotation. There are
              no surprise charges on the day of the move.
            </p>
            <p>
              Quotes are typically confirmed within a few hours of the initial inquiry.
              For large or complex moves, an in-person pre-move survey gives the most
              accurate assessment. If you have unusual items or special requirements,
              mention them upfront so we can account for them in the scope.
            </p>
          </div>

          <div className="mt-6 text-center">
            <Link
              href="/get-a-quote"
              className="inline-flex items-center gap-2 bg-[#E53935] hover:bg-[#c62828] text-white font-semibold text-sm px-7 py-3.5 rounded-xl shadow-md transition-colors"
            >
              Get Your Free Written Estimate
            </Link>
          </div>
        </div>
      </section>

      {/* â”€â”€ Kolkata Service Areas â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <section className="py-20 bg-slate-50 border-t border-slate-200/80 dot-pattern">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Local Access Planning"
            title="Home Shifting Across Kolkata's Neighbourhoods"
            subtitle="Different parts of Kolkata present different logistics challenges. Here is what our coordinators plan for when your move originates from or arrives at different areas of the city."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {kolkataZones.map((zone) => (
              <div
                key={zone.zone}
                className="p-6 bg-white rounded-2xl border border-slate-200 shadow-xs flex flex-col gap-3"
              >
                <h3 className="font-bold text-[#082F52] font-display text-base">
                  {zone.zone}
                </h3>
                <p className="text-xs text-slate-500 font-medium leading-relaxed">
                  {zone.localities}
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {zone.note}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-6 text-center text-xs text-slate-500">
            Moving from or to a location not listed above?{' '}
            <Link
              href="/get-a-quote"
              className="text-[#E53935] font-semibold hover:underline"
            >
              Contact our coordinator
            </Link>{' '}
            â€” we serve destinations across the wider Kolkata metropolitan area.
          </p>
        </div>
      </section>

      {/* Preparation Tips */}
      <section className="py-16 bg-white border-t border-slate-200/80">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Customer Guidance"
            title="How to Prepare for Your Home Shifting Day"
            subtitle="Simple preparation steps to make your relocation day smooth and efficient."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {prepTips.map((tip) => (
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

          {/* Prohibited goods callout */}
          <div className="mt-8 p-5 bg-amber-50 rounded-xl border border-amber-200">
            <p className="text-xs font-bold text-amber-900 uppercase tracking-wide mb-2">
              âš  Items That Cannot Be Transported
            </p>
            <p className="text-xs text-amber-800 leading-relaxed mb-3">
              For safety, legal, and transit-compliance reasons, the following items must
              be handled separately by the customer and cannot be included in a household
              consignment:
            </p>
            <p className="text-xs text-amber-900 font-medium leading-relaxed">
              LPG / cooking gas cylinders &nbsp;Â·&nbsp; Flammable liquids (petrol,
              kerosene, paint, thinners) &nbsp;Â·&nbsp; Cash, loose jewellery, or
              financial instruments &nbsp;Â·&nbsp; Prescription medicines and medical
              devices &nbsp;Â·&nbsp; Perishable or frozen food &nbsp;Â·&nbsp; Unsealed
              liquids and open containers &nbsp;Â·&nbsp; Important legal documents
              (carry these personally)
            </p>
            <p className="text-xs text-amber-700 mt-3">
              If you are unsure whether a specific item can be included, please confirm
              with our coordinator before packing day.
            </p>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
            <Link
              href="/moving-checklist"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#E53935] hover:underline"
            >
              <span>View Home Moving Checklist & Timeline Guide</span>
              <span aria-hidden="true">â†’</span>
            </Link>
            <span className="hidden sm:inline text-slate-300">Â·</span>
            <Link
              href="/intercity-moving-guide"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#082F52] hover:underline"
            >
              <span>Read Kolkata Intercity Relocation Guide</span>
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
                Combine your household move with dedicated vehicle transport or express parcel delivery.
              </p>
            </div>
            <Link
              href="/faqs"
              className="text-[#E53935] text-xs font-semibold hover:underline"
            >
              Household Moving FAQs â†’
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
            Get Your Estimate
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold mb-4 text-white">
            Ready to Schedule Your Home Shifting?
          </h2>
          <p className="text-white/80 text-sm sm:text-base leading-relaxed mb-8 max-w-2xl mx-auto">
            Get a tailored, all-inclusive household relocation quote structured for your specific volume and schedule.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/get-a-quote"
              className="inline-flex items-center justify-center gap-2 bg-[#E53935] hover:bg-[#c62828] text-white font-semibold text-sm px-7 py-4 rounded-xl shadow-lg transition-colors w-full sm:w-auto"
            >
              Request Free Moving Quote
            </Link>
            <a
              href={getWhatsAppUrl('Hi, I need a quotation for household shifting with Bharat Relocators.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm px-6 py-4 rounded-xl shadow-lg transition-colors w-full sm:w-auto"
            >
              WhatsApp Move Coordinator
            </a>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}

