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
  title: 'Car Transportation Services in Kolkata',
  description:
    'Dedicated closed carrier car transportation from Kolkata to PAN India. Hydraulic ramp loading, comprehensive transit insurance, vehicle condition report, and GPS milestone tracking.',
  path: '/car-shifting',
});

const carSteps = [
  {
    step: '01',
    title: 'Booking & Vehicle Documentation',
    desc: 'Share car model, transmission type, pickup address, and destination city. Provide copies of RC, active insurance, PUC, and owner ID.',
  },
  {
    step: '02',
    title: 'Pre-Move Vehicle Inspection',
    desc: 'Our coordinator conducts a thorough visual inspection, records odometer reading, documents existing scratches/dents, and issues a signed Condition Report.',
  },
  {
    step: '03',
    title: 'Hydraulic Loading & Secure Strapping',
    desc: 'The car is gently driven onto specialized closed-container carriers via hydraulic ramps, anchored with heavy-duty wheel chocks and safety tension straps.',
  },
  {
    step: '04',
    title: 'Destination Delivery & Verification',
    desc: 'Upon arrival, the vehicle is safely unloaded at your destination for final inspection against the original pre-move condition sheet.',
  },
];

const inclusions = [
  {
    title: 'Dedicated Closed Car Carriers',
    desc: 'Multi-car enclosed containers shielding your vehicle from dust, stone chips, rain, and highway road hazards.',
  },
  {
    title: 'Hydraulic Ramp Loading',
    desc: 'Low-angle hydraulic ramps ensuring smooth, scrape-free loading for low ground-clearance sedans and hatchbacks.',
  },
  {
    title: 'Pre-Transit Condition Report',
    desc: 'Detailed photographic and written inspection report verifying vehicle status prior to carrier loading.',
  },
  {
    title: 'Comprehensive Transit Insurance',
    desc: 'All-inclusive goods-in-transit policy covering unexpected transit risks on national highways.',
  },
  {
    title: 'Wheel Chock & Strap Anchoring',
    desc: 'Four-wheel locking system keeping your car stationary and shock-buffered throughout the journey.',
  },
  {
    title: 'Milestone Tracking & Driver Coordination',
    desc: 'Direct dispatch communication and milestone updates until safe doorstep or hub delivery.',
  },
];

const vehicleDocGuidance = [
  {
    title: 'Registration Certificate (RC)',
    desc: 'Clear photocopy of the official vehicle registration card or paper document.',
  },
  {
    title: 'Valid Comprehensive Insurance',
    desc: 'Copy of active vehicle insurance policy covering the car during transit.',
  },
  {
    title: 'Pollution Certificate (PUC)',
    desc: 'Valid Pollution Under Control certificate required for interstate transit.',
  },
  {
    title: 'Owner Identification Proof',
    desc: "Photocopy of owner's government photo ID (Aadhar / Passport / License).",
  },
];

/** Major outbound corridors from Kolkata — qualitative logistics context from intercity guide */
const carCorridors = [
  {
    destination: 'Kolkata → Delhi NCR',
    routeInfo: 'Via NH 19 Northern Trunk Corridor',
    logistics:
      'Primary northern route connecting West Bengal through Bihar and Uttar Pradesh to Delhi, Noida, and Gurgaon. Handled via regular carrier line-hauls.',
  },
  {
    destination: 'Kolkata → Mumbai & Pune',
    routeInfo: 'Via NH 53 / NH 16 Western Highway Grid',
    logistics:
      'Major industrial corridor to Maharashtra. Extensive cross-country highway transit where closed-container protection shields against dust, weather, and road debris.',
  },
  {
    destination: 'Kolkata → Bangalore',
    routeInfo: 'Via NH 16 Eastern Coastal Corridor',
    logistics:
      'High-demand technology corridor connecting southwards. Commonly booked for dedicated car carriers and corporate relocation transfers.',
  },
  {
    destination: 'Kolkata → Hyderabad',
    routeInfo: 'Via NH 16 & NH 65 Highway Networks',
    logistics:
      'Southern transit route passing through Odisha and Andhra Pradesh into Telangana, suitable for standard sedans, hatchbacks, and premium SUVs.',
  },
];

/** Cost drivers for car transport — factors only, no fabricated price numbers */
const carCostFactors = [
  {
    factor: 'Route Distance & Highway Tolls',
    effect:
      'Total road distance and highway toll infrastructure along national corridors directly shape the carrier quote. Longer interstate journeys require dedicated multi-day scheduling.',
  },
  {
    factor: 'Vehicle Size & Category',
    effect:
      'Hatchbacks, sedans, compact SUVs, and full-size luxury SUVs require different bay dimensions and weight distribution on the carrier truck.',
  },
  {
    factor: 'Carrier Configuration',
    effect:
      'Closed container carriers provide comprehensive shielding against road debris, weather, and highway dust, while open multi-car carriers provide standard alternatives where available.',
  },
  {
    factor: 'Pickup & Delivery Accessibility',
    effect:
      'Direct doorstep collection in narrow Kolkata lanes may require smaller local flatbed transport to reach the main highway carrier terminal.',
  },
  {
    factor: 'Declared Value & Transit Insurance',
    effect:
      'Goods-in-transit insurance premium is calculated against the declared market value of your vehicle for financial protection during long-haul road transit.',
  },
  {
    factor: 'Seasonal & Operational Timing',
    effect:
      'Monsoon road conditions, month-end demand surges, and festival-season freight volumes can influence carrier slot availability and transit schedules.',
  },
];

/** Step-by-step pre-transit preparation protocol */
const carPrepProtocol = [
  {
    step: '01',
    title: 'Fuel & Fluid Level Management',
    desc: 'Maintain fuel at approximately one-fourth (1/4) tank or minimum reserve. This leaves sufficient fuel for ramp loading and unloading while minimizing flammable weight during long highway transit. Check for engine oil or fluid leaks.',
  },
  {
    step: '02',
    title: 'Complete Exterior Wash & Clean',
    desc: 'Wash your car before handover. A clean exterior allows the coordinator to clearly inspect, photograph, and document existing paint condition, surface scratches, and stone chips on the joint inspection sheet.',
  },
  {
    step: '03',
    title: 'Photographic & Odometer Record',
    desc: 'Take clear, time-stamped photographs or a video walkaround of your car from all angles in daylight — capturing bumpers, windshield, tyres, and the odometer reading — to keep alongside the signed Condition Report.',
  },
  {
    step: '04',
    title: 'Clear Personal Belongings & Documents',
    desc: 'Remove all personal items, electronics, cash, and documents from the cabin and boot. Personal belongings inside the vehicle are not covered by vehicular transit insurance and may be restricted at state RTO checkposts.',
  },
  {
    step: '05',
    title: 'FASTag & Electronic Accessories',
    desc: 'Remove detachable FASTags or temporarily disable auto-recharge to prevent unintended toll debits while the vehicle travels on the carrier bed. Detach loose mobile mounts, dashcams, and external antennas.',
  },
  {
    step: '06',
    title: 'Tyre Pressure & Mechanical Readiness',
    desc: 'Ensure all tyres (including the spare) are inflated to recommended pressure for smooth loading onto hydraulic ramps. Provide a single working ignition key and disable anti-theft security alarms or share disarm codes.',
  },
];

export default function CarShiftingPage() {
  const relatedServices = getRelatedServices('car-shifting', 3);

  return (
    <PageLayout>
      <PageHero
        label="Automotive Carrier Logistics"
        title={
          <>
            Car Transportation & Dedicated <span className="text-[#F28A32]">Carrier Services</span>
          </>
        }
        subtitle="Secure, enclosed car carrier transportation from Kolkata to PAN India. Scrape-free hydraulic loading, comprehensive transit insurance, and signed condition reports."
        breadcrumbs={[
          { label: 'Services' },
          { label: 'Car Transportation' },
        ]}
        /* Hero Visual Image: Drop your image in /public/images/ and set src="/images/your-image.png" */
        image={
          <img
            src="/images/car_relocation_2.png"
            alt="Car Transportation Carrier Services - Bharat Relocators"
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
                Safe Vehicle Transport
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-[#082F52] mb-5 leading-tight">
                Enclosed Multi-Car Carriers Delivering Across India
              </h2>
              <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                <p>
                  Driving your car across long intercity highway corridors can cause unnecessary wear, tire damage, and high fuel expenses.
                </p>
                <p>
                  Bharat Relocators provides specialized car transportation services utilizing closed-container vehicle carriers. From compact hatchbacks and executive sedans to luxury SUVs and electric vehicles, our dedicated car-carrier transport is structured to protect vehicles against road transit hazards from Kolkata to destinations nationwide. <Link href="/contact" className="text-[#E53935] font-semibold hover:underline">Get an instant quote for your vehicle</Link>.
                </p>
                <p>
                  Every relocation begins with a joint physical inspection and pre-move condition report, followed by low-incline hydraulic ramp loading and multi-point wheel chock anchoring.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <span className="text-xs bg-slate-100 text-slate-700 font-semibold px-3.5 py-1.5 rounded-lg">
                  ✓ Hatchbacks & Sedans
                </span>
                <span className="text-xs bg-slate-100 text-slate-700 font-semibold px-3.5 py-1.5 rounded-lg">
                  ✓ Compact & Luxury SUVs
                </span>
                <span className="text-xs bg-slate-100 text-slate-700 font-semibold px-3.5 py-1.5 rounded-lg">
                  ✓ Electric Vehicles (EVs)
                </span>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] border border-slate-200">
                <AppImage
                  src="/images/car.png"
                  alt="Multi-car carrier loading a secure vehicle for transport"
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
            <h3 className="text-xl sm:text-2xl font-display font-bold text-emerald-900 mb-2">Looking for safe car transportation?</h3>
            <p className="text-emerald-700 text-sm sm:text-base">Connect with our auto-logistics team for schedules, pricing, and documentation guidance.</p>
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
            label="Carrier Workflow"
            title="Our 4-Step Car Transportation Process"
            subtitle="From inspection and hydraulic ramp loading to safe destination delivery and verification."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {carSteps.map((step) => (
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
            label="Protective Scope"
            title="Included in Our Car Transportation Service"
            subtitle="Engineered safety protocols tailored for high-value automotive highway logistics."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {inclusions.map((item) => (
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

      {/* ── Route Corridors & Cost Factors ─────────────────────────── */}
      <section className="py-20 bg-slate-50 border-t border-slate-200/80 dot-pattern">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Route & Cost Planning"
            title="Car Transportation from Kolkata: Corridors & Cost Factors"
            subtitle="Understand the key national highway corridors connecting Kolkata with major Indian cities and the logistics variables that determine your personalized vehicle quote."
          />

          {/* Corridor Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {carCorridors.map((corridor) => (
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
                    Cost & Logistics Driver
                  </th>
                  <th className="text-left px-5 py-3.5 font-semibold text-xs uppercase tracking-wider">
                    How It Affects Your Vehicle Quote
                  </th>
                </tr>
              </thead>
              <tbody>
                {carCostFactors.map((row, i) => (
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
              <strong className="text-[#082F52]">How vehicle estimates work:</strong>{' '}
              Car carrier pricing is determined individually based on your car model,
              pickup locality in Kolkata, destination city, and preferred schedule. We
              provide written, all-inclusive quotations with zero hidden surprises.
            </p>
            <p>
              Planning an interstate relocation involving both your vehicle and household
              goods? Explore our{' '}
              <Link
                href="/intercity-moving-guide"
                className="text-[#E53935] font-semibold hover:underline"
              >
                Kolkata Intercity Relocation Guide
              </Link>{' '}
              for complete corridor logistics insights.
            </p>
          </div>

          <div className="mt-6 text-center">
            <Link
              href="/get-a-quote"
              className="inline-flex items-center gap-2 bg-[#E53935] hover:bg-[#c62828] text-white font-semibold text-sm px-7 py-3.5 rounded-xl shadow-md transition-colors"
            >
              Get Your Car Transportation Quote
            </Link>
          </div>
        </div>
      </section>

      {/* ── Documentation Requirements Guidance ─────────────────────── */}
      <section className="py-16 bg-white border-t border-slate-200/80">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Pre-Move Checklist"
            title="Required Documents for Car Carrier Dispatch"
            subtitle="Prepare clear photocopies of these standard documents prior to carrier loading."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {vehicleDocGuidance.map((doc) => (
              <div key={doc.title} className="p-6 bg-slate-50 rounded-2xl border border-slate-200/80 shadow-xs">
                <div className="w-7 h-7 rounded-md bg-[#082F52] text-white flex items-center justify-center font-bold text-xs mb-3">
                  📄
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

      {/* ── Pre-Transit Preparation Protocol ────────────────────────── */}
      <section className="py-20 bg-slate-50 border-t border-slate-200/80">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Handover Checklist"
            title="Step-by-Step Car Preparation Before Handover"
            subtitle="Follow this structured preparation protocol to ensure smooth hydraulic ramp loading, transit safety, and clear vehicle condition documentation."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {carPrepProtocol.map((item) => (
              <div
                key={item.step}
                className="p-6 bg-white rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xl font-black font-display text-[#E53935]">
                      {item.step}
                    </span>
                    <span className="text-[11px] uppercase font-bold text-slate-400 tracking-wider">
                      Step {item.step}
                    </span>
                  </div>
                  <h3 className="font-bold text-[#082F52] text-sm font-display mb-2">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-xs leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 p-4 bg-amber-50 rounded-xl border border-amber-200 text-xs text-amber-900 leading-relaxed text-center">
            💡 <strong>Carrier &amp; Coordination Notice:</strong> Specific loading or documentation steps may vary depending on carrier configuration, route checkpoints, and destination RTO requirements. Always confirm special instructions with your move coordinator prior to pickup.
          </div>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
            <Link
              href="/vehicle-transportation-guide"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#E53935] hover:underline"
            >
              <span>Read Full Vehicle Transportation &amp; Safety Guide</span>
              <span aria-hidden="true">→</span>
            </Link>
            <span className="hidden sm:inline text-slate-300">·</span>
            <Link
              href="/household-shifting"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#082F52] hover:underline"
            >
              <span>Pair with Household Relocation</span>
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
                Explore Related Services
              </h3>
              <p className="text-slate-500 text-xs sm:text-sm">
                Pair your car shipping with household relocation or two-wheeler transport.
              </p>
            </div>
            <Link
              href="/bike-shifting"
              className="text-[#E53935] text-xs font-semibold hover:underline"
            >
              Need Two-Wheeler Transport? →
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
            Dedicated Vehicle Carriers
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold mb-4 text-white">
            Schedule Your Car Transportation Today
          </h2>
          <p className="text-white/80 text-sm sm:text-base leading-relaxed mb-8 max-w-2xl mx-auto">
            Get an exact route estimate for enclosed car shipping with comprehensive insurance and door-to-door tracking.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/get-a-quote"
              className="inline-flex items-center justify-center gap-2 bg-[#E53935] hover:bg-[#c62828] text-white font-semibold text-sm px-7 py-4 rounded-xl shadow-lg transition-colors w-full sm:w-auto"
            >
              Get Free Car Carrier Quote
            </Link>
            <a
              href={getWhatsAppUrl('Hi, I need a quotation for car transportation with Bharat Relocators.')}
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

