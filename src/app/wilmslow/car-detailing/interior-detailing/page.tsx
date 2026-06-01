import type { Metadata } from 'next';
import { ServicePageTemplate } from '@/components/pages/ServicePageTemplate';
import { interiorDetailingWilmslow } from '@/data/wilmslow/car-detailing/interior-detailing';

export const dynamic = 'force-static';
export const revalidate = 86400;

export const metadata: Metadata = {
  title: interiorDetailingWilmslow.seo.title,
  description: interiorDetailingWilmslow.seo.description,
  keywords: interiorDetailingWilmslow.seo.keywords,
  alternates: {
    canonical: interiorDetailingWilmslow.seo.canonical,
    languages: { 'en-GB': interiorDetailingWilmslow.seo.canonical },
  },
  robots: { index: true, follow: true },
  other: {
    'geo.region': 'GB-CHE',
    'geo.placename': 'Wilmslow, Cheshire East',
    'geo.position': '53.3271;-2.2336',
  },
};

export default function WilmslowInteriorDetailingPage() {
  return <ServicePageTemplate data={interiorDetailingWilmslow} location="Wilmslow" />;
}
