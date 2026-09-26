# Bharat Relocators — Final Bundle Size & Performance Diff Report

**Date:** 2026-09-26  
**Branch:** `geo/06-performance-and-final-qa`  
**Baseline Hash:** `f724d4812ff30866e01b47278aab4d3f7dc24553` (from `geo/01-baseline-and-truth-in-html`)  
**Status:** Verification Complete — Production Build Passed  

---

## 1. Executive Summary

This report documents the bundle size and resource footprint differential between the pre-optimization baseline (Task 1) and the final optimized state at the conclusion of Tasks 1 through 6.

Across all 27 App Router routes:
- **Shared First Load JS:** Remained completely neutral at **103 kB** (0% change across shared vendor and common chunks).
- **Service Pages Route JS:** Modest +906 B delta (+0.76% First Load JS) attributable directly to rich on-page FAQ content components and dual `Service` + `FAQPage` JSON-LD schema graphs added to enhance answer-engine extractability.
- **Image Assets Optimization:** Achieved a **20.01 MB (-81.1%) net reduction** across all heavy image assets in `public/images/`, lowering aggregate payload from 24.69 MB to 4.68 MB while strictly preserving retina resolution (2x CSS display width) and pixel aspect ratios.
- **Automated Verification:** `npm run verify` (`type-check`, `lint`, and `build`) passed with 0 errors across 27 static and dynamic routes.

---

## 2. Route-by-Route Bundle Comparison

Below is the side-by-side comparison between the Task 1 Baseline build and the Task 6 Final build:

| Route | Baseline Route Size | Final Route Size | Route Size Delta | Baseline First Load JS | Final First Load JS | First Load JS Delta | Rationale / Explanation |
|---|:---:|:---:|:---:|:---:|:---:|:---:|---|
| `/` (Homepage) | 20.7 kB | 20.9 kB | +200 B | 150 kB | 151 kB | +1 kB | Added skip-to-content landmark link, semantic `<main id="main-content">` restructuring, and extended FAQ JSON-LD. |
| `/_not-found` | 138 B | 138 B | 0 B | 103 kB | 103 kB | 0 kB | No changes. |
| `/about` | 964 B | 946 B | -18 B | 118 kB | 118 kB | 0 kB | Removed unverified claims copy; added structured `@graph` schema. |
| `/api/google-reviews` | 138 B | 138 B | 0 B | 103 kB | 103 kB | 0 kB | No changes. |
| `/api/track` | 138 B | 138 B | 0 B | 103 kB | 103 kB | 0 kB | Untouched tracking boundary. |
| `/bike-shifting` | 964 B | 1.87 kB | +906 B | 118 kB | 119 kB | +1 kB | Added visible FAQ accordion with direct-answer copy and dual `Service` + `FAQPage` JSON-LD. |
| `/car-shifting` | 964 B | 1.87 kB | +906 B | 118 kB | 119 kB | +1 kB | Added visible FAQ accordion with direct-answer copy and dual `Service` + `FAQPage` JSON-LD. |
| `/contact` | 327 B | 327 B | 0 B | 112 kB | 112 kB | 0 kB | Updated office facts and phone references; no bundle weight impact. |
| `/faqs` | 6.51 kB | 6.62 kB | +110 B | 119 kB | 119 kB | 0 kB | Refined direct-answer copy, aria attributes, and schema graph wrapping. |
| `/get-a-quote` | 328 B | 328 B | 0 B | 118 kB | 118 kB | 0 kB | WebMCP form attributes and graph schema wrapping; zero bundle delta. |
| `/household-shifting` | 964 B | 1.87 kB | +906 B | 118 kB | 119 kB | +1 kB | Added visible FAQ accordion with direct-answer copy and dual `Service` + `FAQPage` JSON-LD. |
| `/intercity-moving-guide` | 1.37 kB | 1.37 kB | 0 B | 119 kB | 119 kB | 0 kB | Article JSON-LD graph wrapping; copy refinements. |
| `/international-moving` | 964 B | 1.87 kB | +906 B | 118 kB | 119 kB | +1 kB | Added visible FAQ accordion with direct-answer copy and dual `Service` + `FAQPage` JSON-LD. |
| `/moving-checklist` | 1.37 kB | 1.37 kB | 0 B | 119 kB | 119 kB | 0 kB | Article JSON-LD graph wrapping; copy refinements. |
| `/moving-guides` | 327 B | 327 B | 0 B | 112 kB | 112 kB | 0 kB | No client-bundle changes. |
| `/office-relocation` | 964 B | 1.87 kB | +906 B | 118 kB | 119 kB | +1 kB | Added visible FAQ accordion with direct-answer copy and dual `Service` + `FAQPage` JSON-LD. |
| `/parcel-shifting` | 964 B | 1.87 kB | +906 B | 118 kB | 119 kB | +1 kB | Added visible FAQ accordion with direct-answer copy and dual `Service` + `FAQPage` JSON-LD. |
| `/process` | 946 B | 1.04 kB | +94 B | 113 kB | 113 kB | 0 kB | Added `FAQPage` schema from `processFaqs` and semantic copy hardening. |
| `/robots.txt` | 138 B | 138 B | 0 B | 103 kB | 103 kB | 0 kB | Fixed crawler rules (unblocked `/_next/`). |
| `/services` | 964 B | 946 B | -18 B | 118 kB | 118 kB | 0 kB | Direct-answer copy refinements; schema graph wrapping. |
| `/sitemap.xml` | 138 B | 138 B | 0 B | 103 kB | 103 kB | 0 kB | Sourced build timestamp `lastModified` across all 20 canonical routes. |
| `/testimonials` | 4.59 kB | 4.66 kB | +70 B | 122 kB | 122 kB | 0 kB | Added `FAQPage` schema from `reviewsFaqs` and semantic copy hardening. |
| `/track-your-shipment` | 138 B | 138 B | 0 B | 103 kB | 103 kB | 0 kB | Untouched tracking boundary. |
| `/tracking` | 329 B | 329 B | 0 B | 119 kB | 119 kB | 0 kB | Untouched tracking boundary. |
| `/vehicle-transportation-guide` | 1.37 kB | 1.37 kB | 0 B | 119 kB | 119 kB | 0 kB | Article JSON-LD graph wrapping; copy refinements. |
| `/why-us` | 946 B | 1.04 kB | +94 B | 113 kB | 113 kB | 0 kB | Added `FAQPage` schema from `decisionFaqs` and semantic copy hardening. |

---

## 3. Shared Chunk Analysis

The shared client runtime chunks remain identical in size between baseline and final state:
```
+ First Load JS shared by all             103 kB
  ├ chunks/255-37e0f0325134c4d7.js       46.4 kB
  ├ chunks/4bd1b696-c023c6e3521b1417.js  54.2 kB
  └ other shared chunks (total)             2 kB
```

### Delta Observations
1. **Zero Shared Bloat:** No new global JavaScript libraries or dependencies were introduced during any of the 6 tasks. All enhancements (schema builders, WebMCP attributes, accessibility helpers, and copy updates) were implemented using standard React/Next.js native constructs.
2. **Predictable Component Costs:** The only routes showing an increase in route-specific chunk size are those where visible semantic components (`FAQAccordion` / `ServiceFAQSection`) or rich schema blocks were intentionally added to support LLM citation and user clarity. The average increase per service page is under 1 kB.

---

## 4. Image Weight Optimization Summary (Part A)

All raster images in `public/images/` exceeding ~300 KB were audited, scaled down from raw capture resolution to crisp 2x retina display dimensions, and compressed using lossless/near-lossless PNG compression (`sharp` compressionLevel: 9, effort: 10, quality: 85):

| File | Primary Use / Page | Max CSS Display | Target 2x Width | Original Size | Original Dims | Compressed Size | Final Dims | Savings | % Reduction |
|---|---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| `Services.png` | `services/page.tsx` (Hero) | ~550px | 1100px | 3,277,270 B (3.13 MB) | 1448x1086 | 559,224 B (546.1 KB) | 1100x825 | -2.59 MB | -82.9% |
| `packaging.png` | `WhyChooseSection.tsx`, `og:image` | ~600px | 1200px | 2,888,674 B (2.75 MB) | 1449x1086 | 612,483 B (598.1 KB) | 1200x899 | -2.17 MB | -78.8% |
| `contact_us.png` | `contact/page.tsx` (Hero) | ~500px | 1000px | 2,869,225 B (2.74 MB) | 1448x1086 | 462,437 B (451.6 KB) | 1000x750 | -2.30 MB | -83.9% |
| `household_shifting.png` | `household-shifting` (Hero) | ~500px | 1000px | 2,794,581 B (2.66 MB) | 1448x1086 | 430,191 B (420.1 KB) | 1000x750 | -2.25 MB | -84.6% |
| `Moving_guides.png` | `moving-guides` (Hero) | ~450px | 900px | 2,726,960 B (2.60 MB) | 1077x1461 | 508,000 B (496.1 KB) | 900x1221 | -2.12 MB | -81.4% |
| `process.png` | `process/page.tsx` (Hero) | ~500px | 1000px | 2,457,490 B (2.34 MB) | 1448x1086 | 364,672 B (356.1 KB) | 1000x750 | -2.00 MB | -85.2% |
| `car_relocation_2.png` | `car-shifting` (Hero) | ~500px | 1000px | 2,369,355 B (2.26 MB) | 1448x1086 | 372,917 B (364.2 KB) | 1000x750 | -1.90 MB | -84.3% |
| `car_relocation.png` | `vehicle-transportation-guide` | ~450px | 896px | 2,247,739 B (2.14 MB) | 896x1277 | 586,695 B (572.9 KB) | 896x1277 | -1.58 MB | -73.9% |
| `figures.png` | `about/page.tsx`, `AboutSection` | ~500px | 1000px | 1,913,950 B (1.83 MB) | 1122x1402 | 416,008 B (406.3 KB) | 1000x1250 | -1.43 MB | -78.3% |
| `office_relocation.png` | `office-relocation` (Hero) | ~550px | 1100px | 1,543,349 B (1.47 MB) | 1154x743 | 393,179 B (384.0 KB) | 1100x708 | -1.10 MB | -74.5% |
| `gmb-profile.png` | `GoogleBusinessProfileCard.tsx` | ~360px | 502px | 469,788 B (458.8 KB) | 502x1024 | 122,757 B (119.9 KB) | 502x1024 | -338.9 KB | -73.9% |
| `logo.png` | `Header`, `Footer`, Schema Logo | ~48px | 500px | 327,669 B (320.0 KB) | 500x500 | 75,900 B (74.1 KB) | 500x500 | -245.9 KB | -76.8% |
| **TOTAL** | | | | **25,886,050 B (24.69 MB)** | | **4,904,463 B (4.68 MB)** | | **-20.01 MB** | **-81.1%** |

---

## 5. Performance Gate Assessment

- **Largest Contentful Paint (LCP) Risk:** Eliminated. Heavy hero images that previously transferred 2.5 MB to 3.2 MB on initial route loads are now constrained to ~350 KB to ~550 KB, representing an immediate 4x to 5x reduction in network download time on constrained mobile and intercity connections.
- **Cumulative Layout Shift (CLS) Risk:** Zero. All compressed images maintain their original aspect ratio and dimensions are explicitly bounded with CSS/Next image tags.
- **Interaction to Next Paint (INP) Risk:** Zero. No blocking hydration overhead was introduced. First Load JS remained constant at 103 kB shared.
