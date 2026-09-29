'use client';

import React, { useState, useCallback } from 'react';
import Link from 'next/link';
import { galleryImages } from '@/data/gallery';

// ── Lightbox Component ─────────────────────────────────────────────────────────
function Lightbox({
  images,
  index,
  onClose,
  onPrev,
  onNext,
}: {
  images: typeof galleryImages;
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  const img = images[index];
  return (
    <div
      className="fixed inset-0 z-[999] flex items-center justify-center bg-black/95 backdrop-blur-sm"
      onClick={onClose}
    >
      {/* Close */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full w-10 h-10 flex items-center justify-center transition-all"
        aria-label="Close"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* Prev */}
      {index > 0 && (
        <button
          onClick={(e) => { e.stopPropagation(); onPrev(); }}
          className="absolute left-3 sm:left-6 z-10 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full w-10 h-10 flex items-center justify-center transition-all"
          aria-label="Previous image"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      )}

      {/* Image */}
      <div
        className="max-w-[92vw] max-h-[88vh] flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={img.src}
          alt={img.alt}
          className="max-w-full max-h-[88vh] w-auto h-auto object-contain rounded-xl shadow-2xl"
        />
      </div>

      {/* Next */}
      {index < images.length - 1 && (
        <button
          onClick={(e) => { e.stopPropagation(); onNext(); }}
          className="absolute right-3 sm:right-6 z-10 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full w-10 h-10 flex items-center justify-center transition-all"
          aria-label="Next image"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      )}

      {/* Counter */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/50 text-sm font-medium">
        {index + 1} / {images.length}
      </div>
    </div>
  );
}

// ── Main Gallery Client Component ──────────────────────────────────────────────
export default function GalleryGrid() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = useCallback((i: number) => setLightboxIndex(i), []);
  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const prevImage = useCallback(() =>
    setLightboxIndex((i) => (i !== null && i > 0 ? i - 1 : i)), []);
  const nextImage = useCallback(() =>
    setLightboxIndex((i) => (i !== null && i < galleryImages.length - 1 ? i + 1 : i)), []);

  if (galleryImages.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-24 text-center">
        <div className="w-20 h-20 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6">
          <svg className="w-10 h-10 text-white/30" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M13.5 12h.008v.008H13.5V12zm0 0H13.5m4.5-4.5H6.75A2.25 2.25 0 004.5 9.75v10.5A2.25 2.25 0 006.75 22.5h10.5A2.25 2.25 0 0019.5 20.25V9.75A2.25 2.25 0 0017.25 7.5z" />
          </svg>
        </div>
        <p className="text-white/40 text-sm max-w-xs">
          Images coming soon. Drop your photos in{' '}
          <code className="text-[#F28A32] font-mono text-xs bg-white/5 px-1.5 py-0.5 rounded">
            public/images/gallery/
          </code>{' '}
          and add filenames to{' '}
          <code className="text-[#F28A32] font-mono text-xs bg-white/5 px-1.5 py-0.5 rounded">
            src/data/gallery.ts
          </code>
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <>
      {/* Gallery Grid — masonry-style columns */}
      <div className="columns-2 sm:columns-3 lg:columns-4 xl:columns-5 gap-2 sm:gap-3 space-y-2 sm:space-y-3">
        {galleryImages.map((img, i) => (
          <div
            key={i}
            className="break-inside-avoid cursor-pointer group relative overflow-hidden rounded-lg"
            onClick={() => openLightbox(i)}
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105 group-hover:brightness-90"
              loading="lazy"
            />
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <Lightbox
          images={galleryImages}
          index={lightboxIndex}
          onClose={closeLightbox}
          onPrev={prevImage}
          onNext={nextImage}
        />
      )}
    </>
  );
}
