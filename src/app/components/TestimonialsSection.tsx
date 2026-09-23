
'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

type GoogleReviewItem = {
  name: string;
  initials: string;
  role: string;
  rating: number;
  text: string;
  service: string;
  date: string;
  source: 'verified';
  profile_photo_url?: string;
};

const DEFAULT_REVIEWS: GoogleReviewItem[] = [
  {
    name: 'Gourav Sarkar',
    initials: 'GS',
    role: 'Bike Transport — Kolkata to Bangalore',
    rating: 5,
    text: 'I transported my bike from Kolkata to Bangalore through Bharat Relocators, and I had a great experience. Since I was already in Bangalore, they coordinated the pickup from my home smoothly, making the entire process completely hassle-free.',
    service: 'Bike Shifting',
    date: '1 month ago',
    source: 'verified',
  },
  {
    name: 'Satyaki Mandal',
    initials: 'SM',
    role: 'New Bike Transport — Showroom Pickup',
    rating: 5,
    text: 'I recently had an excellent experience transporting my brand new bike from Kolkata to Bangalore. Initially, I was quite skeptical about having the bike picked up directly from the showroom, but Subhasish from their team was incredibly helpful.',
    service: 'Bike Shifting',
    date: '5 months ago',
    source: 'verified',
  },
  {
    name: 'Bidisha Roychowdhury',
    initials: 'BR',
    role: 'Household Shifting — South Kolkata',
    rating: 5,
    text: 'I tried their service and to my surprise it was quite reasonable. The most amazing fact I liked about them is that they even took care of each and every item. Mr. Subhasish is very helpful and the whole team was superb.',
    service: 'Household Shifting',
    date: '3 months ago',
    source: 'verified',
  },
  {
    name: 'Sourav Panda',
    initials: 'SP',
    role: 'Home Shifting — Full Apartment',
    rating: 5,
    text: "Bharat Relocators is Kolkata's best movers and packers company I've had the pleasure of working with. They managed to pack all my stuff in just a couple hours and were able to complete everything on time, ensuring that nothing got broken.",
    service: 'Household Shifting',
    date: '2 months ago',
    source: 'verified',
  },
  {
    name: 'Aritra Paul',
    initials: 'AP',
    role: 'Courier Service — Intercity',
    rating: 5,
    text: 'Excellent Service – Highly Recommended! I had a great experience with Bharat Relocators Courier Service. The staff are polite and answered my queries with patience. Based on my experience, I would rate them highly for their services.',
    service: 'Parcel Shifting',
    date: '7 months ago',
    source: 'verified',
  },
  {
    name: 'Ritu Agarwal',
    initials: 'RA',
    role: 'Office Relocation — IT Equipment',
    rating: 5,
    text: 'Highly recommend, hassle free shipping experience. Keep up your great work. The team was professional, arrived on time, and handled all our office equipment with extreme care. Zero damage, zero downtime.',
    service: 'Office Relocation',
    date: '4 months ago',
    source: 'verified',
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div
      className="flex items-center gap-1"
      role="img"
      aria-label={`${rating} out of 5 stars`}
    >
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`h-4 w-4 ${
            star <= rating ? 'text-[#F28A32]' : 'text-slate-200'
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function GoogleIcon() {
  return (
    <svg
      className="h-5 w-5"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
      />
    </svg>
  );
}

function VerifiedIcon() {
  return (
    <svg
      className="h-3.5 w-3.5 text-[#E53935] shrink-0"
      fill="currentColor"
      viewBox="0 0 20 20"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function ReviewCard({
  review,
}: {
  review: GoogleReviewItem;
}) {
  return (
    <article className="bg-white rounded-2xl p-6 sm:p-7 border-2 border-[#082F52] shadow-[0_4px_16px_rgba(8,47,82,0.06)] flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between gap-3 mb-4">
          <span className="inline-block bg-slate-100 text-[#082F52] text-[11px] font-semibold px-3 py-1 rounded-full">
            {review.service}
          </span>

          <GoogleIcon />
        </div>

        <StarRating rating={review.rating} />

        <p className="text-slate-700 text-sm leading-relaxed my-4 line-clamp-4">
          &ldquo;{review.text}&rdquo;
        </p>
      </div>

      <div className="flex items-center gap-3 pt-4 border-t border-slate-100 mt-2">
        {review.profile_photo_url ? (
          <Image
            src={review.profile_photo_url}
            alt={`${review.name}'s profile`}
            width={40}
            height={40}
            className="w-10 h-10 rounded-xl object-cover shrink-0 border border-slate-200"
            unoptimized
          />
        ) : (
          <div
            className="w-10 h-10 rounded-xl bg-[#082F52] text-white flex items-center justify-center font-bold text-sm shrink-0 font-display"
            aria-hidden="true"
          >
            {review.initials}
          </div>
        )}

        <div className="flex-1 min-w-0">
          <div className="font-bold text-[#082F52] text-sm truncate flex items-center gap-1.5 font-display">
            {review.name}
            <VerifiedIcon />
          </div>

          <div className="text-slate-500 text-xs truncate">
            {review.role}
          </div>
        </div>

        <time className="text-xs text-slate-400 font-medium shrink-0">
          {review.date}
        </time>
      </div>
    </article>
  );
}

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [sectionRevealed, setSectionRevealed] = useState(false);

  const sectionRef = useRef<HTMLElement>(null);

  const overallRating = 4.9;
  const totalRatingsCount = 305;

  useEffect(() => {
    const element = sectionRef.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSectionRevealed(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveIndex((previous) => (previous + 1) % DEFAULT_REVIEWS.length);
    }, 5000);

    return () => window.clearInterval(interval);
  }, []);

  const handleIndicatorKeyDown = (
    event: React.KeyboardEvent<HTMLButtonElement>,
    index: number
  ) => {
    if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
      event.preventDefault();
      setActiveIndex((index + 1) % DEFAULT_REVIEWS.length);
    }

    if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
      event.preventDefault();
      setActiveIndex(
        (index - 1 + DEFAULT_REVIEWS.length) % DEFAULT_REVIEWS.length
      );
    }
  };

  return (
    <section
      id="reviews"
      ref={sectionRef}
      aria-labelledby="testimonials-heading"
      className="py-24 bg-slate-50/70 dot-pattern relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className="text-center mb-16 transition-all duration-700"
          style={{
            opacity: sectionRevealed ? 1 : 0,
            transform: sectionRevealed
              ? 'translateY(0)'
              : 'translateY(20px)',
          }}
        >
          <span className="inline-block bg-red-50 text-[#E53935] text-xs font-semibold uppercase tracking-[0.08em] px-4 py-1.5 rounded-full mb-4 border border-red-200">
            Customer Testimonials
          </span>

          <h2
            id="testimonials-heading"
            className="text-3xl sm:text-4xl lg:text-[2.6rem] font-display font-bold text-[#082F52] mb-4 tracking-tight"
          >
            Trusted by Thousands Across India
          </h2>

          <div className="flex items-center justify-center gap-3 flex-wrap">
            <StarRating rating={Math.round(overallRating)} />

            <span className="text-xl font-bold text-[#082F52] font-display">
              {overallRating.toFixed(1)} / 5.0
            </span>

            <span className="text-slate-500 text-sm font-normal">
              from {totalRatingsCount}+ Google reviews
            </span>

            <span className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-700 text-[11px] font-semibold px-2.5 py-0.5 rounded-full border border-emerald-200">
              <span
                className="w-1.5 h-1.5 rounded-full bg-emerald-500"
                aria-hidden="true"
              />
              Updated weekly
            </span>
          </div>
        </div>

        {/* Desktop Reviews Grid */}
        <div
          className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          aria-label="Customer reviews"
        >
          {DEFAULT_REVIEWS.map((review, index) => (
            <div
              key={`${review.name}-${index}`}
              className="transition-all duration-700"
              style={{
                opacity: sectionRevealed ? 1 : 0,
                transform: sectionRevealed
                  ? 'translateY(0)'
                  : 'translateY(24px)',
                transitionDelay: `${index * 70}ms`,
              }}
            >
              <ReviewCard review={review} />
            </div>
          ))}
        </div>

        {/* Accessible Testimonial Controls */}
        <div
          className="hidden md:flex items-center justify-center gap-2 mt-10"
          role="group"
          aria-label="Choose highlighted testimonial"
        >
          {DEFAULT_REVIEWS.map((review, index) => {
            const isActive = index === activeIndex;

            return (
              <button
                key={`indicator-${review.name}-${index}`}
                type="button"
                onClick={() => setActiveIndex(index)}
                onKeyDown={(event) =>
                  handleIndicatorKeyDown(event, index)
                }
                aria-label={`Select testimonial ${index + 1} from ${review.name}`}
                aria-current={isActive ? 'true' : undefined}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E53935] focus-visible:ring-offset-2"
              >
                <span
                  aria-hidden="true"
                  className={`rounded-full transition-all duration-300 ${
                    isActive
                      ? 'h-2.5 w-8 bg-[#E53935]'
                      : 'h-2.5 w-2.5 bg-slate-300 hover:bg-slate-400'
                  }`}
                />
              </button>
            );
          })}
        </div>
      </div>

      {/* Mobile Reviews Marquee */}
      <div
        className="block md:hidden w-full overflow-hidden relative mt-8 py-2"
        style={{
          opacity: sectionRevealed ? 1 : 0,
          transform: sectionRevealed
            ? 'translateY(0)'
            : 'translateY(24px)',
          transition: 'opacity 0.6s ease 100ms, transform 0.6s ease 100ms',
        }}
      >
        <div className="overflow-hidden w-full relative">
          <div className="flex w-max animate-marquee-right">
            <div className="flex items-stretch gap-4 pr-4 shrink-0">
              {DEFAULT_REVIEWS.map((review, index) => (
                <div
                  key={`mobile-primary-${review.name}-${index}`}
                  className="w-[285px] sm:w-[320px] shrink-0"
                >
                  <ReviewCard review={review} />
                </div>
              ))}
            </div>

            <div
              className="flex items-stretch gap-4 pr-4 shrink-0"
              aria-hidden="true"
            >
              {DEFAULT_REVIEWS.map((review, index) => (
                <div
                  key={`mobile-duplicate-${review.name}-${index}`}
                  className="w-[285px] sm:w-[320px] shrink-0"
                >
                  <ReviewCard review={review} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
