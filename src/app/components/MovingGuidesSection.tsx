import React from 'react';
import Link from 'next/link';

export default function MovingGuidesSection() {
  return (
    <section
      id="guides"
      aria-labelledby="moving-guides-heading"
      className="py-20 bg-slate-50 border-t border-slate-200/80 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block bg-red-50 text-[#E53935] text-xs font-semibold uppercase tracking-[0.08em] px-4 py-1.5 rounded-full mb-4 border border-red-200">
            2026 Relocation Knowledge Hub
          </span>
          <h2
            id="moving-guides-heading"
            className="text-3xl sm:text-4xl lg:text-[2.6rem] font-display font-bold text-[#082F52] mb-4 tracking-tight leading-tight"
          >
            2026 Kolkata Moving Cost Guides &amp; Checklists
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Compare verified 1BHK–3BHK shifting rate cards, 4-week packing checklists, RTO vehicle
            transit rules, and interstate highway guides before you book.
          </p>
        </div>

        {/* Responsive 4-Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1: 2026 Kolkata Rate Card (Post 1) */}
          <article className="group bg-white rounded-2xl p-6 border-2 border-[#082F52]/15 hover:border-[#E53935] shadow-[0_4px_16px_rgba(8,47,82,0.06)] hover:shadow-xl hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-2 mb-5">
                <div className="w-10 h-10 rounded-xl bg-red-50 border border-red-100 text-[#E53935] group-hover:bg-[#E53935] group-hover:text-white group-hover:border-[#E53935] flex items-center justify-center transition-colors">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.8}
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2z"
                    />
                  </svg>
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-red-50 text-[#E53935] border border-red-200">
                  2026 Rate Card
                </span>
              </div>

              <h3 className="text-lg font-display font-bold text-[#082F52] group-hover:text-[#E53935] transition-colors leading-snug mb-2.5">
                <Link href="/blogs/packers-and-movers-kolkata-charges-rate-card">
                  Packers &amp; Movers Kolkata Charges [2026 Rate Card]
                </Link>
              </h3>

              <p className="text-slate-600 text-xs sm:text-[13px] leading-relaxed mb-5">
                Compare verified 1BHK (₹4,500–₹8,500), 2BHK (₹7,500–₹13,500), and 3BHK shifting
                rates, 10-corridor tables, staircase bills, and 18% GST.
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-2 text-xs">
              <span className="text-slate-500 font-medium">11 min read · Rate Card</span>
              <Link
                href="/blogs/packers-and-movers-kolkata-charges-rate-card"
                className="font-bold text-[#082F52] group-hover:text-[#E53935] inline-flex items-center gap-1 transition-colors"
              >
                View Rates →
              </Link>
            </div>
          </article>

          {/* Card 2: Home Moving Checklist */}
          <article className="group bg-white rounded-2xl p-6 border-2 border-[#082F52]/15 hover:border-[#E53935] shadow-[0_4px_16px_rgba(8,47,82,0.06)] hover:shadow-xl hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-2 mb-5">
                <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200/80 text-[#082F52] group-hover:bg-[#E53935] group-hover:text-white group-hover:border-[#E53935] flex items-center justify-center transition-colors">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.8}
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                    />
                  </svg>
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-100 text-[#082F52]">
                  4-Week Plan
                </span>
              </div>

              <h3 className="text-lg font-display font-bold text-[#082F52] group-hover:text-[#E53935] transition-colors leading-snug mb-2.5">
                <Link href="/moving-checklist">
                  Comprehensive Home Moving Checklist
                </Link>
              </h3>

              <p className="text-slate-600 text-xs sm:text-[13px] leading-relaxed mb-5">
                Room-by-room decluttering timeline, fragile kitchen packing rules, utility
                transfers, and moving-day inventory verification.
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-2 text-xs">
              <span className="text-slate-500 font-medium">6 min read · Checklist</span>
              <Link
                href="/moving-checklist"
                className="font-bold text-[#082F52] group-hover:text-[#E53935] inline-flex items-center gap-1 transition-colors"
              >
                Read Guide →
              </Link>
            </div>
          </article>

          {/* Card 3: Vehicle Transportation Guide */}
          <article className="group bg-white rounded-2xl p-6 border-2 border-[#082F52]/15 hover:border-[#E53935] shadow-[0_4px_16px_rgba(8,47,82,0.06)] hover:shadow-xl hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-2 mb-5">
                <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200/80 text-[#082F52] group-hover:bg-[#E53935] group-hover:text-white group-hover:border-[#E53935] flex items-center justify-center transition-colors">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.8}
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"
                    />
                  </svg>
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-100 text-[#082F52]">
                  RTO &amp; Safety
                </span>
              </div>

              <h3 className="text-lg font-display font-bold text-[#082F52] group-hover:text-[#E53935] transition-colors leading-snug mb-2.5">
                <Link href="/vehicle-transportation-guide">
                  Car &amp; Bike Transportation Safety Guide
                </Link>
              </h3>

              <p className="text-slate-600 text-xs sm:text-[13px] leading-relaxed mb-5">
                Essential RC, insurance, PUC &amp; NOC paperwork, fuel reserve prep, wooden bike
                crating, and closed hydraulic car carriers.
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-2 text-xs">
              <span className="text-slate-500 font-medium">7 min read · Car &amp; Bike</span>
              <Link
                href="/vehicle-transportation-guide"
                className="font-bold text-[#082F52] group-hover:text-[#E53935] inline-flex items-center gap-1 transition-colors"
              >
                Read Guide →
              </Link>
            </div>
          </article>

          {/* Card 4: Intercity Moving Guide */}
          <article className="group bg-white rounded-2xl p-6 border-2 border-[#082F52]/15 hover:border-[#E53935] shadow-[0_4px_16px_rgba(8,47,82,0.06)] hover:shadow-xl hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-2 mb-5">
                <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200/80 text-[#082F52] group-hover:bg-[#E53935] group-hover:text-white group-hover:border-[#E53935] flex items-center justify-center transition-colors">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.8}
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                    />
                  </svg>
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-100 text-[#082F52]">
                  PAN India
                </span>
              </div>

              <h3 className="text-lg font-display font-bold text-[#082F52] group-hover:text-[#E53935] transition-colors leading-snug mb-2.5">
                <Link href="/intercity-moving-guide">
                  Intercity Moving from Kolkata Guide
                </Link>
              </h3>

              <p className="text-slate-600 text-xs sm:text-[13px] leading-relaxed mb-5">
                Highway container transit on NH 16 &amp; NH 19 corridors to Bangalore, Delhi NCR,
                Mumbai &amp; Hyderabad with LR waybills and insurance.
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-2 text-xs">
              <span className="text-slate-500 font-medium">9 min read · Intercity</span>
              <Link
                href="/intercity-moving-guide"
                className="font-bold text-[#082F52] group-hover:text-[#E53935] inline-flex items-center gap-1 transition-colors"
              >
                Read Guide →
              </Link>
            </div>
          </article>
        </div>

        {/* Hub CTA */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
          <Link
            href="/blogs/bike-transport-kolkata-charges-wooden-crating-guide"
            className="inline-flex items-center justify-center gap-2 bg-white hover:bg-red-50 text-[#082F52] border-2 border-[#082F52]/20 hover:border-[#E53935] font-semibold text-sm px-5 py-3.5 rounded-xl shadow-xs transition-all"
          >
            <span className="text-xs font-bold uppercase tracking-wider bg-red-100 text-[#E53935] px-2 py-0.5 rounded">
              New
            </span>
            <span>2026 Bike Transport Cost &amp; Crating Guide →</span>
          </Link>
          <Link
            href="/blogs"
            className="inline-flex items-center justify-center gap-2 bg-[#082F52] hover:bg-[#0b3b60] text-white font-semibold text-sm px-6 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all"
          >
            View All Blogs &amp; Rate Cards
            <svg
              className="w-4 h-4 text-[#F28A32]"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
