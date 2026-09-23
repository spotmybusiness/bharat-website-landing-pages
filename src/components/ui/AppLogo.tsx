import React from 'react';

type AppLogoProps = {
  size?: number;
  className?: string;
};

export default function AppLogo({
  size = 44,
  className = '',
}: AppLogoProps) {
  const gradientId = `bharat-logo-gradient-${size}`;

  return (
    <span
      className={`inline-flex shrink-0 items-center justify-center overflow-hidden rounded-full border border-white/20 bg-[#082F52] shadow-[0_4px_14px_rgba(0,0,0,0.22)] ${className}`}
      style={{ width: size, height: size }}
      aria-label="Bharat Relocators logo"
      role="img"
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <linearGradient
            id={gradientId}
            x1="12"
            y1="8"
            x2="88"
            y2="92"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#F28A32" />
            <stop offset="1" stopColor="#E53935" />
          </linearGradient>
        </defs>

        <circle cx="50" cy="50" r="47" fill="#082F52" />
        <circle
          cx="50"
          cy="50"
          r="45"
          stroke="white"
          strokeOpacity="0.2"
          strokeWidth="2"
        />

        <path
          d="M20 36C20 32.686 22.686 30 26 30H58L72 43V66C72 68.209 70.209 70 68 70H26C22.686 70 20 67.314 20 64V36Z"
          fill={`url(#${gradientId})`}
        />

        <path
          d="M58 30V43H72"
          stroke="#FFE7D0"
          strokeWidth="2"
          strokeLinejoin="round"
        />

        <path
          d="M31 43H48M31 51H61M31 59H53"
          stroke="white"
          strokeWidth="4"
          strokeLinecap="round"
          opacity="0.95"
        />

        <circle cx="31" cy="76" r="7" fill="#E53935" stroke="#082F52" strokeWidth="3" />
        <circle cx="62" cy="76" r="7" fill="#E53935" stroke="#082F52" strokeWidth="3" />

        <path
          d="M14 82H86"
          stroke="#F28A32"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
    </span>
  );
}
