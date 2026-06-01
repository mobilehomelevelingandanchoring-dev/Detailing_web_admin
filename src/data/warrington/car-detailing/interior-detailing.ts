import { CircleDot } from 'lucide-react';
import type { ServicePageData } from '@/data/types';

export const interiorDetailingWarrington: ServicePageData = {
  slug: 'interior-detailing',
  name: 'Interior Detailing Warrington',
  seo: {
    title: 'Interior Detailing Warrington | Deep Interior Clean | SRV Detailing',
    description:
      'Professional interior car detailing in Warrington. Steam cleaning, leather conditioning, UV sanitisation and odour removal. 22+ years experience. Mobile service across WA1–WA5.',
    keywords: [
      'interior detailing warrington',
      'car interior clean warrington',
      'steam cleaning warrington',
      'leather conditioning warrington',
      'interior car valeting warrington',
    ],
    canonical: 'https://www.srvdetailing.co.uk/warrington/car-detailing/interior-detailing',
  },
  icon: CircleDot,
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Warrington', href: '/warrington' },
    { label: 'Car Detailing', href: '/warrington/car-detailing' },
    { label: 'Interior Detailing', href: '/warrington/car-detailing/interior-detailing' },
  ],
  heroTitle: 'Interior Detailing in Warrington',
  heroDescription:
    'Deep interior restoration that goes far beyond a vacuum and wipe. Steam cleaning, leather conditioning, UV sanitisation and complete surface restoration — delivered to your door anywhere across Warrington.',
  contentSections: [
    {
      type: 'text',
      heading: 'What Is Interior Detailing?',
      body: "Interior detailing is a professional-grade deep restoration of every surface inside your vehicle. Unlike a standard interior valet that cleans surfaces, interior detailing restores them — conditioning leather back to suppleness, extracting deeply embedded dirt from carpets and upholstery, steam-cleaning fabric surfaces to sanitise and deodorise, and treating every plastic, vinyl and trim surface with appropriate specialist products. The result is an interior that looks and smells genuinely new.",
    },
    {
      type: 'list',
      heading: 'What Our Interior Detailing Covers',
      items: [
        'Hot water extraction of carpets and fabric upholstery — removes deeply embedded grime and stains',
        'Steam cleaning of all hard surfaces — dashboard, door cards, centre console, vents and trim',
        'Leather cleaning and conditioning — restores suppleness and prevents cracking',
        'Headlining cleaning — removes staining without saturating the material',
        'Glass polishing — interior windows cleaned and polished streak-free',
        'Door shuts and jambs detailed and dressed',
        'Boot liner extraction, cleaning and treatment',
        'UV protection applied to all plastics to prevent fading and cracking',
        'Odour elimination — not masked, but genuinely removed at the source',
      ],
    },
    {
      type: 'text',
      heading: 'Why Warrington Vehicles Benefit from Interior Detailing',
      body: "Warrington commuters spend significant time in their vehicles — often travelling the M6 and M62 corridors daily. That regular use means interiors accumulate dust, odours, spillages and wear faster than casual vehicles. The Mersey Valley's damp climate also promotes musty smells that penetrate fabric seats and carpets. Interior detailing addresses all of this — restoring the cabin to a fresh, clean condition that regular valeting simply cannot achieve.",
    },
    {
      type: 'process',
      heading: 'Our Interior Detailing Process',
      items: [
        'Full declutter and preparation — removal of floor mats, boot liners and personal items',
        'Dry vacuuming of all surfaces to remove loose debris before introducing any moisture',
        'Hot water extraction of carpets, seat upholstery and boot carpeting',
        'Steam cleaning of all hard surfaces, air vents, door pockets and intricate trim areas',
        'Leather treatment — specialist cleaner applied, conditioner worked in by hand',
        'All glass surfaces polished inside with dedicated glass compound',
        'Plastics and trim dressed with appropriate UV-protective products',
        'Ozone treatment or enzymatic odour eliminator applied where required',
        'Final inspection and fragrance application',
      ],
    },
  ],
  faqs: [
    {
      question: 'How long does interior detailing take?',
      answer:
        'A full interior detail takes 4 to 6 hours depending on vehicle size, condition and the depth of cleaning required. Heavily soiled vehicles, or those with significant staining, may require additional time.',
    },
    {
      question: 'Can you remove pet hair and odours?',
      answer:
        'Yes. We use specialist compressed air tools and extraction equipment to remove pet hair, and enzymatic odour eliminators to neutralise pet odours at the source rather than simply masking them.',
    },
    {
      question: 'Will steam cleaning damage my interior?',
      answer:
        'No. We use steam at appropriate temperatures and pressures for each surface type. Steam is actually the safest deep-cleaning method for fabric interiors as it sanitises without saturating.',
    },
    {
      question: 'Can you detail my car interior in Warrington at my home?',
      answer:
        'Yes. Our mobile unit is fully self-contained with hot water extractors, steam machines and all specialist products. We can perform a complete interior detail on your driveway or at your workplace anywhere across Warrington.',
    },
  ],
  relatedLinks: [
    { label: 'Exterior Detailing Warrington', href: '/warrington/car-detailing/exterior-detailing', description: 'Complete the exterior too' },
    { label: 'Ceramic Coating Warrington', href: '/warrington/car-detailing/ceramic-coating', description: 'Long-term paint protection' },
    { label: 'Car Detailing Warrington', href: '/warrington/car-detailing', description: 'All detailing services' },
    { label: 'Car Valeting Warrington', href: '/warrington/car-valeting', description: 'Regular maintenance cleaning' },
  ],
  schemaPrice: '150',
  imageKey: 'interior',
};
