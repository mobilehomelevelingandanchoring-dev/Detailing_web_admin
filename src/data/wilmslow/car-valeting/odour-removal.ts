import { Wind } from 'lucide-react';
import type { ServicePageData } from '@/data/types';

export const odourRemovalWilmslow: ServicePageData = {
  slug: 'odour-removal',
  name: 'Odour Removal Wilmslow',
  seo: {
    title: 'Odour Removal Wilmslow | Car Smell Removal SK9 | SRV Detailing',
    description:
      'Professional car odour removal in Wilmslow. Deep cleaning and ozone treatment permanently eliminates smoke, pet, damp, and food smells from vehicle interiors. SK9 mobile service.',
    keywords: [
      'odour removal wilmslow',
      'car smell removal wilmslow',
      'ozone treatment wilmslow sk9',
      'smoke smell removal car wilmslow',
      'pet smell removal car wilmslow',
      'car odour removal cheshire east',
    ],
    canonical: 'https://www.srvdetailing.co.uk/wilmslow/car-valeting/odour-removal',
  },
  icon: Wind,
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Wilmslow', href: '/wilmslow' },
    { label: 'Car Valeting', href: '/wilmslow/car-valeting' },
    { label: 'Odour Removal', href: '/wilmslow/car-valeting/odour-removal' },
  ],
  heroTitle: 'Odour Removal Wilmslow — Permanent Smell Elimination for SK9 Vehicles',
  heroDescription:
    'Permanently eliminate persistent odours from your Wilmslow vehicle. Our deep cleaning and ozone treatment process neutralises smoke, pet, damp, food, and chemical smells at their molecular source — not masking them, but destroying them.',
  imageKey: 'interior',
  contentSections: [
    {
      type: 'text',
      heading: 'Why Air Fresheners Do Not Solve Car Odour Problems',
      bodyParagraphs: [
        "An air freshener masks odour — it adds a competing smell rather than addressing the source. For persistent odours in vehicle interiors, the source must be eliminated. Smoke residue permeates headlinings, seat foam, carpet backing, and plastic trim. Pet dander and bacteria embedded in fabric seating produce odour continuously. Damp and mildew in under-seat carpets create musty smells that worsen with time.",
        "Our odour removal process begins with deep cleaning — physical removal of odour sources through steam cleaning, hot water extraction, and treatment of all affected surfaces. For persistent odours, we follow deep cleaning with ozone treatment: an ozone generator introduced to the closed vehicle cabin produces ozone (O3) that chemically oxidises odour molecules in the air and on all surfaces it contacts. Ozone treatment eliminates odour at the molecular level — it is the same process used in property fire and flood remediation and is the only reliably effective treatment for deep-set smoke and pet smells.",
      ],
    },
    {
      type: 'process',
      heading: 'Our Odour Removal Process',
      items: [
        'Source identification — inspect the interior to identify odour sources and severity',
        'Deep interior clean — steam cleaning of all hard surfaces, hot water extraction of carpets and fabric seats, thorough vacuum',
        'Targeted treatment — specific cleaning of known odour sources: tobacco deposits on headlining and plastics, pet dander in seat fabric, mildew in carpet backing',
        'Ozone generation — professional ozone generator introduced to the closed cabin; treatment duration depends on severity',
        'Ventilation — cabin thoroughly aired after ozone treatment',
        'Final inspection — cabin assessed and any residual odour sources addressed',
        'Deodoriser — fresh, neutral cabin deodoriser applied as a finishing measure',
      ],
    },
    {
      type: 'list',
      heading: 'Odours We Treat in Wilmslow',
      items: [
        'Tobacco and cigarette smoke — surface deposits on all interior materials including headlining, plastics, and seat foam',
        'Pet odours — dog and cat dander, urine, and body odour from fabric seats, carpets, and boot liners',
        'Damp and mildew — from wet dogs, wet clothing, or water ingress through door seals on Cheshire winter drives',
        'Food and drink spills — particularly in family SUVs used for school runs and countryside trips',
        'Fuel or chemical contamination — occasional issue in prestige sports cars or following spills in the boot',
      ],
    },
  ],
  faqs: [
    {
      question: 'Is ozone treatment safe for my car interior?',
      answer:
        "Yes, when applied correctly by a professional. Ozone at appropriate concentrations does not damage upholstery, leather, plastics, or electronics when applied for the correct duration. The vehicle must be unoccupied during treatment, and properly ventilated afterwards. We use calibrated equipment and proven treatment durations matched to odour severity.",
    },
    {
      question: 'How long does odour removal take in Wilmslow?',
      answer:
        "Deep cleaning typically takes 1–2 hours. Ozone treatment takes a further 1–3 hours depending on severity. The total service is usually 2–4 hours. For extremely heavy smoke contamination, a repeat treatment may be recommended.",
    },
    {
      question: 'How much does car odour removal cost in Wilmslow?',
      answer:
        "Odour removal starts from £80 for a basic treatment. Combined deep clean and ozone treatment from £120 depending on vehicle size and odour severity. We provide an honest assessment when booking.",
    },
    {
      question: 'Will the odour return after treatment?',
      answer:
        "Ozone treatment permanently eliminates the odour molecules it contacts. If there are remaining physical odour sources — smoke residue not removed during cleaning, or ongoing contamination from the same source — some odour may return. We aim to remove all physical sources during the deep clean stage so that the ozone treatment achieves a permanent result.",
    },
  ],
  relatedLinks: [
    { label: 'Pet Hair Removal Wilmslow', href: '/wilmslow/car-valeting/pet-hair-removal', description: 'Remove embedded pet hair before odour treatment' },
    { label: 'Interior Valeting Wilmslow', href: '/wilmslow/car-valeting/interior-valeting', description: 'Full interior professional clean' },
    { label: 'Upholstery Cleaning Wilmslow', href: '/wilmslow/car-valeting/upholstery-cleaning', description: 'Hot water extraction for fabric seats' },
    { label: 'Full Valet Wilmslow', href: '/wilmslow/car-valeting/full-valet', description: 'Complete interior and exterior valet' },
    { label: 'Car Valeting Wilmslow', href: '/wilmslow/car-valeting', description: 'All valeting services across SK9' },
    { label: 'Book Now', href: '/booking' },
  ],
  schemaPrice: '80',
};
