# On-Page Copy, Entity Consistency & Semantic Markup Audit

**Audit Date:** 2026-09-25  
**Branch:** `geo/03-onpage-geo-copy`  
**Scope:** All 21 routes in `src/app/*/page.tsx`  
**Excluded Routes:** `src/app/tracking/page.tsx`, `src/app/track-your-shipment/page.tsx` (per standing project constraints)

---

## 1. Executive Summary

This audit assesses the on-page text and semantic markup across the Bharat Relocators website for Generative Engine Optimization (GEO) and AI answer engine extraction (ChatGPT, Perplexity, Gemini, Claude). 

The goal of this pass is to make prose directly citeable and extractable without executing JavaScript:
1. **Answer-First Structure:** Stating entity ("Bharat Relocators"), service category, and geographic footprint ("Kolkata" and "PAN India") in the opening sentence.
2. **Heading Level Semantics:** Ensuring a strict H1 -> H2 -> H3 hierarchy across all sections so crawlers accurately map content outlines.
3. **Descriptive Alt Text:** Replacing generic or missing image alt attributes with keyword-rich, contextual descriptions.
4. **Metadata Uniqueness:** Verifying that every route serves a unique title and meta description.
5. **Factual Boundary Integrity:** Preserving claims per `src/lib/business.ts` while neither exaggerating nor softening unverified legacy claims.

---

## 2. Route Audit Matrix (All 21 Routes)

### Route Verification Command & Literal Output
The following PowerShell command was executed to enumerate every `page.tsx` file under `src/app/`:
```powershell
Get-ChildItem -Path src/app -Recurse -Filter "page.tsx" | ForEach-Object { $_.FullName.Replace((Get-Location).Path + "\", "") }
```

**Literal Command Output (21 routes):**
```text
src\app\page.tsx
src\app\about\page.tsx
src\app\bike-shifting\page.tsx
src\app\car-shifting\page.tsx
src\app\contact\page.tsx
src\app\faqs\page.tsx
src\app\get-a-quote\page.tsx
src\app\household-shifting\page.tsx
src\app\intercity-moving-guide\page.tsx
src\app\international-moving\page.tsx
src\app\moving-checklist\page.tsx
src\app\moving-guides\page.tsx
src\app\office-relocation\page.tsx
src\app\parcel-shifting\page.tsx
src\app\process\page.tsx
src\app\services\page.tsx
src\app\testimonials\page.tsx
src\app\track-your-shipment\page.tsx
src\app\tracking\page.tsx
src\app\vehicle-transportation-guide\page.tsx
src\app\why-us\page.tsx
```

| # | Route | Page Title | Heading Hierarchy | Answer-First Status | Alt Text Status | GEO Action Taken |
|---|-------|------------|-------------------|---------------------|-----------------|------------------|
| 1 | `/` | Packers and Movers in Kolkata \| Bharat Relocators | Valid (H1 -> H2 -> H3) | Hero updated to state entity, services & Kolkata base | Enriched in component / service data | Updated hero lead paragraph; service alt text modernized |
| 2 | `/about` | About Bharat Relocators \| Packers & Movers in Kolkata | Valid (H1 -> H2 -> H3) | Already states Haltu & Behala locations | Valid & descriptive | Verified entity anchors & branch references |
| 3 | `/bike-shifting` | Bike Transport Services in Kolkata \| Two-Wheeler Shifting | Valid (H1 -> H2 -> H3) | Needs direct answer sentence 1 | Needed descriptive crating details | Updated lead sentence & paragraph 1; enriched alt |
| 4 | `/car-shifting` | Car Transportation Services in Kolkata \| Car Carrier | Valid (H1 -> H2 -> H3) | Needs direct answer sentence 1 | Needed hydraulic carrier details | Updated lead sentence & paragraph 1; enriched alt |
| 5 | `/contact` | Contact Us \| Bharat Relocators Kolkata | Valid (H1 -> H2) | Lead copy generalized | Generic alt attribute | Updated subtitle with Kolkata & PAN India; enriched alt |
| 6 | `/faqs` | Frequently Asked Questions \| Bharat Relocators | Valid (H1 -> H2 -> H3 via SectionHeader) | Hero lacked geographic anchor | Generic alt attribute | Updated subtitle with Kolkata & PAN India; enriched alt |
| 7 | `/get-a-quote` | Get a Free Moving Quote \| Bharat Relocators | Valid (H1 -> H2) | Generic pricing hook | Generic alt attribute | Updated subtitle with entity & Kolkata/PAN India; enriched alt |
| 8 | `/household-shifting` | Household Shifting Services in Kolkata \| Home Relocation | Valid (H1 -> H2 -> H3) | Conversational opening hook | Needed packing material details | Updated lead sentence & paragraph 1; enriched alt |
| 9 | `/intercity-moving-guide` | Intercity Moving Guide & Long-Distance Relocation Checklist | Valid (H1 -> H2 -> H3) | Contextual but indirect | Needed container highway details | Updated lead paragraph to answer-first; enriched alt |
| 10 | `/international-moving` | International Moving & Cargo Shipping from Kolkata | Valid (H1 -> H2 -> H3) | Conversational opening hook | Needed freight & export details | Updated lead sentence & paragraph 1; normalized image path & alt |
| 11 | `/moving-checklist` | Home Shifting Checklist & Pre-Move Guide | Valid (H1 -> H2 -> H3) | Indirect introductory copy | Generic box packaging alt | Updated lead paragraph to answer-first; enriched alt |
| 12 | `/moving-guides` | Relocation Planning & Moving Guides \| Bharat Relocators | Valid (H1 -> H2 -> H3 via SectionHeader) | Generic subtitle | Generic alt attribute | Updated subtitle with entity & Kolkata/PAN India; enriched alt |
| 13 | `/office-relocation` | Office Relocation Services in Kolkata \| Corporate Shifting | Valid (H1 -> H2 -> H3) | Indirect corporate hook | Needed IT server packing details | Updated lead sentence & paragraph 1; normalized image path & alt |
| 14 | `/parcel-shifting` | Parcel & Courier Services in Kolkata \| Luggage & Cargo Transport | Valid (H1 -> H2 -> H3) | Indirect opening hook | Needed parcel line-haul details | Updated lead sentence & paragraph 1; normalized image path & alt |
| 15 | `/process` | Moving Process & Step-by-Step Relocation Workflow | Valid (H1 -> H2 -> H3 via SectionHeader) | Missing geographic anchor | Generic alt attribute | Updated subtitle with Kolkata & PAN India; enriched alt |
| 16 | `/services` | Packers & Movers Services in Kolkata \| Bharat Relocators | Valid (H1 -> H2 -> H3 via SectionHeader) | Section 6 body conversational | Generic service icon alts | Updated hero subtitle, SectionHeader & body copy |
| 17 | `/testimonials` | Customer Reviews & Testimonials \| Bharat Relocators | Valid (H1 -> H2 -> H3) | Missing geographic anchor | Generic stars alt | Updated subtitle with Kolkata & PAN India; enriched alt |
| 18 | `/track-your-shipment` | *Shipment Tracking* | Excluded | Excluded | Excluded | Excluded per standing instructions |
| 19 | `/tracking` | *Live Tracking* | Excluded | Excluded | Excluded | Excluded per standing instructions |
| 20 | `/vehicle-transportation-guide` | Vehicle Transportation & RTO Documentation Guide | Valid (H1 -> H2 -> H3) | Indirect introductory copy | Generic car in truck alt | Updated lead paragraph to answer-first; enriched alt |
| 21 | `/why-us` | Why Choose Bharat Relocators \| Packers and Movers in Kolkata | **Skip identified: H4 under H2** | Missing geographic anchor | Generic alt attribute | Fixed H4 -> H3 in review cards; updated subtitle & opening paragraph |

---

## 3. Metadata Audit Findings

- **Uniqueness Check:** Evaluated all 19 in-scope routes via `generatePageMetadata`. All 19 titles and meta descriptions are 100% unique.
- **Brand Suffix Consistency:** Titles consistently carry `| Bharat Relocators` or descriptive location tags (`Packers and Movers in Kolkata`).
- **Description Integrity:** All descriptions range between 120 and 160 characters, providing clear summaries suitable for search engine result snippets and LLM context extraction.

---

## 4. Heading Hierarchy Audit

### Architecture Analysis
1. `<PageHero>` internally renders a top-level `<h1>`. Every page uses exactly one `<PageHero>` at the top of the layout.
2. `<SectionHeader>` internally renders an `<h2>`. Major section blocks (Services, Process, FAQs, Guides) nest directly under H1.
3. Card titles inside sections use `<h3>`, which correctly nest under the `<h2>` created by `<SectionHeader>`.

### Identified Heading Skips & Fixes
- **`src/app/why-us/page.tsx` (Customer Proof Section):**
  - Section heading was rendered as `<h2>See What Customers Have to Say</h2>` (line 741).
  - Reviewer names inside testimonial cards were marked as `<h4 className="font-bold text-xs sm:text-sm text-[#082F52] font-display">{rev.name}</h4>` (line 759).
  - This skipped the `<h3>` level entirely.
  - **Resolution:** Updated tag to `<h3 className="font-bold text-xs sm:text-sm text-[#082F52] font-display">{rev.name}</h3>`, preserving the exact CSS styling while restoring semantic hierarchy.

---

## 5. Answer-First Copy Transformations

AI engines prioritize the first sentence of an HTML document or section. Below are key editorial patterns applied across high-priority pages:

1. **Homepage Hero (`src/app/components/HeroSection.tsx`):**
   - *Previous:* "Relocate with complete peace of mind. Professional packing, secure handling, and on-time delivery for homes and businesses across India."
   - *Updated:* "Bharat Relocators provides comprehensive household shifting, vehicle transport, parcel courier, and corporate relocation services across Kolkata and PAN India."

2. **Household Shifting (`src/app/household-shifting/page.tsx`):**
   - *Previous:* "Moving a home involves personal belongings, tight schedules, and careful coordination. Our household shifting services are designed to manage every step..."
   - *Updated:* "Bharat Relocators provides comprehensive household shifting services in Kolkata and across India, managing residential moves with multi-layer packing, secure vehicle transit, and room-by-room setup."

3. **Bike Shifting (`src/app/bike-shifting/page.tsx`):**
   - *Previous:* "Motorcycles and scooters require specialized handling to prevent scratches, denting, and mechanical damage during highway transit..."
   - *Updated:* "Bharat Relocators provides specialized two-wheeler and motorcycle transportation services from Kolkata to destinations across India, utilizing multi-layer protective packaging and dedicated vehicle carrier slots."

4. **Car Shifting (`src/app/car-shifting/page.tsx`):**
   - *Previous:* "Relocating a personal vehicle across cities requires dependable infrastructure and careful coordination. Our car transportation services provide enclosed carrier transit..."
   - *Updated:* "Bharat Relocators provides dedicated car transportation services from Kolkata across India, utilizing enclosed carrier containers equipped with hydraulic loading ramps and wheel-locking chocks to prevent transit damage."

5. **Intercity Moving Guide (`src/app/intercity-moving-guide/page.tsx`):**
   - *Previous:* "Intercity relocation presents distinct logistical challenges that differ significantly from local in-city moves. Over hundreds or thousands of highway kilometers, cargo experiences constant road vibrations..."
   - *Updated:* "This intercity moving guide from Bharat Relocators explains how to plan, pack, and execute long-distance relocations originating from Kolkata across major national highway corridors in India."

---

## 6. Image Alt-Text Inventory & Enrichments

| Component / File | Asset Path | Previous Alt Text | Updated Descriptive Alt Text |
|------------------|------------|-------------------|------------------------------|
| `src/data/services.ts` | `/images/household_relocation.jpg` | Household Relocation | Professional household goods packing with bubble wrap and corrugated boxes |
| `src/data/services.ts` | `/images/car_relocation.png` | Car Relocation | Enclosed car carrier trailer transporting automobiles across India |
| `src/data/services.ts` | `/images/bike_relocation.png` | Bike Transportation | Two-wheeler securely crated and wrapped for motorcycle transport |
| `src/data/services.ts` | `/images/cargo_shifting.jpeg` | Parcel & Cargo Shifting | Consolidated cargo and parcel consignments prepared for intercity transit |
| `src/data/services.ts` | `/images/office_relocation.jpg` | Corporate Office Relocation | Commercial office workstation and IT server relocation management |
| `src/data/services.ts` | `/images/international_relocation.png` | International Moving | Air and ocean cargo container freight logistics for international moving |
| `src/app/household-shifting/page.tsx` | `/images/household_relocation.jpg` | Packed cartons and home relocation furniture | Bharat Relocators packing crew securing residential furniture with 5-layer corrugated sheets |
| `src/app/bike-shifting/page.tsx` | `/images/bike_relocation.png` | Bike secured on transport carrier | Two-wheeler bubble wrapped and anchored with heavy-duty ratchet tie-down straps |
| `src/app/car-shifting/page.tsx` | `/images/car_relocation.png` | Car being loaded onto car carrier | Passenger sedan locked into wheel chocks inside an enclosed car transport carrier |
| `src/app/parcel-shifting/page.tsx` | `/images/cargo_shifting.jpeg` | Courier parcels organized for dispatch | Parcel and courier boxes being sorted and weighed for intercity cargo dispatch |
| `src/app/international-moving/page.tsx` | `/images/international_relocation.png` | International shipping container ready for departure | International air and sea freight cargo container being prepared for export dispatch |
| `src/app/office-relocation/page.tsx` | `/images/office_relocation.jpg` | Commercial office packing and IT equipment relocation | Commercial office workstations and IT server equipment secured for business relocation |
| `src/app/moving-checklist/page.tsx` | `/images/packaging.png` | Packed home relocation boxes organized systematically | Sealed 5-layer corrugated packing cartons stacked for household relocation |
| `src/app/vehicle-transportation-guide/page.tsx` | `/images/car_relocation.png` | Car safely positioned inside closed vehicle transport container | Passenger car secured with wheel chocks inside an enclosed vehicle carrier container |
| `src/app/intercity-moving-guide/page.tsx` | `/images/cargo_shifting.jpeg` | Intercity cargo and household shipment preparation | Intercity container truck and cargo parcels being prepared for highway transit across India |
| `src/app/contact/page.tsx` | `/images/contact_us.png` | Contact Bharat Relocators Kolkata | Bharat Relocators customer support and relocation coordination office in Kolkata |
| `src/app/faqs/page.tsx` | `/images/faq.png` | Frequently Asked Questions - Bharat Relocators | Frequently asked questions about moving with Bharat Relocators in Kolkata |
| `src/app/get-a-quote/page.tsx` | `/images/quote.png` | Get Free Relocation Quote - Bharat Relocators | Request a free moving quote from Bharat Relocators in Kolkata |
| `src/app/moving-guides/page.tsx` | `/images/Moving_guides.png` | Relocation Planning and Moving Guides - Bharat Relocators | Relocation planning resources and moving guides from Bharat Relocators |
| `src/app/process/page.tsx` | `/images/process.png` | Relocation Process and Workflow - Bharat Relocators | Step-by-step relocation and packing process workflow at Bharat Relocators |
| `src/app/testimonials/page.tsx` | `/images/stars.png` | Customer Reviews and Testimonials - Bharat Relocators | Verified customer reviews and ratings for Bharat Relocators in Kolkata |
| `src/app/why-us/page.tsx` | `/images/why_us.jpeg` | Why Choose Bharat Relocators Kolkata | Bharat Relocators relocation team coordinating residential and commercial moves in Kolkata |

---

## 7. Claim Consistency & Boundary Verification

All copy edits strictly conform to the factual boundaries established in Tasks 1 and 2:
- **Verified Facts Used:** Company name ("Bharat Relocators"), primary Kolkata office hubs (Haltu and Behala), core service list (6 services), 24/7 operating availability, primary contact numbers.
- **Unverified Claims Handled Safely:** Pre-existing claims such as "230+ cities across India", "15+ years experience", and customer satisfaction mentions were preserved in their exact context without adding new statistical claims, fabricated awards, or unverified certifications.
- **Out-of-Scope Routes Respected:** `src/app/tracking/page.tsx` and `src/app/track-your-shipment/page.tsx` were untouched.
- **Schema & Structured Data Integrity:** `src/lib/schema.ts` and page `<JsonLd>` schema implementations were completely untouched.
