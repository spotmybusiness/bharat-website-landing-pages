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
  return posts.map((post) => ({
    slug: post.slug,
  }));
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
    image: `${siteUrl}${post.featuredImage}`,
    keywords: post.targetKeywords.join(', '),
    articleSection: post.category,
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
        name: 'Blog',
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

  return (
    <PageLayout>
      <JsonLd data={graphData} />

      {/* Hero Header */}
      <PageHero
        label="Verified 2026 Rate Card"
        title={post.h1}
        subtitle="A transparent, data-backed pricing guide for home shifting in Kolkata. Check verified 1BHK, 2BHK, 3BHK corridor rates, lift vs staircase bills, narrow-lane tempo fees, and GST tax rules."
        breadcrumbs={[
          { label: 'Blog', href: '/blogs' },
          { label: 'Kolkata Moving Charges', href: `/blogs/${post.slug}` },
        ]}
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
              href={getWhatsAppUrl(`Hi Bharat Relocators, I am checking your 2026 Rate Card for Kolkata shifting. Please provide an exact quote for my move!`)}
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
              Verified Rate Card
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-slate-400">Published by:</span>
            <span className="font-semibold text-[#082F52]">{post.author.organization}</span>
            <span className="bg-amber-100 text-amber-800 font-bold px-2 py-0.5 rounded text-[11px]">★ 4.9 (305+ Reviews)</span>
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
                <p>
                  Relocating a home in Kolkata—whether moving from an old traditional para in Haltu or Behala to a modern high-rise in New Town or Salt Lake—comes with unique logistical considerations. Between narrow historical lanes, varying floor heights without elevators, and bridge toll crossings, understanding realistic <strong>packers and movers Kolkata charges</strong> is essential before hiring a moving service.
                </p>
                <p>
                  At <strong>Bharat Relocators</strong>, we believe in complete pricing transparency. This verified <strong>2026 Rate Card</strong> provides an exact breakdown of local and intercity shifting costs for 1BHK, 2BHK, and 3BHK homes, real corridor pricing tables, sample staircase bills, narrow-lane shuttle tempo fees, and mandatory GST requirements.
                </p>
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
                    Kolkata Moving Cost Summary (2026)
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
                        <th className="py-3.5 px-4 font-semibold">House Size</th>
                        <th className="py-3.5 px-4 font-semibold">Local Shifting Cost</th>
                        <th className="py-3.5 px-4 font-semibold">Intercity Shifting (500+ km)</th>
                        <th className="py-3.5 px-4 font-semibold hidden md:table-cell">Truck Type</th>
                        <th className="py-3.5 px-4 font-semibold hidden sm:table-cell">Crew Size</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      {post.quickAnswer.rates.map((rate, idx) => (
                        <tr key={rate.homeSize} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/70'}>
                          <td className="py-3.5 px-4 font-bold text-[#082F52] whitespace-nowrap">
                            {rate.homeSize}
                          </td>
                          <td className="py-3.5 px-4 font-bold text-[#E53935] whitespace-nowrap">
                            {rate.localCost}
                          </td>
                          <td className="py-3.5 px-4 font-semibold text-slate-800 whitespace-nowrap">
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
                    Standard Rate Card Inclusions:
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
                  <Link
                    href="/household-shifting"
                    className="text-xs font-bold text-[#E53935] hover:underline flex items-center gap-1"
                  >
                    Explore Household Shifting Services →
                  </Link>
                  <span className="text-slate-300">|</span>
                  <Link
                    href="/get-a-quote"
                    className="text-xs font-bold text-[#082F52] hover:underline flex items-center gap-1"
                  >
                    Request An Itemized Free Quote →
                  </Link>
                </div>
              </section>

              {/* ─────────────────────────────────────────────────────────────
                  INTERACTIVE CALCULATOR WIDGET
                 ───────────────────────────────────────────────────────────── */}
              <section id="calculator">
                <CostCalculator />
              </section>

              {/* ─────────────────────────────────────────────────────────────
                  DETAILED SECTION 1: 1BHK Moving Cost in Kolkata
                 ───────────────────────────────────────────────────────────── */}
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
                    <p className="text-xs text-slate-600 mt-1">₹1,500 – ₹2,500 (Bubble wrap, 5-ply cartons, stretch film & tape)</p>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200">
                    <span className="text-xs font-bold text-[#E53935] uppercase">Component 2</span>
                    <h3 className="font-bold text-[#082F52] text-sm mt-1">Dedicated Transport</h3>
                    <p className="text-xs text-slate-600 mt-1">₹1,800 – ₹3,200 (Tata Ace / Mahindra Bolero Pickup + fuel)</p>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200">
                    <span className="text-xs font-bold text-[#E53935] uppercase">Component 3</span>
                    <h3 className="font-bold text-[#082F52] text-sm mt-1">Loading & Assembly Crew</h3>
                    <p className="text-xs text-slate-600 mt-1">₹1,200 – ₹2,500 (2 to 3 trained handlers for loading & placement)</p>
                  </div>
                </div>

                <p className="text-xs text-slate-500 italic mt-2">
                  💡 Pro-tip: Check our comprehensive <Link href="/moving-checklist" className="text-[#E53935] font-semibold hover:underline">Home Moving Checklist</Link> to declutter before packing day and cut down 1 BHK volume costs.
                </p>
              </section>

              {/* ─────────────────────────────────────────────────────────────
                  DETAILED SECTION 2: 2BHK & 3BHK House Shifting Cost in Kolkata
                 ───────────────────────────────────────────────────────────── */}
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

              {/* ─────────────────────────────────────────────────────────────
                  2. CORRIDOR PRICING TABLE (Explicit Blueprint Item)
                 ───────────────────────────────────────────────────────────── */}
              <section id="corridor-pricing" className="space-y-5 pt-4 border-t border-slate-100">
                <div>
                  <span className="text-xs uppercase font-bold text-[#E53935] tracking-wider block mb-1">
                    Kolkata Route Benchmarks
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-display font-bold text-[#082F52]">
                    Corridor Pricing Table: Local Kolkata Route Rates
                  </h2>
                  <p className="text-slate-600 text-sm mt-1">
                    Average shifting charges across major residential corridors in Kolkata, including bridge crossings, toll routes, and traffic bypasses.
                  </p>
                </div>

                <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-xs">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-[#082F52] text-white font-display text-xs uppercase tracking-wider">
                      <tr>
                        <th className="py-3.5 px-4 font-semibold">Moving Corridor (Route)</th>
                        <th className="py-3.5 px-4 font-semibold">Distance</th>
                        <th className="py-3.5 px-4 font-semibold">1 BHK Cost</th>
                        <th className="py-3.5 px-4 font-semibold">2 BHK Cost</th>
                        <th className="py-3.5 px-4 font-semibold">3 BHK Cost</th>
                        <th className="py-3.5 px-4 font-semibold hidden sm:table-cell">Est. Time</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      {post.corridorRates.map((corridor, idx) => (
                        <tr key={corridor.corridor} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/70'}>
                          <td className="py-3.5 px-4 font-bold text-[#082F52]">
                            {corridor.corridor}
                          </td>
                          <td className="py-3.5 px-4 text-slate-600 whitespace-nowrap text-xs">
                            {corridor.distanceKm}
                          </td>
                          <td className="py-3.5 px-4 font-semibold text-slate-800 whitespace-nowrap">
                            {corridor.oneBhk}
                          </td>
                          <td className="py-3.5 px-4 font-bold text-[#082F52] whitespace-nowrap">
                            {corridor.twoBhk}
                          </td>
                          <td className="py-3.5 px-4 font-bold text-[#E53935] whitespace-nowrap">
                            {corridor.threeBhk}
                          </td>
                          <td className="py-3.5 px-4 text-slate-500 whitespace-nowrap hidden sm:table-cell text-xs">
                            {corridor.duration}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <p className="text-xs text-slate-500">
                  * Note: Actual route costs may vary slightly based on specific origin-to-destination floor accessibility, narrow-lane entry conditions, and exact packing material customizations.
                </p>
              </section>

              {/* ─────────────────────────────────────────────────────────────
                  3. SAMPLE BILL: WITH LIFT VS. WITHOUT LIFT (Explicit Blueprint Item)
                 ───────────────────────────────────────────────────────────── */}
              <section id="lift-comparison" className="space-y-6 pt-4 border-t border-slate-100">
                <div>
                  <span className="text-xs uppercase font-bold text-[#1478B5] tracking-wider block mb-1">
                    Staircase vs. Elevator Analysis
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-display font-bold text-[#082F52]">
                    Sample Bill Comparing: With Lift vs. Without Lift
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
                        <th className="py-3.5 px-4 font-semibold">Bill Component</th>
                        <th className="py-3.5 px-4 font-semibold bg-[#0A3D6B]">With Service Lift</th>
                        <th className="py-3.5 px-4 font-semibold bg-red-950/80">Without Lift (3rd Floor)</th>
                        <th className="py-3.5 px-4 font-semibold hidden md:table-cell">Billing Notes</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      {post.liftComparison.items.map((item, idx) => (
                        <tr key={item.component} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/70'}>
                          <td className="py-3.5 px-4 font-medium text-[#082F52]">
                            {item.component}
                          </td>
                          <td className="py-3.5 px-4 font-semibold text-slate-800 whitespace-nowrap bg-blue-50/20">
                            {item.withLift}
                          </td>
                          <td className="py-3.5 px-4 font-semibold text-[#E53935] whitespace-nowrap bg-red-50/20">
                            {item.withoutLift}
                          </td>
                          <td className="py-3.5 px-4 text-slate-500 hidden md:table-cell text-xs">
                            {item.notes}
                          </td>
                        </tr>
                      ))}
                      <tr className="bg-slate-100 font-bold text-base">
                        <td className="py-4 px-4 text-[#082F52]">Total Estimated Moving Bill</td>
                        <td className="py-4 px-4 text-[#082F52] bg-blue-100/50">
                          {post.liftComparison.withLiftTotal}
                        </td>
                        <td className="py-4 px-4 text-[#E53935] bg-red-100/60">
                          {post.liftComparison.withoutLiftTotal}
                        </td>
                        <td className="py-4 px-4 text-xs text-slate-600 hidden md:table-cell">
                          Difference of ₹2,000 for staircase physical carry
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Floor-by-Floor Staircase Rules Card */}
                <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 space-y-4">
                  <h3 className="font-display font-bold text-[#082F52] text-base">
                    Kolkata Staircase Carry Surcharge Structure (Per Floor)
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
                  <p className="text-xs text-slate-600">
                    Why do staircase charges exist? Hauling solid wood wardrobes, large refrigerators, and king-size mattresses down multiple flights of stairs increases manpower requirements, takes double the physical loading time, and requires extra caution to prevent wall scuffs and staircase impact.
                  </p>
                </div>
              </section>

              {/* ─────────────────────────────────────────────────────────────
                  4. NARROW-LANE SHUTTLE TEMPO FEES & 18% GST (Explicit Blueprint Item)
                 ───────────────────────────────────────────────────────────── */}
              <section id="shuttle-tempo-gst" className="space-y-6 pt-4 border-t border-slate-100">
                <div>
                  <span className="text-xs uppercase font-bold text-[#F28A32] tracking-wider block mb-1">
                    Specialized Logistics
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-display font-bold text-[#082F52]">
                    Narrow-Lane Shuttle Tempo Fees and 18% GST Breakdown
                  </h2>
                </div>

                {/* Narrow Lane Section */}
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
                        <div className="flex items-center justify-between">
                          <h4 className="font-bold text-[#082F52] text-sm">{shuttle.vehicle}</h4>
                          <span className="text-xs font-bold text-[#E53935] bg-white px-2 py-0.5 rounded border border-amber-200">
                            {shuttle.chargePerTrip}
                          </span>
                        </div>
                        <p className="text-xs text-slate-600 mt-2">
                          <strong>Capacity:</strong> {shuttle.capacity}
                        </p>
                        <p className="text-xs text-slate-600 mt-1">
                          <strong>Applicable Areas:</strong> {shuttle.applicableZones}
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
                        <div className="flex items-center justify-between">
                          <h4 className="font-bold text-[#082F52] text-sm">{gst.rate}</h4>
                          <span className="text-xs font-mono font-bold text-[#1478B5] bg-white px-2 py-0.5 rounded border border-blue-200">
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

                  <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-200 flex items-start gap-3 mt-3">
                    <span className="text-emerald-700 font-bold text-lg leading-none">✓</span>
                    <p className="text-xs text-emerald-900 leading-relaxed">
                      <strong>100% Tax Compliant & Claimable:</strong> Bharat Relocators provides official GST-registered tax invoices, consignment notes (LR), and money receipts suitable for corporate claims, defense relocations, and government transfer allowances.
                    </p>
                  </div>
                </div>
              </section>

              {/* ─────────────────────────────────────────────────────────────
                  5. MID-PAGE HIGH-CONVERTING CTA BANNER
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
                  6. FREQUENTLY ASKED QUESTIONS (FAQPage Schema Synced)
                 ───────────────────────────────────────────────────────────── */}
              <section id="faqs" className="space-y-6 pt-4 border-t border-slate-100">
                <div>
                  <span className="text-xs uppercase font-bold text-[#E53935] tracking-wider block mb-1">
                    Helpful Answers
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-display font-bold text-[#082F52]">
                    Frequently Asked Questions About Kolkata Moving Charges
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
                    Published by the operations desk at Bharat Relocators Kolkata. Operating two primary hubs in Haltu (South Kolkata) and Behala (West Kolkata) with 4.9★ Google rating over 305+ verified local moves.
                  </p>
                  <div className="pt-2 flex flex-wrap gap-3 text-xs text-[#082F52] font-semibold justify-center sm:justify-start">
                    <span>📍 Haltu Office: Ramlal Bazar Rd</span>
                    <span>•</span>
                    <span>📍 Behala Branch: D.H. Road</span>
                    <span>•</span>
                    <a href={getTelUrl()} className="text-[#E53935] hover:underline">
                      📞 {BUSINESS.phone.primaryFormatted}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Sidebar Column (4 cols) */}
            <aside className="lg:col-span-4 space-y-8">
              {/* Quick Jump Table of Contents */}
              <div className="sticky top-24 space-y-6">
                <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
                  <h3 className="text-xs uppercase font-bold text-[#082F52] tracking-wider mb-3">
                    Table of Contents
                  </h3>
                  <nav className="space-y-2 text-xs font-medium text-slate-600">
                    <a href="#quick-answer" className="block hover:text-[#E53935] transition-colors py-1">
                      1. Quick Answer Cost Summary
                    </a>
                    <a href="#calculator" className="block hover:text-[#E53935] transition-colors py-1">
                      2. Interactive 2026 Cost Estimator
                    </a>
                    <a href="#1bhk-moving-cost" className="block hover:text-[#E53935] transition-colors py-1">
                      3. 1BHK Moving Cost in Kolkata
                    </a>
                    <a href="#2bhk-3bhk-cost" className="block hover:text-[#E53935] transition-colors py-1">
                      4. 2BHK & 3BHK Shifting Charges
                    </a>
                    <a href="#corridor-pricing" className="block hover:text-[#E53935] transition-colors py-1">
                      5. Kolkata Corridor Rate Table
                    </a>
                    <a href="#lift-comparison" className="block hover:text-[#E53935] transition-colors py-1">
                      6. With Lift vs. Without Lift Sample Bill
                    </a>
                    <a href="#shuttle-tempo-gst" className="block hover:text-[#E53935] transition-colors py-1">
                      7. Narrow-Lane Shuttle & 18% GST
                    </a>
                    <a href="#faqs" className="block hover:text-[#E53935] transition-colors py-1">
                      8. Frequently Asked Questions
                    </a>
                  </nav>
                </div>

                {/* Free Instant Estimate Card */}
                <div className="bg-gradient-to-br from-[#082F52] to-[#0A3D6B] rounded-2xl p-6 text-white shadow-lg space-y-4">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span className="text-xs uppercase font-bold text-slate-200 tracking-wider">
                      Free Booking Estimate
                    </span>
                  </div>
                  <h4 className="text-lg font-display font-bold text-white leading-tight">
                    Moving in Kolkata Soon? Get a Guaranteed Quote
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Zero surprise costs on moving day. Includes full inventory review, 5-layer packing, and container transport.
                  </p>
                  <Link
                    href="/get-a-quote"
                    className="w-full block text-center bg-[#E53935] hover:bg-[#c62828] text-white font-bold text-xs py-3 px-4 rounded-xl shadow-md transition-colors"
                  >
                    Open Free Quote Form →
                  </Link>
                  <a
                    href={getWhatsAppUrl(`Hi, I would like to book a moving quote in Kolkata based on your 2026 Rate Card.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs py-3 px-4 rounded-xl transition-colors shadow-sm"
                  >
                    WhatsApp Move Specialist
                  </a>
                </div>

                {/* Related Internal Service Links */}
                <div className="bg-white rounded-2xl p-6 border border-slate-200 space-y-3">
                  <h4 className="text-xs uppercase font-bold text-[#082F52] tracking-wider mb-2">
                    Related Moving Services
                  </h4>
                  <ul className="space-y-2 text-xs">
                    <li>
                      <Link
                        href="/household-shifting"
                        className="text-slate-700 hover:text-[#E53935] font-semibold flex items-center justify-between py-1 border-b border-slate-100"
                      >
                        <span>Household Shifting Kolkata</span>
                        <span className="text-slate-400">→</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/car-shifting"
                        className="text-slate-700 hover:text-[#E53935] font-semibold flex items-center justify-between py-1 border-b border-slate-100"
                      >
                        <span>Car Carrier Transportation</span>
                        <span className="text-slate-400">→</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/bike-shifting"
                        className="text-slate-700 hover:text-[#E53935] font-semibold flex items-center justify-between py-1 border-b border-slate-100"
                      >
                        <span>Two-Wheeler / Bike Transport</span>
                        <span className="text-slate-400">→</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/intercity-moving-guide"
                        className="text-slate-700 hover:text-[#E53935] font-semibold flex items-center justify-between py-1 border-b border-slate-100"
                      >
                        <span>Intercity Moving Guide</span>
                        <span className="text-slate-400">→</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/moving-checklist"
                        className="text-slate-700 hover:text-[#E53935] font-semibold flex items-center justify-between py-1"
                      >
                        <span>4-Week Moving Checklist</span>
                        <span className="text-slate-400">→</span>
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Direct Hotline */}
                <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200 text-center space-y-2">
                  <span className="text-xs uppercase font-bold text-slate-400 block">
                    Speak With A Relocation Coordinator
                  </span>
                  <a
                    href={getTelUrl()}
                    className="text-lg font-black font-display text-[#082F52] hover:text-[#E53935] transition-colors block"
                  >
                    {BUSINESS.phone.primaryFormatted}
                  </a>
                  <p className="text-[11px] text-slate-500">24/7 Available across Kolkata</p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </article>
    </PageLayout>
  );
}
