import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import PageLayout from '@/components/PageLayout';
import PageHero from '@/components/PageHero';
import SectionHeader from '@/components/ui/SectionHeader';
import { generatePageMetadata } from '@/lib/metadata';
import { BUSINESS, getTelUrl, getWhatsAppUrl } from '@/lib/business';

export const metadata: Metadata = generatePageMetadata({
  title: 'Track Your Shipment',
  description:
    'Track your consignment live with Bharat Relocators. Access real-time milestone updates for your home shifting, car/bike transport, or intercity parcel delivery.',
  path: '/track-your-shipment',
});

const trackingSteps = [
  {
    step: '1',
    title: 'Obtain Tracking Number',
    desc: 'Once your consignment departs from Kolkata, you receive your unique Consignment Note (LR/Waybill Number) via SMS and WhatsApp.',
  },
  {
    step: '2',
    title: 'Open Tracking Portal',
    desc: 'Click the tracking button below to access our official online tracking system powered by TrackingMore.',
  },
  {
    step: '3',
    title: 'Monitor Live Progress',
    desc: 'Enter your tracking number to view real-time location checkpoints, transit milestones, and estimated delivery schedule.',
  },
];

export default function TrackShipmentPage() {
  return (
    <PageLayout>
      <PageHero
        label="Live Tracking Portal"
        title={
          <>
            Track Your <span className="text-[#F28A32]">Consignment</span>
          </>
        }
        subtitle="Monitor your shipment’s journey in real-time. Enter your consignment number in our secure tracking portal for instant milestone updates."
        breadcrumbs={[{ label: 'Track Your Shipment' }]}
        actions={
          <a
            href={BUSINESS.tracking.portalUrl}
            target="_blank"
            rel="noopener noreferrer"
            data-analytics-action="track_shipment_launch"
            className="inline-flex items-center gap-2 bg-[#E53935] hover:bg-[#c62828] text-white font-semibold text-sm px-7 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all"
          >
            <span>Open Tracking Portal</span>
            <span aria-hidden="true">↗</span>
          </a>
        }
      />

      {/* Main Tracking Section */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tracking Portal Card */}
          <div className="bg-[#082F52] text-white rounded-3xl p-8 sm:p-12 shadow-2xl border border-white/10 relative overflow-hidden mb-16">
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#1478B5]/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-60 h-60 bg-[#E53935]/15 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 text-center max-w-2xl mx-auto">
              <span className="inline-block bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#F28A32] mb-4">
                Official Consignment Tracker
              </span>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold mb-4 text-white">
                Ready to Check Your Shipment Status?
              </h2>

              <p className="text-white/80 text-sm sm:text-base leading-relaxed mb-8">
                Click below to visit the Bharat Relocators shipment portal. Have your LR / Consignment tracking number handy.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href={BUSINESS.tracking.portalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-analytics-action="track_shipment_launch"
                  className="inline-flex items-center justify-center gap-2.5 bg-[#E53935] hover:bg-[#c62828] text-white font-bold text-sm sm:text-base px-8 py-4 rounded-xl shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all w-full sm:w-auto"
                >
                  <span>Launch Tracking Portal</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>

              <div className="mt-6 pt-6 border-t border-white/15 text-xs text-white/60">
                Tracking URL: <span className="text-white/80 select-all">{BUSINESS.tracking.portalUrl}</span>
              </div>
            </div>
          </div>

          {/* How It Works Steps */}
          <div className="mb-16">
            <SectionHeader
              label="Simple 3-Step Process"
              title="How Shipment Tracking Works"
              subtitle="Follow these simple steps to track your household, vehicle, or cargo consignment."
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {trackingSteps.map((item) => (
                <div
                  key={item.step}
                  className="p-6 bg-slate-50 rounded-2xl border-2 border-[#082F52] shadow-xs flex flex-col justify-between"
                >
                  <div>
                    <span className="w-10 h-10 rounded-xl bg-[#082F52] text-white flex items-center justify-center text-base font-bold font-display mb-4">
                      {item.step}
                    </span>
                    <h3 className="font-bold text-[#082F52] text-base font-display mb-2">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Support / Helpdesk Card */}
          <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200 text-center">
            <h3 className="text-xl font-bold font-display text-[#082F52] mb-2">
              Need Help with Your Consignment?
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-6 max-w-xl mx-auto">
              If you haven&apos;t received your tracking number or need immediate milestone assistance, our move coordinators are available to assist you directly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href={getTelUrl(BUSINESS.phone.primary)}
                className="inline-flex items-center justify-center gap-2 bg-[#082F52] hover:bg-[#0b3b60] text-white font-semibold text-sm px-6 py-3.5 rounded-xl shadow-md transition-colors w-full sm:w-auto"
              >
                Call: {BUSINESS.phone.primaryFormatted}
              </a>
              <a
                href={getWhatsAppUrl('Hi, I need assistance with tracking my Bharat Relocators shipment.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm px-6 py-3.5 rounded-xl shadow-md transition-colors w-full sm:w-auto"
              >
                WhatsApp Milestone Helpdesk
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white border border-slate-200 text-slate-700 font-semibold text-sm px-6 py-3.5 rounded-xl hover:border-[#E53935] hover:text-[#E53935] transition-colors w-full sm:w-auto"
              >
                Contact Office
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}

