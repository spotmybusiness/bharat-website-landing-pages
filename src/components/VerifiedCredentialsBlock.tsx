import React from 'react';
import { BUSINESS, getTelUrl } from '@/lib/business';

export interface VerifiedCredentialsBlockProps {
  compact?: boolean;
  className?: string;
  heading?: string;
}

function ShieldCheckIcon() {
  return (
    <svg
      className="w-5 h-5 text-emerald-600 shrink-0"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
      />
    </svg>
  );
}

function ExternalLinkIcon() {
  return (
    <svg
      className="w-4 h-4 shrink-0"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
      />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg
      className="w-4 h-4 text-[#E53935] shrink-0 mt-0.5"
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5z" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg
      className="w-4 h-4 text-[#082F52] shrink-0"
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
    </svg>
  );
}

export function VerifiedCredentialsBlock({
  compact = false,
  className = '',
  heading = 'Verified Statutory & Dual-Branch Credentials',
}: VerifiedCredentialsBlockProps) {
  const mainLoc = BUSINESS.locations.main;
  const secLoc = BUSINESS.locations.secondary;

  if (compact) {
    return (
      <div
        className={`bg-white rounded-2xl border-2 border-[#082F52]/15 p-5 sm:p-6 shadow-[0_4px_16px_rgba(8,47,82,0.06)] ${className}`.trim()}
      >
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 pb-4 border-b border-slate-200">
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-bold px-3 py-1 rounded-full">
              <ShieldCheckIcon />
              Active WB GSTIN: <span className="font-mono">{BUSINESS.gstin}</span>
            </span>
            <span className="inline-flex items-center bg-slate-100 text-[#082F52] border border-slate-200 text-xs font-semibold px-3 py-1 rounded-full">
              {BUSINESS.sacCodes} (GTA &amp; Composite Packing)
            </span>
          </div>

          <a
            href={BUSINESS.gstPortalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1478B5] hover:text-[#082F52] underline underline-offset-2 shrink-0"
          >
            Verify GSTIN on CBIC Portal
            <ExternalLinkIcon />
          </a>
        </div>

        <div className="pt-4">
          {heading && (
            <h3 className="text-sm font-display font-bold text-[#082F52] mb-3">
              {heading}
            </h3>
          )}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs sm:text-[13px] text-slate-600">
            <div className="flex items-start gap-2.5 bg-slate-50 rounded-xl p-3.5 border border-slate-200/80">
              <PinIcon />
              <div className="min-w-0">
                <div className="font-bold text-[#082F52]">
                  Haltu Main Office ({mainLoc.google.rating.toFixed(1)}★ · {mainLoc.google.reviewCount}+)
                </div>
                <p className="text-slate-600 mt-0.5">{mainLoc.address.short}</p>
                <a
                  href={getTelUrl(mainLoc.phone)}
                  className="inline-block mt-1 font-semibold text-[#E53935] hover:underline"
                >
                  {mainLoc.phoneFormatted}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-2.5 bg-slate-50 rounded-xl p-3.5 border border-slate-200/80">
              <PinIcon />
              <div className="min-w-0">
                <div className="font-bold text-[#082F52]">
                  Behala Branch ({secLoc.google.rating.toFixed(1)}★ · {secLoc.google.reviewCount})
                </div>
                <p className="text-slate-600 mt-0.5">{secLoc.address.short}</p>
                <a
                  href={getTelUrl(secLoc.phone)}
                  className="inline-block mt-1 font-semibold text-[#E53935] hover:underline"
                >
                  {secLoc.phoneFormatted}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`bg-slate-50 rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xs ${className}`.trim()}
    >
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6 pb-6 border-b border-slate-200">
        <div>
          <span className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-700 text-xs font-semibold uppercase tracking-[0.08em] px-3.5 py-1 rounded-full border border-emerald-200 mb-3">
            <ShieldCheckIcon />
            Verified Tax &amp; Branch Registry
          </span>
          <h3 className="text-xl sm:text-2xl font-display font-bold text-[#082F52]">
            {heading}
          </h3>
        </div>

        <a
          href={BUSINESS.gstPortalUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 bg-[#082F52] hover:bg-[#0B253D] text-white text-xs sm:text-sm font-semibold px-4 py-2.5 rounded-xl transition-colors shrink-0"
        >
          Verify on GST Portal
          <ExternalLinkIcon />
        </a>
      </div>

      {/* Statutory Tax & SAC Classification */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="bg-white rounded-2xl p-5 border border-slate-200">
          <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">
            Active West Bengal GSTIN
          </div>
          <div className="text-xl font-display font-extrabold text-[#082F52] font-mono tracking-tight">
            {BUSINESS.gstin}
          </div>
          <p className="text-xs sm:text-[13px] text-slate-600 mt-1.5 leading-relaxed">
            Every tax invoice carries GSTIN <span className="font-mono font-semibold">{BUSINESS.gstin}</span> for corporate/bank/PSU relocation reimbursement and B2B Input Tax Credit (ITC).
          </p>
        </div>

        <div className="bg-white rounded-2xl p-5 border border-slate-200">
          <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">
            Authorized CBIC Service Codes
          </div>
          <div className="text-xl font-display font-extrabold text-[#082F52] tracking-tight">
            {BUSINESS.sacCodes}
          </div>
          <p className="text-xs sm:text-[13px] text-slate-600 mt-1.5 leading-relaxed">
            <strong>SAC 9965</strong> (Road Freight &amp; Goods Transport Agency / GTA) and{' '}
            <strong>SAC 9987</strong> (Composite Household &amp; Office Packing, Crating &amp; Relocation).
          </p>
        </div>
      </div>

      {/* Dual Physical Kolkata Branches */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white rounded-2xl p-5 border-2 border-[#082F52]/15">
          <div className="flex items-center justify-between gap-2 mb-2.5">
            <span className="inline-block bg-red-50 text-[#E53935] text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border border-red-200">
              {mainLoc.badge} · Haltu HQ
            </span>
            <span className="text-xs font-bold text-[#082F52]">
              {mainLoc.google.rating.toFixed(1)}★ · {mainLoc.google.reviewCount}+ Reviews
            </span>
          </div>
          <div className="font-display font-bold text-[#082F52] text-base mb-2">
            {mainLoc.name}
          </div>
          <div className="flex items-start gap-2 text-xs sm:text-[13px] text-slate-600 mb-2">
            <PinIcon />
            <span>{mainLoc.address.short}</span>
          </div>
          <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-slate-100">
            <a
              href={getTelUrl(mainLoc.phone)}
              className="inline-flex items-center gap-1.5 text-sm font-bold text-[#082F52] hover:text-[#E53935] transition-colors"
            >
              <PhoneIcon />
              {mainLoc.phoneFormatted}
            </a>
            <a
              href={mainLoc.google.mapsShortlink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs font-semibold text-[#1478B5] hover:underline"
            >
              Google Maps
              <ExternalLinkIcon />
            </a>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-5 border-2 border-[#082F52]/15">
          <div className="flex items-center justify-between gap-2 mb-2.5">
            <span className="inline-block bg-blue-50 text-[#1478B5] text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border border-blue-200">
              {secLoc.badge} · Behala Branch
            </span>
            <span className="text-xs font-bold text-[#082F52]">
              {secLoc.google.rating.toFixed(1)}★ · {secLoc.google.reviewCount} Reviews
            </span>
          </div>
          <div className="font-display font-bold text-[#082F52] text-base mb-2">
            {secLoc.name}
          </div>
          <div className="flex items-start gap-2 text-xs sm:text-[13px] text-slate-600 mb-2">
            <PinIcon />
            <span>{secLoc.address.short}</span>
          </div>
          <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-slate-100">
            <a
              href={getTelUrl(secLoc.phone)}
              className="inline-flex items-center gap-1.5 text-sm font-bold text-[#082F52] hover:text-[#E53935] transition-colors"
            >
              <PhoneIcon />
              {secLoc.phoneFormatted}
            </a>
            <a
              href={secLoc.google.shareUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs font-semibold text-[#1478B5] hover:underline"
            >
              Google Maps
              <ExternalLinkIcon />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VerifiedCredentialsBlock;
