import { Armchair } from 'lucide-react';
import type { ServicePageData } from '@/data/types';

export const leatherConditioningWilmslow: ServicePageData = {
  slug: 'leather-conditioning',
  name: 'Leather Conditioning Wilmslow',
  seo: {
    title: 'Leather Conditioning Wilmslow | Car Leather Care SK9 | SRV Detailing',
    description:
      'Professional car leather conditioning in Wilmslow. pH-balanced cleaning, nourishing conditioning and UV protection for Porsche, Bentley, Range Rover and AMG leather interiors. SK9 mobile service.',
    keywords: [
      'leather conditioning wilmslow',
      'car leather care wilmslow',
      'leather seat cleaning wilmslow sk9',
      'leather conditioning cheshire east',
      'porsche leather conditioning wilmslow',
      'range rover leather care wilmslow',
    ],
    canonical: 'https://www.srvdetailing.co.uk/wilmslow/car-detailing/leather-conditioning',
  },
  icon: Armchair,
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Wilmslow', href: '/wilmslow' },
    { label: 'Car Detailing', href: '/wilmslow/car-detailing' },
    { label: 'Leather Conditioning', href: '/wilmslow/car-detailing/leather-conditioning' },
  ],
  heroTitle: 'Leather Conditioning Wilmslow — Expert Care for Prestige Vehicle Interiors',
  heroDescription:
    'Professional leather care in Wilmslow. pH-balanced cleaning removes ingrained soiling, premium conditioner restores suppleness and natural oils, and UV-protective finisher guards against heat-induced cracking — delivered to your SK9 home.',
  imageKey: 'interior',
  contentSections: [
    {
      type: 'text',
      heading: 'Why Leather Conditioning Is Essential for Wilmslow Vehicles',
      bodyParagraphs: [
        "Premium leather interiors — Porsche's Two-Tone Cognac, Bentley's Beluga or Caramel, Range Rover's Oxford Leather, AMG's Artico or Nappa — represent a significant part of the vehicle's value and sensory appeal. Leather is a natural material that requires regular cleaning and conditioning to maintain its suppleness, colour depth, and tactile quality. Without care, it dries out, cracks along seam lines and bolster wear points, and develops a sticky or stiff surface texture.",
        "The Cheshire East climate creates specific challenges for vehicle leather. Summer temperatures cause UV-induced colour fading and drying of the top grain. Winter heating systems draw moisture from leather, causing rapid drying and micro-cracking. The combination of summer UV and winter heating cycles — compounded by the seat bolster wear from regular entry and exit — accelerates leather deterioration significantly in vehicles without regular conditioning.",
      ],
    },
    {
      type: 'process',
      heading: 'Our Leather Conditioning Process',
      items: [
        'Initial assessment — evaluate leather type (perforated, plain, Nappa, Valcona, Alcantara), colour, and current condition',
        'pH-balanced leather cleaner application — applied with appropriate brushes and microfibre cloths, removing ingrained soiling from grain channels and perforations',
        'Stubborn stain treatment — specific treatments for dye transfer (denim marks on light leather), food staining, and aged soiling',
        'Conditioner application — nourishing leather conditioner worked into all leather surfaces, restoring natural oils and suppleness',
        'Absorption period — conditioner allowed to penetrate the leather grain before buffing',
        'UV protectant finisher — applied to all exposed leather surfaces to block UV degradation and provide a light, natural-appearance sheen',
        'Final inspection and assessment — customer briefed on condition and recommended care frequency',
      ],
    },
    {
      type: 'list',
      heading: 'Leather Types We Treat in Wilmslow',
      items: [
        'Porsche standard leather, heated seat leather, and two-tone leather packages (Cognac/Black, Bordeaux Red, Graphite Blue)',
        "Bentley full leather — Caramel, Beluga, Linen, Cricket Ball, Brunel — including hand-stitched and diamond-quilted surfaces",
        'Range Rover and Range Rover Sport Oxford Leather — light and dark colourways including Premium Black, Ivory, and Espresso',
        "Mercedes-AMG Nappa leather, Artico semi-leather, and Exclusive Nappa with contrasting stitching",
        "BMW Merino leather and Vernasca leather (M Sport and standard)",
        "Audi Valcona leather and Fine Nappa (RS and S-line variants)",
        "Any luxury or premium leather interior from all UK-sold marques",
      ],
    },
    {
      type: 'list',
      heading: 'How Often Should Leather Be Conditioned?',
      items: [
        'Daily-use vehicles in Cheshire East: every 3–4 months — seasonal cycles of summer UV and winter heating require regular replenishment of natural oils',
        'Garaged or low-mileage prestige vehicles: every 6 months minimum — even low-use leather dries without conditioning',
        'Vehicles with light-coloured leather (Ivory, Ivory White, Linen): every 2–3 months — light leather shows soiling more quickly and is more prone to dye transfer from dark clothing',
        'Following any interior detailing or hot water extraction: immediate conditioning — cleaning processes remove some natural oils from leather',
      ],
    },
  ],
  faqs: [
    {
      question: 'Is leather conditioning included in a full valet?',
      answer:
        "A full valet includes leather wipe-down and basic conditioning as standard. Our dedicated leather conditioning service is a more thorough process using specialist pH-balanced cleaners, premium conditioners, and UV protectant finishers — taking more time and achieving a deeper result. It can be booked as a standalone service or added to any valet.",
    },
    {
      question: 'Can you restore cracked leather in a Porsche or Range Rover?',
      answer:
        "Surface drying and early cracking can often be improved significantly with our cleaning and conditioning treatment. Deep cracking, colour loss, or structural breakdown in heavily aged leather requires specialist leather repair work beyond detailing. We assess on arrival and advise honestly on expected results.",
    },
    {
      question: 'How much does leather conditioning cost in Wilmslow?',
      answer:
        "Standalone leather conditioning starts from £80 for a standard two-seat vehicle and from £100 for a full four/five-seat interior. Larger prestige vehicles with complex leather specifications from £120. We provide exact quotes on request.",
    },
  ],
  relatedLinks: [
    { label: 'Interior Detailing Wilmslow', href: '/wilmslow/car-detailing/interior-detailing', description: 'Complete interior restoration including leather' },
    { label: 'Upholstery Cleaning Wilmslow', href: '/wilmslow/car-valeting/upholstery-cleaning', description: 'Hot water extraction for fabric seats' },
    { label: 'Full Valet Wilmslow', href: '/wilmslow/car-valeting/full-valet', description: 'Complete interior and exterior valet' },
    { label: 'Car Detailing Wilmslow', href: '/wilmslow/car-detailing', description: 'All detailing services across SK9' },
    { label: 'Book Now', href: '/booking' },
  ],
  schemaPrice: '80',
};
