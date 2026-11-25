import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import PageLayout from '@/components/PageLayout';
import PageHero from '@/components/PageHero';
import JsonLd from '@/components/JsonLd';
import CostCalculator from '@/components/blog/CostCalculator';
import { getAllBlogPosts, getBlogPostBySlug } from '@/data/blogs';
import { BUSINESS, getSiteUrl, getTelUrl, getWhatsAppUrl } from '@/lib/business';
import { getOrganizationId } from '@/lib/schema';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const posts = getAllBlogPosts();
  const slugs: { slug: string }[] = [];
  for (const post of posts) {
    slugs.push({ slug: post.slug });
    if (post.legacySlugs) {
      for (const legacy of post.legacySlugs) {
        slugs.push({ slug: legacy });
      }
    }
  }
  return slugs;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const post = getBlogPostBySlug(resolvedParams.slug);

  if (!post) {
    return {
      title: 'Post Not Found — Bharat Relocators',
    };
  }

  const siteUrl = getSiteUrl();
  const canonicalUrl = `${siteUrl}/blogs/${post.slug}`;
  const pageTitle = `${post.metaTitle} — Bharat Relocators`;

  return {
    title: pageTitle,
    description: post.metaDescription,
    keywords: post.targetKeywords,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: pageTitle,
      description: post.metaDescription,
      url: canonicalUrl,
      siteName: 'Bharat Relocators',
      locale: 'en_IN',
      type: 'article',
      publishedTime: post.publishedDate,
      modifiedTime: post.updatedDate,
      authors: [post.author.name],
      images: [
        {
          url: `${siteUrl}${post.featuredImage}`,
          width: 1200,
          height: 630,
          alt: post.featuredImageAlt,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: pageTitle,
      description: post.metaDescription,
      images: [`${siteUrl}${post.featuredImage}`],
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const resolvedParams = await params;
  const post = getBlogPostBySlug(resolvedParams.slug);

  if (!post) {
    notFound();
  }

  const allPosts = getAllBlogPosts();
  const relatedPosts = allPosts.filter((p) => p.slug !== post.slug).slice(0, 6);
  const siteUrl = getSiteUrl();
  const canonicalUrl = `${siteUrl}/blogs/${post.slug}`;

  // Structured Data (JSON-LD): Article Schema + FAQPage Schema + BreadcrumbList Schema
  const articleSchema = {
    '@type': 'BlogPosting',
    '@id': `${canonicalUrl}#article`,
    headline: post.h1,
    description: post.metaDescription,
    datePublished: post.publishedDate,
    dateModified: post.updatedDate,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': canonicalUrl,
    },
    author: {
      '@type': 'Organization',
      name: post.author.name,
      url: siteUrl,
    },
    publisher: {
      '@id': getOrganizationId(),
    },
    image: {
      '@type': 'ImageObject',
      url: `${siteUrl}${post.featuredImage}`,
      caption: post.featuredImageAlt,
    },
    keywords: post.targetKeywords.join(', '),
    articleSection: post.category,
    citation: post.externalLinks.map((ext) => ext.url),
  };

  const faqSchema = {
    '@type': 'FAQPage',
    '@id': `${canonicalUrl}#faq`,
    mainEntity: post.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  const breadcrumbSchema = {
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
      {
        '@type': 'ListItem',
        position: 3,
        name: post.title,
        item: canonicalUrl,
      },
    ],
  };

  const graphData = {
    '@context': 'https://schema.org',
    '@graph': [articleSchema, faqSchema, breadcrumbSchema],
  };

  const qaHeaders = post.quickAnswer.columnHeaders ?? {
    col1: 'House Size',
    col2: 'Local Shifting Cost',
    col3: 'Intercity Shifting (500+ km)',
    col4: 'Truck Type',
    col5: 'Crew Size',
  };

  const corridorMeta = post.corridorTableMeta ?? {
    badge: 'Kolkata Route Benchmarks',
    heading: 'Corridor Pricing Table: Local Kolkata Route Rates',
    subtitle:
      'Average shifting charges across major residential corridors in Kolkata, including bridge crossings, toll routes, and traffic bypasses.',
    headers: {
      col1: 'Moving Corridor (Route)',
      col2: 'Distance',
      col3: '1 BHK Cost',
      col4: '2 BHK Cost',
      col5: '3 BHK Cost',
      col6: 'Est. Time',
    },
  };

  return (
    <PageLayout>
      <JsonLd data={graphData} />

      {/* Hero Header */}
      <PageHero
        label={`${post.category} · ${post.publishWeek}`}
        title={post.h1}
        subtitle={post.excerpt}
        breadcrumbs={[
          { label: 'Blogs', href: '/blogs' },
          { label: post.category, href: `/blogs/${post.slug}` },
        ]}
        image={
          <div className="rounded-2xl border border-white/20 bg-white/5 backdrop-blur-sm p-3 shadow-[0_4px_24px_rgba(0,0,0,0.25)]">
            <img
              src={post.featuredImage}
              alt={post.featuredImageAlt}
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
              href={getWhatsAppUrl(`Hi Bharat Relocators, I am reading "${post.title}" and would like an exact quote for my move!`)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold text-sm px-5 py-3.5 rounded-xl border border-emerald-400 transition-colors shadow-md"
            >
              WhatsApp Us Now
            </a>
          </div>
        }
      />

      {/* Meta Bar: Date, Read Time, Author, Key Badges */}
      <div className="bg-slate-50 border-b border-slate-200/80 py-3.5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-600">
          <div className="flex flex-wrap items-center gap-4">
            <span className="flex items-center gap-1.5 font-medium">
              <svg className="w-4 h-4 text-[#1478B5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Updated: {post.updatedDate}
            </span>
            <span className="flex items-center gap-1.5 font-medium">
              <svg className="w-4 h-4 text-[#F28A32]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {post.readTime}
            </span>
            <span className="flex items-center gap-1.5 font-medium">
              <svg className="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Verified 2026 Guide
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-slate-400">Published by:</span>
            <span className="font-semibold text-[#082F52]">{post.author.organization}</span>
            <span className="bg-amber-100 text-amber-800 font-bold px-2 py-0.5 rounded text-[11px]">★ 4.9 (306+ Reviews)</span>
          </div>
        </div>
      </div>

      {/* Main Content Layout */}
      <article className="py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left Content Column (8 cols) */}
            <div className="lg:col-span-8 space-y-12">
              {/* Introduction */}
              <div className="space-y-5 text-slate-700 leading-relaxed text-base sm:text-lg">
                {post.introParagraphs && post.introParagraphs.length > 0 ? (
                  post.introParagraphs.map((para, i) => <p key={i}>{para}</p>)
                ) : (
                  <>
                    <p>
                      Relocating a home in Kolkata—whether moving from an old traditional para in Haltu or Behala to a modern high-rise in New Town or Salt Lake—comes with unique logistical considerations. Between narrow historical lanes, varying floor heights without elevators, and bridge toll crossings, understanding realistic <strong>packers and movers Kolkata charges</strong> is essential before hiring a moving service.
                    </p>
                    <p>
                      At <strong>Bharat Relocators</strong>, we believe in complete pricing transparency. This verified <strong>2026 Rate Card</strong> provides an exact breakdown of local and intercity shifting costs for 1BHK, 2BHK, and 3BHK homes, real corridor pricing tables, sample staircase bills, narrow-lane shuttle tempo fees, and mandatory GST requirements.
                    </p>
                  </>
                )}
              </div>

              {/* ─────────────────────────────────────────────────────────────
                  1. QUICK ANSWER COST SUMMARY BOX (Google Featured Snippet / AI Overview Target)
                 ───────────────────────────────────────────────────────────── */}
              <section id="quick-answer" className="bg-gradient-to-br from-slate-50 to-red-50/30 rounded-3xl p-6 sm:p-8 border-2 border-[#E53935]/30 shadow-md">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-[#E53935] text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                    Quick Answer
                  </span>
                  <span className="text-xs font-semibold text-slate-500">
                    2026 Verified Summary
                  </span>
                </div>

                <h2 className="text-xl sm:text-2xl font-display font-bold text-[#082F52] mb-3">
                  {post.quickAnswer.headline}
                </h2>

                <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-6">
                  {post.quickAnswer.summary}
                </p>

                {/* Quick Answer Pricing Table */}
                <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-xs">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-[#082F52] text-white font-display text-xs uppercase tracking-wider">
                      <tr>
                        <th className="py-3.5 px-4 font-semibold">{qaHeaders.col1}</th>
                        <th className="py-3.5 px-4 font-semibold">{qaHeaders.col2}</th>
                        <th className="py-3.5 px-4 font-semibold">{qaHeaders.col3}</th>
                        <th className="py-3.5 px-4 font-semibold hidden md:table-cell">{qaHeaders.col4}</th>
                        <th className="py-3.5 px-4 font-semibold hidden sm:table-cell">{qaHeaders.col5}</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      {post.quickAnswer.rates.map((rate, idx) => (
                        <tr key={rate.homeSize} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/70'}>
                          <td className="py-3.5 px-4 font-bold text-[#082F52]">
                            {rate.homeSize}
                          </td>
                          <td className="py-3.5 px-4 font-bold text-[#E53935]">
                            {rate.localCost}
                          </td>
                          <td className="py-3.5 px-4 font-semibold text-slate-800">
                            {rate.intercityCost}
                          </td>
                          <td className="py-3.5 px-4 text-slate-600 hidden md:table-cell text-xs">
                            {rate.truckType}
                          </td>
                          <td className="py-3.5 px-4 text-slate-600 hidden sm:table-cell text-xs">
                            {rate.crewSize}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Key Inclusions Bullet Box */}
                <div className="mt-5 pt-4 border-t border-slate-200/80">
                  <h4 className="text-xs uppercase font-bold text-[#082F52] tracking-wider mb-2.5">
                    Key Highlights &amp; Inclusions:
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                    {post.quickAnswer.inclusionsSummary.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="text-[#E53935] font-bold text-sm shrink-0">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 flex flex-wrap items-center gap-3">
                  {post.internalLinks.map((link, i) => (
                    <React.Fragment key={link.href}>
                      {i > 0 && <span className="text-slate-300">|</span>}
                      <Link
                        href={link.href}
                        className="text-xs font-bold text-[#E53935] hover:underline flex items-center gap-1"
                      >
                        {link.label} →
                      </Link>
                    </React.Fragment>
                  ))}
                </div>
              </section>

              {/* ─────────────────────────────────────────────────────────────
                  INTERACTIVE CALCULATOR WIDGET (For Pricing Posts)
                 ───────────────────────────────────────────────────────────── */}
              {post.showCostCalculator && (
                <section id="calculator">
                  <CostCalculator />
                </section>
              )}

              {/* ─────────────────────────────────────────────────────────────
                  TOPIC-SPECIFIC DEEP DIVE SECTIONS (OR DEFAULT 1BHK/2BHK/3BHK SECTIONS)
                 ───────────────────────────────────────────────────────────── */}
              {post.articleSections && post.articleSections.length > 0 ? (
                post.articleSections.map((sec) => (
                  <section key={sec.id} id={sec.id} className="space-y-4 pt-4 border-t border-slate-100">
                    <div>
                      <span className="text-xs uppercase font-bold text-[#E53935] tracking-wider block mb-1">
                        {sec.badge}
                      </span>
                      <h2 className="text-2xl sm:text-3xl font-display font-bold text-[#082F52]">
                        {sec.heading}
                      </h2>
                    </div>
                    <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
                      {sec.paragraphs.map((p, i) => (
                        <p key={i}>{p}</p>
                      ))}
                    </div>
                    {sec.bullets && sec.bullets.length > 0 && (
                      <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200 space-y-2.5">
                        <h3 className="text-xs uppercase font-bold text-[#082F52] tracking-wider">
                          Actionable Checklist &amp; Operational Standards:
                        </h3>
                        <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                          {sec.bullets.map((b) => (
                            <li key={b} className="flex items-start gap-2.5">
                              <span className="text-[#E53935] font-bold shrink-0">▸</span>
                              <span>{b}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </section>
                ))
              ) : (
                <>
                  {/* DETAILED SECTION 1: 1BHK Moving Cost in Kolkata */}
                  <section id="1bhk-moving-cost" className="space-y-4">
                    <h2 className="text-2xl sm:text-3xl font-display font-bold text-[#082F52]">
                      1BHK Moving Cost in Kolkata: What Does It Include?
                    </h2>
                    <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
                      <p>
                        For tenants and young couples shifting a single bedroom apartment, the <strong>1bhk moving cost kolkata</strong> standardly ranges between <strong>₹4,500 and ₹8,500</strong> for local relocations within 25 kilometers.
                      </p>
                      <p>
                        A standard 1 BHK inventory typically includes one double or queen bed, a wardrobe, refrigerator, washing machine, television unit, sofa set or futon, and approximately 10 to 18 packed cartons of kitchenware, clothing, and personal items.
                      </p>
                    </div>

                    {/* Cost Breakdown Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                      <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200">
                        <span className="text-xs font-bold text-[#E53935] uppercase">Component 1</span>
                        <h3 className="font-bold text-[#082F52] text-sm mt-1">Packaging Materials</h3>
                        <p className="text-xs text-slate-600 mt-1">₹1,500 – ₹2,500 (Bubble wrap, 5-ply cartons, stretch film &amp; tape)</p>
                      </div>
                      <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200">
                        <span className="text-xs font-bold text-[#E53935] uppercase">Component 2</span>
                        <h3 className="font-bold text-[#082F52] text-sm mt-1">Dedicated Transport</h3>
                        <p className="text-xs text-slate-600 mt-1">₹1,800 – ₹3,200 (Tata Ace / Mahindra Bolero Pickup + fuel)</p>
                      </div>
                      <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200">
                        <span className="text-xs font-bold text-[#E53935] uppercase">Component 3</span>
                        <h3 className="font-bold text-[#082F52] text-sm mt-1">Loading &amp; Assembly Crew</h3>
                        <p className="text-xs text-slate-600 mt-1">₹1,200 – ₹2,500 (2 to 3 trained handlers for loading &amp; placement)</p>
                      </div>
                    </div>

                    <p className="text-xs text-slate-500 italic mt-2">
                      💡 Pro-tip: Check our comprehensive <Link href="/moving-checklist" className="text-[#E53935] font-semibold hover:underline">Home Moving Checklist</Link> to declutter before packing day and cut down 1 BHK volume costs.
                    </p>
                  </section>

                  {/* DETAILED SECTION 2: 2BHK & 3BHK House Shifting Cost in Kolkata */}
                  <section id="2bhk-3bhk-cost" className="space-y-4 pt-4 border-t border-slate-100">
                    <h2 className="text-2xl sm:text-3xl font-display font-bold text-[#082F52]">
                      2BHK and 3BHK House Shifting Cost in Kolkata
                    </h2>
                    <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
                      <p>
                        When calculating <strong>house shifting cost in kolkata</strong> for 2BHK and 3BHK apartments, the logistical complexity scales. Family moves involve heavy solid wood furniture (such as multi-door almirahs, dining tables with glass tops, and modular beds), delicate crockery, multiple air conditioners, and 25 to 50+ cartons.
                      </p>
                      <ul className="list-disc pl-5 space-y-2 text-slate-700">
                        <li>
                          <strong>2 BHK Moving Charges (₹7,500 – ₹13,500):</strong> Allocated with a 14ft closed container truck and 3 to 4 moving specialists. Includes complete carpentry dismantling and reassembly of modular furniture.
                        </li>
                        <li>
                          <strong>3 BHK Moving Charges (₹11,000 – ₹19,500):</strong> Allocated with a 17ft or 19ft large container truck and 4 to 5 seasoned moving specialists. Accommodates two king/queen beds, large modular wardrobes, 30+ cartons, and living room suites.
                        </li>
                      </ul>
                      <p>
                        Explore our dedicated <Link href="/household-shifting" className="text-[#E53935] font-semibold hover:underline">Household Shifting Services</Link> for detailed step-by-step moving protocols, custom wooden crating for televisions, and transit insurance options.
                      </p>
                    </div>
                  </section>
                </>
              )}

              {/* ─────────────────────────────────────────────────────────────
                  DISTANCE × HOME SIZE MATRIX TABLE (When Available)
                 ───────────────────────────────────────────────────────────── */}
              {post.distanceMatrix && post.distanceMatrix.length > 0 && (
                <section id="distance-matrix" className="space-y-5 pt-4 border-t border-slate-100">
                  <div>
                    <span className="text-xs uppercase font-bold text-[#1478B5] tracking-wider block mb-1">
                      Distance × Home Size Matrix (2026)
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-display font-bold text-[#082F52]">
                      Kolkata Moving Charges by Distance Slab (Local, West Bengal &amp; Intercity)
                    </h2>
                    <p className="text-slate-600 text-sm mt-1">
                      Compare how packers and movers charges scale from intra-neighborhood Kolkata moves (under 15 km) to South/North Bengal towns and long-haul PAN-India metro corridors.
                    </p>
                  </div>

                  <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-xs">
                    <table className="w-full text-left text-sm">
                      <thead className="bg-[#082F52] text-white font-display text-xs uppercase tracking-wider">
                        <tr>
                          <th className="py-3.5 px-4 font-semibold">Distance Slab</th>
                          <th className="py-3.5 px-4 font-semibold hidden md:table-cell">Example Routes from Kolkata</th>
                          <th className="py-3.5 px-4 font-semibold">1 BHK Cost</th>
                          <th className="py-3.5 px-4 font-semibold">2 BHK Cost</th>
                          <th className="py-3.5 px-4 font-semibold">3 BHK Cost</th>
                          <th className="py-3.5 px-4 font-semibold hidden sm:table-cell">Transit Window</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-200">
                        {post.distanceMatrix.map((row, idx) => (
                          <tr key={row.distanceSlab} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/70'}>
                            <td className="py-3.5 px-4 font-bold text-[#082F52]">
                              {row.distanceSlab}
                            </td>
                            <td className="py-3.5 px-4 text-slate-600 hidden md:table-cell text-xs">
                              {row.exampleRoutes}
                            </td>
                            <td className="py-3.5 px-4 font-semibold text-slate-800 whitespace-nowrap">
                              {row.oneBhk}
                            </td>
                            <td className="py-3.5 px-4 font-bold text-[#082F52] whitespace-nowrap">
                              {row.twoBhk}
                            </td>
                            <td className="py-3.5 px-4 font-bold text-[#E53935] whitespace-nowrap">
                              {row.threeBhk}
                            </td>
                            <td className="py-3.5 px-4 text-slate-500 hidden sm:table-cell text-xs whitespace-nowrap">
                              {row.transitTime}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </section>
              )}

              {/* ─────────────────────────────────────────────────────────────
                  PACKING MATERIALS & LABOUR BREAKDOWN TABLE (When Available)
                 ───────────────────────────────────────────────────────────── */}
              {post.packingLabourMatrix && post.packingLabourMatrix.length > 0 && (
                <section id="packing-labour-breakdown" className="space-y-5 pt-4 border-t border-slate-100">
                  <div>
                    <span className="text-xs uppercase font-bold text-[#E53935] tracking-wider block mb-1">
                      Component-Wise Cost Transparency
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-display font-bold text-[#082F52]">
                      Carton Count, 5-Layer Packing Material &amp; Labour Cost Breakdown
                    </h2>
                    <p className="text-slate-600 text-sm mt-1">
                      See how much of your total moving bill goes toward 5-ply corrugated boxes, bubble/foam wrap, trained handling crew, carpentry, and closed container allocation.
                    </p>
                  </div>

                  <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-xs">
                    <table className="w-full text-left text-sm">
                      <thead className="bg-[#082F52] text-white font-display text-xs uppercase tracking-wider">
                        <tr>
                          <th className="py-3.5 px-4 font-semibold">Home Size</th>
                          <th className="py-3.5 px-4 font-semibold">Avg. Carton Count</th>
                          <th className="py-3.5 px-4 font-semibold">5-Layer Packing Material</th>
                          <th className="py-3.5 px-4 font-semibold">Labour &amp; Carpentry</th>
                          <th className="py-3.5 px-4 font-semibold hidden md:table-cell">Recommended Vehicle</th>
                          <th className="py-3.5 px-4 font-semibold">Total Local Range</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-200">
                        {post.packingLabourMatrix.map((row, idx) => (
                          <tr key={row.homeType} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/70'}>
                            <td className="py-3.5 px-4 font-bold text-[#082F52]">
                              {row.homeType}
                            </td>
                            <td className="py-3.5 px-4 text-slate-700 font-medium text-xs">
                              {row.avgCartons}
                            </td>
                            <td className="py-3.5 px-4 font-semibold text-slate-800 whitespace-nowrap">
                              {row.packingMaterialCost}
                            </td>
                            <td className="py-3.5 px-4 text-slate-700 text-xs">
                              {row.labourAndCarpentryCost}
                            </td>
                            <td className="py-3.5 px-4 text-slate-600 hidden md:table-cell text-xs">
                              {row.recommendedTruck}
                            </td>
                            <td className="py-3.5 px-4 font-bold text-[#E53935] whitespace-nowrap">
                              {row.totalLocalRange}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* 4:3 Fleet & Packing Visual Showcase */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
                    <figure className="rounded-2xl overflow-hidden border border-slate-200 bg-slate-50 shadow-xs">
                      <div className="aspect-[4/3] w-full overflow-hidden bg-slate-100">
                        <img
                          src="/images/packaging.png"
                          alt="5-layer corrugated, bubble wrap, and stretch film household packing in Kolkata by Bharat Relocators"
                          loading="lazy"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <figcaption className="p-3.5 text-xs text-slate-600 leading-relaxed">
                        <strong className="text-[#082F52] block">5-Layer Fragile &amp; Furniture Protection</strong>
                        EPE foam sheet, 10mm air-bubble wrap, 5-ply cartons, edge guards, and waterproof LLDPE stretch film.
                      </figcaption>
                    </figure>
                    <figure className="rounded-2xl overflow-hidden border border-slate-200 bg-slate-50 shadow-xs">
                      <div className="aspect-[4/3] w-full overflow-hidden bg-slate-100">
                        <img
                          src="/images/gallery/g9.jpeg"
                          alt="Bharat Relocators closed-body container truck loading household goods in Kolkata"
                          loading="lazy"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <figcaption className="p-3.5 text-xs text-slate-600 leading-relaxed">
                        <strong className="text-[#082F52] block">Weatherproof Closed Container Fleet</strong>
                        Dedicated 14ft, 17ft, and 19ft steel-roof containers operating out of our Haltu (700078) and Behala (700061) hubs.
                      </figcaption>
                    </figure>
                  </div>
                </section>
              )}

              {/* ─────────────────────────────────────────────────────────────
                  2. CORRIDOR PRICING / MATRIX TABLE
                 ───────────────────────────────────────────────────────────── */}
              <section id="corridor-pricing" className="space-y-5 pt-4 border-t border-slate-100">
                <div>
                  <span className="text-xs uppercase font-bold text-[#E53935] tracking-wider block mb-1">
                    {corridorMeta.badge}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-display font-bold text-[#082F52]">
                    {corridorMeta.heading}
                  </h2>
                  <p className="text-slate-600 text-sm mt-1">
                    {corridorMeta.subtitle}
                  </p>
                </div>

                <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-xs">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-[#082F52] text-white font-display text-xs uppercase tracking-wider">
                      <tr>
                        <th className="py-3.5 px-4 font-semibold">{corridorMeta.headers.col1}</th>
                        <th className="py-3.5 px-4 font-semibold">{corridorMeta.headers.col2}</th>
                        <th className="py-3.5 px-4 font-semibold">{corridorMeta.headers.col3}</th>
                        <th className="py-3.5 px-4 font-semibold">{corridorMeta.headers.col4}</th>
                        <th className="py-3.5 px-4 font-semibold">{corridorMeta.headers.col5}</th>
                        <th className="py-3.5 px-4 font-semibold hidden sm:table-cell">{corridorMeta.headers.col6}</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      {post.corridorRates.map((corridor, idx) => (
                        <tr key={corridor.corridor} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/70'}>
                          <td className="py-3.5 px-4 font-bold text-[#082F52]">
                            {corridor.corridor}
                          </td>
                          <td className="py-3.5 px-4 text-slate-600 text-xs">
                            {corridor.distanceKm}
                          </td>
                          <td className="py-3.5 px-4 font-semibold text-slate-800">
                            {corridor.oneBhk}
                          </td>
                          <td className="py-3.5 px-4 font-bold text-[#082F52]">
                            {corridor.twoBhk}
                          </td>
                          <td className="py-3.5 px-4 font-bold text-[#E53935]">
                            {corridor.threeBhk}
                          </td>
                          <td className="py-3.5 px-4 text-slate-500 hidden sm:table-cell text-xs">
                            {corridor.duration}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              {/* ─────────────────────────────────────────────────────────────
                  3. SIDE-BY-SIDE COMPARISON / SAMPLE BILL TABLE
                 ───────────────────────────────────────────────────────────── */}
              <section id="lift-comparison" className="space-y-6 pt-4 border-t border-slate-100">
                <div>
                  <span className="text-xs uppercase font-bold text-[#1478B5] tracking-wider block mb-1">
                    {post.liftComparison.badge ?? 'Staircase vs. Elevator Analysis'}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-display font-bold text-[#082F52]">
                    {post.liftComparison.scenarioTitle}
                  </h2>
                  <p className="text-slate-600 text-sm mt-1">
                    {post.liftComparison.scenarioDesc}
                  </p>
                </div>

                {/* Side-by-Side Comparison Table */}
                <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-xs">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-[#082F52] text-white font-display text-xs uppercase tracking-wider">
                      <tr>
                        <th className="py-3.5 px-4 font-semibold">Comparison Component</th>
                        <th className="py-3.5 px-4 font-semibold bg-[#0A3D6B]">
                          {post.liftComparison.colWithLiftHeader ?? 'With Service Lift'}
                        </th>
                        <th className="py-3.5 px-4 font-semibold bg-red-950/80">
                          {post.liftComparison.colWithoutLiftHeader ?? 'Without Lift (3rd Floor)'}
                        </th>
                        <th className="py-3.5 px-4 font-semibold hidden md:table-cell">Operational Notes</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      {post.liftComparison.items.map((item, idx) => (
                        <tr key={item.component} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/70'}>
                          <td className="py-3.5 px-4 font-medium text-[#082F52]">
                            {item.component}
                          </td>
                          <td className="py-3.5 px-4 font-semibold text-slate-800 bg-blue-50/20">
                            {item.withLift}
                          </td>
                          <td className="py-3.5 px-4 font-semibold text-[#E53935] bg-red-50/20">
                            {item.withoutLift}
                          </td>
                          <td className="py-3.5 px-4 text-slate-500 hidden md:table-cell text-xs">
                            {item.notes}
                          </td>
                        </tr>
                      ))}
                      <tr className="bg-slate-100 font-bold text-base">
                        <td className="py-4 px-4 text-[#082F52]">Bottom-Line Summary</td>
                        <td className="py-4 px-4 text-[#082F52] bg-blue-100/50">
                          {post.liftComparison.withLiftTotal}
                        </td>
                        <td className="py-4 px-4 text-[#E53935] bg-red-100/60">
                          {post.liftComparison.withoutLiftTotal}
                        </td>
                        <td className="py-4 px-4 text-xs text-slate-600 hidden md:table-cell">
                          {post.liftComparison.differenceNote ?? 'Difference of ₹2,000 for staircase physical carry'}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* 4-Card Operational Rules Box */}
                <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 space-y-4">
                  <h3 className="font-display font-bold text-[#082F52] text-base">
                    {post.liftComparison.staircaseRulesTitle ?? 'Kolkata Staircase Carry Surcharge Structure (Per Floor)'}
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {post.liftComparison.staircaseRules.map((rule) => (
                      <div key={rule.floor} className="bg-white p-4 rounded-xl border border-slate-200">
                        <span className="text-xs font-bold text-[#082F52] block">{rule.floor}</span>
                        <span className="text-sm font-black text-[#E53935] block my-1">{rule.typicalCharge}</span>
                        <p className="text-[11px] text-slate-500 leading-tight">{rule.details}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* ─────────────────────────────────────────────────────────────
                  4. SHUTTLE / LOGISTICS & 18% GST BREAKDOWN
                 ───────────────────────────────────────────────────────────── */}
              <section id="shuttle-tempo-gst" className="space-y-6 pt-4 border-t border-slate-100">
                <div>
                  <span className="text-xs uppercase font-bold text-[#F28A32] tracking-wider block mb-1">
                    Specialized Logistics &amp; Tax Compliance
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-display font-bold text-[#082F52]">
                    {post.shuttleAndGst.sectionTitle ?? 'Narrow-Lane Shuttle Tempo Fees and 18% GST Breakdown'}
                  </h2>
                </div>

                {/* Narrow Lane / Feeder Section */}
                <div className="space-y-3">
                  <h3 className="text-lg font-display font-bold text-[#082F52]">
                    {post.shuttleAndGst.shuttleHeadline}
                  </h3>
                  <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                    {post.shuttleAndGst.shuttleDesc}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-3">
                    {post.shuttleAndGst.shuttleRates.map((shuttle) => (
                      <div key={shuttle.vehicle} className="p-5 bg-amber-50/50 rounded-2xl border border-amber-200">
                        <div className="flex items-center justify-between gap-2">
                          <h4 className="font-bold text-[#082F52] text-sm">{shuttle.vehicle}</h4>
                          <span className="text-xs font-bold text-[#E53935] bg-white px-2 py-0.5 rounded border border-amber-200 shrink-0">
                            {shuttle.chargePerTrip}
                          </span>
                        </div>
                        <p className="text-xs text-slate-600 mt-2">
                          <strong>Scope:</strong> {shuttle.capacity}
                        </p>
                        <p className="text-xs text-slate-600 mt-1">
                          <strong>Applicable Zones:</strong> {shuttle.applicableZones}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* GST Breakdown Section */}
                <div className="space-y-3 pt-4">
                  <h3 className="text-lg font-display font-bold text-[#082F52]">
                    {post.shuttleAndGst.gstHeadline}
                  </h3>
                  <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                    {post.shuttleAndGst.gstDesc}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-3">
                    {post.shuttleAndGst.gstTypes.map((gst) => (
                      <div key={gst.rate} className="p-5 bg-blue-50/50 rounded-2xl border border-blue-200">
                        <div className="flex items-center justify-between gap-2">
                          <h4 className="font-bold text-[#082F52] text-sm">{gst.rate}</h4>
                          <span className="text-xs font-mono font-bold text-[#1478B5] bg-white px-2 py-0.5 rounded border border-blue-200 shrink-0">
                            {gst.sacCode}
                          </span>
                        </div>
                        <p className="text-xs text-slate-700 mt-2 leading-relaxed">
                          {gst.serviceScope}
                        </p>
                        <div className="mt-3 pt-2 border-t border-blue-200/60 text-xs text-slate-600">
                          <strong>Best suited for:</strong> {gst.bestFor}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* ─────────────────────────────────────────────────────────────
                  5. OFFICIAL GOVERNMENT & REGULATORY PORTALS REFERENCED (Outbound Authority Links)
                 ───────────────────────────────────────────────────────────── */}
              <section id="official-references" className="bg-emerald-50/70 rounded-3xl p-6 sm:p-8 border border-emerald-200 space-y-4">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <div>
                    <span className="text-xs uppercase font-bold text-emerald-800 tracking-wider block">
                      Verified Regulatory Citations
                    </span>
                    <h2 className="text-lg sm:text-xl font-display font-bold text-[#082F52]">
                      Official Government &amp; Transport Portals Referenced in This Guide
                    </h2>
                  </div>
                  <span className="text-[11px] font-mono bg-white text-emerald-800 border border-emerald-300 px-2.5 py-1 rounded-md font-bold">
                    GSTIN: 19AAWFB0500G1ZL
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {post.externalLinks.map((ext) => (
                    <a
                      key={ext.url}
                      href={ext.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-4 bg-white rounded-2xl border border-emerald-200 hover:border-[#082F52] shadow-xs transition-all flex flex-col justify-between group"
                    >
                      <div>
                        <span className="text-[11px] font-bold text-emerald-700 uppercase tracking-wider block mb-1">
                          {ext.authority}
                        </span>
                        <h3 className="font-bold text-[#082F52] group-hover:text-[#E53935] text-sm transition-colors flex items-center justify-between gap-2">
                          <span>{ext.label}</span>
                          <span aria-hidden="true" className="text-xs shrink-0">↗</span>
                        </h3>
                        <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                          {ext.description}
                        </p>
                      </div>
                      <span className="text-[11px] font-mono text-slate-400 mt-3 truncate block">
                        {ext.url}
                      </span>
                    </a>
                  ))}
                </div>
              </section>

              {/* ─────────────────────────────────────────────────────────────
                  6. MID-PAGE HIGH-CONVERTING CTA BANNER
                 ───────────────────────────────────────────────────────────── */}
              <section className="bg-gradient-to-r from-[#082F52] to-[#1478B5] rounded-3xl p-8 sm:p-10 text-white shadow-xl relative overflow-hidden">
                <div className="relative z-10 space-y-4 max-w-2xl">
                  <span className="bg-[#E53935] text-white text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full">
                    No Hidden Surcharges
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-display font-bold text-white leading-tight">
                    Want an Exact Guaranteed Quote for Your Kolkata Relocation?
                  </h3>
                  <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                    Avoid surprise staircase fees or tempo surcharges on moving day. Share your inventory for a transparent, itemized written proposal with 5-layer packing included.
                  </p>
                  <div className="pt-2 flex flex-wrap gap-4">
                    <Link
                      href="/get-a-quote"
                      className="bg-[#E53935] hover:bg-[#c62828] text-white font-bold text-sm px-6 py-3.5 rounded-xl shadow-lg transition-colors inline-flex items-center gap-2"
                    >
                      Fill Free Quote Form
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </Link>
                    <a
                      href={getTelUrl()}
                      className="bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold text-sm px-5 py-3.5 rounded-xl transition-colors inline-flex items-center gap-2"
                    >
                      Call Move Desk: {BUSINESS.phone.primaryFormatted}
                    </a>
                  </div>
                </div>
              </section>

              {/* ─────────────────────────────────────────────────────────────
                  7. FREQUENTLY ASKED QUESTIONS (FAQPage Schema Synced)
                 ───────────────────────────────────────────────────────────── */}
              <section id="faqs" className="space-y-6 pt-4 border-t border-slate-100">
                <div>
                  <span className="text-xs uppercase font-bold text-[#E53935] tracking-wider block mb-1">
                    Helpful Answers
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-display font-bold text-[#082F52]">
                    Frequently Asked Questions
                  </h2>
                </div>

                <div className="space-y-4">
                  {post.faqs.map((faq, idx) => (
                    <div
                      key={faq.question}
                      className="p-5 sm:p-6 bg-slate-50 rounded-2xl border border-slate-200/80 hover:border-slate-300 transition-colors"
                    >
                      <h3 className="font-display font-bold text-[#082F52] text-base sm:text-lg mb-2 flex items-start gap-2.5">
                        <span className="text-[#E53935] font-black text-sm mt-0.5">Q{idx + 1}.</span>
                        <span>{faq.question}</span>
                      </h3>
                      <p className="text-slate-600 text-sm leading-relaxed pl-6">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* ─────────────────────────────────────────────────────────────
                  AUTHOR BIO & TRUST VERIFICATION
                 ───────────────────────────────────────────────────────────── */}
              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 flex flex-col sm:flex-row items-center sm:items-start gap-4">
                <div className="w-16 h-16 rounded-2xl bg-[#082F52] text-white flex items-center justify-center font-bold text-xl shrink-0 font-display">
                  BR
                </div>
                <div className="space-y-1.5 text-center sm:text-left">
                  <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                    <h4 className="font-display font-bold text-[#082F52] text-base">
                      {post.author.name}
                    </h4>
                    <span className="text-xs bg-slate-200 text-slate-700 px-2 py-0.5 rounded font-medium">
                      {post.author.role}
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Published by the operations desk at Bharat Relocators Kolkata (GSTIN: 19AAWFB0500G1ZL). Operating two primary hubs in Haltu (South Kolkata 700078) and Behala (West Kolkata 700061) with a 4.9★ Google rating over 306+ verified moves.
                  </p>
                  <div className="pt-2 flex flex-wrap gap-3 text-xs text-[#082F52] font-semibold justify-center sm:justify-start">
                    <span>📍 Haltu HQ: 17, Ramlal Bazar Road, 700078</span>
                    <span>•</span>
                    <span>📍 Behala Branch: 217, Parui Kacha Road, 700061</span>
                    <span>•</span>
                    <a href={getTelUrl()} className="text-[#E53935] hover:underline">
                      📞 {BUSINESS.phone.primaryFormatted}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Sidebar Column (4 cols) */}
            <aside className="lg:col-span-4 space-y-6">
              {/* Upper Static Cards: Recommended Services & Verified Kolkata Trust Card */}
              <div className="bg-white rounded-2xl p-6 border-2 border-[#082F52]/15 space-y-3 shadow-xs">
                <h4 className="text-xs uppercase font-bold text-[#E53935] tracking-wider">
                  Recommended Services for This Move
                </h4>
                <div className="space-y-2.5">
                  {post.internalLinks.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block p-3 rounded-xl bg-slate-50 hover:bg-red-50/40 border border-slate-200 hover:border-[#E53935] transition-all"
                    >
                      <span className="font-bold text-[#082F52] text-xs block">
                        {item.label} →
                      </span>
                      <span className="text-[11px] text-slate-600 mt-0.5 block leading-snug">
                        {item.description}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Verified Kolkata Hubs & GST Statutory Trust Card */}
              <div className="bg-emerald-50/60 rounded-2xl p-5 border border-emerald-200 space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[11px] uppercase font-bold text-emerald-800 tracking-wider">
                    Verified Kolkata Movers
                  </span>
                  <span className="text-[11px] font-bold bg-amber-100 text-amber-900 px-2 py-0.5 rounded">
                    ★ 4.9 (306+ Reviews)
                  </span>
                </div>
                <div className="space-y-1.5 text-xs text-slate-700">
                  <p>
                    <strong className="text-[#082F52]">GSTIN:</strong>{' '}
                    <span className="font-mono font-bold text-emerald-800">19AAWFB0500G1ZL</span>
                  </p>
                  <p>
                    <strong className="text-[#082F52]">Haltu HQ:</strong> 17, Ramlal Bazar Rd, Kolkata 700078
                  </p>
                  <p>
                    <strong className="text-[#082F52]">Behala Branch:</strong> 217, Parui Kacha Rd, Kolkata 700061
                  </p>
                </div>
                <div className="pt-2 border-t border-emerald-200/70 flex items-center justify-between text-[11px] font-semibold">
                  <a
                    href="https://services.gst.gov.in/services/searchtp"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-800 hover:text-[#E53935] underline"
                  >
                    Verify GSTIN on gst.gov.in ↗
                  </a>
                  <Link href="/tracking" className="text-[#082F52] hover:text-[#E53935]">
                    Track Shipment →
                  </Link>
                </div>
              </div>

              {/* Sticky Navigation & Conversion Rail — Glides Down Alongside Entire Article */}
              <div className="lg:sticky lg:top-24 space-y-5">
                {/* Quick Jump Table of Contents */}
                <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200">
                  <h3 className="text-xs uppercase font-bold text-[#082F52] tracking-wider mb-2.5">
                    On This Page
                  </h3>
                  <nav className="space-y-1 text-xs font-medium text-slate-600">
                    <a href="#quick-answer" className="block hover:text-[#E53935] transition-colors py-1">
                      • Quick Answer Cost Summary
                    </a>
                    {post.showCostCalculator && (
                      <a href="#calculator" className="block hover:text-[#E53935] transition-colors py-1">
                        • Interactive 2026 Cost Estimator
                      </a>
                    )}
                    {post.articleSections?.map((sec) => (
                      <a
                        key={sec.id}
                        href={`#${sec.id}`}
                        className="block hover:text-[#E53935] transition-colors py-1 truncate"
                        title={sec.heading}
                      >
                        • {sec.heading}
                      </a>
                    ))}
                    <a href="#corridor-pricing" className="block hover:text-[#E53935] transition-colors py-1 truncate" title={corridorMeta.heading}>
                      • {corridorMeta.heading}
                    </a>
                    <a href="#lift-comparison" className="block hover:text-[#E53935] transition-colors py-1 truncate" title={post.liftComparison.scenarioTitle}>
                      • {post.liftComparison.scenarioTitle}
                    </a>
                    <a href="#shuttle-tempo-gst" className="block hover:text-[#E53935] transition-colors py-1">
                      • Logistics &amp; GST Compliance
                    </a>
                    <a href="#official-references" className="block hover:text-[#E53935] transition-colors py-1">
                      • Official Government Portals
                    </a>
                    <a href="#faqs" className="block hover:text-[#E53935] transition-colors py-1">
                      • Frequently Asked Questions
                    </a>
                  </nav>
                </div>

                {/* Free Instant Estimate Card */}
                <div className="bg-gradient-to-br from-[#082F52] to-[#0A3D6B] rounded-2xl p-5 text-white shadow-lg space-y-3.5">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-[11px] uppercase font-bold text-slate-200 tracking-wider">
                      Free Booking Estimate
                    </span>
                  </div>
                  <h4 className="text-base font-display font-bold text-white leading-tight">
                    Moving in Kolkata Soon? Get a Guaranteed Quote
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Zero surprise costs on moving day. Includes inventory survey, 5-layer packing, and enclosed container transport.
                  </p>
                  <div className="space-y-2 pt-1">
                    <Link
                      href="/get-a-quote"
                      className="w-full block text-center bg-[#E53935] hover:bg-[#c62828] text-white font-bold text-xs py-3 px-4 rounded-xl shadow-md transition-colors"
                    >
                      Open Free Quote Form →
                    </Link>
                    <a
                      href={getWhatsAppUrl(`Hi, I would like to book a moving quote in Kolkata after reading ${post.title}.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs py-3 px-4 rounded-xl transition-colors shadow-sm"
                    >
                      WhatsApp Move Specialist
                    </a>
                  </div>
                </div>

                {/* Direct Hotline */}
                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 text-center space-y-1">
                  <span className="text-[11px] uppercase font-bold text-slate-400 block">
                    Speak With A Relocation Coordinator
                  </span>
                  <a
                    href={getTelUrl()}
                    className="text-lg font-black font-display text-[#082F52] hover:text-[#E53935] transition-colors block"
                  >
                    {BUSINESS.phone.primaryFormatted}
                  </a>
                  <p className="text-[11px] text-slate-500">24/7 Available · Haltu &amp; Behala Hubs</p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </article>

      {/* Related Cornerstone Guides & Rate Cards Cross-Linking Section */}
      <section className="py-14 bg-slate-50 border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <span className="text-xs uppercase font-bold text-[#E53935] tracking-wider block">
                Continue Reading
              </span>
              <h2 className="text-2xl font-display font-bold text-[#082F52]">
                Foundational Kolkata Relocation Checklists &amp; Guides
              </h2>
            </div>
            <Link
              href="/blogs"
              className="text-xs sm:text-sm font-bold text-[#082F52] hover:text-[#E53935] transition-colors"
            >
              Back to Blogs →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedPosts.length > 0 ? (
              relatedPosts.map((rel) => (
                <div
                  key={rel.slug}
                  className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs hover:border-[#082F52]/40 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 text-xs mb-2.5">
                      <span className="font-bold text-[#E53935] uppercase">{rel.category}</span>
                      <span className="text-slate-400">{rel.readTime}</span>
                    </div>
                    <h3 className="font-display font-bold text-[#082F52] text-base mb-2 leading-snug hover:text-[#E53935] transition-colors">
                      <Link href={`/blogs/${rel.slug}`}>{rel.h1}</Link>
                    </h3>
                    <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                      {rel.excerpt}
                    </p>
                  </div>
                  <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="text-slate-400 font-medium">{rel.publishWeek}</span>
                    <Link
                      href={`/blogs/${rel.slug}`}
                      className="font-bold text-[#082F52] hover:text-[#E53935]"
                    >
                      Read Rate Card →
                    </Link>
                  </div>
                </div>
              ))
            ) : (
              [
                {
                  title: 'Comprehensive Home Moving Checklist: 4-Week Timeline',
                  category: 'Relocation Planning',
                  excerpt:
                    'A structured 4-week preparation framework covering room-by-room inventory decluttering, utility transfers, essential packing supplies, and moving-day coordination.',
                  readTime: '6 min read',
                  href: '/moving-checklist',
                },
                {
                  title: 'Vehicle Transportation & Safety Guide: Cars & Bikes',
                  category: 'Automotive Logistics',
                  excerpt:
                    'Complete operational guide for transporting cars and two-wheelers across India. Details required RTO documentation, enclosed carrier mechanics, and condition reports.',
                  readTime: '7 min read',
                  href: '/vehicle-transportation-guide',
                },
                {
                  title: 'Intercity Moving from Kolkata: Interstate Highways & Corridors',
                  category: 'Interstate Moving',
                  excerpt:
                    'Understand national highway container transit from Kolkata to Bangalore, Delhi NCR, Mumbai, and Hyderabad with verified consignment waybills and insurance.',
                  readTime: '9 min read',
                  href: '/intercity-moving-guide',
                },
              ].map((guide) => (
                <div
                  key={guide.href}
                  className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs hover:border-[#082F52]/40 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 text-xs mb-2.5">
                      <span className="font-bold text-[#E53935] uppercase">{guide.category}</span>
                      <span className="text-slate-400">{guide.readTime}</span>
                    </div>
                    <h3 className="font-display font-bold text-[#082F52] text-base mb-2 leading-snug hover:text-[#E53935] transition-colors">
                      <Link href={guide.href}>{guide.title}</Link>
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {guide.excerpt}
                    </p>
                  </div>
                  <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="text-slate-400 font-medium">📌 Cornerstone Guide</span>
                    <Link
                      href={guide.href}
                      className="font-bold text-[#082F52] hover:text-[#E53935]"
                    >
                      Read Full Guide →
                    </Link>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
