'use client';

import React, { useState, useEffect, useRef } from 'react';

const faqs = [
  {
    q: 'How much does household shifting in or from Kolkata cost?',
    a: 'Pricing depends on the volume of goods, distance, floor level, and packaging requirements. A typical 1BHK local move in Kolkata starts from ₹4,000–₹8,000. For intercity moves across India, pricing is calculated by route and weight. We provide an exact, all-inclusive quote in under 3 hours.',
  },
  {
    q: 'Do you provide packing materials as part of the service?',
    a: 'Yes! We supply all high-grade packing materials including 5-layer corrugated boxes, wardrobe cartons, LED TV wooden boxes, bubble wraps, stretch film, edge protectors, and waterproof transit covers. All packing supplies are included in our transparent quote.',
  },
  {
    q: 'Do you dismantle and reassemble furniture and appliances?',
    a: 'Yes, our trained carpenters handle the complete dismantling and reassembly of double beds, modular wardrobes, dining sets, and wall brackets at no extra hidden charge.',
  },
  {
    q: 'Can I track my consignment in real-time during transit?',
    a: 'Absolutely. Once your shipment departs from Kolkata, you will receive a tracking link via SMS and WhatsApp. You can check vehicle location live, and our dedicated support team is on standby for milestone updates.',
  },
  {
    q: 'Is my shipment covered under transit insurance?',
    a: 'Yes, all consignments are covered under standard goods transit insurance. We also offer enhanced comprehensive insurance for high-value items, artwork, luxury furniture, and motorized vehicles.',
  },
  {
    q: 'How far in advance should I schedule my relocation?',
    a: 'We recommend scheduling 3 to 5 days prior for local moves within Kolkata, and 7 to 10 days in advance for PAN India intercity relocations. We also accommodate same-day emergency requests based on fleet availability.',
  },
  {
    q: 'Do you offer bike and car transport from Kolkata?',
    a: 'Yes! Vehicle shipping is one of our primary specialties. We move two-wheelers and four-wheelers across India using closed car-carrier containers and specialized bike crates with high-density protective cushioning.',
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('is-visible');
        });
      },
      { threshold: 0.1 }
    );
    sectionRef.current?.querySelectorAll('.reveal')?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="faq" ref={sectionRef} className="py-24 bg-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <span className="inline-block bg-red-50 text-[#E53935] text-xs font-semibold uppercase tracking-[0.08em] px-4 py-1.5 rounded-full mb-4 border border-red-200">
            Frequently Asked Questions
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-display font-bold text-[#082F52] mb-4 tracking-tight">
            Clear Answers to Common Questions
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Everything you need to know before scheduling your move with Bharat Relocators.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-4 reveal">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
                  isOpen
                    ? 'border-[#E53935]/50 bg-white shadow-md ring-1 ring-[#E53935]/20'
                    : 'border-slate-200 bg-white hover:border-[#1478B5]/40'
                }`}
              >
                <button
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left focus:outline-none focus:ring-2 focus:ring-[#E53935]/40 rounded-2xl"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                >
                  <span
                    className={`font-semibold text-[15px] sm:text-base transition-colors font-display ${
                      isOpen ? 'text-[#E53935]' : 'text-[#082F52]'
                    }`}
                  >
                    {faq.q}
                  </span>
                  <span
                    className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 ${
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
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                    </svg>
                  </span>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-slate-600 text-sm sm:text-[15px] leading-relaxed border-t border-slate-100 animate-in fade-in duration-200">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Help CTA Footer */}
        <div className="text-center mt-12 reveal border-t border-slate-100 pt-10">
          <h3 className="text-lg font-display font-bold text-[#082F52] mb-2">Still have questions? Our team is available 24/7.</h3>
          <p className="text-slate-600 text-sm mb-6 font-normal">
            Reach out for a quick, transparent answer to any of your queries.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2.5 bg-white border-2 border-[#082F52] hover:bg-slate-50 text-[#082F52] font-semibold px-6 py-3.5 rounded-xl shadow-sm transition-all text-sm w-full sm:w-auto"
            >
              Contact Us Page
            </a>
            <a
              href="tel:+919123046504"
              className="inline-flex items-center justify-center gap-2.5 bg-[#082F52] hover:bg-[#0b3b60] text-white font-semibold px-6 py-3.5 rounded-xl shadow-md transition-all text-sm w-full sm:w-auto"
            >
              <svg className="w-4 h-4 text-[#E53935]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
              </svg>
              Call +91 91230 46504
            </a>
            <a
              href="https://wa.me/919123046504"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-6 py-3.5 rounded-xl shadow-md transition-all text-sm w-full sm:w-auto"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.558 4.116 1.535 5.847L.057 23.5l5.82-1.527A11.953 11.953 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.891 0-3.66-.5-5.195-1.378l-.373-.22-3.453.906.921-3.365-.242-.388A9.954 9.954 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
              </svg>
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
