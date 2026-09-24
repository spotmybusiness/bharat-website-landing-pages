import React from 'react';
import Link from 'next/link';
import AppLogo from '@/components/ui/AppLogo';

const serviceLinks = [
  { name: 'Household Shifting', href: '/household-shifting' },
  { name: 'Car Transportation', href: '/car-shifting' },
  { name: 'Bike Transport', href: '/bike-shifting' },
  { name: 'Office Relocation', href: '/office-relocation' },
  { name: 'International Moving', href: '/international-moving' },
  { name: 'Parcel & Cargo Shifting', href: '/parcel-shifting' },
];

const companyLinks = [
  { name: 'About Us', href: '/about' },
  { name: 'Why Choose Us', href: '/why-us' },
  { name: 'How It Works', href: '/process' },
  { name: 'Customer Reviews', href: '/testimonials' },
  { name: 'FAQ', href: '/faqs' },
  { name: 'Get a Quote', href: '/get-a-quote' },
];

function ArrowIcon() {
  return <span className="text-[#E53935] text-xs" aria-hidden="true">›</span>;
}

function PhoneIcon() {
  return (
    <svg className="h-4 w-4 shrink-0 text-[#E53935]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg className="mt-1 h-4 w-4 shrink-0 text-[#E53935]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg className="h-4 w-4 shrink-0 text-[#E53935]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 0 0 2.22 0L21 8M5 19h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2z" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg className="mt-1 h-4 w-4 shrink-0 text-[#E53935]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="10" strokeLinecap="round" strokeLinejoin="round" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#071A2B] text-white pt-20 pb-10 border-t border-white/10 relative">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#1478B5]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#E53935]/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Large Contact CTA Block */}
        <div className="bg-[#0b2742] border border-white/10 rounded-3xl p-8 sm:p-12 mb-16 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#E53935]/10 rounded-full blur-[80px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#1478B5]/10 rounded-full blur-[80px] pointer-events-none" />
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-white mb-4">
              Let&apos;s Strengthen Your Relocation Plan
            </h2>
            <p className="text-white/70 text-sm sm:text-base mb-8">
              Tell us your shifting requirements and timeline. We’ll provide a transparent quote, customized itinerary, and dedicated support from start to finish.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:+919123046504"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#E53935] hover:bg-[#c62828] text-white font-semibold px-8 py-4 rounded-xl shadow-lg transition-all"
              >
                <PhoneIcon />
                Call +91 91230 46504
              </a>
              <a
                href="https://wa.me/919123046504"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-8 py-4 rounded-xl shadow-lg transition-all"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.558 4.116 1.535 5.847L.057 23.5l5.82-1.527A11.953 11.953 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.891 0-3.66-.5-5.195-1.378l-.373-.22-3.453.906.921-3.365-.242-.388A9.954 9.954 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
                </svg>
                Chat on WhatsApp
              </a>
            </div>
            <div className="mt-6 flex items-center justify-center gap-2 text-white/60 text-sm">
              <MailIcon />
              <a href="mailto:contact@bharatrelocators.com" className="hover:text-white transition-colors">
                contact@bharatrelocators.com
              </a>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-12 border-b border-white/10 pb-12 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          <section className="lg:col-span-4" aria-label="Company information">
            <Link href="/" className="group mb-5 flex items-center gap-3">
              <AppLogo size={44} className="transition-transform group-hover:scale-105" />
              <span className="flex flex-col">
                <span className="font-display text-lg font-bold tracking-tight">BHARAT RELOCATORS</span>
                <span className="text-[11px] font-medium uppercase tracking-wider text-white/70">
                  Packers & Movers · Kolkata
                </span>
              </span>
            </Link>

            <p className="mb-6 max-w-sm text-sm leading-relaxed text-white/75">
              ISO 9001:2015 & ISO 3900:2012 certified packers and movers in Kolkata.
              Providing dependable household shifting, vehicle transportation, and
              intercity relocation across India.
            </p>

            <div className="inline-flex max-w-full flex-wrap items-center gap-2 rounded-2xl border border-white/10 bg-white/5 p-3.5">
              <div className="flex items-center gap-1 text-[#F28A32]" aria-label="Five star rating">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="h-4 w-4 fill-current" viewBox="0 0 20 20" aria-hidden="true">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 0 0 .95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 0 0-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 0 0-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 0 0-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 0 0 .951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-xs text-white/90">
                <strong className="font-semibold text-white">4.9/5.0</strong> · 305 Google Reviews
              </span>
            </div>
          </section>

          <nav className="lg:col-span-3" aria-label="Services">
            <h2 className="mb-5 text-xs font-semibold uppercase tracking-[0.08em]">Services</h2>
            <ul className="space-y-3 text-sm text-white/80">
              {serviceLinks.map((service) => (
                <li key={service.name}>
                  <Link href={service.href} className="flex items-center gap-2 transition-colors hover:text-[#F28A32]">
                    <ArrowIcon />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav className="lg:col-span-2" aria-label="Company">
            <h2 className="mb-5 text-xs font-semibold uppercase tracking-[0.08em]">Company</h2>
            <ul className="space-y-3 text-sm text-white/80">
              {companyLinks.map((item) => (
                <li key={item.name}>
                  {item.href.startsWith('/') ? (
                    <Link href={item.href} className="flex items-center gap-2 transition-colors hover:text-[#F28A32]">
                      <ArrowIcon />
                      {item.name}
                    </Link>
                  ) : (
                    <a href={item.href} className="flex items-center gap-2 transition-colors hover:text-[#F28A32]">
                      <ArrowIcon />
                      {item.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <section
            className="min-w-0 lg:col-span-3"
            aria-label="Contact information"
            itemScope
            itemType="https://schema.org/LocalBusiness"
          >
            <meta itemProp="name" content="Bharat Relocators" />
            <meta itemProp="url" content="https://bharatrelocators.com" />
            <meta itemProp="telephone" content="+919123046504" />
            <meta itemProp="openingHours" content="Mo-Su 00:00-24:00" />
            <div itemProp="openingHoursSpecification" itemScope itemType="https://schema.org/OpeningHoursSpecification" className="hidden">
              <meta itemProp="dayOfWeek" content="https://schema.org/Monday" />
              <meta itemProp="dayOfWeek" content="https://schema.org/Tuesday" />
              <meta itemProp="dayOfWeek" content="https://schema.org/Wednesday" />
              <meta itemProp="dayOfWeek" content="https://schema.org/Thursday" />
              <meta itemProp="dayOfWeek" content="https://schema.org/Friday" />
              <meta itemProp="dayOfWeek" content="https://schema.org/Saturday" />
              <meta itemProp="dayOfWeek" content="https://schema.org/Sunday" />
              <meta itemProp="opens" content="00:00" />
              <meta itemProp="closes" content="23:59" />
            </div>

            <h2 className="mb-5 text-xs font-semibold uppercase tracking-[0.08em]">Contact Us</h2>

            <ul className="space-y-3 text-sm text-white/80">
              <li className="flex items-start gap-2.5">
                <PinIcon />
                <span itemProp="address">17, Ramlal Bazar Rd, Haltu, Kolkata 700078</span>
              </li>
              <li>
                <a href="tel:+919123046504" className="flex items-center gap-2 transition-colors hover:text-[#F28A32]">
                  <PhoneIcon />
                  <span>+91 91230 46504</span>
                </a>
              </li>
              <li>
                <a href="tel:+918335821414" className="flex items-center gap-2 transition-colors hover:text-[#F28A32]">
                  <PhoneIcon />
                  <span>+91 83358 21414</span>
                </a>
              </li>
              <li>
                <a href="mailto:contact@bharatrelocators.com" className="flex items-start gap-2 transition-colors hover:text-[#F28A32]">
                  <MailIcon />
                  <span className="break-all" itemProp="email">contact@bharatrelocators.com</span>
                </a>
              </li>
              <li className="flex items-start gap-2.5 pt-2 border-t border-white/10 mt-2">
                <ClockIcon />
                <div>
                  <span className="text-white/60 text-xs block font-medium">Opening Hours:</span>
                  <time
                    itemProp="openingHours"
                    dateTime="Mo-Su 00:00-24:00"
                    className="font-semibold text-white text-xs sm:text-sm block"
                  >
                    Monday to Sunday: Open 24 Hours
                  </time>
                  <span className="text-[11px] text-[#36c27a] font-medium flex items-center gap-1.5 mt-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#36c27a] animate-pulse" />
                    Open 24/7 · Round-the-Clock Service
                  </span>
                </div>
              </li>
            </ul>

            <div className="mt-6 overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-lg">
              <iframe
                title="Bharat Relocators location on Google Maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3685.9844344294384!2d88.38285461078684!3d22.504767179454774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a027bee00518db7%3A0x84b05f269470ad0!2sBharat%20Relocators%20%7C%20Best%20Packers%20and%20Movers%20in%20Kolkata%2C%20India%20%7C%20Car%20%26%20Bike%20Transportation%20Service%20in%20Kolkata%2C%20India!5e0!3m2!1sen!2sin!4v1789879475320!5m2!1sen!2sin"
                className="block h-52 w-full"
                loading="lazy"
                allowFullScreen
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </div>

            <a
              href="tel:+919123046504"
              className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#E53935] px-4 py-3.5 text-sm font-semibold text-white shadow-md transition-all duration-200 hover:bg-[#C62828] hover:shadow-xl"
            >
              <PhoneIcon />
              Call Us Now
            </a>
          </section>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 pt-8 text-xs text-white/60 sm:flex-row">
          <p className="text-center sm:text-left">
            © 2026 Bharat Relocators. All rights reserved. ISO 9001:2015 & ISO 3900:2012 Certified.
          </p>
          <div className="flex gap-6">
            <Link href="/get-a-quote" className="transition-colors hover:text-white">Free Estimate</Link>
            <Link href="/about" className="transition-colors hover:text-white">About Us</Link>
            <Link href="/faqs" className="transition-colors hover:text-white">FAQ</Link>
          </div>
        </div>

        {/* Brand Credit */}
        <div className="mt-4 pt-4 border-t border-white/5 text-center text-xs text-white/60">
          <p>
            Made and Maintained with{' '}
            <a
              href="https://share.google/hBseUBVk1PHI4ZUgJ"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#F28A32] hover:text-white font-semibold transition-colors underline underline-offset-2"
            >
              Spot My Business (SMB)
            </a>
            {' '}&middot; Contact Us:{' '}
            <a
              href="tel:+919007960333"
              className="text-white/85 hover:text-[#F28A32] font-semibold transition-colors"
            >
              +91-9007960333
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
