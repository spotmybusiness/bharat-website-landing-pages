export interface ReviewItem {
  name: string;
  initials: string;
  role: string;
  rating: number;
  text: string;
  service: string;
  date: string;
  source: 'verified' | 'google';
  profile_photo_url?: string;
}

export const VERIFIED_REVIEWS: ReviewItem[] = [
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

export function getReviewSlug(name: string): string {
  return name
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

