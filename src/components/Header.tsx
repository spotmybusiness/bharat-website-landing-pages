'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import AppLogo from '@/components/ui/AppLogo';
import { BUSINESS, getTelUrl } from '@/lib/business';
import { mainNavLinks, serviceNavLinks, NavItem } from '@/lib/navigation';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  const pathname = usePathname();
  const isHomepage = pathname === '/';

  const servicesRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLAnchorElement>(null);
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Prevent background scrolling when mobile drawer is open
  useEffect(() => {
    if (menuOpen) {
      const prevOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = prevOverflow;
      };
    }
  }, [menuOpen]);

  // Reset mobile services accordion when mobile menu closes
  useEffect(() => {
    if (!menuOpen) {
      setMobileServicesOpen(false);
    }
  }, [menuOpen]);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        servicesRef.current &&
        !servicesRef.current.contains(event.target as Node)
      ) {
        setServicesDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close dropdown on Escape key
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && servicesDropdownOpen) {
        setServicesDropdownOpen(false);
        triggerRef.current?.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [servicesDropdownOpen]);

  // Close mobile menu and reset dropdowns on route change
  useEffect(() => {
    setMenuOpen(false);
    setServicesDropdownOpen(false);
    setMobileServicesOpen(false);
  }, [pathname]);

  const handleMouseEnter = useCallback(() => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setServicesDropdownOpen(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    closeTimeoutRef.current = setTimeout(() => {
      setServicesDropdownOpen(false);
    }, 150);
  }, []);

  const handleNavClick = (link: NavItem) => {
    setMenuOpen(false);
    setServicesDropdownOpen(false);

    if (isHomepage && link.homepageHash) {
      const el = document.querySelector(link.homepageHash);
      if (el) {
        el.scrollIntoView({ behavior: 'auto' });
        return;
      }
    }
  };

  const handleQuoteClick = () => {
    setMenuOpen(false);
    setServicesDropdownOpen(false);
    if (isHomepage) {
      const el = document.querySelector('#quote');
      if (el) {
        el.scrollIntoView({ behavior: 'auto' });
        return;
      }
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          menuOpen || scrolled
            ? 'bg-[#071A2B] shadow-2xl py-2.5 sm:py-3'
            : 'bg-[#071A2B] py-3 sm:py-4'
        }`}
      >
        <div className="w-full max-w-[1600px] mx-auto px-3.5 sm:px-6 lg:px-8 xl:px-10 2xl:px-12 flex items-center justify-between gap-2 sm:gap-4">
          {/* Brand Identity */}
          <Link href="/" className="flex items-center gap-2 sm:gap-3 group focus:outline-none shrink-0 min-w-0">
            <AppLogo
              size={38}
              className="shrink-0 transition-transform duration-200 group-hover:scale-105 ring-2 ring-white/10"
            />
            <div className="flex flex-col min-w-0">
              <span className="font-extrabold text-white text-[0.925rem] sm:text-base md:text-[1.125rem] tracking-tight font-display whitespace-nowrap uppercase">
                {BUSINESS.name}
              </span>
              <span className="text-[#F28A32] text-[8.5px] sm:text-[10px] font-semibold tracking-[0.06em] sm:tracking-[0.08em] uppercase whitespace-nowrap">
                {BUSINESS.tagline}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav aria-label="Main Navigation" className="hidden xl:flex items-center gap-4 xl:gap-5 2xl:gap-7 shrink-0">
            {mainNavLinks.map((link) => {
              // 1. Services Dropdown Menu
              if (link.children && link.children.length > 0) {
                const isServiceActive = serviceNavLinks.some((s) => s.href === pathname);
                return (
                  <div
                    key={link.label}
                    ref={servicesRef}
                    className="relative"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <Link
                      ref={triggerRef}
                      href="/services"
                      onClick={() => setServicesDropdownOpen(false)}
                      className={`text-sm font-medium transition-colors py-1 focus:outline-none relative group whitespace-nowrap inline-flex items-center gap-1 ${
                        servicesDropdownOpen || isServiceActive || pathname === '/services'
                          ? 'text-white font-semibold'
                          : 'text-white/85 hover:text-white'
                      }`}
                    >
                      <span>{link.label}</span>
                      <svg
                        className={`w-3.5 h-3.5 transition-transform duration-200 opacity-70 ${
                          servicesDropdownOpen ? 'rotate-180 text-[#F28A32]' : ''
                        }`}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                      <span
                        className={`absolute bottom-0 left-0 h-0.5 bg-[#E53935] transition-all duration-200 ${
                          servicesDropdownOpen || isServiceActive || pathname === '/services'
                            ? 'w-full'
                            : 'w-0 group-hover:w-full'
                        }`}
                      />
                    </Link>

                    {/* Dropdown Panel - Solid Opaque Matching Hero & Content Section */}
                    {servicesDropdownOpen && (
                      <div
                        id="desktop-services-dropdown"
                        className="absolute top-full left-0 mt-3 w-[540px] bg-[#071A2B] border border-white/15 rounded-2xl shadow-[0_24px_50px_rgba(0,0,0,0.85)] overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200 z-50"
                      >
                        {/* Top Gradient Edge matching Hero & Header */}
                        <div className="h-[2px] bg-gradient-to-r from-white via-[#F28A32] to-[#E53935]" />

                        <div className="p-3.5 grid grid-cols-2 gap-2.5 bg-[#071A2B]">
                          {link.children.map((service) => (
                            <Link
                              key={service.href}
                              href={service.href}
                              onClick={() => setServicesDropdownOpen(false)}
                              className="flex flex-col p-3 rounded-xl bg-[#0B253D] hover:bg-[#0F3252] border border-white/10 hover:border-[#F28A32]/50 hover:shadow-lg transition-all duration-200 group/item focus:outline-none focus:ring-2 focus:ring-[#E53935]"
                            >
                              <div className="flex items-center justify-between mb-1">
                                <span className="text-[10px] font-semibold text-[#F28A32] uppercase tracking-wider">
                                  {service.category}
                                </span>
                                <span className="text-[#E53935] group-hover/item:text-[#F28A32] group-hover/item:translate-x-1 transition-all text-xs font-bold">
                                  →
                                </span>
                              </div>
                              <span className="text-white text-xs font-bold group-hover/item:text-[#F28A32] transition-colors">
                                {service.label}
                              </span>
                              <span className="text-slate-300 text-[11px] leading-snug mt-1 group-hover/item:text-white transition-colors">
                                {service.description}
                              </span>
                            </Link>
                          ))}
                        </div>

                        {/* Solid Footer Action matching content section */}
                        <div className="bg-[#051525] border-t border-white/10 px-4 py-3 flex items-center justify-between text-xs">
                          <Link
                            href="/services"
                            onClick={() => setServicesDropdownOpen(false)}
                            className="text-[#F28A32] hover:text-[#ff9e47] font-bold inline-flex items-center gap-1.5 transition-colors text-xs group/all"
                          >
                            <span>Explore All Services Overview</span>
                            <span className="group-hover/all:translate-x-1 transition-transform">→</span>
                          </Link>
                          <Link
                            href="/get-a-quote"
                            onClick={() => setServicesDropdownOpen(false)}
                            className="bg-[#E53935] hover:bg-[#c62828] text-white px-3.5 py-1.5 rounded-lg font-bold inline-flex items-center gap-1 transition-all text-xs shadow-sm hover:shadow"
                          >
                            <span>Get Free Quote</span>
                            <span>→</span>
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              // 2. Section Anchors on Homepage
              if (isHomepage && link.homepageHash) {
                return (
                  <button
                    key={link.label}
                    onClick={() => handleNavClick(link)}
                    className="text-white/85 hover:text-white text-sm font-medium transition-colors py-1 focus:outline-none relative group whitespace-nowrap"
                  >
                    <span>{link.label}</span>
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#E53935] group-hover:w-full transition-all duration-200" />
                  </button>
                );
              }

              // 3. Regular Canonical Page Links
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`text-sm font-medium transition-colors py-1 focus:outline-none relative group whitespace-nowrap ${
                    isActive ? 'text-white font-semibold' : 'text-white/85 hover:text-white'
                  }`}
                >
                  <span>{link.label}</span>
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 bg-[#E53935] transition-all duration-200 ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Right Action Suite - Get Free Quote */}
          <div className="hidden md:flex items-center shrink-0">
            {isHomepage ? (
              <button
                onClick={handleQuoteClick}
                className="bg-[#E53935] hover:bg-[#c62828] text-white text-xs xl:text-sm font-semibold px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl transition-all duration-200 shadow-md hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-[#E53935] whitespace-nowrap"
              >
                Get Free Quote
              </button>
            ) : (
              <Link
                href="/get-a-quote"
                className="bg-[#E53935] hover:bg-[#c62828] text-white text-xs xl:text-sm font-semibold px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl transition-all duration-200 shadow-md hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-[#E53935] whitespace-nowrap"
              >
                Get Free Quote
              </Link>
            )}
          </div>

          {/* Mobile Right Controls */}
          <div className="flex xl:hidden items-center gap-2 shrink-0">
            <a
              href={getTelUrl(BUSINESS.phone.primary)}
              className="w-10 h-10 rounded-xl bg-[#E53935] hover:bg-[#c62828] active:scale-95 text-white flex items-center justify-center shadow-md transition-transform md:hidden shrink-0"
              aria-label="Call Now"
              title="Call Now"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-2.2 2.2a15.057 15.057 0 01-6.59-6.59l2.2-2.21a.96.96 0 00.25-1.01A11.36 11.36 0 018.57 3.9c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.52c0-.55-.45-1-1-1z" />
              </svg>
            </a>

            <button
              type="button"
              className="w-10 h-10 rounded-xl bg-white/10 hover:bg-white/15 active:bg-white/20 border border-white/15 text-white flex items-center justify-center transition-all focus:outline-none focus:ring-2 focus:ring-[#E53935] shrink-0"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={menuOpen}
            >
              {menuOpen ? (
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.2}
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.2}
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* 2px White-Orange-Red gradient border line */}
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-white via-[#F28A32] to-[#E53935] pointer-events-none" />
      </header>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div
          id="mobile-nav-menu"
          className="fixed inset-0 z-40 bg-[#071A2B] flex flex-col justify-between px-4 sm:px-6 pt-20 pb-6 xl:hidden animate-in fade-in duration-200 overflow-y-auto overscroll-contain"
        >
          <div className="flex flex-col gap-1">
            {/* High Priority Contact Actions */}
            <div className="grid grid-cols-2 gap-2.5 mb-3">
              <a
                href={getTelUrl(BUSINESS.phone.primary)}
                className="flex items-center justify-center gap-2 bg-[#E53935] hover:bg-[#c62828] text-white font-bold py-3 px-3 rounded-xl shadow-md text-xs sm:text-sm transition-all"
              >
                <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-2.2 2.2a15.057 15.057 0 01-6.59-6.59l2.2-2.21a.96.96 0 00.25-1.01A11.36 11.36 0 018.57 3.9c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.52c0-.55-.45-1-1-1z" />
                </svg>
                <span>Call Now</span>
              </a>
              <a
                href={`https://wa.me/${BUSINESS.phone.primary.replace(/\s+/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-3 rounded-xl shadow-md text-xs sm:text-sm transition-all"
              >
                <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.558 4.116 1.535 5.847L.057 23.5l5.82-1.527A11.953 11.953 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.891 0-3.66-.5-5.195-1.378l-.373-.22-3.453.906.921-3.365-.242-.388A9.954 9.954 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
                </svg>
                <span>WhatsApp</span>
              </a>
            </div>

            {/* Expandable Services Accordion (COLLAPSED BY DEFAULT) */}
            <div className="border-b border-white/10 pb-1">
              <button
                type="button"
                onClick={() => setMobileServicesOpen((prev) => !prev)}
                className="w-full flex items-center justify-between text-white text-base font-bold py-2.5 hover:text-[#F28A32] transition-colors focus:outline-none"
                aria-expanded={mobileServicesOpen}
              >
                <div className="flex items-center gap-2">
                  <span>Our Services</span>
                  <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-[#F28A32]/20 text-[#F28A32] border border-[#F28A32]/30">
                    6 Options
                  </span>
                </div>
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${
                    mobileServicesOpen ? 'rotate-180 text-[#F28A32]' : 'text-white/60'
                  }`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {mobileServicesOpen && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 pb-3 pl-1 sm:pl-0 animate-in fade-in slide-in-from-top-1 duration-150">
                  <Link
                    href="/services"
                    onClick={() => {
                      setMenuOpen(false);
                      setMobileServicesOpen(false);
                    }}
                    className="bg-[#071A2B] hover:bg-[#0B253D] border border-[#F28A32]/50 text-[#F28A32] hover:text-white py-2 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-between sm:col-span-2"
                  >
                    <span>Overview: All Relocation Services</span>
                    <span className="text-[#E53935] text-xs font-bold">→</span>
                  </Link>
                  {serviceNavLinks.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      onClick={() => {
                        setMenuOpen(false);
                        setMobileServicesOpen(false);
                      }}
                      className="bg-[#0B253D] hover:bg-[#0F3252] border border-white/10 text-white/90 hover:text-white py-2 px-3 rounded-xl text-xs font-medium transition-all flex items-center justify-between group"
                    >
                      <span className="group-hover:text-[#F28A32] transition-colors">{service.label}</span>
                      <span className="text-[#E53935] text-xs font-bold">→</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Track Us Navigation Link */}
            <Link
              href="/tracking"
              onClick={() => {
                setMenuOpen(false);
                setMobileServicesOpen(false);
              }}
              className="text-white text-base font-bold text-left py-2.5 border-b border-white/10 hover:text-[#F28A32] transition-colors focus:outline-none"
            >
              Track Us
            </Link>

            {/* Other Navigation Links */}
            <Link
              href="/moving-guides"
              onClick={() => {
                setMenuOpen(false);
                setMobileServicesOpen(false);
              }}
              className="text-white text-base font-bold text-left py-2.5 border-b border-white/10 hover:text-[#F28A32] transition-colors focus:outline-none"
            >
              Moving Guides
            </Link>

            <Link
              href="/about"
              onClick={() => {
                setMenuOpen(false);
                setMobileServicesOpen(false);
              }}
              className="text-white text-base font-bold text-left py-2.5 border-b border-white/10 hover:text-[#F28A32] transition-colors focus:outline-none"
            >
              About Us
            </Link>

            <Link
              href="/process"
              onClick={() => {
                setMenuOpen(false);
                setMobileServicesOpen(false);
              }}
              className="text-white text-base font-bold text-left py-2.5 border-b border-white/10 hover:text-[#F28A32] transition-colors focus:outline-none"
            >
              Process
            </Link>

            <Link
              href="/why-us"
              onClick={() => {
                setMenuOpen(false);
                setMobileServicesOpen(false);
              }}
              className="text-white text-base font-bold text-left py-2.5 border-b border-white/10 hover:text-[#F28A32] transition-colors focus:outline-none"
            >
              Why Us
            </Link>

            <Link
              href="/testimonials"
              onClick={() => {
                setMenuOpen(false);
                setMobileServicesOpen(false);
              }}
              className="text-white text-base font-bold text-left py-2.5 border-b border-white/10 hover:text-[#F28A32] transition-colors focus:outline-none"
            >
              Customer Reviews
            </Link>

            <Link
              href="/faqs"
              onClick={() => {
                setMenuOpen(false);
                setMobileServicesOpen(false);
              }}
              className="text-white text-base font-bold text-left py-2.5 border-b border-white/10 hover:text-[#F28A32] transition-colors focus:outline-none"
            >
              Frequently Asked Questions
            </Link>

            <Link
              href="/contact"
              onClick={() => {
                setMenuOpen(false);
                setMobileServicesOpen(false);
              }}
              className="text-white text-base font-bold text-left py-2.5 border-b border-white/10 hover:text-[#F28A32] transition-colors focus:outline-none"
            >
              Contact Us
            </Link>
          </div>

          <div className="flex flex-col gap-2.5 pt-4 mt-2">
            {isHomepage ? (
              <button
                onClick={handleQuoteClick}
                className="bg-[#E53935] hover:bg-[#c62828] active:scale-[0.99] text-white font-bold py-3.5 rounded-xl text-base text-center shadow-lg transition-all"
              >
                Get Free Moving Quote
              </button>
            ) : (
              <Link
                href="/get-a-quote"
                onClick={() => {
                  setMenuOpen(false);
                  setMobileServicesOpen(false);
                }}
                className="bg-[#E53935] hover:bg-[#c62828] active:scale-[0.99] text-white font-bold py-3.5 rounded-xl text-base text-center shadow-lg transition-all"
              >
                Get Free Moving Quote
              </Link>
            )}

            <div className="flex items-center justify-center gap-1.5 text-xs text-white/70 py-1 text-center">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Monday to Sunday: Open 24 Hours</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
