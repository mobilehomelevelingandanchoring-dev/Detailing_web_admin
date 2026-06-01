import { Droplets } from 'lucide-react';
import type { ServicePageData } from '@/data/types';

export const miniValetWarrington: ServicePageData = {
  slug: 'mini-valet',
  name: 'Mini Valet Warrington',
  seo: {
    title: 'Mini Valet Warrington | Quick Professional Car Clean | SRV Detailing',
    description:
      'Quick mini valet service in Warrington. 60-90 minute maintenance clean — exterior wash, interior vacuum and dash wipe. Mobile service across WA1–WA5.',
    keywords: [
      'mini valet warrington',
      'quick car wash warrington',
      'car clean warrington',
      'maintenance valet warrington',
      'mobile mini valet warrington',
    ],
    canonical: 'https://www.srvdetailing.co.uk/warrington/car-valeting/mini-valet',
  },
  icon: Droplets,
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Warrington', href: '/warrington' },
    { label: 'Car Valeting', href: '/warrington/car-valeting' },
    { label: 'Mini Valet', href: '/warrington/car-valeting/mini-valet' },
  ],
  heroTitle: 'Mini Valet in Warrington',
  heroDescription:
    'A focused professional clean in just 60 to 90 minutes. Perfect for regular maintenance between full valets, or a quick refresh before a meeting. Mobile across Warrington — we come to you.',
  contentSections: [
    {
      type: 'text',
      heading: 'What Is a Mini Valet?',
      body: "A mini valet is a focused maintenance clean designed to keep your car looking sharp between full valets. In 60 to 90 minutes we wash the exterior safely using the two-bucket method, vacuum the interior, wipe down surfaces and clean the glass. It's not a deep clean — it's a professional-grade refresh that's in another league from any automated car wash.",
    },
    {
      type: 'list',
      heading: 'Mini Valet Includes',
      items: [
        'Snow foam pre-wash to safely lift surface grime and motorway deposits',
        'Two-bucket hand wash — safe for your paint, no spinning brushes',
        'Wheel faces cleaned and tyres dressed',
        'Full interior vacuum — seats, carpets, boot',
        'Dashboard and console wipe-down',
        'All glass cleaned inside and out',
        'Door shuts wiped',
        'Air freshener applied',
      ],
    },
    {
      type: 'text',
      heading: 'When to Book a Mini Valet in Warrington',
      body: "Book a mini valet when your car needs a professional refresh but doesn't require a deep clean. Ideal as a fortnightly or monthly maintenance service for Warrington commuters, before client meetings in Birchwood or Stockton Heath, or after a muddy weekend in the Cheshire countryside. It takes just 60–90 minutes and keeps your car consistently presentable without the time commitment of a full valet.",
    },
  ],
  faqs: [
    {
      question: 'How much does a mini valet cost in Warrington?',
      answer:
        'Mini valets start from £50 for a standard car. Price varies by vehicle size. Contact us for your exact price.',
    },
    {
      question: 'How long does a mini valet take?',
      answer: '60 to 90 minutes depending on vehicle size and condition.',
    },
    {
      question: "What's the difference between a mini valet and a full valet?",
      answer:
        'A mini valet (60–90 mins) is a professional maintenance clean covering the basics. A full valet (3–4 hours) is a comprehensive deep clean with clay bar, wax protection, upholstery treatment and thorough interior restoration.',
    },
    {
      question: 'Do you come to my home or office in Warrington?',
      answer:
        "Yes — anywhere across Warrington's WA postcodes. We carry our own water and power and just need access to your vehicle.",
    },
  ],
  relatedLinks: [
    { label: 'Full Valet Warrington', href: '/warrington/car-valeting/full-valet', description: 'Our most thorough package' },
    { label: 'Mobile Valeting Warrington', href: '/warrington/car-valeting/mobile-valeting', description: 'We come to any location' },
    { label: 'Car Valeting Warrington', href: '/warrington/car-valeting', description: 'All valeting packages' },
    { label: 'Valeting Prices', href: '/pricing/car-valeting', description: 'View all pricing' },
  ],
  schemaPrice: '50',
};
