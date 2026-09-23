import { MetadataRoute } from 'next';
import { getSiteUrl } from '@/lib/business';

interface RouteConfig {
  path: string;
  changeFrequency?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority?: number;
}

/**
 * Currently implemented canonical indexable routes.
 * Only pages that physically exist in the codebase are included.
 */
const CANONICAL_ROUTES: RouteConfig[] = [
  // Primary Homepage
  { path: '', changeFrequency: 'weekly', priority: 1.0 },

  // Core Service Hub & Service Pages
  { path: '/services', changeFrequency: 'weekly', priority: 0.9 },
  { path: '/household-shifting', changeFrequency: 'weekly', priority: 0.9 },
  { path: '/bike-shifting', changeFrequency: 'weekly', priority: 0.9 },
  { path: '/car-shifting', changeFrequency: 'weekly', priority: 0.9 },
  { path: '/parcel-shifting', changeFrequency: 'weekly', priority: 0.9 },
  { path: '/international-moving', changeFrequency: 'weekly', priority: 0.9 },
  { path: '/office-relocation', changeFrequency: 'weekly', priority: 0.9 },

  // Core Information & Utility Pages
  { path: '/get-a-quote', changeFrequency: 'weekly', priority: 0.8 },
  { path: '/process', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/about', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/why-us', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/contact', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/testimonials', changeFrequency: 'weekly', priority: 0.7 },
  { path: '/faqs', changeFrequency: 'monthly', priority: 0.6 },
  { path: '/tracking', changeFrequency: 'monthly', priority: 0.8 },

  // Resource Hub & Authoritative Pillar Guides
  { path: '/moving-guides', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/moving-checklist', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/vehicle-transportation-guide', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/intercity-moving-guide', changeFrequency: 'monthly', priority: 0.8 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();

  return CANONICAL_ROUTES.map((route) => ({
    url: `${siteUrl}${route.path}`,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
