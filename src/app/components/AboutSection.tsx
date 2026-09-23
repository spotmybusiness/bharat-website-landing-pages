'use client';

import React, { useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';

const keyPillars = [
  {
    title: 'Professional Handling',
    desc: 'Trained personnel for delicate items, modular furniture, electronics, and fragile crockery.',
    icon: (
      <svg
        className="w-5 h-5 text-[#E53935]"
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
    title: 'Safe & Organized Packing',
    desc: 'Multi-layer corrugated boxing, high-density bubble wrap, corner guards, and custom crating.',
    icon: (
      <svg
        className="w-5 h-5 text-[#E53935]"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
        />
      </svg>
    ),
  },
  {
    title: 'Transparent Communication',
    desc: 'Clear upfront pricing with zero hidden surcharges and continuous milestone updates.',
    icon: (
      <svg
        className="w-5 h-5 text-[#E53935]"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
        />
      </svg>
    ),
  },
  {
    title: 'Door-to-Door Relocation',
    desc: 'Complete start-to-finish handling from pickup address straight into your new rooms.',
    icon: (
      <svg
        className="w-5 h-5 text-[#E53935]"
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

export default function AboutSection() {
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
      id="about"
      ref={sectionRef}
      className="py-24 bg-slate-50/70 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Image with Floating Stat Badge */}
          <div className="lg:col-span-5 relative reveal">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] sm:aspect-[1/1] lg:aspect-[4/5] border border-slate-200">
              <AppImage
                src="/images/figures.png"
                alt="Bharat Relocators team professionally packing and organizing goods for transit"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
            </div>

            {/* Floating Experience Badge */}
            <div className="absolute -bottom-6 -right-3 sm:right-15 bg-white rounded-2xl shadow-xl p-5 border border-slate-200 max-w-xs">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center text-[#E53935] flex-shrink-0">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a10.993 10.993 0 00-.022 1.949v3.084a1 1 0 00.553.894l4.5 2.25a1 1 0 00.894 0l4.5-2.25a1 1 0 00.553-.894v-3.084c0-.655-.008-1.306-.022-1.949L18.75 6.92a1 1 0 000-1.84l-7-3zM6.75 10.793l3.25 1.625 3.25-1.625v2.332L10 14.737l-3.25-1.612v-2.332z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xl font-extrabold text-[#082F52] font-display">
                    15+ Years
                  </div>
                  <div className="text-xs text-slate-500 font-medium">
                    Trusted Relocation Services
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial About Content */}
          <div className="lg:col-span-7 reveal">
            <span className="inline-block bg-red-50 text-[#E53935] text-xs font-semibold uppercase tracking-[0.08em] px-4 py-1.5 rounded-full mb-4 border border-red-200">
              About Bharat Relocators
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-display font-bold text-[#082F52] mb-5 leading-tight tracking-tight">
              Moving More Than Belongings.{' '}
              <span className="text-[#E53935]">
                Moving Lives Forward.
              </span>
            </h2>

            <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed mb-8">
              <p>
                Bharat Relocators is a professional packers and movers service based in Behala,
                Kolkata, helping individuals, families and businesses move their belongings safely
                from one place to another.
              </p>
              <p>
                From household shifting and office relocation to car, bike and parcel
                transportation, our focus is on careful handling, organized packing, dependable
                transportation and clear communication throughout the moving process.
              </p>
              <p>
                With ISO 9001:2015 and ISO 3900:2012 certified processes, our verified team uses
                specialized multi-layer packing materials and dedicated carrier vehicles to ensure
                complete safety from doorstep pickup to final delivery.
              </p>
            </div>

            {/* Trust-to-action CTA */}
            <div className="bg-emerald-50 border border-emerald-100 p-5 rounded-2xl mb-8 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
              <p className="text-sm text-emerald-800 font-medium m-0">Ready to experience a stress-free relocation with our certified team?</p>
              <a href="/contact" className="bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors shrink-0 shadow-sm flex items-center gap-2">
                Contact Us Today <span aria-hidden="true">&rarr;</span>
              </a>
            </div>

            {/* 4 Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {keyPillars.map((pillar) => (
                <div
                  key={pillar.title}
                  className="bg-white p-4 rounded-2xl border border-slate-200 hover:border-[#1478B5]/50 shadow-xs hover:shadow-md transition-all duration-200"
                >
                  <div className="flex items-center gap-2.5 mb-1.5">
                    <div className="w-8 h-8 rounded-lg bg-red-50 flex items-center justify-center flex-shrink-0">
                      {pillar.icon}
                    </div>
                    <h3 className="font-bold text-[#082F52] text-sm font-display">
                      {pillar.title}
                    </h3>
                  </div>
                  <p className="text-slate-600 text-xs sm:text-[13px] leading-relaxed pl-10.5">
                    {pillar.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA row */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#quote"
                className="inline-flex items-center gap-2 bg-[#E53935] hover:bg-[#c62828] text-white font-semibold text-sm px-6 py-3.5 rounded-xl shadow-md transition-all duration-200"
              >
                Plan Your Relocation
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>

              <a
                href="tel:+919123046504"
                className="inline-flex items-center gap-2 text-[#082F52] font-semibold text-sm px-5 py-3 hover:text-[#E53935] transition-colors"
              >
                <svg className="w-4 h-4 text-[#E53935]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
                </svg>
                Speak with Relocation Expert
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
