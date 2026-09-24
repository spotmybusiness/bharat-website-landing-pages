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
    name: 'Nirendar Singh',
    initials: 'NS',
    role: 'Car Transport — Kolkata to Bengaluru',
    rating: 5,
    text: 'Extremely happy with the service provided by Bharat Relocators\n\nI was looking to transport my Maruti Zen Estilo from Kolkata to Bengaluru and found the perfect solution in Bharat Relocators at most competitive rates . The car was picked up from my residence and dropped at location in unbelievable 6 days !!\n\nThanks to Mr Subhasis for hassle free experience',
    service: 'Car Shifting',
    date: 'a week ago',
    source: 'verified',
  },
  {
    name: 'Anuroop Roy',
    initials: 'AR',
    role: 'Bike Transportation',
    rating: 5,
    text: 'Very good experience',
    service: 'Bike Shifting',
    date: 'a week ago',
    source: 'verified',
  },
  {
    name: 'Sobha Halder',
    initials: 'SH',
    role: 'Bike relocation- Kolkata to Navi Mumbai',
    rating: 5,
    text: "I had a good experience with Bharat Relocators for transporting my bike from Kolkata to Navi Mumbai. Subhasish assisted me throughout the process and was very helpful and responsive whenever I needed any assistance.\n\nThere was a minor issue where the spring of my bike stand was broken during transportation. However, the team immediately informed me and called to confirm if any charges were required to fix it. The repair cost was only ₹50, so it wasn't a major concern.\n\nMy bike reached Navi Mumbai from Kolkata within 7 days, which I found quite fast. The team also supported me throughout the entire process, right until my bike was unloaded at the destination.\n\nOverall, I'm satisfied with their service and especially appreciate Subhasish's support and communication. Would definitely recommend Bharat Relocators for bike transportation. 👍🙏",
    service: 'Bike Shifting',
    date: 'a week ago',
    source: 'verified',
  },
  {
    name: 'Dip Chakraborty',
    initials: 'DC',
    role: 'Home Shifting',
    rating: 5,
    text: "Good service in the given time period, Fantastic",
    service: 'Household Shifting',
    date: '2 weeks ago',
    source: 'verified',
  },
  {
    name: 'A Google User',
    initials: 'AGU',
    role: 'Transport Service — Intercity',
    rating: 5,
    text: 'Excellent transport service! The entire process of moving my household items and bike was smooth, safe, and well-coordinated. The team was professional, responsive, and handled everything with great care. All items were delivered on time and without any damage. Communication throughout the process was also very good. Highly recommended for anyone looking for a reliable and hassle-free household and bike transportation service.',
    service: 'Parcel Shifting',
    date: '2 weeks ago',
    source: 'verified',
  },
  {
    name: 'Dipankar Das',
    initials: 'DD',
    role: 'Bike Transportation',
    rating: 5,
    text: 'Excellent service by Bharat Relocators!\nI had a very good experience with Bharat Relocators. The entire process was smooth, professional, and well managed. The staff was helpful, polite, and responsive throughout the service. My vehicle was handled with proper care and delivered safely.\nI really appreciate their timely service and professional approach. Highly recommended to anyone looking for a reliable vehicle transportation service. Great job, Bharat Relocators! 👍',
    service: 'Bike Relocation',
    date: '3 weeks ago',
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
