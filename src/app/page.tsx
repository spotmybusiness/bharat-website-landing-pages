import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

import VehicleScrollNavigation from '@/components/VehicleScrollNavigation';
import HeroSection from '@/app/components/HeroSection';
import ServicesSection from '@/app/components/ServicesSection';
import StatsSection from '@/app/components/StatsSection';
import AboutSection from '@/app/components/AboutSection';
import WhyChooseSection from '@/app/components/WhyChooseSection';
import HowItWorksSection from '@/app/components/HowItWorksSection';
import TestimonialsSection from '@/app/components/TestimonialsSection';
import FAQSection from '@/app/components/FAQSection';
import QuoteSection from '@/app/components/QuoteSection';
import WhatsAppButton from '@/app/components/WhatsAppButton';

export default function HomePage() {
  return (
    <main className="relative overflow-x-hidden min-h-screen bg-background text-foreground selection:bg-[#E53935] selection:text-white">
      {/* Floating Glass Header */}
      <Header />

      {/* Signature Interactive Vehicle Route Navigator */}
      <VehicleScrollNavigation />

      {/* Scene 1: The Truck Arrival Experience */}
      <HeroSection />

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

      {/* Direct WhatsApp Instant Pulse Button */}
      <WhatsAppButton />
    </main>
  );
}
