# Phase 5 / Task 36 — Production Readiness Audit

**Project:** Bharat Relocators (`https://bharatrelocators.com`)  
**Audit Date:** September 2026  
**Document Type:** Pre-Deployment Technical & Infrastructure Readiness Audit  
**Deployment Target:** Hostinger Hosting (Domain: `https://bharatrelocators.com/`)  
**Audit Status:** READ-ONLY PRODUCTION AUDIT COMPLETE  

---

## A. Project Baseline

- **File / Path:** [`package.json`](file:///d:/LMM/Bharat%20Relocators/Bharat-Website/Bharat-Web-V2/bharat.relocators-website-02/package.json), [`package-lock.json`](file:///d:/LMM/Bharat%20Relocators/Bharat-Website/Bharat-Web-V2/bharat.relocators-website-02/package-lock.json)
- **Framework & Runtime:**
  - Next.js: `15.5.25` (`^15.5.25`) [VERIFIED]
  - React: `19.0.3` [VERIFIED]
  - React DOM: `19.0.3` [VERIFIED]
  - Node.js Engine: Requires Node.js `>=18.18.0` (Recommended: Node.js `20.x` LTS) [READY]
  - Package Manager: `npm` (lockfile version 3) [VERIFIED]
- **Core CLI Scripts:**
  - Build: `npm run build` (`next build`) [VERIFIED]
  - Start: `npm run start` (`next start -p 3000`) [VERIFIED]
  - Lint: `npm run lint` (`next lint`) [VERIFIED]
  - Type-Check: `npm run type-check` (`tsc --noEmit`) [VERIFIED]
- **Dependency Inventory:**
  - Production Dependencies (10): `@dhiwise/component-tagger`, `@heroicons/react`, `@tailwindcss/forms`, `@tailwindcss/typography`, `gsap`, `lenis`, `lucide-react`, `next`, `react`, `react-dom`, `recharts`.
  - Dev Dependencies (14): TypeScript, ESLint 9, Tailwind CSS 3.4.6, PostCSS, Autoprefixer, Prettier.
  - Dependency Hygiene: No unnecessary server dependencies or blocking native binaries present.
- **Classification:** **READY**

---

## B. Environment Variables

| Variable Name | Code Location | Required for Build? | Required at Runtime? | Scope | Fallback Value | Classification |
| :--- | :--- | :---: | :---: | :---: | :--- | :---: |
| `NEXT_PUBLIC_SITE_URL` | [`src/lib/business.ts`](file:///d:/LMM/Bharat%20Relocators/Bharat-Website/Bharat-Web-V2/bharat.relocators-website-02/src/lib/business.ts):108 | No | No | Public Client/Server | `'https://bharatrelocators.com'` | **VERIFIED** |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | [`src/lib/analytics.ts`](file:///d:/LMM/Bharat%20Relocators/Bharat-Website/Bharat-Web-V2/bharat.relocators-website-02/src/lib/analytics.ts):8 | No | No | Public Client | `UNVERIFIED.ga4MeasurementId` (`G-5RGEEXWNMT`) | **CLIENT ACTION** |
| `GOOGLE_PLACES_API_KEY` | [`src/app/api/google-reviews/route.ts`](file:///d:/LMM/Bharat%20Relocators/Bharat-Website/Bharat-Web-V2/bharat.relocators-website-02/src/app/api/google-reviews/route.ts):86 | No | Optional | Server-Only (Secret) | Returns static `FALLBACK_REVIEWS` with HTTP 200 | **CLIENT ACTION** |
| `GOOGLE_PLACE_ID` / `NEXT_PUBLIC_GOOGLE_PLACE_ID` | [`src/app/api/google-reviews/route.ts`](file:///d:/LMM/Bharat%20Relocators/Bharat-Website/Bharat-Web-V2/bharat.relocators-website-02/src/app/api/google-reviews/route.ts):87 | No | Optional | Server/Public | `0x3a027bee00518db7:0x84b05f269470ad0` | **VERIFIED** |
| `DIST_DIR` | [`next.config.mjs`](file:///d:/LMM/Bharat%20Relocators/Bharat-Website/Bharat-Web-V2/bharat.relocators-website-02/next.config.mjs):6 | No | No | Tooling/Build | `'.next'` | **VERIFIED** |

- **Security Note:** Zero secret tokens or API keys are committed in source code or `.env`.
- **Classification:** **READY** (Optional live Google Places API key & GA4 production confirmation classified under **CLIENT ACTION**).

---

## C. Next.js Deployment Model

- **File / Path:** [`next.config.mjs`](file:///d:/LMM/Bharat%20Relocators/Bharat-Website/Bharat-Web-V2/bharat.relocators-website-02/next.config.mjs), [`src/app/api/google-reviews/route.ts`](file:///d:/LMM/Bharat%20Relocators/Bharat-Website/Bharat-Web-V2/bharat.relocators-website-02/src/app/api/google-reviews/route.ts)
- **Current Architectural Model:** **Standard Next.js Node.js Server Application**
  - Next.js App Router with React Server Components.
  - Server Route Handler at `/api/google-reviews` (`export const dynamic = 'force-dynamic'`).
  - Next.js dynamic Image Optimization (`next/image` with remote patterns for Unsplash, Pexels, Pixabay).
  - Explicit trailing slash configuration: `trailingSlash: false`.
- **Target Hosting Requirements:**
  - Requires Hostinger Node.js Application Hosting / VPS / Cloud Server supporting persistent Node.js processes (`next start`).
  - Cannot be deployed as pure unmanaged static HTML files without altering architecture (`output: 'export'` is not enabled).
- **Classification:** **READY** / **HOSTINGER VERIFICATION**

---

## D. Build Verification

- **Command Outputs:**
  1. `npm run type-check`: `tsc --noEmit` exited with code `0` (0 errors). [VERIFIED]
  2. `npm run lint`: `next lint` exited with code `0` (0 errors, 0 warnings). [VERIFIED]
  3. `npm run build`: `next build` compiled cleanly in 4.7s. [VERIFIED]
- **Route Compilation Accounting:**
  - **17 Canonical Content Routes:** Prerendered as static HTML (`○ (Static)`).
  - **1 Dynamic API Route:** `/api/google-reviews` (`ƒ (Dynamic)`).
  - **3 System Handlers & Endpoints:** `/_not-found` (404), `/robots.txt`, `/sitemap.xml`.
  - **Bundle Performance:** Shared First Load JS bundle is `103 kB`; individual routes range from `116 kB` to `147 kB`.
- **Classification:** **VERIFIED**

---

## E. Domain & URL Normalization

- **File / Path:** [`src/app/layout.tsx`](file:///d:/LMM/Bharat%20Relocators/Bharat-Website/Bharat-Web-V2/bharat.relocators-website-02/src/app/layout.tsx), [`src/lib/metadata.ts`](file:///d:/LMM/Bharat%20Relocators/Bharat-Website/Bharat-Web-V2/bharat.relocators-website-02/src/lib/metadata.ts), [`src/lib/business.ts`](file:///d:/LMM/Bharat%20Relocators/Bharat-Website/Bharat-Web-V2/bharat.relocators-website-02/src/lib/business.ts), [`src/app/sitemap.ts`](file:///d:/LMM/Bharat%20Relocators/Bharat-Website/Bharat-Web-V2/bharat.relocators-website-02/src/app/sitemap.ts), [`src/app/robots.ts`](file:///d:/LMM/Bharat%20Relocators/Bharat-Website/Bharat-Web-V2/bharat.relocators-website-02/src/app/robots.ts)
- **Findings:**
  - `metadataBase`: Configured as `new URL('https://bharatrelocators.com')` in `layout.tsx`. [VERIFIED]
  - Canonical URLs: Strips trailing slashes; uses strict non-www production domain `https://bharatrelocators.com/path`. [VERIFIED]
  - Sitemap & Robots: Reference `https://bharatrelocators.com/sitemap.xml` and all 17 canonical URLs. [VERIFIED]
  - Localhost / Dev References: 0 occurrences of `localhost`, `127.0.0.1`, or development ports in source code. [VERIFIED]
  - Insecure Protocol: 0 occurrences of `http://bharatrelocators.com` (only XML namespaces in SVG). [VERIFIED]
- **Classification:** **VERIFIED**

---

## F. SEO Deployment Readiness

- **File / Path:** [`src/app/sitemap.ts`](file:///d:/LMM/Bharat%20Relocators/Bharat-Website/Bharat-Web-V2/bharat.relocators-website-02/src/app/sitemap.ts), [`src/app/robots.ts`](file:///d:/LMM/Bharat%20Relocators/Bharat-Website/Bharat-Web-V2/bharat.relocators-website-02/src/app/robots.ts), [`public/llms.txt`](file:///d:/LMM/Bharat%20Relocators/Bharat-Website/Bharat-Web-V2/bharat.relocators-website-02/public/llms.txt)
- **Findings:**
  - Sitemap contains exactly the 17 indexable canonical content routes.
  - `/api/google-reviews`, `/_not-found`, and admin paths are correctly omitted from sitemap.
  - `robots.ts` disallows `/api/`, `/_next/`, `/admin/`, and points crawlers to `${siteUrl}/sitemap.xml`.
  - Structured Data (JSON-LD): `FAQPage` schema on `/faqs`, `BreadcrumbList` on guides, and `LocalBusiness` deferred safely.
  - `noindex` Directives: Applied exclusively to `404` / `not-found` page; 0 accidental `noindex` tags on canonical routes.
- **Classification:** **VERIFIED**

---

## G. Static Assets & Images

- **File / Path:** [`public/`](file:///d:/LMM/Bharat%20Relocators/Bharat-Website/Bharat-Web-V2/bharat.relocators-website-02/public/), [`src/components/ui/AppImage.tsx`](file:///d:/LMM/Bharat%20Relocators/Bharat-Website/Bharat-Web-V2/bharat.relocators-website-02/src/components/ui/AppImage.tsx)
- **Findings:**
  - All referenced local assets (`/images/packaging.png`, `/images/car_relocation.png`, `/images/bike_transportation.jpeg`, `/images/cargo_shifting.jpeg`, `/images/office_relocation.png`, `/images/gmb-profile.png`, `/images/figures.png`, `/assets/images/app_logo.png`, `/assets/images/no_image.png`, `/assets/favicon.ico`) physically exist in `public/`.
  - Zero broken local asset links detected across the codebase.
  - `AppImage` provides fallback to `/assets/images/no_image.png` on image load failures.
  - Case Sensitivity: All image paths in code match filesystem casing exactly.
  - Large Asset Note: High-res raw PNGs in `public/images/` (e.g. `packaging.png` 2.88 MB, `car_relocation.png` 2.24 MB) are dynamically compressed to WebP/AVIF via Next.js image optimizer at runtime.
- **Classification:** **READY** / **INFORMATIONAL**

---

## H. Forms & Conversion Flows

- **File / Path:** [`src/app/components/QuoteSection.tsx`](file:///d:/LMM/Bharat%20Relocators/Bharat-Website/Bharat-Web-V2/bharat.relocators-website-02/src/app/components/QuoteSection.tsx), [`src/lib/validation.ts`](file:///d:/LMM/Bharat%20Relocators/Bharat-Website/Bharat-Web-V2/bharat.relocators-website-02/src/lib/validation.ts), [`src/lib/business.ts`](file:///d:/LMM/Bharat%20Relocators/Bharat-Website/Bharat-Web-V2/bharat.relocators-website-02/src/lib/business.ts)
- **Findings:**
  - **Quote Form Validation:** Validates full name (min 2 chars), Indian mobile number (`^[6-9]\d{9}$`), origin city, destination city, and future move date (`min={today}`).
  - **Loading & Anti-Duplicate:** Form buttons disable during processing (`loading = true`).
  - **Handoff & Fallback:** Generates WhatsApp structured payload to `+91 91230 46504`; attempts new tab popup with immediate manual fallback button in success card.
  - **Direct Communication Links:** All `tel:` links point to verified primary phone `+91 91230 46504`; all WhatsApp CTAs target `919123046504`.
  - **Shipment Tracking Portal:** Directs to verified portal `https://bharatrelocators8j.trackingmore.org/`.
- **Classification:** **VERIFIED**

---

## I. Analytics Readiness

- **File / Path:** [`src/lib/analytics.ts`](file:///d:/LMM/Bharat%20Relocators/Bharat-Website/Bharat-Web-V2/bharat.relocators-website-02/src/lib/analytics.ts), [`src/components/analytics/GoogleAnalytics.tsx`](file:///d:/LMM/Bharat%20Relocators/Bharat-Website/Bharat-Web-V2/bharat.relocators-website-02/src/components/analytics/GoogleAnalytics.tsx)
- **Findings:**
  - **Script Loading:** Uses `next/script` with `strategy="afterInteractive"`.
  - **Events Tracked:** `generate_lead`, `click_to_call`, `whatsapp_chat_start`, `track_shipment_launch`, `view_pillar_guide`.
  - **Zero-PII Compliance:** Customer names, phone numbers, addresses, and tracking numbers are strictly excluded from event parameters. `anonymize_ip: true` is configured.
  - **No-Op Safety:** If `GA_MEASUREMENT_ID` is absent, the component returns `null` with zero runtime exceptions.
  - **Client Action Required:** Client must verify whether `G-5RGEEXWNMT` is the intended production GA4 property.
- **Classification:** **READY** / **CLIENT ACTION**

---

## J. API / Server Requirements

- **File / Path:** [`src/app/api/google-reviews/route.ts`](file:///d:/LMM/Bharat%20Relocators/Bharat-Website/Bharat-Web-V2/bharat.relocators-website-02/src/app/api/google-reviews/route.ts)
- **Findings:**
  - Endpoint fetches Google Place Details API when `GOOGLE_PLACES_API_KEY` and `GOOGLE_PLACE_ID` are configured.
  - Server caching: `next: { revalidate: 3600 }` (1-hour server-side cache).
  - Robust Fallback: If credentials are not supplied or if upstream Google API fails, the endpoint returns verified `FALLBACK_REVIEWS` with HTTP status `200` and `isLive: false`.
  - UI components directly load verified static review data from [`src/data/reviews.ts`](file:///d:/LMM/Bharat%20Relocators/Bharat-Website/Bharat-Web-V2/bharat.relocators-website-02/src/data/reviews.ts), preventing any blocking client-side dependency on the API route.
- **Classification:** **VERIFIED**

---

## K. Error & Fallback Behavior

- **File / Path:** [`src/app/not-found.tsx`](file:///d:/LMM/Bharat%20Relocators/Bharat-Website/Bharat-Web-V2/bharat.relocators-website-02/src/app/not-found.tsx), [`src/components/ui/AppImage.tsx`](file:///d:/LMM/Bharat%20Relocators/Bharat-Website/Bharat-Web-V2/bharat.relocators-website-02/src/components/ui/AppImage.tsx)
- **Findings:**
  - 404 Handler: Custom branded `not-found.tsx` offering navigation to Home, Quote, and top services with `noIndex: true`.
  - Image Fallback: `AppImage` automatically substitutes `/assets/images/no_image.png` if any image fails to load.
  - Lead Form Fallback: Displays prominent manual WhatsApp launch button if browser pop-up blocker prevents auto-opening.
- **Classification:** **VERIFIED**

---

## L. Security & Secrets

- **File / Path:** [`.gitignore`](file:///d:/LMM/Bharat%20Relocators/Bharat-Website/Bharat-Web-V2/bharat.relocators-website-02/.gitignore), [`.env`](file:///d:/LMM/Bharat%20Relocators/Bharat-Website/Bharat-Web-V2/bharat.relocators-website-02/.env)
- **Findings:**
  - `.gitignore` ignores `node_modules/`, `.next/`, `out/`, `.env`, and `.env*.local`.
  - Scanned codebase: Zero hardcoded API keys, private passwords, database strings, or service tokens exist in source files.
  - Client-side bundles: Zero server-only secrets are exposed via `NEXT_PUBLIC_` prefixes.
- **Classification:** **VERIFIED**

---

## M. Git & Deployment State

- **Findings:**
  - Active Branch: `main` [VERIFIED]
  - Upstream Remote: `https://github.com/spotmybusiness/bharat.relocators-website-02.git` [VERIFIED]
  - Head Commit: `72eca46`
  - Hygiene Observation: Historical `.next/` build files were tracked in earlier repository commits. In the future deployment preparation commit, git cache should be untracked (`git rm -r --cached .next`) to ensure clean git tracking according to `.gitignore`.
- **Classification:** **INFORMATIONAL**

---

## N. Hostinger Compatibility

- **Hostinger Hosting Architecture Evaluation:**
  1. **Required Hosting Type:** Hostinger Node.js Application Hosting / Cloud Hosting / VPS with Node.js runtime. [CONFIRMED FROM CODEBASE]
  2. **Required Node Version:** Node.js `20.x` LTS (or `>=18.18.0`). [CONFIRMED FROM CODEBASE]
  3. **Build Command:** `npm run build` [CONFIRMED FROM CODEBASE]
  4. **Start Command:** `npm run start` (or `node_modules/.bin/next start -p $PORT`) [CONFIRMED FROM CODEBASE]
  5. **Environment Configuration on Hostinger:**
     - Set `NEXT_PUBLIC_SITE_URL=https://bharatrelocators.com`
     - Set `NODE_ENV=production`
     - (Optional) Set `NEXT_PUBLIC_GA_MEASUREMENT_ID`
     - (Optional) Set `GOOGLE_PLACES_API_KEY`
  6. **Items Requiring Hostinger Verification:**
     - Confirm Hostinger plan supports Node.js application daemon execution. [HOSTINGER VERIFICATION]
     - Verify Hostinger web server reverse proxy (Nginx/LiteSpeed/Apache) port forwarding to Next.js Node.js port. [HOSTINGER VERIFICATION]
     - Ensure SSL certificate (Let's Encrypt / Hostinger SSL) is active for `https://bharatrelocators.com` with auto-renewal. [HOSTINGER VERIFICATION]
- **Classification:** **READY** / **HOSTINGER VERIFICATION**

---

## O. Performance Readiness

- **Findings:**
  - **JavaScript Bundle Overhead:** Shared bundle is small (~103 kB), well within Google Core Web Vitals thresholds.
  - **Font Optimization:** Standard system and web font fallbacks configured cleanly.
  - **Prerender Strategy:** All 17 content routes compile as static pages, providing near-instant First Contentful Paint (FCP) and fast server response times (TTFB).
  - **Asset Optimization Opportunity:** High-resolution source PNGs in `public/` are handled dynamically by Next.js, but pre-optimizing raw asset files in a future maintenance cycle will reduce cold-cache server bandwidth.
- **Classification:** **READY**

---

## P. Required Pre-Deployment Actions

1. **Client Confirmation Actions:**
   - Confirm GA4 Measurement ID (`G-5RGEEXWNMT` or new production stream ID).
   - Confirm whether Google Places API Key should be provisioned for live Google Reviews synchronization.
2. **Hostinger Environment Setup:**
   - Select Node.js version 20 LTS in Hostinger hPanel.
   - Configure root directory and build/start commands.
   - Configure domain SSL certificate for `https://bharatrelocators.com`.
3. **Git Hygiene Action:**
   - Stage untracked Phase 4 documentation and source enhancements to `main` branch before triggering Hostinger deployment webhook/pull.

---

## Q. Phase 5 Task 36 Status & Recommendation

- **Audit Completion:** 100% Complete.
- **Codebase Integrity:** Zero TypeScript errors, zero ESLint warnings, all 17 canonical routes validated.
- **Final Recommendation:**

$$\mathbf{\text{READY FOR DEPLOYMENT PLANNING}}$$

