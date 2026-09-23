import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import PageLayout from '@/components/PageLayout';
import { generatePageMetadata } from '@/lib/metadata';
import { footerServiceLinks } from '@/lib/navigation';

export const metadata: Metadata = generatePageMetadata({
  title: 'Page Not Found (404)',
  description: 'The requested page could not be found on Bharat Relocators.',
  path: '/404',
  noIndex: true,
});

export default function NotFound() {
  return (
    <PageLayout smoothScroll={false}>
      <div className="py-24 sm:py-32 bg-slate-50/70 dot-pattern min-h-[70vh] flex items-center justify-center">
        <div className="max-w-xl mx-auto px-4 sm:px-6 text-center">
          <span className="text-7xl sm:text-8xl font-black font-display text-slate-200 block mb-2 select-none">
            404
          </span>

          <h1 className="text-2xl sm:text-3xl font-extrabold font-display text-[#082F52] mb-3">
            Page Not Found
          </h1>

          <p className="text-slate-600 text-sm leading-relaxed mb-8 max-w-md mx-auto">
            The page you are looking for does not exist, has been removed, or has been relocated during our system update.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-10">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 bg-[#E53935] hover:bg-[#c62828] text-white px-6 py-3.5 rounded-xl font-semibold text-sm shadow-md transition-colors"
            >
              Back to Home
            </Link>

            <Link
              href="/get-a-quote"
              className="inline-flex items-center justify-center gap-2 bg-[#082F52] hover:bg-[#0b3b60] text-white px-6 py-3.5 rounded-xl font-semibold text-sm shadow-md transition-colors"
            >
              Get Moving Quote
            </Link>
          </div>

          <div className="border-t border-slate-200/80 pt-6">
            <p className="text-xs text-slate-500 font-medium mb-3 uppercase tracking-wider">
              Popular Relocation Services
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {footerServiceLinks.slice(0, 4).map((service) => (
                <Link
                  key={service.label}
                  href={service.href}
                  className="text-xs bg-white border border-slate-200 text-slate-700 px-3 py-1.5 rounded-lg hover:border-[#E53935] hover:text-[#E53935] transition-colors"
                >
                  {service.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
