import { Sofa } from 'lucide-react';
import type { ServicePageData } from '@/data/types';

export const interiorValetingPoynton: ServicePageData = {
  slug: 'interior-valeting',
  name: 'Interior Valeting Poynton',
  seo: {
    title: 'Interior Valeting Poynton | Deep Car Interior Clean SK12 | SRV Detailing',
    description:
      'Interior valeting in Poynton SK12 — deep vacuum, upholstery clean and full cabin refresh delivered to your Poynton driveway. No need to travel. Book today.',
    keywords: [
      'interior valeting poynton',
      'interior valeting sk12',
      'car interior clean poynton',
      'interior car valet poynton',
      'inside car clean poynton',
      'interior valeting poynton stockport',
      'mobile interior valeting sk12',
    ],
    canonical: 'https://www.srvdetailing.co.uk/stockport/areas/poynton/car-valeting/interior-valeting',
  },
  icon: Sofa,
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Stockport', href: '/stockport' },
    { label: 'Areas', href: '/stockport/areas' },
    { label: 'Poynton', href: '/stockport/areas/poynton' },
    { label: 'Car Valeting', href: '/stockport/areas/poynton/car-valeting' },
    { label: 'Interior Valeting', href: '/stockport/areas/poynton/car-valeting/interior-valeting' },
  ],
  heroTitle: 'Interior Valeting in Poynton — Deep Cabin Clean at Your Door in SK12',
  heroDescription:
    "The exterior's fine — it's the inside that needs attention. Our interior-only valeting service gives your Poynton car's cabin a thorough, professional clean without the full valet time or cost. Done at your SK12 driveway.",
  imageKey: 'interior',
  contentSections: [
    {
      type: 'text',
      heading: 'What Does Interior Valeting Include in Poynton?',
      bodyParagraphs: [
        "Interior valeting is a thorough, professional clean of your vehicle's cabin — everything inside the doors. Deep vacuuming of all surfaces including seat rails and door pockets, cleaning and dressing all hard trim, spot-treating upholstery stains, cleaning all glass from inside, and leaving the cabin properly fresh rather than just surface-wiped.",
        "It's the right service when the exterior is in good shape from a recent wash or regular washing, but the interior has accumulated the inevitable debris of daily life — crumbs, dust, a bit of Poynton Pool mud on the carpets, the general worn-in feeling of a car that's been genuinely used. Interior valeting addresses all of that in a single focused service.",
      ],
    },
    {
      type: 'process',
      heading: 'Interior Valeting Process for Poynton Cars',
      items: [
        'Preparation — all floor mats removed, loose items noted, condition assessed',
        'Full vacuum — seats, carpets, floor mats, boot liner, door pockets; crevice tools for seat rails, gear surrounds and vent slots',
        'Pet hair extraction (if applicable) — rubber blade and vacuum extraction for embedded pet hair',
        'Dashboard and console cleaning — all hard surfaces cleaned with appropriate product and dressed',
        'Steering wheel — cleaned and dressed; steering wheels accumulate bacteria rapidly from daily contact',
        'Door cards and panels — full clean including door handles, pockets and speaker grilles',
        'Upholstery treatment — fabric seats spot-cleaned for stains; leather wiped and conditioned',
        'Interior glass — all windows and the windscreen cleaned streak-free from inside',
        'Air freshening — appropriate freshener applied; ozone treatment available for persistent odours',
        'Floor mats — cleaned, dried and replaced',
      ],
    },
    {
      type: 'list',
      heading: 'When to Book Interior Valeting in Poynton',
      items: [
        'When the exterior is clean from a recent wash but the inside needs proper attention',
        'After children, passengers or dogs have left the cabin needing more than a quick wipe',
        'Seasonal interior refresh — particularly after winter when mud and damp accumulate from outdoor activities near Lyme Park',
        'Pre-sale preparation when the exterior condition is already good',
        'When a specific event — a food spill, a sick pet, a muddy dog — has fouled the interior',
        'Regular interior-only maintenance for drivers who hand-wash their own exterior but need professional interior help',
      ],
    },
  ],
  faqs: [
    {
      question: 'How much does interior valeting cost in Poynton?',
      answer:
        "Interior valeting starts from £60 for a standard hatchback or saloon. Larger vehicles from £80. Heavily soiled interiors or those with significant pet hair may be quoted higher on inspection. No travel fees for SK12.",
    },
    {
      question: 'How long does interior valeting take in Poynton?',
      answer:
        "1.5–2.5 hours for most standard vehicles. Larger cars, heavily soiled cabins or those with significant pet hair take longer. We estimate accurately when booking.",
    },
    {
      question: 'Does interior valeting include seat stain removal?',
      answer:
        "Yes — interior valeting includes upholstery spot treatment for common stains. Deep-set or large-area staining responds better to our dedicated upholstery cleaning service with hot water extraction. We assess on arrival and advise on the best approach.",
    },
    {
      question: 'Can you do interior valeting near Poynton Pool in SK12?',
      answer:
        "Yes. We cover all of Poynton and SK12 — wherever your car is parked, we come to you. We bring our own vacuum, all cleaning products and equipment. Standard driveway access is all we need.",
    },
    {
      question: 'What is the difference between interior valeting and interior detailing in Poynton?',
      answer:
        "Interior valeting is a thorough cleaning service — it makes the cabin look and smell fresh. Interior detailing goes further with steam cleaning, hot water extraction for deep staining, and specialist material restoration. For a car in regular use, valeting is the maintenance service; detailing is for restoration when the cabin needs a proper reset.",
    },
  ],
  relatedLinks: [
    { label: 'Full Valet Poynton', href: '/stockport/areas/poynton/car-valeting/full-valet', description: 'Interior and exterior combined' },
    { label: 'Interior Detailing Poynton', href: '/stockport/areas/poynton/car-detailing/interior-detailing', description: 'Deeper steam and extraction service' },
    { label: 'Upholstery Cleaning Poynton', href: '/stockport/areas/poynton/car-valeting/upholstery-cleaning', description: 'Hot water extraction for deep stains' },
    { label: 'Pet Hair Removal Poynton', href: '/stockport/areas/poynton/car-valeting/pet-hair-removal', description: 'Specialist pet hair extraction' },
    { label: 'Car Valeting Poynton', href: '/stockport/areas/poynton/car-valeting', description: 'All valeting services in Poynton' },
  ],
  schemaPrice: '60',
};
