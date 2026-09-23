import React from 'react';
import Breadcrumb, { BreadcrumbItem } from '@/components/Breadcrumb';

interface PageHeroProps {
  label?: string;
  title: React.ReactNode;
  subtitle?: string;
  breadcrumbs?: BreadcrumbItem[];
  actions?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
}

/**
 * Reusable PageHero component styled strictly with the visual language of Bharat Relocators.
 * Uses the navy ambient backdrop, breadcrumb slot, and responsive spacing.
 */
export default function PageHero({
  label,
  title,
  subtitle,
  breadcrumbs,
  actions,
  children,
  className = '',
}: PageHeroProps) {
  return (
    <section
      className={`relative pt-32 pb-16 lg:pt-36 lg:pb-20 bg-[#071A2B] text-white overflow-hidden ${className}`}
    >
      {/* Ambient Dark Navy & Ember Glow Gradients */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#071A2B] via-[#071A2B]/90 to-[#082f52]/80 pointer-events-none" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#1478B5]/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[250px] bg-[#E53935]/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute inset-0 grain-overlay opacity-[0.03] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {breadcrumbs && breadcrumbs.length > 0 && (
          <div className="mb-6">
            <Breadcrumb items={breadcrumbs} />
          </div>
        )}

        <div className="max-w-3xl">
          {label && (
            <div className="mb-4">
              <span className="inline-block bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white/90 shadow-xs">
                {label}
              </span>
            </div>
          )}

          <h1 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-display font-extrabold leading-[1.15] mb-5 tracking-tight text-white">
            {title}
          </h1>

          {subtitle && (
            <p className="text-base sm:text-lg text-white/80 font-normal leading-relaxed mb-8 max-w-2xl">
              {subtitle}
            </p>
          )}

          {actions && <div className="flex flex-wrap gap-4 items-center">{actions}</div>}

          {children}
        </div>
      </div>

      {/* Bottom Divider */}
      <div className="absolute bottom-0 inset-x-0 z-10 pointer-events-none">
        <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </div>
    </section>
  );
}

