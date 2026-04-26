import { Paintbrush } from 'lucide-react';
import type { ServicePageData } from '@/data/types';

export const exteriorDetailingWarrington: ServicePageData = {
  slug: 'exterior-detailing',
  name: 'Exterior Detailing Warrington',
  seo: {
    title: 'Exterior Detailing Warrington | Paint Decontamination & Protection | SRV Detailing',
    description:
      'Professional exterior car detailing in Warrington. Full decontamination wash, clay bar treatment, machine polish and paint sealant. Mobile service across WA1–WA5. 22+ years experience.',
    keywords: [
      'exterior detailing warrington',
      'car exterior clean warrington',
      'paint decontamination warrington',
      'clay bar warrington',
      'exterior car valeting warrington',
    ],
    canonical: 'https://www.srvdetailing.co.uk/warrington/car-detailing/exterior-detailing',
  },
  icon: Paintbrush,
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Warrington', href: '/warrington' },
    { label: 'Car Detailing', href: '/warrington/car-detailing' },
    { label: 'Exterior Detailing', href: '/warrington/car-detailing/exterior-detailing' },
  ],
  heroTitle: 'Exterior Detailing in Warrington',
  heroDescription:
    "Full exterior decontamination, clay bar treatment, machine polish and lasting paint protection. Essential for Warrington vehicles that accumulate motorway fallout, road salt and Mersey Valley grime. Mobile service across WA1–WA5.",
  contentSections: [
    {
      type: 'text',
      heading: 'What Is Exterior Detailing?',
      body: "Exterior detailing is a multi-stage professional process that goes far beyond washing. It removes bonded contaminants that a wash cannot touch — iron fallout, tar, road salt residue and industrial particles — then machine polishes the paint to remove swirl marks and oxidation, before applying a durable protective coating. For Warrington vehicles exposed to the M6, M62 and M56 motorway network daily, proper exterior decontamination is not optional — it's essential maintenance.",
    },
    {
      type: 'list',
      heading: 'What Our Exterior Detailing Covers',
      items: [
        'Snow foam pre-wash to safely loosen and lift surface contamination',
        'Two-bucket contact hand wash with pH-neutral shampoo',
        'Wheel and arch cleaning with dedicated fallout remover and wheel acid (where appropriate)',
        'Iron fallout treatment — reveals and removes bonded iron particles from paint and glass',
        'Tar and adhesive removal from lower body panels and sills',
        'Clay bar decontamination — removes all bonded surface contamination',
        'Machine polish — single or multi-stage depending on paint condition and package chosen',
        'Paint sealant or carnauba wax application for durable protection',
        'All exterior glass cleaned and water-repellent coating applied',
        'Tyres dressed and trim restored',
      ],
    },
    {
      type: 'text',
      heading: 'Why Warrington Vehicles Need Regular Exterior Decontamination',
      body: "Warrington's position at one of the north-west's busiest motorway junctions means vehicles accumulate extraordinary levels of contamination — diesel soot, tyre rubber particulates, iron fallout from brake dust, and road salt from winter treatment of the M6, M62 and A-road network. This contamination bonds to paintwork and, if left, causes permanent etching, corrosion and accelerated paint degradation. Regular exterior detailing — typically twice a year — removes this contamination before it causes lasting damage.",
    },
    {
      type: 'process',
      heading: 'Our Exterior Detailing Process',
      items: [
        'Pre-inspection to assess paint condition and plan the most appropriate detailing approach',
        'Wheel and tyre decontamination — fallout remover, agitation and rinse',
        'Snow foam application and dwell time to loosen all surface contamination',
        'Safe two-bucket contact wash from roof to sills',
        'Iron fallout treatment across all painted and glass surfaces',
        'Tar and adhesive removal from lower panels',
        'Clay bar over all painted surfaces to achieve a glass-smooth finish',
        'Machine polish — one to three stages depending on correction level needed',
        'Sealant or wax applied panel by panel for maximum durability',
        'Final detail, glass cleaning and tyre and trim dressing',
      ],
    },
  ],
  faqs: [
    {
      question: 'How often should I get exterior detailing in Warrington?',
      answer:
        "Twice a year is the minimum we'd recommend for Warrington vehicles — once in spring after winter salt accumulation, and once in autumn before the next salt season. Motorway commuters may benefit from quarterly decontamination treatments.",
    },
    {
      question: 'What is clay bar treatment?',
      answer:
        'A clay bar is a specially formulated detailing clay that glides over lubricated paintwork, physically pulling out bonded contaminants that washing cannot remove. After claying, paint feels glass-smooth to the touch. It is an essential step before polishing or coating.',
    },
    {
      question: 'Is exterior detailing the same as a car wash?',
      answer:
        'No. A car wash cleans surface dirt. Exterior detailing removes bonded contaminants, corrects paint defects through machine polishing, and applies durable protection. It is a multi-hour professional process — not a quick wash.',
    },
    {
      question: 'Can you do exterior detailing at my home in Warrington?',
      answer:
        'Yes. We are entirely self-contained — our own water supply, power and all equipment. We can perform a complete exterior detail at your home, office or any location across Warrington.',
    },
  ],
  relatedLinks: [
    { label: 'Ceramic Coating Warrington', href: '/warrington/car-detailing/ceramic-coating', description: 'Add long-term protection after detailing' },
    { label: 'Paint Correction Warrington', href: '/warrington/car-detailing/paint-correction', description: 'Correct paint defects' },
    { label: 'Interior Detailing Warrington', href: '/warrington/car-detailing/interior-detailing', description: 'Complete the interior too' },
    { label: 'Car Detailing Warrington', href: '/warrington/car-detailing', description: 'All detailing services' },
  ],
  schemaPrice: '200',
  imageKey: 'exterior',
};
