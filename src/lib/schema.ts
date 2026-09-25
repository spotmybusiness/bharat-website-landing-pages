/**
 * Bharat Relocators — Central Schema.org Entity & Graph Helpers
 *
 * Single source of truth for structured data (JSON-LD) across the website.
 * Declares canonical organizational entities and typed schema builders with
 * stable cross-referenced @id nodes.
 */

import { BUSINESS, getSiteUrl } from '@/lib/business';
import { SERVICES } from '@/data/services';

export interface ServiceSchemaOptions {
  name: string;
  description: string;
  path: string;
  serviceType: string;
}

export interface ArticleSchemaOptions {
  headline: string;
  description: string;
  path: string;
}

export interface WebPageSchemaOptions {
  name: string;
  description: string;
  path: string;
}

export interface FAQItem {
  q: string;
  a: string;
}

/**
 * Stable canonical URI ID for the primary MovingCompany organization.
 * Referenced site-wide via { '@id': getOrganizationId() }.
 */
export function getOrganizationId(): string {
  return `${getSiteUrl()}/#organization`;
}

/**
 * Stable canonical URI ID for the WebSite entity.
 */
export function getWebsiteId(): string {
  return `${getSiteUrl()}/#website`;
}

/**
 * Helper to wrap schema items into a single @graph JSON-LD structure with context.
 */
export function buildGraphSchema(items: Record<string, unknown>[]) {
  return {
    '@context': 'https://schema.org',
    '@graph': items,
  };
}

/**
 * 1. Primary Organization Schema (MovingCompany)
 *
 * Sourced strictly from verified client facts in BUSINESS:
 * - Main physical office: Haltu (BUSINESS.locations.main)
 * - Secondary physical branch: Behala (BUSINESS.locations.secondary) as subOrganization
 * - Services offered: Sourced directly from canonical SERVICES dataset
 */
export function getOrganizationSchema(): Record<string, unknown> {
  const siteUrl = getSiteUrl();
  const mainLoc = BUSINESS.locations.main;
  const secLoc = BUSINESS.locations.secondary;

  return {
    '@type': 'MovingCompany',
    '@id': getOrganizationId(),
    name: BUSINESS.name,
    legalName: BUSINESS.legalName,
    url: siteUrl,
    logo: `${siteUrl}/images/logo.png`,
    telephone: mainLoc.phone,
    email: BUSINESS.email.primary,
    address: {
      '@type': 'PostalAddress',
      streetAddress: mainLoc.address.street,
      addressLocality: mainLoc.address.area,
      addressRegion: mainLoc.address.state,
      postalCode: mainLoc.address.postalCode,
      addressCountry: mainLoc.address.country,
    },
    sameAs: [
      BUSINESS.social.facebook,
      BUSINESS.social.instagram,
      BUSINESS.social.twitter,
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: mainLoc.google.rating,
      reviewCount: mainLoc.google.reviewCount,
    },
    openingHoursSpecification: BUSINESS.hours.openingHoursSpecification,
    subOrganization: {
      '@type': 'MovingCompany',
      name: secLoc.name,
      url: `${siteUrl}/contact`,
      telephone: secLoc.phone,
      address: {
        '@type': 'PostalAddress',
        streetAddress: `${secLoc.address.street}, ${secLoc.address.landmark}`,
        addressLocality: secLoc.address.area,
        addressRegion: secLoc.address.state,
        postalCode: secLoc.address.postalCode,
        addressCountry: secLoc.address.country,
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: secLoc.google.rating,
        reviewCount: secLoc.google.reviewCount,
      },
      openingHoursSpecification: BUSINESS.hours.openingHoursSpecification,
    },
    makesOffer: SERVICES.map((service) => ({
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: service.title,
        url: `${siteUrl}${service.canonicalPath}`,
      },
    })),
  };
}

/**
 * 2. WebSite Schema
 *
 * Represents the digital domain with reference to the publisher organization.
 * SearchAction is intentionally omitted as no internal query search exists.
 */
export function getWebsiteSchema(): Record<string, unknown> {
  const siteUrl = getSiteUrl();

  return {
    '@type': 'WebSite',
    '@id': getWebsiteId(),
    name: BUSINESS.name,
    url: siteUrl,
    publisher: {
      '@id': getOrganizationId(),
    },
  };
}

/**
 * 3. Service Schema
 *
 * Represents a commercial relocation service provided by Bharat Relocators.
 */
export function getServiceSchema({
  name,
  description,
  path,
  serviceType,
}: ServiceSchemaOptions): Record<string, unknown> {
  const siteUrl = getSiteUrl();

  return {
    '@type': 'Service',
    name,
    description,
    serviceType,
    url: `${siteUrl}${path}`,
    provider: {
      '@id': getOrganizationId(),
    },
    areaServed: [
      {
        '@type': 'City',
        name: 'Kolkata',
      },
      {
        '@type': 'Country',
        name: 'India',
      },
    ],
  };
}

/**
 * 4. FAQ Schema (FAQPage)
 *
 * Represents Q&A knowledge bases matching Schema.org FAQPage specification.
 */
export function getFAQSchema(faqs: FAQItem[]): Record<string, unknown> {
  return {
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  };
}

/**
 * 5. Article Schema
 *
 * Represents long-form educational relocation guides.
 * No publication/modified dates are asserted per fact verification rules.
 */
export function getArticleSchema({
  headline,
  description,
  path,
}: ArticleSchemaOptions): Record<string, unknown> {
  const siteUrl = getSiteUrl();

  return {
    '@type': 'Article',
    headline,
    description,
    url: `${siteUrl}${path}`,
    publisher: {
      '@id': getOrganizationId(),
    },
  };
}

/**
 * 6. WebPage Schema
 *
 * Minimal representation for transactional and utility pages.
 */
export function getWebPageSchema({
  name,
  description,
  path,
}: WebPageSchemaOptions): Record<string, unknown> {
  const siteUrl = getSiteUrl();

  return {
    '@type': 'WebPage',
    name,
    description,
    url: `${siteUrl}${path}`,
    publisher: {
      '@id': getOrganizationId(),
    },
  };
}
