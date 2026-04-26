/**
 * Wilmslow location configuration
 * Cheshire East, SK9 postcode — premium mobile car detailing & valeting
 */

export const WILMSLOW_CONFIG = {
  name: 'Wilmslow',
  postcode: 'SK9',
  county: 'Cheshire East',
  region: 'GB-CHE',
  coordinates: {
    latitude: '53.3271',
    longitude: '-2.2336',
  },
  nearbyAreas: [
    'Alderley Edge',
    'Prestbury',
    'Handforth',
    'Knutsford',
    'Cheadle Hulme',
    'Macclesfield',
    'Styal',
    'Mobberley',
    'Hale',
    'Altrincham',
  ],
  principalRoads: ['A34', 'A538', 'A5102', 'B5085', 'Knutsford Road', 'Alderley Road'],
  landmarks: ['Lindow Common', 'The Carrs', 'Water Lane', 'Styal', 'Quarry Bank Mill', 'Lindow Mere'],
  vehicleProfile: ['Porsche Cayenne', 'Range Rover', 'Mercedes-AMG', 'Bentley', 'Ferrari', 'BMW M Series'],
  baseUrl: 'https://www.srvdetailing.co.uk/wilmslow',
} as const;

export interface WilmslowMetaOptions {
  /** Page-specific title — injected before ' | SRV Detailing' */
  title: string;
  /** Meta description — 150–160 chars */
  description: string;
  /** Page slug relative to /wilmslow, e.g. 'car-detailing/ceramic-coating' */
  slug: string;
  /** Additional keywords specific to the page */
  extraKeywords?: string[];
}

/**
 * Factory for consistent Wilmslow page metadata.
 * Returns a `Metadata`-compatible object ready for use in `export const metadata`.
 */
export function wilmslowMeta(options: WilmslowMetaOptions) {
  const { title, description, slug, extraKeywords = [] } = options;
  const canonical = slug
    ? `https://www.srvdetailing.co.uk/wilmslow/${slug}`
    : 'https://www.srvdetailing.co.uk/wilmslow';

  const baseKeywords = [
    'car detailing wilmslow',
    'car valeting wilmslow',
    'mobile car detailing wilmslow',
    'mobile car valeting wilmslow',
    'car detailing sk9',
    'car valeting sk9',
    'car detailing cheshire east',
  ];

  return {
    title,
    description,
    keywords: [...baseKeywords, ...extraKeywords],
    alternates: {
      canonical,
      languages: { 'en-GB': canonical, 'x-default': canonical },
    },
    robots: { index: true, follow: true },
    other: {
      'geo.region': WILMSLOW_CONFIG.region,
      'geo.placename': `${WILMSLOW_CONFIG.name}, ${WILMSLOW_CONFIG.county}`,
      'geo.position': `${WILMSLOW_CONFIG.coordinates.latitude};${WILMSLOW_CONFIG.coordinates.longitude}`,
      'ICBM': `${WILMSLOW_CONFIG.coordinates.latitude}, ${WILMSLOW_CONFIG.coordinates.longitude}`,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      type: 'website' as const,
      locale: 'en_GB',
      siteName: 'SRV Detailing',
      images: [
        {
          url: '/mobile-van.webp',
          width: 1200,
          height: 630,
          alt: `SRV Detailing mobile valeting — ${WILMSLOW_CONFIG.name}, ${WILMSLOW_CONFIG.postcode}`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image' as const,
      title,
      description,
      images: ['/mobile-van.webp'],
    },
  };
}
