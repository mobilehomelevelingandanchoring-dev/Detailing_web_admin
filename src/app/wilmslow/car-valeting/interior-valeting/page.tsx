import type { Metadata } from 'next';
import { ServicePageTemplate } from '@/components/pages/ServicePageTemplate';
import { interiorValetingWilmslow } from '@/data/wilmslow/car-valeting/interior-valeting';

export const dynamic = 'force-static';
export const revalidate = 86400;

export const metadata: Metadata = {
  title: interiorValetingWilmslow.seo.title,
  description: interiorValetingWilmslow.seo.description,
  keywords: interiorValetingWilmslow.seo.keywords,
  alternates: {
    canonical: interiorValetingWilmslow.seo.canonical,
    languages: { 'en-GB': interiorValetingWilmslow.seo.canonical },
  },
  robots: { index: true, follow: true },
  other: {
    'geo.region': 'GB-CHE',
    'geo.placename': 'Wilmslow, Cheshire East',
    'geo.position': '53.3271;-2.2336',
  },
};

export default function WilmslowInteriorValetingPage() {
  return <ServicePageTemplate data={interiorValetingWilmslow} location="Wilmslow" />;
}
