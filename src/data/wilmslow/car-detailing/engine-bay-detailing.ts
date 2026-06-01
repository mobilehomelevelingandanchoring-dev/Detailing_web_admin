import { Wrench } from 'lucide-react';
import type { ServicePageData } from '@/data/types';

export const engineBayDetailingWilmslow: ServicePageData = {
  slug: 'engine-bay-detailing',
  name: 'Engine Bay Detailing Wilmslow',
  seo: {
    title: 'Engine Bay Detailing Wilmslow | Engine Bay Clean SK9 | SRV Detailing',
    description:
      'Professional engine bay detailing in Wilmslow. Safe degreasing, careful rinse, and dressing — engine bay restored to showroom condition for prestige vehicles across SK9.',
    keywords: [
      'engine bay detailing wilmslow',
      'engine bay clean wilmslow',
      'engine bay cleaning sk9',
      'engine bay detail cheshire east',
      'engine cleaning wilmslow',
    ],
    canonical: 'https://www.srvdetailing.co.uk/wilmslow/car-detailing/engine-bay-detailing',
  },
  icon: Wrench,
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Wilmslow', href: '/wilmslow' },
    { label: 'Car Detailing', href: '/wilmslow/car-detailing' },
    { label: 'Engine Bay Detailing', href: '/wilmslow/car-detailing/engine-bay-detailing' },
  ],
  heroTitle: 'Engine Bay Detailing Wilmslow — Safe Clean for SK9 Vehicles',
  heroDescription:
    'Professional engine bay detailing in Wilmslow. Safe degreasing of accumulated grime, low-pressure controlled rinse, thorough drying, and dressing of all plastic and rubber components — engine bays restored to showroom presentation without risk to electrical components.',
  imageKey: 'results',
  contentSections: [
    {
      type: 'text',
      heading: 'Why Engine Bay Detailing Matters',
      bodyParagraphs: [
        "The engine bay is the most neglected area of most vehicles but arguably the most important for condition assessment. A grimy, oil-contaminated engine bay hides leaks, cracks, and deteriorating components behind a layer of accumulated grime. Potential buyers of prestige vehicles in Wilmslow — or concours judges at Tatton Park and Cholmondeley Castle events — inspect engine bays as a measure of how well a vehicle has been maintained overall.",
        "Engine bay detailing is not simply spraying water under the bonnet. It is a methodical process of degreasing specific surfaces with appropriate products, protecting electrical components and air intakes from moisture, applying controlled low-pressure rinsing, compressed air drying, and then dressing plastic, rubber, and silicon components to a clean, factory-appearance finish. Done correctly, it is completely safe. Done carelessly, it can damage electronics, air filtration, and fuel systems. We have the experience and equipment to do it correctly on every vehicle type, including the complex engine bays of modern Porsche, AMG, and Range Rover vehicles.",
      ],
    },
    {
      type: 'process',
      heading: 'Engine Bay Detailing Process',
      items: [
        'Cold engine inspection — engine bay assessed only when the engine is fully cold to prevent steam burns and thermal shock',
        'Protection of sensitive components — air filter, fuse box, battery terminals, and exposed electrical connectors covered before any liquid application',
        'Degreaser application — appropriate alkaline degreaser applied to contaminated surfaces and allowed to dwell',
        'Agitation — soft brushes used on stubborn grease deposits, surfaces cleaned by hand in accessible areas',
        'Low-pressure rinse — controlled water application specifically directed away from protected electrical components',
        'Compressed air drying — air blower used to displace water from all components, crevices, and wiring harnesses',
        'Final drying — any remaining moisture removed with microfibre cloths',
        'Plastic and rubber dressing — all plastic covers, rubber hoses, and silicon components dressed with appropriate protectant for a clean, factory appearance',
        'Final inspection — engine bay check under bright lighting before closing',
      ],
    },
    {
      type: 'list',
      heading: 'Benefits of a Detailed Engine Bay',
      items: [
        'Improved presentation for concours events, private sale, or part-exchange valuations',
        'Easier identification of leaks, cracks, and deteriorating components against a clean background',
        'Reduced fire risk from accumulated oil, fuel residues, and combustible debris on hot components',
        'Protection of rubber and plastic components from UV degradation through regular dressing',
        'Positive first impression for prestige vehicle buyers and professional assessors',
      ],
    },
  ],
  faqs: [
    {
      question: 'Is engine bay cleaning safe for modern cars?',
      answer:
        'Yes, when carried out correctly. Modern vehicles are designed to withstand rain and road spray in the engine bay. Professional engine bay detailing uses appropriately targeted low-pressure water, protected electrical components, and immediate drying with compressed air. We do not use pressure washers or indiscriminate water application. Our process is safe for all current vehicle makes and models including Porsche, BMW, Mercedes, and Land Rover.',
    },
    {
      question: 'Do you offer engine bay detailing as a standalone service in Wilmslow?',
      answer:
        'Yes. Engine bay detailing can be booked as a standalone service or added to any exterior detail or full valet. It typically takes 1–2 hours as a standalone service depending on the size and condition of the engine bay.',
    },
    {
      question: 'How much does engine bay detailing cost in Wilmslow?',
      answer:
        'Engine bay detailing starts from £60 as a standalone service. Combined with an exterior detail or full valet, it can be added from £50. Contact us for an accurate quote based on your vehicle.',
    },
  ],
  relatedLinks: [
    { label: 'Exterior Detailing Wilmslow', href: '/wilmslow/car-detailing/exterior-detailing', description: 'Complete exterior decontamination and protection' },
    { label: 'Full Valet Wilmslow', href: '/wilmslow/car-valeting/full-valet', description: 'Complete interior and exterior valet' },
    { label: 'Car Detailing Wilmslow', href: '/wilmslow/car-detailing', description: 'All detailing services across SK9' },
    { label: 'Detailing Prices Wilmslow', href: '/wilmslow/car-detailing/prices', description: 'Full pricing guide' },
    { label: 'Book Now', href: '/booking' },
  ],
  schemaPrice: '60',
};
