'use client';

import React from 'react';

export default function HeroSection() {
  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'auto' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-[600px] lg:h-[88vh] lg:min-h-[650px] lg:max-h-[820px] flex flex-col justify-start overflow-hidden bg-[#071A2B] text-white pt-24 sm:pt-26 lg:pt-24 pb-10"
    >
      {/* Embedded High-Performance Cinematic Animation Styles */}
      <style>{`
        /* 1. Cinematic Slower Left-to-Right Truck Journey with Weight */
        @keyframes truckDriveInCinematic {
          0% {
            transform: translate3d(calc(-90vw - 100%), 0, 0);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          70% {
            transform: translate3d(24px, 0, 0);
          }
          85% {
            transform: translate3d(-6px, 1px, 0);
          }
          95% {
            transform: translate3d(2px, -0.5px, 0);
          }
          100% {
            transform: translate3d(0, 0, 0);
            opacity: 1;
          }
        }

        /* 2. Wheel Rotation during 3.6s drive */
        @keyframes wheelSpinSmooth {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        /* 3. Headlights Fade Off smoothly after truck comes to a complete stop */
        @keyframes headlightFadeOff {
          0%, 78% {
            opacity: 1;
          }
          95%, 100% {
            opacity: 0;
          }
        }

        /* 4. Realistic Box Gravity Placement & Settle */
        @keyframes boxDropRealistic {
          0% {
            opacity: 0;
            transform: translate3d(0, -110px, 0) scale(0.5);
          }
          65% {
            opacity: 1;
            transform: translate3d(0, 8px, 0) scale(1.08, 0.92);
          }
          82% {
            transform: translate3d(0, -4px, 0) scale(0.96, 1.04);
          }
          94% {
            transform: translate3d(0, 1px, 0) scale(1.01, 0.99);
          }
          100% {
            opacity: 1;
            transform: translate3d(0, 0, 0) scale(1);
          }
        }

        /* 5. 3D Box Flaps Unfolding */
        @keyframes boxFlapLeft3D {
          0% {
            transform: rotateX(0deg);
          }
          100% {
            transform: rotateX(-130deg) translateY(-12px);
          }
        }

        @keyframes boxFlapRight3D {
          0% {
            transform: rotateX(0deg);
          }
          100% {
            transform: rotateX(-130deg) translateY(-12px);
          }
        }

        /* 6. Golden Amber Unpacking Glow Aura */
        @keyframes boxUnpackAura {
          0% {
            opacity: 0;
            transform: translate3d(-50%, 0, 0) scale(0.4);
          }
          45% {
            opacity: 0.95;
            transform: translate3d(-50%, -20px, 0) scale(1.3);
          }
          80% {
            opacity: 0.5;
            transform: translate3d(-50%, -10px, 0) scale(1);
          }
          100% {
            opacity: 0;
            transform: translate3d(-50%, 0, 0) scale(0.8);
          }
        }

        /* 7. Box Disappearance after Unpacking */
        @keyframes boxDisappear {
          0% {
            opacity: 1;
            transform: translate3d(0, 0, 0) scale(1);
          }
          100% {
            opacity: 0;
            transform: translate3d(0, 12px, 0) scale(0.88);
            visibility: hidden;
          }
        }

        /* 8. Coordinated Hero Content Unpacking Reveal */
        @keyframes heroUnpackEmerge {
          0% {
            opacity: 0;
            transform: translate3d(20px, 45px, 0) scale(0.92);
            filter: blur(4px);
          }
          60% {
            filter: blur(0px);
          }
          100% {
            opacity: 1;
            transform: translate3d(0, 0, 0) scale(1);
            filter: blur(0px);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .anim-truck-unit,
          .anim-box-unit,
          .anim-hero-item {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
            filter: none !important;
          }
        }

        /* Mobile Devices: Remove all animation entirely, hide truck/box, instantly load left-side content */
        @media (max-width: 1023px) {
          .anim-truck-unit,
          .anim-box-unit {
            display: none !important;
          }
          .anim-hero-item {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
            filter: none !important;
          }
        }
      `}</style>

      {/* Background Ambience & Atmospheric Twilight Highway */}

        {/* Ambient Dark Navy & Ember Glow Gradients */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#071A2B] via-[#071A2B]/90 to-[#082f52]/80" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#36c27a]/15 rounded-full blur-[120px]" />
        <div className="absolute bottom-10 left-1/4 w-[500px] h-[300px] bg-[#11a659]/10 rounded-full blur-[100px]" />
        <div className="absolute inset-0 grain-overlay opacity-[0.03]" />

      {/* ----------------------------------------------------------------- */}
      {/* 1. HERO RELOCATION TRUCK & MOVING BOX (Desktop Only: Right Side)  */}
      {/* ----------------------------------------------------------------- */}
      <div
        className="anim-truck-unit hidden lg:block absolute inset-0 pointer-events-none z-10 overflow-hidden"
        aria-hidden="true"
      >
        {/* Sleek Linear Road Reference (Ground line on which truck moves) */}
        <div
          className="absolute inset-x-0 bottom-[106px] xl:bottom-[122px] 2xl:bottom-[138px] pointer-events-none"
          aria-hidden="true"
        >
          <div className="relative w-full">
            {/* 1. Crisp Top Edge / Road Curb Line */}
            <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-white/25 via-30% to-white/35" />

            {/* 2. Sleek Asphalt Road Bed */}
            <div className="w-full h-3 bg-gradient-to-b from-white/[0.08] via-slate-800/40 to-transparent" />

            {/* 3. Subtle Dashed Highway Lane Marker */}
            <div
              className="absolute top-[6px] inset-x-0 h-[1.5px] opacity-35"
              style={{
                backgroundImage:
                  'repeating-linear-gradient(90deg, #FFFFFF 0, #FFFFFF 16px, transparent 16px, transparent 32px)',
              }}
            />
          </div>
        </div>

        <div
          className="absolute bottom-12 sm:bottom-14 lg:bottom-[80px] xl:bottom-[92px] 2xl:bottom-[104px] right-2 sm:right-4 lg:right-4 xl:right-8 flex items-end"
          style={{
            animation: 'truckDriveInCinematic 3.6s cubic-bezier(0.12, 0.85, 0.25, 1) 0.1s both',
          }}
        >
          <div className="relative flex items-end">
            {/* 1. KRAFT RELOCATION MOVING BOX (Left of Truck, fades away after unpacking) */}
            <div
              className="anim-box-unit relative -mr-8 lg:-mr-14 xl:-mr-16 z-20 w-[110px] lg:w-[160px] xl:w-[180px]"
              style={{
                animation:
                  'boxDropRealistic 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) 3.6s both, boxDisappear 0.75s cubic-bezier(0.4, 0, 0.2, 1) 5.8s forwards',
              }}
            >
              {/* Box Internal Amber Light Ray */}
              <div
                className="absolute -top-24 left-1/2 w-40 sm:w-56 h-48 bg-gradient-to-t from-[#F28A32]/60 via-[#E53935]/30 to-transparent blur-xl rounded-full pointer-events-none"
                style={{
                  animation: 'boxUnpackAura 2.0s ease-in-out 4.4s both',
                }}
              />

              {/* 3D Moving Box Vector Graphic with Refined Soft Shadows */}
              <svg
                viewBox="0 0 100 90"
                className="w-full h-auto overflow-visible drop-shadow-[0_8px_16px_rgba(0,0,0,0.25)]"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient id="boxFrontGradLg" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#D4A373" />
                    <stop offset="100%" stopColor="#A97142" />
                  </linearGradient>
                  <linearGradient id="boxSideGradLg" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#A97142" />
                    <stop offset="100%" stopColor="#7F5539" />
                  </linearGradient>
                  <linearGradient id="boxCavityLg" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#4A2810" />
                    <stop offset="100%" stopColor="#1F0D05" />
                  </linearGradient>
                </defs>

                {/* Soft Ground Shadow */}
                <ellipse cx="50" cy="85" rx="42" ry="6" fill="#000000" fillOpacity="0.22" />

                {/* Inside Box Cavity */}
                <polygon points="15,35 50,22 85,35 50,48" fill="url(#boxCavityLg)" />

                {/* Left Top Flap */}
                <g
                  style={{
                    transformOrigin: '15px 35px',
                    animation: 'boxFlapLeft3D 0.7s cubic-bezier(0.16, 1, 0.3, 1) 4.4s forwards',
                  }}
                >
                  <polygon points="15,35 50,22 50,30 15,42" fill="#E6BA88" stroke="#C58F58" strokeWidth="0.8" />
                </g>

                {/* Right Top Flap */}
                <g
                  style={{
                    transformOrigin: '85px 35px',
                    animation: 'boxFlapRight3D 0.7s cubic-bezier(0.16, 1, 0.3, 1) 4.4s forwards',
                  }}
                >
                  <polygon points="50,22 85,35 85,42 50,30" fill="#DDB07E" stroke="#C58F58" strokeWidth="0.8" />
                </g>

                {/* Main Front Body */}
                <polygon points="15,35 50,48 50,82 15,68" fill="url(#boxFrontGradLg)" stroke="#9C6636" strokeWidth="1" />
                {/* Right Side Body */}
                <polygon points="50,48 85,35 85,68 50,82" fill="url(#boxSideGradLg)" stroke="#7F5539" strokeWidth="1" />

                {/* Red Sealing Tape */}
                <polygon points="15,50 50,63 50,56 15,43" fill="#E53935" fillOpacity="0.95" />
                <polygon points="50,63 85,50 85,43 50,56" fill="#C62828" fillOpacity="0.95" />

                {/* Box Stamps & Fragile Upward Arrows */}
                <g opacity="0.75">
                  <path d="M 28 58 L 28 64 M 25 61 L 28 58 L 31 61" stroke="#3E2723" strokeWidth="1.2" strokeLinecap="round" />
                  <path d="M 36 58 L 36 64 M 33 61 L 36 58 L 39 61" stroke="#3E2723" strokeWidth="1.2" strokeLinecap="round" />
                  <rect x="62" y="58" width="14" height="8" rx="1" stroke="#3E2723" strokeWidth="0.8" strokeDasharray="1,1" />
                </g>
              </svg>
            </div>

            {/* 2. BHARAT RELOCATORS VECTOR TRUCK (Enlarged to fill right-side vacancy) */}
            <div className="w-[300px] lg:w-[560px] xl:w-[640px] 2xl:w-[720px] h-auto relative drop-shadow-[0_12px_24px_rgba(0,0,0,0.28)]">
              <svg
                viewBox="0 0 340 180"
                className="w-full h-auto overflow-visible select-none"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <radialGradient id="truckShadowLg" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#000000" stopOpacity="0.35" />
                    <stop offset="65%" stopColor="#000000" stopOpacity="0.15" />
                    <stop offset="100%" stopColor="#000000" stopOpacity="0" />
                  </radialGradient>

                  <linearGradient id="containerGradLg" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#FFFFFF" />
                    <stop offset="55%" stopColor="#F8FAFC" />
                    <stop offset="100%" stopColor="#E2E8F0" />
                  </linearGradient>

                  <linearGradient id="cabGradLg" x1="0" y1="0" x2="1" y2="0.8">
                    <stop offset="0%" stopColor="#E53935" />
                    <stop offset="70%" stopColor="#C62828" />
                    <stop offset="100%" stopColor="#8E1B1B" />
                  </linearGradient>

                  <linearGradient id="blueVisorLg" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#1E88E5" />
                    <stop offset="100%" stopColor="#1478B5" />
                  </linearGradient>

                  <linearGradient id="windshieldLg" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#E0F2FE" stopOpacity="0.95" />
                    <stop offset="40%" stopColor="#BAE6FD" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#38BDF8" stopOpacity="0.85" />
                  </linearGradient>

                  <linearGradient id="rimGradLg" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#E53935" />
                    <stop offset="100%" stopColor="#B71C1C" />
                  </linearGradient>
                </defs>

                {/* Soft Ground Shadow */}
                <ellipse cx="170" cy="162" rx="160" ry="12" fill="url(#truckShadowLg)" />

                {/* Headlight Beam (Fades off after stopping) */}
                <g style={{ animation: 'headlightFadeOff 4.6s ease-out 0.1s both' }}>
                  <polygon
                    points="308,124 460,95 460,155 308,136"
                    fill="#FEF08A"
                    fillOpacity="0.18"
                    className="mix-blend-screen pointer-events-none"
                  />
                </g>

                {/* Chassis Frame & Fuel Tank */}
                <rect x="40" y="132" width="250" height="12" rx="2" fill="#1E293B" />
                <rect x="130" y="134" width="45" height="10" rx="3" fill="#334155" />
                {/* Mudguards */}
                <path d="M 48 142 A 28 28 0 0 1 104 142" stroke="#0F172A" strokeWidth="6" fill="none" />
                <path d="M 238 142 A 28 28 0 0 1 294 142" stroke="#0F172A" strokeWidth="6" fill="none" />

                {/* Cargo Container */}
                <g>
                  <rect x="20" y="42" width="195" height="96" rx="4" fill="url(#containerGradLg)" stroke="#CBD5E1" strokeWidth="1.5" />

                  {/* Red Aerodynamic Corner Styling */}
                  <path d="M 20 110 L 20 138 L 48 138 Z" fill="#E53935" />
                  <polygon points="120,138 215,138 215,124 165,124" fill="#E53935" />

                  {/* Container Seam Lines */}
                  <line x1="20" y1="48" x2="215" y2="48" stroke="#E2E8F0" strokeWidth="1.5" />
                  <line x1="20" y1="132" x2="215" y2="132" stroke="#E2E8F0" strokeWidth="1.5" />

                  {/* "BHARAT RELOCATORS" Brand Header */}
                  <rect x="30" y="52" width="70" height="18" rx="2" fill="#E53935" />
                  <text x="65" y="65" fill="#FFFFFF" fontSize="11" fontWeight="900" fontFamily="sans-serif" textAnchor="middle" letterSpacing="0.5">
                    BHARAT
                  </text>
                  <text x="106" y="85" fill="#082F52" fontSize="13" fontWeight="900" fontFamily="sans-serif" textAnchor="middle" letterSpacing="1">
                    RELOCATORS
                  </text>

                  {/* World & Route Map Silhouette Graphic */}
                  <g opacity="0.65" transform="translate(42, 90)">
                    <path d="M 5 8 Q 15 2 25 6 Q 30 14 20 18 Q 10 22 5 8 Z" fill="#94A3B8" />
                    <path d="M 32 4 Q 45 2 55 10 Q 50 20 38 18 Q 30 12 32 4 Z" fill="#94A3B8" />
                    <path d="M 60 6 Q 75 4 85 12 Q 80 22 68 18 Q 58 14 60 6 Z" fill="#94A3B8" />
                    <path d="M 40 22 Q 52 24 50 32 Q 42 34 38 28 Z" fill="#94A3B8" />

                    {/* Red Logistic Route Curves & Planes */}
                    <path d="M 12 12 Q 35 -2 55 10" stroke="#E53935" strokeWidth="1.2" strokeDasharray="2,2" fill="none" />
                    <path d="M 45 10 Q 60 22 75 14" stroke="#E53935" strokeWidth="1.2" strokeDasharray="2,2" fill="none" />
                    <polygon points="32,4 36,6 33,8 33,6 30,5" fill="#E53935" />
                    <polygon points="65,15 69,17 66,19 66,17 63,16" fill="#E53935" />
                    <circle cx="12" cy="12" r="1.8" fill="#E53935" />
                    <circle cx="55" cy="10" r="1.8" fill="#E53935" />
                    <circle cx="75" cy="14" r="1.8" fill="#E53935" />
                  </g>
                </g>

                {/* Truck Cabin */}
                <g>
                  <path
                    d="M 215 68 L 265 68 Q 285 70 295 90 L 305 110 Q 308 120 308 134 L 308 138 L 215 138 Z"
                    fill="url(#cabGradLg)"
                  />

                  {/* Blue Top Roof Visor */}
                  <path
                    d="M 215 52 L 255 52 Q 268 54 274 68 L 215 68 Z"
                    fill="url(#blueVisorLg)"
                  />

                  {/* Windshield Glass */}
                  <path
                    d="M 235 73 L 262 73 Q 275 75 284 92 L 290 108 L 235 108 Z"
                    fill="url(#windshieldLg)"
                    stroke="#1E293B"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M 242 75 L 252 75 L 242 105 L 237 105 Z"
                    fill="#FFFFFF"
                    fillOpacity="0.45"
                  />

                  <line x1="262" y1="73" x2="262" y2="108" stroke="#1E293B" strokeWidth="2" />
                  <rect x="290" y="88" width="6" height="18" rx="2" fill="#0F172A" />
                  <line x1="284" y1="95" x2="290" y2="95" stroke="#0F172A" strokeWidth="2.5" />
                  <rect x="238" y="114" width="10" height="2.5" rx="1" fill="#0F172A" />

                  {/* Bumper & Headlight (Headlight bulb glows then smoothly dims off) */}
                  <rect x="298" y="126" width="12" height="12" rx="2" fill="#1E293B" />
                  <path d="M 304 128 L 309 128 L 309 136 L 304 136 Z" fill="#94A3B8" />
                  <g style={{ animation: 'headlightFadeOff 4.6s ease-out 0.1s both' }}>
                    <path d="M 304 128 L 309 128 L 309 136 L 304 136 Z" fill="#FEF08A" />
                  </g>
                </g>

                {/* Rotating Wheels */}
                <g transform="translate(76, 142)">
                  <g style={{ animation: 'wheelSpinSmooth 0.45s linear 8' }}>
                    <circle cx="0" cy="0" r="22" fill="#1E293B" stroke="#0F172A" strokeWidth="3" />
                    <circle cx="0" cy="0" r="16" fill="#334155" />
                    <circle cx="0" cy="0" r="12" fill="url(#rimGradLg)" />
                    <circle cx="0" cy="0" r="5" fill="#E2E8F0" />
                    <circle cx="0" cy="0" r="2" fill="#0F172A" />
                    <circle cx="0" cy="-8" r="1.2" fill="#FFFFFF" />
                    <circle cx="8" cy="0" r="1.2" fill="#FFFFFF" />
                    <circle cx="0" cy="8" r="1.2" fill="#FFFFFF" />
                    <circle cx="-8" cy="0" r="1.2" fill="#FFFFFF" />
                  </g>
                </g>

                <g transform="translate(266, 142)">
                  <g style={{ animation: 'wheelSpinSmooth 0.45s linear 8' }}>
                    <circle cx="0" cy="0" r="22" fill="#1E293B" stroke="#0F172A" strokeWidth="3" />
                    <circle cx="0" cy="0" r="16" fill="#334155" />
                    <circle cx="0" cy="0" r="12" fill="url(#rimGradLg)" />
                    <circle cx="0" cy="0" r="5" fill="#E2E8F0" />
                    <circle cx="0" cy="0" r="2" fill="#0F172A" />
                    <circle cx="0" cy="-8" r="1.2" fill="#FFFFFF" />
                    <circle cx="8" cy="0" r="1.2" fill="#FFFFFF" />
                    <circle cx="0" cy="8" r="1.2" fill="#FFFFFF" />
                    <circle cx="-8" cy="0" r="1.2" fill="#FFFFFF" />
                  </g>
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* ----------------------------------------------------------------- */}
      {/* 2. SYNCHRONIZED HERO CONTENT (Shifted Left, strictly left of red line) */}
      {/* ----------------------------------------------------------------- */}
      <div className="relative z-20 w-full max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 mt-4 sm:mt-6 lg:mt-8 mb-auto pt-2 pb-6">
        <div className="w-full max-w-xl lg:max-w-[490px] xl:max-w-[530px] 2xl:max-w-[580px]">
          {/* Live Verification Badge (Unpacked from Relocation Box after pause) */}
          <div className="text-center sm:text-left">
            <div
              className="anim-hero-item inline-flex items-center gap-2.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-1.5 mb-6 shadow-sm"
              style={{
                animation: 'heroUnpackEmerge 0.85s cubic-bezier(0.16, 1, 0.3, 1) 5.4s both',
              }}
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#36c27a] opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#11a659]" />
              </span>
              <span className="text-xs font-bold uppercase tracking-wider text-white/90">
                ISO 9001:2015 Certified · Kolkata to PAN India
              </span>
            </div>
          </div>

          {/* Clean Confident Headline (Unpacked from Relocation Box) */}
          <h1
            className="anim-hero-item text-3xl sm:text-4xl lg:text-[2.65rem] xl:text-[3.1rem] font-display font-extrabold leading-[1.14] mb-5 tracking-tight text-white text-center sm:text-left"
            style={{
              animation: 'heroUnpackEmerge 0.95s cubic-bezier(0.16, 1, 0.3, 1) 5.65s both',
            }}
          >
            <span>Packers and Movers </span>
            <span className="text-[#F28A32]">in Kolkata, </span>
            <span className="text-[#E53935] block sm:inline">Moving you Forward</span>
          </h1>

          {/* Subtext (Unpacked from Relocation Box) */}
          <p
            className="anim-hero-item text-sm sm:text-base text-white/80 font-normal leading-relaxed mb-8 max-w-lg text-center sm:text-left pl-7"
            style={{
              animation: 'heroUnpackEmerge 0.9s cubic-bezier(0.16, 1, 0.3, 1) 5.9s both',
            }}
          >
            From high-value household shifting and specialized bike and vehicle transport to structured
            office relocation. Experience seamless logistics handled by verified specialists.
          </p>

          {/* Primary & Secondary Action CTAs (Unpacked Together in Harmony) */}
          <div
            className="anim-hero-item flex flex-col sm:flex-row gap-3.5 items-stretch sm:items-center"
            style={{
              animation: 'heroUnpackEmerge 0.85s cubic-bezier(0.16, 1, 0.3, 1) 6.1s both',
            }}
          >
            {/* Primary Quote CTA */}
            <button
              onClick={() => handleScrollTo('quote')}
              className="relative inline-flex items-center justify-center gap-2 bg-[#E53935] hover:bg-[#c62828] text-white font-semibold px-5 py-3.5 rounded-2xl shadow-xl hover:shadow-2xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 text-sm sm:text-[15px] overflow-hidden group"
            >
              <span>Get Free Moving Quote</span>
              <svg
                className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                strokeWidth={2.5}
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
              <div className="btn-shimmer absolute inset-0 pointer-events-none" />
            </button>
            {/* Dial / Phone CTA */}
            <a
              href="tel:+919123046504"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 border border-white/20 text-white font-semibold px-4 py-3.5 rounded-2xl shadow-md transition-all duration-200 text-sm sm:text-[15px] group"
            >
              <span className="w-5 h-5 rounded-full bg-[#F28A32] text-white flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
                </svg>
              </span>
              <span className="tracking-normal text-white">Call Now</span>
            </a>
            {/* WhatsApp CTA */}
            <a
              href="https://api.whatsapp.com/send/?phone=919123046504&text=Hi%2C+I+need+a+quote+for+my+relocation+with+Bharat+Relocators.&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#059669] hover:bg-[#128C7E] border border-[#25D366]/40 text-white font-semibold px-4 py-3.5 rounded-2xl shadow-md hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 text-sm sm:text-[15px] group"
            >
              <span className="w-5 h-5 text-white flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-200">
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12.04 2C6.51 2 2 6.51 2 12.04c0 1.77.46 3.49 1.33 5.01L2 22l5.08-1.31a10 10 0 0 0 4.96 1.35h.01C17.57 22.04 22 17.53 22 12.04 22 6.51 17.57 2 12.04 2Zm0 18.35h-.01a8.34 8.34 0 0 1-4.25-1.17l-.3-.18-3.02.78.81-2.94-.2-.3a8.32 8.32 0 1 1 6.97 3.81Zm4.57-6.24c-.25-.13-1.48-.73-1.71-.81-.23-.08-.4-.13-.57.13-.17.25-.65.81-.8.98-.15.17-.3.19-.55.06-.25-.13-1.04-.38-1.98-1.22-.73-.65-1.22-1.45-1.36-1.7-.14-.25-.01-.39.11-.52.11-.11.25-.3.38-.45.13-.15.17-.25.25-.42.08-.17.04-.32-.02-.45-.06-.13-.57-1.37-.78-1.88-.2-.49-.41-.42-.57-.43h-.49c-.17 0-.45.06-.68.32-.23.25-.89.87-.89 2.12s.91 2.46 1.04 2.63c.13.17 1.79 2.73 4.34 3.83.61.26 1.09.42 1.46.54.61.19 1.16.16 1.6.1.49-.07 1.48-.61 1.69-1.2.21-.59.21-1.09.15-1.2-.06-.11-.23-.17-.48-.3Z" />
                </svg>
              </span>
              <span className="tracking-normal text-white">WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Wave Divider */}
      <div className="absolute bottom-0 inset-x-0 z-10 pointer-events-none">
        <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </div>
    </section>
  );
}
