import { MetadataRoute } from 'next';
import { getSiteUrl } from '@/lib/business';
import { getAllBlogPosts } from '@/data/blogs';

interface RouteConfig {
  path: string;
  lastModified: string;
  changeFrequency?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority?: number;
}

/**
 * Currently implemented canonical indexable routes.
 * Only pages that physically exist in the codebase are included.
 */
const CANONICAL_ROUTES: RouteConfig[] = [
  // Primary Homepage
  { path: '', lastModified: '2026-11-19', changeFrequency: 'weekly', priority: 1.0 },

  // Core Service Hub & Service Pages
  { path: '/services', lastModified: '2026-11-19', changeFrequency: 'weekly', priority: 0.9 },
  { path: '/household-shifting', lastModified: '2026-11-19', changeFrequency: 'weekly', priority: 0.9 },
  { path: '/bike-shifting', lastModified: '2026-11-19', changeFrequency: 'weekly', priority: 0.9 },
  { path: '/car-shifting', lastModified: '2026-11-19', changeFrequency: 'weekly', priority: 0.9 },
  { path: '/parcel-shifting', lastModified: '2026-11-19', changeFrequency: 'weekly', priority: 0.9 },
  { path: '/international-moving', lastModified: '2026-11-19', changeFrequency: 'weekly', priority: 0.9 },
  { path: '/office-relocation', lastModified: '2026-11-19', changeFrequency: 'weekly', priority: 0.9 },

  // Core Information & Utility Pages
  { path: '/get-a-quote', lastModified: '2026-11-19', changeFrequency: 'weekly', priority: 0.8 },
  { path: '/process', lastModified: '2026-11-19', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/about', lastModified: '2026-11-19', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/why-us', lastModified: '2026-11-19', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/contact', lastModified: '2026-11-19', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/testimonials', lastModified: '2026-09-26', changeFrequency: 'weekly', priority: 0.7 },
  { path: '/faqs', lastModified: '2026-09-25', changeFrequency: 'monthly', priority: 0.6 },
  { path: '/tracking', lastModified: '2026-10-18', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/gallery', lastModified: '2026-11-19', changeFrequency: 'weekly', priority: 0.8 },

  // Authoritative Pillar Guides
  { path: '/moving-checklist', lastModified: '2026-11-15', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/vehicle-transportation-guide', lastModified: '2026-11-15', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/intercity-moving-guide', lastModified: '2026-11-15', changeFrequency: 'monthly', priority: 0.8 },

  // Blogs & Rate Cards Canonical Hub
  { path: '/blogs', lastModified: '2026-11-15', changeFrequency: 'weekly', priority: 0.9 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();
  const blogPosts = getAllBlogPosts();

  const staticEntries = CANONICAL_ROUTES.map((route) => ({
    url: `${siteUrl}${route.path}`,
    lastModified: new Date(route.lastModified),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  const blogEntries = blogPosts.map((post) => ({
    url: `${siteUrl}/blogs/${post.slug}`,
    lastModified: new Date(post.updatedDate),
    changeFrequency: 'weekly' as const,
    priority: 0.85,
  }));

  return [...staticEntries, ...blogEntries];
}
