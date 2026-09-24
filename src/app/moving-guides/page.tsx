import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import PageLayout from '@/components/PageLayout';
import PageHero from '@/components/PageHero';
import SectionHeader from '@/components/ui/SectionHeader';
import JsonLd from '@/components/JsonLd';
import { generatePageMetadata } from '@/lib/metadata';
import { BUSINESS, getSiteUrl, getTelUrl, getWhatsAppUrl } from '@/lib/business';

export const metadata: Metadata = generatePageMetadata({
  title: 'Relocation & Moving Guides',
  description:
    'Explore comprehensive moving guides from Bharat Relocators. Step-by-step home moving checklists, vehicle transportation guides, and intercity relocation advice from Kolkata.',
  path: '/moving-guides',
});

interface GuideCard {
  id: string;
  category: string;
  title: string;
  description: string;
  targetAudience: string;
  highlights: string[];
  href: string;
  ctaText: string;
  icon: React.ReactNode;
}

const guides: GuideCard[] = [
  {
    id: 'moving-checklist',
    category: 'Residential Planning',
    title: 'Comprehensive Home Moving Checklist',
    description:
      'A structured 4-week preparation framework covering room-by-room inventory decluttering, utility transfers, essential packing supplies, and moving-day coordination.',
    targetAudience:
      'Families, homeowners, and apartment tenants planning a local or interstate residential household relocation.',
    highlights: [
      '4-week step-by-step moving timeline',
      'Room-by-room decluttering & packing plan',
      'Utility disconnection & address update checklist',
      'Move-day essentials box & first-night prep',
    ],
    href: '/moving-checklist',
    ctaText: 'Read Moving Checklist',
    icon: (
      <svg
        className="w-6 h-6 text-[#E53935]"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
        />
      </svg>
    ),
  },
  {
    id: 'vehicle-guide',
    category: 'Car & Bike Logistics',
    title: 'Vehicle Transportation & Safety Guide',
    description:
      'Complete operational guide for transporting cars and two-wheelers across India. Details required RTO documentation, enclosed carrier mechanics, and handover condition checks.',
    targetAudience:
      'Car, motorcycle, and scooter owners seeking safe, damage-free vehicle transit with proper paperwork and carrier selection.',
    highlights: [
      'Mandatory RTO paperwork & NOC guidelines',
      'Enclosed carrier vs custom wooden crating',
      'Pre-transport fuel, FASTag & battery prep',
      'Joint physical condition report procedures',
    ],
    href: '/vehicle-transportation-guide',
    ctaText: 'Read Vehicle Guide',
    icon: (
      <svg
        className="w-6 h-6 text-[#1478B5]"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"
        />
      </svg>
    ),
  },
  {
    id: 'intercity-guide',
    category: 'Long-Distance Logistics',
    title: 'Intercity Relocation & Corridor Guide',
    description:
      'Strategic highway corridor planning for intercity relocations from Kolkata to major Indian metros. Covers toll routes, transit time factors, and dedicated vs shared transport.',
    targetAudience:
      'Working professionals, corporate transfers, and families relocating long-distance from Kolkata to other Indian cities.',
    highlights: [
      'Key national highway corridors (NH-19, NH-16)',
      'Intercity transit timelines & weather factors',
      'Interstate checkpost & commercial documentation',
      'Destination access & unloading considerations',
    ],
    href: '/intercity-moving-guide',
    ctaText: 'Read Intercity Guide',
    icon: (
      <svg
        className="w-6 h-6 text-[#E53935]"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
        />
      </svg>
    ),
  },
];

export default function MovingGuidesPage() {
  const siteUrl = getSiteUrl();

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
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
        name: 'Moving Guides',
        item: `${siteUrl}/moving-guides`,
      },
    ],
  };

  return (
    <PageLayout>
      <JsonLd data={breadcrumbSchema} />

      <PageHero
        label="Resource Hub"
        title={
          <>
            Relocation Planning &amp;{' '}
            <span className="text-[#F28A32]">Moving Guides</span>
          </>
        }
        subtitle="Practical, step-by-step guides developed by Kolkata relocation specialists to help you plan, prepare, and execute a smooth household or vehicle move."
        breadcrumbs={[{ label: 'Moving Guides' }]}
        /* Hero Visual Image: Drop your image in /public/images/ and set src="/images/your-image.png" */
        image={
          <img
            src="/images/Moving_guides.png"
            alt="Relocation Planning and Moving Guides - Bharat Relocators"
          />
        }
        actions={
          <Link
            href="/get-a-quote"
            className="inline-flex items-center gap-2 bg-[#E53935] hover:bg-[#c62828] text-white font-semibold text-sm px-6 py-3.5 rounded-xl shadow-md transition-colors"
          >
            Request Moving Quote
          </Link>
        }
      />

      {/* Main Guides Grid Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Expert Guidance"
            title="Select the Guide for Your Relocation"
            subtitle="Explore our comprehensive moving resources designed to answer common logistical questions and streamline your moving preparations."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {guides.map((guide) => (
              <div
                key={guide.id}
                className="bg-white rounded-2xl p-7 border border-slate-200 shadow-sm hover:shadow-md hover:border-[#1478B5]/40 transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Category Pill & Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#1478B5] bg-[#1478B5]/10 px-3 py-1 rounded-full">
                      {guide.category}
                    </span>
                    <div className="p-2 rounded-xl bg-slate-50 border border-slate-100">
                      {guide.icon}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold font-display text-[#082F52] mb-3 leading-snug">
                    {guide.title}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed mb-5">
                    {guide.description}
                  </p>

                  {/* Target Audience Box */}
                  <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-100 mb-5 text-xs text-slate-700 leading-relaxed">
                    <strong className="text-[#082F52] block mb-0.5">Who this is for:</strong>
                    {guide.targetAudience}
                  </div>

                  {/* Key Highlights */}
                  <div className="mb-6">
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2.5">
                      Key Topics Covered:
                    </div>
                    <ul className="space-y-2 text-xs text-slate-700">
                      {guide.highlights.map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <span className="text-[#E53935] font-bold">✓</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card CTA Link */}
                <div className="pt-4 border-t border-slate-100">
                  <Link
                    href={guide.href}
                    className="inline-flex items-center justify-between w-full bg-[#082F52] hover:bg-[#0b3b60] text-white font-semibold text-xs sm:text-sm py-3 px-4 rounded-xl transition-colors shadow-xs group"
                  >
                    <span>{guide.ctaText}</span>
                    <span
                      className="group-hover:translate-x-1 transition-transform font-bold text-[#F28A32]"
                      aria-hidden="true"
                    >
                      →
                    </span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Relocation Planning & Practical Next Steps */}
      <section className="py-16 bg-white border-t border-slate-200/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-red-50 text-[#E53935] text-xs font-semibold uppercase tracking-[0.08em] px-4 py-1.5 rounded-full mb-4 border border-red-200">
            Next Steps
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold font-display text-[#082F52] mb-4">
            Ready to Begin Your Move Planning?
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-8 max-w-2xl mx-auto">
            Once you have reviewed the appropriate guide, our experienced Kolkata move coordinators are available to assess your move requirements, review access conditions, and provide a tailored written quotation.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/get-a-quote"
              className="inline-flex items-center justify-center gap-2 bg-[#E53935] hover:bg-[#c62828] text-white font-semibold text-sm px-7 py-3.5 rounded-xl shadow-md transition-colors w-full sm:w-auto"
            >
              Get Free Moving Quote
            </Link>
            <Link
              href="/household-shifting"
              className="inline-flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-sm px-6 py-3.5 rounded-xl transition-colors w-full sm:w-auto"
            >
              View Household Shifting Services
            </Link>
          </div>

          {/* Direct Contact Options */}
          <div className="mt-8 pt-8 border-t border-slate-100 flex flex-wrap justify-center items-center gap-6 text-xs text-slate-600">
            <div className="flex items-center gap-2">
              <span className="text-[#082F52] font-semibold">Speak with Coordinator:</span>
              <a
                href={getTelUrl(BUSINESS.phone.primary)}
                className="text-[#E53935] font-bold hover:underline"
              >
                {BUSINESS.phone.primaryFormatted}
              </a>
            </div>
            <span className="hidden sm:inline text-slate-300">·</span>
            <div className="flex items-center gap-2">
              <span className="text-[#082F52] font-semibold">WhatsApp Inquiry:</span>
              <a
                href={getWhatsAppUrl('Hi, I am planning a move and would like to speak with a relocation coordinator.')}
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-600 font-bold hover:underline"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}

