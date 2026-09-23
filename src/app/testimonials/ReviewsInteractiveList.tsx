'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { ReviewItem, VERIFIED_REVIEWS } from '@/data/reviews';

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1" role="img" aria-label={`${rating} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`h-4 w-4 ${star <= rating ? 'text-[#F28A32]' : 'text-slate-200'}`}
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
    <svg className="h-4 w-4" viewBox="0 0 24 24" aria-hidden="true">
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

function VerifiedBadge() {
  return (
    <svg className="h-3.5 w-3.5 text-[#E53935] shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
        clipRule="evenodd"
      />
    </svg>
  );
}

const CATEGORIES = [
  'All',
  'Household Shifting',
  'Bike Shifting',
  'Office Relocation',
  'Parcel Shifting',
] as const;

export default function ReviewsInteractiveList() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [reviews, setReviews] = useState<ReviewItem[]>(VERIFIED_REVIEWS);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    let isMounted = true;

    async function fetchReviews() {
      try {
        const res = await fetch('/api/google-reviews');
        if (!res.ok) throw new Error('API unavailable');
        const data = await res.json();
        if (isMounted && data.success && Array.isArray(data.reviews) && data.reviews.length > 0) {
          setReviews(data.reviews);
        }
      } catch {
        // Graceful fallback to verified hardcoded reviews
        if (isMounted) {
          setReviews(VERIFIED_REVIEWS);
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    }

    fetchReviews();

    return () => {
      isMounted = false;
    };
  }, []);

  const filteredReviews = reviews.filter((rev) => {
    if (selectedCategory === 'All') return true;
    return rev.service.toLowerCase().includes(selectedCategory.toLowerCase());
  });

  return (
    <div>
      {/* Category Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
        {CATEGORIES.map((cat) => {
          const isSelected = selectedCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              type="button"
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                isSelected
                  ? 'bg-[#082F52] text-white shadow-sm'
                  : 'bg-white text-slate-600 hover:text-[#082F52] hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Loading Skeleton */}
      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs animate-pulse space-y-4"
            >
              <div className="h-4 bg-slate-100 rounded w-1/3" />
              <div className="h-4 bg-slate-100 rounded w-1/4" />
              <div className="space-y-2">
                <div className="h-3 bg-slate-100 rounded w-full" />
                <div className="h-3 bg-slate-100 rounded w-5/6" />
                <div className="h-3 bg-slate-100 rounded w-4/6" />
              </div>
              <div className="pt-4 border-t border-slate-100 flex items-center gap-3">
                <div className="w-10 h-10 bg-slate-100 rounded-xl" />
                <div className="space-y-1.5 flex-1">
                  <div className="h-3.5 bg-slate-100 rounded w-1/2" />
                  <div className="h-3 bg-slate-100 rounded w-1/3" />
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : filteredReviews.length === 0 ? (
        /* Empty State */
        <div className="bg-white rounded-2xl p-12 text-center border border-slate-200 max-w-lg mx-auto">
          <p className="text-slate-600 text-sm mb-4">
            No reviews found under the selected category at this time.
          </p>
          <button
            onClick={() => setSelectedCategory('All')}
            className="text-xs font-bold text-[#E53935] hover:underline"
          >
            Show All Reviews →
          </button>
        </div>
      ) : (
        /* Reviews Grid */
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredReviews.map((review, i) => (
            <article
              key={`${review.name}-${review.date}-${i}`}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 hover:border-[#1478B5]/50 shadow-xs hover:shadow-lg transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-4">
                  <span className="inline-block bg-slate-100 text-[#082F52] text-[11px] font-semibold px-3 py-1 rounded-full">
                    {review.service}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                    <GoogleIcon />
                    <span>Google Review</span>
                  </div>
                </div>

                <StarRating rating={review.rating} />

                <p className="text-slate-700 text-sm leading-relaxed my-4">
                  &ldquo;{review.text}&rdquo;
                </p>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-slate-100 mt-2">
                {review.profile_photo_url ? (
                  <Image
                    src={review.profile_photo_url}
                    alt={`${review.name}'s profile photo`}
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
                    <VerifiedBadge />
                  </div>
                  <div className="text-slate-500 text-xs truncate">{review.role}</div>
                </div>

                <time className="text-xs text-slate-400 font-medium shrink-0">
                  {review.date}
                </time>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
