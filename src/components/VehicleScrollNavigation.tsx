'use client';

import React, { useEffect, useState, useRef } from 'react';

interface Checkpoint {
  id: string;
  label: string;
  shortLabel: string;
}

const checkpoints: Checkpoint[] = [
  { id: 'hero', label: 'Origin (Start)', shortLabel: 'Start' },
  { id: 'services', label: 'Services Suite', shortLabel: 'Services' },
  { id: 'process', label: '4-Step Process', shortLabel: 'Process' },
  { id: 'why-us', label: 'Why Bharat', shortLabel: 'Why Us' },
  { id: 'reviews', label: 'Client Reviews', shortLabel: 'Reviews' },
  { id: 'quote', label: 'Destination (Quote)', shortLabel: 'Quote' },
];

export default function VehicleScrollNavigation() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('hero');
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const updateNavProgress = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll <= 0) return;
      const current = window.scrollY / totalScroll;
      setScrollProgress(Math.min(Math.max(current, 0), 1));

      // Determine active section
      const scrollPos = window.scrollY + window.innerHeight * 0.35;
      for (let i = checkpoints.length - 1; i >= 0; i--) {
        const el = document.getElementById(checkpoints[i].id);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(checkpoints[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', updateNavProgress, { passive: true });
    updateNavProgress();

    return () => {
      window.removeEventListener('scroll', updateNavProgress);
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isMobileOpen) {
        setIsMobileOpen(false);
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isMobileOpen]);

  const scrollToSection = (id: string) => {
    setIsMobileOpen(false);
    if (id === 'hero') {
      window.scrollTo({ top: 0, behavior: 'auto' });
      return;
    }
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'auto', block: 'start' });
    }
  };

  return (
    <>
      {/* Desktop Floating Right Rail Route Navigation */}
      <aside
        ref={navRef}
        aria-label="Interactive Moving Route Navigation"
        className="fixed right-4 lg:right-6 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col items-end transition-all duration-300"
      >
        <div className="relative bg-[#082f52]/85 backdrop-blur-xl border border-white/15 rounded-3xl p-3 shadow-2xl flex flex-col items-center">
          {/* Header Tag */}
          <div className="text-[9px] font-extrabold uppercase tracking-wider text-[#F28A32] mb-3 select-none">
            Route
          </div>

          {/* Road Track */}
          <div className="relative w-1.5 h-64 bg-white/15 rounded-full overflow-hidden flex flex-col justify-between">
            {/* Animated Progress Fill */}
            <div
              className="w-full bg-gradient-to-b from-[#E53935] via-[#F28A32] to-[#1478B5] rounded-full transition-all duration-150"
              style={{ height: `${scrollProgress * 100}%` }}
            />
          </div>

          {/* Moving Mini Vehicle Icon */}
          <div
            className="absolute left-1/2 -translate-x-1/2 transition-transform duration-150 pointer-events-none"
            style={{
              top: `calc(2.2rem + ${scrollProgress * 16}rem - 10px)`,
            }}
          >
            <div className="w-8 h-8 rounded-full bg-[#E53935] text-white flex items-center justify-center shadow-lg border-2 border-white animate-bounce-subtle">
              <svg className="w-4 h-4 transform -rotate-90" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.4-1.7-1.1-2.2l-2.4-1.8c-.5-.4-1-.6-1.6-.6H14V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v11h2c0 1.7 1.3 3 3 3s3-1.3 3-3h4c0 1.7 1.3 3 3 3s3-1.3 3-3zM7 18c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zm10 0c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zM14 11V7.5h-1.5V11H14zm1.5 0h2.4l1.6 1.2v.8H15.5V11z" />
              </svg>
            </div>
          </div>
        </div>
      </aside>

      {/* Mobile Floating Quick Route Pill */}
      <div className="fixed bottom-5 left-4 z-40 md:hidden flex items-center">
        <button
          type="button"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="flex items-center gap-2 bg-[#082f52]/90 backdrop-blur-xl border border-white/20 text-white px-3.5 py-2 rounded-full shadow-xl text-xs font-bold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F28A32]"
          aria-expanded={isMobileOpen}
          aria-controls="mobile-waypoint-menu"
          aria-label="Toggle Route Navigation"
        >
          <span className="w-5 h-5 rounded-full bg-[#E53935] text-white flex items-center justify-center text-[10px]" aria-hidden="true">
            🚚
          </span>
          <span className="text-[#F28A32]">{Math.round(scrollProgress * 100)}%</span>
          <span className="text-white/80 font-normal">Route</span>
        </button>

        {/* Mobile Waypoint Modal Menu */}
        {isMobileOpen && (
          <div
            id="mobile-waypoint-menu"
            role="menu"
            aria-label="Moving Waypoints"
            className="absolute bottom-12 left-0 w-52 bg-[#082f52]/95 backdrop-blur-2xl border border-white/20 rounded-2xl p-2 shadow-2xl flex flex-col gap-1 animate-in fade-in slide-in-from-bottom-2 duration-200"
          >
            <div className="px-3 py-1.5 text-[10px] uppercase tracking-wider font-bold text-[#F28A32] border-b border-white/10">
              Moving Waypoints
            </div>
            {checkpoints.map((cp) => (
              <button
                key={cp.id}
                type="button"
                role="menuitem"
                onClick={() => scrollToSection(cp.id)}
                className={`text-left px-3 py-2 text-xs font-semibold rounded-xl transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E53935] ${
                  activeSection === cp.id
                    ? 'bg-[#E53935] text-white font-bold'
                    : 'text-white/80 hover:bg-white/10'
                }`}
              >
                {cp.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
