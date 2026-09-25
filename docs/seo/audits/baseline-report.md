# Bharat Relocators — Baseline Audit & Performance Report

**Date:** 2026-09-25  
**Branch:** `geo/01-baseline-and-truth-in-html`  
**Base Commit Hash:** `f724d4812ff30866e01b47278aab4d3f7dc24553`  
**Status:** Baseline Established & Verified Clean  

---

## 1. Environment & Build Baseline Verification

Prior to applying any modifications for Task 1, all standard package validation and build steps were executed from a clean working tree at commit `f724d4812ff30866e01b47278aab4d3f7dc24553`:

| Check | Command | Result | Notes |
|---|---|:---:|---|
| Package Installation | `npm install` | **PASS (0 errors)** | 497 packages audited, up to date |
| TypeScript Validation | `npm run type-check` | **PASS (0 errors)** | `tsc --noEmit` exited with code 0 |
| ESLint Static Analysis | `npm run lint` | **PASS (0 errors)** | 0 warnings, 0 errors |
| Production Build | `npm run build` | **PASS (0 errors)** | 27/27 static/dynamic pages prerendered cleanly in ~13s |

---

## 2. Route & Bundle Size Baseline Snapshot

Captured from the baseline `npm run build` output across all 27 App Router routes:

```
Route (app)                                 Size  First Load JS
┌ ○ /                                    20.7 kB         150 kB
├ ○ /_not-found                            138 B         103 kB
├ ○ /about                                 964 B         118 kB
├ ƒ /api/google-reviews                    138 B         103 kB
├ ƒ /api/track                             138 B         103 kB
├ ○ /bike-shifting                         964 B         118 kB
├ ○ /car-shifting                          964 B         118 kB
├ ○ /contact                               327 B         112 kB
├ ○ /faqs                                6.51 kB         119 kB
├ ○ /get-a-quote                           328 B         118 kB
├ ○ /household-shifting                    964 B         118 kB
├ ○ /intercity-moving-guide              1.37 kB         119 kB
├ ○ /international-moving                  964 B         118 kB
├ ○ /moving-checklist                    1.37 kB         119 kB
├ ○ /moving-guides                         327 B         112 kB
├ ○ /office-relocation                     964 B         118 kB
├ ○ /parcel-shifting                       964 B         118 kB
├ ○ /process                               946 B         113 kB
├ ○ /robots.txt                            138 B         103 kB
├ ○ /services                              964 B         118 kB
├ ○ /sitemap.xml                           138 B         103 kB
├ ○ /testimonials                        4.59 kB         122 kB
├ ○ /track-your-shipment                   138 B         103 kB
├ ○ /tracking                              329 B         119 kB
├ ○ /vehicle-transportation-guide        1.37 kB         119 kB
└ ○ /why-us                                946 B         113 kB
+ First Load JS shared by all             103 kB
  ├ chunks/255-37e0f0325134c4d7.js       46.4 kB
  ├ chunks/4bd1b696-c023c6e3521b1417.js  54.2 kB
  └ other shared chunks (total)             2 kB

○ (Static)  prerendered as static content
ƒ (Dynamic) server-rendered on demand
```

### Shared Bundle Analysis
- Shared initial client bundle size is compact at **103 kB** across all routes.
- The heaviest pages are the homepage `/` (20.7 kB route size / 150 kB first load JS) due to GSAP animation dependencies and interactive components (`HeroSection`, `TrackingInteractiveView`, `TestimonialsSection`, `QuoteSection`), followed by `/faqs` (6.51 kB / 119 kB) and `/testimonials` (4.59 kB / 122 kB).
- Service and guide pages share a uniform, lightweight ~964 B to 1.37 kB footprint (~118–119 kB First Load JS).

---

## 3. Lighthouse / PageSpeed Insights Baseline Status

### Local Environment Capability Note
The local Windows execution environment does not have global `lighthouse` CLI or a headless Chrome browser binary available in the system PATH, and no browser-automation MCP server is active in the environment. Per instructions, this is explicitly documented rather than estimated or simulated.

PageSpeed Insights audit scores will be run manually by the project lead against the deployed preview environment and recorded below:

| Page / Route Archetype | Device | Performance | Accessibility | Best Practices | SEO | Agentic Browsing Pass Ratio |
|---|---|:---:|:---:|:---:|:---:|:---:|
| **Homepage** (`/`) | Mobile | *Pending User Run* | *Pending User Run* | *Pending User Run* | *Pending User Run* | *Pending User Run* |
| **Homepage** (`/`) | Desktop | *Pending User Run* | *Pending User Run* | *Pending User Run* | *Pending User Run* | *Pending User Run* |
| **Service Page** (`/household-shifting`) | Mobile | *Pending User Run* | *Pending User Run* | *Pending User Run* | *Pending User Run* | *Pending User Run* |
| **Service Page** (`/household-shifting`) | Desktop | *Pending User Run* | *Pending User Run* | *Pending User Run* | *Pending User Run* | *Pending User Run* |
| **Pillar Guide** (`/moving-checklist`) | Mobile | *Pending User Run* | *Pending User Run* | *Pending User Run* | *Pending User Run* | *Pending User Run* |
| **Pillar Guide** (`/moving-checklist`) | Desktop | *Pending User Run* | *Pending User Run* | *Pending User Run* | *Pending User Run* | *Pending User Run* |

*(Note: Target performance threshold is 95+ across all four standard categories on both mobile and desktop.)*

---

## 4. Verification Harness Added

In Part B of Task 1, a unified verification script was added to `package.json`:
```json
"verify": "npm run type-check && npm run lint && npm run build"
```
This script acts as the automated gate for all subsequent tasks.
