/**
 * Bharat Relocators — Blog & Rate Card Knowledge Base
 *
 * Single source of truth for all educational blog posts,
 * verified price benchmarks, corridor rate cards, and SEO schemas.
 */

export interface CorridorRate {
  corridor: string;
  distanceKm: string;
  oneBhk: string;
  twoBhk: string;
  threeBhk: string;
  duration: string;
}

export interface QuickAnswerRate {
  homeSize: string;
  localCost: string;
  intercityCost: string;
  truckType: string;
  crewSize: string;
  duration: string;
}

export interface LiftComparisonItem {
  component: string;
  withLift: string;
  withoutLift: string;
  notes: string;
}

export interface BlogFaq {
  question: string;
  answer: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  category: string;
  categorySlug: string;
  publishedDate: string;
  updatedDate: string;
  readTime: string;
  author: {
    name: string;
    role: string;
    organization: string;
  };
  featuredImage: string;
  featuredImageAlt: string;
  targetKeywords: string[];
  tags: string[];
  quickAnswer: {
    headline: string;
    summary: string;
    rates: QuickAnswerRate[];
    inclusionsSummary: string[];
  };
  corridorRates: CorridorRate[];
  liftComparison: {
    scenarioTitle: string;
    scenarioDesc: string;
    items: LiftComparisonItem[];
    withLiftTotal: string;
    withoutLiftTotal: string;
    staircaseRules: {
      floor: string;
      typicalCharge: string;
      details: string;
    }[];
  };
  shuttleAndGst: {
    shuttleHeadline: string;
    shuttleDesc: string;
    shuttleRates: {
      vehicle: string;
      capacity: string;
      chargePerTrip: string;
      applicableZones: string;
    }[];
    gstHeadline: string;
    gstDesc: string;
    gstTypes: {
      rate: string;
      serviceScope: string;
      sacCode: string;
      bestFor: string;
    }[];
  };
  faqs: BlogFaq[];
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'packers-and-movers-kolkata-charges',
    title:
      'Packers and Movers Kolkata Charges [2026 Rate Card]: 1BHK to 3BHK Local & Intercity Costs',
    h1: 'Packers and Movers Kolkata Charges [2026 Rate Card]: 1BHK to 3BHK Local & Intercity Costs',
    metaTitle:
      'Packers and Movers Kolkata Charges [2026 Rate Card]: 1BHK to 3BHK Local & Intercity Costs',
    metaDescription:
      'Planning a move in Kolkata? Check verified 2026 packers and movers Kolkata charges: 1BHK ₹4,500 - ₹8,500, 2BHK ₹7,500 - ₹13,500, 3BHK ₹11,000 - ₹19,500. Corridor rate card, lift vs staircase bills, tempo fees & GST.',
    excerpt:
      'Comprehensive 2026 pricing guide for packers and movers in Kolkata. Explore exact 1BHK to 3BHK local rates, top corridor charges (New Town, Salt Lake, Howrah), staircase fees, narrow-lane tempo charges, and 18% GST.',
    category: 'Cost & Pricing Guides',
    categorySlug: 'pricing-guides',
    publishedDate: '2026-01-15',
    updatedDate: '2026-10-31',
    readTime: '8 min read',
    author: {
      name: 'Bharat Relocators Moving Team',
      role: 'Logistics Operations Lead',
      organization: 'Bharat Relocators Kolkata',
    },
    featuredImage: '/images/packaging.png',
    featuredImageAlt:
      'Bharat Relocators packing crew handling residential household shifting in Kolkata with 5-layer protective packing',
    targetKeywords: [
      'packers and movers kolkata charges',
      'house shifting cost in kolkata',
      '1bhk moving cost kolkata',
    ],
    tags: [
      'Packers and Movers Kolkata Charges',
      'House Shifting Cost in Kolkata',
      '1BHK Moving Cost Kolkata',
      '2026 Rate Card',
      'Household Shifting',
    ],
    quickAnswer: {
      headline: 'Quick Answer: How Much Do Packers and Movers Charge in Kolkata? (2026 Baseline)',
      summary:
        'In Kolkata, local house shifting costs generally range from ₹4,500 to ₹8,500 for a 1 BHK, ₹7,500 to ₹13,500 for a 2 BHK, and ₹11,000 to ₹19,500 for a 3 BHK apartment. For intercity moves from Kolkata to metros like Bangalore, Delhi, or Mumbai, charges start from ₹14,000 to ₹52,000 depending on consignment volume and total highway kilometers.',
      rates: [
        {
          homeSize: '1 BHK Apartment',
          localCost: '₹4,500 – ₹8,500',
          intercityCost: '₹14,000 – ₹24,000',
          truckType: 'Tata Ace / Bolero Pickup',
          crewSize: '2 – 3 Men',
          duration: '3 – 5 Hours',
        },
        {
          homeSize: '2 BHK Apartment',
          localCost: '₹7,500 – ₹13,500',
          intercityCost: '₹22,000 – ₹36,000',
          truckType: '14ft Closed Container',
          crewSize: '3 – 4 Men',
          duration: '5 – 7 Hours',
        },
        {
          homeSize: '3 BHK Apartment',
          localCost: '₹11,000 – ₹19,500',
          intercityCost: '₹32,000 – ₹52,000',
          truckType: '17ft / 19ft Container',
          crewSize: '4 – 5 Men',
          duration: '6 – 9 Hours',
        },
        {
          homeSize: '4+ BHK / Independent Villa',
          localCost: '₹16,000 – ₹28,000+',
          intercityCost: '₹45,000 – ₹75,000+',
          truckType: '19ft / 22ft Dedicated',
          crewSize: '5 – 7 Men',
          duration: '1 – 2 Days',
        },
      ],
      inclusionsSummary: [
        'Multi-layer protective packing (corrugated sheets, bubble wrap, stretch film)',
        'Experienced moving crew for careful loading, transit, and unloading',
        'Dedicated closed-body transport container with weatherproofing',
        'Basic furniture dismantling and reassembly (beds, tables, modular units)',
        'Zero hidden charges with transparent written billing',
      ],
    },
    corridorRates: [
      {
        corridor: 'Haltu / Jadavpur to New Town',
        distanceKm: '18 – 22 km',
        oneBhk: '₹5,000 – ₹7,000',
        twoBhk: '₹8,500 – ₹11,500',
        threeBhk: '₹12,500 – ₹16,500',
        duration: '4 – 6 Hours',
      },
      {
        corridor: 'Behala to Salt Lake (Sector I - V)',
        distanceKm: '20 – 25 km',
        oneBhk: '₹5,500 – ₹7,500',
        twoBhk: '₹9,000 – ₹12,500',
        threeBhk: '₹13,500 – ₹18,000',
        duration: '5 – 7 Hours',
      },
      {
        corridor: 'Ballygunge to Howrah (via Vidyasagar / Howrah Bridge)',
        distanceKm: '12 – 16 km',
        oneBhk: '₹4,500 – ₹6,500',
        twoBhk: '₹7,500 – ₹10,500',
        threeBhk: '₹11,500 – ₹15,000',
        duration: '4 – 5 Hours',
      },
      {
        corridor: 'Garia / EM Bypass to Rajarhat (Action Area I, II, III)',
        distanceKm: '22 – 27 km',
        oneBhk: '₹5,500 – ₹7,500',
        twoBhk: '₹9,200 – ₹12,800',
        threeBhk: '₹13,800 – ₹18,500',
        duration: '5 – 7 Hours',
      },
      {
        corridor: 'Alipore / New Alipore to New Town',
        distanceKm: '24 – 28 km',
        oneBhk: '₹6,000 – ₹8,000',
        twoBhk: '₹9,500 – ₹13,000',
        threeBhk: '₹14,000 – ₹19,000',
        duration: '5 – 8 Hours',
      },
      {
        corridor: 'Tollygunge to Dum Dum / Airport Area',
        distanceKm: '26 – 30 km',
        oneBhk: '₹6,500 – ₹8,500',
        twoBhk: '₹10,000 – ₹13,500',
        threeBhk: '₹14,500 – ₹19,500',
        duration: '6 – 8 Hours',
      },
    ],
    liftComparison: {
      scenarioTitle: 'Sample Bill Comparison: 2 BHK Apartment Move in Kolkata',
      scenarioDesc:
        'Realistic breakdown for moving a standard 2 BHK household (approx. 18-20 km) comparing a building With Operational Service Lift versus a building Without Lift (3rd Floor Staircase Carry).',
      items: [
        {
          component: 'Premium 5-Layer Packing & Supplies (Boxes, Bubble, Wrap)',
          withLift: '₹3,500',
          withoutLift: '₹3,500',
          notes: 'Identical packing materials and expert labor required in both cases',
        },
        {
          component: 'Dedicated Closed-Body Container Transit (14ft Truck + Fuel)',
          withLift: '₹3,800',
          withoutLift: '₹3,800',
          notes: 'Standard inter-neighborhood transit tariff including toll taxes',
        },
        {
          component: 'Pickup Loading Labour (3 Crew Members)',
          withLift: '₹1,600 (via Lift)',
          withoutLift: '₹2,600 (3rd Floor Stairs)',
          notes: 'Additional ₹500/floor applied for staircase carry of heavy items',
        },
        {
          component: 'Destination Unloading & Placement',
          withLift: '₹1,600 (via Lift)',
          withoutLift: '₹2,600 (2nd Floor Stairs)',
          notes: 'Staircase carry fee of ₹500/floor for heavy wooden beds & wardrobes',
        },
        {
          component: 'Basic Furniture Assembly (Double Bed, Dining, Wardrobe)',
          withLift: '₹1,000',
          withoutLift: '₹1,000',
          notes: 'Standard carpenter services included at flat rate',
        },
      ],
      withLiftTotal: '₹11,500',
      withoutLiftTotal: '₹13,500',
      staircaseRules: [
        {
          floor: 'Ground Floor',
          typicalCharge: '₹0 (Standard)',
          details: 'Direct roll-out access from door to truck ramp with zero elevation fees.',
        },
        {
          floor: '1st Floor (Stairs Only)',
          typicalCharge: '₹300 – ₹500 flat',
          details: 'One flight of stairs; minimal extra physical exertion for crew.',
        },
        {
          floor: '2nd Floor (Stairs Only)',
          typicalCharge: '₹600 – ₹1,000 total',
          details: 'Two flights of stairs requiring manual haulage of heavy appliances & mattresses.',
        },
        {
          floor: '3rd Floor and Above (Stairs)',
          typicalCharge: '₹400 – ₹600 per additional floor',
          details: 'Significantly increases loading time and physical crew effort for heavy almirahs.',
        },
      ],
    },
    shuttleAndGst: {
      shuttleHeadline: 'Narrow-Lane Shuttle Tempo Fees in Kolkata',
      shuttleDesc:
        'Kolkata is famous for its charming historic neighborhoods and heritage paras (such as narrow lanes in Haltu, Behala, Jadavpur, Bagbazar, Bowbazar, and Shyambazar). In many of these residential pockets, a 14ft or 17ft large container truck cannot directly enter because of overhead cables, tight turns, or parked cars. When this occurs, a smaller "Shuttle Tempo" is required to transfer goods from your doorstep to the main container truck parked on the wider main road.',
      shuttleRates: [
        {
          vehicle: 'Small Shuttle Tempo (Tata Ace / Chota Hathi)',
          capacity: 'Approx. 750 kg / 1.5 tons',
          chargePerTrip: '₹1,200 – ₹2,000 per trip',
          applicableZones:
            'North Kolkata alleys, old South Kolkata paras, narrow bypass bylanes',
        },
        {
          vehicle: 'Hand Trolley / Manual Long-Distance Carry (100m+)',
          capacity: 'Manual trolley carry',
          chargePerTrip: '₹500 – ₹1,000 flat',
          applicableZones:
            'Gated communities or pedestrian alleys where even small tempos cannot park',
        },
      ],
      gstHeadline: '18% GST vs. 5% GTA: Understanding Moving Taxes in Kolkata',
      gstDesc:
        'When booking verified packers and movers in West Bengal, GST billing depends on whether you book a composite packing-and-moving service or pure goods transport. Here is how it works to ensure you get a 100% compliant tax invoice for corporate or personal claims.',
      gstTypes: [
        {
          rate: '18% GST (Full Composite Relocation)',
          serviceScope:
            'All-inclusive service: packing, loading, transportation, unloading, unpacking & transit insurance.',
          sacCode: 'SAC 9987 / 9965',
          bestFor:
            'Standard household shifting & corporate employee relocations eligible for company reimbursement.',
        },
        {
          rate: '5% GST (Goods Transport Agency - GTA)',
          serviceScope:
            'Transport vehicle freight only, where the client manages their own packing and loading (Reverse Charge Mechanism - RCM).',
          sacCode: 'SAC 9965 / 9967',
          bestFor:
            'Commercial freight shippers and bulk logistics where client crew handles physical handling.',
        },
      ],
    },
    faqs: [
      {
        question: 'What is the average 1BHK moving cost in Kolkata for local shifting?',
        answer:
          'Local 1BHK shifting within Kolkata typically costs between ₹4,500 and ₹8,500. The cost depends on the distance (e.g. within 10 km vs 25 km across the city), the volume of electronics and furniture requiring multi-layer packing, and whether both buildings have operational elevators.',
      },
      {
        question: 'How much do packers and movers charge in Kolkata for 2BHK and 3BHK flats?',
        answer:
          'For a 2BHK flat in Kolkata, the local moving cost usually ranges from ₹7,500 to ₹13,500. For a larger 3BHK flat, charges range from ₹11,000 to ₹19,500. These rates include complete 5-layer protective packing materials, labor for loading and unloading, a dedicated closed container truck, and furniture dismantling and reassembly.',
      },
      {
        question: 'Why do packers and movers charge extra if there is no elevator/lift?',
        answer:
          'Carrying heavy furniture (like double beds, solid wood wardrobes, and refrigerators) up or down multiple flights of stairs demands substantial physical labor, extra crew members, and extended working hours. In Kolkata, movers typically charge between ₹300 to ₹600 per floor when an elevator is unavailable or non-functional.',
      },
      {
        question: 'What is the narrow-lane shuttle tempo charge in Kolkata?',
        answer:
          'If your apartment or house is situated in a narrow Kolkata lane (para) where standard 14ft or 17ft container trucks cannot enter due to overhead electric wires or tight bends, a smaller shuttle tempo (like a Tata Ace) is used to ferry goods to the main truck. Shuttle tempo charges generally range from ₹1,200 to ₹2,000 per trip.',
      },
      {
        question: 'Is 18% GST mandatory for packers and movers in Kolkata?',
        answer:
          'Yes. Full-service household shifting (which combines packing materials, labor, transportation, and unpacking) is classified under Indian GST regulations as a Composite Supply and attracts an 18% GST rate under SAC 9987/9965. Having a legitimate GST invoice is also mandatory if you plan to claim relocation allowances from your employer.',
      },
      {
        question: 'How can I get an accurate, fixed quote without surprise charges?',
        answer:
          'You can get an accurate guaranteed written quote from Bharat Relocators by scheduling a quick video survey or in-person evaluation. Our move coordinator inventories every large item, checks floor heights, verifies lane accessibility, and provides an all-inclusive quotation with zero hidden fees.',
      },
    ],
  },
];

export function getAllBlogPosts(): BlogPost[] {
  return BLOG_POSTS;
}

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((post) => post.slug === slug);
}
