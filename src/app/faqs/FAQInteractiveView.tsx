'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { FAQ_CATEGORIES } from '@/data/faqs';

export default function FAQInteractiveView() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({
    'general-0': true,
  });

  const toggleItem = (key: string) => {
    setOpenItems((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const filteredCategories = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return FAQ_CATEGORIES.map((category) => {
      // Category tab filtering
      if (activeCategory !== 'all' && category.id !== activeCategory) {
        return null;
      }

      // Search query filtering
      const matchingFaqs = category.faqs.filter((faq) => {
        if (!query) return true;
        return (
          faq.q.toLowerCase().includes(query) ||
          faq.a.toLowerCase().includes(query) ||
          (faq.category && faq.category.toLowerCase().includes(query))
        );
      });

      if (matchingFaqs.length === 0) return null;

      return {
        ...category,
        faqs: matchingFaqs,
      };
    }).filter(Boolean) as typeof FAQ_CATEGORIES;
  }, [searchQuery, activeCategory]);

  const totalMatches = useMemo(() => {
    return filteredCategories.reduce((acc, cat) => acc + cat.faqs.length, 0);
  }, [filteredCategories]);

  return (
    <div>
      {/* Search Input Field */}
      <div className="max-w-2xl mx-auto mb-10">
        <div className="relative">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search questions (e.g., packing, car carrier, pricing, timeline)..."
            aria-label="Search frequently asked questions"
            className="w-full bg-white text-[#082F52] placeholder:text-slate-400 text-sm sm:text-base pl-12 pr-10 py-4 rounded-2xl border border-slate-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#E53935]/40 focus:border-[#E53935] transition-all"
          />
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery('')}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-1"
              aria-label="Clear search"
            >
              ✕
            </button>
          )}
        </div>

        {searchQuery && (
          <div className="mt-3 text-center text-xs text-slate-500">
            Found <strong className="text-[#082F52] font-semibold">{totalMatches}</strong> matching questions
          </div>
        )}
      </div>

      {/* Category Navigation Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-14">
        <button
          type="button"
          onClick={() => setActiveCategory('all')}
          className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
            activeCategory === 'all'
              ? 'bg-[#082F52] text-white shadow-sm'
              : 'bg-white text-slate-600 hover:text-[#082F52] hover:bg-slate-100 border border-slate-200'
          }`}
        >
          All Topics
        </button>

        {FAQ_CATEGORIES.map((cat) => {
          const isSelected = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                isSelected
                  ? 'bg-[#082F52] text-white shadow-sm'
                  : 'bg-white text-slate-600 hover:text-[#082F52] hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat.shortName}
            </button>
          );
        })}
      </div>

      {/* Empty State */}
      {filteredCategories.length === 0 ? (
        <div className="bg-white rounded-3xl p-10 sm:p-14 text-center border border-slate-200 max-w-lg mx-auto shadow-sm">
          <div className="w-12 h-12 rounded-2xl bg-red-50 text-[#E53935] flex items-center justify-center mx-auto mb-4">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="text-lg font-bold text-[#082F52] font-display mb-2">
            No matching questions found
          </h3>
          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
            We couldn&apos;t find answers matching &ldquo;{searchQuery}&rdquo;. Feel free to discuss your specific moving query directly with our coordinators.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              type="button"
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('all');
              }}
              className="text-xs font-bold text-[#E53935] hover:underline px-4 py-2"
            >
              Clear Search Filters
            </button>
            <Link
              href="/contact"
              className="bg-[#082F52] hover:bg-[#071A2B] text-white text-xs font-semibold px-5 py-2.5 rounded-xl shadow-xs transition-colors"
            >
              Contact Our Desk →
            </Link>
          </div>
        </div>
      ) : (
        /* Categorized Accordions */
        <div className="space-y-12 sm:space-y-16">
          {filteredCategories.map((category) => (
            <section
              key={category.id}
              id={category.id}
              className="scroll-mt-28 bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-200/80 shadow-xs"
            >
              <div className="mb-8">
                <span className="text-[11px] font-bold text-[#F28A32] uppercase tracking-wider block mb-1">
                  Topic Category
                </span>
                <h3 className="text-xl sm:text-2xl font-bold font-display text-[#082F52] mb-1.5">
                  {category.name}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500">
                  {category.description}
                </p>
              </div>

              {/* Accordion Questions List */}
              <div className="space-y-3.5">
                {category.faqs.map((faq, idx) => {
                  const itemKey = `${category.id}-${idx}`;
                  const isOpen = !!openItems[itemKey];

                  return (
                    <div
                      key={faq.q}
                      className={`border rounded-2xl overflow-hidden transition-all duration-200 ${
                        isOpen
                          ? 'border-[#E53935]/40 bg-slate-50/50 shadow-xs ring-1 ring-[#E53935]/15'
                          : 'border-slate-200/90 bg-white hover:border-[#1478B5]/40'
                      }`}
                    >
                      <button
                        type="button"
                        onClick={() => toggleItem(itemKey)}
                        aria-expanded={isOpen}
                        className="w-full flex items-center justify-between gap-4 px-5 py-4 sm:px-6 sm:py-4.5 text-left focus:outline-none focus:ring-2 focus:ring-[#E53935]/30 rounded-2xl cursor-pointer"
                      >
                        <span
                          className={`font-semibold text-sm sm:text-base font-display transition-colors ${
                            isOpen ? 'text-[#E53935]' : 'text-[#082F52]'
                          }`}
                        >
                          {faq.q}
                        </span>
                        <span
                          className={`shrink-0 w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center transition-all duration-200 ${
                            isOpen
                              ? 'bg-[#E53935] text-white rotate-45'
                              : 'bg-slate-100 text-slate-500'
                          }`}
                        >
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                          </svg>
                        </span>
                      </button>

                      {isOpen && (
                        <div className="px-5 pb-5 sm:px-6 sm:pb-5 pt-1 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 mt-1">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Service Quick Links if viewing services category */}
              {category.id === 'services' && (
                <div className="mt-8 pt-6 border-t border-slate-100 flex flex-wrap items-center gap-3">
                  <span className="text-xs font-semibold text-slate-500">Explore Service Details:</span>
                  <Link href="/household-shifting" className="text-xs text-[#082F52] hover:text-[#E53935] font-semibold underline underline-offset-2">
                    Household Shifting
                  </Link>
                  <span className="text-slate-300">•</span>
                  <Link href="/car-shifting" className="text-xs text-[#082F52] hover:text-[#E53935] font-semibold underline underline-offset-2">
                    Car Transportation
                  </Link>
                  <span className="text-slate-300">•</span>
                  <Link href="/bike-shifting" className="text-xs text-[#082F52] hover:text-[#E53935] font-semibold underline underline-offset-2">
                    Bike Transport
                  </Link>
                  <span className="text-slate-300">•</span>
                  <Link href="/office-relocation" className="text-xs text-[#082F52] hover:text-[#E53935] font-semibold underline underline-offset-2">
                    Office Relocation
                  </Link>
                  <span className="text-slate-300">•</span>
                  <Link href="/parcel-shifting" className="text-xs text-[#082F52] hover:text-[#E53935] font-semibold underline underline-offset-2">
                    Parcel Cargo
                  </Link>
                  <span className="text-slate-300">•</span>
                  <Link href="/international-moving" className="text-xs text-[#082F52] hover:text-[#E53935] font-semibold underline underline-offset-2">
                    International
                  </Link>
                </div>
              )}
            </section>
          ))}
        </div>
      )}
    </div>
  );
}
