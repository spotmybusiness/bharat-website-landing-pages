'use client';

import React, { useState, useEffect, useRef } from 'react';
import { BUSINESS, getTelUrl, getWhatsAppUrl } from '@/lib/business';
import { trackGenerateLead } from '@/lib/analytics';
import {
  validateIndianPhone,
  validateRequiredText,
} from '@/lib/validation';

export default function QuoteSection() {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [originCity, setOriginCity] = useState('');
  const [destCity, setDestCity] = useState('');
  const [serviceType, setServiceType] = useState(
    'Household Shifting (1-2 BHK)'
  );
  const [moveDate, setMoveDate] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [preparedWhatsAppUrl, setPreparedWhatsAppUrl] = useState('');
  const [errors, setErrors] = useState<{
    fullName?: string;
    phone?: string;
    originCity?: string;
    destCity?: string;
  }>({});

  const sectionRef = useRef<HTMLDivElement>(null);
  const todayStr = new Date().toISOString().split('T')[0];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    sectionRef.current
      ?.querySelectorAll('.reveal')
      ?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newErrors: {
      fullName?: string;
      phone?: string;
      originCity?: string;
      destCity?: string;
    } = {};

    // 1. Validate Full Name
    const nameVal = validateRequiredText(fullName, 'Full Name', 2);
    if (!nameVal.isValid) {
      newErrors.fullName = nameVal.error;
    }

    // 2. Validate Phone
    const phoneVal = validateIndianPhone(phone);
    if (!phoneVal.isValid) {
      newErrors.phone = phoneVal.error;
    }

    // 3. Validate Origin City
    const originVal = validateRequiredText(originCity, 'Moving from location', 2);
    if (!originVal.isValid) {
      newErrors.originCity = originVal.error;
    }

    // 4. Validate Destination City
    const destVal = validateRequiredText(destCity, 'Destination city', 2);
    if (!destVal.isValid) {
      newErrors.destCity = destVal.error;
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Clear any previous errors
    setErrors({});
    setLoading(true);

    const cleanPhoneNumber = phoneVal.cleanNumber || phone.trim();

    const whatsappMessage =
      `*New Moving Quote Request — Bharat Relocators*\n\n` +
      `*Name:* ${fullName.trim()}\n` +
      `*Phone:* ${cleanPhoneNumber}\n` +
      `*From:* ${originCity.trim()}\n` +
      `*To:* ${destCity.trim()}\n` +
      `*Service:* ${serviceType}\n` +
      `*Moving Date:* ${moveDate || 'Flexible'}`;

    const targetWhatsAppUrl = getWhatsAppUrl(whatsappMessage);
    setPreparedWhatsAppUrl(targetWhatsAppUrl);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      trackGenerateLead({ service_type: serviceType });

      // Attempt automatic opening in a new tab
      try {
        window.open(targetWhatsAppUrl, '_blank', 'noopener,noreferrer');
      } catch {
        // Pop-up blocker safety fallback
      }
    }, 600);
  };

  const handleReset = () => {
    setFullName('');
    setPhone('');
    setOriginCity('');
    setDestCity('');
    setMoveDate('');
    setErrors({});
    setPreparedWhatsAppUrl('');
    setSubmitted(false);
  };

  return (
    <section
      id="quote"
      ref={sectionRef}
      className="py-24 bg-[#082f52] relative overflow-hidden text-white border-t border-white/10"
    >
      {/* Background Ambience */}
      <div className="absolute inset-0 dot-pattern opacity-10 pointer-events-none" />

      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#E53935]/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#F28A32]/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Column: Value Proposition & Estimation Guide */}
          <div className="lg:col-span-5 reveal">
            <span className="inline-block glass-pill text-white text-xs font-semibold uppercase tracking-[0.08em] px-4 py-1.5 rounded-full mb-6">
              Move Planning &amp; Estimation
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-display font-bold mb-5 leading-[1.15] text-white tracking-tight">
              Your Move. <br />
              <span className="text-[#F28A32]">
                Our Responsibility.
              </span>
            </h2>

            <p className="text-white/80 leading-relaxed mb-8 text-sm sm:text-base">
              Transparent written quotations with zero hidden surcharges.
              Our logistics specialists evaluate your specific volume, access conditions,
              and destination to deliver an accurate relocation plan.
            </p>

            {/* Customized Quote Evaluation Box */}
            <div className="glass-card-elevated rounded-2xl p-5 mb-8 border border-white/20">
              <div className="text-[11px] uppercase tracking-[0.06em] text-[#F28A32] font-semibold mb-2.5">
                Customized Quote Evaluation
              </div>

              <div className="text-xs sm:text-sm text-white/90 space-y-2">
                <div className="flex items-start gap-2">
                  <span className="text-[#F28A32] mt-0.5 font-bold">✓</span>
                  <span><strong>Move Volume:</strong> Exact item count and specialty packing requirements</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#F28A32] mt-0.5 font-bold">✓</span>
                  <span><strong>Site Access:</strong> Floor level, lift availability, and vehicle approach</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#F28A32] mt-0.5 font-bold">✓</span>
                  <span><strong>Route &amp; Logistics:</strong> Dedicated carrier or direct door-to-door transit</span>
                </div>
              </div>

              <div className="text-xs text-white/70 mt-3 pt-3 border-t border-white/10 flex items-center gap-1.5 font-normal">
                <span>
                  Includes multi-layer packing, trained labor, transit &amp; documentation
                </span>
              </div>
            </div>

            {/* Direct Connect Chips */}
            <div className="flex flex-wrap gap-3">
              <a
                href={getTelUrl(BUSINESS.phone.primary)}
                aria-label={`Call Bharat Relocators at ${BUSINESS.phone.primaryFormatted}`}
                className="inline-flex items-center gap-2.5 bg-white/20 hover:bg-white/25 text-white font-semibold text-xs sm:text-sm px-5 py-3 rounded-2xl transition-all shadow-md"
              >
                <svg
                  className="w-4 h-4 text-[#E53935]"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
                </svg>

                <span>{BUSINESS.phone.primaryFormatted}</span>
              </a>

              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contact Bharat Relocators on WhatsApp"
                className="inline-flex items-center gap-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-semibold px-5 py-3 rounded-2xl transition-all shadow-md"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.558 4.116 1.535 5.847L.057 23.5l5.82-1.527A11.953 11.953 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.891 0-3.66-.5-5.195-1.378l-.373-.22-3.453.906.921-3.365-.242-.388A9.954 9.954 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
                </svg>

                <span>WhatsApp Now</span>
              </a>
            </div>
          </div>

          {/* Right Column: High-Precision Quote Form */}
          <div
            className="lg:col-span-7 reveal"
            style={{ transitionDelay: '100ms' }}
          >
            <div className="bg-white rounded-3xl shadow-2xl p-6 sm:p-8 text-foreground border border-border">
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-border">
                <div className="flex items-center gap-2.5">
                  <div className="w-2 h-6 bg-[#E53935] rounded-full" />

                  <h3 className="text-xl font-bold text-[#082f52] font-display">
                    Request Tailored Quotation
                  </h3>
                </div>

                <span className="text-xs text-emerald-600 font-semibold">
                  ● Free &amp; No Obligation
                </span>
              </div>

              {submitted ? (
                <div
                  className="text-center py-6"
                  role="status"
                  aria-live="polite"
                >
                  <div className="w-14 h-14 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg
                      className="w-7 h-7 text-emerald-600"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2.5}
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>

                  <h4 className="text-xl sm:text-2xl font-bold text-[#082f52] mb-2 font-display">
                    Relocation Enquiry Prepared!
                  </h4>

                  <p className="text-muted-foreground text-xs sm:text-sm max-w-md mx-auto mb-5 leading-relaxed">
                    Your moving details are ready. Connect directly with our lead coordinator on WhatsApp for instant confirmation, or call our team.
                  </p>

                  {/* Summary of submitted request */}
                  <div className="bg-slate-50 rounded-2xl p-4 mb-6 border border-slate-200 text-left text-xs sm:text-sm space-y-1.5 max-w-md mx-auto">
                    <div className="flex justify-between">
                      <span className="text-slate-500">Route:</span>
                      <span className="font-semibold text-[#082f52]">{originCity} → {destCity}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Requirement:</span>
                      <span className="font-semibold text-[#082f52]">{serviceType}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Preferred Date:</span>
                      <span className="font-semibold text-[#082f52]">{moveDate || 'Flexible'}</span>
                    </div>
                  </div>

                  <div className="flex flex-col gap-3 max-w-md mx-auto">
                    <a
                      href={preparedWhatsAppUrl || getWhatsAppUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Send prepared quotation details to Bharat Relocators on WhatsApp"
                      className="inline-flex items-center justify-center gap-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-6 py-3.5 rounded-xl transition-all shadow-md text-sm sm:text-base hover:scale-[1.01]"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.558 4.116 1.535 5.847L.057 23.5l5.82-1.527A11.953 11.953 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.891 0-3.66-.5-5.195-1.378l-.373-.22-3.453.906.921-3.365-.242-.388A9.954 9.954 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
                      </svg>
                      <span>Open WhatsApp to Send Details</span>
                    </a>

                    <div className="flex gap-2">
                      <a
                        href={getTelUrl(BUSINESS.phone.primary)}
                        className="flex-1 inline-flex items-center justify-center gap-2 bg-[#082f52] hover:bg-[#0b3b60] text-white font-semibold py-2.5 px-4 rounded-xl text-xs transition-colors"
                      >
                        <svg
                          className="w-3.5 h-3.5 text-[#E53935]"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
                        </svg>
                        <span>Call Coordinator</span>
                      </a>

                      <button
                        type="button"
                        onClick={handleReset}
                        className="flex-1 inline-flex items-center justify-center py-2.5 px-4 rounded-xl text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors"
                      >
                        Start New Request
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  noValidate
                  className="space-y-4"
                  aria-label="Request a moving quotation"
                >
                  {/* Row 1: Name & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="full-name"
                        className="text-xs font-semibold text-foreground/85 block mb-1.5"
                      >
                        Full Name <span className="text-[#E53935]" aria-hidden="true">*</span>
                      </label>

                      <input
                        id="full-name"
                        name="fullName"
                        type="text"
                        required
                        aria-required="true"
                        aria-invalid={!!errors.fullName}
                        aria-describedby={errors.fullName ? 'full-name-error' : undefined}
                        autoComplete="name"
                        value={fullName}
                        onChange={(e) => {
                          setFullName(e.target.value);
                          if (errors.fullName) {
                            setErrors((prev) => ({ ...prev, fullName: undefined }));
                          }
                        }}
                        placeholder="Your full name"
                        className={`w-full bg-[#f8fafc] border rounded-xl px-4 py-3 text-base sm:text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 transition-colors ${
                          errors.fullName
                            ? 'border-red-500 focus:border-red-500 focus:ring-red-200'
                            : 'border-border focus:border-[#E53935] focus:ring-[#E53935]/20'
                        }`}
                      />
                      {errors.fullName && (
                        <p
                          id="full-name-error"
                          role="alert"
                          className="text-xs text-red-600 mt-1 font-medium"
                        >
                          {errors.fullName}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="phone-number"
                        className="text-xs font-semibold text-foreground/85 block mb-1.5"
                      >
                        Phone Number <span className="text-[#E53935]" aria-hidden="true">*</span>
                      </label>

                      <input
                        id="phone-number"
                        name="phone"
                        type="tel"
                        required
                        aria-required="true"
                        aria-invalid={!!errors.phone}
                        aria-describedby={errors.phone ? 'phone-error' : undefined}
                        autoComplete="tel"
                        inputMode="tel"
                        value={phone}
                        onChange={(e) => {
                          setPhone(e.target.value);
                          if (errors.phone) {
                            setErrors((prev) => ({ ...prev, phone: undefined }));
                          }
                        }}
                        placeholder="+91 98xxx xxxxx"
                        className={`w-full bg-[#f8fafc] border rounded-xl px-4 py-3 text-base sm:text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 transition-colors ${
                          errors.phone
                            ? 'border-red-500 focus:border-red-500 focus:ring-red-200'
                            : 'border-border focus:border-[#E53935] focus:ring-[#E53935]/20'
                        }`}
                      />
                      {errors.phone && (
                        <p
                          id="phone-error"
                          role="alert"
                          className="text-xs text-red-600 mt-1 font-medium"
                        >
                          {errors.phone}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Row 2: From & To Cities */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="origin-city"
                        className="text-xs font-semibold text-foreground/85 block mb-1.5"
                      >
                        Moving From <span className="text-[#E53935]" aria-hidden="true">*</span>
                      </label>

                      <input
                        id="origin-city"
                        name="originCity"
                        type="text"
                        required
                        aria-required="true"
                        aria-invalid={!!errors.originCity}
                        aria-describedby={errors.originCity ? 'origin-city-error' : undefined}
                        autoComplete="address-level2"
                        value={originCity}
                        onChange={(e) => {
                          setOriginCity(e.target.value);
                          if (errors.originCity) {
                            setErrors((prev) => ({ ...prev, originCity: undefined }));
                          }
                        }}
                        placeholder="Kolkata (Behala, Salt Lake, etc.)"
                        className={`w-full bg-[#f8fafc] border rounded-xl px-4 py-3 text-base sm:text-sm text-foreground focus:outline-none focus:ring-2 transition-colors ${
                          errors.originCity
                            ? 'border-red-500 focus:border-red-500 focus:ring-red-200'
                            : 'border-border focus:border-[#E53935] focus:ring-[#E53935]/20'
                        }`}
                      />
                      {errors.originCity && (
                        <p
                          id="origin-city-error"
                          role="alert"
                          className="text-xs text-red-600 mt-1 font-medium"
                        >
                          {errors.originCity}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="destination-city"
                        className="text-xs font-semibold text-foreground/85 block mb-1.5"
                      >
                        Moving To (City / Area) <span className="text-[#E53935]" aria-hidden="true">*</span>
                      </label>

                      <input
                        id="destination-city"
                        name="destinationCity"
                        type="text"
                        required
                        aria-required="true"
                        aria-invalid={!!errors.destCity}
                        aria-describedby={errors.destCity ? 'dest-city-error' : undefined}
                        autoComplete="address-level2"
                        value={destCity}
                        onChange={(e) => {
                          setDestCity(e.target.value);
                          if (errors.destCity) {
                            setErrors((prev) => ({ ...prev, destCity: undefined }));
                          }
                        }}
                        placeholder="Bangalore, Mumbai, Delhi, etc."
                        className={`w-full bg-[#f8fafc] border rounded-xl px-4 py-3 text-base sm:text-sm text-foreground focus:outline-none focus:ring-2 transition-colors ${
                          errors.destCity
                            ? 'border-red-500 focus:border-red-500 focus:ring-red-200'
                            : 'border-border focus:border-[#E53935] focus:ring-[#E53935]/20'
                        }`}
                      />
                      {errors.destCity && (
                        <p
                          id="dest-city-error"
                          role="alert"
                          className="text-xs text-red-600 mt-1 font-medium"
                        >
                          {errors.destCity}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Row 3: Service Type Selection */}
                  <div>
                    <label
                      htmlFor="service-type"
                      className="text-xs font-semibold text-foreground/85 block mb-1.5"
                    >
                      Relocation Requirement <span className="text-[#E53935]" aria-hidden="true">*</span>
                    </label>

                    <select
                      id="service-type"
                      name="serviceType"
                      required
                      aria-required="true"
                      value={serviceType}
                      onChange={(e) => setServiceType(e.target.value)}
                      className="w-full bg-[#f8fafc] border border-border rounded-xl px-4 py-3 text-base sm:text-sm text-foreground focus:outline-none focus:border-[#E53935] focus:ring-2 focus:ring-[#E53935]/20 transition-colors"
                    >
                      <option value="Household Shifting (1-2 BHK)">
                        Household Shifting (1-2 BHK)
                      </option>

                      <option value="Household Shifting (3+ BHK / Villa)">
                        Household Shifting (3+ BHK / Villa)
                      </option>

                      <option value="Car Transportation (Dedicated Carrier)">
                        Car Transportation (Dedicated Carrier)
                      </option>

                      <option value="Bike Transport (Custom Crate)">
                        Bike Transport (Custom Crate)
                      </option>

                      <option value="Office & Commercial Relocation">
                        Office & Commercial Relocation
                      </option>

                      <option value="International Relocation">
                        International Relocation
                      </option>

                      <option value="Express Parcel / Courier">
                        Express Parcel / Courier
                      </option>
                    </select>
                  </div>

                  {/* Row 4: Moving Date */}
                  <div>
                    <label
                      htmlFor="moving-date"
                      className="text-xs font-semibold text-foreground/85 block mb-1.5"
                    >
                      Approximate Moving Date <span className="text-slate-500 font-normal">(Optional)</span>
                    </label>

                    <input
                      id="moving-date"
                      name="moveDate"
                      type="date"
                      min={todayStr}
                      value={moveDate}
                      onChange={(e) => setMoveDate(e.target.value)}
                      className="w-full bg-[#f8fafc] border border-border rounded-xl px-4 py-3 text-base sm:text-sm text-foreground focus:outline-none focus:border-[#E53935] focus:ring-2 focus:ring-[#E53935]/20 transition-colors"
                    />
                  </div>

                  {/* Submit Button with Shimmer */}
                  <button
                    type="submit"
                    disabled={loading}
                    aria-busy={loading}
                    className="relative w-full bg-[#E53935] hover:bg-[#c62828] text-white font-semibold py-4 rounded-xl transition-all duration-200 shadow-xl hover:shadow-2xl overflow-hidden disabled:opacity-70 text-sm sm:text-base flex items-center justify-center gap-2 mt-2"
                  >
                    {loading ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg
                          className="animate-spin w-5 h-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth={4}
                          />

                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                          />
                        </svg>

                        <span>Preparing Relocation Quote...</span>
                      </span>
                    ) : (
                      <span className="relative z-10 flex items-center gap-2">
                        <span>Get Free Moving Quote</span>
                        <span aria-hidden="true">→</span>
                      </span>
                    )}

                    {!loading && (
                      <div
                        className="btn-shimmer absolute inset-0 pointer-events-none"
                        aria-hidden="true"
                      />
                    )}
                  </button>

                  <p className="text-center text-xs text-muted-foreground pt-1">
                    Direct coordinator response · Zero hidden surcharges · Strict privacy
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
