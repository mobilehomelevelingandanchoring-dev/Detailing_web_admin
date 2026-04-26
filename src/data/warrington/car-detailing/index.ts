import { Shield, Sparkles, Paintbrush, Car, Wrench, CircleDot } from 'lucide-react';
import type { PillarPageData } from '@/data/types';

export const warringtonCarDetailingPillar: PillarPageData = {
  slug: 'car-detailing',
  name: 'Car Detailing in Warrington',
  seo: {
    title: 'Car Detailing Warrington | Paint Correction & Ceramic Coating | SRV Detailing',
    description:
      'Professional car detailing in Warrington. Paint correction, ceramic coating, interior detailing and new car protection. 22+ years experience. Mobile service across WA1–WA5 and surrounding Cheshire areas.',
    keywords: [
      'car detailing warrington',
      'paint correction warrington',
      'ceramic coating warrington',
      'interior detailing warrington',
      'mobile car detailing warrington',
    ],
    canonical: 'https://www.srvdetailing.co.uk/warrington/car-detailing',
  },
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Warrington', href: '/warrington' },
    { label: 'Car Detailing', href: '/warrington/car-detailing' },
  ],
  heroTitle: 'Professional Car Detailing in Warrington',
  heroDescription:
    'Restoration-grade car detailing across Warrington and the surrounding Cheshire area. Paint correction, ceramic coatings, interior restoration and new car protection — delivered to your door by a specialist with 22+ years experience.',
  introText:
    "Car detailing is a world apart from a standard car wash. It's a professional restoration and protection process that corrects paint imperfections, applies durable ceramic protection, and deep-cleans every interior surface to a studio standard. At SRV Detailing, we bring that same studio-grade quality directly to your driveway, workplace or car park anywhere across Warrington — from Birchwood to Stockton Heath, Great Sankey to Lymm.",
  services: [
    {
      slug: 'ceramic-coating',
      name: 'Ceramic Coating',
      description:
        "Long-lasting paint protection against Warrington's motorway fallout, road salt and Mersey Valley damp. 2 to 7+ year packages.",
      icon: Shield,
      href: '/warrington/car-detailing/ceramic-coating',
    },
    {
      slug: 'paint-correction',
      name: 'Paint Correction',
      description:
        'Multi-stage machine polishing to remove swirl marks, scratches and oxidation accumulated on Warrington roads. Restore showroom gloss.',
      icon: Sparkles,
      href: '/warrington/car-detailing/paint-correction',
    },
    {
      slug: 'interior-detailing',
      name: 'Interior Detailing',
      description:
        'Deep interior restoration including steam cleaning, leather conditioning and UV sanitisation.',
      icon: CircleDot,
      href: '/warrington/car-detailing/interior-detailing',
    },
    {
      slug: 'exterior-detailing',
      name: 'Exterior Detailing',
      description:
        'Full exterior decontamination, clay bar treatment, machine polish and sealant — essential after motorway commuting.',
      icon: Paintbrush,
      href: '/warrington/car-detailing/exterior-detailing',
    },
    {
      slug: 'new-car-protection',
      name: 'New Car Protection',
      description:
        'Protect your new car from Warrington road conditions from day one. Ceramic coating, paint protection and interior safeguarding.',
      icon: Car,
      href: '/warrington/car-detailing/ceramic-coating',
    },
    {
      slug: 'headlight-restoration',
      name: 'Headlight Restoration',
      description:
        'Restore clarity to oxidised, foggy headlights. Improve night-time visibility and pass your MOT.',
      icon: Wrench,
      href: '/warrington/car-detailing/paint-correction',
    },
  ],
  contentSections: [
    {
      type: 'text',
      heading: 'What Is Car Detailing?',
      body: "Car detailing is a professional-grade process that restores and protects your vehicle's surfaces to the highest standard. Unlike a standard car wash or valet, detailing involves machine polishing to correct paint defects — swirl marks, scratches, oxidation — application of ceramic coatings for years of durable protection, and deep restoration of interior surfaces. It's the higher-investment service that delivers transformative, lasting results.",
    },
    {
      type: 'list',
      heading: 'Why Warrington Vehicles Need Professional Detailing',
      items: [
        "Sitting at the M6, M62 and M56 junction, Warrington vehicles absorb some of the heaviest diesel particulate and tyre rubber contamination in the north-west",
        'Winter salt spread across the A49, A57 and ring roads accelerates corrosion on wheel arches, sills and undercarriages',
        'Industrial fallout from Birchwood, Gemini and Omega business parks embeds as iron contamination in paintwork',
        "The Mersey Valley's persistent humidity promotes water spotting and mineral etching on unprotected clear coat",
        'Open-air parking at retail parks and business parks leaves vehicles exposed to UV, bird droppings and tree sap',
        'Cheshire plain wind carries agricultural dust and fine particles that act as abrasives on unprotected paint',
      ],
    },
    {
      type: 'process',
      heading: 'Our Detailing Process',
      items: [
        'Full decontamination wash — snow foam, two-bucket method, iron fallout removal and clay bar treatment',
        'Paint inspection under professional lighting to map every defect and plan the correction strategy',
        'Multi-stage machine polishing with cutting and finishing compounds to remove swirl marks and scratches',
        'Paint protection application — ceramic coating, wax or sealant depending on your chosen package',
        'Interior deep clean — steam cleaning, leather conditioning, plastics restoration and UV protection',
        'Final inspection, quality check and aftercare guidance',
      ],
    },
  ],
  faqs: [
    {
      question: 'How long does a full car detail take in Warrington?',
      answer:
        'A comprehensive detail typically takes 6 to 10 hours depending on vehicle size and condition. Paint correction alone can take 4 to 8 hours. We never rush the process — every panel gets the attention it deserves.',
    },
    {
      question: 'How often should I get my car detailed?',
      answer:
        'For most vehicles, a full detail once or twice a year is ideal. Warrington vehicles that accumulate significant motorway grime may benefit from more frequent decontamination. If you have a ceramic coating, annual maintenance detailing keeps it performing at its best.',
    },
    {
      question: 'What is the difference between detailing and valeting?',
      answer:
        'Detailing is restoration and protection — paint correction, ceramic coating, deep surface restoration. Valeting is professional cleaning — washing, vacuuming, waxing. Think of detailing as the annual restoration and valeting as regular maintenance.',
    },
    {
      question: 'Can you detail my car at my home in Warrington?',
      answer:
        'Yes. Our fully equipped mobile unit carries its own water, power and professional lighting. We can detail your vehicle on your driveway, at your workplace, or any convenient location across Warrington and the surrounding WA postcode area.',
    },
  ],
  relatedLinks: [
    { label: 'Car Valeting Warrington', href: '/warrington/car-valeting', description: 'Regular maintenance cleaning packages' },
    { label: 'Warrington Hub', href: '/warrington', description: 'All services in Warrington' },
    { label: 'Detailing vs Valeting', href: '/compare/car-detailing-vs-car-valeting', description: 'Understand the difference' },
    { label: 'Detailing Prices', href: '/pricing/car-detailing', description: 'View our detailing packages and prices' },
    { label: 'Manchester Car Detailing', href: '/manchester/car-detailing', description: 'Services across Greater Manchester' },
  ],
};
