import React from 'react';
import SectionLabel from '@/components/ui/SectionLabel';

interface SectionHeaderProps {
  label?: string;
  title: React.ReactNode;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
}

/**
 * Standardized section title and subtitle block.
 * Extracted from homepage section header patterns.
 */
export default function SectionHeader({
  label,
  title,
  subtitle,
  align = 'center',
  className = '',
}: SectionHeaderProps) {
  const isCenter = align === 'center';

  return (
    <div
      className={`max-w-3xl mb-14 sm:mb-16 ${
        isCenter ? 'mx-auto text-center' : 'text-left'
      } ${className}`}
    >
      {label && <SectionLabel className="mb-4">{label}</SectionLabel>}
      <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-display font-bold text-[#082F52] mb-4 tracking-tight leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}

