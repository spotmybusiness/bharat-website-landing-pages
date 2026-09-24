'use client';

import { useState } from 'react';
import Link from 'next/link';
import { BUSINESS, getTelUrl } from '@/lib/business';
import {
  cleanTrackingId,
  validateTrackingId,
  lookupShipment,
  TrackingLookupResult,
  LiveShipmentData,
} from '@/lib/tracking';

interface TrackingInteractiveViewProps {
  compact?: boolean;
}

export default function TrackingInteractiveView({ compact = false }: TrackingInteractiveViewProps) {
  const [trackingId, setTrackingId] = useState('');
  const [carrierFilter, setCarrierFilter] = useState<'auto' | 'allcargo' | 'dpworld'>('auto');
  const [loading, setLoading] = useState(false);
  const [validationError, setValidationError] = useState<string | null>(null);
  const [lookupResult, setLookupResult] = useState<TrackingLookupResult | null>(null);
  const [copied, setCopied] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setValidationError(null);

    const validation = validateTrackingId(trackingId);
    if (!validation.valid) {
      setValidationError(validation.error || 'Invalid tracking ID.');
      return;
    }

    setLoading(true);
    setLookupResult(null);

    try {
      const carrierParam = carrierFilter === 'auto' ? undefined : carrierFilter;
      const result = await lookupShipment(trackingId, carrierParam);
      setLookupResult(result);
    } catch {
      setValidationError('Unable to reach the tracking service. Please try again or contact our dispatch desk.');
    } finally {
      setLoading(false);
    }
  };

  const handleQuickSample = (sampleId: string, carrierType: 'auto' | 'allcargo' | 'dpworld') => {
    setTrackingId(sampleId);
    setCarrierFilter(carrierType);
    setValidationError(null);
  };

  const handleReset = () => {
    setTrackingId('');
    setValidationError(null);
    setLookupResult(null);
  };

  const handleCopyId = (id: string) => {
    navigator.clipboard.writeText(id);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const normalizedId = cleanTrackingId(trackingId);
  const whatsappSupportUrl = `https://wa.me/${BUSINESS.phone.primary.replace(
    /\s+/g,
    ''
  )}?text=${encodeURIComponent(
    `Hello Bharat Relocators, I am inquiring about the live status of my shipment (Tracking ID: ${
      normalizedId || 'consignment'
    }). Please share an update.`
  )}`;

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Central Search Card */}
      <div
        className={`bg-[#0B253D] rounded-3xl border border-white/10 shadow-2xl overflow-hidden ${
          compact ? 'p-5 sm:p-7 lg:p-8' : 'p-6 sm:p-8 lg:p-10'
        } transition-all`}
      >
        <div className={`text-center max-w-2xl mx-auto ${compact ? 'mb-5' : 'mb-8'}`}>
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase bg-[#E53935]/15 text-[#F28A32] border border-[#E53935]/30 mb-2.5">
            <span className="w-2 h-2 rounded-full bg-[#E53935] animate-ping" />
            Live Shipment Tracker
          </span>
          <h2
            className={`${
              compact ? 'text-xl sm:text-2xl lg:text-3xl' : 'text-2xl sm:text-3xl'
            } font-extrabold text-white tracking-tight`}
          >
            {compact ? 'Track Your Consignment Live' : 'Enter Your Consignment or Tracking Number'}
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 mt-1.5">
            {compact
              ? 'Instant live status for Allcargo Gati, DP World Express & Bharat Relocators shipments.'
              : 'Real-time verified status for Allcargo Gati dockets, DP World Express shipments, and Bharat Relocators consignments across India.'}
          </p>

          {/* Carrier Switcher Tabs */}
          <div className={`flex items-center justify-center gap-2 ${compact ? 'mt-3.5' : 'mt-5'}`}>
            <button
              type="button"
              onClick={() => setCarrierFilter('auto')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                carrierFilter === 'auto'
                  ? 'bg-white/20 text-white border border-white/30 shadow-sm'
                  : 'bg-white/5 text-slate-400 hover:text-white border border-transparent'
              }`}
            >
              Auto-Detect Carrier
            </button>
            <button
              type="button"
              onClick={() => setCarrierFilter('allcargo')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                carrierFilter === 'allcargo'
                  ? 'bg-[#E53935] text-white border border-[#E53935] shadow-sm'
                  : 'bg-white/5 text-slate-400 hover:text-white border border-transparent'
              }`}
            >
              Allcargo / Gati
            </button>
            <button
              type="button"
              onClick={() => setCarrierFilter('dpworld')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                carrierFilter === 'dpworld'
                  ? 'bg-[#0284c7] text-white border border-[#0284c7] shadow-sm'
                  : 'bg-white/5 text-slate-400 hover:text-white border border-transparent'
              }`}
            >
              DP World Express
            </button>
          </div>
        </div>

        {/* Input Form */}
        <form onSubmit={handleSubmit} className="space-y-4 max-w-2xl mx-auto">
          <div className="relative flex flex-col sm:flex-row items-stretch gap-3">
            <div className="relative flex-1">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                  />
                </svg>
              </div>
              <input
                type="text"
                value={trackingId}
                onChange={(e) => {
                  setTrackingId(e.target.value);
                  if (validationError) setValidationError(null);
                }}
                placeholder={
                  carrierFilter === 'allcargo'
                    ? 'Enter Allcargo Docket (e.g. 430803710)'
                    : carrierFilter === 'dpworld'
                    ? 'Enter DP World Docket (e.g. 1847004934)'
                    : 'Enter Docket or LR No (e.g. 430803710 or 1847004934)'
                }
                disabled={loading}
                aria-label="Tracking ID or Consignment Number"
                className="w-full pl-12 pr-10 py-4 rounded-2xl bg-[#071A2B] border border-white/15 text-white placeholder-slate-400 text-base sm:text-lg font-mono tracking-wider focus:outline-none focus:ring-2 focus:ring-[#E53935] focus:border-transparent transition-all uppercase"
              />
              {trackingId && !loading && (
                <button
                  type="button"
                  onClick={() => setTrackingId('')}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-400 hover:text-white"
                  aria-label="Clear tracking input"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
            </div>

            <button
              type="submit"
              disabled={loading}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-[#E53935] hover:bg-[#c62828] text-white font-bold text-base transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 whitespace-nowrap cursor-pointer"
            >
              {loading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  <span>Searching Live Hubs…</span>
                </>
              ) : (
                <>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                  <span>Track Status</span>
                </>
              )}
            </button>
          </div>

          {/* Validation Feedback */}
          {validationError && (
            <div className="flex items-center gap-2 text-rose-400 text-sm bg-rose-950/40 border border-rose-800/50 rounded-xl px-4 py-3 animate-in fade-in duration-150">
              <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
              </svg>
              <span>{validationError}</span>
            </div>
          )}

          {/* Live Quick Examples & Format Hint */}
          <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-slate-400 pt-1">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-slate-500">Quick Test:</span>
              <button
                type="button"
                onClick={() => handleQuickSample('430803710', 'allcargo')}
                className="underline hover:text-[#F28A32] text-slate-300 transition-colors"
              >
                430803710 (Allcargo Gati)
              </button>
              <span className="text-slate-600">|</span>
              <button
                type="button"
                onClick={() => handleQuickSample('1847004934', 'dpworld')}
                className="underline hover:text-[#F28A32] text-slate-300 transition-colors"
              >
                1847004934 (DP World)
              </button>
            </div>
            <span className="text-slate-500">256-bit Encrypted Logistics Gateway</span>
          </div>
        </form>

        {compact && !loading && !lookupResult && (
          <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
            <span className="text-slate-400">Official live carrier synchronization</span>
            <Link
              href="/tracking"
              className="text-[#F28A32] hover:text-white transition-colors inline-flex items-center gap-1 font-semibold"
            >
              <span>Full Tracking Portal</span>
              <span>→</span>
            </Link>
          </div>
        )}

        {/* Loading State Skeleton */}
        {loading && (
          <div className="mt-8 pt-8 border-t border-white/10 text-center animate-in fade-in duration-200">
            <div className="inline-block p-4 rounded-2xl bg-[#071A2B] border border-white/10 mb-3">
              <div className="flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-[#F28A32] animate-bounce" />
                <span className="w-3 h-3 rounded-full bg-[#E53935] animate-bounce [animation-delay:0.15s]" />
                <span className="w-3 h-3 rounded-full bg-emerald-400 animate-bounce [animation-delay:0.3s]" />
              </div>
            </div>
            <p className="text-slate-300 font-medium text-sm">
              Connecting directly to live carrier servers and toll telematics…
            </p>
          </div>
        )}

        {/* ========================================================= */}
        {/* SUCCESSFUL LIVE TRACKING RESULT VIEW                     */}
        {/* ========================================================= */}
        {lookupResult && lookupResult.found && lookupResult.data && !loading && (
          <div className="mt-8 pt-8 border-t border-white/10 animate-in fade-in slide-in-from-top-3 duration-300">
            <LiveTrackingDetailsView
              data={lookupResult.data}
              onReset={handleReset}
              copied={copied}
              onCopy={() => handleCopyId(lookupResult.data?.trackingNumber || lookupResult.searchedId)}
              whatsappSupportUrl={whatsappSupportUrl}
            />
          </div>
        )}

        {/* ========================================================= */}
        {/* UNFOUND CONSIGNMENT VIEW                                  */}
        {/* ========================================================= */}
        {lookupResult && !lookupResult.found && !loading && (
          <div className="mt-8 pt-8 border-t border-white/10 animate-in fade-in slide-in-from-top-3 duration-300">
            <div className="rounded-2xl bg-[#071A2B] border border-amber-500/30 p-6 sm:p-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                    />
                  </svg>
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <h3 className="text-lg sm:text-xl font-bold text-white">
                      Consignment Not Yet Indexed in Fast Registry
                    </h3>
                    <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-md bg-white/10 text-slate-300">
                      ID: {lookupResult.searchedId}
                    </span>
                  </div>
                  <p className="text-slate-300 text-sm leading-relaxed mb-6">
                    {lookupResult.message}
                  </p>

                  <div className="bg-[#0B253D] rounded-xl p-4 border border-white/10 mb-6">
                    <h4 className="text-xs font-bold text-[#F28A32] uppercase tracking-wider mb-2">
                      Immediate Tracking Options:
                    </h4>
                    <ul className="text-xs sm:text-sm text-slate-300 space-y-1.5 list-disc list-inside">
                      <li>
                        Check the official <strong className="text-white">Live Carrier Network Portal</strong> for real-time telematics updates.
                      </li>
                      <li>
                        Confirm the consignment number with your dedicated Move Coordinator.
                      </li>
                      <li>
                        If loaded within the last 4 hours, scans appear after highway toll plaza verification.
                      </li>
                    </ul>
                  </div>

                  {/* Action Suite */}
                  <div className="flex flex-wrap items-center gap-3">
                    <a
                      href={lookupResult.portalFallbackUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-[#E53935] to-[#c62828] hover:from-[#c62828] hover:to-[#b71c1c] text-white font-bold text-sm shadow-md hover:shadow-lg transition-all"
                    >
                      <span>Check on Live Carrier Portal</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a>

                    <a
                      href={whatsappSupportUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm transition-all"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.353.101.173.45 0.742.965 1.201.664.591 1.224.774 1.397.86.173.086.275.072.376-.043.101-.116.433-.506.549-.679.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.043.073.043.419-.101.824z" />
                      </svg>
                      <span>WhatsApp Support Desk</span>
                    </a>

                    <a
                      href={getTelUrl(BUSINESS.phone.primary)}
                      className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm transition-all"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-2.2 2.2a15.057 15.057 0 01-6.59-6.59l2.2-2.21a.96.96 0 00.25-1.01A11.36 11.36 0 018.57 3.9c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.52c0-.55-.45-1-1-1z" />
                      </svg>
                      <span>Call Dispatch: {BUSINESS.phone.primaryFormatted}</span>
                    </a>

                    <button
                      type="button"
                      onClick={handleReset}
                      className="text-xs text-slate-400 hover:text-white underline ml-auto py-2"
                    >
                      Search another consignment
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

/**
 * Clean Subcomponent for Live Shipment Tracking Details
 * Preserves the exact dark luxury color aesthetic of Bharat Relocators
 */
function LiveTrackingDetailsView({
  data,
  onReset,
  copied,
  onCopy,
  whatsappSupportUrl,
}: {
  data: LiveShipmentData;
  onReset: () => void;
  copied: boolean;
  onCopy: () => void;
  whatsappSupportUrl: string;
}) {
  const isDelivered =
    (data.remark && data.remark.toLowerCase().includes('deliver')) ||
    (data.timeline && data.timeline.length > 0 && data.timeline[0].status.toLowerCase().includes('deliver'));

  return (
    <div className="space-y-6">
      {/* 1. Header Card: Carrier, Docket Number, Status Badge & Action Buttons */}
      <div className="rounded-2xl bg-[#071A2B] border border-white/10 p-5 sm:p-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2 flex-wrap">
              <span className="px-2.5 py-0.5 rounded-md text-xs font-bold uppercase tracking-wider bg-white/10 text-white border border-white/15">
                {data.carrier}
              </span>
              <span
                className={`inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-xs font-bold tracking-wide uppercase ${
                  isDelivered
                    ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                    : 'bg-[#F28A32]/20 text-[#F28A32] border border-[#F28A32]/30'
                }`}
              >
                <span
                  className={`w-1.5 h-1.5 rounded-full ${
                    isDelivered ? 'bg-emerald-400' : 'bg-[#F28A32] animate-pulse'
                  }`}
                />
                {isDelivered ? 'Delivered' : data.remark || 'In Transit'}
              </span>
            </div>

            <div className="flex items-center gap-3">
              <h3 className="text-xl sm:text-2xl font-black font-mono tracking-wider text-white">
                Docket No: {data.trackingNumber}
              </h3>
              <button
                type="button"
                onClick={onCopy}
                title="Copy tracking number"
                className="p-1.5 rounded-lg bg-white/5 hover:bg-white/15 text-slate-400 hover:text-white transition-colors"
              >
                {copied ? (
                  <span className="text-xs text-emerald-400 font-sans font-bold">Copied!</span>
                ) : (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Action Buttons: POD & GST Invoice (Matching Original Allcargo Layout) */}
          <div className="flex flex-wrap items-center gap-2.5 sm:self-start">
            {data.podUrl && (
              <a
                href={data.podUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs border border-white/20 transition-all hover:scale-[1.02]"
              >
                <svg className="w-4 h-4 text-[#F28A32]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                <span>Download POD</span>
              </a>
            )}

            {data.gstInvoiceUrl && (
              <a
                href={data.gstInvoiceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs border border-white/20 transition-all hover:scale-[1.02]"
              >
                <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                <span>Download GST Invoice</span>
              </a>
            )}

            <button
              type="button"
              onClick={onReset}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white text-xs transition-colors"
            >
              <span>Search Another</span>
            </button>
          </div>
        </div>
      </div>

      {/* 2. Shipment Summary Table (Exact 7 Fields from Official Tracking Screen) */}
      <div className="rounded-2xl bg-[#071A2B] border border-white/10 overflow-hidden shadow-inner">
        <div className="px-5 py-3.5 bg-white/5 border-b border-white/10 flex items-center justify-between">
          <span className="text-xs font-bold text-[#F28A32] uppercase tracking-wider">
            Consignment Summary
          </span>
          <span className="text-xs text-slate-400">Verified System Audit</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-white/10 text-sm">
          {/* Col 1: Pickup Info */}
          <div className="p-4 sm:p-5 space-y-3">
            <div>
              <div className="text-xs text-slate-400 font-medium">Pickup Location</div>
              <div className="text-white font-bold mt-0.5 text-base">{data.pickupLocation || 'N/A'}</div>
            </div>
            <div>
              <div className="text-xs text-slate-400 font-medium">Pickup Date</div>
              <div className="text-slate-200 mt-0.5">{data.pickupDate || 'N/A'}</div>
            </div>
          </div>

          {/* Col 2: Delivery Destination */}
          <div className="p-4 sm:p-5 space-y-3">
            <div>
              <div className="text-xs text-slate-400 font-medium">Delivery Destination</div>
              <div className="text-white font-bold mt-0.5 text-base">{data.deliveryDestination || 'N/A'}</div>
            </div>
            <div>
              <div className="text-xs text-slate-400 font-medium">Delivery Date / ETA</div>
              <div className="text-slate-200 mt-0.5 font-semibold text-[#F28A32]">{data.deliveryDate || 'N/A'}</div>
            </div>
          </div>

          {/* Col 3: Consignee & Details */}
          <div className="p-4 sm:p-5 space-y-3">
            <div>
              <div className="text-xs text-slate-400 font-medium">Receiver&apos;s Name</div>
              <div className="text-white font-bold mt-0.5 uppercase tracking-wide">
                {data.receiversName || 'Consignee On File'}
              </div>
            </div>
            {data.packagesCount !== undefined && (
              <div>
                <div className="text-xs text-slate-400 font-medium">Total Packages</div>
                <div className="text-slate-200 mt-0.5 font-mono">{data.packagesCount} unit(s)</div>
              </div>
            )}
            {data.containerType && (
              <div>
                <div className="text-xs text-slate-400 font-medium">Container Spec</div>
                <div className="text-slate-200 mt-0.5 font-mono">{data.containerType}</div>
              </div>
            )}
          </div>

          {/* Col 4: Remarks & Audit condition */}
          <div className="p-4 sm:p-5 space-y-3">
            <div>
              <div className="text-xs text-slate-400 font-medium">Remark</div>
              <div className="text-white font-semibold mt-0.5 uppercase tracking-wider text-xs">
                {data.remark || 'Delivered'}
              </div>
            </div>
            <div>
              <div className="text-xs text-slate-400 font-medium">GA Remark</div>
              <div className="text-slate-300 mt-0.5 uppercase tracking-wider text-xs">
                {data.gaRemark || data.remark || 'Normal Delivery'}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Milestone Timeline (Vertical Timeline matching Official Portal) */}
      <div className="rounded-2xl bg-[#071A2B] border border-white/10 p-5 sm:p-7">
        <div className="flex items-center justify-between mb-6 pb-3 border-b border-white/10">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-[#E53935]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <h4 className="text-base sm:text-lg font-bold text-white">Transit Milestones</h4>
          </div>
          <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-white/10 text-slate-300">
            {data.timeline.length} Recorded Milestone{data.timeline.length === 1 ? '' : 's'}
          </span>
        </div>

        {/* Milestone Steps Vertical Flow */}
        <div className="relative pl-6 sm:pl-8 space-y-6 before:absolute before:left-3 sm:before:left-4 before:top-3 before:bottom-3 before:w-0.5 before:bg-white/15">
          {data.timeline.map((event, index) => {
            const isTop = index === 0;
            const isBottom = index === data.timeline.length - 1 || event.isBooked;

            return (
              <div key={index} className="relative group">
                {/* Node Icon on Timeline */}
                <div
                  className={`absolute -left-6 sm:-left-8 top-0.5 w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center border transition-all ${
                    isTop
                      ? 'bg-emerald-500 border-emerald-400 text-white shadow-lg shadow-emerald-500/20'
                      : isBottom
                      ? 'bg-[#0B253D] border-[#F28A32] text-[#F28A32]'
                      : 'bg-emerald-600/80 border-emerald-400/60 text-white'
                  }`}
                >
                  {isTop ? (
                    // Top / Delivered Checkmark
                    <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  ) : isBottom ? (
                    // Bottom / Shipment Booked Parcel Icon
                    <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                      />
                    </svg>
                  ) : (
                    // Intermediate Upward Arrow (matching official Allcargo portal)
                    <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                    </svg>
                  )}
                </div>

                {/* Milestone Content */}
                <div className="bg-[#0B253D] rounded-xl p-3.5 sm:p-4 border border-white/5 hover:border-white/15 transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5">
                    <h5
                      className={`text-sm sm:text-base font-bold ${
                        isTop ? 'text-emerald-400' : isBottom ? 'text-[#F28A32]' : 'text-white'
                      }`}
                    >
                      {event.status}
                    </h5>
                    <time className="text-xs sm:text-sm font-mono text-slate-300 whitespace-nowrap">
                      {event.date}
                    </time>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 4. Support Footer Banner */}
      <div className="rounded-2xl bg-white/5 border border-white/10 p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-center sm:text-left">
          <h5 className="text-sm font-bold text-white">Questions about this consignment?</h5>
          <p className="text-xs text-slate-400 mt-0.5">
            Our dispatch coordinators can assist with room placement, unloading permits, and gate entry passes.
          </p>
        </div>

        <div className="flex items-center gap-3 flex-shrink-0">
          <a
            href={whatsappSupportUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs transition-all"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.353.101.173.45 0.742.965 1.201.664.591 1.224.774 1.397.86.173.086.275.072.376-.043.101-.116.433-.506.549-.679.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.043.073.043.419-.101.824z" />
            </svg>
            <span>WhatsApp Dispatch</span>
          </a>

          <a
            href={getTelUrl(BUSINESS.phone.primary)}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs transition-all"
          >
            <span>Call: {BUSINESS.phone.primaryFormatted}</span>
          </a>
        </div>
      </div>
    </div>
  );
}
