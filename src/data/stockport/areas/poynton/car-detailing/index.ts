import { Shield, Sparkles, Paintbrush, Car, Wrench, CircleDot, Armchair, Lightbulb } from 'lucide-react';
import type { PillarPageData } from '@/data/types';

export const poyntonCarDetailingPillar: PillarPageData = {
  slug: 'car-detailing',
  name: 'Car Detailing in Poynton',
  seo: {
    title: 'Car Detailing Poynton | Paint Correction & Ceramic Coating SK12 | SRV Detailing',
    description:
      'Car detailing in Poynton SK12 — paint correction, ceramic coating and interior restoration brought to your door. Mobile service across all SK12. Get a free quote.',
    keywords: [
      'car detailing poynton',
      'paint correction poynton',
      'ceramic coating poynton',
      'mobile detailing poynton',
      'car detailing sk12',
      'swirl mark removal poynton',
      'exterior detailing poynton',
      'interior detailing poynton',
    ],
    canonical: 'https://www.srvdetailing.co.uk/stockport/areas/poynton/car-detailing',
  },
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Stockport', href: '/stockport' },
    { label: 'Areas', href: '/stockport/areas' },
    { label: 'Poynton', href: '/stockport/areas/poynton' },
    { label: 'Car Detailing', href: '/stockport/areas/poynton/car-detailing' },
  ],
  heroTitle: 'Car Detailing in Poynton — Paint Correction, Ceramic Coating & More',
  heroDescription:
    "Professional car detailing delivered to your driveway in Poynton, SK12. Machine polishing, ceramic coating, deep interior restoration — brought to you by a local Stockport specialist who knows what SK12 roads do to your paintwork.",
  introText:
    "Poynton's roads, its wet winters, and the country lanes around Lyme Park and Disley create specific and persistent challenges for vehicle paintwork. Salt on the A523, tree sap from hedgerows, iron fallout from daily driving — it all accumulates and degrades your clear coat over time in ways a regular car wash just can't address. SRV Detailing brings professional-grade car detailing directly to your SK12 driveway. Machine polishers, paint depth gauges, IR curing lamps, steam cleaners — all from our fully equipped mobile unit. No driving to a workshop, no waiting around. We've detailed hundreds of cars across Poynton and SK12, and we know exactly what local paintwork needs.",
  services: [
    {
      slug: 'ceramic-coating',
      name: 'Ceramic Coating',
      description: 'SiO2 paint protection bonded to your clear coat. 3–5 year packages with UV defence and hydrophobic properties that repel water, dirt and road salt.',
      icon: Shield,
      href: '/stockport/areas/poynton/car-detailing/ceramic-coating',
    },
    {
      slug: 'paint-correction',
      name: 'Paint Correction',
      description: 'Multi-stage machine polishing to remove swirl marks, scratches and oxidation. Restores genuine depth and clarity to your Poynton car\'s paintwork.',
      icon: Sparkles,
      href: '/stockport/areas/poynton/car-detailing/paint-correction',
    },
    {
      slug: 'new-car-protection',
      name: 'New Car Protection',
      description: 'Ceramic coating applied to brand new vehicles before the clear coat picks up defects — the ideal time to protect against SK12\'s roads and weather.',
      icon: Car,
      href: '/stockport/areas/poynton/car-detailing/new-car-protection',
    },
    {
      slug: 'interior-detailing',
      name: 'Interior Detailing',
      description: 'Steam cleaning, hot water extraction, leather conditioning and UV sanitisation. Full cabin restoration for Poynton drivers who use their cars properly.',
      icon: CircleDot,
      href: '/stockport/areas/poynton/car-detailing/interior-detailing',
    },
    {
      slug: 'exterior-detailing',
      name: 'Exterior Detailing',
      description: 'Full decontamination, clay bar treatment, machine polish and protective coating. Everything your Poynton car\'s exterior needs in one comprehensive service.',
      icon: Paintbrush,
      href: '/stockport/areas/poynton/car-detailing/exterior-detailing',
    },
    {
      slug: 'swirl-mark-removal',
      name: 'Swirl Mark Removal',
      description: 'Machine polishing to eliminate wash swirls, fine scratches and paint haze. Common on Poynton cars that\'ve been through automated washes on the A523.',
      icon: Sparkles,
      href: '/stockport/areas/poynton/car-detailing/swirl-mark-removal',
    },
    {
      slug: 'engine-bay-detailing',
      name: 'Engine Bay Detailing',
      description: 'Safe degreasing, low-pressure rinse and professional dressing — engine bay restored to showroom condition at your Poynton driveway.',
      icon: Wrench,
      href: '/stockport/areas/poynton/car-detailing/engine-bay-detailing',
    },
    {
      slug: 'headlight-restoration',
      name: 'Headlight Restoration',
      description: 'Yellowed, foggy lenses professionally restored to crystal clarity with a UV-sealed finish. Improves both appearance and night visibility on Poynton\'s roads.',
      icon: Lightbulb,
      href: '/stockport/areas/poynton/car-detailing/headlight-restoration',
    },
    {
      slug: 'leather-conditioning',
      name: 'Leather Conditioning',
      description: 'pH-balanced cleaning, nourishing conditioner and UV-protective treatment for leather interiors. Keeps Poynton\'s premium cars looking and feeling their best.',
      icon: Armchair,
      href: '/stockport/areas/poynton/car-detailing/leather-conditioning',
    },
  ],
  contentSections: [
    {
      type: 'text',
      heading: 'What Car Detailing Actually Does for Your Paintwork',
      bodyParagraphs: [
        "Car detailing is professional-grade restoration and protection — not cleaning. It works at a microscopic level on your car's clear coat, removing defects with machine polishing, eliminating bonded contamination with iron fallout removers and clay bar treatment, and applying long-term protective coatings like ceramic SiO2 layers that chemically bond to the paint surface and last years rather than weeks.",
        "The distinction from valeting is clear: valeting is professional cleaning. Detailing is correction and protection. Most Poynton cars benefit from regular valeting every four to six weeks, with a full detail every couple of years or whenever paint condition requires it. If you've been through an automated car wash on the A523 — even once — you almost certainly have swirl marks that professional polishing would transform.",
      ],
    },
    {
      type: 'list',
      heading: 'What Poynton Roads and Weather Do to Your Paintwork',
      items: [
        'Winter road salt on the A523 through Poynton chemically attacks unprotected clear coat and alloy wheel lacquer with every wet journey',
        'Tree sap and organic fallout from Lyme Park surroundings, Poynton\'s hedgerows and country lanes bonds to paint and etches through wet-dry cycles',
        "SK12 gets its fair share of Greater Manchester's annual rainfall — and rain with contamination on the paint surface is more damaging than a dry, dirty car",
        'Iron fallout from daily driving deposits invisibly onto paintwork, causing micro-oxidation between cleans that dulls gloss over time',
        'Automated car washes on and around the A523 — the most common wash method locally — create the swirl marks that machine polishing corrects',
        'UV radiation, even through overcast Cheshire skies, gradually degrades unprotected clear coat and causes oxidation and colour fade',
      ],
    },
    {
      type: 'process',
      heading: 'How a Full Detail Works at Your Poynton Home',
      items: [
        'Pre-inspection — assess paint depth readings, defect severity, and agree the scope and expected outcome with you',
        'Full decontamination — snow foam pre-wash, two-bucket hand wash, iron fallout treatment, and tar spot dissolution',
        'Clay bar decontamination — all bonded surface contamination removed, leaving a glass-smooth substrate for polishing',
        'Paint correction — single or multi-stage machine polishing to level defects and restore genuine clarity and depth',
        'IPA panel wipe — all polishing oils removed to reveal the true corrected surface and prepare for coating',
        'Coating application — ceramic coating, paint sealant or carnauba wax applied to protect the corrected paint for months or years',
        'Interior restoration — vacuum, steam clean, hot water extraction, leather conditioning, and glass polish as required',
        'Final inspection — quality check under panel lighting; walk-around with you before we pack up and leave',
      ],
    },
    {
      type: 'list',
      heading: 'Why Choose SRV Detailing for Car Detailing in Poynton',
      items: [
        'Locally based in Dukinfield — genuine local knowledge of SK12 roads, conditions, and the specific contamination challenges of this area',
        '22+ years hands-on experience across all vehicle types, paint systems, and coating products',
        'Paint depth gauges used on every correction job — safe, measured polishing within clear coat margins',
        'Professional panel inspection lighting — no defect hidden or missed during polishing or coating application',
        'Fully self-contained mobile unit — machine polishers, IR curing lamps, steam cleaners, all equipment at your door',
        'Fully insured with specialist motor trade and vehicle-in-care coverage',
        'We\'ve detailed hundreds of cars across Poynton and SK12 — our local customers regularly recommend us across the village',
        'Available 7 days a week — no call-out charge for SK12 postcodes',
      ],
    },
  ],
  faqs: [
    {
      question: 'How much does car detailing cost in Poynton?',
      answer:
        'Single-stage paint correction from £250. Multi-stage correction from £400. Ceramic coating from £300. Full detail packages (correction + coating + interior) from £600. Interior detailing from £150. Give us a call or drop us a message for an exact quote based on your vehicle and its condition.',
    },
    {
      question: 'How long does car detailing take in Poynton?',
      answer:
        "A comprehensive detail including paint correction and ceramic coating typically takes 6–10 hours, sometimes split across two days for larger or heavily defected vehicles. Being locally based, we can split jobs across consecutive days easily — useful if you need the car back each evening.",
    },
    {
      question: 'Do you need water or power from my Poynton property?',
      answer:
        'No. Our van carries its own fresh water supply and a generator. We need nothing from you except safe, accessible space alongside your car. A driveway or accessible off-road space works perfectly.',
    },
    {
      question: 'What is the difference between car detailing and car valeting in Poynton?',
      answer:
        "Valeting is professional cleaning and maintenance — it makes your car look great. Detailing goes further: machine polishing corrects paint defects like swirl marks, and ceramic coatings provide years of protection. Most Poynton cars benefit from regular valeting with a full detail every couple of years.",
    },
    {
      question: 'How often does a car need detailing near Poynton?',
      answer:
        "Most vehicles benefit from a full paint correction and ceramic coating every 2–4 years, maintained between times with regular professional valeting. The A523, country lane driving, and Poynton's wet winters accelerate paint degradation — so protection matters more here than in more sheltered urban areas.",
    },
  ],
  relatedLinks: [
    { label: 'Car Valeting in Poynton', href: '/stockport/areas/poynton/car-valeting', description: 'Regular maintenance cleaning between details' },
    { label: 'Ceramic Coating Poynton', href: '/stockport/areas/poynton/car-detailing/ceramic-coating', description: 'SiO2 protection — 3–5 years' },
    { label: 'Paint Correction Poynton', href: '/stockport/areas/poynton/car-detailing/paint-correction', description: 'Machine polishing to remove swirls and scratches' },
    { label: 'Car Detailing Stockport', href: '/stockport/car-detailing', description: 'Our full Stockport detailing service' },
    { label: 'Poynton Area Hub', href: '/stockport/areas/poynton', description: 'All services for Poynton and SK12' },
  ],
};
