import { Armchair } from 'lucide-react';
import type { ServicePageData } from '@/data/types';

export const upholsteryCleaningWilmslow: ServicePageData = {
  slug: 'upholstery-cleaning',
  name: 'Upholstery Cleaning Wilmslow',
  seo: {
    title: 'Upholstery Cleaning Wilmslow | Car Seat & Carpet Clean SK9 | SRV Detailing',
    description:
      'Professional car upholstery cleaning in Wilmslow. Hot water extraction removes embedded stains from fabric seats and carpets. SK9 mobile service. From £80.',
    keywords: [
      'upholstery cleaning wilmslow',
      'car seat cleaning wilmslow',
      'carpet cleaning car wilmslow sk9',
      'hot water extraction car wilmslow',
      'fabric seat cleaning wilmslow',
      'car upholstery cleaning cheshire east',
    ],
    canonical: 'https://www.srvdetailing.co.uk/wilmslow/car-valeting/upholstery-cleaning',
  },
  icon: Armchair,
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Wilmslow', href: '/wilmslow' },
    { label: 'Car Valeting', href: '/wilmslow/car-valeting' },
    { label: 'Upholstery Cleaning', href: '/wilmslow/car-valeting/upholstery-cleaning' },
  ],
  heroTitle: 'Upholstery Cleaning Wilmslow — Hot Water Extraction for SK9 Vehicle Interiors',
  heroDescription:
    'Deep fabric cleaning for car seats, carpets, and boot liners using professional hot water extraction. Removes embedded stains, bacteria, and soiling that vacuuming and surface cleaning cannot address. Mobile service across Wilmslow and SK9.',
  imageKey: 'interior',
  contentSections: [
    {
      type: 'text',
      heading: 'What Is Hot Water Extraction and Why Does It Work?',
      bodyParagraphs: [
        "Hot water extraction — often called steam extraction or wet vacuuming — is the most effective method for deep cleaning fabric car upholstery. The process injects a controlled mixture of hot water and cleaning solution directly into the fabric pile under pressure, then immediately extracts it with powerful suction. This injection-extraction cycle lifts soil from deep within the fabric fibres rather than just the surface, pulling it out of the weave rather than redistributing it.",
        "Standard vacuuming removes loose surface material. Steam cleaning removes surface contamination from hard materials. Neither penetrates deep fabric to extract embedded soil, bacteria, and staining. Hot water extraction specifically addresses fabric upholstery and carpet — the services that are most difficult to restore without specialist equipment. For family vehicles in Wilmslow with children's car seats, food spills, and Cheshire mud tracked in from country walks, hot water extraction is the service that makes a meaningful difference.",
      ],
    },
    {
      type: 'list',
      heading: 'What Upholstery Cleaning Treats',
      items: [
        'Old food and drink stains — coffee, fizzy drinks, food residue from school runs and family journeys',
        'Mud and dirt staining from country walks at Lindow Common, Styal Country Park, and Tatton Park',
        'Blood stains — common on fabric from minor accidents; best treated as soon as possible',
        'Mould and mildew in carpet backing from damp brought in during Cheshire winter',
        'Embedded bacterial contamination and allergens in regularly used family vehicles',
        'General soiling and greying of fabric seats from years of use and contact',
        'Pet contamination in boot liners and rear carpets',
      ],
    },
    {
      type: 'list',
      heading: 'Upholstery Cleaning Process',
      items: [
        'Pre-treatment — stain pre-spray applied to heavily affected areas; allowed to dwell',
        'Hot water injection — cleaning solution injected deep into fabric fibres at controlled temperature and pressure',
        'Immediate extraction — powerful suction removes the solution with dissolved soil from the fabric',
        'Multiple passes — repeated across all affected areas until extraction runs clear',
        'Rinse pass — clean water passed through to remove all cleaning solution residue',
        'Speed drying — air mover used to reduce drying time; typically 1–3 hours to touch-dry',
      ],
    },
  ],
  faqs: [
    {
      question: 'How long does upholstery cleaning take in Wilmslow?',
      answer:
        "The extraction process itself takes 1–2 hours for a standard vehicle. Drying takes 1–3 hours at normal temperature with ventilation. We recommend leaving windows slightly open and parking in a covered, ventilated area if possible.",
    },
    {
      question: 'How much does upholstery cleaning cost in Wilmslow?',
      answer:
        "Upholstery cleaning starts from £80 for a standard vehicle (front and rear seats, carpets). Boot liner from £40 as an add-on. Full vehicle upholstery and carpet extraction from £100–£140 for large SUVs and prestige vehicles.",
    },
    {
      question: 'Will hot water extraction leave the interior damp?',
      answer:
        "Professional hot water extraction equipment extracts the vast majority of the injected solution immediately. Fabric surfaces will feel slightly damp to the touch initially but are typically dry within 1–3 hours in normal conditions. We use air movers to accelerate drying where needed. We never leave interiors wet.",
    },
  ],
  relatedLinks: [
    { label: 'Interior Detailing Wilmslow', href: '/wilmslow/car-detailing/interior-detailing', description: 'Full interior restoration including upholstery' },
    { label: 'Pet Hair Removal Wilmslow', href: '/wilmslow/car-valeting/pet-hair-removal', description: 'Remove embedded pet hair before extraction' },
    { label: 'Odour Removal Wilmslow', href: '/wilmslow/car-valeting/odour-removal', description: 'Ozone treatment for persistent smells' },
    { label: 'Full Valet Wilmslow', href: '/wilmslow/car-valeting/full-valet', description: 'Complete interior and exterior valet' },
    { label: 'Car Valeting Wilmslow', href: '/wilmslow/car-valeting', description: 'All valeting services across SK9' },
    { label: 'Book Now', href: '/booking' },
  ],
  schemaPrice: '80',
};
