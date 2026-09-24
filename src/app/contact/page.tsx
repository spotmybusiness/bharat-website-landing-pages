import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import PageLayout from '@/components/PageLayout';
import PageHero from '@/components/PageHero';
import JsonLd from '@/components/JsonLd';
import { generatePageMetadata } from '@/lib/metadata';
import { BUSINESS, getTelUrl, getWhatsAppUrl } from '@/lib/business';

export const metadata: Metadata = generatePageMetadata({
  title: 'Contact Us',
  description:
    'Contact Bharat Relocators for home shifting, vehicle transportation, and intercity moving in Kolkata. Call +91 91230 46504 or visit our Haltu office.',
  path: '/contact',
});

const contactSchema = {
  '@context': 'https://schema.org',
  '@type': 'MovingCompany',
  name: BUSINESS.name,
  legalName: BUSINESS.legalName,
  telephone: BUSINESS.phone.primary,
  email: BUSINESS.email.primary,
  url: 'https://bharatrelocators.com/contact',
  address: {
    '@type': 'PostalAddress',
    streetAddress: BUSINESS.address.street,
    addressLocality: BUSINESS.address.locality,
    addressRegion: BUSINESS.address.state,
    postalCode: BUSINESS.address.postalCode,
    addressCountry: BUSINESS.address.country,
  },
  openingHours: BUSINESS.hours.schemaOpeningHours,
  openingHoursSpecification: BUSINESS.hours.openingHoursSpecification,
};

function PhoneIcon() {
  return (
    <svg className="h-5 w-5 shrink-0 text-[#E53935]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg className="h-5 w-5 shrink-0 text-[#E53935]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg className="h-5 w-5 shrink-0 text-[#E53935]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 0 0 2.22 0L21 8M5 19h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2z" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg className="h-5 w-5 shrink-0 text-[#E53935]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2m6-2a10 10 0 11-20 0 10 10 0 0120 0z" />
    </svg>
  );
}

export default function ContactPage() {
  return (
    <PageLayout>
      <JsonLd data={contactSchema} />
      <PageHero
        label="Get in Touch"
        title={
          <>
            Contact Our <span className="text-[#F28A32]">Relocation Office</span>
          </>
        }
        subtitle="Have questions about your upcoming move or need an immediate quote? Our move coordinators are available to help you plan a smooth relocation."
        breadcrumbs={[{ label: 'Contact Us' }]}
        /* Hero Visual Image: Drop your image in /public/images/ and set src="/images/your-image.png" */
        image={
          <div className="rounded-2xl border border-white/20 bg-white/5 backdrop-blur-sm p-3 shadow-[0_4px_24px_rgba(0,0,0,0.25)]">
            <img
              src="/images/contact_us.png"
              alt="Contact Bharat Relocators Kolkata"
            />
          </div>
        }
        actions={
          <>
            <a
              href={getTelUrl(BUSINESS.phone.primary)}
              className="inline-flex items-center gap-2 bg-[#E53935] hover:bg-[#c62828] text-white font-semibold text-sm px-6 py-3.5 rounded-xl shadow-md transition-colors"
            >
              <PhoneIcon />
              <span>Call: {BUSINESS.phone.primaryFormatted}</span>
            </a>
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm px-5 py-3.5 rounded-xl shadow-md transition-colors"
            >
              <span>Chat on WhatsApp</span>
            </a>
          </>
        }
      />

      {/* Main Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left: Contact Info Cards */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="inline-block bg-red-50 text-[#E53935] text-xs font-semibold uppercase tracking-[0.08em] px-4 py-1.5 rounded-full mb-3 border border-red-200">
                  Head Office
                </span>
                <h2 className="text-2xl sm:text-3xl font-display font-bold text-[#082F52] mb-3">
                  {BUSINESS.name}
                </h2>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Serving Kolkata, West Bengal, and delivering PAN India household and vehicle transport.
                </p>
              </div>

              {/* Address Card */}
              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200/80">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center shrink-0">
                    <PinIcon />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#082F52] text-sm font-display mb-1">
                      Office Address
                    </h3>
                    <p className="text-slate-700 text-sm leading-relaxed">
                      {BUSINESS.address.full}
                    </p>
                  </div>
                </div>
              </div>

              {/* Phone Contacts */}
              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200/80">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center shrink-0">
                    <PhoneIcon />
                  </div>
                  <div className="space-y-1.5">
                    <h3 className="font-bold text-[#082F52] text-sm font-display mb-1">
                      Phone Numbers
                    </h3>
                    <div>
                      <a
                        href={getTelUrl(BUSINESS.phone.primary)}
                        className="text-slate-800 font-semibold text-sm hover:text-[#E53935] transition-colors block"
                      >
                        {BUSINESS.phone.primaryFormatted} (Primary)
                      </a>
                    </div>
                    <div>
                      <a
                        href={getTelUrl(BUSINESS.phone.secondary)}
                        className="text-slate-700 font-medium text-sm hover:text-[#E53935] transition-colors block"
                      >
                        {BUSINESS.phone.secondaryFormatted} (Secondary)
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Email & Digital Contact */}
              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200/80">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center shrink-0">
                    <MailIcon />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#082F52] text-sm font-display mb-1">
                      Email Support
                    </h3>
                    <a
                      href={`mailto:${BUSINESS.email.primary}`}
                      className="text-slate-700 text-sm hover:text-[#E53935] transition-colors"
                    >
                      {BUSINESS.email.primary}
                    </a>
                  </div>
                </div>
              </div>

              {/* Operating / Opening Hours */}
              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200/80" itemScope itemType="https://schema.org/LocalBusiness">
                <meta itemProp="name" content={BUSINESS.name} />
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center shrink-0">
                    <ClockIcon />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-bold text-[#082F52] text-sm font-display">
                        Opening Hours
                      </h3>
                      <span className="inline-flex items-center gap-1 bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2 py-0.5 rounded-full">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        Open 24/7
                      </span>
                    </div>
                    <time
                      itemProp="openingHours"
                      dateTime="Mo-Su 00:00-24:00"
                      className="text-slate-800 font-semibold text-sm block"
                    >
                      {BUSINESS.hours.display}
                    </time>
                    <p className="text-slate-500 text-xs mt-1">
                      Operations, shifting support & bookings are active round-the-clock, 7 days a week.
                    </p>
                  </div>
                </div>
              </div>

              {/* Direct Quote CTA */}
              <div className="p-6 bg-[#082F52] text-white rounded-2xl border border-white/10">
                <h3 className="font-bold text-white text-base font-display mb-2">
                  Need a Relocation Estimate?
                </h3>
                <p className="text-white/80 text-xs sm:text-sm leading-relaxed mb-4">
                  Share your move route and inventory requirements to receive an exact, all-inclusive quotation.
                </p>
                <Link
                  href="/get-a-quote"
                  className="inline-flex items-center justify-center gap-2 bg-[#E53935] hover:bg-[#c62828] text-white font-semibold text-xs sm:text-sm px-5 py-3 rounded-xl transition-colors w-full"
                >
                  Request Tailored Quote →
                </Link>
              </div>
            </div>

            {/* Right: Map Embed */}
            <div className="lg:col-span-7">
              <div className="bg-slate-50 p-4 rounded-3xl border border-slate-200/80 shadow-xs">
                <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
                  <iframe
                    title="Bharat Relocators office location on Google Maps"
                    src={BUSINESS.google.mapsEmbedUrl}
                    className="block h-[450px] lg:h-[540px] w-full"
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="strict-origin-when-cross-origin"
                  />
                </div>
                <div className="p-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-600">
                  <span>📍 {BUSINESS.address.short}</span>
                  <a
                    href={BUSINESS.google.mapsShortlink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#E53935] font-semibold hover:underline"
                  >
                    View on Google Maps →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}

