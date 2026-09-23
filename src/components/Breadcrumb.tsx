import React from 'react';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import { getSiteUrl } from '@/lib/business';

export interface BreadcrumbItem {
  label: string;
  /** URL path or undefined if current active page */
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
  /** Whether to inject BreadcrumbList JSON-LD structured data. Defaults to true. */
  withJsonLd?: boolean;
}

/**
 * Known mapping of breadcrumb labels to real, implemented canonical paths.
 * Intermediate categories without dedicated URLs (such as 'Services') are intentionally omitted.
 */
const CANONICAL_PAGE_PATHS: Record<string, string> = {
  'About Us': '/about',
  'Contact Us': '/contact',
  'FAQs': '/faqs',
  'FAQ': '/faqs',
  'Frequently Asked Questions': '/faqs',
  'Get a Quote': '/get-a-quote',
  'Testimonials': '/testimonials',
  'Track Us': '/tracking',
  'Track Your Shipment': '/tracking',
  'Services': '/services',
  'Our Services': '/services',
  'Household Shifting': '/household-shifting',
  'Bike Transport': '/bike-shifting',
  'Car Transportation': '/car-shifting',
  'Parcel & Cargo Shifting': '/parcel-shifting',
  'International Moving': '/international-moving',
  'Office Relocation': '/office-relocation',
  'Moving Guides': '/moving-guides',
  'Relocation & Moving Guides': '/moving-guides',
  'Moving Checklist': '/moving-checklist',
  'Vehicle Transportation Guide': '/vehicle-transportation-guide',
  'Intercity Moving Guide': '/intercity-moving-guide',
  'Process': '/process',
  'Why Us': '/why-us',
  'Why Choose Us': '/why-us',
  'Reviews': '/testimonials',
  'Customer Reviews': '/testimonials',
};

function resolveBreadcrumbItemUrl(item: BreadcrumbItem, siteUrl: string): string | undefined {
  if (item.href) {
    if (item.href === '/') return siteUrl;
    if (item.href.startsWith('http')) return item.href;
    // Do not emit hash-only anchors as structured data URLs
    if (item.href.startsWith('/#') || item.href.startsWith('#')) return undefined;
    return `${siteUrl}${item.href.startsWith('/') ? item.href : `/${item.href}`}`;
  }

  const matchedPath = CANONICAL_PAGE_PATHS[item.label];
  if (matchedPath) {
    return `${siteUrl}${matchedPath}`;
  }

  return undefined;
}

/**
 * Accessible Breadcrumb navigation supporting arbitrary hierarchy independent of URL flat paths.
 * Also generates BreadcrumbList structured data for schema compliance.
 */
export default function Breadcrumb({
  items,
  className = '',
  withJsonLd = true,
}: BreadcrumbProps) {
  const siteUrl = getSiteUrl();

  const allItems: BreadcrumbItem[] = [
    { label: 'Home', href: '/' },
    ...items,
  ];

  const jsonLdData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: allItems.map((item, index) => {
      const url = resolveBreadcrumbItemUrl(item, siteUrl);
      return {
        '@type': 'ListItem',
        position: index + 1,
        name: item.label,
        ...(url ? { item: url } : {}),
      };
    }),
  };

  return (
    <>
      {withJsonLd && <JsonLd data={jsonLdData} />}
      <nav aria-label="Breadcrumb" className={`flex items-center text-xs ${className}`}>
        <ol className="flex items-center flex-wrap gap-1.5 text-white/80">
          {allItems.map((item, index) => {
            const isLast = index === allItems.length - 1;

            return (
              <li key={item.label} className="flex items-center gap-1.5">
                {index > 0 && (
                  <span className="text-white/40 select-none" aria-hidden="true">
                    /
                  </span>
                )}
                {isLast ? (
                  <span
                    aria-current="page"
                    className="font-medium text-[#F28A32] truncate max-w-[200px] sm:max-w-none"
                  >
                    {item.label}
                  </span>
                ) : !item.href ? (
                  <span className="text-white/75 select-none truncate max-w-[200px] sm:max-w-none">
                    {item.label}
                  </span>
                ) : (
                  <Link
                    href={item.href}
                    className="text-white/75 hover:text-white transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}

