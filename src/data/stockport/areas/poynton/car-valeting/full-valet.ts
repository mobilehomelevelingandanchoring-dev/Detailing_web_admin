import { Star } from 'lucide-react';
import type { ServicePageData } from '@/data/types';

export const fullValetPoynton: ServicePageData = {
  slug: 'full-valet',
  name: 'Full Valet Poynton',
  seo: {
    title: 'Full Valet Poynton | Complete Interior & Exterior Clean SK12 | SRV Detailing',
    description:
      'Full valet in Poynton SK12 — 3–4 hours of professional exterior and interior cleaning delivered to your driveway. Inside and out, spotless. Book today.',
    keywords: [
      'full valet poynton',
      'full car valet poynton',
      'car valet poynton',
      'full valet sk12',
      'mobile full valet poynton',
      'complete car clean poynton',
      'car valeting poynton stockport',
    ],
    canonical: 'https://www.srvdetailing.co.uk/stockport/areas/poynton/car-valeting/full-valet',
  },
  icon: Star,
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Stockport', href: '/stockport' },
    { label: 'Areas', href: '/stockport/areas' },
    { label: 'Poynton', href: '/stockport/areas/poynton' },
    { label: 'Car Valeting', href: '/stockport/areas/poynton/car-valeting' },
    { label: 'Full Valet', href: '/stockport/areas/poynton/car-valeting/full-valet' },
  ],
  heroTitle: 'Full Valet in Poynton — Professional Inside-and-Out Clean at Your Door',
  heroDescription:
    "Your car's sitting on the drive in Poynton, and you're looking at it thinking — when did it start looking so tired? That's usually the moment people call us. A full valet in SK12: 3–4 hours, complete inside and out, at your driveway.",
  imageKey: 'exterior',
  contentSections: [
    {
      type: 'text',
      heading: 'What Is a Full Car Valet in Poynton?',
      bodyParagraphs: [
        "A full car valet is the most comprehensive cleaning and presentation service available short of professional detailing. It combines a thorough exterior clean — snow foam pre-wash, two-bucket hand wash, wheel decontamination, microfibre drying and wax protection — with a comprehensive interior treatment including deep vacuuming, upholstery cleaning, dashboard and trim care, glass cleaning and odour neutralisation.",
        "While a mini valet is a maintenance service, a full valet is restorative. It's what you book when the car has accumulated weeks or months of daily use across Poynton's roads and the interior needs proper attention. It's also the standard preparation before private sale, dealer part-exchange, or a seasonal reset after winter.",
        "We carry out full valets using a fully self-contained mobile unit. Our own water supply, generator, professional equipment, and chemicals come with us. You provide nothing except access to your vehicle. The service covers all of SK12, 7 days a week, at your home or workplace.",
      ],
    },
    {
      type: 'process',
      heading: 'Full Valet Process: What We Do in 3–4 Hours at Your Poynton Home',
      items: [
        'Pre-inspection — assess condition, identify staining, heavy contamination, or areas needing specific attention',
        'Snow foam pre-wash — pH-balanced traffic film remover applied with foam lance, left to dissolve road grime before any contact',
        'Pressure rinse — snow foam and suspended contamination flushed from panels, door shuts, wheel arches and sills',
        'Two-bucket hand wash — microfibre mitts, pH-neutral shampoo, grit guard rinse bucket — safe contact wash panel by panel',
        'Wheel and tyre decontamination — iron fallout remover, barrel and spoke brushes, rinse; tyres scrubbed and dressed',
        'Tar decontamination — tar spots dissolved from lower panels',
        'Microfibre drying — plush drying towels on all panels, door jambs, fuel flap and sills',
        'Interior deep vacuum — seats, carpets, floor mats, boot liner, door pockets; crevice tools for seat rails and vent slots',
        'Dashboard, console and trim — all hard surfaces wiped with appropriate cleaner and dressed',
        'Upholstery treatment — fabric seats spot-cleaned for stains; leather seats cleaned and conditioned',
        'Interior glass — windows and mirrors cleaned streak-free from inside',
        'Wax or sealant protection — spray sealant or wax applied to all exterior painted surfaces',
        'Final finish — tyre dressing, trim dressed, air freshened; walk-around inspection before completion',
      ],
    },
    {
      type: 'list',
      heading: 'What\'s Included in a Full Valet in Poynton',
      items: [
        'Snow foam pre-wash and two-bucket contact wash with pH-neutral shampoo',
        'Iron fallout removal and dedicated wheel cleaning — barrel, spokes and caliper faces',
        'Tar spot dissolution from lower painted panels',
        'Microfibre drying of all panels, door shuts and fuel cap area',
        'Full interior vacuum — seats, carpets, mats, boot, door pockets and all crevices',
        'Dashboard, console, steering wheel and door card cleaning and dressing',
        'Upholstery spot cleaning — fabric shampoo or leather wipe depending on seat type',
        'Interior and exterior glass cleaned streak-free',
        'Wax or sealant protection on all painted surfaces',
        'Tyre dressing and exterior trim restoration',
      ],
    },
    {
      type: 'text',
      heading: 'When Poynton Drivers Book a Full Valet',
      bodyParagraphs: [
        "Most of our Poynton customers book a full valet two to four times a year — typically at the start of spring after the salt season, ahead of summer, at the end of summer to clear tree sap and pollen, and heading into winter. Between full valets, a mini valet every four to six weeks keeps the car in good shape without a full time and cost investment.",
        "The most common booking triggers we see in SK12 are pre-sale preparation, returning from a long trip, a seasonal reset after winter, and the point at which the interior has accumulated enough use to need more than a quick wipe. A full valet in Poynton is a same-day transformation — when SRV Detailing leaves your driveway, your car looks substantially better than when we arrived.",
      ],
    },
    {
      type: 'comparison',
      heading: 'Full Valet vs Mini Valet in Poynton: Which Do You Need?',
      body: 'Both are professional, hand-finished and delivered to your SK12 driveway. The decision comes down to how much interior attention the car needs.',
      comparison: {
        headers: ['Aspect', 'Full Valet', 'Mini Valet'],
        rows: [
          ['Time', '3–4 hours', '60–90 minutes'],
          ['Exterior wash', 'Snow foam, hand wash, wheel decontamination, wax', 'Hand wash, wheel clean, tyre dressing'],
          ['Interior vacuum', 'Deep vacuum including crevices, seat rails and boot', 'Standard vacuum of seats, carpets and boot'],
          ['Dashboard', 'Full clean and protectant on all surfaces', 'Quick wipe of main surfaces'],
          ['Upholstery', 'Spot cleaning, leather conditioning where applicable', 'Surface wipe only'],
          ['Glass', 'Interior and exterior cleaned streak-free', 'Interior quick clean only'],
          ['Price from', '£120', '£50'],
          ['Best for', 'Quarterly deep clean, pre-sale, post-winter reset', 'Monthly maintenance on a clean car'],
        ],
      },
    },
  ],
  faqs: [
    {
      question: 'How much does a full valet cost in Poynton?',
      answer:
        "Full valets start from £90 for a standard hatchback or saloon. Larger vehicles — estates, SUVs, MPVs — start from £130. We give exact quotes when booking based on vehicle size and condition. No hidden charges or travel fees for SK12.",
    },
    {
      question: 'How long does a full valet take in Poynton?',
      answer:
        "3–4 hours for a standard car in reasonable condition. Larger vehicles take 4–5 hours. Heavily soiled interiors or significant staining may take longer — we always give an honest estimate when booking.",
    },
    {
      question: 'Do you need water or power from my Poynton property?',
      answer:
        "No. Our van carries its own fresh water tank and generator. We need nothing from you except access to your vehicle and enough space alongside it to work. A standard driveway is plenty.",
    },
    {
      question: 'Is a full valet worth it before selling my Poynton car?',
      answer:
        "Yes, strongly. A professionally valeted car consistently achieves a better private sale or part-exchange price than an unclean one. The cost of a full valet is almost always returned through the improved sale price — and often exceeded. First impressions in the car market are powerful.",
    },
    {
      question: 'How often should I get a full valet in Poynton?',
      answer:
        "For most SK12 drivers, a full valet every 2–3 months is ideal — approximately quarterly. Between full valets, a mini valet every 4–6 weeks maintains the car efficiently. If you have dogs, children or do a lot of countryside driving near Lyme Park, a slightly higher frequency makes sense.",
    },
  ],
  relatedLinks: [
    { label: 'Mini Valet Poynton', href: '/stockport/areas/poynton/car-valeting/mini-valet', description: 'Quick 60–90 minute maintenance clean' },
    { label: 'Interior Valeting Poynton', href: '/stockport/areas/poynton/car-valeting/interior-valeting', description: 'Interior-only deep clean' },
    { label: 'Exterior Valeting Poynton', href: '/stockport/areas/poynton/car-valeting/exterior-valeting', description: 'Exterior-only service' },
    { label: 'Upholstery Cleaning Poynton', href: '/stockport/areas/poynton/car-valeting/upholstery-cleaning', description: 'Hot water extraction for seat stains' },
    { label: 'Car Valeting Poynton', href: '/stockport/areas/poynton/car-valeting', description: 'All valeting services in Poynton' },
  ],
  schemaPrice: '120',
};
