# Legacy URL Inventory Audit & Redirect Decision Map
**Bharat Relocators — bharatrelocators.com**
*Status: Audit & Decision Map Only. Zero redirects implemented.*

---

## 1. Executive Summary

This document establishes the verified inventory of all legacy URLs identified from the live website audits, repository scans, and discovery crawls. Each URL is classified according to its preservation status, canonical destination, and Google Search Console (GSC) verification requirements.

**Critical Rule:** No redirect rules (301/302), middleware redirects, or server-level rewrites are implemented in this task. Redirect implementation is deferred until Search Console indexation and performance data can be exported and reviewed.

---

## 2. Legacy URL Inventory & Classification Table

| # | Legacy URL | Current Repository Route | Current Canonical Destination | Proposed Destination | Classification | Reason | GSC Verification Required? | Notes |
|---|---|---|---|---|---|---|---|---|
| 1 | `https://bharatrelocators.com/` | `src/app/page.tsx` | `https://bharatrelocators.com` | `https://bharatrelocators.com` | **PRESERVE** | Primary homepage and brand baseline. | No | Canonical origin established in root layout. |
| 2 | `https://bharatrelocators.com/about` | `src/app/about/page.tsx` | `https://bharatrelocators.com/about` | `https://bharatrelocators.com/about` | **PRESERVE** | Existing core company page. | No | Fully implemented as a standalone page. |
| 3 | `https://bharatrelocators.com/household-shifting` | `src/app/household-shifting/page.tsx` | `https://bharatrelocators.com/household-shifting` | `https://bharatrelocators.com/household-shifting` | **PRESERVE** | Existing high-value service page. | No | Preserved at flat canonical URL. |
| 4 | `https://bharatrelocators.com/bike-shifting` | `src/app/bike-shifting/page.tsx` | `https://bharatrelocators.com/bike-shifting` | `https://bharatrelocators.com/bike-shifting` | **PRESERVE** | Existing high-value service page. | No | Preserved at flat canonical URL. |
| 5 | `https://bharatrelocators.com/car-shifting` | `src/app/car-shifting/page.tsx` | `https://bharatrelocators.com/car-shifting` | `https://bharatrelocators.com/car-shifting` | **PRESERVE** | Existing high-value service page. | No | Preserved at flat canonical URL. |
| 6 | `https://bharatrelocators.com/parcel-shifting` | `src/app/parcel-shifting/page.tsx` | `https://bharatrelocators.com/parcel-shifting` | `https://bharatrelocators.com/parcel-shifting` | **PRESERVE** | Existing high-value service page. | No | Preserved at flat canonical URL. |
| 7 | `https://bharatrelocators.com/international-moving` | `src/app/international-moving/page.tsx` | `https://bharatrelocators.com/international-moving` | `https://bharatrelocators.com/international-moving` | **PRESERVE** | Existing high-value service page. | No | Preserved at flat canonical URL. |
| 8 | `https://bharatrelocators.com/office-relocation` | `src/app/office-relocation/page.tsx` | `https://bharatrelocators.com/office-relocation` | `https://bharatrelocators.com/office-relocation` | **PRESERVE** | Existing high-value service page. | No | Preserved at flat canonical URL. |
| 9 | `https://bharatrelocators.com/testimonials` | `src/app/testimonials/page.tsx` | `https://bharatrelocators.com/testimonials` | `https://bharatrelocators.com/testimonials` | **PRESERVE** | Existing customer reviews page. | No | Fully implemented with verified reviews. |
| 10 | `https://bharatrelocators.com/faqs` | `src/app/faqs/page.tsx` | `https://bharatrelocators.com/faqs` | `https://bharatrelocators.com/faqs` | **PRESERVE** | Existing FAQ knowledge base page. | No | Fully implemented with FAQPage schema. |
| 11 | `https://bharatrelocators.com/contact` | `src/app/contact/page.tsx` | `https://bharatrelocators.com/contact` | `https://bharatrelocators.com/contact` | **PRESERVE** | Existing contact page. | No | Fully implemented with verified NAP and map. |
| 12 | `https://bharatrelocators.com/request-a-quote` | None (currently 404) | `https://bharatrelocators.com/get-a-quote` | `https://bharatrelocators.com/get-a-quote` | **MIGRATE — REDIRECT CANDIDATE** | Legacy quotation form path on old live site. Candidate for 301 to `/get-a-quote`. | **Yes (Pending GSC export)** | Must verify if old URL has active indexed impressions or backlinks before finalizing redirect rule. |
| 13 | `https://bharatrelocators.com/blogs` | None (currently 404) | None | `https://bharatrelocators.com/` (or future blog hub) | **MIGRATE — REDIRECT CANDIDATE** | Legacy blog index path on old live site. No articles currently exist in repository. | **Yes (Pending GSC export)** | Needs GSC check: if old `/blogs` has indexed posts or backlinks, map to blog/resource hub or specific articles. |
| 14 | `https://bharatrelocators.com/sitemap.xml` | `src/app/sitemap.ts` | `https://bharatrelocators.com/sitemap.xml` | `https://bharatrelocators.com/sitemap.xml` | **PRESERVE** | System discovery endpoint. | No | Emits all 13 canonical URLs. |
| 15 | `https://bharatrelocators.com/robots.txt` | `src/app/robots.ts` | `https://bharatrelocators.com/robots.txt` | `https://bharatrelocators.com/robots.txt` | **PRESERVE** | System crawler control endpoint. | No | Fully configured. |

---

## 3. Host-Level & Protocol Duplication Audit (REVIEW Classification)

The deep crawl in Phase 0 / Task 02 identified duplicate indexation across protocol and subdomain variants on the live Hostinger infrastructure:

| Domain / Protocol Variant | Live Site Status | Target Architecture Resolution | Classification | GSC Verification Required? | Action Plan |
|---|---|---|---|---|---|
| `https://www.bharatrelocators.com/*` (www HTTPS) | Live duplicate (200 OK) | 301 redirect to `https://bharatrelocators.com/*` | **REVIEW** | **Yes** | Configure 301 redirect rule at server/host level (.htaccess or hosting config) during production cutover. |
| `http://bharatrelocators.com/*` (non-www HTTP) | Insecure HTTP | 301 redirect to `https://bharatrelocators.com/*` | **REVIEW** | No | Enforce HTTPS via server-level SSL redirect. |
| `http://www.bharatrelocators.com/*` (www HTTP) | Insecure HTTP www | 301 redirect to `https://bharatrelocators.com/*` | **REVIEW** | No | Enforce HTTPS + non-www via server-level redirect. |

---

## 4. Summary of Classification Counts

- **PRESERVE**: **13** public canonical URLs (plus 2 system endpoints: `sitemap.xml`, `robots.txt`)
- **MIGRATE — REDIRECT CANDIDATE**: **2** URLs (`/request-a-quote`, `/blogs`)
- **REVIEW**: **3** host-level / protocol variants (`www` HTTPS, HTTP non-www, HTTP www)
- **UNKNOWN**: **0** URLs

---

## 5. Decision Gates for GSC-Dependent URLs

### A. `/request-a-quote`
- **Current State**: New dedicated quote page is implemented at `/get-a-quote`.
- **Decision Criteria**:
  1. If GSC export shows indexed clicks/impressions on `/request-a-quote`: Implement server-level 301 redirect from `/request-a-quote` to `/get-a-quote`.
  2. If GSC shows zero traffic/backlinks and `/get-a-quote` is the only live page: Implement 301 redirect to ensure no broken external bookmarks.
- **Status**: **Pending GSC export**.

### B. `/blogs`
- **Current State**: No blog articles or blog directory exist in the current Next.js repository.
- **Decision Criteria**:
  1. If GSC shows indexed legacy blog posts with active search impressions: Retain URL list and create corresponding content or 301 map to relevant service/resource pages.
  2. If GSC shows no historical traffic or soft-404 status: Redirect to homepage or future resource hub.
- **Status**: **Pending GSC export**.

