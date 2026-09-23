'use client';

import { useState } from 'react';
import { BUSINESS, getTelUrl } from '@/lib/business';
import {
  cleanTrackingId,
  validateTrackingId,
  lookupShipment,
  TrackingLookupResult,
} from '@/lib/tracking';

export default function TrackingInteractiveView() {
  const [trackingId, setTrackingId] = useState('');
  const [loading, setLoading] = useState(false);
  const [validationError, setValidationError] = useState<string | null>(null);
  const [lookupResult, setLookupResult] = useState<TrackingLookupResult | null>(null);

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
      const result = await lookupShipment(trackingId);
      setLookupResult(result);
    } catch {
      setValidationError('Unable to reach the tracking service. Please try again or use direct support.');
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setTrackingId('');
    setValidationError(null);
    setLookupResult(null);
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
      {/* Central Input Card */}
      <div className="bg-[#0B253D] rounded-3xl border border-white/10 shadow-2xl overflow-hidden p-6 sm:p-8 lg:p-10 transition-all">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase bg-[#E53935]/15 text-[#F28A32] border border-[#E53935]/30 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#E53935] animate-ping" />
            Live Shipment Tracker
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Enter Your Consignment or Tracking Number
          </h2>
          <p className="text-sm sm:text-base text-slate-300 mt-2">
            Locate your household goods, car carrier, bike crate, or parcel in real-time
            across India.
          </p>
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
                placeholder="e.g. BR-84920 or LR-90214"
                disabled={loading}
                aria-label="Tracking ID or Consignment Number"
                className="w-full pl-12 pr-4 py-4 rounded-2xl bg-[#071A2B] border border-white/15 text-white placeholder-slate-400 text-base sm:text-lg font-mono tracking-wider focus:outline-none focus:ring-2 focus:ring-[#E53935] focus:border-transparent transition-all uppercase"
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
                  <span>Searching Registry…</span>
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

          {/* Format Hint */}
          <div className="flex flex-wrap items-center justify-between text-xs text-slate-400 pt-1">
            <span>Format: 5 to 25 letters/digits as on your Lorry Receipt (LR)</span>
            <span className="text-slate-500">Encrypted 256-bit logistics verification</span>
          </div>
        </form>

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
              Connecting with regional vehicle logs and dispatch registry…
            </p>
          </div>
        )}

        {/* Lookup Results / Unfound State */}
        {lookupResult && !loading && (
          <div className="mt-8 pt-8 border-t border-white/10 animate-in fade-in slide-in-from-top-3 duration-300">
            {!lookupResult.found && (
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
                      {/* Carrier Portal External Link */}
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

                      {/* WhatsApp Move Manager */}
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

                      {/* Phone Direct */}
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
            )}
          </div>
        )}
      </div>
    </div>
  );
}
