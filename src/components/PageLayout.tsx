import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SmoothScroll from '@/components/SmoothScroll';

interface PageLayoutProps {
  children: React.ReactNode;
  /** Whether to wrap with Lenis smooth scroll. Defaults to true. */
  smoothScroll?: boolean;
}

/**
 * Standard layout wrapper for all inner pages.
 * Includes multi-page Header, main landmark, and Footer.
 * FloatingContactWidget (Track Us, WhatsApp, Phone) is provided globally by RootLayout.
 */
export default function PageLayout({
  children,
  smoothScroll = false,
}: PageLayoutProps) {
  const content = (
    <div className="relative min-h-screen flex flex-col bg-background text-foreground selection:bg-[#E53935] selection:text-white">
      <Header />
      <main className="flex-1 overflow-x-hidden">{children}</main>
      <Footer />
    </div>
  );

  if (smoothScroll) {
    return <SmoothScroll>{content}</SmoothScroll>;
  }

  return content;
}

