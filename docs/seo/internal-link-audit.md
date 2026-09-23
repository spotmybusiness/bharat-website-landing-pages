# Internal Link Audit & Architecture Discrepancy Map
**Bharat Relocators — bharatrelocators.com**
*Status: Audit & Documentation Only. Zero link changes executed in this task.*

---

## 1. Executive Summary

This audit catalogs all internal linking patterns within the Next.js repository to identify potential architecture mismatches, legacy hash anchor dependencies, and unbuilt route references.

---

## 2. Internal Link Inventory & Discrepancy Findings

| # | Source File | Existing Link / Target | Current Route Status | Description / Discrepancy | Suggested Action | Wait for GSC / Redirect Confirmation? |
|---|---|---|---|---|---|---|
| 1 | `src/lib/navigation.ts` (L68, L75) | `href: '/#quote'` | Anchor on `/` | Footer links for "Get a Quote" and "Free Estimate" point to homepage hash anchor `/#quote` instead of the newly created standalone page `/get-a-quote`. | In future link-optimization phase, update footer links to point to `/get-a-quote` when full site navigation is updated. | No (Internal routing decision) |
| 2 | `src/app/about/page.tsx` (L86, L241) | `href="/#quote"` | Anchor on `/` | Action button on About page links to homepage anchor `/#quote` instead of `/get-a-quote`. | Update action button to point directly to `/get-a-quote`. | No |
| 3 | `src/app/testimonials/page.tsx` (L104, L155) | `href="/#quote"` | Anchor on `/` | Hero and footer CTA buttons link to `/#quote` on homepage. | Update to `/get-a-quote` for consistency. | No |
| 4 | `src/app/faqs/page.tsx` (L45) | `href="/#quote"` | Anchor on `/` | Hero quote button links to `/#quote`. | Update to `/get-a-quote`. | No |
| 5 | `src/app/not-found.tsx` (L41) | `href="/#quote"` | Anchor on `/` | 404 recovery quote button links to `/#quote`. | Update to `/get-a-quote`. | No |
| 6 | `src/components/Header.tsx` (L133, L238) | `href="/#quote"` | Anchor on `/` | Non-homepage Header desktop and mobile CTA links point to `/#quote`. | Update to `/get-a-quote` on non-homepage pages. | No |
| 7 | `src/app/household-shifting/page.tsx` (L87)<br>`bike-shifting/page.tsx` (L87)<br>`car-shifting/page.tsx` (L87)<br>`parcel-shifting/page.tsx` (L87)<br>`international-moving/page.tsx` (L87)<br>`office-relocation/page.tsx` (L87) | `Breadcrumb: { label: 'Services', href: '/#services' }` | Anchor on `/` | Breadcrumbs on all 6 service pages have a parent item `{ label: 'Services', href: '/#services' }` pointing to the homepage services section because a dedicated `/services` hub page is not yet built. | When `/services` hub page is created in future Phase 1/Phase 2 tasks, update breadcrumb href to `/services`. | Yes (Wait until `/services` hub page is built) |
| 8 | `src/lib/navigation.ts` (L28) | `mainNavLinks: { label: 'Services', href: '/#services', homepageHash: '#services' }` | Anchor on `/` | Primary header navigation item "Services" points to `/#services`. | When dedicated `/services` hub is created, update href to `/services` for inner pages while preserving homepage smooth scrolling. | Yes (Wait until `/services` page is built) |
| 9 | `src/lib/navigation.ts` (L29, L65) | `{ label: 'Process', href: '/#process' }` / `{ label: 'How It Works', href: '/#process' }` | Anchor on `/` | Header and footer link to homepage process section. | Retain `/#process` anchor as no standalone process page is currently planned. | No |
| 10 | `src/lib/navigation.ts` (L31, L64) | `{ label: 'Why Us', href: '/#why-us' }` / `{ label: 'Why Choose Us', href: '/#why-us' }` | Anchor on `/` | Header and footer link to homepage why-us section. | Retain `/#why-us` anchor until dedicated trust/value page is considered. | No |
| 11 | `src/app/components/ServicesSection.tsx` (L180–L250) | `href="#quote"` (L230) | Anchor on `/` | Service cards on homepage link to `#quote` instead of their respective canonical service URLs (`/household-shifting`, `/car-shifting`, etc.). | In future homepage integration task, update card CTAs to link to their respective canonical service pages. | No (Deferred to preserve homepage baseline) |
| 12 | `public/llms.txt` (L24–L31, L37) | `/#services`, `/#process`, `/#about`, `/#reviews`, `/#faq`, `/#quote`, `/#contact` | Mixture of anchors | LLM discovery file references homepage hash sections. | Update `public/llms.txt` to list the newly built canonical flat URLs (`/about`, `/contact`, `/household-shifting`, `/get-a-quote`, etc.). | No |

---

## 3. Recommended Sequencing for Link Adjustments

1. **Step 1 (Immediate Low-Risk)**: Update `/#quote` occurrences on inner pages (`/about`, `/contact`, `/testimonials`, `/faqs`, `/not-found`) to point to `/get-a-quote`.
2. **Step 2 (Medium-Term Hub Dependency)**: Retain `/#services` breadcrumbs until the `/services` category hub page is built.
3. **Step 3 (Homepage CTAs)**: Update `ServicesSection` service card "Learn More" links from `#quote` to individual service URLs during an approved homepage enhancement phase.

