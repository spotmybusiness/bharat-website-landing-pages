import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import JsonLd from '@/components/JsonLd';

import HeroSection from '@/app/components/HeroSection';
import TrackingInteractiveView from '@/app/tracking/TrackingInteractiveView';
import ServicesSection from '@/app/components/ServicesSection';
import StatsSection from '@/app/components/StatsSection';
import AboutSection from '@/app/components/AboutSection';
import WhyChooseSection from '@/app/components/WhyChooseSection';
import HowItWorksSection from '@/app/components/HowItWorksSection';
import TestimonialsSection from '@/app/components/TestimonialsSection';
import FAQSection from '@/app/components/FAQSection';
import QuoteSection from '@/app/components/QuoteSection';

const homeFaqs = [
  {
    q: 'How much does household shifting in or from Kolkata cost?',
    a: 'Pricing depends on the volume of goods, distance, floor level, and packaging requirements. A typical 1BHK local move in Kolkata starts from ₹4,000–₹8,000. For intercity moves across India, pricing is calculated by route and weight. We provide an exact, all-inclusive quote in under 3 hours.',
  },
  {
    q: 'Do you provide packing materials as part of the service?',
    a: 'Yes! We supply all high-grade packing materials including 5-layer corrugated boxes, wardrobe cartons, LED TV wooden boxes, bubble wraps, stretch film, edge protectors, and waterproof transit covers. All packing supplies are included in our transparent quote.',
  },
  {
    q: 'Do you dismantle and reassemble furniture and appliances?',
    a: 'Yes, our trained carpenters handle the complete dismantling and reassembly of double beds, modular wardrobes, dining sets, and wall brackets at no extra hidden charge.',
  },
  {
    q: 'Can I track my consignment in real-time during transit?',
    a: 'Absolutely. Once your shipment departs from Kolkata, you will receive a tracking link via SMS and WhatsApp. You can check vehicle location live, and our dedicated support team is on standby for milestone updates.',
  },
  {
    q: 'Is my shipment covered under transit insurance?',
    a: 'Yes, all consignments are covered under standard goods transit insurance. We also offer enhanced comprehensive insurance for high-value items, artwork, luxury furniture, and motorized vehicles.',
  },
  {
    q: 'How far in advance should I schedule my relocation?',
    a: 'We recommend scheduling 3 to 5 days prior for local moves within Kolkata, and 7 to 10 days in advance for PAN India intercity relocations. We also accommodate same-day emergency requests based on fleet availability.',
  },
  {
    q: 'Do you offer bike and car transport from Kolkata?',
    a: 'Yes! Vehicle shipping is one of our primary specialties. We move two-wheelers and four-wheelers across India using closed car-carrier containers and specialized bike crates with high-density protective cushioning.',
  },
];

export default function HomePage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: homeFaqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  };

  return (
    <main className="relative overflow-x-hidden min-h-screen bg-background text-foreground selection:bg-[#E53935] selection:text-white">
      <JsonLd data={faqSchema} />
      {/* Floating Glass Header */}
      <Header />

      {/* Scene 1: The Truck Arrival Experience */}
      <HeroSection />

      {/* Scene 1.5: Track Us Now — Immediate Operational Console */}
      <section
        id="track-us"
        className="relative z-20 py-8 sm:py-10 bg-[#071A2B] border-b border-white/10"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <TrackingInteractiveView compact />
        </div>
      </section>

      {/* Specialized Relocation Services Grid */}
      <ServicesSection />

      {/* Quantitative Trust & Milestone Counters */}
      <StatsSection />

      {/* 4-Step Structured Moving Workflow */}
      <HowItWorksSection />

      {/* Editorial About & Verified Credentials */}
      <AboutSection />

      {/* Engineering Reliability & Why Choose Us Bento */}
      <WhyChooseSection />

      {/* Verified Customer Testimonials Carousel */}
      <TestimonialsSection />

      {/* Transparent FAQ Knowledge Base */}
      <FAQSection />

      {/* Instant Quote Estimation Suite */}
      <QuoteSection />

      {/* Premium Luxury Footer */}
      <Footer />
    </main>
  );
}
