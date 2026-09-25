import { FAQItem } from '@/lib/schema';

export const SERVICE_FAQS: Record<string, FAQItem[]> = {
  'household-shifting': [
    {
      q: 'What packing materials are used for household shifting?',
      a: 'We use premium 5-layer corrugated boxes, heavy-duty bubble wrap, stretch film, corner edge protectors, and custom wooden crating for fragile items and electronics to ensure complete transit protection.',
    },
    {
      q: 'Do you provide furniture dismantling and reassembly?',
      a: 'Yes. Our trained crew includes skilled carpentry support for dismantling and reassembling double beds, modular wardrobes, dining tables, and wall fittings at pickup and destination.',
    },
    {
      q: 'How is the moving cost calculated for household shifting?',
      a: 'Household shifting estimates depend on cargo volume (number of rooms and items), transit distance between origin and destination, floor level, availability of a service lift, and packing material requirements.',
    },
    {
      q: 'Are my household belongings insured during transit?',
      a: 'Yes, comprehensive goods transit insurance is provided to protect your household goods against unforeseen road transit risks and damage during highway carriage.',
    },
    {
      q: 'How should I prepare my home before the moving team arrives?',
      a: 'We advise keeping personal documents, valuables, jewelry, and medications with you, defrosting refrigerators 24 hours in advance, and setting aside essential personal items needed immediately upon arrival.',
    },
  ],
  'car-shifting': [
    {
      q: 'How is my car transported from Kolkata to other cities?',
      a: 'Cars are transported in specialized closed-container carriers equipped with low-angle hydraulic ramps for scrape-free loading, secured stationary with wheel chocks and heavy-duty tension straps.',
    },
    {
      q: 'What documents are required for car transport across India?',
      a: 'You need clear photocopies of the Vehicle Registration Certificate (RC), an active comprehensive vehicle insurance policy, a valid Pollution Under Control (PUC) certificate, and government-issued owner photo ID.',
    },
    {
      q: 'Is a pre-transit vehicle inspection conducted before loading?',
      a: 'Yes. Before loading, our move coordinator performs a joint physical inspection, documents existing scratches or minor dents, records odometer readings, and issues a signed Condition Report.',
    },
    {
      q: 'Is my vehicle insured during transit?',
      a: 'Yes, comprehensive goods-in-transit insurance coverage is provided to protect your vehicle against unexpected highway transit risks.',
    },
    {
      q: 'How much fuel should be left in the car before handover?',
      a: 'We recommend maintaining approximately 10 to 15 liters of fuel (around a quarter tank) to permit driving onto and off carrier ramps while adhering to highway safety protocols.',
    },
  ],
  'bike-shifting': [
    {
      q: 'How is my two-wheeler protected against transit scratches?',
      a: 'Two-wheelers receive multi-layer packaging with high-density bubble film, scratch-resistant foam padding, and stretch wrapping over painted parts. Optional custom wooden crating is available for premium motorcycles and cruisers.',
    },
    {
      q: 'What documents are mandatory for two-wheeler transport?',
      a: 'Mandatory documents include clear copies of the Vehicle Registration Certificate (RC), valid insurance policy, active Pollution Under Control (PUC) certificate, and government-issued photo ID of the owner.',
    },
    {
      q: 'How is the motorcycle secured inside the transport truck?',
      a: 'Motorcycles are loaded into closed container carriers and secured in an upright position using specialized wheel chocks and industrial-strength nylon tie-down straps to absorb road vibrations.',
    },
    {
      q: 'Can I ship riding accessories along with my motorcycle?',
      a: 'Helmets and declared riding accessories can be packed securely with the bike if recorded in the consignment inventory, but personal belongings should not be stored inside open bike compartments.',
    },
    {
      q: 'Should the petrol tank be emptied prior to pickup?',
      a: 'Yes. In compliance with transport safety and fire regulations, the petrol tank should be nearly empty, leaving only minimal fuel for loading maneuvers.',
    },
  ],
  'parcel-shifting': [
    {
      q: 'What items are accepted for express parcel and cargo shifting?',
      a: 'Permitted items include books, luggage, personal clothes, study materials, kitchenware, non-perishable packaged goods, and small appliances. Liquids, flammable oils, gas cylinders, and perishable items are strictly prohibited.',
    },
    {
      q: 'How are parcels packed and weighed?',
      a: 'Cartons are packed using multi-ply export-grade corrugated boxes, bubble cushioning, and waterproof tape. Exact weight and dimensions are recorded on-site during doorstep pickup.',
    },
    {
      q: 'Can I track my parcel consignment during transit?',
      a: 'Yes. Each carton is tagged with a barcode and issued a Consignment Waybill (LR) number, enabling milestone tracking through our tracking portal until scheduled delivery.',
    },
    {
      q: 'Is parcel shipping suitable for student luggage or single-room relocations?',
      a: 'Yes. Our parcel and cargo service is ideal for students, working professionals, and partial room moves needing cost-effective box-by-box transport without booking an entire truck.',
    },
    {
      q: 'What is the recommended packaging method for heavy books and study material?',
      a: 'Dense items like academic books should be packed into smaller, sturdy boxes to prevent excessive weight per box, while lighter clothing and bedding can be placed in medium-to-large cartons.',
    },
  ],
  'office-relocation': [
    {
      q: 'Can commercial office moves be conducted outside standard business hours?',
      a: 'Yes. We execute corporate moves during weekends, overnight shifts, or public holidays to ensure zero disruption to daily business workflows and client operations.',
    },
    {
      q: 'How are sensitive IT hardware and server equipment protected?',
      a: 'Server racks, desktop monitors, network switches, and sensitive electronics receive anti-static bubble packaging, high-density foam padding, and dedicated protective crates handled with extreme care.',
    },
    {
      q: 'Do you provide modular workstation dismantling and reassembly?',
      a: 'Yes. Our trained carpentry team handles the systematic dismantling and reassembly of modular workstations, cubicles, executive desks, and conference tables according to your new office floor plan.',
    },
    {
      q: 'How do you keep employee files and desk inventory organized?',
      a: 'We use a color-coded department labeling protocol where each workstation, file archive, and personal crate is tagged to correspond directly with designated seating in the destination blueprint.',
    },
    {
      q: 'What building clearances are needed prior to the move?',
      a: 'We coordinate with your facility team to obtain required building management approvals, service elevator booking reservations, and gate entry passes for both pickup and destination premises.',
    },
  ],
  'international-moving': [
    {
      q: 'What freight modes are available for international relocations from Kolkata?',
      a: 'We arrange Full Container Load (FCL) and Less than Container Load (LCL) sea freight for comprehensive household shipments, along with priority air freight for urgent personal effects.',
    },
    {
      q: 'What packaging standards are used for overseas international shipping?',
      a: 'Goods receive export-standard seaworthy packaging, including moisture-barrier foil wrapping, heavy multi-wall cartons, custom wooden lift-vans, and anti-fungal desiccant protection for ocean transit.',
    },
    {
      q: 'What documents are required for international customs clearance?',
      a: 'Mandatory documentation includes a valid passport, destination visa or work/residence permit, a detailed box-by-box itemized packing inventory with declared values, and signed customs baggage declaration forms.',
    },
    {
      q: 'Do you offer destination customs and delivery assistance?',
      a: 'Yes. Our international move coordinators provide customs documentation guidance and coordinate with overseas destination partners for port clearance and doorstep delivery at your overseas residence.',
    },
    {
      q: 'Which items are prohibited from international personal effects shipments?',
      a: 'Prohibited items include perishable foodstuffs, seeds, live plants, flammable liquids, pressurized aerosols, firearms, and currency, in compliance with international shipping and aviation regulations.',
    },
  ],
};

export function getServiceFaqs(slug: string): FAQItem[] {
  return SERVICE_FAQS[slug] || [];
}
