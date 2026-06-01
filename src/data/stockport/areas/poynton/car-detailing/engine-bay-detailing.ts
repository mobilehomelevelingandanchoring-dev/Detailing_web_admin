import { Wrench } from 'lucide-react';
import type { ServicePageData } from '@/data/types';

export const engineBayDetailingPoynton: ServicePageData = {
  slug: 'engine-bay-detailing',
  name: 'Engine Bay Detailing Poynton',
  seo: {
    title: 'Engine Bay Detailing Poynton | Engine Cleaning SK12 | SRV Detailing',
    description:
      'Engine bay detailing in Poynton SK12 — safe degreasing, low-pressure rinse and dressing to restore your engine bay to showroom condition. Book today.',
    keywords: [
      'engine bay detailing poynton',
      'engine bay cleaning poynton',
      'engine bay detailing sk12',
      'car engine cleaning poynton',
      'engine bay restoration poynton',
      'mobile engine bay detailing sk12',
    ],
    canonical: 'https://www.srvdetailing.co.uk/stockport/areas/poynton/car-detailing/engine-bay-detailing',
  },
  icon: Wrench,
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Stockport', href: '/stockport' },
    { label: 'Areas', href: '/stockport/areas' },
    { label: 'Poynton', href: '/stockport/areas/poynton' },
    { label: 'Car Detailing', href: '/stockport/areas/poynton/car-detailing' },
    { label: 'Engine Bay Detailing', href: '/stockport/areas/poynton/car-detailing/engine-bay-detailing' },
  ],
  heroTitle: 'Engine Bay Detailing in Poynton — Safe Engine Cleaning at Your Door',
  heroDescription:
    "A clean engine bay isn't just about looks — it makes leaks easier to spot, reduces fire risk from accumulated oil and grease, and presents well at sale or inspection. Professional engine bay detailing at your Poynton home.",
  imageKey: 'exterior',
  contentSections: [
    {
      type: 'text',
      heading: 'What Is Engine Bay Detailing?',
      bodyParagraphs: [
        "Engine bay detailing is the professional cleaning, degreasing, and dressing of the engine compartment — the area under the bonnet. Over years of driving on Poynton's roads and beyond, the engine bay accumulates grease, grime, road salt, and general organic debris. A professional degreasing, low-pressure rinse and appropriate dressing transforms a grimy, neglected bay into something that looks properly cared for.",
        "The key to engine bay detailing done right is in the approach: no high-pressure water blasting directly onto electrical components or sensors, proper masking of sensitive areas before any water contact, targeted degreaser application with appropriate dwell times, and low-pressure rinsing at controlled angles. We've cleaned hundreds of engine bays and know where the risks are — modern engine bays are water-resistant but not waterproof, and the difference between a safe clean and a ruined ECU comes down to technique.",
      ],
    },
    {
      type: 'process',
      heading: 'Our Engine Bay Detailing Process',
      items: [
        'Cool-down period — engine bay must be completely cold before we start; hot components can be damaged by water and degreasers',
        'Masking — electrical connectors, fuse boxes, air intakes, alternator and sensitive components masked with plastic wrap or tape as appropriate',
        'Dry debris removal — loose leaves, mud, and dry debris removed with brushes and compressed air before any liquids applied',
        'Degreaser application — alkaline degreaser applied to dirty areas, allowed to dwell and emulsify grease and oil buildup',
        'Agitation — engine-specific detailing brushes work the degreaser into crevices, around hoses, and into engine component surfaces',
        'Low-pressure rinse — garden hose pressure (not jet wash) rinse to remove degreaser and emulsified contamination safely',
        'Dry — compressed air and microfibre to dry all surfaces thoroughly before any dressings applied',
        'Plastic and rubber dressing — appropriate protectant applied to plastic covers, rubber hoses and trim to restore colour and prevent drying',
        'Final inspection — engine bay inspected fully; any masking removed, bay handed over',
      ],
    },
    {
      type: 'list',
      heading: 'Why Engine Bay Detailing Matters for Poynton Cars',
      items: [
        'Country lane and A523 driving throws up significant road debris, mud and contamination that accumulates in engine bays over time',
        'Oil and grease buildup creates a fire hazard — accumulated contamination on hot exhaust-adjacent components is a genuine risk',
        'Fluid leaks are impossible to identify in a dirty engine bay — a clean bay makes spotting new leaks immediate',
        'Resale and part-exchange value — buyers and dealers inspect engine bays; a clean bay signals a cared-for vehicle',
        'Metal components are prone to surface rust in SK12\'s wet climate — dressing applied after cleaning slows this process',
        'Pre-MOT or service preparation — presenting a clean vehicle to a garage reflects well on ownership history',
      ],
    },
  ],
  faqs: [
    {
      question: 'How much does engine bay detailing cost in Poynton?',
      answer:
        "Engine bay detailing is typically priced at £60–£100 as a standalone service depending on the vehicle size and level of contamination. It's often combined with an exterior detail or full valet at a discounted combined rate. Give us a call and we'll quote based on your car.",
    },
    {
      question: 'Is engine bay detailing safe for modern cars in Poynton?',
      answer:
        "Yes, when done correctly. We never use high-pressure washers directly on electrical components, always mask sensitive areas, and use low-pressure rinsing. Modern engine bays are designed to be water-resistant. Our technique is safe on all modern vehicles including those with complex electrical systems.",
    },
    {
      question: 'How long does engine bay detailing take?',
      answer:
        "A standard engine bay takes 1.5–2.5 hours including degreasing, rinsing, drying and dressing. Heavily contaminated bays or larger vehicles with more complex engine compartments may take longer. It's usually done alongside a full exterior detail.",
    },
    {
      question: 'Will engine bay detailing affect my warranty?',
      answer:
        "Professional engine bay detailing using safe techniques does not affect your vehicle warranty. We don't remove covers or disassemble components — we clean accessible surfaces with appropriate products and low-pressure water only.",
    },
  ],
  relatedLinks: [
    { label: 'Exterior Detailing Poynton', href: '/stockport/areas/poynton/car-detailing/exterior-detailing', description: 'Combine with full exterior restoration' },
    { label: 'Full Valet Poynton', href: '/stockport/areas/poynton/car-valeting/full-valet', description: 'Complete inside and out clean' },
    { label: 'Car Detailing Poynton', href: '/stockport/areas/poynton/car-detailing', description: 'All detailing services in Poynton' },
    { label: 'Engine Bay Detailing Stockport', href: '/stockport/car-detailing/engine-bay-detailing', description: 'Our full Stockport engine bay service' },
  ],
  schemaPrice: '60',
};
