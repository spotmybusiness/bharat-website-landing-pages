export interface ServiceDefinition {
  id: string;
  title: string;
  slug: string;
  canonicalPath: string;
  category: string;
  shortDesc: string;
  img: string;
  alt: string;
  features: string[];
}

export const SERVICES: ServiceDefinition[] = [
  {
    id: 'household',
    title: 'Household Shifting',
    slug: 'household-shifting',
    canonicalPath: '/household-shifting',
    category: 'Residential Relocation',
    shortDesc:
      'Complete home shifting with multi-layer packing, safe furniture dismantling, dedicated container transport, and room-wise unpacking.',
    img: '/images/packaging.png',
    alt: 'Professional household goods packing with bubble wrap and corrugated boxes for home relocation',
    features: ['5-Layer Packing', 'Furniture Assembly', 'Damage-Protection Care'],
  },
  {
    id: 'bike',
    title: 'Bike Transport',
    slug: 'bike-shifting',
    canonicalPath: '/bike-shifting',
    category: 'Two-Wheeler Express',
    shortDesc:
      'Custom wooden crating and bubble protection for premium motorcycles and scooters with door-to-door transit across India.',
    img: '/images/bike_transportation.jpeg',
    alt: 'Two-wheeler securely crated and wrapped for motorcycle transport',
    features: ['Wooden Crate Option', 'Showroom Pickup', 'GPS Milestone Link'],
  },
  {
    id: 'car',
    title: 'Car Transportation',
    slug: 'car-shifting',
    canonicalPath: '/car-shifting',
    category: 'Automotive Logistics',
    shortDesc:
      'Specialized vehicle shipping across India using closed container car carriers with hydraulic ramps and comprehensive transit insurance.',
    img: '/images/car_relocation.png',
    alt: 'Enclosed car carrier trailer transporting automobiles across India',
    features: ['Closed Car Carrier', 'Hydraulic Loading', 'Transit Insurance'],
  },
  {
    id: 'parcel',
    title: 'Parcel & Cargo Shifting',
    slug: 'parcel-shifting',
    canonicalPath: '/parcel-shifting',
    category: 'Express Intercity Parcel',
    shortDesc:
      'Express courier and parcel shipping across 230+ cities in India with reliable milestone tracking and scheduled delivery.',
    img: '/images/cargo_shifting.jpeg',
    alt: 'Consolidated cargo and parcel consignments prepared for intercity transit',
    features: ['Doorstep Pickup', '230+ Cities Network', 'Real-Time Tracking'],
  },
  {
    id: 'international',
    title: 'International Moving',
    slug: 'international-moving',
    canonicalPath: '/international-moving',
    category: 'Global Freight & Customs',
    shortDesc:
      'Cross-border relocation with documentation assistance, air/sea cargo packing, and door-to-door destination delivery worldwide.',
    img: 'https://images.unsplash.com/photo-1528259105746-48a73c688cd2',
    alt: 'Air and ocean cargo container freight logistics for international moving',
    features: ['Customs Documentation', 'Air & Sea Freight', 'Door Delivery Worldwide'],
  },
  {
    id: 'office',
    title: 'Office Relocation',
    slug: 'office-relocation',
    canonicalPath: '/office-relocation',
    category: 'Commercial & Corporate',
    shortDesc:
      'Structured corporate moving with specialized handling for IT servers, modular workstations, files, and minimal office downtime.',
    img: '/images/office_relocation.png',
    alt: 'Commercial office workstation and IT server relocation management',
    features: ['Weekend / Night Shifts', 'Server & IT Packing', 'Minimal Downtime Plan'],
  },
];

export function getRelatedServices(currentSlug: string, count = 3): ServiceDefinition[] {
  return SERVICES.filter((s) => s.slug !== currentSlug).slice(0, count);
}

