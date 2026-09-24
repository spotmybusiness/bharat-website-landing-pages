/**
 * Bharat Relocators — Verified Business Constants
 *
 * Single source of truth for all business information used across the website.
 * Only data verified through project audits is included as constants.
 * Uncertain values requiring client confirmation are in the UNVERIFIED section.
 */

export const BUSINESS = {
  name: 'Bharat Relocators',
  legalName: 'Bharat Relocators',
  tagline: 'Packers and Movers · Kolkata',

  phone: {
    primary: '+919123046504',
    primaryFormatted: '+91 91230 46504',
    secondary: '+918335821414',
    secondaryFormatted: '+91 83358 21414',
  },

  whatsapp: {
    number: '919123046504',
    defaultMessage:
      'Hi, I need a quote for my relocation with Bharat Relocators.',
  },

  email: {
    primary: 'contact@bharatrelocators.com',
  },

  address: {
    street: '17, Ramlal Bazar Rd',
    locality: 'Ramlal Bazar, Haltu',
    city: 'Kolkata',
    state: 'West Bengal',
    postalCode: '700078',
    country: 'India',
    full: '17, Ramlal Bazar Rd, Ramlal Bazar, Haltu, Kolkata, West Bengal 700078',
    short: '17, Ramlal Bazar Rd, Haltu, Kolkata 700078',
  },

  social: {
    facebook: 'https://facebook.com/bharatrelocators/',
    instagram: 'https://instagram.com/bharatrelocators/',
    /** Twitter handle is truncated: @bharatrelocator (not @bharatrelocators) */
    twitter: 'https://twitter.com/bharatrelocator',
  },

  google: {
    placeId: '0x3a027bee00518db7:0x84b05f269470ad0',
    mapsShortlink: 'https://g.page/r/CdAKR2nyBUsIEBM',
    mapsEmbedUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3685.9844344294384!2d88.38285461078684!3d22.504767179454774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a027bee00518db7%3A0x84b05f269470ad0!2sBharat%20Relocators%20%7C%20Best%20Packers%20and%20Movers%20in%20Kolkata%2C%20India%20%7C%20Car%20%26%20Bike%20Transportation%20Service%20in%20Kolkata%2C%20India!5e0!3m2!1sen!2sin!4v1789879475320!5m2!1sen!2sin',
    rating: 4.9,
    reviewCount: 305,
  },

  tracking: {
    portalUrl: 'https://bharatrelocators8j.trackingmore.org/',
  },

  /** Verified Operating Hours */
  hours: {
    display: 'Monday to Sunday: Open 24 Hours',
    short: 'Mon - Sun: 24 Hours Open',
    days: 'Monday – Sunday',
    timing: '24 Hours Open',
    is24Hours: true,
    schemaOpeningHours: 'Mo-Su 00:00-24:00',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday',
        ],
        opens: '00:00',
        closes: '23:59',
      },
    ],
  },

  /** Verified physical branch locations in Kolkata */
  locations: {
    main: {
      id: 'haltu',
      badge: 'Main Location',
      name: 'Bharat Relocators',
      listingName:
        'Bharat Relocators | Best Packers and Movers in Kolkata, India | Car & Bike Transportation Service in Kolkata, India',
      locality: 'Haltu, Kolkata',
      address: {
        street: '17, Ramlal Bazar Road',
        area: 'Ramlal Bazar, Haltu',
        city: 'Kolkata',
        state: 'West Bengal',
        postalCode: '700078',
        country: 'India',
        full: '17, Ramlal Bazar Road, Ramlal Bazar, Haltu, Kolkata, West Bengal 700078, India',
        short: '17, Ramlal Bazar Road, Haltu, Kolkata 700078',
      },
      category: 'Packaging Company',
      phone: '+919123046504',
      phoneFormatted: '+91 91230 46504',
      google: {
        rating: 4.9,
        reviewCount: 305,
        shareUrl: 'https://share.google/we740rfLrkkJ43G4t',
        mapsShortlink: 'https://g.page/r/CdAKR2nyBUsIEBM',
        mapsEmbedUrl:
          'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3685.9844344294384!2d88.38285461078684!3d22.504767179454774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a027bee00518db7%3A0x84b05f269470ad0!2sBharat%20Relocators%20%7C%20Best%20Packers%20and%20Movers%20in%20Kolkata%2C%20India%20%7C%20Car%20%26%20Bike%20Transportation%20Service%20in%20Kolkata%2C%20India!5e0!3m2!1sen!2sin!4v1789879475320!5m2!1sen!2sin',
      },
    },
    secondary: {
      id: 'behala',
      badge: 'Secondary Location',
      name: 'Bharat Packers and Movers Behala',
      listingName: 'Bharat Packers and Movers Behala',
      locality: 'Behala, Kolkata',
      address: {
        street: '217, Parui Kacha Road',
        landmark: 'opposite Sri Priyaranjan Sengupta Uddyan, Government Colony',
        area: 'Behala',
        city: 'Kolkata',
        state: 'West Bengal',
        postalCode: '700061',
        country: 'India',
        full: '217, Parui Kacha Road, opposite Sri Priyaranjan Sengupta Uddyan, Government Colony, Behala, Kolkata, West Bengal 700061, India',
        short: '217, Parui Kacha Road, Behala, Kolkata 700061',
      },
      category: 'Mover',
      phone: '+918420122693',
      phoneFormatted: '+91 84201 22693',
      google: {
        rating: 5.0,
        reviewCount: 9,
        shareUrl: 'https://share.google/mjm4GnV79d1hPJ61I',
      },
    },
  },
} as const;

/**
 * Values requiring client confirmation before use in structured data or claims.
 * Safe for general marketing display, but NOT for schema.org assertions.
 */
export const UNVERIFIED = {
  /** Operating hours confirmed by client: Monday to Sunday 24 Hours Open */
  operatingHours: 'Monday to Sunday: Open 24 Hours',
  /** GA4 Measurement ID found in external audit — needs client verification */
  ga4MeasurementId: 'G-5RGEEXWNMT',
  /** GTM container ID — unknown; needs client input */
  gtmContainerId: null as string | null,
  /** ISO certifications (e.g. ISO 9001:2015, ISO 3900:2012) — unverified; needs client certificate proof */
  isoCertifications: ['ISO 9001:2015', 'ISO 3900:2012'] as const,
  /** ISO certificate numbers and issuing body — unknown; needs client input */
  isoCertificateDetails: 'Pending client input',
} as const;

// ---------------------------------------------------------------------------
// Utility functions
// ---------------------------------------------------------------------------

/** Generate a WhatsApp chat URL with an optional custom message. */
export function getWhatsAppUrl(message?: string): string {
  const text = encodeURIComponent(
    message || BUSINESS.whatsapp.defaultMessage,
  );
  return `https://wa.me/${BUSINESS.whatsapp.number}?text=${text}`;
}

/** Generate a WhatsApp API URL (richer params for programmatic opening). */
export function getWhatsAppApiUrl(message?: string): string {
  const text = encodeURIComponent(
    message || BUSINESS.whatsapp.defaultMessage,
  );
  return `https://api.whatsapp.com/send/?phone=${BUSINESS.whatsapp.number}&text=${text}&type=phone_number&app_absent=0`;
}

/** Generate a tel: link for the given phone number (defaults to primary). */
export function getTelUrl(phone?: string): string {
  return `tel:${phone || BUSINESS.phone.primary}`;
}

/** Get the canonical site URL from environment, with production fallback. */
export function getSiteUrl(): string {
  return (
    process.env.NEXT_PUBLIC_SITE_URL || 'https://bharatrelocators.com'
  );
}

