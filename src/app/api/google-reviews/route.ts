import { NextResponse } from 'next/server';
import {
  VERIFIED_REVIEWS,
  getWeekendReviews,
  getMsUntilNextSaturday2359,
  ReviewItem,
} from '@/data/reviews';

export type GoogleReviewItem = ReviewItem;

function getInitials(name: string): string {
  if (!name) return 'BR';
  const parts = name.trim().split(/\s+/);
  if (parts.length === 1) return parts[0].substring(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

export async function GET() {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.NEXT_PUBLIC_GOOGLE_PLACE_ID || process.env.GOOGLE_PLACE_ID;
  const cid = process.env.GOOGLE_CID || '597577914263210704';

  // Calculate the 6 reviews scheduled for this weekend (rotates every Saturday 23:59 IST)
  const weekendReviews = getWeekendReviews(VERIFIED_REVIEWS, 6);
  const secondsUntilNextSaturday2359 = Math.max(1, Math.floor(getMsUntilNextSaturday2359() / 1000));
  const dynamicCacheAge = Math.min(3600, secondsUntilNextSaturday2359);

  // If no Google Places API key is configured, return the rotating weekend batch directly
  if (!apiKey) {
    return NextResponse.json(
      {
        success: true,
        rating: 4.9,
        user_ratings_total: 306,
        reviews: weekendReviews,
        isLive: false,
        syncMode: 'weekly_saturday_23:59_ist',
        nextSync: 'Every Saturday at 23:59 IST',
        secondsUntilNextSync: secondsUntilNextSaturday2359,
        message: 'Serving verified Google reviews rotated every Saturday at 23:59 IST (>= 4 stars). Set GOOGLE_PLACES_API_KEY in .env.local to enable direct Places API streaming.',
      },
      {
        headers: {
          'Cache-Control': `public, s-maxage=${dynamicCacheAge}, stale-while-revalidate=86400`,
        },
      }
    );
  }

  // Live Google Places API Sync
  try {
    let url = '';
    if (placeId && placeId.startsWith('ChIJ')) {
      url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${encodeURIComponent(
        placeId
      )}&fields=name,rating,user_ratings_total,reviews&key=${encodeURIComponent(apiKey)}`;
    } else {
      // Use Google CID identifier
      url = `https://maps.googleapis.com/maps/api/place/details/json?cid=${encodeURIComponent(
        cid
      )}&fields=name,rating,user_ratings_total,reviews&key=${encodeURIComponent(apiKey)}`;
    }

    const response = await fetch(url, {
      next: { revalidate: 3600 },
    });

    if (!response.ok) {
      throw new Error(`Google API returned status ${response.status}`);
    }

    const data = await response.json();

    if (data.status !== 'OK' || !data.result) {
      console.warn('Google Places API response notice:', data.status, data.error_message);
      return NextResponse.json({
        success: true,
        rating: 4.9,
        user_ratings_total: 306,
        reviews: weekendReviews,
        isLive: false,
        warning: data.error_message || data.status,
      });
    }

    const place = data.result;
    const rawReviews = (place.reviews || []) as Array<{
      author_name: string;
      profile_photo_url?: string;
      rating: number;
      relative_time_description: string;
      text: string;
    }>;

    // Filter strictly for reviews with rating >= 4 stars (greater than or equal to 4 stars)
    const liveFilteredReviews: GoogleReviewItem[] = rawReviews
      .filter((r) => r.rating >= 4)
      .map((r) => ({
        name: r.author_name || 'Google User',
        initials: getInitials(r.author_name),
        role: 'Verified Google Reviewer',
        rating: r.rating,
        text: r.text || 'Excellent service and great moving experience with Bharat Relocators.',
        service: 'Verified Moving Experience',
        date: r.relative_time_description || 'Recently',
        profile_photo_url: r.profile_photo_url,
        source: 'google' as const,
      }));

    // If Google Places API returns fewer than 6 reviews (Google typically limits Places Details to 5),
    // merge with the weekend-rotated verified pool to ensure 6 complete high-rating cards
    const finalReviews: GoogleReviewItem[] =
      liveFilteredReviews.length >= 6
        ? liveFilteredReviews.slice(0, 6)
        : [
            ...liveFilteredReviews,
            ...weekendReviews.slice(0, 6 - liveFilteredReviews.length),
          ];

    return NextResponse.json(
      {
        success: true,
        rating: place.rating || 4.9,
        user_ratings_total: place.user_ratings_total || 306,
        reviews: finalReviews,
        isLive: true,
        syncMode: 'google_places_api',
        nextSync: 'Every Saturday at 23:59 IST',
        secondsUntilNextSync: secondsUntilNextSaturday2359,
      },
      {
        headers: {
          'Cache-Control': `public, s-maxage=${dynamicCacheAge}, stale-while-revalidate=86400`,
        },
      }
    );
  } catch (error) {
    console.error('Error syncing Google Business reviews:', error);
    return NextResponse.json({
      success: true,
      rating: 4.9,
      user_ratings_total: 306,
      reviews: weekendReviews,
      isLive: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    });
  }
}
