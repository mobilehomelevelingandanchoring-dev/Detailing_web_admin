import { MapPin } from 'lucide-react';
import type { ServicePageData } from '@/data/types';

export const mobileValetingWilmslow: ServicePageData = {
  slug: 'mobile-valeting',
  name: 'Mobile Valeting Wilmslow',
  seo: {
    title: 'Mobile Valeting Wilmslow | Mobile Car Valet SK9 | SRV Detailing',
    description:
      'Professional mobile car valeting in Wilmslow. We come to your home, workplace, or any location across SK9 and Cheshire East. Fully self-contained — no water or power needed.',
    keywords: [
      'mobile valeting wilmslow',
      'mobile car valeting wilmslow',
      'mobile valet sk9',
      'mobile car valet wilmslow',
      'car valet at home wilmslow',
      'mobile valeting cheshire east',
      'mobile valeting alderley edge',
    ],
    canonical: 'https://www.srvdetailing.co.uk/wilmslow/car-valeting/mobile-valeting',
  },
  icon: MapPin,
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Wilmslow', href: '/wilmslow' },
    { label: 'Car Valeting', href: '/wilmslow/car-valeting' },
    { label: 'Mobile Valeting', href: '/wilmslow/car-valeting/mobile-valeting' },
  ],
  heroTitle: 'Mobile Valeting Wilmslow — Professional Car Care at Your Door',
  heroDescription:
    'SRV Detailing comes to you anywhere across Wilmslow and SK9. Home, workplace, gym, or golf club — we bring a fully self-contained mobile unit with all the water, power, and equipment needed for a professional valet at your chosen location.',
  imageKey: 'exterior',
  contentSections: [
    {
      type: 'text',
      heading: 'What Mobile Valeting Means in Wilmslow',
      bodyParagraphs: [
        "Mobile valeting is the service model where a professional comes to your vehicle rather than you taking it to a fixed premises. For Wilmslow and Cheshire East, this is the natural choice — busy households in SK9 have no need to drive to a car wash, wait, and collect, when a better service is available at the driveway. SRV Detailing operates a fully self-contained mobile unit: dedicated clean water tank, onboard generator, machine polishers, steam cleaner, hot water extraction equipment, and a complete range of professional detailing and valeting products. We arrive ready to work and leave no mess.",
        "The distinction between mobile valeting and a mobile hand car wash is significant. A hand car wash is a single-stage wash and rinse. Mobile valeting is a full professional service — decontamination, safe hand wash, interior work, protective finish — carried out with professional equipment and a trained eye for detail. SRV Detailing has provided mobile valeting across Cheshire and Greater Manchester for over 22 years.",
      ],
    },
    {
      type: 'list',
      heading: 'Where We Work in Wilmslow',
      items: [
        'Wilmslow driveways — your home driveway is the most convenient location for most customers',
        'Workplace car parks — offices, business parks, and commercial premises across Wilmslow, Handforth Dean, and Alderley Edge',
        'Private estates and gated properties — we are experienced working on private driveways and estate roads with appropriate access',
        'Golf clubs and leisure venues — Wilmslow Golf Club, Prestbury Golf Club, and similar venues where customers are happy for us to work while they play',
        'Any accessible parking location across SK9 and adjacent Cheshire East areas',
      ],
    },
    {
      type: 'list',
      heading: 'Benefits of Mobile Valeting in Wilmslow',
      items: [
        'No driving time — your time is not spent travelling to and waiting at a fixed premises',
        'No risk from other vehicles in a car wash queue — our service is dedicated to your vehicle only',
        'Professional equipment and technique — not a jet wash and brushes',
        'Discrete service — we work quietly on your property without disruption',
        'Flexible scheduling — evenings and weekends available for SK9 customers',
        'Fully self-contained — no facilities needed at your property',
      ],
    },
    {
      type: 'list',
      heading: 'Area Coverage from Wilmslow',
      items: [
        'All SK9 postcodes: Wilmslow town, Dean Row, Styal, Lacey Green, Handforth',
        'Alderley Edge (SK9): covered without surcharge',
        'Prestbury (SK10): covered, minor travel charge may apply for remote locations',
        'Knutsford (WA16): covered, travel charge may apply — confirmed at booking',
        'Cheadle Hulme (SK8): covered without surcharge',
        'Macclesfield (SK10/SK11): covered, travel charge may apply for outer locations',
      ],
    },
  ],
  faqs: [
    {
      question: 'Do you need any facilities at my Wilmslow property?',
      answer:
        'No. Our mobile unit carries its own fresh water supply and power generator. We need only safe vehicle access and a parking space alongside it. Most Wilmslow driveways are suitable — even those without an outdoor tap or power socket.',
    },
    {
      question: 'Can you work while I am at work or out for the day?',
      answer:
        "Yes. Many Wilmslow customers leave their vehicle with a key, provide gate access instructions, and we work and depart without interruption. We complete the service and notify you when done. Security and access requirements are always discussed and confirmed at booking.",
    },
    {
      question: 'Do you cover Alderley Edge and Prestbury for mobile valeting?',
      answer:
        'Yes. Alderley Edge, Prestbury, Cheadle Hulme, Handforth, Knutsford, and Macclesfield are all within our regular mobile valeting coverage area. Contact us for availability and any applicable travel charges for more distant locations.',
    },
  ],
  relatedLinks: [
    { label: 'Full Valet Wilmslow', href: '/wilmslow/car-valeting/full-valet', description: 'Our most comprehensive mobile valet service' },
    { label: 'Mini Valet Wilmslow', href: '/wilmslow/car-valeting/mini-valet', description: 'Quick 60–90 minute maintenance clean' },
    { label: 'Car Detailing Wilmslow', href: '/wilmslow/car-detailing', description: 'Mobile paint correction and ceramic coating' },
    { label: 'Car Valeting Wilmslow', href: '/wilmslow/car-valeting', description: 'All valeting services across SK9' },
    { label: 'Book Now', href: '/booking' },
  ],
  schemaPrice: '50',
};
