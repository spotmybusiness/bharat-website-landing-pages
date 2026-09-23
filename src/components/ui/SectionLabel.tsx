import React from 'react';

interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * Standardized section eyebrow/label pill.
 * Visual pattern extracted from the homepage sections.
 *
 * Matches the existing: `bg-red-50 text-[#E53935] text-xs font-semibold
 * uppercase tracking-[0.08em] px-4 py-1.5 rounded-full border border-red-200`
 */
export default function SectionLabel({
  children,
  className = '',
}: SectionLabelProps) {
  return (
    <span
      className={`inline-block bg-red-50 text-[#E53935] text-xs font-semibold uppercase tracking-[0.08em] px-4 py-1.5 rounded-full border border-red-200 ${className}`}
    >
      {children}
    </span>
  );
}

