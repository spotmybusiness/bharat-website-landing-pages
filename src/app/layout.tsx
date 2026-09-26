import React from 'react';
import type { Metadata, Viewport } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import '../styles/tailwind.css';

// Font configuration - Plus Jakarta Sans
const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-sans',
  display: 'swap',
});

const plusJakartaSansDisplay = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800'],
  variable: '--font-display',
  display: 'swap',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#071A2B',
};

import { getSiteUrl } from '@/lib/business';

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: 'Bharat Relocators — Premium Packers & Movers in Kolkata',
  description:
    'Bharat Relocators offers trusted packers & movers services in Kolkata — home shifting, car & bike transport, PAN India delivery. 4.9★ rated, 305+ reviews.',
  alternates: {
    canonical: getSiteUrl(),
  },
  openGraph: {
    title: 'Bharat Relocators — Premium Packers & Movers in Kolkata',
    description:
      'Bharat Relocators offers trusted packers & movers services in Kolkata — home shifting, car & bike transport, PAN India delivery. 4.9★ rated, 305+ reviews.',
    url: getSiteUrl(),
    siteName: 'Bharat Relocators',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/images/packaging.png',
        width: 1449,
        height: 1086,
        alt: 'Bharat Relocators — Professional Packers & Movers in Kolkata',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bharat Relocators — Premium Packers & Movers in Kolkata',
    description:
      'Bharat Relocators offers trusted packers & movers services in Kolkata — home shifting, car & bike transport, PAN India delivery. 4.9★ rated, 305+ reviews.',
    images: ['/images/packaging.png'],
  },
  icons: {
    icon: [{ url: '/assets/favicon.ico', type: 'image/x-icon' }],
  },
};

import GoogleAnalytics from '@/components/analytics/GoogleAnalytics';
import FloatingContactWidget from '@/components/ui/FloatingContactWidget';
import JsonLd from '@/components/JsonLd';
import { getOrganizationSchema, getWebsiteSchema, buildGraphSchema } from '@/lib/schema';

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} ${plusJakartaSansDisplay.variable} overflow-x-hidden max-w-full`}>
      <body className="font-sans antialiased bg-background text-foreground overflow-x-hidden min-h-screen w-full max-w-full">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:px-4 focus:py-2.5 focus:bg-[#E53935] focus:text-white focus:font-semibold focus:text-sm focus:rounded-xl focus:shadow-2xl focus:outline-none focus:ring-2 focus:ring-white"
        >
          Skip to main content
        </a>
        <JsonLd data={buildGraphSchema([getOrganizationSchema(), getWebsiteSchema()])} />
        <GoogleAnalytics />
        {children}
        <FloatingContactWidget />
      </body>
    </html>
  );
}
