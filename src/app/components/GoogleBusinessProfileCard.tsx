'use client';

import React, { useState } from 'react';
import Image from 'next/image';

export default function GoogleBusinessProfileCard() {
  const [copied, setCopied] = useState(false);

  const googleMapsUrl =
    'https://www.google.com/maps/search/?api=1&query=Bharat+Relocators+17+Ramlal+Bazar+Rd+Haltu+Kolkata+West+Bengal+700078';
  const directionsUrl =
    'https://www.google.com/maps/dir/?api=1&destination=17,+Ramlal+Bazar+Rd,+Ramlal+Bazar,+Haltu,+Kolkata,+West+Bengal+700078';
  const whatsappUrl =
    'https://wa.me/919123046504?text=Hi%20Bharat%20Relocators%2C%20I%20would%20like%20to%20get%20a%20quotation%20for%20relocation.';

  const handleShare = async (e: React.MouseEvent) => {
    e.preventDefault();
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Bharat Relocators - Kolkata',
          text: 'Bharat Relocators | Best Packers and Movers in Kolkata',
          url: googleMapsUrl,
        });
      } catch {
        // User cancelled share
      }
    } else {
      navigator.clipboard.writeText(googleMapsUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handleScrollTo = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative mx-auto select-none font-sans flex items-center justify-center">
      {/* Smartphone Outer Chassis */}
      <div className="relative w-[320px] sm:w-[350px] bg-gradient-to-b from-[#2a2e33] via-[#1b1e22] to-[#111417] p-2.5 sm:p-3 rounded-[48px] shadow-[0_30px_70px_-15px_rgba(0,0,0,0.95),0_0_50px_rgba(8,47,82,0.6)] border-2 border-slate-700/80 ring-1 ring-white/20">
        {/* Hardware Button Accents */}
        <div className="absolute -left-[5px] top-24 w-[3px] h-7 bg-slate-500 rounded-l-sm" />
        <div className="absolute -left-[5px] top-36 w-[3px] h-12 bg-slate-500 rounded-l-sm" />
        <div className="absolute -left-[5px] top-52 w-[3px] h-12 bg-slate-500 rounded-l-sm" />
        <div className="absolute -right-[5px] top-32 w-[3px] h-16 bg-slate-500 rounded-r-sm" />

        {/* Smartphone Screen Container */}
        <div className="relative w-full rounded-[38px] overflow-hidden bg-[#202124] shadow-inner">
          {/* Base GMB Screenshot Image */}
          <Image
            src="/images/gmb-profile.png"
            alt="Bharat Relocators Google Business Profile"
            width={502}
            height={1024}
            sizes="(max-width: 640px) 320px, 350px"
            className="w-full h-auto block select-none pointer-events-none"
            loading="lazy"
            quality={85}
          />

          {/* ============================================================ */}
          {/* PRECISE INTERACTIVE OVERLAY BUTTONS                          */}
          {/* ============================================================ */}

          {/* 1. Google Search Bar (Top) */}
          <a
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            title="Search Bharat Relocators on Google Maps"
            style={{ top: '1.46%', left: '3.98%', width: '92.0%', height: '6.05%' }}
            className="absolute rounded-full cursor-pointer hover:bg-white/10 active:bg-white/20 transition-all focus:outline-none"
          />

          {/* 2. Top-Right Share Icon */}
          <button
            onClick={handleShare}
            title="Share Profile"
            style={{ top: '9.28%', right: '3.98%', width: '9.96%', height: '4.88%' }}
            className="absolute rounded-full cursor-pointer hover:bg-white/15 active:bg-white/25 transition-all focus:outline-none"
          />

          {/* 3. Rating & Review Count Link "(305)" */}
          <a
            href="#reviews"
            onClick={(e) => handleScrollTo('reviews', e)}
            title="View 305+ Verified Customer Reviews"
            style={{ top: '22.0%', left: '13.5%', width: '12.5%', height: '3.0%' }}
            className="absolute rounded-md cursor-pointer hover:bg-[#8AB4F8]/20 active:bg-[#8AB4F8]/30 transition-all focus:outline-none"
          />

          {/* 4. Tab: Overview */}
          <a
            href="#hero"
            onClick={(e) => handleScrollTo('hero', e)}
            title="Overview"
            style={{ top: '28.3%', left: '3.98%', width: '22.9%', height: '5.4%' }}
            className="absolute rounded-full cursor-pointer hover:bg-white/15 active:bg-white/25 transition-all focus:outline-none"
          />

          {/* 5. Tab: Reviews */}
          <a
            href="#reviews"
            onClick={(e) => handleScrollTo('reviews', e)}
            title="Client Reviews"
            style={{ top: '28.3%', left: '27.88%', width: '19.9%', height: '5.4%' }}
            className="absolute rounded-full cursor-pointer hover:bg-white/15 active:bg-white/25 transition-all focus:outline-none"
          />

          {/* 6. Tab: Services */}
          <a
            href="#services"
            onClick={(e) => handleScrollTo('services', e)}
            title="Our Services"
            style={{ top: '28.3%', left: '49.4%', width: '20.9%', height: '5.4%' }}
            className="absolute rounded-full cursor-pointer hover:bg-white/15 active:bg-white/25 transition-all focus:outline-none"
          />

          {/* 7. Tab: Photos */}
          <a
            href="#services"
            onClick={(e) => handleScrollTo('services', e)}
            title="Fleet Photos & Packaging"
            style={{ top: '28.3%', left: '71.7%', width: '18.3%', height: '5.4%' }}
            className="absolute rounded-full cursor-pointer hover:bg-white/15 active:bg-white/25 transition-all focus:outline-none"
          />

          {/* 8. Action: CALL Button */}
          <a
            href="tel:+919123046504"
            title="Call +91 91230 46504"
            style={{ top: '61.5%', left: '3.58%', width: '15.5%', height: '9.8%' }}
            className="absolute rounded-2xl cursor-pointer hover:bg-white/15 active:bg-white/25 transition-all focus:outline-none"
          />

          {/* 9. Action: DIRECTIONS Button */}
          <a
            href={directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            title="Get Directions on Google Maps"
            style={{ top: '61.5%', left: '23.5%', width: '16.3%', height: '9.8%' }}
            className="absolute rounded-2xl cursor-pointer hover:bg-white/15 active:bg-white/25 transition-all focus:outline-none"
          />

          {/* 10. Action: WHATSAPP Button */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            title="Chat with Us on WhatsApp"
            style={{ top: '61.5%', left: '43.4%', width: '16.3%', height: '9.8%' }}
            className="absolute rounded-2xl cursor-pointer hover:bg-white/15 active:bg-white/25 transition-all focus:outline-none"
          />

          {/* 11. Action: WEBSITE Button */}
          <a
            href="#hero"
            onClick={(e) => handleScrollTo('hero', e)}
            title="Explore Website"
            style={{ top: '61.5%', left: '63.3%', width: '16.3%', height: '9.8%' }}
            className="absolute rounded-2xl cursor-pointer hover:bg-white/15 active:bg-white/25 transition-all focus:outline-none"
          />

          {/* 12. Action: SHARE Button */}
          <button
            onClick={handleShare}
            title="Share Business Profile"
            style={{ top: '61.5%', left: '82.6%', width: '14.9%', height: '9.8%' }}
            className="absolute rounded-2xl cursor-pointer hover:bg-white/15 active:bg-white/25 transition-all focus:outline-none"
          />

          {/* 13. ADDRESS & MINI MAP Row */}
          <a
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            title="Open 17, Ramlal Bazar Rd, Haltu on Google Maps"
            style={{ top: '71.8%', left: '2.98%', width: '94.0%', height: '12.7%' }}
            className="absolute rounded-xl cursor-pointer hover:bg-white/10 active:bg-white/20 transition-all focus:outline-none"
          />

          {/* 14. WHATSAPP Row */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            title="Connect via WhatsApp"
            style={{ top: '84.5%', left: '2.98%', width: '94.0%', height: '6.8%' }}
            className="absolute rounded-xl cursor-pointer hover:bg-white/10 active:bg-white/20 transition-all focus:outline-none"
          />

          {/* 15. Instant Quote Action Row */}
          <a
            href="#quote"
            onClick={(e) => handleScrollTo('quote', e)}
            title="Get an Instant Relocation Quote"
            style={{ top: '91.3%', left: '2.98%', width: '94.0%', height: '7.3%' }}
            className="absolute rounded-xl cursor-pointer hover:bg-white/10 active:bg-white/20 transition-all focus:outline-none"
          />

          {/* Feedback Toast */}
          {copied && (
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-[#303134] text-white text-xs font-medium px-3.5 py-1.5 rounded-full shadow-2xl border border-[#5F6368] animate-in fade-in duration-200 z-30">
              Link copied to clipboard!
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
