/**
 * Bharat Relocators — SEO Metadata Helpers
 *
 * Utilities for generating consistent page-level metadata.
 * Used with Next.js `export const metadata` or `generateMetadata()`.
 */

import type { Metadata } from 'next';
import { getSiteUrl } from '@/lib/business';

export interface PageMetadataOptions {
  /** Page title — used for <title>, og:title, and twitter:title. */
  title: string;
  /** Meta description — used for <meta name="description">, og:description, twitter:description. */
  description: string;
  /** Page path starting with / (e.g. '/about'). Used to build the canonical URL. */
  path: string;
  /** Override the default OG image URL. */
  ogImage?: string;
  /** Set to true for pages that should not be indexed (e.g. 404, legal pages). */
  noIndex?: boolean;
}

/**
 * Generate consistent page metadata with canonical URL, Open Graph, and Twitter Card.
 *
 * @example
 * ```ts
 * import { generatePageMetadata } from '@/lib/metadata';
 *
 * export const metadata = generatePageMetadata({
 *   title: 'About Us',
 *   description: 'Learn about Bharat Relocators...',
 *   path: '/about',
 * });
 * ```
 */
/** Default site-wide OG image — used when no page-specific image is provided.
 *  Tip: replace with a true 1200×630 branded social card at /images/og-image.png.
 */
const DEFAULT_OG_IMAGE = {
  url: '/images/packaging.png',
  width: 1449,
  height: 1086,
  alt: 'Bharat Relocators — Professional Packers & Movers in Kolkata',
};

export function generatePageMetadata({
  title,
  description,
  path,
  ogImage,
  noIndex = false,
}: PageMetadataOptions): Metadata {
  const siteUrl = getSiteUrl().replace(/\/+$/, '');
  const canonicalUrl = `${siteUrl}${path === '/' ? '' : path}`;
  // Centralized branding: Ensure exactly one ' — Bharat Relocators' brand suffix
  const brandSuffix = ' — Bharat Relocators';
  const cleanTitle = title.replace(/\s*[-—–]\s*Bharat Relocators.*$/, '').trim();
  const fullTitle =
    path === '/'
      ? title
      : cleanTitle.includes('Bharat Relocators')
        ? cleanTitle
        : `${cleanTitle}${brandSuffix}`;

  // Resolve OG image: page-specific override takes precedence, else use site default
  const cleanOgImage = ogImage?.trim();
  const resolvedOgImageUrl = cleanOgImage
    ? /^https?:\/\//i.test(cleanOgImage)
      ? cleanOgImage
      : `${siteUrl}/${cleanOgImage.replace(/^\/+/, '')}`
    : `${siteUrl}${DEFAULT_OG_IMAGE.url}`;

  const resolvedOgImage = cleanOgImage
    ? { url: resolvedOgImageUrl, width: 1200, height: 630, alt: fullTitle }
    : { ...DEFAULT_OG_IMAGE, url: resolvedOgImageUrl };

  return {
    title: fullTitle,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: fullTitle,
      description,
      url: canonicalUrl,
      siteName: 'Bharat Relocators',
      locale: 'en_IN',
      type: 'website',
      images: [resolvedOgImage],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [resolvedOgImage.url],
    },
    ...(noIndex ? { robots: { index: false, follow: true } } : {}),
  };
}

