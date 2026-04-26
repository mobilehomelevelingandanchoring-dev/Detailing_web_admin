import { Droplets } from 'lucide-react';
import type { ServicePageData } from '@/data/types';

export const exteriorValetingPoynton: ServicePageData = {
  slug: 'exterior-valeting',
  name: 'Exterior Valeting Poynton',
  seo: {
    title: 'Exterior Valeting Poynton | Professional Hand Wash SK12 | SRV Detailing',
    description:
      'Exterior valeting in Poynton SK12 — snow foam, hand wash, wheel decontamination and wax protection. Professional exterior finish at your door. Book today.',
    keywords: [
      'exterior valeting poynton',
      'exterior valeting sk12',
      'car hand wash poynton',
      'mobile car wash poynton',
      'exterior car clean poynton',
      'exterior valeting poynton stockport',
      'mobile hand wash sk12',
    ],
    canonical: 'https://www.srvdetailing.co.uk/stockport/areas/poynton/car-valeting/exterior-valeting',
  },
  icon: Droplets,
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Stockport', href: '/stockport' },
    { label: 'Areas', href: '/stockport/areas' },
    { label: 'Poynton', href: '/stockport/areas/poynton' },
    { label: 'Car Valeting', href: '/stockport/areas/poynton/car-valeting' },
    { label: 'Exterior Valeting', href: '/stockport/areas/poynton/car-valeting/exterior-valeting' },
  ],
  heroTitle: 'Exterior Valeting in Poynton — Professional Hand Wash at Your Door in SK12',
  heroDescription:
    "Snow foam, safe two-bucket hand wash, proper wheel decontamination and wax protection — not the automated brush car wash on the A523. Professional exterior valeting at your Poynton driveway in SK12.",
  imageKey: 'exterior',
  contentSections: [
    {
      type: 'text',
      heading: 'What Is Professional Exterior Valeting in Poynton?',
      bodyParagraphs: [
        "Exterior valeting is a focused professional clean of your car's exterior — everything outside the doors. It covers snow foam pre-wash to break down road grime before any contact, a safe two-bucket hand wash with pH-neutral shampoo, dedicated wheel and tyre treatment, microfibre drying, and a spray wax or sealant for protection and gloss enhancement.",
        "It's the right service when the interior is clean but the outside has accumulated Poynton's road grime, brake dust and the inevitable seasonal contamination — salt residue from the A523 in winter, pollen in spring, tree sap from SK12's hedgerows in summer, fallen organic debris in autumn. A professional exterior valet at your door is a step change above an automated car wash for both result quality and paint safety.",
      ],
    },
    {
      type: 'process',
      heading: 'Exterior Valeting Process for Poynton Cars',
      items: [
        'Pre-rinse — cold water rinse to remove loose grit before any product or contact',
        'Snow foam application — foam lance applies thick pH-balanced pre-wash, left to dwell and dissolve traffic film and organic contamination',
        'Pressure rinse — snow foam and suspended grime flushed away before contact wash',
        'Two-bucket hand wash — one bucket clean shampoo solution, one grit guard rinse bucket; microfibre mitts used panel by panel from roof to sills',
        'Wheel and tyre decontamination — iron fallout remover applied to alloys, agitated with barrel and spoke brushes, thoroughly rinsed',
        'Tar decontamination — tar spots on lower panels dissolved and removed',
        'Microfibre drying — large plush drying towels on all panels, door shuts, fuel flap and sills',
        'Spray wax or sealant — applied to all painted surfaces for protection, depth and gloss',
        'Tyre dressing — water-based tyre dressing applied for a clean, satin finish',
      ],
    },
    {
      type: 'list',
      heading: 'Why Exterior Valeting Beats an Automated Car Wash for Poynton Cars',
      items: [
        'Automated car washes on and around the A523 use abrasive rotating brushes — every pass creates fine swirl marks in your clear coat',
        'Hand washing with quality microfibre and pH-neutral shampoo is completely safe for all paint types including ceramic coated cars',
        'Dedicated iron fallout removal during wheel cleaning lifts brake dust contamination that ordinary washing leaves embedded',
        'Snow foam pre-wash dissolves traffic film before any contact — contamination is removed chemically before the mitt touches the paint',
        'Spray wax or sealant applied after drying provides paint protection and gloss that automated washes never offer',
        'We work at your Poynton home — no driving, no waiting, no strangers in your car',
      ],
    },
  ],
  faqs: [
    {
      question: 'How much does exterior valeting cost in Poynton?',
      answer:
        "Exterior valeting starts from £35 for a standard hatchback or saloon. Larger vehicles — estates, SUVs, MPVs — from £45–55. No travel surcharge for SK12 addresses.",
    },
    {
      question: 'How long does exterior valeting take in Poynton?',
      answer:
        "45–75 minutes for a standard car. Larger vehicles take up to 90 minutes. We work efficiently and finish properly.",
    },
    {
      question: 'Is exterior valeting safe for my ceramic coated car in Poynton?',
      answer:
        "Yes. We use pH-neutral shampoos that are completely safe for ceramic coatings, paint sealants and waxes. We don't use alkaline or acidic products that would damage your coating. Regular exterior valeting maintains a ceramic coating properly.",
    },
    {
      question: 'Does exterior valeting include the wheels in Poynton?',
      answer:
        "Yes. Wheels are treated with dedicated iron fallout remover and cleaned with barrel and spoke brushes, not just a quick splash. Tyres are dressed at the end. Proper wheel cleaning is included as standard in our exterior valet.",
    },
    {
      question: 'How often should I get an exterior valet in Poynton?',
      answer:
        "Every 3–4 weeks is ideal for maintaining paint condition and keeping contamination under control. More frequent in winter when the A523 salt residue accumulates quickly, less frequently in drier summer periods when contamination builds more slowly.",
    },
  ],
  relatedLinks: [
    { label: 'Full Valet Poynton', href: '/stockport/areas/poynton/car-valeting/full-valet', description: 'Add interior cleaning to the exterior' },
    { label: 'Mini Valet Poynton', href: '/stockport/areas/poynton/car-valeting/mini-valet', description: 'Exterior wash plus interior freshen' },
    { label: 'Mobile Valeting Poynton', href: '/stockport/areas/poynton/car-valeting/mobile-valeting', description: 'We come to your SK12 address' },
    { label: 'Car Valeting Poynton', href: '/stockport/areas/poynton/car-valeting', description: 'All valeting services in Poynton' },
    { label: 'Exterior Valeting Stockport', href: '/stockport/car-valeting/exterior-valeting', description: 'Our full Stockport exterior valeting service' },
  ],
  schemaPrice: '35',
};
