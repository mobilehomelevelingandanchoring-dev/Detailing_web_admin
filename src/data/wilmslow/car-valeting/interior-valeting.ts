import { Car } from 'lucide-react';
import type { ServicePageData } from '@/data/types';

export const interiorValetingWilmslow: ServicePageData = {
  slug: 'interior-valeting',
  name: 'Interior Valeting Wilmslow',
  seo: {
    title: 'Interior Valeting Wilmslow | Interior Car Clean SK9 | SRV Detailing',
    description:
      'Professional interior car valeting in Wilmslow. Thorough vacuum, steam clean of trim and vents, upholstery care, glass clean. SK9 mobile service. From £60.',
    keywords: [
      'interior valeting wilmslow',
      'interior car clean wilmslow',
      'interior valet sk9',
      'car interior cleaning wilmslow',
      'interior valet cheshire east',
      'mobile interior valet wilmslow',
    ],
    canonical: 'https://www.srvdetailing.co.uk/wilmslow/car-valeting/interior-valeting',
  },
  icon: Car,
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Wilmslow', href: '/wilmslow' },
    { label: 'Car Valeting', href: '/wilmslow/car-valeting' },
    { label: 'Interior Valeting', href: '/wilmslow/car-valeting/interior-valeting' },
  ],
  heroTitle: 'Interior Valeting Wilmslow — Professional Interior Clean at Your SK9 Door',
  heroDescription:
    'When your Wilmslow vehicle only needs interior attention, our dedicated interior valet delivers a thorough professional clean — deep vacuum, steam treatment, trim and dashboard care, upholstery treatment, and streak-free glass — at your home or workplace.',
  imageKey: 'interior',
  contentSections: [
    {
      type: 'text',
      heading: 'When an Interior Valet Is the Right Choice',
      bodyParagraphs: [
        "An interior valet is the dedicated service for vehicles whose exterior is in good condition but whose cabin has accumulated use — family cars after the school run, vehicles after a camping trip or country walk, or prestige cars used daily through a Cheshire winter. When the outside needs nothing more than maintenance and the inside is what needs attention, booking a standalone interior valet is the most efficient use of time and cost.",
        "Our interior valeting service is thorough. It is not a quick wipe — it is a systematic clean of every interior surface using appropriate products and techniques for each material. Steam cleaning for hard plastic trim and vents (which a damp cloth cannot effectively clean), correct cleaners for leather and fabric respectively, and professional glass cleaner that removes all haze and smear from interior windows.",
      ],
    },
    {
      type: 'list',
      heading: 'Interior Valet — What Is Included',
      items: [
        'Full interior strip-out of floor mats and movable items',
        'Thorough vacuum of all surfaces — seats, carpets, mats, boot, door pockets, and crevices',
        'Compressed air blow-out of air vents, speaker grilles, and switch surrounds',
        'Steam cleaning of all hard surfaces — dashboard, console, door cards, gear surround, and A-pillars',
        'Dashboard, console, and trim cleaning and dressing with appropriate product',
        'Upholstery wipe — leather cleaned with pH-balanced cleaner; fabric seats spot-cleaned',
        'Interior glass cleaned streak-free — all windows, mirrors, and screen',
        'Odour neutralisation — deodoriser applied to freshen the cabin air',
      ],
    },
    {
      type: 'list',
      heading: 'Why Wilmslow Interiors Need Regular Attention',
      items: [
        'Children, dogs, and rural Cheshire activities bring mud, food, and organic contamination into car interiors regularly',
        'Commuter use through Wilmslow town and Manchester creates daily fine dust accumulation on all surfaces',
        'Cheshire autumn and winter bring moisture and condensation into cabins, creating bacterial growth in carpets without regular cleaning',
        'Premium leather interiors in Porsche, Range Rover, and AMG vehicles need regular attention to maintain appearance and prevent deterioration',
        'Pre-sale preparation — a clean, fresh interior is essential for achieving the sale price a prestige vehicle warrants',
      ],
    },
  ],
  faqs: [
    {
      question: 'How long does an interior valet take in Wilmslow?',
      answer:
        '60–90 minutes for a standard vehicle. Larger SUVs and prestige cars with more complex interiors take 90–120 minutes. Vehicles with heavy soiling, pet hair, or extensive staining may take longer.',
    },
    {
      question: 'How much does an interior valet cost in Wilmslow?',
      answer:
        'Interior valets start from £60 for a standard hatchback and from £75 for a larger SUV or prestige vehicle. Exact pricing confirmed at booking.',
    },
    {
      question: 'Can you add an exterior wash to an interior valet?',
      answer:
        "Yes. A maintenance valet combines both interior and exterior cleaning in 60–90 minutes, or we can add an exterior wash to an interior valet booking. The most efficient and cost-effective option is a maintenance valet if both are needed.",
    },
  ],
  relatedLinks: [
    { label: 'Full Valet Wilmslow', href: '/wilmslow/car-valeting/full-valet', description: 'Complete interior and exterior valet' },
    { label: 'Interior Detailing Wilmslow', href: '/wilmslow/car-detailing/interior-detailing', description: 'Deep restoration beyond standard valeting' },
    { label: 'Upholstery Cleaning Wilmslow', href: '/wilmslow/car-valeting/upholstery-cleaning', description: 'Hot water extraction for seats and carpets' },
    { label: 'Car Valeting Wilmslow', href: '/wilmslow/car-valeting', description: 'All valeting services across SK9' },
    { label: 'Book Now', href: '/booking' },
  ],
  schemaPrice: '60',
};
