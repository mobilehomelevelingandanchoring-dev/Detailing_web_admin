import type { Metadata } from 'next';
import { ServicePageTemplate } from '@/components/pages/ServicePageTemplate';
import { exteriorValetingWilmslow } from '@/data/wilmslow/car-valeting/exterior-valeting';

export const dynamic = 'force-static';
export const revalidate = 86400;

export const metadata: Metadata = {
  title: exteriorValetingWilmslow.seo.title,
  description: exteriorValetingWilmslow.seo.description,
  keywords: exteriorValetingWilmslow.seo.keywords,
  alternates: {
    canonical: exteriorValetingWilmslow.seo.canonical,
    languages: { 'en-GB': exteriorValetingWilmslow.seo.canonical },
  },
  robots: { index: true, follow: true },
  other: {
    'geo.region': 'GB-CHE',
    'geo.placename': 'Wilmslow, Cheshire East',
    'geo.position': '53.3271;-2.2336',
  },
};

export default function WilmslowExteriorValetingPage() {
  return <ServicePageTemplate data={exteriorValetingWilmslow} location="Wilmslow" />;
}
