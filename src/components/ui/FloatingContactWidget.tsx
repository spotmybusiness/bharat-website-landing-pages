'use client';

import React from 'react';
import Link from 'next/link';
import { BUSINESS, getTelUrl } from '@/lib/business';

export default function FloatingContactWidget() {
  return (
    <div className="fixed bottom-4 right-3.5 sm:bottom-6 sm:right-6 z-50 flex flex-col gap-2.5 sm:gap-3">
      {/* 1. Phone Button (First) */}
      <a
        href={getTelUrl(BUSINESS.phone.primary)}
        className="flex items-center justify-center w-11 h-11 sm:w-13 sm:h-13 md:w-14 md:h-14 bg-[#E53935] hover:bg-[#c62828] text-white rounded-full shadow-lg hover:scale-110 active:scale-95 transition-all duration-300 group relative border-2 border-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#E53935]"
        aria-label={`Call Bharat Relocators at ${BUSINESS.phone.primaryFormatted}`}
      >
        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
        </svg>
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-white text-[#E53935] text-xs font-semibold rounded-lg shadow-md opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Call {BUSINESS.phone.primaryFormatted}
        </span>
      </a>

      {/* 2. Track Us Button (Second) */}
      <Link
        href="/tracking"
        className="flex items-center justify-center w-11 h-11 sm:w-13 sm:h-13 md:w-14 md:h-14 bg-[#F28A32] hover:bg-[#e07922] text-white rounded-full shadow-lg hover:scale-110 active:scale-95 transition-all duration-300 group relative border-2 border-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#F28A32]"
        aria-label="Track consignment shipment status"
      >
        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-white text-[#F28A32] text-xs font-bold rounded-lg shadow-md opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Track Us
        </span>
      </Link>

      {/* 3. WhatsApp Button (Third) */}
      <a
        href={`https://wa.me/${BUSINESS.phone.primary.replace(/\s+/g, '')}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-11 h-11 sm:w-13 sm:h-13 md:w-14 md:h-14 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full shadow-lg hover:scale-110 active:scale-95 transition-all duration-300 group relative border-2 border-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-emerald-500"
        aria-label="Chat with Bharat Relocators on WhatsApp"
      >
        <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.558 4.116 1.535 5.847L.057 23.5l5.82-1.527A11.953 11.953 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.891 0-3.66-.5-5.195-1.378l-.373-.22-3.453.906.921-3.365-.242-.388A9.954 9.954 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
        </svg>
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-white text-emerald-700 text-xs font-semibold rounded-lg shadow-md opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Chat on WhatsApp
        </span>
      </a>
    </div>
  );
}
