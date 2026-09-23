'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';

interface ServiceItem {
  id: string;
  title: string;
  category: string;
  desc: string;
  img: string;
  alt: string;
  features: string[];
  icon: React.ReactNode;
  href: string;
}

const services: ServiceItem[] = [
  {
    id: 'household',
    title: 'Household Shifting',
    category: 'Residential Relocation',
    desc: 'Complete home shifting with multi-layer bubble packing, safe furniture dismantling, dedicated closed container transport, and room-wise unpacking.',
    img: '/images/packaging.png',
    alt: 'Living room with packed moving boxes and organized furniture for home relocation',
    features: ['5-Layer Packing', 'Furniture Assembly', 'Zero-Scratch Guarantee'],
    href: '/household-shifting',
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
        />
      </svg>
    ),
  },
  {
    id: 'car',
    title: 'Car Transportation',
    category: 'Automotive Logistics',
    desc: 'Specialized vehicle shipping across India using closed container car carriers with hydraulic ramps, wheel chocks, and comprehensive transit insurance.',
    img: '/images/car_relocation.png',
    alt: 'Car being safely loaded onto vehicle transport carrier truck',
    features: ['Closed Car Carrier', 'Hydraulic Loading', 'Transit Insurance'],
    href: '/car-shifting',
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10l1 1h1m8-1h1l1-1v-3.65a1 1 0 00-.22-.624l-3.48-4.35A1 1 0 0011.52 6H10"
        />
      </svg>
    ),
  },
  {
    id: 'bike',
    title: 'Bike Transport',
    category: 'Two-Wheeler Express',
    desc: 'Custom wooden crating and bubble protection for premium motorcycles and scooters. Safe door-to-door transit to all Indian metro cities.',
    img: '/images/bike_transportation.jpeg',
    alt: 'Motorcycle secured on dedicated transport carrier',
    features: ['Wooden Crate Option', 'Showroom Pickup', 'GPS Milestone Link'],
    href: '/bike-shifting',
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        viewBox="0 0 24 24"
      >
        <circle cx="5.5" cy="17.5" r="3.5" />
        <circle cx="18.5" cy="17.5" r="3.5" />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 6h-4l-3 5.5M8 6h1m6 0l2 5.5M5.5 14L8 11.5h8l1.5 3"
        />
      </svg>
    ),
  },
  {
    id: 'office',
    title: 'Office Relocation',
    category: 'Commercial & Corporate',
    desc: 'Structured corporate moving with specialized handling for IT servers, modular workstations, files, archives, and phased planning for minimal office downtime.',
    img: '/images/office_relocation.png',
    alt: 'Office equipment and desks being packed for commercial corporate move',
    features: ['Weekend / Night Shifts', 'Server & IT Packing', 'Minimal Downtime Plan'],
    href: '/office-relocation',
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
        />
      </svg>
    ),
  },
  {
    id: 'international',
    title: 'International Moving',
    category: 'Global Freight & Customs',
    desc: 'Cross-border relocation with documentation assistance, air/sea cargo packing, customs clearance support, and global destination network.',
    img: 'https://images.unsplash.com/photo-1528259105746-48a73c688cd2',
    alt: 'Cargo containers at international shipping port',
    features: ['Customs Documentation', 'Air & Sea Freight', 'Door Delivery Worldwide'],
    href: '/international-moving',
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        viewBox="0 0 24 24"
      >
        <circle cx="12" cy="12" r="10" />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"
        />
      </svg>
    ),
  },
  {
    id: 'parcel',
    title: 'Parcel & Cargo Shifting',
    category: 'Express Intercity Parcel',
    desc: 'Express courier and parcel shipping across 230+ cities in India. Reliable milestone tracking, doorstep pickup, and scheduled delivery.',
    img: '/images/cargo_shifting.jpeg',
    alt: 'Delivery personnel handling parcels at customer doorstep',
    features: ['Doorstep Pickup', '230+ Cities Network', 'Real-Time Tracking'],
    href: '/parcel-shifting',
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
        />
      </svg>
    ),
  },
];

export default function ServicesSection() {
  const [filterCategory, setFilterCategory] = useState('all');
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.1 }
    );
    const els = sectionRef.current?.querySelectorAll('.reveal');
    els?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const filteredServices =
    filterCategory === 'all'
      ? services
      : services.filter((s) =>
          filterCategory === 'vehicle'
            ? s.id === 'car' || s.id === 'bike'
            : filterCategory === 'home'
              ? s.id === 'household' || s.id === 'parcel'
              : s.id === 'office' || s.id === 'international'
        );

  return (
    <section
      id="services"
      ref={sectionRef}
      className="py-24 bg-white dot-pattern relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 reveal">
          <span className="inline-block bg-red-50 text-[#E53935] text-xs font-semibold uppercase tracking-[0.08em] px-4 py-1.5 rounded-full mb-4 border border-red-200">
            Comprehensive Relocation Suite
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-display font-bold text-[#082F52] mb-4 tracking-tight">
            Specialized Services Built for Safety
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Every shipment is handled with custom crating, verified logistics protocols, and
            dedicated carrier vehicles across Kolkata and India.
          </p>

          {/* Interactive Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {[
              { id: 'all', label: 'All Services (6)' },
              { id: 'home', label: 'Household & Parcel' },
              { id: 'vehicle', label: 'Car & Bike Transport' },
              { id: 'commercial', label: 'Office & International' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilterCategory(tab.id)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 focus:outline-none ${
                  filterCategory === tab.id
                    ? 'bg-[#082F52] text-white shadow-md scale-105'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="service-card relative bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col justify-between animate-in fade-in duration-300"
            >
              {/* Image & Overlay */}
              <div>
                <Link
                  href={service.href}
                  className="aspect-[16/10] overflow-hidden relative block"
                  aria-label={`View ${service.title} details`}
                >
                  <AppImage
                    src={service.img}
                    alt={service.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                  {/* Icon Badge */}
                  <div className="absolute top-4 left-4 w-11 h-11 bg-white/95 backdrop-blur-md rounded-2xl flex items-center justify-center text-[#E53935] shadow-lg group-hover:bg-[#E53935] group-hover:text-white transition-all duration-300 border border-white/40">
                    {service.icon}
                  </div>

                  {/* Category Chip */}
                  <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-medium text-white/90 border border-white/20">
                    {service.category}
                  </div>
                </Link>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-lg sm:text-[1.2rem] font-bold text-[#082F52] font-display mb-2 group-hover:text-[#E53935] transition-colors">
                    <Link href={service.href} className="hover:underline">
                      {service.title}
                    </Link>
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    {service.desc}
                  </p>

                  {/* Micro feature pills */}
                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-100">
                    {service.features.map((feat) => (
                      <span
                        key={feat}
                        className="text-[11px] font-medium px-2.5 py-1 rounded-md bg-slate-50 border border-slate-200/60 text-slate-700"
                      >
                        ✓ {feat}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Link Footer */}
              <div className="px-6 pb-6 pt-2 flex flex-col gap-3 border-t border-slate-50 mt-2">
                <a
                  href="#quote"
                  className="flex items-center justify-between text-[#E53935] font-semibold text-xs uppercase tracking-wider group-hover:translate-x-1 transition-transform"
                >
                  <span>Get Transparent Quote</span><span className="text-sm">&rarr;</span>
                </a>
                <a
                  href="/contact"
                  className="flex items-center justify-between text-slate-500 hover:text-[#082F52] font-semibold text-xs uppercase tracking-wider transition-colors"
                >
                  <span>Contact for Details</span><span className="text-sm">&rsaquo;</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Global Logistics Assurance Banner */}
        <div className="mt-16 reveal">
          <div className="bg-[#082F52] rounded-3xl p-6 sm:p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 border border-white/10 shadow-xl">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#E53935] text-white flex items-center justify-center flex-shrink-0 text-xl font-bold">
                ðŸšš
              </div>
              <div>
                <h4 className="text-base sm:text-lg font-bold text-white font-sans">
                  Need a customized moving or multi-vehicle consignment?
                </h4>
                <p className="text-xs sm:text-sm text-white/75 mt-0.5">
                  Our move coordinators create tailor-made logistical itineraries in under 3 hours.
                </p>
              </div>
            </div>
            <a
              href="#quote"
              className="inline-flex items-center gap-2 bg-[#E53935] hover:bg-[#c62828] text-white font-semibold text-xs sm:text-sm px-6 py-3.5 rounded-xl transition-all shadow-md flex-shrink-0"
            >
              Get Custom Quote â†’
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

