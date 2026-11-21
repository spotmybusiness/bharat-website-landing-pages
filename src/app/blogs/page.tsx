import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import PageLayout from '@/components/PageLayout';
import PageHero from '@/components/PageHero';
import AppImage from '@/components/ui/AppImage';
import SectionHeader from '@/components/ui/SectionHeader';
import JsonLd from '@/components/JsonLd';
import CostCalculator from '@/components/blog/CostCalculator';
import { getAllBlogPosts } from '@/data/blogs';
import { generatePageMetadata } from '@/lib/metadata';
import { BUSINESS, getSiteUrl, getTelUrl, getWhatsAppUrl } from '@/lib/business';
import { getOrganizationId } from '@/lib/schema';

export const metadata: Metadata = generatePageMetadata({
  title: 'Packers and Movers Kolkata Blog & 2026 Moving Rate Cards',
  description:
    'Read verified 2026 moving rate cards and relocation guides from Bharat Relocators Kolkata. Explore 1BHK to 3BHK shifting costs, bike & car carrier rates, GST claim bills, and corridor guides.',
  path: '/blogs',
});

const secondaryGuides = [
  {
    title: 'Comprehensive Home Moving Checklist: 4-Week Timeline',
    category: 'Relocation Planning',
    description:
      'A structured 4-week preparation framework covering room-by-room inventory decluttering, utility transfers, essential packing supplies, and moving-day coordination.',
    readTime: '6 min read',
    href: '/moving-checklist',
    badge: 'Popular Checklist',
    tag: 'Home Shifting',
  },
  {
    title: 'Vehicle Transportation & Safety Guide: Cars & Bikes',
    category: 'Automotive Logistics',
    description:
      'Complete operational guide for transporting cars and two-wheelers across India. Details required RTO documentation, enclosed carrier mechanics, and condition reports.',
    readTime: '7 min read',
    href: '/vehicle-transportation-guide',
    badge: 'Transit Safety',
    tag: 'Car & Bike',
  },
  {
    title: 'Intercity Moving from Kolkata: Interstate Highways & Corridors',
    category: 'Interstate Moving',
    description:
      'Understand national highway container transit from Kolkata to Bangalore, Delhi NCR, Mumbai, and Hyderabad with verified consignment waybills and insurance.',
    readTime: '9 min read',
    href: '/intercity-moving-guide',
    badge: 'PAN India',
    tag: 'Intercity',
  },
];

export default function BlogsPage() {
  const posts = getAllBlogPosts();
  const siteUrl = getSiteUrl();

  const collectionSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Blog',
        '@id': `${siteUrl}/blogs#blog`,
        name: 'Bharat Relocators Moving Knowledge Hub & 2026 Rate Cards',
        description:
          'Expert relocation insights, verified 2026 pricing rate cards, and comprehensive packing guides from Kolkata trusted movers.',
        url: `${siteUrl}/blogs`,
        publisher: {
          '@id': getOrganizationId(),
        },
        blogPost: posts.map((post) => ({
          '@type': 'BlogPosting',
          headline: post.title,
          url: `${siteUrl}/blogs/${post.slug}`,
          datePublished: post.publishedDate,
          dateModified: post.updatedDate,
          author: {
            '@type': 'Organization',
            name: post.author.name,
          },
        })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: siteUrl,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Blogs',
            item: `${siteUrl}/blogs`,
          },
        ],
      },
    ],
  };

  return (
    <PageLayout>
      <JsonLd data={collectionSchema} />

      {/* Hero Section */}
      <PageHero
        label="Relocation Insights & 2026 Rate Cards"
        title="Blogs: Moving Knowledge Hub & Rate Cards"
        subtitle="Explore verified shifting rate cards, pinned cornerstone moving checklists, corridor pricing benchmarks, and practical relocation guides for Kolkata and PAN India."
        breadcrumbs={[
          { label: 'Blogs', href: '/blogs' },
        ]}
        image={
          <div className="rounded-2xl border border-white/20 bg-white/5 backdrop-blur-sm p-3 shadow-[0_4px_24px_rgba(0,0,0,0.25)]">
            <img
              src="/images/Moving_guides.png"
              alt="Bharat Relocators Blogs, 2026 Moving Rate Cards, and Relocation Guides Hub in Kolkata"
              fetchPriority="high"
            />
          </div>
        }
        actions={
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/get-a-quote"
              className="inline-flex items-center gap-2 bg-[#E53935] hover:bg-[#c62828] text-white font-semibold text-sm px-6 py-3.5 rounded-xl transition-colors shadow-md"
            >
              Get Free Moving Quote
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
            <a
              href={getWhatsAppUrl(`Hi Bharat Relocators, I am browsing your moving blog and would like to request an estimate.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold text-sm px-5 py-3.5 rounded-xl border border-emerald-400 transition-colors shadow-md"
            >
              WhatsApp Us
            </a>
          </div>
        }
      />

      {/* Full-Width Horizontal Featured Blog Post Cards (Image 1 Quality Format for All Published Posts) */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="flex items-center justify-between pb-4 border-b border-slate-200">
            <div>
              <span className="text-xs uppercase font-bold text-[#E53935] tracking-wider block">
                Featured 2026 Rate Cards &amp; Cost Guides
              </span>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-[#082F52]">
                Flagship 2026 Kolkata Relocation Rate Cards
              </h2>
            </div>
            <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Verified 2026 Rates
            </span>
          </div>

          {posts.map((post) => {
            const snapshots =
              post.priceSnapshots ??
              post.quickAnswer.rates.slice(0, 3).map((r, i) => ({
                label: r.homeSize.split('(')[0].trim(),
                value: r.localCost,
                highlight: i === 2,
              }));

            const badges = post.topicBadges ?? [
              'Quick Answer Cost Box',
              'Corridor Pricing Table',
              'Side-by-Side Comparison Bill',
              'Official Gov & GST Rules',
            ];

            return (
              <div
                key={post.slug}
                className="bg-gradient-to-br from-slate-50 via-white to-red-50/20 rounded-3xl p-6 sm:p-10 border-2 border-[#082F52]/15 shadow-xl transition-all hover:shadow-2xl"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  <div className="lg:col-span-7 space-y-5">
                    <div className="flex flex-wrap items-center gap-2.5">
                      <span className="bg-[#E53935] text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                        {post.category}
                      </span>
                      <span className="bg-slate-200/80 text-slate-700 text-xs font-semibold px-2.5 py-1 rounded-full">
                        {post.readTime}
                      </span>
                      <span className="text-xs text-slate-500">
                        Updated: {post.updatedDate}
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-[#082F52] leading-tight hover:text-[#E53935] transition-colors">
                      <Link href={`/blogs/${post.slug}`}>
                        {post.h1}
                      </Link>
                    </h3>

                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                      {post.excerpt}
                    </p>

                    {/* Quick Price Snapshot Badges */}
                    <div className="grid grid-cols-3 gap-2.5 pt-1">
                      {snapshots.map((snap) => (
                        <div
                          key={snap.label}
                          className="bg-white p-3 rounded-xl border border-slate-200 text-center shadow-xs"
                        >
                          <span className="text-[11px] font-bold text-slate-400 block uppercase">
                            {snap.label}
                          </span>
                          <span
                            className={`text-sm sm:text-base font-black ${
                              snap.highlight ? 'text-[#E53935]' : 'text-[#082F52]'
                            }`}
                          >
                            {snap.value}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Key Blueprint Topics Covered */}
                    <div className="flex flex-wrap gap-2 text-xs text-slate-600 pt-1">
                      {badges.map((badge) => (
                        <span
                          key={badge}
                          className="bg-slate-100 px-2.5 py-1 rounded-md font-medium"
                        >
                          ✓ {badge}
                        </span>
                      ))}
                    </div>

                    <div className="pt-3 flex flex-wrap items-center gap-4">
                      <Link
                        href={`/blogs/${post.slug}`}
                        className="inline-flex items-center gap-2 bg-[#082F52] hover:bg-[#0b3b60] text-white font-bold text-sm px-6 py-3.5 rounded-xl shadow-md transition-colors"
                      >
                        {post.ctaLabel ?? 'Read Complete 2026 Rate Card'}
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </Link>
                      <Link
                        href="/get-a-quote"
                        className="inline-flex items-center gap-2 text-sm font-bold text-[#E53935] hover:underline"
                      >
                        Get Free Quote →
                      </Link>
                    </div>
                  </div>

                  {/* Right Visual Card */}
                  <div className="lg:col-span-5">
                    <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-[4/3] border-2 border-slate-200">
                      <AppImage
                        src={post.featuredImage}
                        alt={post.featuredImageAlt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 40vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#082F52]/80 via-transparent to-transparent flex items-end p-6">
                        <span className="text-white text-xs font-semibold backdrop-blur-xs bg-black/40 px-3 py-1.5 rounded-lg border border-white/20">
                          Bharat Relocators Kolkata Logistics Desk
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Pinned Cornerstone Relocation Guides */}
      <section className="py-14 bg-white border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Pinned Cornerstone Guides"
            title="Foundational Relocation & Moving Guides"
            subtitle="Step-by-step home shifting checklists, RTO vehicle carrier compliance, and interstate highway relocation strategies consolidated inside our canonical knowledge hub."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {secondaryGuides.map((guide) => (
              <div
                key={guide.title}
                className="bg-slate-50 rounded-2xl p-6 border-2 border-[#082F52]/15 shadow-sm flex flex-col justify-between hover:border-[#E53935] hover:shadow-md transition-all"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-bold text-[#E53935] uppercase tracking-wider">
                      {guide.category}
                    </span>
                    <span className="text-[11px] bg-red-50 text-[#E53935] border border-red-200 px-2.5 py-0.5 rounded-full font-semibold">
                      📌 {guide.badge}
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-[#082F52] text-lg mb-2 leading-snug">
                    <Link href={guide.href} className="hover:text-[#E53935] transition-colors">
                      {guide.title}
                    </Link>
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                    {guide.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200/80 flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-500">{guide.readTime} · {guide.tag}</span>
                  <Link
                    href={guide.href}
                    className="text-xs font-bold text-[#082F52] hover:text-[#E53935] flex items-center gap-1 transition-colors"
                  >
                    Read Cornerstone Guide →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Cost Calculator Section */}
      <section className="py-14 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Instant Estimator"
            title="Calculate Your Estimated Kolkata Moving Charges"
            subtitle="Get an instant transparent cost projection for your move based on home volume, corridor distance, and lift availability."
          />
          <CostCalculator />
        </div>
      </section>

      {/* Mid-Page Contact & Consultation Banner */}
      <section className="py-12 bg-gradient-to-r from-[#082F52] to-[#1478B5] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <span className="bg-[#E53935] text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
              Kolkata Move Helpdesk
            </span>
            <h3 className="text-xl sm:text-2xl font-display font-bold text-white">
              Have Specific Moving Requirements or Fragile Valuables?
            </h3>
            <p className="text-slate-200 text-sm max-w-2xl">
              Talk directly with our move planners in Haltu or Behala. Get custom quotes for pianos, heavy artwork, double-door fridges, and sensitive IT equipment.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <a
              href={getTelUrl()}
              className="bg-[#E53935] hover:bg-[#c62828] text-white px-6 py-3 rounded-xl font-bold text-sm shadow-md transition-colors text-center"
            >
              Call: {BUSINESS.phone.primaryFormatted}
            </a>
            <a
              href={getWhatsAppUrl(`Hi Bharat Relocators, I have questions about household moving charges in Kolkata.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-xl font-bold text-sm shadow-md transition-colors text-center"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
