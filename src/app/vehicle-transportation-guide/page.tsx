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
  title: 'Vehicle Transportation & RTO Documentation Guide',
  description:
    'Complete guide to two-wheeler and car shipping from Kolkata across India. Learn about essential paperwork, vehicle preparation, enclosed carriers, and handover inspection.',
  path: '/vehicle-transportation-guide',
});

const requiredDocuments = [
  {
    doc: 'Vehicle Registration Certificate (RC)',
    importance: 'Standard Document',
    desc: 'Original or clear self-attested photocopy of the RC smart card/book verifying vehicle ownership and legal registration.',
  },
  {
    doc: 'Valid Motor Insurance Policy',
    importance: 'Standard Document',
    desc: 'An active comprehensive or third-party vehicle insurance policy required during interstate transit.',
  },
  {
    doc: 'Pollution Under Control (PUC) Certificate',
    importance: 'Standard Document',
    desc: 'Valid emission test certificate verifying vehicular compliance with national environmental standards.',
  },
  {
    doc: 'Owner Government ID Proof',
    importance: 'Standard Document',
    desc: 'Photocopy of Aadhaar card, PAN card, voter ID, or passport matching the registered vehicle owner name.',
  },
  {
    doc: 'Bank / Financier NOC (If Relocating Permanently)',
    importance: 'Route/Case Dependent',
    desc: 'If the vehicle is under active bank finance and you plan to permanently re-register in a new state, a bank NOC may be required by destination RTO authorities.',
  },
];

const vehiclePrepSteps = [
  {
    title: '1. Fuel Level Management',
    desc: 'Keep the fuel tank to a minimal reserve level (approximately one-fourth or less). This minimizes fire hazards during highway container transit while leaving enough fuel for loading and unloading operations.',
  },
  {
    title: '2. Thorough Cleaning & Wash',
    desc: 'Wash your bike or car prior to handover so that existing minor scratches, paint chips, or stone dings are clearly visible during the pre-transit joint inspection.',
  },
  {
    title: '3. Photographic Documentation',
    desc: 'Take high-resolution photographs and a video walk-around of your vehicle from all angles in daylight, capturing the odometer, tires, body panels, and dashboard.',
  },
  {
    title: '4. Remove Personal Belongings & Loose Accessories',
    desc: 'Remove all personal items, documents, sunglasses, fastag tags (or disable auto-debit if desired), detachable mirrors, mobile phone holders, and external luggage racks.',
  },
  {
    title: '5. Battery & Mechanical Readiness',
    desc: 'Ensure tires have adequate pressure to facilitate smooth loading. Inform the coordinator if the vehicle has special starting instructions or custom low ground clearance.',
  },
];

const bikeVsCarDifferences = [
  {
    category: 'Securing Mechanism',
    bike: 'Heavy-duty nylon tie-down ratchet straps anchored to floor chocks; optional outer wooden crating.',
    car: 'Four-wheel locking chocks and heavy tension straps anchored directly to carrier chassis bed.',
  },
  {
    category: 'Packaging Layer',
    bike: 'High-density bubble wrap, scratch-resistant foam sheets, and handlebar/exhaust heat wrap.',
    car: 'Full exterior container enclosure shielding against rain, highway dust, sunlight, and loose gravel.',
  },
  {
    category: 'Loading Method',
    bike: 'Controlled manual ramp ascent into dedicated vehicle container bays.',
    car: 'Low-angle hydraulic tail ramps to safely board low ground-clearance sedans and SUVs without underbody scrapes.',
  },
  {
    category: 'Showroom / Home Pickup',
    bike: 'Direct doorstep pickup via local transport or custom pickup crate.',
    car: 'Designated auto-carrier loading point or coordinator-assisted home pickup.',
  },
];

export default function VehicleTransportationGuidePage() {
  return (
    <PageLayout>
      <TrackPillarGuide slug="vehicle-transportation-guide" />
      <PageHero
        label="Automotive Logistics Guide"
        title={
          <>
            Vehicle Transportation & <span className="text-[#F28A32]">Safety Guide</span>
          </>
        }
        subtitle="A practical guide to shipping two-wheelers and four-wheelers from Kolkata across India — covering document checklists, carrier safety, and delivery protocols."
        breadcrumbs={[
          { label: 'Vehicle Transportation Guide' },
        ]}
        actions={
          <>
            <Link
              href="/get-a-quote"
              className="inline-flex items-center gap-2 bg-[#E53935] hover:bg-[#c62828] text-white font-semibold text-sm px-6 py-3.5 rounded-xl shadow-md transition-colors"
            >
              Get Vehicle Shipping Quote
            </Link>
            <a
              href={getTelUrl(BUSINESS.phone.primary)}
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 text-white font-semibold text-sm px-5 py-3.5 rounded-xl border border-white/20 transition-colors"
            >
              Consult Vehicle Coordinator
            </a>
          </>
        }
      />

      {/* Guide Introduction */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <span className="inline-block bg-red-50 text-[#E53935] text-xs font-semibold uppercase tracking-[0.08em] px-4 py-1.5 rounded-full mb-4 border border-red-200">
                Safe Interstate Vehicle Shipping
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-[#082F52] mb-5 leading-tight">
                Protecting Your Vehicle on Interstate Highway Journeys
              </h2>
              <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                <p>
                  Shipping a car or motorcycle across state lines requires dedicated transport infrastructure, proper legal paperwork, and disciplined handling. Unlike standard household boxes, motorized vehicles require specific tie-down mechanisms, weight balance, and pre-transit condition recording.
                </p>
                <p>
                  At Bharat Relocators, we coordinate dedicated vehicle movements originating from Kolkata to destinations throughout India. This guide outlines everything you need to prepare before handing over your keys, ensuring complete transparency and peace of mind.
                </p>
                <p>
                  For dedicated service specifications, explore our{' '}
                  <Link href="/car-shifting" className="text-[#E53935] font-semibold hover:underline">
                    Car Transportation Services
                  </Link>{' '}
                  and{' '}
                  <Link href="/bike-shifting" className="text-[#082F52] font-semibold hover:underline">
                    Bike Transport Solutions
                  </Link>
                  .
                </p>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] border border-slate-200">
                <AppImage
                  src="/images/car_relocation.png"
                  alt="Car safely positioned inside closed vehicle transport container"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mandatory Documents Checklist */}
      <section className="py-20 bg-slate-50 border-y border-slate-200/80">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Regulatory Checklist"
            title="Documents to Keep Ready Before Handover"
            subtitle="Ensure you have photocopies of the following standard documents ready for highway compliance."
          />

          <div className="space-y-4 mt-12">
            {requiredDocuments.map((item) => (
              <div
                key={item.doc}
                className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#E53935]" />
                    <h3 className="font-bold text-[#082F52] text-base font-display">
                      {item.doc}
                    </h3>
                  </div>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed pl-5">
                    {item.desc}
                  </p>
                </div>
                <span
                  className={`text-xs font-semibold px-3 py-1 rounded-full whitespace-nowrap self-start sm:self-center ${
                    item.importance === 'Standard Document'
                      ? 'bg-red-50 text-[#E53935] border border-red-200'
                      : 'bg-slate-100 text-slate-700 border border-slate-200'
                  }`}
                >
                  {item.importance}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-8 p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900 leading-relaxed">
            <strong>Note:</strong> Exact documentation requirements may vary based on route state border rules, commercial tax checkpoints, and whether the move is temporary or permanent. Always consult your coordinator for route-specific guidance.
          </div>
        </div>
      </section>

      {/* Step-by-Step Vehicle Handover Prep */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Pre-Move Readiness"
            title="How to Prepare Your Vehicle for Shipping"
            subtitle="Five essential preparatory steps before your carrier truck arrives."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            {vehiclePrepSteps.map((step) => (
              <div
                key={step.title}
                className="bg-slate-50/80 p-6 rounded-2xl border border-slate-200 flex flex-col justify-between"
              >
                <div>
                  <h3 className="font-bold text-[#082F52] text-base font-display mb-2.5">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enclosed vs Open Carrier Logistics */}
      <section className="py-20 bg-slate-50 border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Carrier Comparison"
            title="Understanding Closed Carrier Vehicle Logistics"
            subtitle="How enclosed container transport safeguards your motorized assets compared to open trailers."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="bg-white p-7 sm:p-8 rounded-3xl border-2 border-[#082F52] shadow-sm">
              <span className="inline-block bg-[#082F52] text-white text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full mb-4">
                Recommended Standard
              </span>
              <h3 className="text-xl sm:text-2xl font-bold font-display text-[#082F52] mb-3">
                Dedicated Enclosed Carriers
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Enclosed car and bike containers shield vehicles inside a solid, weatherproof steel container body throughout the national highway network.
              </p>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2.5">
                  <span className="text-[#E53935] font-bold">✓</span>
                  <span><strong>Enclosed Weather Protection:</strong> Shields vehicles against torrential rain, highway road spray, and direct sun UV exposure.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#E53935] font-bold">✓</span>
                  <span><strong>Debris Shield:</strong> Prevents paint chipping from loose highway stones and gravel kicked up by highway traffic.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#E53935] font-bold">✓</span>
                  <span><strong>Hydraulic Ramp Safety:</strong> Low incline angle prevents scraping low bumpers and side skirts.</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-7 sm:p-8 rounded-3xl border border-slate-200 shadow-xs">
              <span className="inline-block bg-slate-100 text-slate-700 text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full mb-4">
                Open Carrier Comparison
              </span>
              <h3 className="text-xl sm:text-2xl font-bold font-display text-[#082F52] mb-3">
                Open Trailer Transport
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Open multi-car trailers transport multiple vehicles exposed to open air. While common in factory bulk logistics, enclosed transport is preferred for individual relocations.
              </p>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2.5">
                  <span className="text-slate-400 font-bold">•</span>
                  <span>Subject to highway road grime, rain, and environmental dust.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-slate-400 font-bold">•</span>
                  <span>Higher risk of surface scratches from airborne highway particles.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-slate-400 font-bold">•</span>
                  <span>Requires external tarpaulin covers which may flutter against car paintwork.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Two-Wheeler vs Four-Wheeler Differences Table */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Service Comparison"
            title="Bike vs. Car Shifting Preparation"
            subtitle="Key mechanical and packaging distinctions between two-wheeler and four-wheeler transport."
          />

          <div className="mt-12 overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm border border-slate-200 rounded-2xl overflow-hidden shadow-xs">
              <thead className="bg-[#082F52] text-white">
                <tr>
                  <th className="p-4 font-bold">Logistical Aspect</th>
                  <th className="p-4 font-bold">Bike Transportation</th>
                  <th className="p-4 font-bold">Car Transportation</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 bg-slate-50/50">
                {bikeVsCarDifferences.map((row) => (
                  <tr key={row.category} className="hover:bg-slate-50 transition-colors">
                    <td className="p-4 font-bold text-[#082F52]">{row.category}</td>
                    <td className="p-4 text-slate-600">{row.bike}</td>
                    <td className="p-4 text-slate-600">{row.car}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Joint Inspection & Delivery Protocol */}
      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-xl sm:text-2xl font-display font-bold text-[#082F52] mb-3">
            Destination Handover & Condition Verification
          </h2>
          <p className="text-slate-600 text-sm mb-6 max-w-2xl mx-auto leading-relaxed">
            Upon arrival at your destination city, our delivery coordinator conducts a joint condition inspection with you, cross-checking the vehicle against the signed pre-transit inspection sheet.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/faqs"
              className="inline-flex items-center gap-2 bg-[#082F52] hover:bg-[#0b3b60] text-white font-semibold text-xs sm:text-sm px-5 py-3 rounded-xl transition-colors"
            >
              <span>Read Vehicle Shipping FAQs</span>
            </Link>
            <Link
              href="/get-a-quote"
              className="inline-flex items-center gap-2 bg-[#E53935] hover:bg-[#c62828] text-white font-semibold text-xs sm:text-sm px-5 py-3 rounded-xl transition-colors"
            >
              <span>Get Free Quote</span>
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}

