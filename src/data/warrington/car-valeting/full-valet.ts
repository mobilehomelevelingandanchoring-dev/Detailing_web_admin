import { Star } from 'lucide-react';
import type { ServicePageData } from '@/data/types';

export const fullValetWarrington: ServicePageData = {
  slug: 'full-valet',
  name: 'Full Valet Warrington',
  seo: {
    title: 'Full Valet Warrington | Complete Car Valeting Service | SRV Detailing',
    description:
      'Professional full valet service in Warrington. Complete interior and exterior cleaning, 3-4 hours of meticulous care. Mobile service across WA1–WA5. 22+ years experience.',
    keywords: [
      'full valet warrington',
      'full car valet warrington',
      'complete car valet warrington',
      'car cleaning warrington',
      'mobile full valet warrington',
    ],
    canonical: 'https://www.srvdetailing.co.uk/warrington/car-valeting/full-valet',
  },
  icon: Star,
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Warrington', href: '/warrington' },
    { label: 'Car Valeting', href: '/warrington/car-valeting' },
    { label: 'Full Valet', href: '/warrington/car-valeting/full-valet' },
  ],
  heroTitle: 'Full Valet in Warrington',
  heroDescription:
    'Our most comprehensive valeting package — 3 to 4 hours of meticulous cleaning covering every interior and exterior surface. The complete reset your Warrington vehicle deserves. Mobile across WA1–WA5.',
  contentSections: [
    {
      type: 'text',
      heading: 'What Is a Full Valet?',
      body: "A full valet is our most thorough cleaning package. It combines a complete exterior decontamination wash with a deep interior clean, covering every surface of your vehicle. From snow foam pre-wash to final wax protection, from deep carpet extraction to dashboard detailing — nothing is overlooked. It takes 3 to 4 hours and leaves your car looking, feeling and smelling genuinely new. For Warrington vehicles that accumulate significant grime from the motorway network, a full valet is the proper reset.",
    },
    {
      type: 'list',
      heading: 'Full Valet Includes',
      items: [
        'Snow foam pre-wash to loosen road grime, motorway deposits and contamination',
        'Two-bucket hand wash with pH-neutral shampoo — no automated brushes',
        'Wheel and tyre deep clean with fallout remover and tyre dressing',
        'Clay bar decontamination to remove bonded road salt, tar and iron particles',
        'Full interior vacuum — seats, carpets, boot, door pockets and all crevices',
        'Upholstery cleaning and stain treatment (fabric or leather)',
        'Dashboard, console and all trim deep cleaned and dressed',
        'Door shuts and jambs cleaned',
        'All glass cleaned inside and out streak-free',
        'Wax or sealant protection on all exterior paintwork',
        'Final quality inspection and walkthrough',
      ],
    },
    {
      type: 'text',
      heading: 'When to Book a Full Valet in Warrington',
      body: "A full valet is ideal every 4–6 weeks as regular maintenance, or as a pre-sale preparation to maximise your vehicle's value. It's also the perfect seasonal reset — in spring after winter road salt accumulation, or in autumn before the next salt season. For Warrington commuters using the M6 and M62 regularly, a full valet 4–6 times a year keeps the vehicle genuinely clean, not just surface-washed.",
    },
  ],
  faqs: [
    {
      question: 'How long does a full valet take in Warrington?',
      answer:
        "A full valet takes 3 to 4 hours depending on vehicle size and condition. Heavily soiled vehicles — particularly those used on Warrington's motorway network — may take slightly longer. We'll give you a realistic time estimate when we assess your car.",
    },
    {
      question: 'How much does a full valet cost in Warrington?',
      answer:
        'Full valets start from £120 for a standard car, increasing for larger vehicles (SUVs, vans). Contact us for an exact quote for your vehicle.',
    },
    {
      question: 'Is a full valet different from car detailing?',
      answer:
        'Yes. A full valet is professional cleaning — it makes your car clean and fresh. Car detailing goes further with paint correction (removing scratches and swirl marks) and ceramic coating (long-term protection). A valet maintains your car; a detail restores it.',
    },
    {
      question: 'Can you do a full valet at my home in Warrington?',
      answer:
        'Yes. Our mobile unit is entirely self-contained with its own water supply and power. We can perform a full valet at your home, office or any location across the WA postcode area.',
    },
  ],
  relatedLinks: [
    { label: 'Mini Valet Warrington', href: '/warrington/car-valeting/mini-valet', description: 'Quick maintenance clean' },
    { label: 'Mobile Valeting Warrington', href: '/warrington/car-valeting/mobile-valeting', description: 'We come to you' },
    { label: 'Car Valeting Warrington', href: '/warrington/car-valeting', description: 'All valeting packages' },
    { label: 'Car Detailing Warrington', href: '/warrington/car-detailing', description: 'Restoration-grade services' },
    { label: 'Valeting Prices', href: '/pricing/car-valeting', description: 'View all pricing' },
  ],
  schemaPrice: '120',
};
