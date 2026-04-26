import { Scissors } from 'lucide-react';
import type { ServicePageData } from '@/data/types';

export const petHairRemovalWilmslow: ServicePageData = {
  slug: 'pet-hair-removal',
  name: 'Pet Hair Removal Wilmslow',
  seo: {
    title: 'Pet Hair Removal Wilmslow | Dog Hair Car Clean SK9 | SRV Detailing',
    description:
      'Professional pet hair removal from car interiors in Wilmslow. Specialist extraction of embedded dog and cat hair from seats, carpets, and crevices. SK9 mobile service.',
    keywords: [
      'pet hair removal wilmslow',
      'dog hair removal car wilmslow',
      'pet hair car clean wilmslow sk9',
      'car pet hair removal cheshire east',
      'dog hair seat removal wilmslow',
    ],
    canonical: 'https://www.srvdetailing.co.uk/wilmslow/car-valeting/pet-hair-removal',
  },
  icon: Scissors,
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Wilmslow', href: '/wilmslow' },
    { label: 'Car Valeting', href: '/wilmslow/car-valeting' },
    { label: 'Pet Hair Removal', href: '/wilmslow/car-valeting/pet-hair-removal' },
  ],
  heroTitle: 'Pet Hair Removal Wilmslow — Specialist Dog Hair Extraction for SK9 Vehicles',
  heroDescription:
    'Cheshire is dog country — and dog hair gets everywhere. Our specialist pet hair removal service uses professional extraction techniques to remove embedded dog and cat hair from fabric seats, carpets, boot liners, and seat crevices across SK9 and Cheshire East.',
  imageKey: 'interior',
  contentSections: [
    {
      type: 'text',
      heading: 'Why Pet Hair Removal Requires Specialist Techniques',
      bodyParagraphs: [
        "Pet hair — particularly the dense undercoat of Labrador Retrievers, Springer Spaniels, and Cocker Spaniels common in Wilmslow and Cheshire — becomes deeply embedded in fabric seat weaves, carpet pile, and the foam backing beneath. A standard vacuum cleaner, even a powerful one, removes surface hair but leaves the embedded fibres undisturbed. Professional pet hair removal combines specialist rubber extraction tools, dedicated pet hair removal mitts, and high-powered vacuum techniques to extract hair from the fabric substrate rather than just the surface.",
        "Wilmslow has a particularly active outdoor lifestyle — dog walkers using Lindow Common, The Carrs, and Styal Woods, and riders using the Cheshire Riding Centre and surrounding bridleways transport dogs in estates, SUVs, and hatchbacks that need regular pet hair treatment. A Range Rover Sport or Porsche Cayenne used for country walks and dog transport needs a different level of interior care than a commuter car.",
      ],
    },
    {
      type: 'list',
      heading: 'Our Pet Hair Removal Process',
      items: [
        'Pre-assessment — identify affected areas and hair density across all surfaces',
        'Rubber removal tool — specialist rubber pet hair extraction tools used to agitate and loosen embedded hair from fabric',
        'Compressed air — blow-out of crevices, seat rails, and seatbelt guides where hair accumulates',
        'High-powered vacuum with specialist attachments — extracts loosened hair from all surfaces',
        'Seat seam and crevice treatment — detailed attention to seat folds, headrest slots, and door pocket openings',
        'Boot liner treatment — pet hair from boot carpets and boot liner panels removed thoroughly',
        'Interior deodorisation — pet odour neutraliser applied to freshen the cabin after hair removal',
      ],
    },
    {
      type: 'list',
      heading: 'Vehicles and Situations We Regularly Treat in Wilmslow',
      items: [
        'Range Rover and Land Rover Discovery estates used for dog walks and country pursuits around Lindow Common and Styal',
        'BMW X5 and Audi Q7 family SUVs used for school runs and dog walks in Cheshire East',
        'All vehicle types after house moves involving pets, or between owners in private sale preparation',
        'Seasonal heavy accumulation after autumn and winter — Cheshire dogs shed more heavily in spring',
      ],
    },
  ],
  faqs: [
    {
      question: 'How long does pet hair removal take in Wilmslow?',
      answer:
        "1–3 hours depending on the density of hair and the size of the vehicle. A lightly affected hatchback takes about an hour. A heavily affected Range Rover or Land Rover Discovery with a full boot of dog hair can take 2–3 hours. We advise honestly when booking.",
    },
    {
      question: 'How much does pet hair removal cost in Wilmslow?',
      answer:
        'Pet hair removal starts from £60 for a standard vehicle with light to moderate hair accumulation. Heavily affected vehicles and large SUVs start from £80–£100. Combined with an interior valet or full valet, pet hair removal is available at a reduced add-on rate.',
    },
    {
      question: 'Can pet hair removal be combined with odour removal?',
      answer:
        "Yes — and it often should be. Pet hair carries odour-producing dander and bacteria that deodorisation alone does not address if the physical hair is still present. We recommend combining pet hair removal with our interior deodourisation service, and ozone treatment for persistent pet smells.",
    },
  ],
  relatedLinks: [
    { label: 'Odour Removal Wilmslow', href: '/wilmslow/car-valeting/odour-removal', description: 'Ozone treatment for pet and other odours' },
    { label: 'Interior Valeting Wilmslow', href: '/wilmslow/car-valeting/interior-valeting', description: 'Full interior professional clean' },
    { label: 'Upholstery Cleaning Wilmslow', href: '/wilmslow/car-valeting/upholstery-cleaning', description: 'Hot water extraction for fabric seats' },
    { label: 'Full Valet Wilmslow', href: '/wilmslow/car-valeting/full-valet', description: 'Complete interior and exterior valet' },
    { label: 'Car Valeting Wilmslow', href: '/wilmslow/car-valeting', description: 'All valeting services across SK9' },
    { label: 'Book Now', href: '/booking' },
  ],
  schemaPrice: '60',
};
