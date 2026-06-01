import { Star, Droplets, CheckCircle, Car, MapPin } from 'lucide-react';
import type { PillarPageData } from '@/data/types';

export const warringtonCarValetingPillar: PillarPageData = {
  slug: 'car-valeting',
  name: 'Car Valeting in Warrington',
  seo: {
    title: 'Car Valeting Warrington | Mobile Valeting Service | SRV Detailing',
    description:
      'Professional mobile car valeting in Warrington. Full valets, mini valets, interior and exterior packages across WA1–WA5. 22+ years experience. We come to you.',
    keywords: [
      'car valeting warrington',
      'mobile car valeting warrington',
      'full valet warrington',
      'car wash warrington',
      'professional valeting warrington',
    ],
    canonical: 'https://www.srvdetailing.co.uk/warrington/car-valeting',
  },
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Warrington', href: '/warrington' },
    { label: 'Car Valeting', href: '/warrington/car-valeting' },
  ],
  heroTitle: 'Professional Car Valeting in Warrington',
  heroDescription:
    'Regular professional cleaning that keeps your Warrington vehicle looking fresh, comfortable and well-maintained. Hand-wash only, premium products, delivered to your door anywhere across WA1–WA5.',
  introText:
    "Car valeting is professional-grade cleaning and maintenance delivered to your location. For Warrington drivers dealing with the grime of the M6 and M62 corridors, regular professional valeting makes a tangible difference — removing contamination safely before it bonds to your paintwork. We offer packages from a focused 60-minute mini valet to a comprehensive 3–4 hour full valet, all from our fully equipped mobile unit.",
  services: [
    {
      slug: 'full-valet',
      name: 'Full Valet',
      description:
        'Complete interior and exterior valet — our most thorough cleaning package. 3 to 4 hours of meticulous care.',
      icon: Star,
      href: '/warrington/car-valeting/full-valet',
    },
    {
      slug: 'mini-valet',
      name: 'Mini Valet',
      description:
        'Quick maintenance clean in 60 to 90 minutes. Perfect between full valets to keep your car looking sharp.',
      icon: Droplets,
      href: '/warrington/car-valeting/mini-valet',
    },
    {
      slug: 'mobile-valeting',
      name: 'Mobile Valeting',
      description:
        'We come to your home, office or workplace anywhere in Warrington. Fully equipped mobile unit — no travel required.',
      icon: MapPin,
      href: '/warrington/car-valeting/mobile-valeting',
    },
    {
      slug: 'interior-valeting',
      name: 'Interior Valeting',
      description:
        'Deep cabin cleaning — vacuuming, upholstery treatment, dashboard detailing and odour removal.',
      icon: CheckCircle,
      href: '/warrington/car-valeting/full-valet',
    },
    {
      slug: 'exterior-valeting',
      name: 'Exterior Valeting',
      description:
        'Professional hand wash, wheel cleaning, tyre dressing and wax protection using safe two-bucket method.',
      icon: Car,
      href: '/warrington/car-valeting/full-valet',
    },
  ],
  contentSections: [
    {
      type: 'text',
      heading: 'What Is Car Valeting?',
      body: "Car valeting is professional vehicle cleaning and maintenance. It covers thorough interior and exterior washing, upholstery treatment, dashboard cleaning, wheel detailing and wax protection. Think of it as the highest-quality version of what a car wash should be — using safe techniques, premium products and genuine attention to your vehicle's surfaces. For Warrington drivers, it's also the most effective way to regularly remove the grime and contamination that builds up from motorway commuting.",
    },
    {
      type: 'list',
      heading: 'Why Professional Valeting Matters in Warrington',
      items: [
        'Motorway commuters on the M6 and M62 accumulate road tar, diesel residue and tyre rubber that hand washing alone cannot fully remove',
        'Safe two-bucket technique prevents the swirl marks caused by automated car washes',
        'pH-neutral shampoos clean without stripping wax or ceramic coating protection',
        'Proper wheel cleaning with fallout removers tackles brake dust and iron contamination',
        'Interior deep clean eliminates dust, damp smells and allergens common in Cheshire commuter cars',
        'Mobile convenience — we work at your home in Great Sankey, your office in Birchwood, or wherever suits you',
      ],
    },
    {
      type: 'process',
      heading: 'How Our Valeting Service Works',
      items: [
        "Book your preferred service and Warrington location — we'll confirm a convenient time slot",
        'Our fully equipped mobile unit arrives with everything needed — water, power, professional products',
        'We assess your vehicle and begin with a thorough pre-wash and snow foam application',
        'Systematic cleaning of exterior and interior surfaces using safe, professional techniques',
        'Final inspection, protection application and walkthrough with you',
      ],
    },
  ],
  faqs: [
    {
      question: 'How often should I get my car valeted in Warrington?',
      answer:
        'For most vehicles, a full valet every 4–6 weeks keeps your car in excellent condition. Motorway commuters in Warrington may benefit from more frequent mini valets given the road grime exposure on the M6 and M62. Between full valets, monthly mini valets maintain the finish.',
    },
    {
      question: 'What is the difference between a full valet and a mini valet?',
      answer:
        'A full valet (3–4 hours) includes complete interior deep clean, exterior decontamination wash, clay bar, wax protection and wheel detailing. A mini valet (60–90 minutes) is a maintenance service covering exterior wash, interior vacuum, dashboard wipe and glass cleaning.',
    },
    {
      question: 'Do you valet at my home or workplace in Warrington?',
      answer:
        'Yes. Our mobile unit travels anywhere across Warrington — from Stockton Heath to Birchwood, Lymm to Great Sankey. We carry our own water and power and just need access to your vehicle.',
    },
    {
      question: 'How much does a car valet cost in Warrington?',
      answer:
        'Mini valets start from £50, full valets from £120. Prices vary by vehicle size. Contact us for an exact quote.',
    },
  ],
  relatedLinks: [
    { label: 'Car Detailing Warrington', href: '/warrington/car-detailing', description: 'Restoration-grade services' },
    { label: 'Warrington Hub', href: '/warrington', description: 'All services in Warrington' },
    { label: 'Detailing vs Valeting', href: '/compare/car-detailing-vs-car-valeting', description: 'Understand the difference' },
    { label: 'Valeting Prices', href: '/pricing/car-valeting', description: 'View our valeting packages' },
    { label: 'Manchester Car Valeting', href: '/manchester/car-valeting', description: 'Services across Greater Manchester' },
  ],
};
