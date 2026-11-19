import React from 'react';
import { BUSINESS } from '@/lib/business';

export interface MandatoryDocumentsBlockProps {
  serviceContext?: string;
  highlightNote?: string;
  className?: string;
  heading?: string;
}

const mandatoryDocuments = [
  {
    num: '01',
    title: 'Itemized Written Survey Quote',
    subtitle: 'Issued Pre-Move',
    desc: 'Locks room-wise CFT volume, packing layer grade, floor/lift charges, narrow-lane Tata Ace shuttle scope, and GST breakdown on paper before loading day.',
  },
  {
    num: '02',
    title: 'Numbered Carbon-Copy Packing List',
    subtitle: 'Signed at Origin & Delivery',
    desc: 'Sequential carton-by-carton inventory with pre-load condition remarks—and the Vehicle Condition Report (VCR) recording odometer, fuel, and exterior panels on car/bike moves.',
  },
  {
    num: '03',
    title: 'Stamped Consignment Note (LR / Bilty)',
    subtitle: 'Legal Road-Transit Receipt',
    desc: 'Carries your tracking number, Haltu/Behala branch seal, sealed container registration, declared value, and destination delivery contact under road-carriage rules.',
  },
  {
    num: '04',
    title: `GST Tax Invoice (${BUSINESS.gstin})`,
    subtitle: `${BUSINESS.sacCodes} Compliant`,
    desc: 'Digitally numbered GST bill under SAC 9965 (GTA Road Freight) & SAC 9987 (Composite Packing & Relocation), valid for corporate, bank, PSU reimbursement & B2B ITC.',
  },
] as const;

function DocumentIcon() {
  return (
    <svg
      className="w-5 h-5 text-[#E53935] shrink-0"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
      />
    </svg>
  );
}

function InfoBadgeIcon() {
  return (
    <svg
      className="w-5 h-5 text-[#F28A32] shrink-0 mt-0.5"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
}

export function MandatoryDocumentsBlock({
  serviceContext,
  highlightNote,
  className = '',
  heading = '4 Mandatory Documents You Receive on Every Move',
}: MandatoryDocumentsBlockProps) {
  return (
    <div
      className={`bg-white rounded-3xl border-2 border-[#082F52]/15 p-6 sm:p-8 shadow-[0_4px_16px_rgba(8,47,82,0.06)] ${className}`.trim()}
    >
      <div className="mb-6">
        <span className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-700 text-xs font-semibold uppercase tracking-[0.08em] px-3.5 py-1 rounded-full border border-emerald-200 mb-3">
          Paperwork &amp; Accountability
        </span>
        <h3 className="text-2xl sm:text-3xl font-display font-bold text-[#082F52] tracking-tight leading-tight">
          {heading}
        </h3>
        <p className="text-sm text-slate-600 mt-2 max-w-3xl leading-relaxed">
          Every Bharat Relocators booking from our Haltu (700078) or Behala (700061) dispatch desk is backed by four signed, verifiable documents so billing, cargo count, and claim accountability stay clear from pickup to handover.
        </p>
      </div>

      {(serviceContext || highlightNote) && (
        <div className="bg-[#082F52] text-white rounded-2xl p-4 sm:p-5 mb-6 flex items-start gap-3">
          <InfoBadgeIcon />
          <div className="text-xs sm:text-sm leading-relaxed space-y-1">
            {serviceContext && <p className="font-medium text-white">{serviceContext}</p>}
            {highlightNote && <p className="text-white/80">{highlightNote}</p>}
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {mandatoryDocuments.map((doc) => (
          <div
            key={doc.num}
            className="bg-slate-50 rounded-2xl p-5 border border-slate-200 hover:border-[#082F52]/30 transition-colors"
          >
            <div className="flex items-start justify-between gap-3 mb-2.5">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-white border border-slate-200 flex items-center justify-center shrink-0 shadow-xs">
                  <DocumentIcon />
                </div>
                <div>
                  <span className="block text-[11px] font-bold uppercase tracking-wider text-[#E53935]">
                    Document {doc.num} · {doc.subtitle}
                  </span>
                  <h4 className="font-display font-bold text-[#082F52] text-sm sm:text-base leading-snug">
                    {doc.title}
                  </h4>
                </div>
              </div>
            </div>
            <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed">
              {doc.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MandatoryDocumentsBlock;
