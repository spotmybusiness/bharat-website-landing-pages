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
import JsonLd from '@/components/JsonLd';
import ServiceFAQSection from '@/components/ServiceFAQSection';
import { getServiceSchema, getFAQSchema, buildGraphSchema } from '@/lib/schema';
import { getServiceFaqs } from '@/data/serviceFaqs';

export const metadata: Metadata = generatePageMetadata({
  title: 'Parcel & Cargo Shifting Services in Kolkata',
  description:
    'Express parcel shipping, luggage moving, and cargo courier services from Kolkata to 230+ cities across India. Doorstep pickup, barcoded labeling, and real-time tracking.',
  path: '/parcel-shifting',
});

const faqs = getServiceFaqs('parcel-shifting');
const pageSchema = buildGraphSchema([
  getServiceSchema({
    name: 'Parcel & Cargo Shifting Services in Kolkata',
    description:
      'Express parcel shipping, luggage moving, and cargo courier services from Kolkata to PAN India. Doorstep pickup, barcoded labeling, and real-time tracking.',
    path: '/parcel-shifting',
    serviceType: 'Parcel & Cargo Logistics',
  }),
  getFAQSchema(faqs),
]);

const parcelSteps = [
  {
    step: '01',
    title: 'Booking & Pickup Scheduling',
    desc: 'Share parcel dimensions, approximate weight, and destination pincode. Schedule a convenient doorstep pickup time in Kolkata.',
  },
  {
    step: '02',
    title: 'Multi-Layer Packing & Weighing',
    desc: 'Our staff packs items using heavy corrugated boxes, bubble cushioning, and waterproof tape. Exact weight and volume are recorded on the spot.',
  },
  {
    step: '03',
    title: 'Barcoding & Dispatch',
    desc: 'Each box is assigned a unique tracking barcode and Consignment Waybill (LR) number for highway network dispatch.',
  },
  {
    step: '04',
    title: 'Milestone Tracking & Delivery',
    desc: 'Track your consignment online via our tracking portal until scheduled doorstep handover at your destination address.',
  },
];

const parcelInclusions = [
  {
    title: 'Doorstep Pickup & Handover',
    desc: 'Direct pickup from your residence or office in Kolkata with signed receipt and digital booking confirmation.',
  },
  {
    title: 'Heavy-Duty Corrugated Boxing',
    desc: 'Strong multi-ply export-grade boxes designed specifically for multi-hub parcel logistics transit.',
  },
  {
    title: 'Real-Time Tracking Access',
    desc: 'Instant online tracking capability via our consignment portal with SMS milestone alerts.',
  },
  {
    title: 'PAN India 230+ City Network',
    desc: 'Broad intercity logistics coverage serving metros, tier-2, and tier-3 cities across all Indian states.',
  },
  {
    title: 'Student & Single-Room Shifting',
    desc: 'Cost-effective logistics for students, young professionals, luggage boxes, and partial room relocations.',
  },
  {
    title: 'Transit Safety Protocols',
    desc: 'Careful sorting and cushioned van transit preventing carton crushing during transit.',
  },
];

const parcelGuidance = [
  {
    title: 'Permitted Items',
    desc: 'Books, clothes, kitchenware, non-perishable packaged items, small electronics, study materials, and personal luggage.',
  },
  {
    title: 'Prohibited Cargo',
    desc: 'Liquids, flammable oils, gas cylinders, perishable food, unsealed chemicals, currency, and restricted contraband.',
  },
  {
    title: 'Weight Distribution',
    desc: 'Pack heavy books in smaller cartons and lighter clothing in larger boxes to maintain optimal package integrity.',
  },
];

/** Practical planning considerations for student and professional luggage shipping */
const studentLuggageGuidance = [
  {
    title: 'What Information to Provide for an Estimate',
    desc: 'Share your estimated box count, approximate parcel dimensions, pickup locality in Kolkata, and destination city or campus address for an accurate quotation.',
  },
  {
    title: 'Smart Packing & Weight Distribution',
    desc: 'Pack dense items such as academic books and study materials in smaller, sturdy cartons. Use medium-to-large boxes for lighter belongings like clothing and bedding.',
  },
  {
    title: 'Electronics & Delicate Essentials',
    desc: 'Laptops, monitors, study lamps, and desktop peripherals require multi-layer bubble cushioning. Mention fragile items when booking so appropriate protective materials can be prepared.',
  },
  {
    title: 'Doorstep Collection & Waybill Handover',
    desc: 'Our staff collects cartons directly from your residence, hostel, or PG in Kolkata, records measurements on-site, and issues a formal Consignment Note (LR) with tracking.',
  },
];

/** Educational factors explaining volumetric weight in cargo logistics */
const volumetricWeightDrivers = [
  {
    factor: 'Actual (Dead) Weight',
    desc: 'The physical weight of the packed carton or luggage measured directly on a calibrated weighing scale (in kilograms).',
  },
  {
    factor: 'Dimensional (Volumetric) Space',
    desc: "The volume of cargo space occupied by the parcel inside the transport carrier, calculated from the carton's external length, width, and height.",
  },
  {
    factor: 'Chargeable Weight Basis',
    desc: 'Logistics carriers evaluate both physical weight and dimensional volume. Bulky but lightweight packages (such as large boxes of pillows or winter wear) may be billed based on dimensional space.',
  },
  {
    factor: 'Optimizing Packing Density',
    desc: 'Using appropriately sized boxes and avoiding excessive empty space inside cartons helps keep dimensional volume minimal and overall shipping costs economical.',
  },
];

export default function ParcelShiftingPage() {
  const relatedServices = getRelatedServices('parcel-shifting', 3);

  return (
    <PageLayout>
      <JsonLd data={pageSchema} />
      <PageHero
        label="Express Intercity Parcel Logistics"
        title={
          <>
            Parcel & Cargo Shifting <span className="text-[#F28A32]">Services</span>
          </>
        }
        subtitle="Bharat Relocators provides express parcel, luggage courier, and part-load cargo shipping from Kolkata across 230+ cities in India with doorstep pickup and milestone tracking."
        breadcrumbs={[
          { label: 'Services' },
          { label: 'Parcel & Cargo Shifting' },
        ]}
        /* Hero Visual Image: Drop your image in /public/images/ and set src="/images/your-image.png" */
        image={
          <img
            src="/images/cargo_shifting.jpeg"
            alt="Parcel and Cargo Shifting Services - Bharat Relocators"
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
                Express Cargo Network
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-[#082F52] mb-5 leading-tight">
                Fast, Reliable Parcel Delivery for Luggage & Small Moves
              </h2>
              <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                <p>
                  Bharat Relocators provides express parcel, luggage courier, and part-load cargo shipping services from Kolkata across 230+ cities in India, offering cost-effective solutions for student baggage, personal boxes, and commercial consignments.
                </p>
                <p>
                  With scheduled line-haul departures, barcoded package handling, and convenient doorstep pickup, your parcels are transported securely without requiring an entire dedicated truck. <Link href="/contact" className="text-[#E53935] font-semibold hover:underline">Get a parcel shipping estimate today</Link>.
                </p>
                <p>
                  Every parcel is assigned a digital consignment tracking number, allowing you to monitor shipping progress directly through our online tracking system.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <span className="text-xs bg-slate-100 text-slate-700 font-semibold px-3.5 py-1.5 rounded-lg">
                  ✓ Student & Hostel Luggage
                </span>
                <span className="text-xs bg-slate-100 text-slate-700 font-semibold px-3.5 py-1.5 rounded-lg">
                  ✓ Excess Baggage Shipping
                </span>
                <span className="text-xs bg-slate-100 text-slate-700 font-semibold px-3.5 py-1.5 rounded-lg">
                  ✓ Commercial Box Shipments
                </span>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] border border-slate-200">
                <AppImage
                  src="/images/cargo_shifting.jpeg"
                  alt="Parcel and courier boxes being sorted and weighed for intercity cargo dispatch"
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
            <h3 className="text-xl sm:text-2xl font-display font-bold text-emerald-900 mb-2">Need to ship a parcel urgently?</h3>
            <p className="text-emerald-700 text-sm sm:text-base">Contact our dispatch team for express pickup slots and volumetric weight pricing.</p>
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
            label="Courier Workflow"
            title="Our 4-Step Parcel Shipping Process"
            subtitle="From doorstep collection in Kolkata to scheduled handover at your destination city."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {parcelSteps.map((step) => (
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
            title="Included in Our Parcel & Cargo Services"
            subtitle="Reliable features designed for small consignments, partial moves, and luggage boxes."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {parcelInclusions.map((item) => (
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

      {/* ── Student & Professional Luggage Section ─────────────────── */}
      <section className="py-20 bg-slate-50 border-t border-slate-200/80 dot-pattern">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Luggage & Small Consignments"
            title="Shipping Student & Professional Luggage from Kolkata"
            subtitle="Whether you are relocating for higher education, starting a new job, or sending personal cartons intercity, our parcel service provides cost-effective doorstep collection and line-haul transit."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
            {studentLuggageGuidance.map((item) => (
              <div
                key={item.title}
                className="p-6 bg-white rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <h3 className="font-bold text-[#082F52] text-base font-display mb-2">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="p-5 bg-white rounded-2xl border border-slate-200 text-sm text-slate-700 leading-relaxed space-y-2">
            <p>
              <strong className="text-[#082F52]">Connecting Kolkata to 230+ cities:</strong>{' '}
              We regularly coordinate luggage movements for students and young professionals
              moving to key education and technology centers including Bangalore, Pune,
              Delhi-NCR, Hyderabad, Chennai, and Mumbai.
            </p>
            <p>
              Moving a full room or combining luggage with larger furniture items? Explore our{' '}
              <Link
                href="/intercity-moving-guide"
                className="text-[#E53935] font-semibold hover:underline"
              >
                Kolkata Intercity Relocation Guide
              </Link>{' '}
              for complete household transport options.
            </p>
          </div>

          <div className="mt-6 text-center">
            <Link
              href="/get-a-quote"
              className="inline-flex items-center gap-2 bg-[#E53935] hover:bg-[#c62828] text-white font-semibold text-sm px-7 py-3.5 rounded-xl shadow-md transition-colors"
            >
              Get Free Parcel Quote
            </Link>
          </div>
        </div>
      </section>

      {/* ── Volumetric Weight & Billing Explainer ────────────────────── */}
      <section className="py-20 bg-white border-t border-slate-200/80">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Logistics Guidance"
            title="Understanding Parcel Weight & Chargeable Space"
            subtitle="In freight and parcel logistics, shipping estimates evaluate both physical scale weight and the dimensional volume occupied inside the transport vehicle."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {volumetricWeightDrivers.map((item) => (
              <div
                key={item.factor}
                className="p-6 bg-slate-50 rounded-2xl border border-slate-200/80 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <span className="w-7 h-7 rounded-md bg-[#082F52] text-white flex items-center justify-center font-bold text-xs mb-3">
                    📦
                  </span>
                  <h3 className="font-bold text-[#082F52] text-sm font-display mb-2">
                    {item.factor}
                  </h3>
                  <p className="text-slate-600 text-xs leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="p-5 bg-amber-50 rounded-xl border border-amber-200 text-xs text-amber-900 leading-relaxed text-center">
            💡 <strong>Practical Packing Tip:</strong> When packing personal items, balance dense items (such as books or files) with lighter volume goods. Keeping cartons compact minimizes dimensional cargo space and ensures economical parcel pricing. When requesting an estimate, sharing approximate box dimensions helps our coordinator calculate the exact chargeable weight basis.
          </div>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
            <Link
              href="/moving-checklist"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#E53935] hover:underline"
            >
              <span>View Full Moving Checklist &amp; Packing Tips</span>
              <span aria-hidden="true">→</span>
            </Link>
            <span className="hidden sm:inline text-slate-300">·</span>
            <Link
              href="/household-shifting"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#082F52] hover:underline"
            >
              <span>Moving Full Household Instead?</span>
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Guidance on Permitted Items */}
      <section className="py-16 bg-slate-50 border-t border-slate-200/80">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Packing Guidelines"
            title="Parcel Packaging & Cargo Regulations"
            subtitle="Important information on permitted goods and packing standards for highway transit."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {parcelGuidance.map((guide) => (
              <div key={guide.title} className="p-6 bg-white rounded-2xl border border-slate-200 shadow-xs">
                <h3 className="font-bold text-[#082F52] text-sm font-display mb-2">
                  {guide.title}
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  {guide.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Quick Tracking CTA Callout */}
          <div className="mt-8 p-6 bg-[#082F52] text-white rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="font-bold text-base font-display text-white">
                Already Shipped a Consignment with Us?
              </h4>
              <p className="text-white/80 text-xs mt-1">
                Enter your LR number on our official tracking page for real-time milestone updates.
              </p>
            </div>
            <Link
              href="/tracking"
              className="inline-flex items-center gap-2 bg-[#E53935] hover:bg-[#c62828] text-white font-semibold text-xs sm:text-sm px-5 py-3 rounded-xl transition-colors shrink-0"
            >
              Track Parcel Status →
            </Link>
          </div>
        </div>
      </section>

      {/* Service FAQs */}
      <ServiceFAQSection heading="Parcel & Cargo Shifting FAQs" faqs={faqs} />

      {/* Related Services Navigation */}
      <section className="py-16 bg-white border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
            <div>
              <h3 className="text-xl font-bold font-display text-[#082F52]">
                Explore Related Relocation Services
              </h3>
              <p className="text-slate-500 text-xs sm:text-sm">
                Need full household shifting or vehicle transport instead?
              </p>
            </div>
            <Link
              href="/household-shifting"
              className="text-[#E53935] text-xs font-semibold hover:underline"
            >
              Full Household Shifting →
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
            Express Booking
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold mb-4 text-white">
            Ready to Ship Your Parcel from Kolkata?
          </h2>
          <p className="text-white/80 text-sm sm:text-base leading-relaxed mb-8 max-w-2xl mx-auto">
            Get an instant parcel estimate and schedule doorstep pickup with our logistics team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/get-a-quote"
              className="inline-flex items-center justify-center gap-2 bg-[#E53935] hover:bg-[#c62828] text-white font-semibold text-sm px-7 py-4 rounded-xl shadow-lg transition-colors w-full sm:w-auto"
            >
              Get Free Parcel Quote
            </Link>
            <a
              href={getWhatsAppUrl('Hi, I need a parcel shipping quote with Bharat Relocators.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm px-6 py-4 rounded-xl shadow-lg transition-colors w-full sm:w-auto"
            >
              WhatsApp Courier Desk
            </a>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
