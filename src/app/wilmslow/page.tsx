import type { Metadata } from 'next';
import { LocationHubTemplate } from '@/components/pages/LocationHubTemplate';
import { wilmslowHub } from '@/data/wilmslow/hub';

export const dynamic = 'force-static';
export const revalidate = 86400;

// ── Supplemental LocalBusiness schema ────────────────────────────────────────
// Uses @id to MERGE with the root-layout entity rather than creating a
// duplicate business node. areaServed scoped to Wilmslow/SK9 specifically;
// broader coverage lives in the root layout schema.
// geo coordinates: Wilmslow town centre SK9 (53.3271, -2.2336)
const wilmslowPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://www.srvdetailing.co.uk/#business',
  name: 'SRV Detailing',
  url: 'https://www.srvdetailing.co.uk/wilmslow',
  telephone: '+44-7375-759686',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Globe House, Globe Lane',
    addressLocality: 'Dukinfield',
    postalCode: 'SK16 4RG',
    addressCountry: 'GB',
  },
  areaServed: [
    { '@type': 'City', name: 'Wilmslow' },
    { '@type': 'AdministrativeArea', name: 'Cheshire East' },
    { '@type': 'Place', name: 'Alderley Edge' },
    { '@type': 'Place', name: 'Prestbury' },
    { '@type': 'Place', name: 'Handforth' },
    { '@type': 'Place', name: 'Knutsford' },
    { '@type': 'Place', name: 'Cheadle Hulme' },
    { '@type': 'Place', name: 'Macclesfield' },
  ],
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '53.3271',
    longitude: '-2.2336',
  },
};

export const metadata: Metadata = {
  title: wilmslowHub.seo.title,
  description: wilmslowHub.seo.description,
  keywords: wilmslowHub.seo.keywords,
  alternates: {
    canonical: wilmslowHub.seo.canonical,
    languages: { 'en-GB': wilmslowHub.seo.canonical, 'x-default': wilmslowHub.seo.canonical },
  },
  robots: { index: true, follow: true },
  other: {
    'geo.region': 'GB-CHE',
    'geo.placename': 'Wilmslow, Cheshire East',
    'geo.position': '53.3271;-2.2336',
    'ICBM': '53.3271, -2.2336',
  },
  openGraph: {
    title: wilmslowHub.seo.title,
    description: wilmslowHub.seo.description,
    url: wilmslowHub.seo.canonical,
    type: 'website',
    locale: 'en_GB',
    siteName: 'SRV Detailing',
    images: [{ url: '/mobile-van.webp', width: 1200, height: 630, alt: 'SRV Detailing mobile car care — Wilmslow SK9' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: wilmslowHub.seo.title,
    description: wilmslowHub.seo.description,
    images: ['/mobile-van.webp'],
  },
};

export default function WilmslowPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(wilmslowPageSchema) }}
      />
      <LocationHubTemplate data={wilmslowHub} />
    </>
  );
}
