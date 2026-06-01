import { Car, Sparkles, Droplets } from 'lucide-react';
import type { LocationHubData } from '@/data/types';

export const wilmslowHub: LocationHubData = {
  slug: 'wilmslow',
  name: 'Wilmslow',
  seo: {
    title: 'Car Detailing & Valeting Wilmslow | Mobile Service | SRV Detailing',
    description:
      'Professional mobile car detailing and valeting in Wilmslow. Ceramic coating, paint correction, full valets and interior restoration. SK9 postcodes covered. 22+ years experience.',
    keywords: [
      'car detailing wilmslow',
      'car valeting wilmslow',
      'mobile car detailing wilmslow',
      'ceramic coating wilmslow',
      'paint correction wilmslow',
      'car cleaning wilmslow',
      'mobile valeting wilmslow sk9',
      'car detailing cheshire east',
    ],
    canonical: 'https://www.srvdetailing.co.uk/wilmslow',
  },
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Wilmslow', href: '/wilmslow' },
  ],
  heroTitle: 'Professional Car Detailing & Valeting in Wilmslow',
  heroDescription:
    "SRV Detailing serves Wilmslow and the SK9 postcode with mobile car care matched to the standard of the vehicles here. Ceramic coatings, paint correction, full valets, and interior restoration — 22+ years of professional expertise delivered to your driveway in Cheshire East.",
  heroImages: [
    {
      src: '/images/gallery/srv-detailing-ceramic-coating-manchester-03.webp.webp',
      alt: 'SRV Detailing professional ceramic coating for prestige vehicles — mobile car care service covering Wilmslow, Alderley Edge and SK9',
    },
    {
      src: '/images/gallery/srv-detailing-ceramic-coating-manchester-05.webp.webp',
      alt: 'SRV Detailing ceramic coating showing exceptional water-beading — accredited mobile detailing service in Wilmslow and Cheshire East',
    },
    {
      src: '/images/gallery/mobile-van.webp.webp',
      alt: 'SRV Detailing fully equipped mobile car care van serving Wilmslow, Alderley Edge, Prestbury and all SK9 postcodes',
    },
  ],
  introText:
    "Wilmslow's roads carry some of the most prestigious vehicles in the North West — Porsche Cayennes and Taycans running along the A34 through Alderley Edge, Range Rover Autobiographies on the lanes around Lindow Common, and AMG estates on the school-run through Styal. These vehicles deserve professional care from a technician who understands paint systems, not an automated brush wash. SRV Detailing is a fully mobile, self-contained car care specialist covering all SK9 postcodes — Wilmslow town, Dean Row, Styal, Lacey Green, and Prestbury Road. We bring machine polishers, ceramic coating products, steam cleaners, and hot water extraction systems directly to your home or workplace. No queues, no brushes, no swirl marks.",
  pillars: [
    {
      name: 'Car Detailing',
      description:
        'Restoration-grade paint correction, ceramic SiO2 coating, swirl mark removal, and deep interior detailing for Wilmslow and SK9.',
      href: '/wilmslow/car-detailing',
      icon: Sparkles,
    },
    {
      name: 'Car Valeting',
      description:
        'Professional maintenance cleaning — full valets, mini valets, interior and exterior packages delivered to your Wilmslow driveway.',
      href: '/wilmslow/car-valeting',
      icon: Car,
    },
    {
      name: 'Car Wash',
      description:
        'Mobile hand car wash using the safe two-bucket method. No automated brushes — no swirl marks. We come to your Wilmslow home.',
      href: '/wilmslow/car-wash',
      icon: Droplets,
    },
  ],
  areas: [
    { name: 'Alderley Edge', slug: 'alderley-edge', href: '/wilmslow/areas/alderley-edge' },
    { name: 'Prestbury', slug: 'prestbury', href: '/wilmslow/areas/prestbury' },
    { name: 'Handforth', slug: 'handforth', href: '/wilmslow/areas/handforth' },
    { name: 'Knutsford', slug: 'knutsford', href: '/wilmslow/areas/knutsford' },
    { name: 'Cheadle Hulme', slug: 'cheadle-hulme', href: '/wilmslow/areas/cheadle-hulme' },
    { name: 'Macclesfield', slug: 'macclesfield', href: '/wilmslow/areas/macclesfield' },
  ],
  contentSections: [
    {
      type: 'text',
      heading: 'Your Local Wilmslow Car Care Specialist',
      bodyParagraphs: [
        "SRV Detailing covers all SK9 postcodes — Wilmslow, Alderley Edge, Handforth, Dean Row, Styal, and Lacey Green — as well as adjacent Cheshire East areas including Prestbury (SK10), Knutsford (WA16), and Macclesfield (SK10/SK11). Our mobile unit is fully self-contained, carrying its own water supply, power generator, professional equipment, and all chemicals. You need to provide nothing except access to your vehicle.",
        "Wilmslow presents distinct care requirements compared to urban areas. The A34 through Alderley Edge is the principal source of winter road salt, depositing sodium chloride across lower panels and wheel arches from October through March. The Cheshire countryside lanes around Styal and Lindow Common carry agricultural run-off and organic debris in autumn. Aircraft operations from Manchester Airport — just 3 miles north — introduce de-icing chemical residues during winter and spring that settle on vehicles parked in northern Wilmslow and Styal. These are all factors our professional decontamination process addresses systematically.",
      ],
    },
    {
      type: 'list',
      heading: 'Why Choose SRV Detailing in Wilmslow',
      items: [
        'Specialist experience with prestige vehicles — Porsche, Bentley, AMG, Range Rover, Ferrari, McLaren — matching care to paint system and clear coat characteristics',
        '22+ years professional experience across all vehicle types, paint systems, and interior materials',
        'Fully self-contained mobile unit — own water supply, generator, and all professional equipment',
        'Safe hand-wash techniques and paint depth gauges — no rushed work, no shortcuts with high-value vehicles',
        'Fully insured with specialist motor trade and vehicle-in-care coverage',
        'Available 7 days a week including evenings by arrangement',
        'Discrete, professional service — we work quietly on your driveway without disruption',
      ],
    },
    {
      type: 'list',
      heading: 'Why Wilmslow Vehicles Need Regular Professional Care',
      items: [
        'A34 and A538 winter road salt treatment attacks alloy lacquer, clear coat, and brake components on every journey from October to March',
        'Manchester Airport de-icing operations deposit glycol and potassium acetate residues on vehicles in northern Wilmslow, Styal, and Handforth',
        'Cheshire countryside lanes around Lindow Common and Styal carry road salt, agricultural run-off, and heavy organic contamination in autumn and winter',
        'Tree resin and seed sap from the canopy coverage around The Carrs, Lindow Common, and residential Wilmslow etch into unprotected clear coat',
        'High-value vehicles with specialist paint finishes — satin, matte, OEM plus — require pH-neutral, non-abrasive products and techniques that automated washes cannot deliver',
        'Prestige alloy wheels with complex spoke profiles and low-profile tyres demand careful, hand-brushed decontamination to avoid damage',
      ],
    },
  ],
  faqs: [
    {
      question: 'Do you cover Wilmslow town centre and surrounding SK9 villages?',
      answer:
        'Yes. We cover all of Wilmslow including the town centre, Dean Row, Styal, Lacey Green, Handforth, and all SK9 addresses. We also extend to adjacent Cheshire East areas including Alderley Edge, Prestbury, Knutsford, and Macclesfield.',
    },
    {
      question: 'Can you work on prestige and luxury vehicles?',
      answer:
        "Yes — this is central to what we do in Wilmslow. We have extensive experience with Porsche, Bentley, Mercedes-AMG, Range Rover, Ferrari, Aston Martin, and McLaren vehicles. We use paint depth gauges on every correction job, select products appropriate to each manufacturer's clear coat system, and take the additional time these vehicles require. We never rush high-value work.",
    },
    {
      question: 'How do I book a car detailing or valeting service in Wilmslow?',
      answer:
        "Call us on 07375 759686 or use our online booking form. We'll confirm the service, time, and your Wilmslow address, and come fully equipped to your home or workplace. We often have short-notice availability and aim to accommodate same-week bookings.",
    },
    {
      question: 'Do you need water or electricity at my property?',
      answer:
        'No. Our mobile unit is fully self-contained with its own fresh water supply and power generator. We need only safe access to your vehicle and a parking space alongside it — nothing from your property.',
    },
    {
      question: 'Do you cover Alderley Edge, Prestbury, and Knutsford from Wilmslow?',
      answer:
        'Yes. Alderley Edge, Prestbury, Handforth, Knutsford, Cheadle Hulme, and Macclesfield are all within our regular service area. All are bookable online with no call-out surcharge.',
    },
  ],
};
