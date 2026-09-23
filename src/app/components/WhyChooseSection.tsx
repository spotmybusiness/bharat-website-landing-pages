'use client';

import React, { useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';

const features = [
  {
    title: 'Express On-Time Delivery',
    desc: 'Structured transit schedules with guaranteed delivery timelines. Over 96% of our shipments arrive right on schedule.',
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
      >
        <circle cx="12" cy="10" r="8" />
        <polyline points="12,6 12,10 15,12" />
      </svg>
    ),
  },
  {
    title: 'Real-Time Online Tracking',
    desc: 'Track your shipment live from Kolkata to anywhere across India with SMS and WhatsApp milestone updates.',
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
        />
      </svg>
    ),
  },
  {
    title: 'Insurance & Safety Coverage',
    desc: 'Comprehensive transit insurance coverage for complete peace of mind. Zero hidden clauses or fine print.',
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
  },
  {
    title: '24x7 Helpdesk Support',
    desc: 'Round-the-clock moving assistance with a dedicated move coordinator assigned to your relocation.',
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
        />
      </svg>
    ),
  },
  {
    title: 'Background-Verified Crew',
    desc: 'Every driver and packing technician is trained, identity-verified, and experienced in safe cargo handling.',
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
  },
  {
    title: 'Direct Door-to-Door Delivery',
    desc: 'We pack at your current doorstep and deliver right into your new rooms — without third-party handover.',
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
        />
      </svg>
    ),
  },
];

export default function WhyChooseSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('is-visible');
        });
      },
      { threshold: 0.1 }
    );
    sectionRef.current?.querySelectorAll('.reveal')?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="why-us"
      ref={sectionRef}
      className="py-24 bg-white relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Image + Overlays */}
          <div className="lg:col-span-5 relative reveal">
            <div className="rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] border border-slate-200">
              <AppImage
                src="/images/packaging.png"
                alt="Professional movers wrapping household items safely with high quality packing materials"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
            </div>

            {/* Floating Standards Badge */}
            <div className="absolute -bottom-5 -right-3 sm:right-4 bg-white rounded-2xl shadow-xl p-4 sm:p-5 border border-slate-200">
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 bg-red-50 rounded-xl flex items-center justify-center text-[#E53935] flex-shrink-0">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <div className="text-base font-bold text-[#082F52] font-display">
                    ISO Certified
                  </div>
                  <div className="text-xs text-slate-500 font-medium">
                    9001:2015 & 3900:2012
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Reviews Badge */}
            <div className="absolute -top-9 -left-3 sm:left-4 bg-white rounded-2xl shadow-xl p-3.5 border border-slate-200">
              <div className="flex items-center gap-1 mb-1 text-[#F28A32]">
                {[1, 2, 3, 4, 5].map((i) => (
                  <svg key={i} className="w-3.5 h-3.5 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <div className="text-xs font-bold text-[#082F52]">
                4.9 on Google
              </div>
              <div className="text-[11px] text-slate-500 font-medium">
                305+ Verified Reviews
              </div>
            </div>
          </div>

          {/* Right: Features */}
          <div className="lg:col-span-7">
            <div className="reveal mb-8">
              <span className="inline-block bg-red-50 text-[#E53935] text-xs font-semibold uppercase tracking-[0.08em] px-4 py-1.5 rounded-full mb-4 border border-red-200">
                Why Choose Us
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-display font-bold text-[#082F52] mb-4 tracking-tight leading-tight">
                Kolkata&apos;s Trusted Moving Specialists
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                With 15+ years of verified relocation experience and 58,000+ safe deliveries, we combine disciplined handling with modern logistics infrastructure.
              </p>
            </div>

            {/* Features Bento Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((f, index) => (
                <div
                  key={f.title}
                  className="reveal flex items-start gap-3.5 p-4 bg-white rounded-2xl border-2 border-[#082F52] shadow-[0_4px_14px_rgba(8,47,82,0.06)] hover:border-[#F28A32] hover:shadow-[0_10px_24px_-4px_rgba(242,138,50,0.18),0_4px_12px_-2px_rgba(229,57,53,0.14)] hover:-translate-y-1 transition-all duration-300 group"
                  style={{ transitionDelay: `${index * 60}ms` }}
                >
                  <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200/80 text-[#082F52] flex items-center justify-center flex-shrink-0 group-hover:bg-[#E53935] group-hover:text-white group-hover:border-[#E53935] transition-all duration-200 shadow-xs">
                    {f.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-[#082F52] text-sm mb-1 font-display">
                      {f.title}
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-[13px] leading-relaxed">
                      {f.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
