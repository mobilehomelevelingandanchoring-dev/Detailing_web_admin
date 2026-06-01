import { Tag } from 'lucide-react';
import type { ServicePageData } from '@/data/types';

export const valetingPricesWilmslow: ServicePageData = {
  slug: 'prices',
  name: 'Car Valeting Prices Wilmslow',
  seo: {
    title: 'Car Valeting Prices Wilmslow | SK9 Valeting Cost | SRV Detailing',
    description:
      'Car valeting prices in Wilmslow. Mini valet from £50, full valet from £120. Transparent pricing for all valeting services across SK9 and Cheshire East. No hidden charges.',
    keywords: [
      'car valeting prices wilmslow',
      'full valet cost wilmslow',
      'mini valet price wilmslow sk9',
      'car valeting cost cheshire east',
      'how much car valet wilmslow',
    ],
    canonical: 'https://www.srvdetailing.co.uk/wilmslow/car-valeting/prices',
  },
  icon: Tag,
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Wilmslow', href: '/wilmslow' },
    { label: 'Car Valeting', href: '/wilmslow/car-valeting' },
    { label: 'Prices', href: '/wilmslow/car-valeting/prices' },
  ],
  heroTitle: 'Car Valeting Prices in Wilmslow — Clear SK9 Pricing',
  heroDescription:
    'Transparent, honest pricing for all car valeting services across Wilmslow and SK9. No call-out fees, no surprise charges. Every price is confirmed before any work begins.',
  contentSections: [
    {
      type: 'list',
      heading: 'Wilmslow Car Valeting Price Guide',
      items: [
        'Mini Valet (exterior hand wash, interior vacuum, dash wipe, glass): from £50 (hatchback) / from £60 (SUV/prestige)',
        'Full Valet (complete interior and exterior, 3–4 hours): from £120 (standard) / from £150 (large SUV/prestige)',
        'Exterior Valet only (hand wash, wheel decontamination, wax): from £50',
        'Interior Valet only (vacuum, steam, trim, glass): from £60',
        'Mobile Car Wash (snow foam, hand wash, wheels, quick detailer): from £30',
        'Pet Hair Removal: from £60 (light) / from £80–£100 (heavy/large vehicles)',
        'Odour Removal with Ozone Treatment: from £80 (light) / from £120 (deep treatment)',
        'Upholstery Hot Water Extraction: from £80 (seats and carpets)',
        'All prices are per service — no call-out fees within SK9',
      ],
    },
    {
      type: 'text',
      heading: 'What Affects the Price of a Valet in Wilmslow',
      bodyParagraphs: [
        "Vehicle size is the primary price factor — a Range Rover Autobiography or Bentley Bentayga requires significantly more time than a compact hatchback across every stage of a valet. Vehicle condition is the second factor — a heavily soiled interior or months of accumulated road salt and contamination require more time and product than a vehicle in regular care.",
        "We price honestly based on an accurate assessment of your vehicle rather than incentivising rushed work with artificially low flat rates. Every Wilmslow customer receives a confirmed price before any work begins.",
      ],
    },
    {
      type: 'list',
      heading: 'Regular Customer Pricing',
      items: [
        'Regular valeting customers (monthly or more frequent bookings) receive priority scheduling and consistent rates',
        'Standing appointments available for weekly, fortnightly, or monthly mini valets',
        'Seasonal packages available — contact us to discuss a care programme for your Wilmslow vehicle',
      ],
    },
  ],
  faqs: [
    {
      question: 'Do you charge a call-out fee for Wilmslow?',
      answer:
        'No. There is no call-out fee for any SK9 address or the immediately adjacent areas including Alderley Edge and Handforth. A small travel charge may apply for more distant locations such as Knutsford or Macclesfield — always confirmed at booking.',
    },
    {
      question: 'Why is a professional valet more expensive than a car wash?',
      answer:
        "A professional mobile valet involves significantly more time, specialist equipment, and professional-grade products than any automated or manual car wash. A full valet takes 3–4 hours of careful, skilled work — proper decontamination, safe hand washing, thorough interior treatment, and protective finishing. The price reflects genuine professional labour.",
    },
    {
      question: 'Can I get a quote for my specific vehicle?',
      answer:
        "Yes. Call us on 07375 759686 or use our contact form with your vehicle make, model, and the service you need. We provide an accurate, no-obligation quote before any booking is confirmed.",
    },
  ],
  relatedLinks: [
    { label: 'Car Valeting Wilmslow', href: '/wilmslow/car-valeting', description: 'Overview of all valeting services' },
    { label: 'Full Valet Wilmslow', href: '/wilmslow/car-valeting/full-valet', description: 'Our most comprehensive valeting service' },
    { label: 'Detailing Prices Wilmslow', href: '/wilmslow/car-detailing/prices', description: 'Detailing price guide' },
    { label: 'Pricing Hub', href: '/pricing', description: 'Site-wide pricing reference' },
    { label: 'Book Now', href: '/booking' },
  ],
};
