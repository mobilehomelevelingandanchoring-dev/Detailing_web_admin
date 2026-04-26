import { Shield, Sparkles, Paintbrush, Car, Wrench, CircleDot, Armchair, Lightbulb } from 'lucide-react';
import type { PillarPageData } from '@/data/types';

export const wilmslowCarDetailingPillar: PillarPageData = {
  slug: 'car-detailing',
  name: 'Car Detailing in Wilmslow',
  seo: {
    title: 'Car Detailing Wilmslow | Paint Correction & Ceramic Coating SK9 | SRV Detailing',
    description:
      'Professional car detailing in Wilmslow. Paint correction, ceramic coating, clay bar decontamination and interior restoration. Mobile service across SK9. Expert care for Porsche, Range Rover, AMG and prestige vehicles.',
    keywords: [
      'car detailing wilmslow',
      'paint correction wilmslow',
      'ceramic coating wilmslow',
      'mobile detailing wilmslow',
      'swirl mark removal wilmslow',
      'exterior detailing wilmslow sk9',
      'interior detailing wilmslow',
      'car detailing cheshire east',
      'prestige car detailing wilmslow',
    ],
    canonical: 'https://www.srvdetailing.co.uk/wilmslow/car-detailing',
  },
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Wilmslow', href: '/wilmslow' },
    { label: 'Car Detailing', href: '/wilmslow/car-detailing' },
  ],
  heroTitle: 'Car Detailing Wilmslow — Paint Correction & Ceramic Coating for SK9',
  heroDescription:
    "Wilmslow's mobile car detailing specialist. Precision paint correction to eliminate swirl marks and oxidation, professional ceramic SiO2 coatings for lasting clear coat protection, and deep interior restoration — all delivered to your Cheshire East driveway. Specialist experience with Porsche, Range Rover, AMG, Bentley, and every prestige marque.",
  introText:
    "The vehicles in Wilmslow's driveways and private lanes deserve better than an automated tunnel wash. SRV Detailing brings studio-quality car detailing to your SK9 address — machine polishers, paint depth gauges, IR curing lamps, and professional-grade correction compounds, all from a fully equipped mobile unit. Whether your Porsche Cayenne needs a multi-stage paint correction and ceramic coat, your Range Rover Autobiography requires a deep interior restoration after a Cheshire countryside winter, or your new AMG needs protecting from its first day, we deliver a precise, expert result at your home or workplace. Covering all SK9 postcodes and adjacent Cheshire East areas, 7 days a week.",
  services: [
    {
      slug: 'ceramic-coating',
      name: 'Ceramic Coating',
      description: 'SiO2 paint protection bonded to your clear coat. 2 to 7+ year packages with UV defence and chemical resistance.',
      icon: Shield,
      href: '/wilmslow/car-detailing/ceramic-coating',
    },
    {
      slug: 'paint-correction',
      name: 'Paint Correction',
      description: 'Multi-stage machine polishing to remove swirl marks, scratches and oxidation from your clear coat.',
      icon: Sparkles,
      href: '/wilmslow/car-detailing/paint-correction',
    },
    {
      slug: 'new-car-protection',
      name: 'New Car Protection',
      description: 'Ceramic coating applied to new vehicles before the clear coat picks up defects — the ideal time to protect.',
      icon: Car,
      href: '/wilmslow/car-detailing/new-car-protection',
    },
    {
      slug: 'interior-detailing',
      name: 'Interior Detailing',
      description: 'Steam cleaning, leather conditioning, hot water extraction and UV sanitisation — full cabin restoration.',
      icon: CircleDot,
      href: '/wilmslow/car-detailing/interior-detailing',
    },
    {
      slug: 'exterior-detailing',
      name: 'Exterior Detailing',
      description: 'Full decontamination, clay bar, machine polish and protective coating for flawless paintwork.',
      icon: Paintbrush,
      href: '/wilmslow/car-detailing/exterior-detailing',
    },
    {
      slug: 'swirl-mark-removal',
      name: 'Swirl Mark Removal',
      description: 'Machine polishing to eliminate wash swirls, fine scratches and paint haze from the clear coat.',
      icon: Sparkles,
      href: '/wilmslow/car-detailing/swirl-mark-removal',
    },
    {
      slug: 'engine-bay-detailing',
      name: 'Engine Bay Detailing',
      description: 'Safe degreasing, low-pressure rinse and dressing — engine bay restored to showroom condition.',
      icon: Wrench,
      href: '/wilmslow/car-detailing/engine-bay-detailing',
    },
    {
      slug: 'leather-conditioning',
      name: 'Leather Conditioning',
      description: 'pH-balanced cleaning, nourishing conditioner and UV-protective protectant for premium leather interiors.',
      icon: Armchair,
      href: '/wilmslow/car-detailing/leather-conditioning',
    },
    {
      slug: 'headlight-restoration',
      name: 'Headlight Restoration',
      description: 'Wet-sanding and machine polishing to restore clouded or yellowed headlight lenses to optical clarity.',
      icon: Lightbulb,
      href: '/wilmslow/car-detailing/headlight-restoration',
    },
  ],
  contentSections: [
    {
      type: 'text',
      heading: 'Car Detailing in Wilmslow — What It Means for Prestige Vehicles',
      bodyParagraphs: [
        "Car detailing is a professional-grade restoration and protection process fundamentally different from cleaning. It addresses the condition of your vehicle's paintwork at a microscopic level — removing swirl marks and surface scratches from the clear coat using machine polishing, eliminating bonded contamination with iron fallout removers and clay bar decontamination, and applying long-term protective coatings such as ceramic SiO2 layers that bond chemically to the paint surface.",
        "In Wilmslow and the SK9 postcode, the vehicles that most benefit from professional detailing are typically those worth protecting properly. A Porsche 911's GT Silver or Miami Blue, a Range Rover Autobiography's Carpathian Grey, a Bentley Continental GT's deep colour — these finishes are designed to be seen and appreciated. Letting them degrade under Cheshire road salt, A34 iron fallout, and autumn tree sap is a costly mistake that detailing corrects and future coatings prevent.",
      ],
    },
    {
      type: 'list',
      heading: 'Why Wilmslow Vehicles Require Professional Detailing',
      items: [
        'A34 and A538 winter road salt treatment attacks unprotected clear coat and alloy lacquer from October through March — the route to Alderley Edge and Knutsford deposits salt on every run',
        'Manchester Airport de-icing chemical residues (glycol, potassium acetate) deposit on vehicles in Styal, Handforth, and northern Wilmslow during winter and spring operations',
        'Cheshire countryside lanes around Lindow Common and Styal carry agricultural run-off, mud, and organic contamination that bonds to lower body panels',
        'Autumn resin and seed sap from the canopy trees lining The Carrs, Wilmslow Park Road, and Alderley Road etch into unprotected clear coat through wet-dry cycles',
        'Prestige alloy wheel finishes — diamond-cut, satin black, gloss graphite — require careful iron decontamination to prevent pitting and lacquer degradation',
        'UV exposure through Cheshire East skies progressively degrades unprotected factory clear coat, causing oxidation and loss of depth on dark and metallic finishes',
      ],
    },
    {
      type: 'process',
      heading: 'Our Full Detail Process — Studio Results on Your Driveway',
      items: [
        'Pre-inspection — paint depth readings across all panels, defect severity mapping, and interior condition assessment',
        'Full decontamination — snow foam pre-wash, two-bucket hand wash, iron fallout treatment, tar spot dissolution',
        'Clay bar decontamination — bonded surface contamination removed to achieve a glass-smooth substrate',
        'Paint correction — single or multi-stage machine polishing, appropriate compounds and pads for each panel',
        'IPA panel wipe — all polishing oils removed to reveal the true corrected surface under panel lighting',
        'Coating application — ceramic coating, paint sealant, or carnauba wax as specified',
        'Interior restoration — vacuum, steam clean, hot water extraction, leather conditioning as required',
        'Final inspection under panel lights — quality check and customer walk-around before departure',
      ],
    },
    {
      type: 'list',
      heading: 'Why Choose SRV Detailing for Car Detailing in Wilmslow',
      items: [
        'Specialist experience with prestige marques — Porsche, Bentley, AMG, Ferrari, Range Rover, McLaren',
        '22+ years hands-on experience across all vehicle types, paint systems, and clear coat characteristics',
        'Paint depth gauges used on every correction job — measured, safe work within manufacturer clear coat margins',
        'Professional panel inspection lighting — no defect concealed during correction or coating application',
        'Fully self-contained mobile unit — all equipment, compounds, and products brought to your Wilmslow driveway',
        'Fully insured with specialist motor trade and vehicle-in-care coverage',
        'Discreet, professional service — we work quietly without disruption to your home or workplace',
      ],
    },
  ],
  faqs: [
    {
      question: 'How long does car detailing take in Wilmslow?',
      answer:
        "A comprehensive detail — paint correction plus ceramic coating plus interior restoration — typically takes 6–10 hours and may span two days for larger or heavily defected vehicles. Paint correction alone is 4–8 hours. We schedule around your requirements and can split larger jobs across consecutive visits.",
    },
    {
      question: 'Do you detail prestige and sports cars in Wilmslow?',
      answer:
        "Yes — this is our primary work in the SK9 area. We have extensive experience with Porsche, Mercedes-AMG, Range Rover, Bentley, Ferrari, Aston Martin, and McLaren. We use paint depth gauges, select products appropriate to each manufacturer's clear coat system, and take the time these vehicles require. We never rush high-value detailing work.",
    },
    {
      question: 'How much does car detailing cost in Wilmslow?',
      answer:
        'Single-stage paint correction from £250. Multi-stage correction from £400. Ceramic coating from £300. Full detail packages (correction + ceramic coating + interior) from £600. Prices vary by vehicle size and paint condition. Contact us for an accurate quote.',
    },
    {
      question: 'What is the difference between car detailing and car valeting?',
      answer:
        "Valeting is professional cleaning and maintenance — it makes your car look excellent and removes contamination. Detailing goes further by correcting paint defects using machine polishing and applying longer-lasting protection such as ceramic coatings. Detailing is restorative and protective; valeting is maintenance cleaning. Most vehicles benefit from regular valeting with periodic detailing.",
    },
    {
      question: 'Do you come to my home in Wilmslow?',
      answer:
        "Yes. We cover all SK9 postcodes and nearby Cheshire East areas from our base. Our unit is fully self-contained — no water or power needed from your property. We need only safe access to your vehicle and a parking space alongside it.",
    },
  ],
  relatedLinks: [
    { label: 'Car Valeting Wilmslow', href: '/wilmslow/car-valeting', description: 'Regular maintenance cleaning between details' },
    { label: 'Ceramic Coating Wilmslow', href: '/wilmslow/car-detailing/ceramic-coating', description: 'SiO2 paint protection — 2 to 7+ years' },
    { label: 'Paint Correction Wilmslow', href: '/wilmslow/car-detailing/paint-correction', description: 'Machine polishing to remove swirls and scratches' },
    { label: 'Wilmslow Hub', href: '/wilmslow', description: 'All services across Wilmslow and SK9' },
    { label: 'Detailing Prices Wilmslow', href: '/wilmslow/car-detailing/prices', description: 'Full pricing guide' },
    { label: 'What Is Car Detailing?', href: '/guides/what-is-car-detailing', description: 'Complete guide to detailing vs valeting' },
  ],
};
