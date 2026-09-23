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
  title: 'Bike Transportation Services in Kolkata',
  description:
    'Secure bike transport and two-wheeler shipping from Kolkata to PAN India. Custom wooden crating, bubble packaging, cushioned protective transit, and showroom pickup.',
  path: '/bike-shifting',
});

const bikeSteps = [
  {
    step: '01',
    title: 'Booking & Document Verification',
    desc: 'Share vehicle details (make, model, pickup & destination city). Submit standard photocopies of RC book, valid insurance, PUC, and owner ID proof.',
  },
  {
    step: '02',
    title: 'Multi-Layer Packing & Crating',
    desc: 'Mirrors and accessories are safely removed or packed. The bike is wrapped in high-density bubble film, foam corner protectors, and optional custom wooden crates.',
  },
  {
    step: '03',
    title: 'Container Loading & Wheel Locking',
    desc: 'The two-wheeler is loaded into dedicated closed container trucks and firmly anchored using specialized wheel chocks and heavy-duty nylon tie-down straps.',
  },
  {
    step: '04',
    title: 'Doorstep Handover & Joint Inspection',
    desc: 'Upon arrival at the destination city, the bike is safely unloaded and unpacked for joint condition inspection before handover.',
  },
];

const inclusions = [
  {
    title: 'Custom Wooden Crating Option',
    desc: 'Heavy-duty wooden outer frame protection recommended for sports bikes, cruisers, and premium brand-new motorcycles.',
  },
  {
    title: 'High-Density Bubble & Foam Wrapping',
    desc: 'Multiple layers of shock-absorbent bubble wrap, stretch film, and scratch-resistant padding over painted and chrome parts.',
  },
  {
    title: 'Showroom & Doorstep Pickup',
    desc: 'Convenient pickup directly from motorcycle showrooms or your home address in Kolkata with verified handover receipt.',
  },
  {
    title: 'Transit Insurance Protection',
    desc: 'Comprehensive goods-in-transit policy protecting against unforeseen road transit risks and handling damage.',
  },
  {
    title: 'Closed Carrier Transport',
    desc: 'All-weather closed container trucks shielding your bike from rain, dust, road debris, and highway weather elements.',
  },
  {
    title: 'Milestone Tracking & Coordinator Support',
    desc: 'Direct coordinator assistance and dispatch updates until your vehicle safely arrives at the destination.',
  },
];

const vehicleDocGuidance = [
  {
    title: 'Vehicle Registration (RC Copy)',
    desc: 'Clear photocopy of the Vehicle Registration Certificate (Smart Card or Paper RC).',
  },
  {
    title: 'Valid Insurance Policy Copy',
    desc: 'Copy of active comprehensive or third-party two-wheeler insurance policy.',
  },
  {
    title: 'Pollution Under Control (PUC)',
    desc: 'Valid Pollution Under Control Certificate copy required for intercity highway transit.',
  },
  {
    title: 'Government ID Proof',
    desc: 'Photocopy of ownerÃ¢â‚¬â„¢s Aadhar Card, Driving License, or Passport.',
  },
];

/** Major outbound corridors from Kolkata for two-wheeler shipping */
const bikeCorridors = [
  {
    destination: 'Kolkata Ã¢â€ â€™ Bangalore & South India',
    routeInfo: 'Via NH 16 Eastern Coastal Corridor',
    logistics:
      'Major southern technology route connecting West Bengal with Bangalore, Chennai, and Hyderabad. Handled via regular containerized vehicle line-hauls.',
  },
  {
    destination: 'Kolkata Ã¢â€ â€™ Delhi NCR & North India',
    routeInfo: 'Via NH 19 Northern Trunk Corridor',
    logistics:
      'Primary northern route serving Delhi, Noida, Gurgaon, and surrounding regions with scheduled line-haul departures.',
  },
  {
    destination: 'Kolkata Ã¢â€ â€™ Mumbai & Pune (West India)',
    routeInfo: 'Via NH 53 / NH 16 Western Highway Grid',
    logistics:
      'Cross-country corridor connecting to Maharashtra commercial centres where closed container trucks protect bikes against highway dust, rain, and road vibrations.',
  },
  {
    destination: 'Kolkata Ã¢â€ â€™ Hyderabad (Telangana)',
    routeInfo: 'Via NH 16 & NH 65 Highway Networks',
    logistics:
      'Established southern corridor through Odisha and Andhra Pradesh, suitable for both standard commuters and premium sports motorcycles.',
  },
];

/** Cost drivers for two-wheeler transport Ã¢â‚¬â€ qualitative factors only */
const bikeCostFactors = [
  {
    factor: 'Journey Distance & Highway Corridors',
    effect:
      'Total road distance along national highways and inter-state toll routes forms the primary baseline for the transport quote.',
  },
  {
    factor: 'Two-Wheeler Category & Size',
    effect:
      'Commuter scooters, lightweight motorcycles, heavy cruisers, and performance sports bikes require different container bay space and handling procedures.',
  },
  {
    factor: 'Packaging & Wooden Crating',
    effect:
      'Multi-layer bubble wrapping and foam cushioning are standard. Heavy-duty custom wooden outer crating is an optional upgrade for added protection on premium bikes.',
  },
  {
    factor: 'Pickup & Delivery Accessibility',
    effect:
      'Direct doorstep collection from your home or showroom in Kolkata and delivery to your destination address vs. terminal collection.',
  },
  {
    factor: 'Declared Value & Transit Insurance',
    effect:
      'Goods-in-transit insurance premium is based on the declared value of your two-wheeler to provide financial safeguard against unforeseen road transit risks.',
  },
  {
    factor: 'Seasonal & Scheduling Factors',
    effect:
      'Peak relocation periods (month-ends, festive seasons) and urgent dispatch requirements can influence carrier slot availability.',
  },
];

/** Factual comparison between professional vehicle carrier and Indian Railways parcel */
const bikeVsRailwayData = [
  {
    feature: 'Pickup & Delivery',
    carrier: 'Doorstep pickup from home or showroom in Kolkata; direct delivery to destination address.',
    railway: 'Station-to-station service; customer arranges drop-off at Kolkata/Howrah parcel counter and collection at destination depot.',
  },
  {
    feature: 'Packaging & Protection',
    carrier: 'Multi-layer bubble wrap, scratch-guard foam sheets, and optional heavy-duty wooden crating provided by crew.',
    railway: 'Customer arranges packaging at the parcel office (typically gunny cloth and corrugated sheets via station packers).',
  },
  {
    feature: 'Booking & Documentation',
    carrier: 'Coordinated online or via phone; digital verification of RC, insurance, PUC, and ID with formal consignment waybill.',
    railway: 'In-person booking at railway parcel counter with physical documents, photo ID, and train ticket (if booking as luggage).',
  },
  {
    feature: 'Fuel in Tank',
    carrier: 'Minimal reserve fuel (under 1Ã¢â‚¬â€œ2 litres) is maintained to enable ramp loading and unloading operations.',
    railway: 'Complete fuel tank emptying is mandatory prior to booking as a railway fire-safety regulation.',
  },
  {
    feature: 'Transit Environment',
    carrier: 'Dedicated closed container truck with wheel chocks and heavy-duty tie-down straps throughout highway transit.',
    railway: 'Transported in luggage brake vans (SLR) or parcel wagons of scheduled passenger/express trains.',
  },
  {
    feature: 'Best Suited For',
    carrier: 'High-value bikes, sports/cruiser motorcycles, showroom purchases, or when door-to-door convenience is preferred.',
    railway: 'Budget-sensitive moves, commuter bikes, or when the owner travels on the same train and can manage station logistics.',
  },
];

export default function BikeShiftingPage() {
  const relatedServices = getRelatedServices('bike-shifting', 3);

  return (
    <PageLayout>
      <PageHero
        label="Two-Wheeler Express Logistics"
        title={
          <>
            Bike Transport & Two-Wheeler <span className="text-[#F28A32]">Shifting Services</span>
          </>
        }
        subtitle="Safe, high-protection motorcycle and scooter transportation from Kolkata to all major cities in India with custom wooden crating and closed container security."
        breadcrumbs={[
          { label: 'Services' },
          { label: 'Bike Transport' },
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
                Specialized Bike Shipping
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-[#082F52] mb-5 leading-tight">
                High-Protection Two-Wheeler Relocation Across India
              </h2>
              <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                <p>
                  Relocating your motorcycle or scooter requires specific care to prevent cosmetic damage, mechanical stress, or fluid leakage during long highway journeys.
                </p>
                <p>
                  Bharat Relocators provides specialized bike transport services from Kolkata to major cities across India. Whether you are moving a lightweight commuter scooter or a high-end cruiser, we employ multi-layered shock-absorbing packaging and heavy-duty strapping inside closed container trucks. <Link href="/contact" className="text-[#E53935] font-semibold hover:underline">Get an instant quote for your bike model</Link>.
                </p>
                <p>
                  With comprehensive Goods Receipt (GR) tracking and dedicated transit insurance, we ensure your vehicle arrives in the exact condition it was handed over.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <span className="text-xs bg-slate-100 text-slate-700 font-semibold px-3.5 py-1.5 rounded-lg">
                  Ã¢Å“â€œ Door-to-Door Pickup & Delivery
                </span>
                <span className="text-xs bg-slate-100 text-slate-700 font-semibold px-3.5 py-1.5 rounded-lg">
                  Ã¢Å“â€œ Transit Insurance Included
                </span>
                <span className="text-xs bg-slate-100 text-slate-700 font-semibold px-3.5 py-1.5 rounded-lg">
                  Ã¢Å“â€œ Premium Wooden Crating Available
                </span>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] border border-slate-200">
                <AppImage
                  src="/images/bike.png"
                  alt="Multi-layer packed motorcycle being securely transported in Kolkata"
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
            <h3 className="text-xl sm:text-2xl font-display font-bold text-emerald-900 mb-2">Ready to ship your two-wheeler?</h3>
            <p className="text-emerald-700 text-sm sm:text-base">Speak directly with our transport coordinators for instant pricing and documentation help.</p>
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
            label="Step-by-Step Handling"
            title="Our 4-Step Bike Transportation Workflow"
            subtitle="From pre-move document verification to safe destination delivery and joint inspection."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {bikeSteps.map((step) => (
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
            label="Service Highlights"
            title="What Our Bike Transport Service Includes"
            subtitle="Dedicated protective features designed specifically for two-wheeler highway transit."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {inclusions.map((item) => (
              <div
                key={item.title}
                className="p-6 bg-slate-50 rounded-2xl border border-slate-200/80 hover:border-[#F28A32] transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-red-50 text-[#E53935] flex items-center justify-center font-bold text-sm mb-3">
                  Ã¢Å“â€œ
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

      {/* Ã¢â€â‚¬Ã¢â€â‚¬ Destination Corridors & Cost Factors Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬ */}
      <section className="py-20 bg-slate-50 border-t border-slate-200/80 dot-pattern">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Route & Cost Guidance"
            title="Two-Wheeler Transport from Kolkata: Corridors & Cost Factors"
            subtitle="Understand the key national highway corridors connecting Kolkata with major destinations and the logistical variables that determine your personalized transport quote."
          />

          {/* Corridor Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {bikeCorridors.map((corridor) => (
              <div
                key={corridor.destination}
                className="p-6 bg-white rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-semibold text-[#E53935] uppercase tracking-wider block mb-1">
                    {corridor.routeInfo}
                  </span>
                  <h3 className="font-bold text-[#082F52] text-lg font-display mb-2">
                    {corridor.destination}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {corridor.logistics}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Cost Factors Table */}
          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-xs">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#082F52] text-white">
                  <th className="text-left px-5 py-3.5 font-semibold text-xs uppercase tracking-wider w-2/5">
                    Logistics & Cost Driver
                  </th>
                  <th className="text-left px-5 py-3.5 font-semibold text-xs uppercase tracking-wider">
                    How It Affects Your Bike Transport Quote
                  </th>
                </tr>
              </thead>
              <tbody>
                {bikeCostFactors.map((row, i) => (
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

          <div className="mt-8 p-5 bg-white rounded-2xl border border-slate-200 text-sm text-slate-700 leading-relaxed space-y-2">
            <p>
              <strong className="text-[#082F52]">How two-wheeler quotes work:</strong>{' '}
              Pricing is calculated based on vehicle displacement, pickup address in
              Kolkata, destination city, and packaging choices. We provide written,
              all-inclusive quotes with zero hidden fees.
            </p>
            <p>
              Planning an interstate relocation involving both your two-wheeler and household
              goods? Read our{' '}
              <Link
                href="/intercity-moving-guide"
                className="text-[#E53935] font-semibold hover:underline"
              >
                Kolkata Intercity Relocation Guide
              </Link>{' '}
              for complete highway transport planning.
            </p>
          </div>

          <div className="mt-6 text-center">
            <Link
              href="/get-a-quote"
              className="inline-flex items-center gap-2 bg-[#E53935] hover:bg-[#c62828] text-white font-semibold text-sm px-7 py-3.5 rounded-xl shadow-md transition-colors"
            >
              Get Your Free Bike Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Ã¢â€â‚¬Ã¢â€â‚¬ Documentation Requirements Guidance Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬ */}
      <section className="py-16 bg-white border-t border-slate-200/80">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Checklist & Documents"
            title="Required Documents for Intercity Bike Transit"
            subtitle="Please have clear photocopies of these standard vehicle documents ready prior to carrier loading."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {vehicleDocGuidance.map((doc) => (
              <div key={doc.title} className="p-6 bg-slate-50 rounded-2xl border border-slate-200/80 shadow-xs">
                <div className="w-7 h-7 rounded-md bg-[#082F52] text-white flex items-center justify-center font-bold text-xs mb-3">
                  Ã°Å¸â€œâ€ž
                </div>
                <h3 className="font-bold text-[#082F52] text-sm font-display mb-2">
                  {doc.title}
                </h3>
                <p className="text-slate-600 text-xs leading-relaxed">
                  {doc.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ã¢â€â‚¬Ã¢â€â‚¬ Railway vs. Professional Carrier Comparison Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬ */}
      <section className="py-20 bg-slate-50 border-t border-slate-200/80">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Decision Framework"
            title="Professional Bike Transport vs. Indian Railways Parcel"
            subtitle="Both transport arrangements serve different relocation needs. Compare practical factors to understand which option best matches your budget, schedule, and vehicle protection requirements."
          />

          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-xs">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#082F52] text-white">
                  <th className="text-left px-5 py-3.5 font-semibold text-xs uppercase tracking-wider w-1/4">
                    Comparison Factor
                  </th>
                  <th className="text-left px-5 py-3.5 font-semibold text-xs uppercase tracking-wider w-3/8">
                    Professional Carrier (Bharat Relocators)
                  </th>
                  <th className="text-left px-5 py-3.5 font-semibold text-xs uppercase tracking-wider w-3/8">
                    Indian Railways Parcel
                  </th>
                </tr>
              </thead>
              <tbody>
                {bikeVsRailwayData.map((row, i) => (
                  <tr
                    key={row.feature}
                    className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}
                  >
                    <td className="px-5 py-4 font-semibold text-[#082F52] text-sm align-top">
                      {row.feature}
                    </td>
                    <td className="px-5 py-4 text-slate-700 leading-relaxed align-top">
                      {row.carrier}
                    </td>
                    <td className="px-5 py-4 text-slate-600 leading-relaxed align-top">
                      {row.railway}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 p-4 bg-amber-50 rounded-xl border border-amber-200 text-xs text-amber-900 leading-relaxed text-center">
            Ã°Å¸â€™Â¡ <strong>Railway Guidelines Notice:</strong> Railway parcel rules, booking hours, loading procedures, and counter formalities are governed by Indian Railways regulations and station-specific policies. Customers considering rail transport should verify current booking requirements directly with the parcel office at Howrah, Sealdah, or their departure station.
          </div>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
            <Link
              href="/vehicle-transportation-guide"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#E53935] hover:underline"
            >
              <span>Read Full Vehicle Transportation &amp; Safety Guide</span>
              <span aria-hidden="true">Ã¢â€ â€™</span>
            </Link>
            <span className="hidden sm:inline text-slate-300">Ã‚Â·</span>
            <Link
              href="/household-shifting"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#082F52] hover:underline"
            >
              <span>Pair with Household Relocation</span>
              <span aria-hidden="true">Ã¢â€ â€™</span>
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
                Explore Related Services
              </h3>
              <p className="text-slate-500 text-xs sm:text-sm">
                Pair your bike transport with household moving or car transportation.
              </p>
            </div>
            <Link
              href="/car-shifting"
              className="text-[#E53935] text-xs font-semibold hover:underline"
            >
              Need Car Transportation? Ã¢â€ â€™
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
            Transparent Pricing
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold mb-4 text-white">
            Ready to Transport Your Bike Safely?
          </h2>
          <p className="text-white/80 text-sm sm:text-base leading-relaxed mb-8 max-w-2xl mx-auto">
            Get an exact, route-based two-wheeler moving estimate with multi-layer packing and custom wooden crate options.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/get-a-quote"
              className="inline-flex items-center justify-center gap-2 bg-[#E53935] hover:bg-[#c62828] text-white font-semibold text-sm px-7 py-4 rounded-xl shadow-lg transition-colors w-full sm:w-auto"
            >
              Get Free Bike Quote
            </Link>
            <a
              href={getWhatsAppUrl('Hi, I need a quote for bike transport with Bharat Relocators.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm px-6 py-4 rounded-xl shadow-lg transition-colors w-full sm:w-auto"
            >
              WhatsApp Coordinator
            </a>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}

