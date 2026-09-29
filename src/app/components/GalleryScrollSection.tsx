import React from 'react';
import Link from 'next/link';
import { galleryImages } from '@/data/gallery';

// Fallback placeholder tiles when no images are added yet
const PLACEHOLDER_COUNT = 12;

export default function GalleryScrollSection() {
  const hasImages = galleryImages.length > 0;

  // Duplicate images for seamless infinite loop (need at least 2 copies)
  const displayItems = hasImages
    ? [...galleryImages, ...galleryImages, ...galleryImages]
    : Array.from({ length: PLACEHOLDER_COUNT * 3 }, (_, i) => ({
        src: '',
        alt: `Gallery preview ${(i % PLACEHOLDER_COUNT) + 1}`,
      }));

  return (
    <section className="bg-[#071A2B] py-14 sm:py-20 overflow-hidden w-full">
      {/* ── Header ─────────────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-10 flex items-end justify-between gap-4">
        <div>
          <p className="text-[#F28A32] text-xs font-semibold uppercase tracking-widest mb-2">
            Our Work
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight font-display">
            Gallery
          </h2>
          <p className="mt-2 text-white/55 text-sm sm:text-base">
            Real moves. Real care. Every single time.
          </p>
        </div>
        <Link
          href="/gallery"
          className="shrink-0 inline-flex items-center gap-2 text-sm font-semibold text-[#F28A32] hover:text-white border border-[#F28A32]/40 hover:border-white/30 px-4 py-2 rounded-xl transition-all"
        >
          View All
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Link>
      </div>

      {/* ── Infinite Scroll Strip (Single Row) ───────────────────────── */}
      <Link href="/gallery" className="block group cursor-pointer overflow-hidden w-full" aria-label="Open gallery">
        {/* Single Row — scrolls left at a calm, smooth pace */}
        <div className="relative overflow-hidden marquee-mask py-2 w-full max-w-full">
          <div className="flex w-max gap-4 sm:gap-6 animate-marquee-left group-hover:[animation-play-state:paused] hover:[animation-play-state:paused]">
            {displayItems.map((img, i) => (
              <div
                key={i}
                className="relative w-64 h-44 sm:w-80 sm:h-56 md:w-96 md:h-64 shrink-0 rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 bg-white/5 group-hover:border-white/25 shadow-xl shadow-black/25 transition-all duration-300"
              >
                {img.src ? (
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                ) : (
                  /* Placeholder shimmer */
                  <div className="w-full h-full bg-gradient-to-br from-white/5 to-white/[0.02] flex items-center justify-center">
                    <svg className="w-12 h-12 text-white/20" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M13.5 12h.008v.008H13.5V12z" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Tap hint overlay */}
        <div className="mt-8 flex justify-center">
          <span className="inline-flex items-center gap-2 text-white/40 text-xs font-medium group-hover:text-white/70 transition-colors">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225M13.684 16.6l2.224-2.51M6.116 7.358L7.474 12.43m0 0l2.51-2.224M7.474 12.43l-2.224 2.51M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707" />
            </svg>
            Tap to view full gallery
          </span>
        </div>
      </Link>
    </section>
  );
}
