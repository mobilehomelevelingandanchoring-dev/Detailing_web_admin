import { Droplets } from 'lucide-react';
import type { ServicePageData } from '@/data/types';

export const exteriorValetingWilmslow: ServicePageData = {
  slug: 'exterior-valeting',
  name: 'Exterior Valeting Wilmslow',
  seo: {
    title: 'Exterior Valeting Wilmslow | Exterior Car Valet SK9 | SRV Detailing',
    description:
      'Professional exterior car valeting in Wilmslow. Hand wash, wheel decontamination, drying, and protective wax or sealant. Safe two-bucket method for prestige vehicles. SK9 mobile service.',
    keywords: [
      'exterior valeting wilmslow',
      'exterior car valet wilmslow',
      'exterior valet sk9',
      'car exterior clean wilmslow',
      'exterior valet cheshire east',
      'mobile exterior valet wilmslow',
    ],
    canonical: 'https://www.srvdetailing.co.uk/wilmslow/car-valeting/exterior-valeting',
  },
  icon: Droplets,
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Wilmslow', href: '/wilmslow' },
    { label: 'Car Valeting', href: '/wilmslow/car-valeting' },
    { label: 'Exterior Valeting', href: '/wilmslow/car-valeting/exterior-valeting' },
  ],
  heroTitle: 'Exterior Valeting Wilmslow — Safe Hand Wash for SK9 Vehicles',
  heroDescription:
    'When your interior is clean but your exterior needs professional attention, our exterior valet delivers a thorough snow foam pre-wash, two-bucket hand wash, iron fallout treatment on wheels, drying, and protective wax or sealant — all at your Wilmslow door.',
  imageKey: 'exterior',
  contentSections: [
    {
      type: 'text',
      heading: 'When an Exterior Valet Is the Right Choice',
      bodyParagraphs: [
        "An exterior valet is the efficient choice when your vehicle's interior is clean but the exterior has accumulated A34 road film, Cheshire salt, or tree sap that needs proper professional treatment. It is also the ideal service for vehicles that are regularly detailed or valeted inside but need more frequent exterior maintenance — particularly relevant for prestige vehicles in Wilmslow and Alderley Edge that are detailed quarterly but need exterior washing more often.",
        "Our exterior valet uses exactly the same safe techniques as our full valet exterior stage — snow foam pre-soak, two-bucket hand wash with clean microfibre mitts, dedicated wheel brushes, iron fallout removal, microfibre hand drying, and protective wax or sealant application. Nothing is skipped, and no automated equipment or brushes are ever used.",
      ],
    },
    {
      type: 'list',
      heading: 'Exterior Valet — What Is Included',
      items: [
        'Snow foam pre-wash — pH-balanced foam applied with lance, encapsulates A34 road salt and brake dust before any contact',
        'Two-bucket hand wash — microfibre mitts, pH-neutral shampoo, grit guard method on every panel',
        'Iron fallout removal on alloy wheels — chemical treatment dissolves embedded ferrous brake and rail dust particles',
        'Dedicated wheel brush cleaning of alloy faces, spokes, and barrel',
        'Tyre cleaning and dressing',
        'Tar spot treatment on lower panels where needed',
        'Thorough rinse and hand dry with large plush microfibre drying towels',
        'Door jambs and sills wiped down',
        'Wax or sealant protection applied to all painted surfaces',
        'Exterior glass cleaned streak-free',
      ],
    },
    {
      type: 'list',
      heading: 'Why Professional Exterior Valeting Matters in Wilmslow',
      items: [
        'Road salt from A34, A538, and Knutsford Road grit routes actively damages bare paint — regular decontamination is the only prevention',
        'Iron fallout from Wilmslow railway station, Manchester Airport taxiways, and road traffic deposits onto paint and alloys between every wash',
        'Tree sap from the extensive Cheshire tree canopy along The Carrs and residential Wilmslow streets etches clear coat if not removed promptly',
        'A protective wax or sealant applied after every exterior valet dramatically slows contamination bonding and extends the time between deep clean requirements',
        'Safe hand washing prevents the swirl marks that automated car washes introduce — particularly important for the prestige finishes common in SK9',
      ],
    },
  ],
  faqs: [
    {
      question: 'How long does an exterior valet take in Wilmslow?',
      answer:
        '60–90 minutes for a standard vehicle. Larger SUVs and prestige cars take 75–90 minutes. We confirm exact timing at booking.',
    },
    {
      question: 'How much does an exterior valet cost in Wilmslow?',
      answer:
        'Exterior valets start from £50 for a standard vehicle and from £60 for larger SUVs and prestige cars. Exact pricing confirmed at booking.',
    },
    {
      question: 'What is the difference between an exterior valet and a car wash?',
      answer:
        "An exterior valet is more thorough than a basic hand car wash. It includes iron fallout removal on wheels, tar spot treatment on lower panels, and a protective wax or sealant application in addition to the standard wash and dry. A car wash is a clean. A valet is a clean plus decontamination plus protection.",
    },
  ],
  relatedLinks: [
    { label: 'Full Valet Wilmslow', href: '/wilmslow/car-valeting/full-valet', description: 'Complete interior and exterior valet' },
    { label: 'Car Wash Wilmslow', href: '/wilmslow/car-wash', description: 'Regular exterior hand wash' },
    { label: 'Exterior Detailing Wilmslow', href: '/wilmslow/car-detailing/exterior-detailing', description: 'Full decontamination, correction and protection' },
    { label: 'Car Valeting Wilmslow', href: '/wilmslow/car-valeting', description: 'All valeting services across SK9' },
    { label: 'Book Now', href: '/booking' },
  ],
  schemaPrice: '50',
};
