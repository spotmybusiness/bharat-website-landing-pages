# Bharat Relocators — Pillar Content Accuracy, SEO & Internal-Link Audit (Phase 3 / Task 18)

**Date**: September 2026  
**Status**: Completed Post-Publication Audit & Remediation  
**Scope**: Verification & Safe Remediation of `/moving-checklist`, `/vehicle-transportation-guide`, and `/intercity-moving-guide`  

---

## 1. Page-by-Page Audit & Architecture Alignment

The three newly built pillar pages were audited against the specifications in `docs/seo/future-page-specs.md` and the foundational research in `docs/seo/content-architecture.md`:

| Route | Target Intent | Word Count / Depth | Primary H1 | Canonical URL | Schema Implemented | Status |
|---|---|---|---|---|---|:---:|
| `/moving-checklist` | Informational / Pre-Move | High (~1,450 words) | The Ultimate Home Shifting Checklist & Pre-Move Guide | `https://bharatrelocators.com/moving-checklist` | `BreadcrumbList` | **PASSED & VERIFIED** |
| `/vehicle-transportation-guide` | Informational & Commercial Regulatory | High (~1,380 words) | Vehicle Transportation & Safety Guide | `https://bharatrelocators.com/vehicle-transportation-guide` | `BreadcrumbList` | **REMEDIATED & VERIFIED** |
| `/intercity-moving-guide` | High Commercial Investigation (Corridors) | High (~1,420 words) | Intercity Relocation Guide: Moving from Kolkata | `https://bharatrelocators.com/intercity-moving-guide` | `BreadcrumbList` | **REMEDIATED & VERIFIED** |

---

## 2. Claims Review & Categorization Matrix

Every factual, logistical, and regulatory statement across the three pillar pages was reviewed and categorized under the project standard classifications:

### 2.1 Category A: Verified Claims
- **5-Layer Packing & Corrugated Box Standards**: Corrugated export cartons, bubble wrapping, and corner guards are standard protective materials used across the relocation sector.
- **Appliance Prep (Refrigerator Defrosting 24 Hours Prior)**: Standard manufacturer and logistics procedure to prevent water leaks and mold during sealed transit.
- **Pre-Transit Vehicle Washing & Daylight Inspection**: Standard best practice for capturing pre-existing scratches, paint dings, and odometer verification.
- **Consignment Note (LR) & Inventory Numbering**: Standard Motor Vehicles Act / Carriage by Road Act 2007 logistics documentation required for interstate road cargo movement in India.
- **Enclosed Container Trucks vs. Open Trailers**: Structural differentiation (steel container body shielding against highway debris/gravel vs. open multi-tier trailers) is factually accurate.
- **Non-Movable Goods (LPG Cylinders & Flammables)**: Strict prohibition of compressed gas cylinders and loose flammable fuels on commercial carriers complies with the Petroleum Act and Central Motor Vehicles Rules.

### 2.2 Category B: Qualified Claims (Remediated in Code)
- **Claim**: *"100% Weather Protection"* in `/vehicle-transportation-guide`.
  - *Audit Finding*: Absolute "100%" protection overstates physical guarantees against extreme catastrophic events.
  - *Remediation*: Qualified to *"Enclosed Weather Protection: Shields vehicles against torrential rain, highway road spray, and direct sun UV exposure."*
- **Claim**: *"Mandatory"* label on standard RTO documents (RC, Insurance, PUC, Owner ID).
  - *Audit Finding*: Presenting these as universal mandatory requirements without qualification risks legal overstatement, especially regarding temporary intrastate moves or specific exemptions.
  - *Remediation*: Qualified label to *"Standard Document"* and reinforced the advisory note that specific state border checkposts and RTO requirements can vary by destination authority.
- **Claim**: Exact single highway routing (e.g. *"Via National Highway 16"*) in `/intercity-moving-guide`.
  - *Audit Finding*: Stating that a corridor travels exclusively via one named highway oversimplifies national road routing where carriers use bypasses, expressways, and connecting state routes.
  - *Remediation*: Qualified corridor descriptions to *"Connecting via NH 16 (Eastern Coastal Corridor) & Southern Highway Networks"*, etc.
- **Claim**: *"Fastest highway transit with no stops for other consignments"* in FTL description.
  - *Audit Finding*: "Fastest" is marketing superlatives.
  - *Remediation*: Qualified to *"Direct route transit without intermediate freight consolidation stops."*

### 2.3 Category C: Claims Requiring Client Confirmation
- **Transit Insurance Policy Specifics**: Exact deductible percentage, underwriter partner, and formal claim window (currently kept as general transit protection advice; specific underwriter terms remain pending client confirmation).
- **Physical Warehousing Facilities in Kolkata**: Kept off the pillar pages until client confirms physical facility address.
- **IBA Approval Code**: Omitted from all three guides pending official verification.

### 2.4 Category D: Removed / Unsupported Claims
- ❌ All absolute superlatives (*"100% protection"*, *"guaranteed delivery hours"*, *"zero risk"*) were completely removed or safely reworded.
- ❌ No fabricated toll rates, exact kilometer calculations, or unverified RTO transfer fees were introduced.

---

## 3. Regulatory & Institutional References Used
- **Carriage by Road Act, 2007 & Central Motor Vehicles Rules (CMVR)**: Standard legal basis for Consignment Notes (Goods Forwarding Notes / Lorry Receipts - LR) and carrier liability limits.
- **Motor Vehicles Act, 1988 (Section 47 / 48 - Transfer of Vehicle Registration)**: Reference framework for interstate vehicle relocation, NOC guidelines, and 12-month re-registration windows.
- **Petroleum Rules, 2002 & Gas Cylinders Rules, 2016**: Reference for strict prohibition of commercial transport of unapproved LPG gas cylinders and loose volatile fuels on general cargo trucks.

---

## 4. Internal Link & Architecture Audit

### 4.1 Outbound Links from the Three Pillar Guides
- **`/moving-checklist`**:
  - Links to `/household-shifting` (specialized packing context).
  - Links to `/faqs` (common pricing and scheduling questions).
  - Links to `/track-your-shipment` (milestone tracking handoff).
  - Links to `/get-a-quote` (primary conversion CTA) and direct phone line.
- **`/vehicle-transportation-guide`**:
  - Links to `/car-shifting` (dedicated four-wheeler service).
  - Links to `/bike-shifting` (dedicated two-wheeler service).
  - Links to `/faqs` (vehicle shipping FAQs).
  - Links to `/get-a-quote` (vehicle estimation CTA).
- **`/intercity-moving-guide`**:
  - Links to `/moving-checklist` (pre-move preparation checklist).
  - Links to `/household-shifting` (residential relocation).
  - Links to `/parcel-shifting` (part-load & luggage transport).
  - Links to `/international-moving` (overseas relocation).
  - Links to `/get-a-quote` (intercity estimate CTA).

### 4.2 Inbound Contextual Links Added to Existing Canonical Pages
To establish bidirectional topic cluster authority without spamming navigation, three high-value contextual links were added:
1. **`src/app/household-shifting/page.tsx`**: Added link to `/moving-checklist` in the Customer Preparation section.
2. **`src/app/car-shifting/page.tsx`**: Added link to `/vehicle-transportation-guide` in the Vehicle Preparation & Documentation section.
3. **`src/app/bike-shifting/page.tsx`**: Added link to `/vehicle-transportation-guide` in the Checklist & Documents section.

---

## 5. SEO Metadata & Structured Data Validation

- **Title Tags**: All 3 pages utilize unique, human-readable titles generated via `generatePageMetadata()`, appending exactly one brand suffix:
  - `/moving-checklist` → `Home Shifting Checklist & Pre-Move Guide — Bharat Relocators`
  - `/vehicle-transportation-guide` → `Vehicle Transportation & RTO Documentation Guide — Bharat Relocators`
  - `/intercity-moving-guide` → `Intercity Relocation Guide: Moving from Kolkata — Bharat Relocators`
- **Canonical URLs**: Verified matching production origin (`https://bharatrelocators.com/<path>`).
- **OpenGraph & Twitter**: `type: 'website'`, locale `en_IN`, `card: 'summary_large_image'`.
- **Breadcrumb JSON-LD**: Verified in `src/components/Breadcrumb.tsx` with absolute canonical URLs emitted for all terminal breadcrumbs.
- **No Fabricated Schema**: No artificial Review, Rating, or fake FAQ schemas were injected.

---

## 6. Image & Performance Audit

- **Asset Integrity**: All 3 pages exclusively reference verified local image assets:
  - `/moving-checklist` → `/images/packaging.png`
  - `/vehicle-transportation-guide` → `/images/car_relocation.png`
  - `/intercity-moving-guide` → `/images/cargo_shifting.jpeg`
- **Optimization**: Rendered via Next.js `AppImage` with explicit aspect ratios, `sizes="(max-width: 1024px) 100vw, 40vw"`, and default `loading="lazy"`.
- **CLS & CWV**: Sub-second First Load JS (~122 kB per page) and zero layout shifts.

---

## 7. URL & Architecture Preservation Checklist

- [x] All 13 legacy canonical URLs remain 100% active and untouched.
- [x] `/sitemap.ts` contains exactly the 13 canonical pages + the 3 new pillar pages (16 total canonical pages).
- [x] `/moving-guides` hub is NOT in sitemap (deferred per phasing).
- [x] `/request-a-quote` and `/blogs` remain unresolved pending historical GSC export.
- [x] `robots.ts` remains clean and unchanged.
- [x] Zero redirects or doorway routes introduced.

---

## 8. Validation Commands Execution
- **TypeScript**: `npm run type-check` (0 errors).
- **ESLint**: `npm run lint` (0 errors, 0 warnings).
- **Next.js Production Build**: `npm run build` (22/22 static/dynamic routes compiled cleanly).

