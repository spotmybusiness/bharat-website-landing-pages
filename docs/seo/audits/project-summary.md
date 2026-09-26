# Bharat Relocators — Comprehensive GEO, Schema & Technical SEO Project Summary

**Date:** 2026-09-26  
**Final Release Branch:** `geo/06-performance-and-final-qa`  
**Execution Context:** 6-Task Generative Engine Optimization (GEO), Structured Data Architecture, Crawler Accessibility & Performance Program  
**Base Commit:** `f724d4812ff30866e01b47278aab4d3f7dc24553`  
**Status:** Verification Complete — Production Build Clean — Ready for Pre-Merge Review  

---

## 1. Executive Summary of Completed Work (Tasks 1 through 6)

Over six structured engineering iterations, the Bharat Relocators digital platform was transitioned from an unvalidated promotional website into an authoritative, machine-readable, and agentic-browser-ready entity platform. The optimization methodology adhered strictly to ground truth, web accessibility standards (WCAG 2.1 AA), and modern Generative Engine Optimization (GEO) principles.

### Task 1: Baseline Audit & Truth-in-HTML Foundation (`geo/01-baseline-and-truth-in-html`)
- **Automated Verification Harness:** Established `npm run verify` (`tsc --noEmit`, `next lint`, `next build`) as an immutable gate in `package.json`.
- **Baseline Metric Documentation:** Profiled initial bundle sizes (103 kB shared JS, 20.7 kB homepage route) and established `docs/seo/audits/baseline-report.md`.
- **Claims Inventory & Factual Scaffolding:** Exhaustively cataloged all marketing statistics across the codebase in `docs/seo/audits/verified-claims-status.md`.
- **Factual Boundary Enforcement:** Enforced `src/lib/business.ts` as the sole source of truth for business data (`BUSINESS`), establishing the unverified boundary (`UNVERIFIED`) to prevent unsubstantiated claims from entering machine-readable layers.

### Task 2: Interconnected Entity Schema Graph (`geo/02-entity-schema-graph`)
- **JSON-LD Schema Architecture:** Designed and implemented a modular schema generator (`src/lib/schema.ts`) emitting fully interconnected Schema.org graphs linked via permanent `@id` URIs (`#organization`, `#website`, `#breadcrumb`, `#service`, `#faq`).
- **Entity Identity & Multi-Location Graph:** Built authoritative `MovingCompany` definitions linked to the primary Haltu headquarters (`#main-office`) and secondary Behala branch (`#secondary-office`), capturing precise coordinates, telephone numbers, postal codes, and verified Google reviews (`4.9★ / 305 reviews` and `5.0★ / 9 reviews`).
- **Service & Guide Coverage:** Implemented rich `@graph` payloads across all 6 core service routes (`household-shifting`, `bike-shifting`, `car-shifting`, `parcel-shifting`, `international-moving`, `office-relocation`) and 3 pillar guides (`moving-checklist`, `vehicle-transportation-guide`, `intercity-moving-guide`).
- **Strict Verification:** Resolved single-object schema omissions by wrapping all payloads with `buildGraphSchema()`, ensuring 100% valid `@context: "https://schema.org"` across every route.

### Task 3: On-Page GEO Copy & Semantic Hierarchy (`geo/03-onpage-copy`)
- **Answer-First Prose Ingestion:** Rewrote introductory paragraphs, service descriptions, and FAQ accordions to lead with self-contained, high-context declarative statements naming "Bharat Relocators" upfront for direct AI quotation (Perplexity, ChatGPT Search, Google AI Overviews).
- **Heading Hierarchy Hardening:** Corrected heading sequences across all service and pillar guide pages to follow strict semantic nesting (`h1` -> `h2` -> `h3`) without skips.
- **Accessible & Informative Media Alt Text:** Enriched image alt attributes to convey exact context, service category, and geographic operational scope (Kolkata and PAN-India moves) without keyword stuffing.
- **Zero Layout Shift:** Maintained 100% fidelity with existing UI layouts, CSS utility classes, and brand styling.

### Task 4: Crawler & Agent Access Layer (`geo/04-crawler-agent-access`)
- **Next.js Asset Unblocking in `robots.ts`:** Removed the restrictive `Disallow: /_next/` rule, allowing rendering crawlers and agentic browser engines to execute client-side JavaScript, render CSS, and construct full accessibility trees.
- **Machine Discovery Manifests (`llms.txt` and `llms-full.txt`):** Authored concise and extended markdown manifests providing AI engines with structured business context, core services, pricing frameworks, and verified multi-branch contact data. Synchronized 100% of routes with the canonical sitemap.
- **Dynamic Sitemap Freshness:** Replaced static date strings in `src/app/sitemap.ts` with a build-time timestamp (`new Date().toISOString()`), signaling active maintenance to search engine crawlers across all 20 canonical endpoints.
- **Declarative WebMCP Lead Form Attributes:** Added semantic agentic annotations (`data-webmcp-purpose`, `data-webmcp-field`, `data-webmcp-schema`) to quotation and contact forms, enabling AI shopping and relocation agents to identify and fill out lead forms deterministically.

### Task 5: Accessibility Tree & Agentic-Browsing Hardening (`geo/05-a11y-agentic-hardening`)
- **Semantic Landmark Restructure:** Upgraded layouts to include native semantic landmarks: `<header role="banner">`, `<main id="main-content">`, and `<footer role="contentinfo">`.
- **Keyboard Navigation & Bypass Blocks:** Implemented an accessible "Skip to main content" link for keyboard and screen-reader users, styled to remain visually hidden until focused.
- **Interactive State Attributes:** Hardened accordions (`FAQAccordion.tsx`, `ServiceFAQSection.tsx`) with explicit `aria-expanded`, `aria-controls`, and unique element IDs, ensuring programmatic tools can inspect disclosure states.
- **Descriptive Interactive Names:** Replaced generic CTA labels ("Submit", "Get Quote") with distinct, context-rich accessible labels across all lead generation components.
- **Schema Parity Extension:** Linked visible FAQ accordions on `/process`, `/testimonials`, and `/why-us` directly to Schema.org `FAQPage` nodes within their respective JSON-LD graphs.

### Task 6: Performance Gate, Image Weight, and Final QA (`geo/06-performance-and-final-qa`)
- **Image Compression Pipeline:** Compressed 12 high-resolution PNG source assets down to 2x retina display dimensions, saving **20.01 MB (81.1% aggregate reduction)**.
- **Zero Client Bundle Inflation:** Confirmed shared First Load JS remained rock-solid at **103 kB**, with zero unintended package bloat.
- **Automated Syntax Validation:** Executed a live site-wide JSON-LD validation script across a production server build (`http://localhost:3001`), confirming all **59 JSON-LD blocks across 21 routes parse successfully with valid Schema.org syntax**.

---

## 2. Unresolved Business Claims Requiring Client Decisions

During the factual audit in Task 1 (`docs/seo/audits/verified-claims-status.md`), several marketing claims and operational statistics were identified that lack empirical documentation in the codebase. To preserve domain authority and prevent search engine penalties for misleading structured data, these claims were deliberately **excluded from all JSON-LD schemas and LLM manifests**. 

The client or business lead must review and make formal decisions on the following four items before they can be promoted to verified status:

### 1. ISO 9001:2015 & ISO 39001:2012 Certification Proof
- **Current State:** Displayed in promotional badge copy on the homepage, about page, and footer, but marked as `UNVERIFIED.isoCertifications` in `src/lib/business.ts`. No registration numbers, issuing registrars, or certificate PDF scans exist in project repositories. (Note: visible copy previously referenced "ISO 3900:2012" rather than the standard ISO 39001:2012 road traffic safety standard).
- **Client Action Required:** 
  - Provide valid certificate numbers, accreditation body names, and expiry dates.
  - If certified: Record details in `src/lib/business.ts` and add `@type: Certification` or `hasCredential` to the Schema.org graph.
  - If not certified or expired: Remove the ISO claims from visible website badges and copy to prevent misrepresentation under Indian Consumer Protection regulations.

### 2. Exact Founding Year & Operational Longevity ("15+ Years Experience")
- **Current State:** Marketing copy across several pages and guide headers claims "15+ years of trusted relocation service" or "Serving Kolkata since 2009". However, no formal incorporation or trade license date is documented in `BUSINESS`.
- **Client Action Required:** 
  - Confirm the exact incorporation/founding year (e.g., 2009, 2010, or 2011) and legal entity registration type (Proprietorship / Partnership / Private Limited).
  - Once confirmed, update `BUSINESS.foundingDate` in `src/lib/business.ts`, allowing `@type: LocalBusiness` to output `foundingDate: "YYYY"` in JSON-LD.

### 3. Empirical Basis for Operational Metrics
- **Current State:** 
  - *58,000+ Relocations Delivered*
  - *230+ Cities Covered Nationwide*
  - *98% Customer Satisfaction Rate* (noted as 96% in some older audit logs)
  - *Over 96% On-Time Delivery Record*
  - *3-Hour Quote Turnaround Guarantee*
- **Client Action Required:** 
  - Decide whether these statistics represent auditable operational figures or promotional marketing targets.
  - For customer satisfaction and on-time delivery rates: Establish a recurring feedback/dispatch logging process so claims can be defended if challenged.
  - Ensure the operations dispatch desk is committed to the published 3-hour turnaround SLA for online quote submissions.

### 4. Branch Operating Hours External Synchronization
- **Current State:** The website and structured data assert 24/7 operating availability for both the Haltu and Behala offices (`BUSINESS.hours.openingHoursSpecification` covering Monday through Sunday 00:00 to 23:59). However, the external Google Business Profile (GBP) listing currently shows "Mon–Sat 8:00 AM – 7:00 PM".
- **Client Action Required:** 
  - Update the live Google Business Profile operating hours to match the 24/7 or published website desk hours. Search engines penalize entity confidence when off-site listings contradict on-site Schema.org declarations.

---

## 3. Recommended Next Steps for Project Lead / Client

### Step 1: Live Production PageSpeed Insights & Core Web Vitals Audit
Because the local environment lacks a headless Chrome browser, final PageSpeed metrics must be verified on the deployed production/staging environment:
1. Deploy the `geo/06-performance-and-final-qa` branch to the preview or production environment.
2. Run Google PageSpeed Insights (or Chrome DevTools Lighthouse) across three core route archetypes:
   - **Homepage:** `https://bharatrelocators.com/` (Mobile and Desktop)
   - **Service Landing Page:** `https://bharatrelocators.com/household-shifting` (Mobile and Desktop)
   - **Pillar Knowledge Guide:** `https://bharatrelocators.com/moving-checklist` (Mobile and Desktop)
3. Confirm scores meet the **95+ target** across Performance, Accessibility, Best Practices, and SEO. The 20 MB image reduction should ensure near-instant Largest Contentful Paint (LCP) even on simulated mobile 4G networks.

### Step 2: Off-Site Citation Hygiene & NAP Consistency
Search and LLM answer engines establish entity confidence by triangulating website data with external citations. Execute an external consistency sweep:
1. **Name, Address, Phone (NAP) Consistency:** Audit all third-party business listings (Justdial, Sulekha, IndiaMART, Facebook, TradeIndia, Google Maps) to ensure company name ("Bharat Relocators"), addresses, and phone numbers match `BUSINESS.locations.main` and `BUSINESS.locations.secondary` character-for-character.
2. **Review Acquisition Program:** Systematically direct satisfied moving customers to the primary Google Business Profile (`https://maps.app.goo.gl/wS3fQe7aXyZ1...`) to sustain review velocity and keep the 4.9★ rating active.
3. **Periodic Data Synchronization:** When review counts or addresses change, update `src/lib/business.ts` and regenerate `llms.txt` to keep machine manifests synchronized with real-world profiles.

### Step 3: Search Console Indexing & Monitoring
1. Submit `https://bharatrelocators.com/sitemap.xml` directly in Google Search Console.
2. Use the "URL Inspection" tool on `/`, `/household-shifting`, and `/moving-checklist` to request re-indexing and verify that Google's rich result validator detects all valid Schema.org entities (`MovingCompany`, `Service`, `FAQPage`, `BreadcrumbList`, `Article`).
3. Monitor Google Search Console for "Enhancements > FAQs" and "Merchant Listings / Organization" reports over the following 2–4 weeks.

### Step 4: Visual & Asset Refinements
- **Open Graph Image (`og:image`) Branding Note:** The site-wide fallback social sharing image currently points to `https://bharatrelocators.com/images/packaging.png` (a generic photo of packing materials/boxes). The client should consider designing and replacing this with a dedicated, branded OpenGraph preview card (1200x630px) featuring the Bharat Relocators logo, tagline ("Packers and Movers · Kolkata"), and primary phone number to improve click-through rates on WhatsApp, LinkedIn, and Twitter/X previews.
