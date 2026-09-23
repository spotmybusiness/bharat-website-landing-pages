export interface FAQItem {
  q: string;
  a: string;
  category?: string;
}

export interface FAQCategory {
  id: string;
  name: string;
  shortName: string;
  description: string;
  faqs: FAQItem[];
}

export const FAQ_CATEGORIES: FAQCategory[] = [
  {
    id: 'general',
    name: 'General Relocation',
    shortName: 'General',
    description: 'Basic information about Bharat Relocators, types of moves handled, and geographic coverage.',
    faqs: [
      {
        q: 'What relocation services does Bharat Relocators provide?',
        a: 'Bharat Relocators provides comprehensive relocation solutions including residential household shifting, dedicated car carrier transportation, specialized bike transport, commercial office shifting, express parcel and luggage delivery, and international moving logistics coordination.',
        category: 'General Relocation',
      },
      {
        q: 'What areas and cities do you cover?',
        a: 'We provide extensive local moving services across Kolkata and Greater Kolkata (including Behala, Haltu, Salt Lake, New Town, Rajarhat, Jadavpur, Alipore, and Howrah), alongside scheduled domestic intercity relocations connecting over 230+ cities across India.',
        category: 'General Relocation',
      },
      {
        q: 'Can I move partial loads or individual luggage bags?',
        a: 'Yes. In addition to full residential and office moves, we handle part-load consignments, single rooms, student luggage, and intercity parcel shipments with doorstep pickup and itemized booking receipts.',
        category: 'General Relocation',
      },
      {
        q: 'How do I start planning my move with Bharat Relocators?',
        a: 'You can start by submitting your moving details through our online quote form, calling our coordination desk, or messaging us on WhatsApp. We will evaluate your inventory volume, assess access conditions, and provide a clear, written quotation.',
        category: 'General Relocation',
      },
    ],
  },
  {
    id: 'packing',
    name: 'Packing & Handling',
    shortName: 'Packing',
    description: 'Packaging materials, furniture dismantling, protection standards, and item preparation.',
    faqs: [
      {
        q: 'Do you provide packing materials as part of the service?',
        a: 'Yes. We supply high-grade packing materials including 5-layer heavy-duty corrugated cartons, wardrobe boxes, LED TV crates, high-density bubble cushioning, stretch film, corner protectors, and waterproof transit sheets as part of our comprehensive moving package.',
        category: 'Packing & Handling',
      },
      {
        q: 'How are delicate chinaware, glassware, and electronics protected?',
        a: 'Delicate belongings are individually wrapped in honeycomb paper and bubble cushioning before being packed into partitioned double-wall cartons. High-value electronics, LED televisions, and mirrors receive custom wooden crating and foam edge guards.',
        category: 'Packing & Handling',
      },
      {
        q: 'Do you dismantle and reassemble modular furniture?',
        a: 'Yes. Our trained technicians handle the careful dismantling and reassembly of double beds, modular wardrobes, dining tables, and workstation desks, keeping all nuts, bolts, and hardware organized in labeled pouches.',
        category: 'Packing & Handling',
      },
      {
        q: 'What items should I carry personally rather than in the moving truck?',
        a: 'We strongly advise customers to personally carry personal identification documents, property papers, passports, financial instruments, cash, jewelry, expensive laptops, and essential daily medications.',
        category: 'Packing & Handling',
      },
      {
        q: 'Should I disconnect home appliances before the moving crew arrives?',
        a: 'Yes. Please defrost and dry your refrigerator at least 24 hours prior to moving, disconnect washing machine drain hoses, and remove ink cartridges from desktop printers to prevent transit spills.',
        category: 'Packing & Handling',
      },
    ],
  },
  {
    id: 'transit',
    name: 'Transportation & Delivery',
    shortName: 'Transit',
    description: 'Vehicle fleet specifications, transit times, monitoring, and highway safety protocols.',
    faqs: [
      {
        q: 'What types of vehicles are used for transportation?',
        a: 'We utilize dedicated closed-body, weather-tight container vehicles designed to shield household belongings and cargo from highway dust, rain, and transit vibrations. Vehicles feature internal tie-down lashing rails to secure cargo safely.',
        category: 'Transportation & Delivery',
      },
      {
        q: 'How long does an intercity move take?',
        a: 'Transit timelines depend on the total highway distance, route clearance, state border entry regulations, and vehicle type. For example, Kolkata to Delhi or Bangalore typically takes 4 to 7 days. Your coordinator provides an estimated delivery window at the time of booking.',
        category: 'Transportation & Delivery',
      },
      {
        q: 'Can I track my consignment during highway transit?',
        a: 'Yes. Once your vehicle departs, you receive regular milestone transit updates via WhatsApp or SMS. You can also contact your dedicated move coordinator directly for live checkpoint location details.',
        category: 'Transportation & Delivery',
      },
      {
        q: 'Is my shipment covered under transit insurance?',
        a: 'Yes, goods transit insurance is arranged for intercity shipments to protect against unforeseen transit risks. Your coordinator can assist you with declaration paperwork and insurance policy details before loading.',
        category: 'Transportation & Delivery',
      },
    ],
  },
  {
    id: 'services',
    name: 'Service-Specific Inquiries',
    shortName: 'Services',
    description: 'Specific details for vehicle shipping, office moves, parcel cargo, and international freight.',
    faqs: [
      {
        q: 'How are cars transported across states?',
        a: 'Four-wheelers are shipped inside enclosed car-carrier trailers equipped with hydraulic ramps, wheel chocks, and safety tie-down lashing to prevent any movement or road debris scratches during transit.',
        category: 'Service-Specific',
      },
      {
        q: 'How should my motorcycle or scooter be prepared for transport?',
        a: 'Please keep the fuel tank nearly empty (below 2 liters), remove rear-view mirrors for safe boxing, and ensure bike documentation (RC copy, insurance, PUC) is kept ready for highway transit permits. The bike is packed in custom wooden crating with foam wrap.',
        category: 'Service-Specific',
      },
      {
        q: 'How do you coordinate commercial office relocations without downtime?',
        a: 'We execute office moves in planned phases, often over weekends or overnight. Workstations are numbered, server racks receive anti-static wrapping, and files are cataloged by department to ensure business resumes promptly on Monday.',
        category: 'Service-Specific',
      },
      {
        q: 'What is required for international moving assistance?',
        a: 'International relocations require destination customs paperwork, passport/visa documentation, and specialized export-grade wooden crating. We coordinate air or ocean freight dispatches in partnership with established overseas logistics partners.',
        category: 'Service-Specific',
      },
    ],
  },
  {
    id: 'pricing',
    name: 'Pricing & Quotations',
    shortName: 'Pricing',
    description: 'How estimates are calculated, payment terms, and transparency policies.',
    faqs: [
      {
        q: 'How much does relocation cost?',
        a: 'Relocation cost is determined by total cargo volume, distance between addresses, floor levels and elevator access, packing material specifications, and vehicle type. We provide itemized written quotes tailored to your exact inventory.',
        category: 'Pricing & Quotations',
      },
      {
        q: 'Do you provide free moving quotes before booking?',
        a: 'Yes! Initial volume assessments and written price estimates are provided completely free of charge and without any booking obligation.',
        category: 'Pricing & Quotations',
      },
      {
        q: 'Are there any hidden surcharges on moving day?',
        a: 'No. Bharat Relocators maintains a zero-hidden-surcharge policy. All agreed packing materials, labor, loading, freight, and unloading costs are clearly stated in your written quote before work begins.',
        category: 'Pricing & Quotations',
      },
      {
        q: 'What payment methods do you accept?',
        a: 'We accept digital bank transfers (NEFT/RTGS/IMPS), UPI payments, debit/credit cards, and cheques as per the milestones outlined in your quotation agreement.',
        category: 'Pricing & Quotations',
      },
    ],
  },
  {
    id: 'booking',
    name: 'Booking & Coordination',
    shortName: 'Booking',
    description: 'Advance scheduling, booking confirmation, and coordinator assignment.',
    faqs: [
      {
        q: 'How far in advance should I schedule my move?',
        a: 'We recommend booking 3 to 5 days in advance for local moves within Kolkata, and 7 to 10 days in advance for intercity relocations. Advance notice guarantees preferred time slots and specialized container availability.',
        category: 'Booking & Coordination',
      },
      {
        q: 'Can I reschedule my moving date if my plans change?',
        a: 'Yes. If your possession date shifts or personal schedules change, inform your dedicated coordinator as early as possible. We will adjust your moving schedule based on vehicle and crew availability.',
        category: 'Booking & Coordination',
      },
      {
        q: 'Who will be my point of contact during the relocation?',
        a: 'You will be assigned a dedicated move coordinator who oversees every phase &mdash; from initial packing dispatch to highway transit alerts and destination room placement.',
        category: 'Booking & Coordination',
      },
    ],
  },
  {
    id: 'moving-day',
    name: 'During the Move',
    shortName: 'Moving Day',
    description: 'Arrival expectations, building permissions, supervision, and loading workflows.',
    faqs: [
      {
        q: 'What happens on moving day when the team arrives?',
        a: 'Our uniformed crew arrives with a supervisor who conducts an initial walkthrough, reviews specific priorities with you, labels items room-by-room, and begins multi-layer protective packaging.',
        category: 'During the Move',
      },
      {
        q: 'Do I need to be present throughout packing and loading?',
        a: 'We advise that you or an authorized family member/representative be present during initial packing to guide our crew regarding priority items, personal belongings, and inventory verification.',
        category: 'During the Move',
      },
      {
        q: 'How should building access and society permissions be arranged?',
        a: 'Please notify your apartment society or building management in advance to reserve elevator usage and ensure truck parking clearance near the service entrance or loading bay.',
        category: 'During the Move',
      },
    ],
  },
  {
    id: 'handover',
    name: 'Delivery & Handover',
    shortName: 'Handover',
    description: 'Unloading, room placement, furniture assembly, and inventory verification.',
    faqs: [
      {
        q: 'What happens when the carrier reaches my destination?',
        a: 'Our destination crew unloads items directly into your designated rooms according to color-coded labels, reassembles modular furniture, and assists with initial unpacking where scheduled.',
        category: 'Delivery & Handover',
      },
      {
        q: 'How is the final handover verified?',
        a: 'A joint inventory inspection is conducted with the supervisor, cross-checking delivered items against the original pickup inventory manifest before final sign-off.',
        category: 'Delivery & Handover',
      },
      {
        q: 'Do you remove unpacked cartons and packing debris?',
        a: 'Yes. Our team collects empty boxes, stretch film scraps, and packing debris generated during unpacking to leave your new home clean and organized.',
        category: 'Delivery & Handover',
      },
      {
        q: 'Who should I contact if I have questions after delivery?',
        a: 'Your dedicated move coordinator and our customer support desk remain accessible after delivery to address any follow-up questions or documentation needs.',
        category: 'Delivery & Handover',
      },
    ],
  },
];

// Preserved flat list of core FAQs for backward compatibility
export const FAQS: FAQItem[] = FAQ_CATEGORIES.flatMap((category) => category.faqs);
