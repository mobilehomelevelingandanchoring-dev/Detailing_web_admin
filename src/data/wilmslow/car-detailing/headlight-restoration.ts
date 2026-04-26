import { Lightbulb } from 'lucide-react';
import type { ServicePageData } from '@/data/types';

export const headlightRestorationWilmslow: ServicePageData = {
  slug: 'headlight-restoration',
  name: 'Headlight Restoration Wilmslow',
  seo: {
    title: 'Headlight Restoration Wilmslow | Cloudy Headlight Fix SK9 | SRV Detailing',
    description:
      'Professional headlight restoration in Wilmslow. Wet-sanding and machine polishing removes yellowing and cloudiness from plastic headlight lenses. SK9 mobile service from £60.',
    keywords: [
      'headlight restoration wilmslow',
      'cloudy headlights wilmslow',
      'headlight polishing wilmslow sk9',
      'headlight cleaning wilmslow',
      'headlight restoration cheshire east',
      'yellow headlights wilmslow',
    ],
    canonical: 'https://www.srvdetailing.co.uk/wilmslow/car-detailing/headlight-restoration',
  },
  icon: Lightbulb,
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Wilmslow', href: '/wilmslow' },
    { label: 'Car Detailing', href: '/wilmslow/car-detailing' },
    { label: 'Headlight Restoration', href: '/wilmslow/car-detailing/headlight-restoration' },
  ],
  heroTitle: 'Headlight Restoration Wilmslow — Clarity Restored for SK9 Vehicles',
  heroDescription:
    'Restore cloudy, yellowed, and oxidised headlight lenses to optical clarity with our professional wet-sanding and machine polishing process. Mobile headlight restoration in Wilmslow from £60 per pair — no lens replacement required.',
  imageKey: 'results',
  contentSections: [
    {
      type: 'text',
      heading: 'Why Headlights Yellow and Cloud Over',
      bodyParagraphs: [
        "Modern vehicle headlights use polycarbonate plastic lenses rather than glass. Polycarbonate is strong and lightweight but degrades under UV exposure over time. The factory UV coating on the lens surface gradually breaks down, causing the underlying plastic to oxidise — producing the characteristic yellowing, haziness, and dull appearance common on vehicles more than 5 years old. The Cheshire East climate, with its variable sunshine and rainfall patterns, accelerates this process.",
        "Cloudy headlights reduce light output by up to 60–70%, significantly impacting night driving safety. They also significantly detract from the appearance of a prestige vehicle — a yellowed headlight on a Porsche or Range Rover undermines the entire visual presentation. Headlight restoration removes the oxidised plastic layer and applies a fresh UV protective coating, restoring both optical clarity and light output.",
      ],
    },
    {
      type: 'process',
      heading: 'Headlight Restoration Process',
      items: [
        'Assessment — evaluate the degree of oxidation and determine the required sanding grades',
        'Mask surrounding paintwork — paint-safe masking tape applied around each lens to protect the surrounding clear coat',
        'Wet-sanding — progressive sanding stages from coarser to finer grades remove the oxidised surface layer',
        'Machine polishing — rotary or dual-action polisher with cutting compound removes sanding marks and restores clarity',
        'Refinement polish — final polish stage achieves optical clarity and surface smoothness',
        'UV protective sealant — topcoat applied to the restored lens to protect against future UV oxidation',
        'Final inspection — optical clarity checked before completion',
      ],
    },
    {
      type: 'list',
      heading: 'Benefits of Headlight Restoration',
      items: [
        'Restores up to 90% of original light output — significant safety improvement for night driving on Cheshire lanes',
        'Removes the aged, neglected appearance from the front of a prestige vehicle',
        'Considerably cheaper than lens replacement — OEM headlight units for Porsche, BMW, and Range Rover can cost £500–£2,000+ per unit',
        'Takes 1–2 hours as a mobile service at your Wilmslow address',
        'UV sealant coating extends the restored finish for 1–3 years',
      ],
    },
  ],
  faqs: [
    {
      question: 'How long does headlight restoration last in Wilmslow?',
      answer:
        "Our headlight restoration includes a UV protective sealant coating that typically lasts 1–3 years depending on the vehicle's exposure to sunlight and weather. Garaged vehicles or those with regular wax application over the headlights will see better longevity.",
    },
    {
      question: 'Can all headlights be restored?',
      answer:
        "Polycarbonate headlights with oxidation or yellowing respond well to restoration. Severely cracked, chipped, or internally fogged lenses (condensation inside the unit) may not be restorable by polishing alone. We assess each lens before starting and advise honestly on achievable results.",
    },
    {
      question: 'How much does headlight restoration cost in Wilmslow?',
      answer:
        'Headlight restoration starts from £60 per pair for a standard vehicle, from £80 for larger or more heavily oxidised lenses. Combined with any other service, headlight restoration can be added from £50 per pair.',
    },
  ],
  relatedLinks: [
    { label: 'Exterior Detailing Wilmslow', href: '/wilmslow/car-detailing/exterior-detailing', description: 'Complete exterior decontamination and protection' },
    { label: 'Paint Correction Wilmslow', href: '/wilmslow/car-detailing/paint-correction', description: 'Machine polishing for paint defects' },
    { label: 'Car Detailing Wilmslow', href: '/wilmslow/car-detailing', description: 'All detailing services across SK9' },
    { label: 'Detailing Prices Wilmslow', href: '/wilmslow/car-detailing/prices', description: 'Full pricing guide' },
    { label: 'Book Now', href: '/booking' },
  ],
  schemaPrice: '60',
};
