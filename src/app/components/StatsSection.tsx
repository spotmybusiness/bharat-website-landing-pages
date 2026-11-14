import React from 'react';

interface StatItem {
  display: string;
  suffix: string;
  label: string;
  prefix?: string;
}

const stats: StatItem[] = [
  { display: '58,000', suffix: '+', label: 'Packages Delivered' },
  { display: '230', suffix: '+', label: 'Cities Connected' },
  { display: '4.9', suffix: '★', label: 'Google Rating' },
  { display: '306', suffix: '+', label: 'Reviews' },
  { display: '98', suffix: '%', label: 'Customer Satisfaction' },
  { display: '15', suffix: '+', label: 'Years Experience' },
];

export default function StatsSection() {
  return (
    <section
      aria-label="Verified relocation statistics"
      className="bg-[#082f52] py-16 relative overflow-hidden border-y border-white/10 shadow-lg text-white"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#F28A32]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center p-5 sm:p-6">
              <div className="text-3xl sm:text-4xl lg:text-[2.65rem] font-extrabold text-white counter-num mb-1 tracking-tight font-display">
                {stat.prefix}
                {stat.display}
                <span className="text-[#F28A32] ml-0.5">{stat.suffix}</span>
              </div>
              <div className="text-white/80 text-xs sm:text-[13px] font-medium tracking-[0.04em] uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
