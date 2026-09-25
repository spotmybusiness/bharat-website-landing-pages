'use client';

import React, { useEffect, useRef, useState } from 'react';

interface StatItem {
  end: number;
  suffix: string;
  label: string;
  prefix?: string;
}

const stats: StatItem[] = [
  { end: 58000, suffix: '+', label: 'Packages Delivered' },
  { end: 230, suffix: '+', label: 'Cities Covered' },
  { end: 4.9, suffix: '★', label: 'Google Rating' },
  { end: 305, suffix: '+', label: 'Verified Reviews' },
  { end: 98, suffix: '%', label: 'Customer Satisfaction' },
  { end: 15, suffix: '+', label: 'Years Experience' },
];

function useCounter(end: number, duration: number, started: boolean) {
  const [count, setCount] = useState(end);

  useEffect(() => {
    if (!started) return;

    if (
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      setCount(end);
      return;
    }

    setCount(0);
    let startTime: number | null = null;
    let animationFrameId: number;
    const isDecimal = end % 1 !== 0;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = isDecimal ? Math.round(eased * end * 10) / 10 : Math.floor(eased * end);
      setCount(current);
      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step);
      } else {
        setCount(end);
      }
    };

    animationFrameId = requestAnimationFrame(step);
    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [started, end, duration]);

  return count;
}

function StatCard({ stat, started, index }: { stat: StatItem; started: boolean; index: number }) {
  const count = useCounter(stat.end, 1800, started);
  const display = stat.end % 1 !== 0 ? count.toFixed(1) : count.toLocaleString('en-IN');

  return (
    <div
      className="text-center p-5 sm:p-6 transition-all duration-500"
      style={{ transitionDelay: `${index * 70}ms` }}
    >
      <div className="text-3xl sm:text-4xl lg:text-[2.65rem] font-extrabold text-white counter-num mb-1 tracking-tight font-display">
        {stat.prefix}
        {display}
        <span className="text-[#F28A32] ml-0.5">{stat.suffix}</span>
      </div>
      <div className="text-white/80 text-xs sm:text-[13px] font-medium tracking-[0.04em] uppercase">
        {stat.label}
      </div>
    </div>
  );
}

export default function StatsSection() {
  const [started, setStarted] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-[#082f52] py-16 relative overflow-hidden border-y border-white/10 shadow-lg text-white"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#F28A32]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
          {stats.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} started={started} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
