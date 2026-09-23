# Technical SEO Audit & Infrastructure Review

**Project:** Bharat Relocators (`https://bharatrelocators.com`)  
**Audit Date:** September 2026  
**Scope:** Phase 1 Foundation & Remediation Technical SEO Audit (Post Task 08)  
**Status:** Audit Complete — Documentation Only

---

## 1. Executive Summary

This technical SEO audit evaluates the codebase following the initial implementation of the 13 canonical routes, centralized metadata architecture, XML sitemap, robots configuration, claim remediation, and legacy URL preservation.

The core technical foundation is robust:
- **Canonical Architecture:** All 13 live routes have 1:1 matching canonical URLs anchored to `https://bharatrelocators.com` with zero trailing-slash discrepancies.
- **Indexability & Crawling:** `robots.txt` and `sitemap.xml` correctly expose all 13 canonical pages and isolate API/system endpoints.
- **Content & Claim Alignment:** Audited claims (ISO 9001/3900, 15+ years, 58,000+ packages, 96% on-time, 24/7 hours) have been removed or qualified across metadata, visible copy, and JSON-LD schemas.
- **Rendering & Performance:** All 13 canonical pages compile as static HTML (`○ (Static)`) during Next.js build with fast initial load bundles (~103–122 kB total First Load JS).

A few low-to-medium priority optimization items were identified (such as duplicate brand suffixes in page `<title>` generation, Open Graph `type` classification, breadcrumb schema leaf item resolution, and `.gitignore` environment tracking), which are cataloged below.

---

## 2. Findings by Severity Matrix

| Severity | Count | Summary of Key Items |
| :--- | :---: | :--- |
| **Critical** | 0 | No blocking indexation or crawl barriers. |
| **High** | 0 | No canonical conflicts or metadata leakage. |
| **Medium** | 2 | 1. Page title brand suffix duplication in `generatePageMetadata`.<br>2. `.env` and `.next` untracked in `.gitignore`. |
| **Low** | 3 | 1. Breadcrumb JSON-LD terminal leaf node missing explicit `item` URL.<br>2. Open Graph `type` default set to `article` on commercial service pages.<br>3. External image host dependencies (`img.rocket.new`, `images.unsplash.com`). |
| **Informational** | 2 | 1. Absence of `LocalBusiness` / `Organization` JSON-LD schema (pending client business data).<br>2. GSC-dependent indexation and search performance tracking pending. |

---

## 3. Metadata Audit Table (13 Canonical Pages)

All 13 canonical pages were inspected across `src/app/layout.tsx`, `src/lib/metadata.ts`, and individual page modules.

| # | Route | `<title>` in HTML | Meta Description Length & Quality | Canonical URL | OG & Twitter | Status |
| :-: | :--- | :--- | :--- | :--- | :---: | :---: |
| 1 | `/` | `Bharat Relocators — Premium Packers & Movers in Kolkata` (56 chars) | `Bharat Relocators offers trusted packers & movers services in Kolkata — home shifting, car & bike transport, PAN India delivery. 4.9★ rated, 305+ reviews.` (160 chars) | `https://bharatrelocators.com` | ✅ Yes (`website`) | ✅ Pass |
| 2 | `/about` | `About Us — Trusted Packers & Movers in Kolkata — Bharat Relocators` (66 chars) | `Learn about Bharat Relocators — trusted Kolkata packers and movers delivering reliable household shifting, vehicle transport, and corporate relocation across India.` (162 chars) | `https://bharatrelocators.com/about` | ✅ Yes (`article`) | ⚠️ Note 1 |
| 3 | `/contact` | `Contact Us — Bharat Relocators Kolkata — Bharat Relocators` (58 chars) | `Contact Bharat Relocators in Kolkata. Call 091230 46504, chat on WhatsApp, or visit our office at 144, Jodhpur Gardens, Kolkata 700045.` (137 chars) | `https://bharatrelocators.com/contact` | ✅ Yes (`article`) | ⚠️ Note 1 |
| 4 | `/testimonials` | `Customer Reviews & Testimonials — Bharat Relocators — Bharat Relocators` (72 chars) | `Read verified customer reviews for Bharat Relocators. 4.9★ rated on Google with 305+ reviews for household shifting, bike transport, and office relocation.` (154 chars) | `https://bharatrelocators.com/testimonials` | ✅ Yes (`article`) | ⚠️ Note 1 |
| 5 | `/faqs` | `Frequently Asked Questions (FAQ) — Bharat Relocators — Bharat Relocators` (72 chars) | `Find answers to common questions about household shifting, car/bike transport, packing materials, pricing estimates, and transit insurance in Kolkata.` (151 chars) | `https://bharatrelocators.com/faqs` | ✅ Yes (`article`) | ⚠️ Note 1 |
| 6 | `/get-a-quote` | `Get a Free Moving Quote — Bharat Relocators — Bharat Relocators` (63 chars) | `Get an instant, transparent relocation estimate from Bharat Relocators for home shifting, car/bike transport, and office relocation in Kolkata and PAN India.` (157 chars) | `https://bharatrelocators.com/get-a-quote` | ✅ Yes (`article`) | ⚠️ Note 1 |
| 7 | `/track-your-shipment` | `Track Your Shipment — Bharat Relocators — Bharat Relocators` (59 chars) | `Track your consignment live with Bharat Relocators. Access real-time milestone updates for your home shifting, car/bike transport, or intercity parcel delivery.` (159 chars) | `https://bharatrelocators.com/track-your-shipment` | ✅ Yes (`article`) | ⚠️ Note 1 |
| 8 | `/household-shifting` | `Household Shifting Services in Kolkata — Bharat Relocators — Bharat Relocators` (79 chars) | `Reliable household shifting and home relocation in Kolkata & PAN India. 5-layer packing, trained carpenters for furniture assembly, and dedicated transit safety.` (163 chars) | `https://bharatrelocators.com/household-shifting` | ✅ Yes (`article`) | ⚠️ Note 1 |
| 9 | `/bike-shifting` | `Bike Transportation Services in Kolkata — Bharat Relocators — Bharat Relocators` (80 chars) | `Specialized bike shifting and two-wheeler transportation from Kolkata to PAN India. Multi-layer packaging, wooden crating options, and cushioned protective transit.` (165 chars) | `https://bharatrelocators.com/bike-shifting` | ✅ Yes (`article`) | ⚠️ Note 1 |
| 10 | `/car-shifting` | `Car Transportation Services in Kolkata — Bharat Relocators — Bharat Relocators` (78 chars) | `Dedicated car transport services in Kolkata with enclosed carriers, hydraulic loading ramps, wheel strapping, and door-to-door transit across 230+ cities.` (156 chars) | `https://bharatrelocators.com/car-shifting` | ✅ Yes (`article`) | ⚠️ Note 1 |
| 11 | `/parcel-shifting` | `Parcel & Cargo Shifting Services in Kolkata — Bharat Relocators — Bharat Relocators` (83 chars) | `Express parcel shipping, luggage moving, and cargo courier services from Kolkata to 230+ cities across India. Doorstep pickup, barcoded labeling, and real-time tracking.` (169 chars) | `https://bharatrelocators.com/parcel-shifting` | ✅ Yes (`article`) | ⚠️ Note 1 |
| 12 | `/international-moving` | `International Moving Services in Kolkata — Bharat Relocators — Bharat Relocators` (81 chars) | `Reliable international relocation from Kolkata. Export-grade seaworthy packing, customs documentation guidance, air and sea freight coordination, and global destination delivery.` (180 chars) | `https://bharatrelocators.com/international-moving` | ✅ Yes (`article`) | ⚠️ Note 1 |
| 13 | `/office-relocation` | `Office Relocation & Corporate Shifting in Kolkata — Bharat Relocators — Bharat Relocators` (89 chars) | `Structured corporate and office relocation in Kolkata. Weekend shifts, IT server packing, modular workstation assembly, and minimal business downtime logistics.` (161 chars) | `https://bharatrelocators.com/office-relocation` | ✅ Yes (`article`) | ⚠️ Note 1 |

> **Note 1 (Title Suffix Duplication):** In `src/lib/metadata.ts`, `generatePageMetadata()` automatically appends ` — Bharat Relocators` to all non-home page titles (`fullTitle = path === '/' ? title : `${title} — Bharat Relocators``). Because pages 3–13 already provide a title string containing ` — Bharat Relocators`, the generated HTML title outputs double branding (`... — Bharat Relocators — Bharat Relocators`). This should be cleaned up by removing the manual suffix in page declarations or stripping duplicate suffixes inside `generatePageMetadata()`.

---

## 4. Canonical Consistency Audit

- **Canonical URL Integrity:** 100% compliant.
- **Protocol & Origin:** Strictly `https://bharatrelocators.com`.
- **Trailing Slash Consistency:** No trailing slash on any canonical URL (`next.config.mjs` enforces `trailingSlash: false`).
- **Duplicate/Missing Canonicals:** 0 missing, 0 duplicates, 0 incorrect paths.
- **Root Layout vs Page Overrides:** Root `layout.tsx` defines fallback canonical `https://bharatrelocators.com` and `metadataBase: new URL('https://bharatrelocators.com')`; each inner page defines its precise canonical path via `generatePageMetadata`.

---

## 5. Robots Audit (`src/app/robots.ts`)

```typescript
export default function robots(): MetadataRoute.Robots {
  const siteUrl = getSiteUrl();

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/_next/', '/admin/'],
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
```

- **Sitemap Declaration:** Correctly points to `https://bharatrelocators.com/sitemap.xml`.
- **User Agent:** Wildcard (`*`) allows full crawl of public site.
- **Disallowed Directories:**
  - `/api/` (Protects backend endpoints from indexation).
  - `/_next/` (Blocks Next.js static asset and chunk direct indexing).
  - `/admin/` (Protects administrative/internal paths).
- **Public Page Blocking:** Zero accidental blocking of canonical public URLs.
- **Localhost References:** Zero.

---

## 6. XML Sitemap Audit (`src/app/sitemap.ts`)

- **Included URLs:** Exactly the 13 canonical live routes (1 Homepage + 6 Core Services + 6 Core Info/Utility Pages).
- **Excluded URLs:**
  - No 404 (`/not-found` or `/404`).
  - No API routes (`/api/google-reviews`).
  - No unbuilt/speculative pages (e.g. `/services`, individual blog posts, unmigrated legacy URLs).
- **LastModified Handling:** Correctly omitted rather than fabricated with static/fake dates.
- **Priority & ChangeFrequency:**
  - Homepage (`/`): `priority: 1.0`, `weekly`
  - 6 Core Service Pages: `priority: 0.9`, `weekly`
  - High-intent conversion (`/get-a-quote`): `priority: 0.8`, `weekly`
  - Information/Utility Pages (`/about`, `/contact`, `/testimonials`, `/faqs`, `/track-your-shipment`): `priority: 0.6–0.7`, `weekly`/`monthly`

---

## 7. Structured Data Audit (JSON-LD)

### Emitted Schemas

1. **`BreadcrumbList` (`src/components/Breadcrumb.tsx` via `JsonLd` component)**:
   - **Pages Emitted:** Emitted on all 12 inner pages via `PageHero`.
   - **Schema Structure:**
     ```json
     {
       "@context": "https://schema.org",
       "@type": "BreadcrumbList",
       "itemListElement": [
         { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://bharatrelocators.com" },
         { "@type": "ListItem", "position": 2, "name": "Household Shifting" }
       ]
     }
     ```
   - **Audit Finding:** The root item has an explicit `item` URL (`https://bharatrelocators.com`). The current page leaf node (`position: 2`) currently passes `item: undefined`, omitting the URL property. While valid in some parsers, Google Search Central recommends providing the explicit target `@id` / `item` URL on all list elements in a `BreadcrumbList`.

2. **`FAQPage` (`src/app/faqs/page.tsx` via `JsonLd` component)**:
   - **Pages Emitted:** `/faqs`
   - **Schema Structure:** Emits all 10 verified Q&As from `src/data/faqs.ts`.
   - **Audit Finding:** 100% visible on page via `FAQAccordion`. Uses verified copy remediated in Task 08 (qualified support hours, qualified packing standards). Zero unverified claims present.

3. **`LocalBusiness` / `Organization` / `AggregateRating` Schema**:
   - **Status:** Currently **not emitted** on any page.
   - **Audit Finding:** This is intentional and compliant with Phase 1 constraints to avoid emitting speculative operating hours or unverified legal registrations until confirmed by client data.

---

## 8. Indexability & Robots Directives Audit

- **Canonical Public Routes (13):** All indexable (`robots: { index: true, follow: true }` by default).
- **Error Page (`src/app/not-found.tsx`):** Explicitly sets `noIndex: true` → generates `<meta name="robots" content="noindex, follow">` preventing soft-404 indexation.
- **Dynamic API Routes (`/api/google-reviews`):** Disallowed in `robots.txt` (`disallow: /api/`) and excluded from `sitemap.xml`.
- **Rendering Architecture:** Next.js static generation (`○ (Static)`) prerenders all 13 canonical pages at build time. Search engine bots receive full static HTML content without relying on client-side JS rendering.

---

## 9. Internal Linking & Canonical Signals Audit

Cross-referenced against `docs/seo/internal-link-audit.md` and current codebase:
- **Service Links:** All footer links, header navigation, related service cards (`ServiceCard.tsx`), and body links point strictly to the 6 preserved flat canonical URLs (`/household-shifting`, `/car-shifting`, `/bike-shifting`, `/office-relocation`, `/international-moving`, `/parcel-shifting`).
- **Quote CTAs:** Inner-page conversion CTAs consistently link to dedicated `/get-a-quote` instead of obsolete `/#quote`.
- **Homepage Anchor Navigation:** Homepage navigation header dynamically uses section hashes (`#services`, `#process`, `#why-us`, `#reviews`, `#faq`, `#contact`) exclusively when active on `/`, and switches to canonical routes when navigating from inner pages.
- **Broken / Obsolete Routes:** Zero broken internal links, zero links to unresolved legacy URLs (`/blogs`, `/request-a-quote`).

---

## 10. Image SEO Audit

- **Image Formats & Tags:** Standardized across Next.js `<Image>` and wrapper `<AppImage>`.
- **Descriptive Alt Text:**
  - All 6 service images have contextual, descriptive alt texts (e.g. `"Living room with packed moving boxes and organized furniture for home relocation"`, `"Motorcycle secured on dedicated transport carrier"`).
  - Editorial and about section images have descriptive alt texts.
  - Testimonial profile photos provide reviewer-specific alt texts (`"${review.name}'s profile"`).
- **Dimensions & Layout Shift:** `AppImage` enforces Next.js `fill` with responsive `sizes` or explicit width/height to prevent Cumulative Layout Shift (CLS).
- **External Image Dependencies (Low Risk):**
  - `img.rocket.new` (Household Shifting card)
  - `images.unsplash.com` (International Moving card)
  - *Recommendation:* Migrate these external assets to local `/images/` directory in a future optimization task to eliminate third-party CDN latency and availability risk.

---

## 11. Claim / Schema Consistency Audit

Cross-referenced against `docs/seo/claim-verification-audit.md`:
- **ISO 9001:2015 & ISO 3900:2012:** Completely purged from `<title>`, `<meta name="description">`, Open Graph, JSON-LD, and UI copy.
- **15+ Years & 58,000+ Packages:** Completely removed from metadata, stats arrays, badges, and schemas. Replaced exclusively with verified GBP metrics (4.9★ rating, 305+ reviews, 230+ cities network).
- **96% On-Time Delivery:** Completely removed from copy and meta.
- **24/7 / Open 24 Hours:** Qualified to `"Dedicated Move Coordinator"` / `"Dedicated Support Team"`.
- **Absolute Guarantees:** Qualified to `"Damage-Protection Care"`, `"High-Protection"`, and `"Minimal Business Downtime Execution"`.

---

## 12. Security & Indexing Leakage Audit

- **API Keys & Secrets Exposure:**
  - `GOOGLE_PLACES_API_KEY` is referenced solely server-side via `process.env.GOOGLE_PLACES_API_KEY` in `src/app/api/google-reviews/route.ts`. It is NOT exposed with a `NEXT_PUBLIC_` prefix and does not leak to client bundles.
- **Environment File Hygiene:**
  - `.env` contains only public non-sensitive configuration (`NEXT_PUBLIC_SITE_URL=https://bharatrelocators.com`).
  - `.gitignore` currently only contains `node_modules`.
  - *Recommendation:* Expand `.gitignore` to include `.env*.local`, `.env`, `.next`, and `build/` to ensure local development secrets are never committed.
- **Filesystem / Debug Info Leakage:** Zero internal filesystem paths, dev server endpoints, or debug consoles exposed in production builds.

---

## 13. Search Console Verification Status

The following items are explicitly marked as **`Pending GSC verification`**:

| GSC-Dependent Item | Current Status | Required Action Upon GSC Access |
| :--- | :--- | :--- |
| Legacy URL `/request-a-quote` | Unresolved in routing | Verify historic impressions/backlinks in GSC before deciding permanent 301 vs alias. |
| Legacy URL `/blogs` | Unresolved in routing | Verify historic traffic/rankings in GSC before deciding redirect or blog hub recreation. |
| Indexation status of legacy service URLs | Preserved at flat URLs | Confirm Google indexation continuity on `/household-shifting`, `/car-shifting`, etc. |
| Core Web Vitals (CWV) real-user metrics | Lab tested | Benchmark field LCP, INP, and CLS once live Search Console data is connected. |

---

## 14. Recommended Remediation Order (Phase 2 Roadmap)

1. **Title Brand Suffix Cleanup (Medium):** Refactor `src/lib/metadata.ts` and page metadata exports to eliminate double branding (`... — Bharat Relocators — Bharat Relocators`).
2. **Gitignore Enhancement (Medium):** Add `.env*.local`, `.env`, `.next`, and OS metadata files to `.gitignore`.
3. **Breadcrumb JSON-LD Leaf URL (Low):** Ensure `Breadcrumb.tsx` includes explicit canonical URL for the terminal leaf node in `itemListElement`.
4. **Local Image Migration (Low):** Download external images from `img.rocket.new` and `unsplash.com` to `/public/images/`.
5. **LocalBusiness Schema Implementation (Future):** Implement comprehensive `MovingCompany` / `LocalBusiness` JSON-LD schema upon receiving client confirmation for official operating hours and corporate entity details.

