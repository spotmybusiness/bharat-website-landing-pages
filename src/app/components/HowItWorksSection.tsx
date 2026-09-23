'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';

interface Step {
  step: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
  highlights: string[];
}

const steps: Step[] = [
  {
    step: '01',
    title: 'Survey & Custom Quote',
    subtitle: 'Step 1 · Planning',
    description:
      'Share your relocation details online or via call. Our move coordinators provide a detailed, all-inclusive transparent quote with no hidden charges.',
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
          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
        />
      </svg>
    ),
    highlights: ['Zero hidden charges', 'Instant digital quote', 'Flexible moving dates'],
  },
  {
    step: '02',
    title: 'Multi-Layer Packing',
    subtitle: 'Step 2 · Care & Protection',
    description:
      'Our trained packing team arrives with premium 5-layer corrugated boxes, bubble wraps, corner guards, and custom crating for electronics and furniture.',
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
          d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
        />
      </svg>
    ),
    highlights: ['Fragile crockery care', 'Custom crate protection', 'Systematic item labeling'],
  },
  {
    step: '03',
    title: 'Safe Transit & GPS',
    subtitle: 'Step 3 · Monitored Transit',
    description:
      'Your goods are loaded into dedicated container trucks with shock-absorption padding, live GPS milestone tracking, and full transit insurance.',
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
          d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10l1 1h1m8-1h1l1-1v-3.65a1 1 0 00-.22-.624l-3.48-4.35A1 1 0 0011.52 6H10"
        />
      </svg>
    ),
    highlights: [
      'Live GPS tracking link',
      'Transit insurance coverage',
      'Verified highway drivers',
    ],
  },
  {
    step: '04',
    title: 'Unpack & Setup',
    subtitle: 'Step 4 · Doorstep Handover',
    description:
      'On arrival at your new destination, our crew unloads, unpacks, reassembles your beds and furniture, arranges items room-wise, and removes packing debris.',
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
    highlights: ['Furniture reassembly', 'Room-wise item placement', 'Clean debris removal'],
  },
];

export default function HowItWorksSection() {
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
      id="process"
      ref={sectionRef}
      className="py-24 bg-slate-50/70 relative dot-pattern"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 reveal">
          <span className="inline-block bg-red-50 text-[#E53935] text-xs font-semibold uppercase tracking-[0.08em] px-4 py-1.5 rounded-full mb-4 border border-red-200">
            How It Works
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-display font-bold text-[#082F52] mb-4 tracking-tight">
            Our 4-Step Seamless Moving Process
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            From the initial consultation to assembling furniture in your new home, our structured
            workflow ensures complete peace of mind.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((item, index) => (
            <div
              key={item.step}
              className="reveal relative bg-white rounded-2xl p-6 sm:p-7 border-2 border-[#082F52] shadow-[0_4px_16px_rgba(8,47,82,0.08)] hover:border-[#F28A32] hover:shadow-[0_12px_28px_-6px_rgba(242,138,50,0.18),0_6px_16px_-4px_rgba(229,57,53,0.15)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-11 h-11 rounded-xl bg-slate-100 text-[#082F52] flex items-center justify-center group-hover:bg-[#E53935] group-hover:text-white transition-all duration-200 border border-slate-200/60">
                    {item.icon}
                  </div>
                  <span className="text-2xl sm:text-3xl font-display font-extrabold text-[#E53935] transition-transform duration-200 group-hover:scale-110">
                    {item.step}
                  </span>
                </div>

                <div className="text-[11px] font-semibold text-[#E53935] uppercase tracking-[0.08em] mb-1">
                  {item.subtitle}
                </div>
                <h3 className="text-lg font-bold text-[#082F52] font-display mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              {/* Highlights List */}
              <div className="pt-4 border-t border-slate-100">
                <ul className="space-y-2">
                  {item.highlights.map((point) => (
                    <li
                      key={point}
                      className="flex items-center text-xs text-slate-700 font-medium"
                    >
                      <svg
                        className="w-3.5 h-3.5 text-[#E53935] mr-2 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Process CTA */}
        <div className="mt-14 text-center reveal">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 shadow-md">
            <div className="text-left sm:pr-6 sm:border-r sm:border-slate-200">
              <h4 className="font-bold text-[#082F52] text-sm sm:text-base font-display">
                Ready for a hassle-free moving experience?
              </h4>
              <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                Get your personalized, no-obligation quotation delivered in under 3 hours.
              </p>
            </div>
            <Link
              href="#quote"
              className="inline-flex items-center justify-center px-6 py-3.5 bg-[#E53935] hover:bg-[#c62828] text-white font-semibold text-xs sm:text-sm rounded-xl shadow-md transition-all flex-shrink-0"
            >
              Get Free Moving Quote
              <svg
                className="w-4 h-4 ml-2"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
