import { Tag } from 'lucide-react';
import type { ServicePageData } from '@/data/types';

export const detailingPricesWilmslow: ServicePageData = {
  slug: 'prices',
  name: 'Car Detailing Prices Wilmslow',
  seo: {
    title: 'Car Detailing Prices Wilmslow | SK9 Detailing Cost Guide | SRV Detailing',
    description:
      'Car detailing prices in Wilmslow. Ceramic coating from £300, paint correction from £250, interior detailing from £150. Transparent pricing — no call-out fees for SK9 customers.',
    keywords: [
      'car detailing prices wilmslow',
      'ceramic coating cost wilmslow',
      'paint correction price wilmslow sk9',
      'car detailing cost cheshire east',
      'how much car detailing wilmslow',
    ],
    canonical: 'https://www.srvdetailing.co.uk/wilmslow/car-detailing/prices',
  },
  icon: Tag,
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Wilmslow', href: '/wilmslow' },
    { label: 'Car Detailing', href: '/wilmslow/car-detailing' },
    { label: 'Prices', href: '/wilmslow/car-detailing/prices' },
  ],
  heroTitle: 'Car Detailing Prices in Wilmslow — Transparent SK9 Pricing',
  heroDescription:
    'Clear, honest pricing for all car detailing services across Wilmslow and SK9. No hidden charges. No call-out fees for SK9 customers. Prices reflect professional results using correct equipment and products.',
  contentSections: [
    {
      type: 'list',
      heading: 'Wilmslow Car Detailing Price Guide',
      items: [
        'Ceramic Coating — Entry Level (2-year): from £300 | includes decontamination, clay bar, single-stage correction',
        'Ceramic Coating — Mid-Range (3–4 year): from £500 | enhanced chemical resistance and deeper gloss',
        'Ceramic Coating — Premium (5–7+ year): from £800 | maximum hardness, UV defence, scratch resistance',
        'Paint Correction — Single-Stage: from £250 | removes light to moderate swirl marks and fine scratches',
        'Paint Correction — Two-Stage: from £400 | deeper correction, maximum clarity',
        'New Car Protection: from £300 | decontamination, light polish where needed, 2-year ceramic coating',
        'Exterior Detailing (decontamination, polish, sealant): from £200',
        'Interior Detailing (full restoration): from £150',
        'Leather Conditioning: from £80',
        'Engine Bay Detailing: from £60 standalone, from £50 combined',
        'Headlight Restoration: from £60 per pair',
        'Swirl Mark Removal (single-stage polish): from £200',
        'Full Detail Package (correction + ceramic + interior): from £600',
      ],
    },
    {
      type: 'text',
      heading: 'What Affects the Price of Car Detailing in Wilmslow',
      bodyParagraphs: [
        "Car detailing prices reflect the time, products, and expertise required for each specific vehicle. Larger vehicles — Range Rover, Bentley Bentayga, Porsche Cayenne — take longer than compact cars across every service stage. Vehicles with heavily defected paint require more correction stages and more time under panel lighting than vehicles with light swirling only. The condition of the interior, the type of leather, and the degree of soiling all affect the time required for interior work.",
        "We never provide flat-rate prices that incentivise rushing work. Our pricing is transparent based on an honest assessment of your vehicle. We provide exact quotes before any work begins and do not add charges without discussion.",
      ],
    },
    {
      type: 'list',
      heading: 'No Call-Out Fees for SK9 and Cheshire East',
      items: [
        'No travel surcharge for all Wilmslow (SK9) addresses',
        'No call-out fee for Alderley Edge, Handforth, and immediate SK9 surroundings',
        'Standard travel charge may apply for Knutsford (WA16) and Macclesfield (SK10/SK11) — confirmed at booking',
        'All pricing confirmed in advance — no surprise charges',
      ],
    },
  ],
  faqs: [
    {
      question: 'Why does car detailing cost more than a regular car wash?',
      answer:
        "Professional detailing uses significantly more time, specialist equipment, and professional-grade products than any car wash service. A ceramic coating application on a prestige vehicle involves 6–10 hours of work, paint depth measurement, machine polishing, panel inspection lighting, and careful coating application — none of which is involved in a drive-through wash. The price reflects genuine specialist labour and materials.",
    },
    {
      question: 'Do you charge more for prestige vehicles in Wilmslow?',
      answer:
        "Prestige vehicles typically take longer due to their size, complexity of panel shapes, and the additional care required with specialist paint finishes, Alcantara, and premium leather. This is reflected in pricing honestly rather than charging a 'premium' surcharge for the badge. We price based on the actual work required.",
    },
    {
      question: 'Can I get a quote before booking?',
      answer:
        "Yes — always. Call us on 07375 759686 or use our contact form with your vehicle details and the service you're interested in. We provide an accurate quote based on your vehicle and requirements before any commitment.",
    },
  ],
  relatedLinks: [
    { label: 'Car Detailing Wilmslow', href: '/wilmslow/car-detailing', description: 'Overview of all detailing services' },
    { label: 'Ceramic Coating Wilmslow', href: '/wilmslow/car-detailing/ceramic-coating', description: 'SiO2 paint protection packages' },
    { label: 'Valeting Prices Wilmslow', href: '/wilmslow/car-valeting/prices', description: 'Valeting price guide' },
    { label: 'Pricing Hub', href: '/pricing', description: 'Site-wide pricing reference' },
    { label: 'Book Now', href: '/booking' },
  ],
};
