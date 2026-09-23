import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import PageLayout from '@/components/PageLayout';
import PageHero from '@/components/PageHero';
import SectionHeader from '@/components/ui/SectionHeader';
import JsonLd from '@/components/JsonLd';
import { generatePageMetadata } from '@/lib/metadata';
import { BUSINESS, getTelUrl, getWhatsAppUrl } from '@/lib/business';
import { TRACKING_FAQS } from '@/lib/tracking';
import TrackingInteractiveView from './TrackingInteractiveView';

export const metadata: Metadata = generatePageMetadata({
  title: 'Track Your Shipment & Consignment Status | Bharat Relocators',
  description:
    'Track your consignment live with Bharat Relocators. Enter your tracking ID or consignment number for real-time updates on household shifting, car carriers, bike transport, and intercity parcel shipments across India.',
  path: '/tracking',
});

const whereToFindItems = [
  {
    step: '01',
    title: 'Consignment Note (LR)',
    desc: 'Look at the top-right corner of your carbon-copy Lorry Receipt / Bilty handed over during goods loading in Kolkata.',
    tag: 'Physical Receipt',
  },
  {
    step: '02',
    title: 'SMS & WhatsApp Alert',
    desc: 'A digital dispatch confirmation message containing your tracking docket number is triggered once vehicle seals are locked.',
    tag: 'Digital Dispatch',
  },
  {
    step: '03',
    title: 'Dedicated Move Manager',
    desc: 'Contact your assigned supervisor or customer desk directly if you misplaced your LR copy; we verify your phone number and provide the ID.',
    tag: 'Direct Desk',
  },
];

const trackingLifecycle = [
  {
    step: '01',
    phase: 'Inspection & Loading',
    title: 'Item Manifest & Seal Verification',
    description:
      'Inventory is cataloged, multi-layer packed, and securely loaded onto containerized trucks with hydraulic ramps and cargo lashings.',
  },
  {
    step: '02',
    phase: 'Highway Transit',
    phaseBadge: 'Real-Time Scans',
    title: 'GPS Monitored Linehaul Movement',
    description:
      'Long-distance linehaul vehicles navigate through national highways with check-ins at state border checkpoints and toll verification nodes.',
  },
  {
    step: '03',
    phase: 'Destination Hub',
    title: 'Arrival & Pre-Delivery Inspection',
    description:
      'The carrier arrives at the city destination logistics warehouse, where packages undergo secondary verification before dispatch.',
  },
  {
    step: '04',
    phase: 'Final Handover',
    title: 'Doorstep Unloading & Assembly',
    description:
      'Local delivery team places items in designated rooms, unwraps furniture, assembles beds and appliances, and completes proof-of-delivery.',
  },
];

const trackingServiceLinks = [
  {
    title: 'Household Shifting',
    category: 'Home Moves',
    description: 'Track complete household goods, furniture crates, and kitchenware shipments.',
    href: '/household-shifting',
  },
  {
    title: 'Car Transportation',
    category: 'Automotive Haulage',
    description: 'Check transit progress of enclosed, wheel-chocked car carrier trucks.',
    href: '/car-shifting',
  },
  {
    title: 'Bike Transport',
    category: 'Two-Wheeler Express',
    description: 'Track custom crated motorcycles and scooters across intercity routes.',
    href: '/bike-shifting',
  },
  {
    title: 'Parcel & Cargo',
    category: 'Express Consignments',
    description: 'Real-time scans for commercial freight, excess baggage, and student parcels.',
    href: '/parcel-shifting',
  },
];

export default function TrackingPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: TRACKING_FAQS.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <PageLayout>
      <JsonLd data={faqSchema} />

      {/* 1. Page Hero */}
      <PageHero
        label="Operational Tracking Console"
        title={
          <>
            Track Your <span className="text-[#F28A32]">Consignment</span> Live
          </>
        }
        subtitle="Check the real-time movement of your household relocation, car carrier, bike crate, or parcel shipment across India."
        breadcrumbs={[{ label: 'Track Us' }]}
        actions={
          <>
            <a
              href={BUSINESS.tracking.portalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#E53935] hover:bg-[#c62828] text-white font-semibold text-sm px-6 py-3.5 rounded-xl shadow-md transition-all hover:scale-[1.02]"
            >
              <span>Launch Carrier Portal</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
            <a
              href={getTelUrl(BUSINESS.phone.primary)}
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 text-white font-semibold text-sm px-5 py-3.5 rounded-xl border border-white/20 transition-colors"
            >
              <span>Call Dispatch: {BUSINESS.phone.primaryFormatted}</span>
            </a>
          </>
        }
      />

      {/* 2. Primary Interactive Tracker Component */}
      <section className="py-12 sm:py-16 bg-[#071A2B] -mt-1 relative z-20 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <TrackingInteractiveView />
        </div>
      </section>

      {/* 3. Where to Find Tracking ID */}
      <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Consignment Documentation"
            title="Where Can You Find Your Tracking ID?"
            subtitle="Every consignment booked with Bharat Relocators receives a registered Lorry Receipt and automated digital tracking credentials."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mt-12">
            {whereToFindItems.map((item) => (
              <div
                key={item.step}
                className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-black text-[#F28A32] font-mono">
                      {item.step}
                    </span>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-700">
                      {item.tag}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#E53935] transition-colors mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Logistical Lifecycle — How Tracking Works */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Operational Transparency"
            title="How Your Consignment Moves Across India"
            subtitle="Follow each stage of our door-to-door relocation and freight movement protocol from pickup to final room delivery."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {trackingLifecycle.map((stage) => (
              <div
                key={stage.step}
                className="rounded-2xl p-6 bg-slate-50 border border-slate-200 flex flex-col justify-between relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#E53935]/5 rounded-bl-full pointer-events-none" />
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold text-[#E53935] uppercase tracking-wider">
                      {stage.phase}
                    </span>
                    <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-slate-200 text-slate-700">
                      Step {stage.step}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">
                    {stage.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {stage.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Tracking for Specific Relocation Services */}
      <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Service Coverage"
            title="Consignment Tracking Across Our Moving Services"
            subtitle="Whether moving an apartment, luxury car, commuter motorbike, or bulk freight, track your shipment with full transparency."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {trackingServiceLinks.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-lg hover:border-[#F28A32]/40 transition-all group flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-bold text-[#F28A32] uppercase tracking-wider mb-2 block">
                    {service.category}
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#E53935] transition-colors mb-2">
                    {service.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {service.description}
                  </p>
                </div>
                <div className="text-xs font-bold text-[#E53935] group-hover:text-[#c62828] inline-flex items-center gap-1">
                  <span>Explore Service Details</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Frequently Asked Questions about Tracking */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Tracking Support"
            title="Shipment Tracking FAQs"
            subtitle="Answers to common questions regarding consignment updates, transit schedules, and delivery milestones."
          />

          <div className="mt-10 space-y-4">
            {TRACKING_FAQS.map((faq, index) => (
              <div
                key={index}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-6 transition-all"
              >
                <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2">
                  {faq.question}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Need Immediate Assistance CTA Card */}
      <section className="py-16 sm:py-24 bg-[#071A2B] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#F28A32_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#E53935]/20 text-[#F28A32] border border-[#E53935]/30 mb-4">
            Logistics Support Desk
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mb-4">
            Need Help Locating Your Consignment?
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed mb-8">
            Our dispatch supervisors and move coordinators are available to cross-verify driver logs, toll checkpoints, and local branch staging status.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={getTelUrl(BUSINESS.phone.primary)}
              className="inline-flex items-center gap-2 bg-[#E53935] hover:bg-[#c62828] text-white font-bold text-sm sm:text-base px-6 sm:px-8 py-3.5 rounded-xl shadow-lg hover:shadow-xl transition-all"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-2.2 2.2a15.057 15.057 0 01-6.59-6.59l2.2-2.21a.96.96 0 00.25-1.01A11.36 11.36 0 018.57 3.9c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.52c0-.55-.45-1-1-1z" />
              </svg>
              <span>Call Dispatch: {BUSINESS.phone.primaryFormatted}</span>
            </a>

            <a
              href={getWhatsAppUrl(BUSINESS.phone.primary)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm sm:text-base px-6 sm:px-8 py-3.5 rounded-xl shadow-lg transition-all"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.353.101.173.45 0.742.965 1.201.664.591 1.224.774 1.397.86.173.086.275.072.376-.043.101-.116.433-.506.549-.679.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.043.073.043.419-.101.824z" />
              </svg>
              <span>WhatsApp Coordinator</span>
            </a>

            <Link
              href="/get-a-quote"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold text-sm sm:text-base px-6 py-3.5 rounded-xl border border-white/20 transition-all"
            >
              <span>Book a New Move</span>
              <span>→</span>
            </Link>
          </div>

          <div className="mt-8 text-xs text-slate-400">
            Physical Hubs: Haltu ({BUSINESS.locations.main.locality}) &amp; Behala ({BUSINESS.locations.secondary.locality}), Kolkata
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
