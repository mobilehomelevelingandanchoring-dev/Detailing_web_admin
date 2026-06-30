import { Droplets } from 'lucide-react';
import type { ServicePageData } from '@/data/types';

export const miniValetWilmslow: ServicePageData = {
  slug: 'mini-valet',
  name: 'Maintenance Valet Wilmslow',
  seo: {
    title: 'Maintenance Valet Wilmslow | Quick Car Valet SK9 | SRV Detailing',
    description:
      'Professional maintenance valet in Wilmslow. 60–90 minute exterior and interior maintenance clean at your SK9 door. Safe hand wash, wheel clean, interior vacuum, and dashboard wipe. From £45.',
    keywords: [
      'mini valet wilmslow',
      'quick car valet wilmslow',
      'mini valet sk9',
      'mini car valet wilmslow',
      'mobile mini valet wilmslow',
      'car valet wilmslow',
    ],
    canonical: 'https://www.srvdetailing.co.uk/wilmslow/car-valeting/mini-valet',
  },
  icon: Droplets,
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Wilmslow', href: '/wilmslow' },
    { label: 'Car Valeting', href: '/wilmslow/car-valeting' },
    { label: 'Maintenance Valet', href: '/wilmslow/car-valeting/mini-valet' },
  ],
  heroTitle: 'Maintenance Valet in Wilmslow — Efficient Maintenance Clean for SK9 Vehicles',
  heroDescription:
    'Keep your Wilmslow vehicle looking sharp between full valets. Our maintenance valet delivers a professional exterior hand wash, wheel clean, interior vacuum, dashboard wipe, and glass clean in 60–90 minutes — at your SK9 home or workplace.',
  imageKey: 'exterior',
  contentSections: [
    {
      type: 'text',
      heading: 'What Is a Maintenance Valet?',
      bodyParagraphs: [
        "A maintenance valet is a professional maintenance cleaning service designed to keep a well-maintained vehicle looking sharp between full valets. It covers the essentials — exterior wash, wheel clean, interior vacuum, dash wipe, and glass clean — without the deep interior restoration work of a full valet. In Wilmslow, where many customers maintain prestige vehicles on a regular schedule, a maintenance valet every 4–6 weeks between quarterly full valets is the most effective and efficient care programme.",
        "Our maintenance valet uses exactly the same safe techniques as our full valet: snow foam pre-soak, two-bucket hand wash with microfibre mitts, dedicated wheel brushes, and pH-neutral products throughout. The difference is scope, not standard. A maintenance valet in Wilmslow produces a visibly clean, properly treated vehicle in 60–90 minutes.",
      ],
    },
    {
      type: 'list',
      heading: 'What a Maintenance Valet Includes',
      items: [
        'Snow foam pre-soak to encapsulate A34 road film and brake dust before contact',
        'Two-bucket hand wash with pH-neutral shampoo and clean microfibre mitts',
        'Wheel face and tyre clean with dedicated brushes; tyre dressing applied',
        'Rinse and microfibre hand dry of all painted surfaces',
        'Door shuts and jambs wiped down',
        'Interior vacuum — seats, carpets, and boot',
        'Dashboard and console wipe with appropriate cleaner',
        'Interior glass cleaned streak-free',
        'Quick detailer or spray wax applied to exterior for gloss and light protection',
      ],
    },
    {
      type: 'list',
      heading: 'Maintenance Valet vs Full Valet — Which Do You Need?',
      items: [
        'Maintenance valet (60–90 min, from £45): maintenance clean for a vehicle that is in good overall condition — used when the interior needs refreshing and the exterior needs a safe wash',
        'Full valet (3–4 hours, from £90): deep restoration clean — used when the interior has accumulated significant use, staining, pet hair, or heavy soiling that needs thorough treatment',
        'Recommended combination: maintenance valet every 4–6 weeks, full valet every 3–4 months for most Wilmslow daily drivers',
      ],
    },
  ],
  faqs: [
    {
      question: 'How long does a maintenance valet take in Wilmslow?',
      answer:
        '60–90 minutes for most vehicles. Larger SUVs and prestige cars may take slightly longer. We always confirm the expected time when booking.',
    },
    {
      question: 'How much does a maintenance valet cost in Wilmslow?',
      answer:
        'Maintenance valets start from £45 for a standard hatchback, from £60 for a medium saloon or estate, and from £75 for a large SUV or prestige vehicle. Exact pricing confirmed when booking.',
    },
    {
      question: 'Can I book a regular maintenance valet in Wilmslow?',
      answer:
        'Yes. We offer standing appointment maintenance valets for regular Wilmslow customers — fortnightly, monthly, or any schedule that suits you. Regular customers receive a consistent time slot and priority diary access.',
    },
  ],
  relatedLinks: [
    { label: 'Full Valet Wilmslow', href: '/wilmslow/car-valeting/full-valet', description: 'Complete interior and exterior valet' },
    { label: 'Exterior Valeting Wilmslow', href: '/wilmslow/car-valeting/exterior-valeting', description: 'Exterior-only clean when the inside is fine' },
    { label: 'Car Wash Wilmslow', href: '/wilmslow/car-wash', description: 'Regular exterior hand wash' },
    { label: 'Car Valeting Wilmslow', href: '/wilmslow/car-valeting', description: 'All valeting services across SK9' },
    { label: 'Car Valeting Prices Wilmslow', href: '/wilmslow/car-valeting/prices', description: 'Full pricing guide' },
    { label: 'Book Now', href: '/booking' },
  ],
  schemaPrice: '45',
};
