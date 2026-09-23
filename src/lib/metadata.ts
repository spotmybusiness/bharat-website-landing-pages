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
  const siteUrl = getSiteUrl();
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
  const resolvedOgImage = ogImage
    ? { url: ogImage, width: 1200, height: 630, alt: fullTitle }
    : { ...DEFAULT_OG_IMAGE, url: `${siteUrl}${DEFAULT_OG_IMAGE.url}` };

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
      ...(ogImage ? { images: [{ url: ogImage }] } : {}),
      images: [resolvedOgImage],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      ...(ogImage ? { images: [ogImage] } : {}),
      images: [resolvedOgImage.url],
    },
    ...(noIndex ? { robots: { index: false, follow: true } } : {}),
  };
}

