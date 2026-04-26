import { Sparkles } from 'lucide-react';
import type { ServicePageData } from '@/data/types';

export const paintCorrectionWarrington: ServicePageData = {
  slug: 'paint-correction',
  name: 'Paint Correction Warrington',
  seo: {
    title: 'Paint Correction Warrington | Swirl Mark Removal | SRV Detailing',
    description:
      'Professional paint correction in Warrington. Multi-stage machine polishing to remove swirl marks, scratches and motorway-accumulated oxidation. 22+ years experience. Mobile service across WA1–WA5.',
    keywords: [
      'paint correction warrington',
      'swirl mark removal warrington',
      'machine polishing warrington',
      'scratch removal warrington',
      'paint restoration warrington',
    ],
    canonical: 'https://www.srvdetailing.co.uk/warrington/car-detailing/paint-correction',
  },
  icon: Sparkles,
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Warrington', href: '/warrington' },
    { label: 'Car Detailing', href: '/warrington/car-detailing' },
    { label: 'Paint Correction', href: '/warrington/car-detailing/paint-correction' },
  ],
  heroTitle: 'Paint Correction in Warrington',
  heroDescription:
    "Multi-stage machine polishing to remove swirl marks, scratches, oxidation and the water spots that accumulate in Warrington's damp Mersey Valley conditions. Restore your vehicle's showroom gloss with 22+ years of professional experience.",
  contentSections: [
    {
      type: 'text',
      heading: 'What Is Paint Correction?',
      body: "Paint correction is the process of removing surface imperfections from your vehicle's clear coat using machine polishing with specialised compounds and pads. Swirl marks from automated car washes, light scratches from poor washing technique, oxidation from UV exposure, and water spots from Warrington's mineral-rich road spray are all correctable. The result is a flawless, mirror-like finish with maximum depth and gloss.",
    },
    {
      type: 'list',
      heading: 'Common Defects We Correct on Warrington Vehicles',
      items: [
        'Swirl marks from automated car washes and improper washing technique',
        'Light to moderate scratches from car parks, trolleys and accidental contact',
        'Oxidation and fading from UV exposure on vehicles parked at open-air business parks',
        'Water spots and mineral etching from road spray on the M6, M62 and A-road network',
        'Bird dropping etch marks from vehicles parked near retail parks and business parks',
        'Hologram marks from previous poor polishing attempts',
        'Iron contamination staining from motorway brake dust and industrial fallout',
      ],
    },
    {
      type: 'process',
      heading: 'Our Paint Correction Process',
      items: [
        'Full decontamination wash and clay bar treatment to remove bonded contaminants',
        'Paint depth measurement with a thickness gauge to ensure safe correction margins',
        'Defect mapping under professional lighting to plan the correction strategy for each panel',
        'Cutting stage — aggressive compound with cutting pad to remove deeper defects',
        'Finishing stage — fine polish with finishing pad to refine the surface and maximise gloss',
        'IPA wipe-down to remove polishing oils and reveal the true corrected finish',
        'Optional ceramic coating or sealant application to protect the corrected paint long-term',
      ],
    },
    {
      type: 'text',
      heading: 'Paint Correction Stages',
      body: "We offer single-stage, two-stage and multi-stage correction depending on your paint's condition. Single-stage correction (from £250) removes light swirl marks and enhances gloss. Two-stage correction (from £400) tackles moderate swirls and light scratches. Multi-stage correction (from £600) addresses severe defects, heavy oxidation and deep marring — common on older Warrington vehicles that have seen years of motorway commuting.",
    },
  ],
  faqs: [
    {
      question: 'How long does paint correction take?',
      answer:
        'Single-stage correction typically takes 4–6 hours. Two-stage correction takes 6–8 hours. Multi-stage correction can take 8–12 hours. Every panel receives the time it needs for a flawless result.',
    },
    {
      question: 'Will paint correction damage my clear coat?',
      answer:
        'No. We measure paint thickness before starting and use the least aggressive approach necessary. Professional-grade compounds remove microns of clear coat — far less than the 40–60 microns typically available. Your paint remains safe.',
    },
    {
      question: 'Should I get ceramic coating after paint correction?',
      answer:
        "We strongly recommend it — especially in Warrington where motorway conditions quickly re-contaminate unprotected paint. Ceramic coating locks in the corrected finish for years, preventing new swirl marks from forming.",
    },
    {
      question: 'How much does paint correction cost in Warrington?',
      answer:
        'Prices start from £250 for single-stage correction. Two-stage starts from £400, multi-stage from £600. Final pricing depends on vehicle size, paint condition and correction level needed.',
    },
  ],
  relatedLinks: [
    { label: 'Ceramic Coating Warrington', href: '/warrington/car-detailing/ceramic-coating', description: 'Protect your corrected paint' },
    { label: 'Interior Detailing Warrington', href: '/warrington/car-detailing/interior-detailing', description: 'Complete the detail inside' },
    { label: 'Car Detailing Warrington', href: '/warrington/car-detailing', description: 'All detailing services' },
    { label: 'What Is Paint Correction?', href: '/guides/what-is-paint-correction', description: 'Full guide' },
  ],
  schemaPrice: '250',
};
