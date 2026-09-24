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

export function getReviewSlug(name: string): string {
  return name
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

