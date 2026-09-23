# Bharat Relocators — Commercial Landing Page Strategy & Expansion Map
**Phase:** Phase 4 / Task 23  
**Date:** September 2026  
**Status:** STRATEGY & RESEARCH — DO NOT BUILD YET  
**Author:** AI Research Agent (AGY)

---

## 1. Executive Summary

This document converts live SERP research and internal content-architecture analysis into a precise build/no-build decision for every serious candidate commercial landing page.

**Key findings:**
- The existing 16-route architecture is solid. The `/intercity-moving-guide` pillar **already satisfies** most broad route queries — standalone thin route pages are not warranted.
- The highest-ROI Phase 4 work is **service-specific city or district service pages** and **existing-page enhancements** — not route duplication.
- South Kolkata location (`/household-shifting-kolkata`) is the single strongest commercially viable new URL candidate, grounded in clear local service area distinction.
- Only **3 net-new pages** pass the strict BUILD NOW threshold; all others are either STRENGTHEN EXISTING PAGE or DO NOT BUILD.

---

## 2. Research Methodology

### 2.1 Source Documents Reviewed
1. `docs/seo/search-intent-map.md` — Intent mapping for all 16 canonical routes.
2. `docs/seo/content-gap-analysis.md` — Gap assessment and doorway risk guidelines.
3. `docs/seo/content-architecture.md` — Blueprint and URL strategy.
4. `docs/seo/future-page-specs.md` — Pillar guide specifications.
5. `docs/seo/claim-verification-audit.md` — Fact verification audit.
6. `docs/seo/phase-3-final-audit.md` — Phase 3 completion & readiness status.
7. `src/app/office-relocation/page.tsx` — B2B cannibalization baseline.

### 2.2 Live SERP Research Clusters Investigated

| Research Cluster | Query Examples Used |
|---|---|
| Household shifting Kolkata | `household shifting services Kolkata 2024`, `house shifting Kolkata cost` |
| Route corridors outbound | `movers Kolkata to Bangalore`, `packers Kolkata to Hyderabad`, `household shifting Kolkata to Delhi` |
| Car transport routes | `car transport Kolkata to Delhi/Mumbai/Pune`, `enclosed car carrier Kolkata` |
| Bike transport routes | `bike transport Kolkata to Mumbai/Pune/Hyderabad`, `two-wheeler shipping Kolkata` |
| Office/B2B corporate | `office relocation Kolkata Salt Lake New Town IT company` |
| Parcel & cargo | `parcel cargo luggage transport Kolkata intercity service` |
| International moving | `international packers movers Kolkata overseas customs` |
| South Kolkata micro-market | `packers movers Behala Jadavpur Garia Tollygunge Kolkata` |
| Student luggage | `student luggage shifting Kolkata intercity` |
| Salt Lake / New Town | `packers movers Salt Lake Kolkata house shifting` |

---

## 3. SERP Landscape Observations

### 3.1 Who Dominates Broad Queries
- **National aggregators / platforms** (NoBroker, Porter, LogisticMart, Sulekha, AssureShift, Justdial) dominate almost every generic query: `packers and movers Kolkata`, `bike transport Kolkata`, `car shifting Kolkata`.
- These platforms aggregate dozens of verified local vendors and display comparison tables — a local operator cannot out-rank them on generic broad terms without significant domain authority.
- **National chains** (Agarwal Packers/APML, Safexpress) rank strongly on route-based queries.

### 3.2 Where Local Operators Earn Organic Visibility
- Local independent movers (Om Packers, Anil Packers, Euro Packers, Murti Packers, DSR Logistics, Maxwell Relocations) earn real organic rankings on:
  - **Specific service+neighborhood combinations** (e.g., "packers movers Behala Kolkata residential")
  - **Specific service+city queries** (e.g., "office relocation Kolkata IT firm", "luggage shifting Kolkata Howrah")
  - **High-trust, evidence-heavy service pages** (detailed packing, RTO docs, carrier type comparisons)
- Key insight: **Local specificity + operational depth beats generic keyword density** for Bharat Relocators' competitive tier.

### 3.3 What High-Ranking Local Service Pages Contain
Based on observation across all clusters:
1. **Indicative cost brackets** by apartment/vehicle size (clearly labeled as estimates).
2. **Step-by-step operational protocols** specific to the service.
3. **Local neighborhood references** (e.g., "Salt Lake Sector V gate pass", "Behala narrow lane handling").
4. **Verified business credentials** prominently displayed.
5. **Embedded testimonials/reviews** relevant to the specific service.
6. **FAQs with Schema markup** addressing the top 5-7 hesitation points.
7. **Multiple clear CTAs** (call, WhatsApp, quote form).

### 3.4 Route Pages SERP Reality Check
- Queries like `packers movers Kolkata to Bangalore` predominantly return aggregator results (LogisticMart, NoBroker, AssureShift) with comparison tables.
- Individual movers appearing on route queries typically have either (a) very high overall domain authority or (b) dedicated high-depth route guides.
- **The existing `/intercity-moving-guide` already addresses this intent more safely** and with less duplication risk than 5 standalone route pages would.

---

## 4. Full Candidate Matrix

Every candidate is evaluated against five criteria:

| Criterion | Description |
|---|---|
| **Search Evidence** | Live SERP confirms real user queries exist for this intent |
| **Unique Value** | Page would provide substantially different content vs. existing pages |
| **Doorway Risk** | Risk of thin/duplicate content or city-swapped templates |
| **Cannibalization Risk** | Risk of competing with existing high-performing pages |
| **Client Data Required** | Whether page requires unconfirmed business specifics |

---

### 4.1 Service + Location Candidates

#### CANDIDATE L-01: `/household-shifting-kolkata`
**Proposed concept:** Dedicated service page targeting Kolkata metro residential customers — more locally detailed than the current generic `/household-shifting` page.

| Factor | Assessment |
|---|---|
| Search Evidence | ✅ Strong SERP for `household shifting Kolkata`, `packers movers South Kolkata`, `home shifting Behala` |
| Unique Value | ✅ Can include: neighborhood-specific logistics (Behala narrow lanes, Salt Lake high-rise gate passes, New Town society rules), approximate local distance pricing, local landmarks and area references |
| Doorway Risk | 🟡 Moderate — must be genuinely differentiated from `/household-shifting`; avoid near-duplication |
| Cannibalization Risk | 🔴 HIGH — directly competes with `/household-shifting` for Kolkata queries. Must be carefully architected as "Kolkata-metro-focused" with the existing page serving as the intercity/general version. |
| Client Data Required | None beyond operational knowledge of Kolkata neighborhoods |
| **DECISION** | **⚠️ BUILD LATER** — Strong commercial case exists, but this requires a substantial architectural rethink: `/household-shifting` would need to be repositioned as the intercity/general page, while `/household-shifting-kolkata` targets local metro. This is a meaningful content differentiation exercise, not a quick add. Recommend as first priority once Phase 4 foundation pages are live and GSC data is available. |

---

#### CANDIDATE L-02: `/car-transport-kolkata`
**Proposed concept:** Dedicated car transport service page for Kolkata customers, stronger on local pickup logistics.

| Factor | Assessment |
|---|---|
| Search Evidence | ✅ Real queries: `car transport Kolkata to Delhi`, `car carrier service Kolkata`, `car shifting Kolkata to Bangalore` |
| Unique Value | 🔴 Very low — `/car-shifting` already covers Kolkata-based car carrier service in depth with hydraulic ramps, enclosed carriers, condition reports, and intercity routes |
| Doorway Risk | 🔴 Near-duplicate of `/car-shifting` |
| Cannibalization Risk | 🔴 Directly cannibalizes the primary `/car-shifting` ranking signal |
| **DECISION** | **❌ DO NOT BUILD** — Strengthen `/car-shifting` instead. See Section 5. |

---

#### CANDIDATE L-03: `/bike-transport-kolkata`
**Proposed concept:** Dedicated two-wheeler transport page for Kolkata.

| Factor | Assessment |
|---|---|
| Search Evidence | ✅ Real queries exist for bike transport Kolkata |
| Unique Value | 🔴 Very low — `/bike-shifting` already covers documentation, crating, carrier options, and outbound city routes |
| Doorway Risk | 🔴 Near-duplicate of `/bike-shifting` |
| Cannibalization Risk | 🔴 Directly cannibalizes `/bike-shifting` |
| **DECISION** | **❌ DO NOT BUILD** — Strengthen `/bike-shifting` instead. See Section 5. |

---

#### CANDIDATE L-04: `/parcel-cargo-kolkata`
**Proposed concept:** Dedicated parcel/cargo shipping page targeting Kolkata senders.

| Factor | Assessment |
|---|---|
| Search Evidence | ✅ Real queries: `parcel shifting Kolkata intercity`, `luggage transport Kolkata`, `cargo service Kolkata to other cities` |
| Unique Value | 🔴 Low — `/parcel-shifting` already covers door pickup, barcoding, 230+ cities, and student luggage |
| Doorway Risk | 🔴 Would duplicate `/parcel-shifting` |
| **DECISION** | **❌ DO NOT BUILD** — Strengthen `/parcel-shifting` with student/professional luggage sub-section. See Section 5. |

---

### 4.2 Service + Route Candidates

#### CANDIDATE R-01: `/movers-kolkata-to-bangalore`
**Proposed concept:** Standalone route page for Kolkata → Bangalore household shifting.

| Factor | Assessment |
|---|---|
| Search Evidence | ✅ Active SERP: `movers Kolkata to Bangalore`, `packers movers Kolkata to Bangalore cost` |
| Unique Value | 🔴 Very low — `/intercity-moving-guide` already has a dedicated Kolkata → Bangalore section with distance, transit days, highway info, and corridor context |
| Doorway Risk | 🔴 HIGH — textbook route doorway page, would be thin duplicate of `/intercity-moving-guide` |
| Cannibalization Risk | 🔴 Directly competes with `/intercity-moving-guide` |
| **DECISION** | **❌ DO NOT BUILD** — The existing pillar guide satisfies this intent. SERP for route queries is dominated by aggregators that a standalone thin route page will not surpass. |

---

#### CANDIDATE R-02: `/movers-kolkata-to-delhi`
**Proposed concept:** Standalone route page for Kolkata → Delhi NCR.

| Factor | Assessment |
|---|---|
| Unique Value | 🔴 Same analysis as R-01 — `/intercity-moving-guide` covers Delhi NCR corridor with NH 19 route details |
| Doorway Risk | 🔴 HIGH |
| **DECISION** | **❌ DO NOT BUILD** |

---

#### CANDIDATE R-03: `/movers-kolkata-to-mumbai`
**Proposed concept:** Standalone route page for Kolkata → Mumbai/Pune.

| Factor | Assessment |
|---|---|
| Unique Value | 🔴 Same analysis — `/intercity-moving-guide` covers Mumbai/Pune corridor |
| Doorway Risk | 🔴 HIGH |
| **DECISION** | **❌ DO NOT BUILD** |

---

#### CANDIDATE R-04: `/car-transport-kolkata-to-bangalore` (and similar route variants)
**Proposed concept:** Route-specific car carrier pages.

| Factor | Assessment |
|---|---|
| Search Evidence | ✅ Real queries: `car transport Kolkata to Delhi`, `car shipping Kolkata to Bangalore cost` |
| Unique Value | 🔴 SERP dominated by aggregators; `/car-shifting` already covers intercity car transport |
| Doorway Risk | 🔴 Classic route doorway page — Kolkata → Bangalore, Kolkata → Delhi, Kolkata → Mumbai variants would be near-identical templates |
| **DECISION** | **❌ DO NOT BUILD** — Strengthen `/car-shifting` with a route cost/transit section instead. |

---

#### CANDIDATE R-05: `/bike-transport-kolkata-to-bangalore` (and similar)
**Proposed concept:** Route-specific bike carrier pages.

| Factor | Assessment |
|---|---|
| Doorway Risk | 🔴 Same reasoning as R-04 — near-identical thin doorway pages for each city pair |
| **DECISION** | **❌ DO NOT BUILD** — Strengthen `/bike-shifting` with route cost summary table. |

---

### 4.3 B2B / Corporate Candidates

#### CANDIDATE B-01: `/corporate-relocation-kolkata`
**Proposed concept:** Dedicated B2B corporate relocation landing page targeting HR/facilities managers in Kolkata's IT corridors.

| Factor | Assessment |
|---|---|
| Search Evidence | ✅ Real SERP: `corporate relocation Kolkata`, `office shifting Salt Lake New Town IT`, `B2B packers movers Kolkata Sector V` |
| Unique Value | 🟡 Moderate — `/office-relocation` is already well-structured with IT asset protocol, weekend shift scheduling, color-coded labeling, and corporate readiness checklist. However, it **lacks**: (1) explicit Salt Lake Sector V / New Town targeting, (2) cost brackets by office size (10-seat, 25-seat, 150-seat), (3) B2B procurement language (SLA, site survey, scope of work, invoice terms) |
| Cannibalization Risk | 🟡 Moderate — If built carefully with clear B2B-specific content not present on `/office-relocation`, differentiation is achievable. But the existing page is strong and any new page must avoid overlapping the same intent. |
| Doorway Risk | 🟢 Low — B2B corporate relocation has genuinely different user intent (procurement-stage, multi-stakeholder, higher-value) vs. general office shifting |
| **DECISION** | **⚠️ STRENGTHEN EXISTING PAGE FIRST** — Enhance `/office-relocation` with (1) Salt Lake / New Town / Rajarhat explicit section, (2) office-size cost-bracket table, (3) B2B procurement-focused language. Only build standalone `/corporate-relocation-kolkata` if `/office-relocation` traffic data shows saturation or if client confirms significant B2B pipeline activity warranting it. |

---

#### CANDIDATE B-02: `/it-office-relocation-kolkata`
**Proposed concept:** Hyper-specific IT server and tech equipment relocation page.

| Factor | Assessment |
|---|---|
| Unique Value | 🔴 `/office-relocation` already covers IT server anti-static packing, server room protocol, and color-coded IT asset management in depth |
| Doorway Risk | 🔴 Thin sub-topic of an existing strong page |
| **DECISION** | **❌ DO NOT BUILD** — Expand IT section within `/office-relocation` instead. |

---

### 4.4 Other High-Intent Commercial Candidates

#### CANDIDATE O-01: `/household-storage-kolkata`
**Proposed concept:** Dedicated residential storage / warehousing service page.

| Factor | Assessment |
|---|---|
| Search Evidence | ✅ Real queries: `household storage Kolkata`, `short-term warehouse luggage Kolkata`, `storage during renovation Kolkata` |
| Unique Value | ✅ HIGH — Not currently offered/positioned at all on the website. Genuinely distinct service offering. |
| Client Data Required | 🔴 **REQUIRES CLIENT CONFIRMATION** — Must confirm: (a) whether Bharat Relocators operates an active, secure storage/warehouse facility in Kolkata; (b) its exact address; (c) pricing model (per-month cubic footage, minimum period, access terms); (d) climate-controlled vs. standard storage. |
| Doorway Risk | 🟢 None if real warehouse confirmed |
| **DECISION** | **⚠️ BUILD LATER (Conditional)** — Strong commercial intent exists. Build only after client confirms active warehouse facility. Do not fabricate storage claims. This is listed in `content-architecture.md` as OPP-09 and `future-page-specs.md` as Phase 4 conditional. |

---

#### CANDIDATE O-02: `/moving-guides` (Index Hub)
**Proposed concept:** Curated hub page linking to all three educational pillar guides.

| Factor | Assessment |
|---|---|
| Search Evidence | 🟡 Secondary — users navigate directly to guides via search or internal links; a hub index may help with crawl architecture |
| Unique Value | 🟡 Moderate — primarily an internal navigation aid, not a primary organic landing asset |
| Doorway Risk | 🟢 None — thin only if treated as a stub; it should function as a legitimately useful guide index |
| Cannibalization Risk | 🟢 None — guides have distinct URLs and canonical signals |
| **DECISION** | **✅ BUILD NOW** — A well-structured `/moving-guides` hub page provides: (1) a clean internal navigation hub for the 3 pillar guides, (2) breadcrumb consistency for `Home → Guides → [Guide Name]` breadcrumb schema, (3) a light topical authority cluster signal. Aligns with `content-architecture.md` Section 5.1. Minimal build effort; high structural value. |

---

#### CANDIDATE O-03: `/international-moving-checklist`
**Proposed concept:** Dedicated documentation and preparation checklist for international moves.

| Factor | Assessment |
|---|---|
| Search Evidence | ✅ Some demand for `international moving documents checklist India`, `overseas relocation packing list` |
| Unique Value | 🟡 Moderate — `/international-moving` already covers customs documentation, FCL/LCL, packing inventory, and air vs. sea freight. A checklist would mostly overlap. |
| Doorway Risk | 🔴 Would significantly overlap with `/international-moving` + `/moving-checklist` combined |
| **DECISION** | **❌ DO NOT BUILD** — Enhance `/international-moving` with an embedded customs documentation checklist section instead. See Section 5. |

---

#### CANDIDATE O-04: `/packing-guide` or `/packing-tips`
**Proposed concept:** General packing methodology and materials guide.

| Factor | Assessment |
|---|---|
| Unique Value | 🟡 Moderate informational value; `/moving-checklist` already has room-by-room packing tips |
| Doorway Risk | 🟡 Moderate — thin if it largely duplicates `/moving-checklist` packing sections |
| Conversion Intent | 🔴 Low — purely informational, minimal commercial conversion potential beyond brand building |
| **DECISION** | **❌ DO NOT BUILD** — Expand packing methodology within `/household-shifting` and `/moving-checklist` instead. |

---

#### CANDIDATE O-05: `/monsoon-moving-tips` or `/seasonal-moving-guide`
**Proposed concept:** Seasonal guide addressing Kolkata monsoon packing challenges.

| Factor | Assessment |
|---|---|
| Search Evidence | 🟡 Niche informational intent; limited direct commercial conversion |
| Unique Value | 🟢 Genuinely unique local angle (Kolkata's prolonged monsoon is a real operational concern) |
| Doorway Risk | 🔴 Thin seasonal content with limited depth potential unless integrated into a broader resource |
| **DECISION** | **❌ DO NOT BUILD** — Integrate as a seasonal callout section within `/moving-checklist` (e.g., "Moving During Kolkata's Monsoon Season"). |

---

## 5. Consolidated Decision Matrix

| Candidate ID | Proposed URL / Topic | Decision | Rationale |
|---|:---|:---:|---|
| L-01 | `/household-shifting-kolkata` | ⚠️ BUILD LATER | Strong case but requires careful positioning to avoid cannibalizing `/household-shifting`; needs GSC data first |
| L-02 | `/car-transport-kolkata` | ❌ DO NOT BUILD | Duplicates `/car-shifting` |
| L-03 | `/bike-transport-kolkata` | ❌ DO NOT BUILD | Duplicates `/bike-shifting` |
| L-04 | `/parcel-cargo-kolkata` | ❌ DO NOT BUILD | Duplicates `/parcel-shifting` |
| R-01 | `/movers-kolkata-to-bangalore` | ❌ DO NOT BUILD | Doorway page; `/intercity-moving-guide` already serves this intent |
| R-02 | `/movers-kolkata-to-delhi` | ❌ DO NOT BUILD | Doorway page; same reasoning as R-01 |
| R-03 | `/movers-kolkata-to-mumbai` | ❌ DO NOT BUILD | Doorway page; same reasoning as R-01 |
| R-04 | `/car-transport-kolkata-to-[city]` | ❌ DO NOT BUILD | Route doorway pages; SERP dominated by aggregators |
| R-05 | `/bike-transport-kolkata-to-[city]` | ❌ DO NOT BUILD | Route doorway pages; same as R-04 |
| B-01 | `/corporate-relocation-kolkata` | ⚠️ STRENGTHEN EXISTING | Enhance `/office-relocation` with B2B cost brackets and IT corridor specificity first |
| B-02 | `/it-office-relocation-kolkata` | ❌ DO NOT BUILD | Sub-topic already covered in `/office-relocation` |
| O-01 | `/household-storage-kolkata` | ⚠️ BUILD LATER (Conditional) | Pending client warehouse confirmation |
| O-02 | `/moving-guides` | ✅ BUILD NOW | Hub for 3 pillar guides; low effort, structural value |
| O-03 | `/international-moving-checklist` | ❌ DO NOT BUILD | Overlaps existing content; enhance `/international-moving` instead |
| O-04 | `/packing-guide` | ❌ DO NOT BUILD | Covered by `/moving-checklist` and `/household-shifting` |
| O-05 | Seasonal moving guide | ❌ DO NOT BUILD | Integrate into `/moving-checklist` as a seasonal section |

**Summary counts:**
- ✅ BUILD NOW: **1** (`/moving-guides`)
- ⚠️ BUILD LATER: **2** (`/household-shifting-kolkata`, `/household-storage-kolkata`)
- ⚠️ STRENGTHEN EXISTING: **1** (`/office-relocation` → B2B enhancements)
- ❌ DO NOT BUILD: **12** (route doorways, service duplicates, thin sub-topics)

---

## 6. Existing Page Enhancement Priorities

These are the highest-impact changes that do NOT require new URLs. They should be implemented in Phase 4 alongside or before any new page builds.

### 6.1 `/household-shifting` — HIGH PRIORITY
- **Add indicative cost brackets by BHK and service type** (local vs. intercity), clearly labeled as estimates subject to survey. SERP evidence shows cost information is a top decision factor.
- **Add "Kolkata Neighborhoods We Serve" section** with 3 geographic zones: South Kolkata (Haltu, Behala, Jadavpur, Garia, Tollygunge), East Kolkata (Salt Lake, New Town, Rajarhat), North/Central Kolkata (Park Street, Shyambazar, Dum Dum, Howrah).
- **Add monsoon packing callout** given Kolkata's lengthy June–October monsoon season.
- **Expand hazardous/prohibited goods** compliance callout.

### 6.2 `/car-shifting` — HIGH PRIORITY
- **Add route corridor cost summary table**: indicative price ranges for Kolkata → Delhi, Kolkata → Mumbai, Kolkata → Bangalore, Kolkata → Pune, Kolkata → Hyderabad. Label clearly as estimates.
- **Add pre-transit vehicle checklist**: fuel drain, mirror removal, photography protocol, battery disconnect.
- This satisfies route-specific car transport queries without creating thin doorway pages.

### 6.3 `/bike-shifting` — HIGH PRIORITY
- **Add destination city cost summary table** (same routes as car shifting).
- **Add Railway vs. Professional Mover comparison table** — SERP shows this is a top user question. Clearly articulate why professional enclosed crating (Bharat Relocators' service) is superior to railway parcel for high-value bikes.
- **Add fuel drainage and pre-transport preparation protocol** as a visual step-by-step section.

### 6.4 `/office-relocation` — MEDIUM PRIORITY
- **Add explicit Salt Lake / New Town / Rajarhat / Park Street service area section**.
- **Add indicative B2B cost brackets** (by office size: micro/small/mid/large) labeled as estimates.
- **Strengthen B2B procurement language**: site survey booking flow, written scope of work process, GST invoice availability.
- **Add IBA approval status** — IF client confirms. (Research shows IBA approval is a significant B2B trust signal in the Kolkata market per SERP results.)

### 6.5 `/parcel-shifting` — MEDIUM PRIORITY
- **Add "Student Luggage Transport" section** explicitly targeting college students moving from Kolkata to other university cities (Pune, Bangalore, Hyderabad, Delhi).
- **Add volumetric weight explainer** (L × W × H ÷ 5000 formula) for customers shipping large-volume/low-weight items.

### 6.6 `/international-moving` — MEDIUM PRIORITY
- **Add customs documentation checklist** as an embedded structured list: passport, visa/work permit, detailed inventory, packing list, Bill of Lading/Airway Bill.
- **Add destination-country guidance** with examples of common restrictions (foods, plants, electronics voltage compatibility).

---

## 7. Phase 4 Build Order Recommendation

Based on commercial impact and implementation complexity:

### Phase 4A — Immediate (No New URLs)
1. Enhance `/household-shifting` with BHK cost table + neighborhood section.
2. Enhance `/car-shifting` with route corridor cost table.
3. Enhance `/bike-shifting` with route table + railway comparison.
4. Enhance `/office-relocation` with B2B enhancements (pending IBA status confirmation).

### Phase 4B — Build `/moving-guides`
- Simple index hub page linking to the 3 pillar guides.
- Adds breadcrumb structure: `Home → Moving Guides → [Guide Name]`.
- Proposed metadata: "Moving Guides & Relocation Resources — Bharat Relocators".
- Content: Brief intro paragraph, cards for each of the 3 guides with summary and link.

### Phase 4C — Conditional Builds (Require Client Input)
- `/household-shifting-kolkata` — after GSC data shows `/household-shifting` ranking plateau.
- `/household-storage-kolkata` — after client confirms warehouse facility.

---

## 8. Anti-Doorway Compliance Checklist

Every new page built in Phase 4 must satisfy ALL of the following before going live:

- [ ] The page addresses a **clearly distinct user intent** not already served by an existing canonical page.
- [ ] The page contains **substantial Kolkata/operational-specific information** that cannot be merged into an existing page without degrading it.
- [ ] The page is **not a template with swapped city/service names**. Each section must be written independently.
- [ ] All **prices/estimates are labeled** "indicative, subject to pre-move survey" or equivalent.
- [ ] All **transit time windows** are realistic ranges, not commitments.
- [ ] **No new claims** beyond what is currently verified in `claim-verification-audit.md` are introduced without client confirmation.
- [ ] Page passes **type-check and build** without errors.
- [ ] Page is **added to `sitemap.ts`** with appropriate `changeFrequency` and `priority`.
- [ ] Page contains **at least 3 contextual internal links** to existing commercial or guide pages.
- [ ] Page contains **at least 2 inbound contextual links** from existing pages.

---

## 9. Verification

This document is a strategy-only document. No application files have been created or modified.

**Build verification (confirming no application changes):**
- `npm run type-check` → ✅ Exit code 0, 0 TypeScript errors.

**Application routes remain unchanged:** 16 canonical content routes as documented in `phase-3-final-audit.md`.

