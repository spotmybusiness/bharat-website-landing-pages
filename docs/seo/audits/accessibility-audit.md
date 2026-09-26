# Accessibility Tree & Agentic-Browsing Hardening Audit

**Branch**: `geo/05-a11y-agentic-hardening`  
**Date**: September 26, 2026  
**Status**: Completed & Verified  

---

## 1. Executive Summary

This audit documents structural, accessibility, and agentic-browsing hardening applied across the Bharat Relocators digital platform. In accordance with Lighthouse Agentic Browsing criteria and WCAG 2.1 AA hygiene standards, all key programmatic interaction boundaries were reinforced without altering visual styling or design tokens.

---

## 2. Landmark Structure & Skip Link

1. **Skip Navigation Link**:
   - Location: `src/app/layout.tsx`
   - Implementation: `<a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 ...">Skip to main content</a>`
   - Ensures immediate keyboard and automated agent bypass past the primary header navigation directly into core page content.

2. **Main Landmark Separation**:
   - `src/app/page.tsx`: Restructured from an enclosing `<main>` element to an outer layout wrapper `<div>`, enclosing `<Header />`, `<main id="main-content">` (wrapping the 9 homepage content scenes), and `<Footer />`.
   - `src/components/PageLayout.tsx`: Standardized `<main id="main-content">` as the sibling between `<Header>` and `<Footer>`.
   - Guaranteed single top-level `<main id="main-content">` landmark per route with zero layout shift.

3. **Navigation Landmarks**:
   - `src/components/Header.tsx`:
     - Desktop: `<nav aria-label="Primary Navigation">`
     - Mobile: `<nav id="mobile-nav-menu" aria-label="Mobile Navigation">`
   - `src/components/Footer.tsx`:
     - `<nav aria-label="Footer Services Navigation">`
     - `<nav aria-label="Footer Company Navigation">`
     - `<nav aria-label="Footer Quick Links">`
   - `src/components/VehicleScrollNavigation.tsx`:
     - `<nav aria-label="Vehicle categories">` with `tabIndex={0}` and keyboard navigation support.

---

## 3. Keyboard Operability & Focus Management

1. **Mobile Menu & Modals**:
   - Escape key dismisses open mobile overlay navigation menu and services dropdown (`keydown` listener in `Header.tsx`).
   - Mobile menu toggle provides explicit state: `aria-expanded={menuOpen}`, `aria-controls="mobile-nav-menu"`, and dynamic `aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}`.

2. **Floating CTAs (`FloatingContactWidget.tsx`)**:
   - Phone, Track Us, and WhatsApp actions provide visible focus rings on `:focus-visible`.
   - Action tooltips reveal on both `:hover` and `:focus-visible` (`group-focus-visible:opacity-100`).

3. **Google Business Profile Card Overlays (`GoogleBusinessProfileCard.tsx`)**:
   - All 15 interactive hotspot overlays and buttons include explicit `focus-visible:ring-2` focus indicators.

---

## 4. Accordion Pattern Standardization

All four accordion implementations across the codebase have been standardized to strict WAI-ARIA Disclosure / Accordion specifications:
1. `src/app/components/FAQSection.tsx` (Homepage FAQ)
2. `src/components/ServiceFAQSection.tsx` (Service pages FAQ)
3. `src/components/FAQAccordion.tsx` (Content landing pages: `/process`, `/testimonials`, `/why-us`)
4. `src/app/faqs/FAQInteractiveView.tsx` (Dedicated `/faqs` directory)

### Shared Technical Contract
- **Trigger**: Native `<button type="button">` with `id="faq-header-{id}"`, `aria-expanded={isOpen}`, and `aria-controls="faq-panel-{id}"`.
- **Region**: `<div id="faq-panel-{id}" role="region" aria-labelledby="faq-header-{id}">`.
- **DOM Persistence**: Content remains persistently mounted in the DOM and toggles visibility via the standard CSS `hidden` class (`className={isOpen ? 'block ...' : 'hidden'}`), completely eliminating conditional unmounting so AI crawlers and assistive technology can index all questions and answers immediately.

---

## 5. Interactive Elements & Accessible Names Sweep

Across all `.tsx` components in `src/`, 149 total buttons and anchors were audited. Every icon-only and hotspot control was verified for programmatically determinable accessible names.

### Icon-Only & Hotspot Controls Summary

| # | Element & File Location | Functional Role | Accessible Name (`aria-label`) | Audit Status |
|---|---|---|---|---|
| 1 | `<a>` at `GoogleBusinessProfileCard.tsx:70` | Google Maps Search Bar Hotspot | `Search Bharat Relocators on Google Maps` | **PASS** |
| 2 | `<button>` at `GoogleBusinessProfileCard.tsx:81` | Top Share Button | `Share Bharat Relocators profile` | **PASS** |
| 3 | `<a>` at `GoogleBusinessProfileCard.tsx:91` | Review Stars / Count Hotspot | `View 305+ Verified Customer Reviews` | **PASS** |
| 4 | `<a>` at `GoogleBusinessProfileCard.tsx:101` | Overview Tab Hotspot | `Overview tab - navigate to hero section` | **PASS** |
| 5 | `<a>` at `GoogleBusinessProfileCard.tsx:111` | Client Reviews Tab Hotspot | `Client Reviews tab - navigate to customer reviews` | **PASS** |
| 6 | `<a>` at `GoogleBusinessProfileCard.tsx:121` | Our Services Tab Hotspot | `Our Services tab - navigate to services suite` | **PASS** |
| 7 | `<a>` at `GoogleBusinessProfileCard.tsx:131` | Fleet & Packaging Tab Hotspot | `Fleet Photos and Packaging tab - navigate to services showcase` | **PASS** |
| 8 | `<a>` at `GoogleBusinessProfileCard.tsx:141` | Quick Call Circle Button | `Call Bharat Relocators at +91 91230 46504` | **PASS** |
| 9 | `<a>` at `GoogleBusinessProfileCard.tsx:150` | Directions Circle Button | `Get Directions to Bharat Relocators on Google Maps` | **PASS** |
| 10 | `<a>` at `GoogleBusinessProfileCard.tsx:161` | WhatsApp Circle Button | `Chat with Bharat Relocators on WhatsApp` | **PASS** |
| 11 | `<a>` at `GoogleBusinessProfileCard.tsx:172` | Website Circle Button | `Explore Website - navigate to hero section` | **PASS** |
| 12 | `<button>` at `GoogleBusinessProfileCard.tsx:182` | Share Circle Button | `Share Business Profile` | **PASS** |
| 13 | `<a>` at `GoogleBusinessProfileCard.tsx:192` | Haltu Address Row Hotspot | `Open Haltu office location at 17, Ramlal Bazar Rd on Google Maps` | **PASS** |
| 14 | `<a>` at `GoogleBusinessProfileCard.tsx:203` | WhatsApp Action Row Hotspot | `Connect with Bharat Relocators via WhatsApp` | **PASS** |
| 15 | `<a>` at `GoogleBusinessProfileCard.tsx:214` | Quote Banner Hotspot | `Get an Instant Relocation Quote - navigate to quote form` | **PASS** |
| 16 | `<button>` at `TestimonialsSection.tsx:360` | Carousel Pagination Dots | `Select testimonial ${index + 1} from ${review.name}` | **PASS** |
| 17 | `<a>` at `Header.tsx:314` | Mobile Direct Call Icon CTA | `Call Bharat Relocators at ${BUSINESS.phone.primaryFormatted}` | **PASS** |
| 18 | `<button>` at `Header.tsx:325` | Mobile Navigation Toggle | `menuOpen ? 'Close navigation menu' : 'Open navigation menu'` | **PASS** |
| 19 | `<a>` at `FloatingContactWidget.tsx:11` | Floating Phone CTA | `Call Bharat Relocators at ${BUSINESS.phone.primaryFormatted}` | **PASS** |
| 20 | `<Link>` at `FloatingContactWidget.tsx:25` | Floating Track Us CTA | `Track consignment shipment status` | **PASS** |
| 21 | `<a>` at `FloatingContactWidget.tsx:50` | Floating WhatsApp CTA | `Chat with Bharat Relocators on WhatsApp` | **PASS** |
| 22 | `<button>` at `FAQInteractiveView.tsx:72` | Search Input Clear Filter (`✕`) | `Clear search query` | **PASS** |
| 23 | `<button>` at `TrackingInteractiveView.tsx:167` | Tracking Input Clear Button | `Clear tracking input` | **PASS** |
| * | `<button>` at `TrackingInteractiveView.tsx:422` | Copy Tracking Code Button | `title="Copy tracking number"` *(Protected directory `src/app/tracking/`)* | **EXCLUDED** |

**Determination**: Exactly 23 in-scope icon-only and hotspot interactive elements were audited and all 23 pass with descriptive accessible names.

---

## 6. Schema Graph Enhancement for FAQAccordion Routes

In Task 5 addendum, `FAQPage` schema was added to the three consumer pages using `FAQAccordion.tsx`:
1. `/process`: `[HowTo, FAQPage]` graph with `processFaqs` (6 questions)
2. `/testimonials`: `[ItemPage, FAQPage]` graph with `reviewsFaqs` (5 questions)
3. `/why-us`: `[WebPage, FAQPage]` graph with `decisionFaqs` (5 questions)

All three routes reuse the exact question/answer arrays rendered in the DOM, maintaining 1:1 parity between visible content and structured data.
