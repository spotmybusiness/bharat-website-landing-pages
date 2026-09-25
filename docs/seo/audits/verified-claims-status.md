# Bharat Relocators — Live Copy Claims Verification Ledger

**Audit Date:** 2026-09-25  
**Audit Scope:** Comprehensive inventory of all quantitative, statistical, certification, SLA, and operating claims currently displayed across the `src/` codebase.  
**Standing Rule:** Per Constraint 3, no copy edits or resolutions were made in this task. This document catalogs findings for review and client sign-off.

---

## 1. Executive Summary

An exhaustive scan across all `.ts` and `.tsx` source files under `src/` was conducted to track every numerical, certification, and operational claim displayed to users and crawlers.

Each claim is evaluated against:
1. `BUSINESS` in `src/lib/business.ts` (Verified single source of truth — approved for schema and marketing)
2. `UNVERIFIED` in `src/lib/business.ts` (Flagged as unverified, pending certificate/client proof — NOT safe for schema)
3. Neither (Present in visible copy or component definitions, but absent from `src/lib/business.ts`)
4. Cross-reference to `docs/seo/claim-verification-audit.md`

---

## 2. Comprehensive Claims Status Table

| # | Claim | Visible Copy Locations (`src/`) | Source Backing in `business.ts` | `claim-verification-audit.md` Classification | Risk & Recommended Action |
|---|---|---|:---:|:---:|---|
| **1** | **58,000+ Packages / Relocations Delivered** | • `src/app/components/StatsSection.tsx` (l. 13)<br>• `src/app/components/AboutSection.tsx` (l. 131)<br>• `src/app/components/WhyChooseSection.tsx` (l. 207)<br>• `src/app/about/page.tsx` (l. 119, 282) | **Neither** | **NEEDS CLIENT CONFIRMATION** (#14) | **High Risk.** Major volume milestone displayed prominently. Keep in copy for now, but do NOT assert in JSON-LD until confirmed against client billing records. |
| **2** | **230+ Cities Covered** | • `src/app/components/StatsSection.tsx` (l. 14)<br>• `src/app/components/HeroSection.tsx` (l. 527)<br>• `src/app/components/ServicesSection.tsx` (l. 153)<br>• `src/app/about/page.tsx` (l. 125)<br>• `src/app/parcel-shifting/page.tsx` (l. 23, 102, 185)<br>• `src/app/services/page.tsx` (l. 42, 80, 121)<br>• `src/app/faqs/page.tsx` (l. 42)<br>• `src/data/services.ts` (l. 90)<br>• `public/llms.txt` (l. 12, 45, 154) | **Neither** | **PARTIALLY VERIFIED** (#15) | **Moderate Risk.** Plausible PAN-India network claim from baseline homepage. Client should confirm destination hub network list before asserting as a rigid network claim. |
| **3** | **4.9★ Google Rating** | • `src/app/components/StatsSection.tsx` (l. 15)<br>• `src/app/components/GoogleBusinessProfileCard.tsx` (l. 120, 190)<br>• `src/app/components/TestimonialsSection.tsx` (l. 19)<br>• `src/app/about/page.tsx` (l. 131)<br>• `src/app/why-us/page.tsx` (l. 21, 62)<br>• `src/app/testimonials/page.tsx` (l. 16, 85)<br>• `src/app/testimonials/ReviewsInteractiveView.tsx` (l. 74)<br>• `src/components/Footer.tsx` (l. 157) | **`BUSINESS.google.rating`** (4.9) | **VERIFIED** (#7) | **Zero Risk.** Fully backed by GBP audit screenshot and verified business constants. Safe for structured data (`AggregateRating`). |
| **4** | **305+ Verified Reviews** | • `src/app/components/StatsSection.tsx` (l. 16)<br>• `src/app/components/GoogleBusinessProfileCard.tsx` (l. 121, 192)<br>• `src/app/components/TestimonialsSection.tsx` (l. 20)<br>• `src/app/about/page.tsx` (l. 137)<br>• `src/app/why-us/page.tsx` (l. 22, 63)<br>• `src/app/testimonials/page.tsx` (l. 17, 86)<br>• `src/app/testimonials/ReviewsInteractiveView.tsx` (l. 76)<br>• `src/components/Footer.tsx` (l. 158) | **`BUSINESS.google.reviewCount`** (305) | **VERIFIED** (#8) | **Zero Risk.** Verified against GBP profile. Safe for schema assertions. Note: Behala secondary profile has 9 reviews (5.0★). |
| **5** | **98% Customer Satisfaction Rate** | • `src/app/components/StatsSection.tsx` (l. 17)<br>• `src/app/about/page.tsx` (l. 143) | **Neither** | **UNSUPPORTED** (#16, formerly listed as 96%) | **High Risk.** Discrepancy observed: `claim-verification-audit.md` audited `96%`, while codebase currently has `98%`. No empirical survey dataset exists in repo. Do NOT assert in JSON-LD. |
| **6** | **Over 96% On-Time Delivery Record** | • `src/app/components/WhyChooseSection.tsx` (l. 9)<br>• `src/app/why-us/page.tsx` (l. 34, 178) | **Neither** | **PARTIALLY VERIFIED** (#17) | **Moderate Risk.** Specific operational SLA percentage. Phrased as an empirical operational metric; client should confirm whether internal dispatch logs substantiate 96%. |
| **7** | **15+ Years Experience / Operations** | • `src/app/components/StatsSection.tsx` (l. 18)<br>• `src/app/components/AboutSection.tsx` (l. 132)<br>• `src/app/components/HeroSection.tsx` (l. 526)<br>• `src/app/about/page.tsx` (l. 149)<br>• `src/app/why-us/page.tsx` (l. 172, 223)<br>• `src/app/process/page.tsx` (l. 103)<br>• `src/app/moving-checklist/page.tsx` (l. 21)<br>• `src/app/vehicle-transportation-guide/page.tsx` (l. 21)<br>• `src/app/intercity-moving-guide/page.tsx` (l. 21) | **Neither** | **PARTIALLY VERIFIED** (#13) | **Moderate Risk.** Exact incorporation/founding year is not documented in `BUSINESS`. Client needs to confirm founding year (e.g., 2009–2011) to substantiate "15+ years" and support schema `foundingDate`. |
| **8** | **ISO 9001:2015 & ISO 3900:2012 Certifications** | • `src/app/components/HeroSection.tsx` (l. 500)<br>• `src/app/components/AboutSection.tsx` (l. 119)<br>• `src/app/components/WhyChooseSection.tsx` (l. 173)<br>• `src/app/about/page.tsx` (l. 22, 269)<br>• `src/app/why-us/page.tsx` (l. 20, 61, 191, 198)<br>• `src/components/Footer.tsx` (l. 163)<br>• `src/components/PageHero.tsx` (l. 152) | **`UNVERIFIED.isoCertifications`** | **NEEDS CLIENT CONFIRMATION** (#11, #12) | **Critical Risk.** Displayed across 7 components/pages. Neither certificate numbers nor issuing registrars are in the repo (`isoCertificateDetails = 'Pending client input'`). Standard road traffic safety standard is ISO 39001:2012 (repo has ISO 3900:2012). Must NEVER be added to JSON-LD until certificates are provided. |
| **9** | **Operating Hours: Monday–Sunday 24 Hours Open** | • `src/app/components/FAQSection.tsx` (l. 125: "available 24/7")<br>• `src/app/components/WhyChooseSection.tsx` (l. 62: "24x7 Helpdesk")<br>• `src/app/components/GoogleBusinessProfileCard.tsx` (l. 196: "Open 24 Hours")<br>• `src/app/why-us/page.tsx` (l. 110: "24x7 Dedicated Support") | **`BUSINESS.hours`** (Confirmed 24/7) | **VERIFIED FOR STRUCTURED DATA** (#20) | **Zero Risk for Schema/Site.** Hours are client-confirmed (`BUSINESS.hours.openingHoursSpecification` covering Mo-Su 00:00-23:59) and safe to use in structured data and site copy. The only open item is external consistency: the live Google Business Profile listing currently shows Mon–Sat 8:00 AM–7:00 PM; client should be advised to update that external listing for consistency. |
| **10** | **Quote Turnaround within 3 Hours** | • `src/app/components/FAQSection.tsx` (l. 8)<br>• `src/app/page.tsx` (l. 16)<br>• `src/app/components/ServicesSection.tsx` (l. 326)<br>• `src/app/components/HowItWorksSection.tsx` (l. 221)<br>• `src/app/components/QuoteSection.tsx` (l. 242)<br>• Service pages (`household-shifting`, `car-shifting`, `bike-shifting`, `office-relocation`, `parcel-shifting`, `international-moving`) | **Neither** | **NEEDS CLIENT CONFIRMATION** (#19) | **Low Operational Risk.** Prominent turnaround promise across all lead flows. Ensure dispatch team reliably meets this SLA. |
| **11** | **Price Band: 1BHK Kolkata Local Move Starts ₹4,000–₹8,000** | • `src/app/components/FAQSection.tsx` (l. 8)<br>• `src/app/page.tsx` (l. 16)<br>• `src/data/faqs.ts` (l. 11)<br>• `src/app/household-shifting/page.tsx` (l. 88) | **Neither** | **VERIFIED (Estimate)** | **Low Risk.** Indicative price bracket clearly phrased as subject to survey and volume. Safe as informational FAQ estimate. |

---

## 3. High-Priority Action Items for Project Lead / Client

1. **ISO Certificates Proof**: Request certificate scans and registration numbers for ISO 9001:2015 and ISO 39001:2012. If unconfirmed, soften footer/badge copy in a future task before agentic indexing.
2. **Founding Year**: Request exact incorporation date (e.g. 2009) to solidify "15+ Years" and enable `@type: LocalBusiness` `foundingDate` in Task 2 schema graph.
3. **Satisfaction Metric Alignment**: Decide whether to retain "98% Customer Satisfaction" as customer-promise copy or qualify it with survey parameters.
4. **Google Business Profile Operating Hours Update**: Advise the client to update the public Google Business Profile listing from Mon–Sat 8:00 AM–7:00 PM to 24 Hours Open (Monday to Sunday) so external search profiles match the confirmed website operations and structured data.
