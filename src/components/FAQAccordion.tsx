'use client';

import React, { useState } from 'react';
import { FAQItem } from '@/data/faqs';

interface FAQAccordionProps {
  items: FAQItem[];
}

export default function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-4">
      {items.map((faq, index) => {
        const isOpen = openIndex === index;

        const questionId = `faq-accordion-q-${index}`;
        const answerId = `faq-accordion-a-${index}`;

        return (
          <div
            key={faq.q}
            className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
              isOpen
                ? 'border-[#E53935]/50 bg-white shadow-md ring-1 ring-[#E53935]/20'
                : 'border-slate-200 bg-white hover:border-[#1478B5]/40'
            }`}
          >
            <button
              type="button"
              id={questionId}
              aria-controls={answerId}
              aria-expanded={isOpen}
              className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left focus:outline-none focus:ring-2 focus:ring-[#E53935]/40 rounded-2xl cursor-pointer"
              onClick={() => setOpenIndex(isOpen ? null : index)}
            >
              <span
                className={`font-semibold text-[15px] sm:text-base transition-colors font-display ${
                  isOpen ? 'text-[#E53935]' : 'text-[#082F52]'
                }`}
              >
                {faq.q}
              </span>
              <span
                className={`shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 ${
                  isOpen
                    ? 'bg-[#E53935] text-white rotate-45'
                    : 'bg-slate-100 text-slate-500'
                }`}
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.5}
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                </svg>
              </span>
            </button>

            <div
              id={answerId}
              role="region"
              aria-labelledby={questionId}
              className={`px-6 pb-6 pt-1 text-slate-600 text-sm sm:text-[15px] leading-relaxed border-t border-slate-100 ${
                isOpen ? 'block animate-in fade-in duration-200' : 'hidden'
              }`}
            >
              {faq.a}
            </div>
          </div>
        );
      })}
    </div>
  );
}

