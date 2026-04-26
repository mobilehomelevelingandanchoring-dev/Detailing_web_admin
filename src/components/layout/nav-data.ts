// src/components/layout/nav-data.ts
// Single source of truth for ALL navigation link data.

// ─── Types ───────────────────────────────────────────────────────────────────

export interface NavLink {
  label: string;
  href: string;
  description?: string;
}

export interface NavSection {
  title: string;
  icon: string;
  links: NavLink[];
}

export interface LocationNavItem {
  name: string;
  href: string;
  subLinks: NavLink[];
}

export type BottomBarIconName = 'phone' | 'home' | 'list' | 'calendar';

export interface BottomBarItem {
  iconName: BottomBarIconName;
  label: string;
  href: string;
  isPhone?: boolean;
  isAccent?: boolean;
}

// ─── Business constants ───────────────────────────────────────────────────────

export const PHONE_RAW = '+447375759686';
export const PHONE_TEL = 'tel:+447375759686';
export const PHONE_DISPLAY = '07375 759686';
export const EMAIL = 'srv_detailing@icloud.com';

// ─── Services ─────────────────────────────────────────────────────────────────

export const DETAILING_NAV: NavSection = {
  title: 'Car Detailing',
  icon: '🚗',
  links: [
    {
      label: 'Ceramic Coating',
      href: '/manchester/car-detailing/ceramic-coating',
      description: 'Long-term SiO\u2082 paint protection lasting 3\u20135 years',
    },
    {
      label: 'Paint Correction',
      href: '/manchester/car-detailing/paint-correction',
      description: 'Remove swirl marks, fine scratches & oxidation',
    },
    {
      label: 'Interior Detailing',
      href: '/manchester/car-detailing/interior-detailing',
      description: 'Deep cabin restoration, steam clean & leather care',
    },
    {
      label: 'Exterior Detailing',
      href: '/manchester/car-detailing/exterior-detailing',
      description: 'Full decontamination, machine polish & protective coat',
    },
    {
      label: 'New Car Protection',
      href: '/manchester/car-detailing/new-car-protection',
      description: 'Ceramic protection applied before defects form',
    },
    {
      label: 'Engine Bay Detailing',
      href: '/manchester/car-detailing/engine-bay-detailing',
      description: 'Safe, professional engine compartment cleaning',
    },
    {
      label: 'Headlight Restoration',
      href: '/manchester/car-detailing/headlight-restoration',
      description: 'Crystal-clear lenses with UV-sealed finish',
    },
    {
      label: 'Leather Conditioning',
      href: '/manchester/car-detailing/leather-conditioning',
      description: 'pH-balanced cleaner, conditioner & UV protectant',
    },
    {
      label: 'Swirl Mark Removal',
      href: '/manchester/car-detailing/swirl-mark-removal',
      description: 'Machine polishing to eliminate wash-induced swirls',
    },
  ],
};

export const VALETING_NAV: NavSection = {
  title: 'Car Valeting',
  icon: '\u2728',
  links: [
    {
      label: 'Full Valet',
      href: '/manchester/car-valeting/full-valet',
      description: 'Complete interior & exterior professional clean',
    },
    {
      label: 'Mini Valet',
      href: '/manchester/car-valeting/mini-valet',
      description: 'Maintenance wash & freshen in 60\u201390 minutes',
    },
    {
      label: 'Mobile Valeting',
      href: '/manchester/car-valeting/mobile-valeting',
      description: 'We come to your home or workplace \u2014 fully mobile',
    },
    {
      label: 'Interior Valeting',
      href: '/manchester/car-valeting/interior-valeting',
      description: 'Focused deep clean of your cabin',
    },
    {
      label: 'Exterior Valeting',
      href: '/manchester/car-valeting/exterior-valeting',
      description: 'Hand wash, hand dry & protective spray wax',
    },
    {
      label: 'Pet Hair Removal',
      href: '/manchester/car-valeting/pet-hair-removal',
      description: 'Specialist extraction from all seat fabrics',
    },
    {
      label: 'Odour Removal',
      href: '/manchester/car-valeting/odour-removal',
      description: 'Eliminate smells at the source \u2014 not mask them',
    },
    {
      label: 'Upholstery Cleaning',
      href: '/manchester/car-valeting/upholstery-cleaning',
      description: 'Hot water extraction for stubborn stains',
    },
  ],
};

export const SERVICES_NAV = {
  detailing: DETAILING_NAV,
  valeting: VALETING_NAV,
} as const;

// ─── Locations ────────────────────────────────────────────────────────────────

export const LOCATIONS_NAV: LocationNavItem[] = [
  {
    name: 'Manchester',
    href: '/manchester',
    subLinks: [
      { label: 'Car Detailing Manchester', href: '/manchester/car-detailing' },
      { label: 'Car Valeting Manchester', href: '/manchester/car-valeting' },
      { label: 'Areas in Manchester', href: '/manchester/areas' },
    ],
  },
  {
    name: 'Wilmslow',
    href: '/wilmslow',
    subLinks: [
      { label: 'Car Detailing Wilmslow', href: '/wilmslow/car-detailing' },
      { label: 'Car Valeting Wilmslow', href: '/wilmslow/car-valeting' },
      { label: 'Areas in Wilmslow', href: '/wilmslow/areas' },
    ],
  },
  {
    name: 'Stockport',
    href: '/stockport',
    subLinks: [
      { label: 'Car Detailing Stockport', href: '/stockport/car-detailing' },
      { label: 'Car Valeting Stockport', href: '/stockport/car-valeting' },
      { label: 'Areas in Stockport', href: '/stockport/areas' },
    ],
  },
  {
    name: 'Warrington',
    href: '/warrington',
    subLinks: [
      { label: 'Car Detailing Warrington', href: '/warrington/car-detailing' },
      { label: 'Car Valeting Warrington', href: '/warrington/car-valeting' },
    ],
  },
];

// ─── Centre nav links (non-mega-menu) ────────────────────────────────────────

export const CENTRE_NAV_LINKS: NavLink[] = [
  { label: 'Pricing', href: '/pricing' },
  { label: 'About', href: '/about-us' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

// ─── Footer columns ───────────────────────────────────────────────────────────

export const FOOTER_LINKS = {
  detailing: [
    { label: 'Ceramic Coating', href: '/manchester/car-detailing/ceramic-coating' },
    { label: 'Paint Correction', href: '/manchester/car-detailing/paint-correction' },
    { label: 'Interior Detailing', href: '/manchester/car-detailing/interior-detailing' },
    { label: 'Exterior Detailing', href: '/manchester/car-detailing/exterior-detailing' },
    { label: 'New Car Protection', href: '/manchester/car-detailing/new-car-protection' },
    { label: 'Engine Bay Detailing', href: '/manchester/car-detailing/engine-bay-detailing' },
    { label: 'Headlight Restoration', href: '/manchester/car-detailing/headlight-restoration' },
    { label: 'Leather Conditioning', href: '/manchester/car-detailing/leather-conditioning' },
    { label: 'Swirl Mark Removal', href: '/manchester/car-detailing/swirl-mark-removal' },
  ],
  valeting: [
    { label: 'Full Valet', href: '/manchester/car-valeting/full-valet' },
    { label: 'Mini Valet', href: '/manchester/car-valeting/mini-valet' },
    { label: 'Mobile Valeting', href: '/manchester/car-valeting/mobile-valeting' },
    { label: 'Interior Valeting', href: '/manchester/car-valeting/interior-valeting' },
    { label: 'Exterior Valeting', href: '/manchester/car-valeting/exterior-valeting' },
    { label: 'Pet Hair Removal', href: '/manchester/car-valeting/pet-hair-removal' },
    { label: 'Odour Removal', href: '/manchester/car-valeting/odour-removal' },
    { label: 'Upholstery Cleaning', href: '/manchester/car-valeting/upholstery-cleaning' },
  ],
  locations: [
    { label: 'Car Detailing Manchester', href: '/manchester/car-detailing' },
    { label: 'Car Valeting Manchester', href: '/manchester/car-valeting' },
    { label: 'Car Detailing Stockport', href: '/stockport/car-detailing' },
    { label: 'Car Valeting Stockport', href: '/stockport/car-valeting' },
    { label: 'Car Detailing Wilmslow', href: '/wilmslow/car-detailing' },
    { label: 'Car Valeting Wilmslow', href: '/wilmslow/car-valeting' },
    { label: 'Car Detailing Warrington', href: '/warrington/car-detailing' },
    { label: 'Car Valeting Warrington', href: '/warrington/car-valeting' },
  ],
  areas: [
    { label: 'Manchester Areas', href: '/manchester/areas' },
    { label: 'Stockport Areas', href: '/stockport/areas' },
    { label: 'Wilmslow Areas', href: '/wilmslow/areas' },
    { label: 'Poynton SK12', href: '/stockport/areas/poynton' },
    { label: 'Bramhall', href: '/stockport/areas/bramhall' },
    { label: 'Cheadle', href: '/stockport/areas/cheadle' },
    { label: 'Hazel Grove', href: '/stockport/areas/hazel-grove' },
    { label: 'Didsbury', href: '/manchester/areas/didsbury' },
  ],
  company: [
    { label: 'About Us', href: '/about-us' },
    { label: 'Blog', href: '/blog' },
    { label: 'Guides', href: '/guides' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Compare', href: '/compare' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Contact', href: '/contact' },
  ],
} as const;

// ─── Popular searches (SEO keyword-match anchor text) ────────────────────────

export const POPULAR_SEARCHES: NavLink[] = [
  { label: 'Car Detailing Manchester', href: '/manchester/car-detailing' },
  { label: 'Car Valeting Stockport', href: '/stockport/car-valeting' },
  { label: 'Ceramic Coating Wilmslow', href: '/wilmslow/car-detailing/ceramic-coating' },
  { label: 'Mobile Valeting Manchester', href: '/manchester/car-valeting/mobile-valeting' },
  { label: 'Paint Correction Stockport', href: '/stockport/car-detailing/paint-correction' },
  { label: 'Full Valet Wilmslow', href: '/wilmslow/car-valeting/full-valet' },
  { label: 'Car Detailing Warrington', href: '/warrington/car-detailing' },
  { label: 'Ceramic Coating Manchester', href: '/manchester/car-detailing/ceramic-coating' },
  { label: 'Interior Detailing Stockport', href: '/stockport/car-detailing/interior-detailing' },
  { label: 'Mobile Valeting Wilmslow', href: '/wilmslow/car-valeting/mobile-valeting' },
];

// ─── Mobile bottom bar tabs ───────────────────────────────────────────────────

export const BOTTOM_BAR_ITEMS: BottomBarItem[] = [
  { iconName: 'phone',    label: 'Call',     href: PHONE_TEL,  isPhone: true },
  { iconName: 'home',     label: 'Home',     href: '/' },
  { iconName: 'list',     label: 'Services', href: '/services' },
  { iconName: 'calendar', label: 'Book Now', href: '/booking', isAccent: true },
];
