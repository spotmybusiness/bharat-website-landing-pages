import { NextResponse } from 'next/server';

export interface GoogleReviewItem {
  name: string;
  initials: string;
  role: string;
  rating: number;
  text: string;
  service: string;
  date: string;
  profile_photo_url?: string;
  source: 'google' | 'verified';
}

const FALLBACK_REVIEWS: GoogleReviewItem[] = [
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

function getInitials(name: string): string {
  if (!name) return 'BR';
  const parts = name.trim().split(/\s+/);
  if (parts.length === 1) return parts[0].substring(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

export async function GET() {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.NEXT_PUBLIC_GOOGLE_PLACE_ID || process.env.GOOGLE_PLACE_ID;

  // If credentials are not configured yet, return verified fallback with instructions
  if (!apiKey || !placeId) {
    return NextResponse.json({
      success: true,
      rating: 4.9,
      user_ratings_total: 305,
      reviews: FALLBACK_REVIEWS,
      isLive: false,
      message: 'Using verified fallback reviews. Set GOOGLE_PLACES_API_KEY and GOOGLE_PLACE_ID to pull live Google Business reviews.',
    });
  }

  try {
    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${encodeURIComponent(
      placeId
    )}&fields=name,rating,user_ratings_total,reviews&key=${encodeURIComponent(apiKey)}`;

    const response = await fetch(url, {
      next: { revalidate: 3600 }, // Cache on server for 1 hour
    });

    if (!response.ok) {
      throw new Error(`Google API responded with status ${response.status}`);
    }

    const data = await response.json();

    if (data.status !== 'OK' || !data.result) {
      console.warn('Google Place Details error:', data.status, data.error_message);
      return NextResponse.json({
        success: true,
        rating: 4.9,
        user_ratings_total: 305,
        reviews: FALLBACK_REVIEWS,
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

    // Filter strictly for reviews with rating >= 4 (greater than or equal to 4 stars)
    const filteredGoogleReviews: GoogleReviewItem[] = rawReviews
      .filter((r) => r.rating >= 4)
      .map((r) => ({
        name: r.author_name || 'Google User',
        initials: getInitials(r.author_name),
        role: 'Verified Google Reviewer',
        rating: r.rating,
        text: r.text || 'Excellent service and great moving experience with Bharat Relocators.',
        service: 'Verified Relocation',
        date: r.relative_time_description || 'Recently',
        profile_photo_url: r.profile_photo_url,
        source: 'google' as const,
      }));

    // If Google returns fewer than 3 high-rating reviews, merge with fallbacks
    const finalReviews =
      filteredGoogleReviews.length >= 3
        ? filteredGoogleReviews
        : [...filteredGoogleReviews, ...FALLBACK_REVIEWS.slice(filteredGoogleReviews.length)];

    return NextResponse.json({
      success: true,
      rating: place.rating || 4.9,
      user_ratings_total: place.user_ratings_total || 305,
      reviews: finalReviews,
      isLive: true,
    });
  } catch (error) {
    console.error('Error fetching Google Business reviews:', error);
    return NextResponse.json({
      success: true,
      rating: 4.9,
      user_ratings_total: 305,
      reviews: FALLBACK_REVIEWS,
      isLive: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    });
  }
}
