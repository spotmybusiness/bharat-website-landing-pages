'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { BUSINESS, getWhatsAppUrl, getTelUrl } from '@/lib/business';

export default function CostCalculator() {
  const [bhk, setBhk] = useState<'1bhk' | '2bhk' | '3bhk' | '4bhk'>('2bhk');
  const [distance, setDistance] = useState<'short' | 'medium' | 'long' | 'intercity'>('medium');
  const [liftStatus, setLiftStatus] = useState<'both' | 'one' | 'none'>('both');

  // Estimation calculation model
  const estimateData = {
    '1bhk': {
      label: '1 BHK Apartment',
      truck: 'Tata Ace / 9ft Bolero Pickup',
      crew: '2 – 3 Men',
      baseCosts: {
        short: { min: 4500, max: 6500 },
        medium: { min: 5500, max: 7800 },
        long: { min: 6500, max: 8800 },
        intercity: { min: 14000, max: 24000 },
      },
    },
    '2bhk': {
      label: '2 BHK Apartment',
      truck: '14ft Closed-Body Container',
      crew: '3 – 4 Men',
      baseCosts: {
        short: { min: 7500, max: 10500 },
        medium: { min: 8800, max: 12500 },
        long: { min: 10500, max: 14000 },
        intercity: { min: 22000, max: 36000 },
      },
    },
    '3bhk': {
      label: '3 BHK Apartment',
      truck: '17ft / 19ft Closed Truck',
      crew: '4 – 5 Men',
      baseCosts: {
        short: { min: 11000, max: 15500 },
        medium: { min: 13000, max: 17500 },
        long: { min: 15000, max: 20000 },
        intercity: { min: 32000, max: 52000 },
      },
    },
    '4bhk': {
      label: '4+ BHK / Villa',
      truck: '19ft / 22ft Dedicated Heavy Carrier',
      crew: '5 – 7 Men',
      baseCosts: {
        short: { min: 16000, max: 22000 },
        medium: { min: 19000, max: 26000 },
        long: { min: 22000, max: 29000 },
        intercity: { min: 45000, max: 75000 },
      },
    },
  };

  const currentSelection = estimateData[bhk];
  const baseRange = currentSelection.baseCosts[distance];

  let liftSurcharge = 0;
  if (liftStatus === 'one') {
    liftSurcharge = distance === 'intercity' ? 1200 : 800;
  } else if (liftStatus === 'none') {
    liftSurcharge = distance === 'intercity' ? 2400 : 1600;
  }

  const finalMin = baseRange.min + liftSurcharge;
  const finalMax = baseRange.max + liftSurcharge;

  const distanceLabels = {
    short: 'Local (< 10 km)',
    medium: 'City Corridor (10 – 25 km)',
    long: 'Extended Suburban (25 – 45 km)',
    intercity: 'Intercity (500+ km)',
  };

  const liftLabels = {
    both: 'Lift Available at Both Homes',
    one: 'No Lift at 1 Location',
    none: 'No Lift at Both Locations',
  };

  const waMessage = `Hi Bharat Relocators, I calculated an estimate on your website for a ${currentSelection.label} (${distanceLabels[distance]}, ${liftLabels[liftStatus]}). Estimated: ₹${finalMin.toLocaleString()} - ₹${finalMax.toLocaleString()}. Please provide an exact written quote!`;
  const waUrl = getWhatsAppUrl(waMessage);

  return (
    <div className="bg-white rounded-3xl border-2 border-[#082F52]/15 shadow-xl p-6 sm:p-8 lg:p-10">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
        <div>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-red-50 text-[#E53935] border border-red-200">
            <span className="w-2 h-2 rounded-full bg-[#E53935] animate-pulse" />
            Interactive Tool
          </span>
          <h3 className="text-xl sm:text-2xl font-display font-bold text-[#082F52] mt-2">
            2026 Kolkata Moving Cost Estimator
          </h3>
          <p className="text-slate-500 text-sm mt-1">
            Calculate instant estimated charges for your specific home size, corridor, and building type.
          </p>
        </div>
        <div className="shrink-0 bg-slate-50 px-4 py-2 rounded-2xl border border-slate-200 text-right">
          <span className="text-[11px] font-semibold text-slate-400 block uppercase">Updated</span>
          <span className="text-xs font-bold text-[#082F52]">2026 Rate Card Baseline</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-8">
        {/* Left Inputs */}
        <div className="lg:col-span-7 space-y-6">
          {/* Step 1: BHK Size */}
          <div>
            <label className="block text-xs font-bold text-[#082F52] uppercase tracking-wider mb-2.5">
              1. Select Home Size / Move Volume
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {(['1bhk', '2bhk', '3bhk', '4bhk'] as const).map((key) => {
                const isSelected = bhk === key;
                return (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setBhk(key)}
                    className={`py-3 px-3 rounded-xl text-center text-sm font-bold transition-all border ${
                      isSelected
                        ? 'bg-[#082F52] text-white border-[#082F52] shadow-md scale-[1.02]'
                        : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100 hover:border-slate-300'
                    }`}
                  >
                    {key.toUpperCase()}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 2: Distance */}
          <div>
            <label className="block text-xs font-bold text-[#082F52] uppercase tracking-wider mb-2.5">
              2. Shifting Distance / Corridor
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {(['short', 'medium', 'long', 'intercity'] as const).map((distKey) => {
                const isSelected = distance === distKey;
                const labels = {
                  short: { title: 'Local Move (< 10 km)', sub: 'e.g. Haltu to Garia / Jadavpur' },
                  medium: { title: 'City Corridor (10 – 25 km)', sub: 'e.g. Behala to Salt Lake / New Town' },
                  long: { title: 'Cross-Town (25 – 45 km)', sub: 'e.g. Howrah to Barasat' },
                  intercity: { title: 'Interstate / PAN India', sub: 'e.g. Kolkata to Bangalore / Delhi' },
                };
                return (
                  <button
                    key={distKey}
                    type="button"
                    onClick={() => setDistance(distKey)}
                    className={`p-3 rounded-xl text-left transition-all border ${
                      isSelected
                        ? 'bg-red-50/70 border-[#E53935] text-[#082F52] ring-1 ring-[#E53935]'
                        : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
                    }`}
                  >
                    <span className="block text-xs font-bold text-[#082F52]">{labels[distKey].title}</span>
                    <span className="block text-[11px] text-slate-500 mt-0.5">{labels[distKey].sub}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 3: Elevator Availability */}
          <div>
            <label className="block text-xs font-bold text-[#082F52] uppercase tracking-wider mb-2.5">
              3. Elevator / Lift Availability
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              {(['both', 'one', 'none'] as const).map((liftKey) => {
                const isSelected = liftStatus === liftKey;
                const labels = {
                  both: { title: 'Lift at Both', sub: 'No staircase fees' },
                  one: { title: 'No Lift (1 Place)', sub: '+ ₹800 staircase' },
                  none: { title: 'No Lift (Both)', sub: '+ ₹1,600 staircase' },
                };
                return (
                  <button
                    key={liftKey}
                    type="button"
                    onClick={() => setLiftStatus(liftKey)}
                    className={`p-3 rounded-xl text-left transition-all border ${
                      isSelected
                        ? 'bg-[#1478B5]/10 border-[#1478B5] text-[#082F52] ring-1 ring-[#1478B5]'
                        : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
                    }`}
                  >
                    <span className="block text-xs font-bold text-[#082F52]">{labels[liftKey].title}</span>
                    <span className="block text-[11px] text-slate-500 mt-0.5">{labels[liftKey].sub}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Output Card */}
        <div className="lg:col-span-5 flex flex-col justify-between bg-gradient-to-br from-[#082F52] to-[#0A3D6B] rounded-2xl p-6 sm:p-7 text-white shadow-lg">
          <div>
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <span className="text-xs uppercase font-bold text-red-300 tracking-wider">
                Estimated Kolkata Rate
              </span>
              <span className="text-[11px] bg-white/15 px-2.5 py-0.5 rounded-full text-slate-200">
                All-Inclusive
              </span>
            </div>

            <div className="py-6">
              <div className="text-3xl sm:text-4xl font-black font-display tracking-tight text-white">
                ₹{finalMin.toLocaleString()} – ₹{finalMax.toLocaleString()}
              </div>
              <p className="text-slate-300 text-xs mt-1.5">
                Includes 5-layer packing, vehicle transit, loading & unloading crew.
              </p>
            </div>

            <div className="space-y-2.5 pt-2 border-t border-white/10 text-xs text-slate-200">
              <div className="flex items-center justify-between">
                <span className="text-slate-300">Target Move:</span>
                <span className="font-semibold text-white">{currentSelection.label}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-300">Vehicle Type:</span>
                <span className="font-semibold text-white">{currentSelection.truck}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-300">Crew Allocation:</span>
                <span className="font-semibold text-white">{currentSelection.crew}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-300">Staircase Surcharge:</span>
                <span className="font-semibold text-emerald-300">
                  {liftSurcharge === 0 ? '₹0 (Lift at Both)' : `+₹${liftSurcharge.toLocaleString()} included`}
                </span>
              </div>
            </div>
          </div>

          <div className="pt-6 space-y-3 mt-6 border-t border-white/10">
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-sm py-3 px-4 rounded-xl shadow-md transition-colors"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
              </svg>
              Lock Guaranteed Price on WhatsApp
            </a>
            <div className="flex gap-2">
              <Link
                href="/get-a-quote"
                className="flex-1 text-center bg-white/10 hover:bg-white/20 text-white font-semibold text-xs py-2.5 px-3 rounded-xl transition-colors border border-white/20"
              >
                Free Quote Form →
              </Link>
              <a
                href={getTelUrl()}
                className="flex-1 text-center bg-[#E53935] hover:bg-[#c62828] text-white font-semibold text-xs py-2.5 px-3 rounded-xl transition-colors"
              >
                Call: {BUSINESS.phone.primaryFormatted}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
