import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import PageLayout from '@/components/PageLayout';
import GalleryGrid from './GalleryGrid';

export const metadata: Metadata = {
  title: 'Gallery | Bharat Relocators – Packers & Movers Kolkata',
  description:
    'Browse our photo gallery — see how Bharat Relocators handles household shifting, car transportation, bike shifting, office relocation, and more across Kolkata and India.',
  openGraph: {
    title: 'Gallery | Bharat Relocators',
    description: 'Photos of our relocation services across Kolkata and India.',
  },
};

export default function GalleryPage() {
  return (
    <PageLayout>
      {/* ── Page Header ─────────────────────────────────────────────────── */}
      <section className="pt-32 pb-8 bg-[#071A2B] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="mb-4 flex items-center gap-2 text-xs text-white/40">
            <Link href="/" className="hover:text-white/70 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white/70">Gallery</span>
          </nav>

          <div className="flex items-end justify-between gap-4 flex-wrap">
            <div>
              <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-display text-white">
                Our Gallery
              </h1>
              <p className="mt-2 text-white/60 text-sm sm:text-base max-w-xl">
                A look at how we pack, move, and deliver — every shift, handled with care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Gallery Grid ─────────────────────────────────────────────────── */}
      <section className="bg-[#071A2B] min-h-screen pt-4 pb-16">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
          <GalleryGrid />
        </div>
      </section>
    </PageLayout>
  );
}
