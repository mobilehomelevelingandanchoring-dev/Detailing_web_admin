import type { Metadata } from 'next';
import { ServicePageTemplate } from '@/components/pages/ServicePageTemplate';
import { exteriorDetailingWilmslow } from '@/data/wilmslow/car-detailing/exterior-detailing';

export const dynamic = 'force-static';
export const revalidate = 86400;

export const metadata: Metadata = {
  title: exteriorDetailingWilmslow.seo.title,
  description: exteriorDetailingWilmslow.seo.description,
  keywords: exteriorDetailingWilmslow.seo.keywords,
  alternates: {
    canonical: exteriorDetailingWilmslow.seo.canonical,
    languages: { 'en-GB': exteriorDetailingWilmslow.seo.canonical },
  },
  robots: { index: true, follow: true },
  other: {
    'geo.region': 'GB-CHE',
    'geo.placename': 'Wilmslow, Cheshire East',
    'geo.position': '53.3271;-2.2336',
  },
};

export default function WilmslowExteriorDetailingPage() {
  return <ServicePageTemplate data={exteriorDetailingWilmslow} location="Wilmslow" />;
}
