/**
 * Bharat Relocators — Navigation Configuration
 *
 * Centralized navigation data for Header, Footer, and mobile menu.
 * Separates data from presentation to support multi-page routing.
 *
 * Convention:
 *   - `href`          → canonical page URL (used by next/link on non-homepage pages)
 *   - `homepageHash`  → section anchor on homepage (used for smooth scroll when on '/')
 *   - Items with only homepage sections and no dedicated page use `/#section` as href.
 */

export interface ServiceNavItem {
  label: string;
  href: string;
  category: string;
  description: string;
  badge?: string;
}

export interface NavItem {
  label: string;
  /** Canonical page URL, or `/#section` for homepage-only sections. */
  href: string;
  /** Hash anchor on the homepage — used for smooth scrolling when pathname is '/'. */
  homepageHash?: string;
  /** Optional nested service items for dropdown navigation. */
  children?: ServiceNavItem[];
}

/**
 * The 6 canonical commercial service landing pages for dropdown and mobile menus.
 */
export const serviceNavLinks: ServiceNavItem[] = [
  {
    label: 'Household Shifting',
    href: '/household-shifting',
    category: 'Residential Relocation',
    description: 'Complete home moves with multi-layer packing & assembly.',
  },
  {
    label: 'Car Transportation',
    href: '/car-shifting',
    category: 'Automotive Logistics',
    description: 'Enclosed car carriers with hydraulic ramp loading.',
  },
  {
    label: 'Bike Transport',
    href: '/bike-shifting',
    category: 'Two-Wheeler Express',
    description: 'Custom wooden crating and secure motorcycle shipping.',
  },
  {
    label: 'Parcel & Cargo',
    href: '/parcel-shifting',
    category: 'Express Intercity',
    description: 'Doorstep parcel pickup & live tracking across 230+ cities.',
  },
  {
    label: 'Office Relocation',
    href: '/office-relocation',
    category: 'Commercial & Corporate',
    description: 'Phased corporate shifting with IT server protection.',
  },
  {
    label: 'International Moving',
    href: '/international-moving',
    category: 'Global Freight',
    description: 'Air & sea freight with customs clearance assistance.',
  },
];

/**
 * Primary navigation links rendered in the Header.
 *
 * On the homepage, items with `homepageHash` trigger smooth scrolling.
 * On other pages, `href` is used via next/link for client-side navigation.
 */
export const mainNavLinks: NavItem[] = [
  {
    label: 'Services',
    href: '/services',
    children: serviceNavLinks,
  },
  { label: 'Track Us', href: '/tracking', homepageHash: '#track-us' },
  { label: 'Moving Guides', href: '/moving-guides' },
  { label: 'Process', href: '/process' },
  { label: 'About Us', href: '/about' },
  { label: 'Why Us', href: '/why-us' },
  { label: 'Reviews', href: '/testimonials' },
  { label: 'FAQ', href: '/faqs' },
  { label: 'Contact', href: '/contact' },
];

// ---------------------------------------------------------------------------
// Footer navigation
// ---------------------------------------------------------------------------

export interface FooterLink {
  label: string;
  href: string;
}

/**
 * Footer service links.
 * Uses the preserved flat canonical URLs from the live site.
 */
export const footerServiceLinks: FooterLink[] = [
  { label: 'Household Shifting', href: '/household-shifting' },
  { label: 'Car Transportation', href: '/car-shifting' },
  { label: 'Bike Transport', href: '/bike-shifting' },
  { label: 'Parcel & Cargo Shifting', href: '/parcel-shifting' },
  { label: 'Office Relocation', href: '/office-relocation' },
  { label: 'International Moving', href: '/international-moving' },
];

/**
 * Footer company / information links.
 */
export const footerCompanyLinks: FooterLink[] = [
  { label: 'About Us', href: '/about' },
  { label: 'Customer Reviews', href: '/testimonials' },
  { label: 'Frequently Asked Questions', href: '/faqs' },
  { label: 'Contact Us', href: '/contact' },
  { label: 'Why Choose Us', href: '/why-us' },
  { label: 'How It Works', href: '/process' },
  { label: 'Get a Quote', href: '/get-a-quote' },
];

/**
 * Footer educational guides and resource links.
 */
export const footerResourceLinks: FooterLink[] = [
  { label: 'Moving Guides Hub', href: '/moving-guides' },
  { label: 'Home Moving Checklist', href: '/moving-checklist' },
  { label: 'Vehicle Transportation Guide', href: '/vehicle-transportation-guide' },
  { label: 'Intercity Moving Guide', href: '/intercity-moving-guide' },
  { label: 'Track Your Shipment', href: '/tracking' },
  { label: 'Get a Moving Quote', href: '/get-a-quote' },
];

/**
 * Footer bottom-bar quick links.
 */
export const footerBottomLinks: FooterLink[] = [
  { label: 'Free Estimate', href: '/get-a-quote' },
  { label: 'About Us', href: '/about' },
  { label: 'Moving Guides', href: '/moving-guides' },
  { label: 'FAQ', href: '/faqs' },
  { label: 'Track Shipment', href: '/tracking' },
];


