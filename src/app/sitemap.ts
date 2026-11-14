import { MetadataRoute } from 'next';
import { getSiteUrl } from '@/lib/business';
import { getAllBlogPosts } from '@/data/blogs';

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
  { path: '/gallery', changeFrequency: 'weekly', priority: 0.8 },

  // Authoritative Pillar Guides
  { path: '/moving-checklist', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/vehicle-transportation-guide', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/intercity-moving-guide', changeFrequency: 'monthly', priority: 0.8 },

  // Blogs & Rate Cards Canonical Hub
  { path: '/blogs', changeFrequency: 'weekly', priority: 0.9 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();
  const buildDate = new Date();
  const blogPosts = getAllBlogPosts();

  const staticEntries = CANONICAL_ROUTES.map((route) => ({
    url: `${siteUrl}${route.path}`,
    lastModified: buildDate,
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
