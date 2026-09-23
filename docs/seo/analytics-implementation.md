# Bharat Relocators — Conversion Analytics & GA4 Measurement Implementation

**Document Version:** 1.0  
**Phase:** Phase 3 / Task 20  
**Status:** CODE-VERIFIED (Awaiting Live GA4 DebugView Confirmation)  
**Last Updated:** 2026-09-22

---

## 1. Executive Summary & Audit Baseline

Prior to Task 20, the codebase did not load any Google Analytics, Google Tag Manager, or `gtag.js` scripts. The Measurement ID `G-5RGEEXWNMT` was documented in `src/lib/business.ts` under `UNVERIFIED.ga4MeasurementId` without active runtime execution.

In Task 20, a minimal, high-performance, privacy-compliant GA4 conversion tracking architecture was implemented strictly tailored to the Next.js 15 App Router architecture without adding heavy external npm packages or breaking Server Component optimizations.

---

## 2. GA4 Initialization & Script Loading Architecture

### 2.1 Measurement ID Resolution
The active measurement ID is resolved in [`src/lib/analytics.ts`](file:///d:/LMM/Bharat%20Relocators/Bharat-Website/Bharat-Web-V2/bharat.relocators-website-02/src/lib/analytics.ts):
```ts
export const GA_MEASUREMENT_ID =
  process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || UNVERIFIED.ga4MeasurementId;
```
- **Environment Priority**: `NEXT_PUBLIC_GA_MEASUREMENT_ID`
- **Fallback**: `UNVERIFIED.ga4MeasurementId` (`G-5RGEEXWNMT`)
- **Safety**: If no measurement ID is provided, `<GoogleAnalytics />` returns `null` and tracks no events.

### 2.2 Script Loading (`src/components/analytics/GoogleAnalytics.tsx`)
- Injected in [`src/app/layout.tsx`](file:///d:/LMM/Bharat%20Relocators/Bharat-Website/Bharat-Web-V2/bharat.relocators-website-02/src/app/layout.tsx).
- Uses Next.js `next/script` with `strategy="afterInteractive"`.
- Enables IP anonymization (`anonymize_ip: true`).
- Configured with `send_page_view: true` for automatic page tracking.
- Uses delegated document-level click capture for phone, WhatsApp, and tracking links to prevent converting Server Components to Client Components.

---

## 3. Conversion Events Specification Matrix

| Event Name | Trigger Condition | Parameter Payload | Component / File Location | Privacy & Data Minimization |
|---|---|---|---|---|
| `generate_lead` | Fired **only** upon successful quote form validation & submission | `{ service_type: string, currency: 'INR' }` | `src/app/components/QuoteSection.tsx` | **Zero PII.** Names, telephone numbers, emails, moving dates, and full street addresses are **strictly excluded**. |
| `click_to_call` | Intentional user click/tap on any `tel:` telephone link | `{ link_location: string }` (`header`, `footer`, `quote_section`, `content_section`) | `src/components/analytics/GoogleAnalytics.tsx` (Global Click Listener) | **Zero PII.** User phone numbers are not collected or sent. |
| `whatsapp_chat_start` | Intentional click/tap on floating WhatsApp button or inline WhatsApp CTAs | `{ button_location: string }` (`floating_button`, `quote_section`, `header`, `footer`, `inline_cta`) | `src/components/analytics/GoogleAnalytics.tsx` & `src/app/components/WhatsAppButton.tsx` | **Zero PII.** Chat message contents and personal identifiers are **strictly excluded**. |
| `track_shipment_launch` | Intentional click/tap to open official TrackingMore consignment portal | `{ portal_destination: 'trackingmore' }` | `src/app/track-your-shipment/page.tsx` & `src/components/analytics/GoogleAnalytics.tsx` | **Zero PII.** LR / Consignment Waybill numbers are **never** captured in analytics payloads. |
| `view_pillar_guide` | First mount/view of an educational pillar guide | `{ guide_slug: string }` (`moving-checklist`, `vehicle-transportation-guide`, `intercity-moving-guide`) | `src/components/analytics/TrackPillarGuide.tsx` (Mounted on `/moving-checklist`, `/vehicle-transportation-guide`, `/intercity-moving-guide`) | **Zero PII.** Uses a standard ref lock (`trackedRef.current`) to fire exactly once per session/mount without duplicate trigger on re-renders. |

---

## 4. Architectural & Privacy Compliance

1. **Zero Personally Identifiable Information (PII)**:
   - In strict compliance with Google Analytics policies and Indian DPDP norms, no user names, mobile phone numbers, email addresses, pickup/drop locations, or shipment consignment numbers are transmitted to Google Analytics.
2. **Server / Client Component Boundary Preservation**:
   - The three pillar guide pages (`/moving-checklist`, `/vehicle-transportation-guide`, `/intercity-moving-guide`), the tracking portal (`/track-your-shipment`), and global layouts remain **Server Components** for maximum SEO performance and zero client bundle bloat.
   - Micro-client trackers (`<TrackPillarGuide />` and `<GoogleAnalytics />`) isolate browser event bindings cleanly.
3. **Fail-Safe Client Execution**:
   - `src/lib/analytics.ts` wraps all `window.gtag` calls inside a safe `typeof window !== 'undefined'` and `typeof window.gtag === 'function'` check wrapped in `try/catch` blocks.
   - Analytics errors or ad blockers will never break website functionality, navigation, or form submission.
4. **Development Diagnostics**:
   - When running in `development` mode (`NODE_ENV === 'development'`), events log cleanly to the browser developer console prefixed with `[GA4 Track Event]: <eventName>`.

---

## 5. Verification Status

| Verification Layer | Status | Notes |
|---|---|---|
| **Code Implementation** | **VERIFIED** | All 5 event helpers, GoogleAnalytics provider, TrackPillarGuide component, and layout integration written. |
| **TypeScript Type Check** | **VERIFIED (0 errors)** | `npm run type-check` executed cleanly with no typing errors. |
| **ESLint Static Analysis** | **VERIFIED (0 errors)** | `npm run lint` executed cleanly with 0 errors and 0 warnings. |
| **Next.js Production Build** | **VERIFIED (0 errors)** | `npm run build` compiled all 22 static and dynamic routes cleanly in ~3.5s. |
| **Live GA4 Verification** | **PENDING LIVE DEPLOYMENT** | Requires live production deployment and Google Analytics 4 Realtime / DebugView confirmation with client access to `G-5RGEEXWNMT`. |

---

## 6. Action Items for Client / Production Deployment

1. **Verify Measurement ID**:
   - Confirm with Bharat Relocators that `G-5RGEEXWNMT` is the designated Google Analytics 4 property for `https://bharatrelocators.com`.
   - If a different ID is preferred, set the `NEXT_PUBLIC_GA_MEASUREMENT_ID` environment variable in the production deployment environment (Vercel / Cloudflare / Node).
2. **DebugView Validation**:
   - Open GA4 Admin &rarr; DebugView.
   - Perform a test quote submission on `/get-a-quote` and confirm `generate_lead` appears in real-time.
   - Click a `tel:` link and confirm `click_to_call` appears with `{ link_location }`.
   - Click the floating WhatsApp button and confirm `whatsapp_chat_start` appears.
   - Visit `/moving-checklist` and confirm `view_pillar_guide` appears with `{ guide_slug: "moving-checklist" }`.

