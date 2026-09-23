# Bharat Relocators — Quote Form Reliability, Validation & Lead Handoff Audit

**Document Version:** 1.0  
**Phase:** Phase 3 / Task 21  
**Status:** IMPLEMENTED & CODE-VERIFIED  
**Target Routes:** `/get-a-quote`, Homepage (`/` & `#quote`)  
**Core Components:** [`src/app/components/QuoteSection.tsx`](file:///d:/LMM/Bharat%20Relocators/Bharat-Website/Bharat-Web-V2/bharat.relocators-website-02/src/app/components/QuoteSection.tsx), [`src/lib/validation.ts`](file:///d:/LMM/Bharat%20Relocators/Bharat-Website/Bharat-Web-V2/bharat.relocators-website-02/src/lib/validation.ts), [`src/lib/analytics.ts`](file:///d:/LMM/Bharat%20Relocators/Bharat-Website/Bharat-Web-V2/bharat.relocators-website-02/src/lib/analytics.ts)  
**Last Updated:** 2026-09-22

---

## 1. Executive Summary & Flow Architecture

The quotation intake flow on Bharat Relocators connects users directly with move coordinators. Because no custom CRM, database, or email backend is present (by architecture choice), the form operates on a high-reliability, client-side formatted WhatsApp handoff model.

```
┌─────────────────────────┐
│ User Opens Form         │  /get-a-quote or Homepage #quote
└───────────┬─────────────┘
            │
            ▼
┌─────────────────────────┐
│ Input & Validation      │  FullName (≥2 chars), Phone (10-digit Indian mobile),
│                         │  Origin (≥2 chars), Destination (≥2 chars), ServiceType
└───────────┬─────────────┘
            │
    [Form Validated]
            │
            ▼
┌─────────────────────────┐
│ 1. Encode WhatsApp Msg  │  UTF-8 URL Encoded with clean markdown formatting
│ 2. Set Success State    │  Renders on-page summary card & direct CTAs
│ 3. Trigger Analytics    │  generate_lead event fired with { service_type } (Zero PII)
│ 4. Window.open Fallback │  Attempts auto-open; fallback CTA button rendered on-screen
└─────────────────────────┘
```

---

## 2. Field-by-Field Audit

| Field Name | HTML Name | Type & InputMode | Required | Autocomplete | Validation Rule | Accessibility & Mobile Attributes |
|---|---|---|---|---|---|---|
| **Full Name** | `fullName` | `text` | **Yes** | `name` | Non-empty, trimmed `length >= 2` | `aria-required="true"`, `aria-invalid`, `aria-describedby="full-name-error"`, `text-base sm:text-sm` (prevents iOS Safari zoom) |
| **Phone Number** | `phone` | `tel` (`inputMode="tel"`) | **Yes** | `tel` | Indian 10-digit mobile number format (`^[6-9]\d{9}$`) after sanitizing prefixes (`+91`, `91`, `0`, spaces, dashes) | `aria-required="true"`, `aria-invalid`, `aria-describedby="phone-error"`, `text-base sm:text-sm` |
| **Moving From** | `originCity` | `text` | **Yes** | `address-level2` | Non-empty, trimmed `length >= 2` | `aria-required="true"`, `aria-invalid`, `aria-describedby="origin-city-error"`, `text-base sm:text-sm` |
| **Moving To** | `destinationCity` | `text` | **Yes** | `address-level2` | Non-empty, trimmed `length >= 2` | `aria-required="true"`, `aria-invalid`, `aria-describedby="dest-city-error"`, `text-base sm:text-sm` |
| **Requirement** | `serviceType` | `<select>` | **Yes** | N/A | One of 7 predefined valid relocation services | `aria-required="true"`, `text-base sm:text-sm` |
| **Moving Date** | `moveDate` | `date` | **Optional** | N/A | Standard ISO date string; `min` attribute set to today's date (`min="YYYY-MM-DD"`) | Non-blocking; defaults to "Flexible" in WhatsApp payload |

---

## 3. Phone Number Validation & Sanitization Logic

Indian mobile numbers require sensible sanitization to prevent user friction from harmless formatting habits:
1. **Sanitization (`sanitizeIndianPhone`)**:
   - Removes spaces, hyphens, and parentheses: `replace(/[\s\-()]/g, '')`.
   - Strips leading `+91` prefix (e.g. `+91 9876543210` &rarr; `9876543210`).
   - Strips leading `91` country code when 12 digits (e.g. `919876543210` &rarr; `9876543210`).
   - Strips leading `0` trunk prefix when 11 digits (e.g. `09876543210` &rarr; `9876543210`).
2. **Validation (`validateIndianPhone`)**:
   - Must contain only numeric digits.
   - Must be exactly 10 digits long.
   - Must start with valid Indian mobile series (6, 7, 8, or 9).
3. **Error Reporting**: Clear, accessible inline error messages displayed below the field without modal popups or page reloads.

---

## 4. Form Submission Reliability & Anti-Duplication

- **Double-Submission Prevention**: The submit button is immediately disabled (`disabled={loading}`, `aria-busy={loading}`) upon valid submission.
- **Button Shimmer & Spinner**: Replaces text with a smooth loading spinner and label `"Preparing Relocation Quote..."`.
- **Zero Backend Dependency**: No risk of 500 server crashes or database connection timeouts. The entire flow executes client-side with fail-safe fallbacks.

---

## 5. WhatsApp Coordinator Handoff Flow

### 5.1 Message Construction
The message is cleanly structured with markdown highlights:
```text
*New Moving Quote Request — Bharat Relocators*

*Name:* [Sanitized Full Name]
*Phone:* [Sanitized 10-digit Phone]
*From:* [Origin Location]
*To:* [Destination City]
*Service:* [Service Type]
*Moving Date:* [Move Date | 'Flexible']
```

### 5.2 URL Encoding & Verified Endpoint
- Built with `getWhatsAppUrl(whatsappMessage)` using native `encodeURIComponent`.
- Sent to verified business WhatsApp number: `+91 91230 46504` (`https://wa.me/919123046504?text=...`).
- Special characters, spaces, and regional text are properly encoded into valid URL parameters.

### 5.3 Pop-up Blocker Fallback
Because modern mobile and desktop browsers (Safari iOS, Chrome, Firefox) often block asynchronous `window.open` calls triggered from timeouts, the success state provides a prominent, persistent green CTA button:
`"Open WhatsApp to Send Details"` linking directly to the pre-filled `preparedWhatsAppUrl`.

---

## 6. Success / Failure UX & Truth in Claims

### 6.1 Accurate Phrasing
- **Previous Wording**: *"Thank You! Quote Request Received. Our lead relocation coordinator will call you back within 3 hours..."* (Inaccurate, since data is not yet sent over network if user hasn't tapped send in WhatsApp).
- **Corrected Wording**: *"Relocation Enquiry Prepared! Your moving details are ready. Connect directly with our lead coordinator on WhatsApp for instant confirmation, or call our team."*
- **Request Summary**: Displays a clean confirmation box with Route, Requirement, and Preferred Date.
- **Direct Secondary Actions**:
  - Direct Phone Call CTA: `Call Coordinator: +91 91230 46504`.
  - Reset Action: `"Start New Request"` allows immediate re-entry without page reload.

---

## 7. Analytics Integration (`generate_lead`)

- **Event Name**: `generate_lead`
- **Trigger**: Fired **only** after complete client-side validation passes and the quotation payload is prepared.
- **Payload**:
  ```json
  {
    "service_type": "Household Shifting (1-2 BHK)",
    "currency": "INR"
  }
  ```
- **Data Minimization / Zero PII**: Customer names, phone numbers, email addresses, specific addresses, and dates are **strictly excluded** from GA4 event parameters.

---

## 8. Accessibility & Mobile Optimization Findings

1. **Accessibility (WCAG 2.1 AA Compliant)**:
   - All inputs linked via matching `id` and `htmlFor`.
   - Dynamic error messages linked via `aria-describedby` and tagged with `role="alert"`.
   - Invalid fields marked with `aria-invalid="true"`.
   - Required indicators visually marked with red asterisk and semantically marked with `aria-required="true"`.
   - Success view tagged with `role="status"` and `aria-live="polite"`.
2. **Mobile Form Ergonomics**:
   - Base font size set to `16px` on mobile (`text-base sm:text-sm`) to eliminate iOS Safari input auto-zooming.
   - `inputMode="tel"` forces numeric keypad on mobile devices for phone input.
   - Date picker enforces `min="YYYY-MM-DD"` to prevent past dates.

---

## 9. Distinction of Operational Stages

To maintain truth in analytics and operational reporting, the three distinct stages are defined:

1. **Form Validation Success (Code-Verified)**: The user entered valid fields passing all checks in `src/lib/validation.ts`.
2. **WhatsApp Handoff Initiation (Code-Verified & Analytics-Fired)**: The user reached the success state, `generate_lead` fired with `{ service_type }`, and the formatted WhatsApp URL was launched/rendered.
3. **Actual Lead Receipt (Operational/Off-Site)**: Occurs only when the customer sends the prepared message in WhatsApp or completes a phone conversation with Bharat Relocators.

---

## 10. Verification Suite Results

- **TypeScript Type-Check**: `npm run type-check` &rarr; **0 errors**.
- **ESLint Analysis**: `npm run lint` &rarr; **0 errors, 0 warnings**.
- **Production Build**: `npm run build` &rarr; **Compiled cleanly (22/22 static pages)**.

