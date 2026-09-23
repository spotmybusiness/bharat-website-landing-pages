# Bharat Relocators — Business & Entity Map (Phase 2 / Task 15)

**Date**: September 2026  
**Status**: Completed Research & Intelligence Document  
**Scope**: Knowledge Graph & Entity Architecture of Bharat Relocators  

---

## 1. Executive Summary

This document maps all real-world entities, services, geographic points of interest, and organizational attributes currently established by the Bharat Relocators website. Establishing well-defined entity relationships enables search engines (Google Knowledge Graph, local map algorithms) and prospective customers to understand the company's core competencies, physical footprint, and operational scope without ambiguity.

---

## 2. Core Entity Architecture Matrix

```
                        [ Bharat Relocators ]
                   (LocalBusiness / Organization)
                                  │
         ┌────────────────────────┼────────────────────────┐
         │                        │                        │
  [ Physical Entity ]     [ Service Entities ]    [ Trust / Digital Entities ]
  • Address: Haltu,       • Household Shifting    • Google Business Profile
    Kolkata 700078        • Bike Transport          (Place ID, 4.9★, 305+ Rev)
  • Phone / WhatsApp      • Car Transportation    • TrackingMore Integration
  • Metro Service Area    • Parcel & Cargo        • ISO Certifications
                          • Office Relocation
                          • International Moving
```

---

## 3. Detailed Entity Profiles

### 3.1 Entity: Bharat Relocators (Primary Organization)
- **Entity Type**: `schema.org/MovingCompany` / `schema.org/LocalBusiness` / `schema.org/Organization`
- **What the Website Explicitly Establishes**:
  - Legal & Brand Name: *Bharat Relocators*
  - Primary Contact Number: `+91 91230 46504`
  - Secondary Contact Number: `+91 83358 21414`
  - Corporate Email: `contact@bharatrelocators.com`
  - Tagline / Positioning: *Packers and Movers · Behala / Haltu, Kolkata*
  - Social Profiles: Facebook (`/bharatrelocators`), Instagram (`/bharatrelocators`), Twitter (`@bharatrelocator`)
  - Operational Scope: Local Kolkata shifting + PAN India interstate relocations across 230+ cities + Worldwide international moving.
- **Supporting Pages**:
  - `/` (Homepage), `/about`, `/contact`, `src/lib/business.ts`
- **Important Missing Information**:
  - Exact year of establishment / incorporation date (requires client confirmation).
  - Business structure (Sole Proprietorship, Partnership, Private Limited).
  - Official GSTIN number on public footer/pages (currently in internal verification).
- **Would Additional Content Help?**:
  - Yes. Explicitly adding business registration details (GSTIN, legal registration) and verified establishment year in the schema and company profile strengthens E-E-A-T and local entity trust.

---

### 3.2 Entity: Kolkata & Haltu Business Location (Geographic / Physical Entity)
- **Entity Type**: `schema.org/PostalAddress` / `schema.org/Place`
- **What the Website Explicitly Establishes**:
  - Street Address: `17, Ramlal Bazar Rd`
  - Locality: `Ramlal Bazar, Haltu`
  - City: `Kolkata`
  - State: `West Bengal`
  - Postal Code: `700078`
  - Country: `India`
  - Google Map Embed & Coordinates: Place ID `0x3a027bee00518db7:0x84b05f269470ad0`
  - Primary Operational Base: South Kolkata with service capability covering all Kolkata neighborhoods (Salt Lake, New Town, Behala, Jadavpur, Ballygunge, Garia, Howrah, etc.).
- **Supporting Pages**:
  - `/contact`, `src/components/Footer.tsx`, `src/lib/business.ts`
- **Important Missing Information**:
  - Exact verified operating hours (website states 24/7 quote support, while Google profile shows Mon-Sat 8:00 AM – 7:00 PM; needs client alignment).
  - Landmark / nearby major transit hub guidance for walk-in visitors.
- **Would Additional Content Help?**:
  - Yes. Clear directions, parking availability, and landmark context around Ramlal Bazar / Haltu for walk-in consultations provide high local relevance.

---

### 3.3 Entity: Google Business Profile & Customer Reputation (Trust Entity)
- **Entity Type**: `schema.org/AggregateRating` / `schema.org/Review`
- **What the Website Explicitly Establishes**:
  - Google Rating: `4.9 ★`
  - Review Count: `305+ Verified Reviews`
  - Direct Shortlink: `https://g.page/r/CdAKR2nyBUsIEBM`
  - Real customer feedback across specific services (Household, Bike, Car, Cargo, Office).
- **Supporting Pages**:
  - `/testimonials`, `/` (Reviews Carousel), `src/app/components/GoogleBusinessProfileCard.tsx`
- **Important Missing Information**:
  - Live automatic sync of new incoming Google reviews (currently served from static verified dataset with API fallback).
- **Would Additional Content Help?**:
  - Yes. Continuing to feature verified, granular case studies and customer stories tied to specific intercity routes (e.g. Kolkata to Bangalore, Kolkata to Hyderabad) boosts topical relevance.

---

### 3.4 Entity: Household Shifting (Service Entity)
- **Entity Type**: `schema.org/Service` (Residential Relocation)
- **What the Website Explicitly Establishes**:
  - 5-layer corrugated packing methodology.
  - In-house carpentry for furniture dismantling and reassembly (beds, wardrobes, dining sets).
  - Dedicated containerized truck transport with shock padding.
  - Room-wise unpacking and debris removal at destination.
  - Pre-move customer preparation checklist (refrigerator defrosting, essential item segregation).
- **Supporting Pages**:
  - `/household-shifting`, `/`, `/faqs`
- **Important Missing Information**:
  - Floor-rise charges / lift availability policies for high-rise apartments in Kolkata.
  - Society permission / gate pass protocols common in gated communities (e.g. South City, Uniworld City, Urbana).
- **Would Additional Content Help?**:
  - Yes. Practical guides covering high-rise residential apartment moves and society gate pass requirements in Kolkata directly address frequent customer pain points.

---

### 3.5 Entity: Bike Transportation (Service Entity)
- **Entity Type**: `schema.org/Service` (Two-Wheeler Shipping)
- **What the Website Explicitly Establishes**:
  - Custom wooden crating options for premium/sports motorcycles.
  - High-density bubble wrap and scratch-resistant foam padding.
  - Wheel chocks and heavy-duty nylon tie-down strap anchoring.
  - Mandatory document checklist: Registration Certificate (RC), valid insurance policy, PUC certificate, and owner ID proof.
  - Showroom pickup and doorstep delivery.
- **Supporting Pages**:
  - `/bike-shifting`, `/`, `/faqs`
- **Important Missing Information**:
  - Fuel draining regulations (protocol regarding leaving minimal / empty fuel in tank prior to highway transit).
  - Battery disconnection protocols during long-distance shipping.
- **Would Additional Content Help?**:
  - Yes. A concise two-wheeler transport checklist detailing fuel drainage and accessory removal guidelines solves customer anxiety and operational delays.

---

### 3.6 Entity: Car Transportation (Service Entity)
- **Entity Type**: `schema.org/Service` (Automotive Logistics)
- **What the Website Explicitly Establishes**:
  - Dedicated enclosed/closed container car carriers protecting against weather, road debris, and stone chips.
  - Low-angle hydraulic ramps for low ground-clearance sedans and hatchbacks.
  - Pre-transit condition report (photographic & written scratch/dent documentation and odometer logging).
  - Wheel chocking and tension strap anchoring.
  - Comprehensive transit insurance coverage.
- **Supporting Pages**:
  - `/car-shifting`, `/`
- **Important Missing Information**:
  - Personal belongings inside vehicle policy (clarifying that personal goods cannot legally be packed inside cars per RTO transport guidelines).
  - Transit time estimates for key national trunk routes (Kolkata to Bangalore, Mumbai, Delhi, Hyderabad).
- **Would Additional Content Help?**:
  - Yes. Clear timeline matrices and RTO legal guidelines regarding luggage inside transit cars help set accurate expectations.

---

### 3.7 Entity: Parcel & Cargo Shifting (Service Entity)
- **Entity Type**: `schema.org/Service` (Express Intercity Logistics)
- **What the Website Explicitly Establishes**:
  - Doorstep pickup across Kolkata with on-the-spot weighing.
  - Export-grade multi-ply corrugated boxes and waterproof sealing.
  - Individual barcode labeling and Consignment Waybill (LR) numbers.
  - Network coverage spanning 230+ cities across India.
  - Tailored for student luggage, single-room items, excess baggage, and small commercial cargo.
- **Supporting Pages**:
  - `/parcel-shifting`, `/`
- **Important Missing Information**:
  - Prohibited items list (liquids, flammable items, contraband).
  - Volumetric weight calculation formula (LxWxH / 5000) explanation.
- **Would Additional Content Help?**:
  - Yes. Transparent guidance on volumetric vs. actual weight calculations and prohibited goods prevents customer confusion during weighing.

---

### 3.8 Entity: Office Relocation (Service Entity)
- **Entity Type**: `schema.org/Service` (Commercial & Corporate Moving)
- **What the Website Explicitly Establishes**:
  - Pre-move site survey and architectural floor plan seating assessments.
  - Anti-static packaging and heavy cushioning for IT servers, rack equipment, and monitors.
  - Weekend (Friday night to Sunday) and overnight shifts to ensure zero business downtime.
  - Modular workstation and cubicle carpentry dismantling and reassembly.
  - Color-coded department and employee crate labeling.
- **Supporting Pages**:
  - `/office-relocation`, `/`
- **Important Missing Information**:
  - IT server cabling / reconnect assistance boundaries (physical relocation vs. network engineer setup).
  - Confidential archive disposal / secure document destruction services.
- **Would Additional Content Help?**:
  - Yes. Clarifying the exact handoff boundaries between physical IT server moving and network reconfiguration creates clear expectations for corporate IT leads.

---

### 3.9 Entity: International Moving (Service Entity)
- **Entity Type**: `schema.org/Service` (Global Freight & Overseas Relocation)
- **What the Website Explicitly Establishes**:
  - Full Container Load (FCL) and Less than Container Load (LCL) sea freight options.
  - Air freight cargo for urgent personal effects.
  - Seaworthy moisture-barrier packing with silica gel desiccants and custom lift-vans.
  - Bilingual itemized customs packing list preparation.
  - Origin customs documentation and overseas destination delivery coordination.
- **Supporting Pages**:
  - `/international-moving`, `/`
- **Important Missing Information**:
  - Destination country customs duty / import tax liability disclaimer (customs duties are levied by destination governments, not included in freight freight rates).
  - List of partner destination countries frequently serviced.
- **Would Additional Content Help?**:
  - Yes. Educational content detailing customs documentation requirements (Transfer of Residence - TR rules, passport copies, visa categories) provides tremendous search and conversion value.

---

### 3.10 Entity: Shipment Tracking System (Feature / Operational Entity)
- **Entity Type**: `schema.org/ServiceChannel` / Consignment Management
- **What the Website Explicitly Establishes**:
  - Integration with third-party tracking portal (`https://bharatrelocators8j.trackingmore.org/`).
  - SMS & WhatsApp LR/Waybill dispatch upon Kolkata departure.
  - 3-step tracking workflow: Obtain LR -> Open Portal -> Monitor Milestones.
- **Supporting Pages**:
  - `/track-your-shipment`, `src/lib/business.ts`
- **Important Missing Information**:
  - Direct embedded in-page tracking form (currently links out to TrackingMore URL).
- **Would Additional Content Help?**:
  - Yes. Embedding an in-page tracking lookup widget would keep users on-site and reduce bounce rates.

---

### 3.11 Entity: Quotation & Cost Estimation Process (Transactional Entity)
- **Entity Type**: Price Discovery / Lead Generation
- **What the Website Explicitly Establishes**:
  - Multi-step interactive estimator (Service Type -> Route/Pincode -> Home Size / Inventory -> Contact Details).
  - Upfront, transparent pricing commitment with zero hidden charges.
  - Indicative price bands (e.g. 1BHK Kolkata local move starts at ₹4,000–₹8,000).
  - Guaranteed response time in under 3 hours.
- **Supporting Pages**:
  - `/get-a-quote`, `/`, `/faqs`
- **Important Missing Information**:
  - Route-specific pricing guidelines for major intercity destinations (e.g., Kolkata to Bangalore, Kolkata to Delhi).
- **Would Additional Content Help?**:
  - Yes. Adding realistic price estimation ranges for top 5 national corridors helps pre-qualify leads and reduces price-shock friction.

