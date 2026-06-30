import { MapPin } from 'lucide-react';
import type { ServicePageData } from '@/data/types';

export const mobileValetingWarrington: ServicePageData = {
  slug: 'mobile-valeting',
  name: 'Mobile Valeting Warrington',
  seo: {
    title: 'Mobile Valeting Warrington | We Come to You | SRV Detailing',
    description:
      'Professional mobile car valeting across Warrington. We come to your home, office or workplace anywhere in WA1–WA5. Fully self-contained unit. 22+ years experience.',
    keywords: [
      'mobile valeting warrington',
      'mobile car valeting warrington',
      'mobile car wash warrington',
      'car valeting at home warrington',
      'mobile valet near me warrington',
    ],
    canonical: 'https://www.srvdetailing.co.uk/warrington/car-valeting/mobile-valeting',
  },
  icon: MapPin,
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Warrington', href: '/warrington' },
    { label: 'Car Valeting', href: '/warrington/car-valeting' },
    { label: 'Mobile Valeting', href: '/warrington/car-valeting/mobile-valeting' },
  ],
  heroTitle: 'Mobile Valeting in Warrington',
  heroDescription:
    "Professional valeting delivered directly to your door anywhere across Warrington. No travel, no waiting rooms, no queues. Our fully self-contained mobile unit arrives at your home, office or workplace — you carry on with your day.",
  contentSections: [
    {
      type: 'text',
      heading: 'What Is Mobile Valeting?',
      body: "Mobile valeting means we bring the professional equipment, products and expertise directly to your location — wherever that may be across Warrington. Our custom-equipped van carries its own water supply, onboard power generator, professional lighting, and every product needed for any service from a quick maintenance valet to a full decontamination detail. You don't travel to us — we come to you, at a time that suits your schedule.",
    },
    {
      type: 'list',
      heading: 'Where We Work in Warrington',
      items: [
        'Your home driveway — Stockton Heath, Lymm, Grappenhall, Thelwall or anywhere in the WA postcodes',
        'Business parks and offices — Birchwood Park, Gemini Business Park, Lingley Mere',
        'Town centre and retail park car parks where permitted',
        'Industrial estates and commercial premises across Warrington',
        'New car dealerships requiring post-delivery preparation',
        'Any private driveway, car park or suitable surface across WA1–WA5',
      ],
    },
    {
      type: 'text',
      heading: 'Why Mobile Valeting Works in Warrington',
      body: "Warrington's geography means most residents live close to excellent transport links but often struggle to find convenient, high-quality car care. Traditional valet centres require driving to a fixed location, leaving your car and arranging collection — often a full day's inconvenience. Our mobile service eliminates all of that. While we work on your vehicle, you stay at home, work at your desk or simply get on with your day. It's the most convenient way to maintain a clean car.",
    },
    {
      type: 'process',
      heading: 'How Mobile Valeting Works',
      items: [
        'Book online or by phone — tell us your vehicle, location and preferred service',
        'We confirm your time slot and arrive at your chosen Warrington location',
        'Our self-contained unit sets up without needing your water or electricity',
        'We complete the service while you get on with your day',
        'You receive a full walkthrough of the work completed before we leave',
      ],
    },
  ],
  faqs: [
    {
      question: 'Do you need access to my water or electricity?',
      answer:
        "No. Our mobile unit carries its own fresh water tank and onboard generator. We are entirely self-contained. We don't need anything from your property — just access to your vehicle.",
    },
    {
      question: 'Which areas of Warrington do you cover?',
      answer:
        'We cover all WA postcodes — Town Centre, Birchwood, Stockton Heath, Lymm, Great Sankey, Penketh, Grappenhall, Thelwall, Padgate, Fearnhead, Winwick, Culcheth and surrounding areas.',
    },
    {
      question: 'What services can you do as a mobile valet?',
      answer:
        'All of them. Maintenance valets, full valets, interior detailing, exterior detailing and ceramic coating can all be performed from our mobile unit. The only requirement for ceramic coatings is a covered space or shelter.',
    },
    {
      question: 'How much does mobile valeting cost in Warrington?',
      answer:
        'There is no extra charge for the mobile convenience. Maintenance valets from £45, full valets from £90. The same professional service at the same price — delivered to your door.',
    },
  ],
  relatedLinks: [
    { label: 'Full Valet Warrington', href: '/warrington/car-valeting/full-valet', description: 'Our most comprehensive service' },
    { label: 'Maintenance Valet Warrington', href: '/warrington/car-valeting/mini-valet', description: 'Quick 60-90 minute refresh' },
    { label: 'Car Valeting Warrington', href: '/warrington/car-valeting', description: 'All valeting packages' },
    { label: 'Warrington Hub', href: '/warrington', description: 'All Warrington services' },
  ],
  schemaPrice: '50',
};
