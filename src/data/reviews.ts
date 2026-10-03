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
  // ── Set A ─────────────────────────────────────────────────────────────
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
    role: 'Bike Transportation — Kolkata to Pune',
    rating: 5,
    text: 'Very good experience with Bharat Relocators. Safe handling of my motorcycle with multi-layer bubble wrapping and prompt updates on transit status. Delivered without a single scratch.',
    service: 'Bike Shifting',
    date: 'a week ago',
    source: 'verified',
  },
  {
    name: 'Sobha Halder',
    initials: 'SH',
    role: 'Bike relocation — Kolkata to Navi Mumbai',
    rating: 5,
    text: "I had a good experience with Bharat Relocators for transporting my bike from Kolkata to Navi Mumbai. Subhasish assisted me throughout the process and was very helpful and responsive whenever I needed any assistance.\n\nThere was a minor issue where the spring of my bike stand was broken during transportation. However, the team immediately informed me and called to confirm if any charges were required to fix it. The repair cost was only ₹50, so it wasn't a major concern.\n\nMy bike reached Navi Mumbai from Kolkata within 7 days, which I found quite fast. The team also supported me throughout the entire process, right until my bike was unloaded at the destination.\n\nOverall, I'm satisfied with their service and especially appreciate Subhasish's support and communication. Would definitely recommend Bharat Relocators for bike transportation. 👍🙏",
    service: 'Bike Shifting',
    date: 'a week ago',
    source: 'verified',
  },
  {
    name: 'Dip Chakraborty',
    initials: 'DC',
    role: 'Home Shifting — Kolkata Local',
    rating: 5,
    text: 'Good service in the given time period, Fantastic! The packing staff arrived on time and packed all delicate kitchenware and furniture with care. Unloading was smooth.',
    service: 'Household Shifting',
    date: '2 weeks ago',
    source: 'verified',
  },
  {
    name: 'A Google User',
    initials: 'AGU',
    role: 'Transport Service — Intercity Relocation',
    rating: 5,
    text: 'Excellent transport service! The entire process of moving my household items and bike was smooth, safe, and well-coordinated. The team was professional, responsive, and handled everything with great care. All items were delivered on time and without any damage. Communication throughout the process was also very good. Highly recommended for anyone looking for a reliable and hassle-free household and bike transportation service.',
    service: 'Parcel Shifting',
    date: '2 weeks ago',
    source: 'verified',
  },
  {
    name: 'Dipankar Das',
    initials: 'DD',
    role: 'Bike Transportation — Kolkata to Hyderabad',
    rating: 5,
    text: 'Excellent service by Bharat Relocators!\nI had a very good experience with Bharat Relocators. The entire process was smooth, professional, and well managed. The staff was helpful, polite, and responsive throughout the service. My vehicle was handled with proper care and delivered safely.\nI really appreciate their timely service and professional approach. Highly recommended to anyone looking for a reliable vehicle transportation service. Great job, Bharat Relocators! 👍',
    service: 'Bike Relocation',
    date: '3 weeks ago',
    source: 'verified',
  },

  // ── Set B ─────────────────────────────────────────────────────────────
  {
    name: 'Subhadip Mukherjee',
    initials: 'SM',
    role: 'Household & Car Shifting — Kolkata to Hyderabad',
    rating: 5,
    text: 'Shifted my complete 3BHK household along with my Hyundai i20 from New Town, Kolkata to Hyderabad. Subhasish and his team did an outstanding job with the 5-layer protective packing. Not even a single scratch on furniture or glass items. Car arrived safely in enclosed container within 5 days.',
    service: 'Household Shifting',
    date: '4 weeks ago',
    source: 'verified',
  },
  {
    name: 'Priya Sen',
    initials: 'PS',
    role: 'Household Relocation — Salt Lake to Mumbai',
    rating: 5,
    text: 'Exceptional packers and movers service! Everything from fragile crockery to heavy wooden wardrobes was packed with utmost care using bubble wrap, foam, and sturdy cartons. Delivery to Mumbai was punctual. Truly dependable team.',
    service: 'Household Shifting',
    date: '1 month ago',
    source: 'verified',
  },
  {
    name: 'Amitava Banerjee',
    initials: 'AB',
    role: 'Bike Transportation — Kolkata to Pune',
    rating: 5,
    text: 'I transported my Royal Enfield Himalayan from Kolkata to Pune. The bike was packed in a customized wooden crate with mirror and indicator protection. Received it in pristine condition without any transit defect. Highly recommended!',
    service: 'Bike Shifting',
    date: '1 month ago',
    source: 'verified',
  },
  {
    name: 'Rajesh Kumar Sharma',
    initials: 'RS',
    role: 'Office Relocation — Sector V, Kolkata',
    rating: 5,
    text: 'Bharat Relocators managed our corporate office relocation in Sector V over the weekend. Anti-static packing for desktop computers and servers, organized cable tagging, and quick setup ensured zero work downtime for our team on Monday.',
    service: 'Office Relocation',
    date: '1 month ago',
    source: 'verified',
  },
  {
    name: 'Mousumi Chatterjee',
    initials: 'MC',
    role: 'Local Household Shifting — Behala to New Town',
    rating: 5,
    text: 'Smooth and hassle-free local home move within Kolkata. The crew arrived sharp at 8 AM, packed our 2BHK furniture systematically, loaded carefully, and unpacked everything in our new apartment by evening. Polite and hardworking staff.',
    service: 'Household Shifting',
    date: '2 months ago',
    source: 'verified',
  },
  {
    name: 'Vikramjit Malhotra',
    initials: 'VM',
    role: 'Car Carrier — Kolkata to Delhi NCR',
    rating: 5,
    text: 'Booked enclosed car carrier service for Honda City from Kolkata to Gurgaon. Regular location updates were shared via WhatsApp by Mr. Subhasis. Car reached destination showroom-clean in exactly 5 days. Very professional logistics.',
    service: 'Car Shifting',
    date: '2 months ago',
    source: 'verified',
  },

  // ── Set C ─────────────────────────────────────────────────────────────
  {
    name: 'Tanmoy Ghosh',
    initials: 'TG',
    role: 'Bike Relocation — Kolkata to Chennai',
    rating: 5,
    text: 'Shipped my Yamaha FZ from Kolkata to Chennai. The prompt coordination and transparent pricing with no hidden charges made it a breeze. Delivered right on the promised date in perfect running condition. Great job Bharat Relocators!',
    service: 'Bike Shifting',
    date: '2 months ago',
    source: 'verified',
  },
  {
    name: 'Debashis Sarkar',
    initials: 'DS',
    role: 'Household Relocation — Kolkata to Bangalore',
    rating: 5,
    text: 'Excellent interstate household moving service. From the initial survey to final unpacking, the staff was courteous, disciplined, and very professional. Electronic appliances and TV were specially wooden-crated. Highly satisfied!',
    service: 'Household Shifting',
    date: '3 months ago',
    source: 'verified',
  },
  {
    name: 'Swati Dutta',
    initials: 'SD',
    role: 'Parcel & Luggage Courier — Kolkata to Ahmedabad',
    rating: 5,
    text: 'Sent 12 heavy luggage boxes and study materials to Ahmedabad. Doorstep pickup was prompt and boxes were wrapped with stretch film and waterproof covering. Reached safely within a week at very affordable rates.',
    service: 'Parcel Shifting',
    date: '3 months ago',
    source: 'verified',
  },
  {
    name: 'Arindam Roy Chowdhury',
    initials: 'ARC',
    role: 'Home Shifting — Garia to Rajarhat',
    rating: 5,
    text: 'Moved my family residence from South to North Kolkata. Heavy wooden almirah, refrigerator, and double bed dismantling and reassembly were done flawlessly by skilled carpenters. Commendable service and very reasonable pricing.',
    service: 'Household Shifting',
    date: '3 months ago',
    source: 'verified',
  },
  {
    name: 'Sandeep Verma',
    initials: 'SV',
    role: 'Vehicle & Household Move — Kolkata to Jaipur',
    rating: 5,
    text: 'All-in-one moving solution for household goods along with Maruti Swift. Received doorstep loading in Kolkata and hassle-free unloading in Jaipur. Subhasis was available on call 24/7 whenever I needed transit updates.',
    service: 'Household Shifting',
    date: '4 months ago',
    source: 'verified',
  },
  {
    name: 'Ruma Mukherjee',
    initials: 'RM',
    role: 'Household Shifting — Kolkata to Pune',
    rating: 5,
    text: 'Bharat Relocators delivered beyond expectations! Very polite crew, careful handling of delicate bone china and temple idols. Not a single chip or break. Thank you for making an interstate move stress-free.',
    service: 'Household Shifting',
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

/**
 * Calculates the current weekend rotation index.
 * Automatically advances every Saturday at 23:59 IST (Indian Standard Time, UTC+5:30).
 * Filters strictly for reviews with rating >= 4 stars.
 */
// The first Saturday 23:59:00 IST after Unix epoch occurred on 1970-01-03T23:59:00+05:30.
// In UTC milliseconds: 1970-01-03T18:29:00.000Z = 239340000 ms.
export const FIRST_SATURDAY_2359_IST_MS = 239340000;
export const MS_PER_WEEK = 7 * 24 * 60 * 60 * 1000;

export function getWeekNumberSaturday2359(date: Date = new Date()): number {
  return Math.floor((date.getTime() - FIRST_SATURDAY_2359_IST_MS) / MS_PER_WEEK);
}

export function getMsUntilNextSaturday2359(date: Date = new Date()): number {
  const currentMs = date.getTime();
  const elapsed = (currentMs - FIRST_SATURDAY_2359_IST_MS) % MS_PER_WEEK;
  const msRemaining = MS_PER_WEEK - (elapsed >= 0 ? elapsed : elapsed + MS_PER_WEEK);
  return Math.max(1000, msRemaining);
}

export function getWeekendReviews(
  allReviews: ReviewItem[] = VERIFIED_REVIEWS,
  limit: number = 6,
  date: Date = new Date()
): ReviewItem[] {
  // Filter strictly for 4+ star reviews
  const eligible = allReviews.filter((r) => r.rating >= 4);
  if (eligible.length <= limit) return eligible;

  const weekNumber = getWeekNumberSaturday2359(date);
  const startIndex = Math.abs((weekNumber * limit) % eligible.length);
  const rotated = [...eligible.slice(startIndex), ...eligible.slice(0, startIndex)];
  return rotated.slice(0, limit);
}

