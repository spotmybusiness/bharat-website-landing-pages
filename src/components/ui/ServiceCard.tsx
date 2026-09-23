import React from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';

export interface ServiceCardProps {
  id: string;
  title: string;
  category: string;
  desc: string;
  img: string;
  alt: string;
  features: string[];
  icon: React.ReactNode;
  /** Link to service page or CTA. Defaults to '/get-a-quote' if not specified. */
  href?: string;
  ctaText?: string;
}

/**
 * Reusable ServiceCard component matching the design baseline of Bharat Relocators.
 */
export default function ServiceCard({
  title,
  category,
  desc,
  img,
  alt,
  features,
  icon,
  href = '/get-a-quote',
  ctaText = 'Get Transparent Quote',
}: ServiceCardProps) {
  return (
    <div className="service-card relative bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-xs hover:shadow-xl transition-all duration-300 group flex flex-col justify-between">
      {/* Image & Overlay */}
      <div>
        <Link href={href} className="aspect-[16/10] overflow-hidden relative block" aria-label={`View ${title} details`}>
          <AppImage
            src={img}
            alt={alt}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

          {/* Icon Badge */}
          <div className="absolute top-4 left-4 w-11 h-11 bg-white/95 backdrop-blur-md rounded-2xl flex items-center justify-center text-[#E53935] shadow-lg group-hover:bg-[#E53935] group-hover:text-white transition-all duration-300 border border-white/40">
            {icon}
          </div>

          {/* Category Chip */}
          <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-medium text-white/90 border border-white/20">
            {category}
          </div>
        </Link>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-lg sm:text-[1.2rem] font-bold text-[#082F52] font-display mb-2 group-hover:text-[#E53935] transition-colors">
            <Link href={href} className="hover:underline">
              {title}
            </Link>
          </h3>
          <p className="text-slate-600 text-sm leading-relaxed mb-4">{desc}</p>

          {/* Micro feature pills */}
          <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-100">
            {features.map((feat) => (
              <span
                key={feat}
                className="text-[11px] font-medium px-2.5 py-1 rounded-md bg-slate-50 border border-slate-200/60 text-slate-700"
              >
                ✓ {feat}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Action Link Footer */}
      <div className="px-6 pb-6 pt-2">
        <Link
          href={href}
          className="flex items-center justify-between text-[#E53935] font-semibold text-xs uppercase tracking-wider group-hover:translate-x-1 transition-transform"
        >
          <span>{ctaText}</span>
          <span className="text-sm">→</span>
        </Link>
      </div>
    </div>
  );
}

