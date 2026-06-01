import type { Metadata } from 'next';
import { PillarPageTemplate } from '@/components/pages/PillarPageTemplate';
import { wilmslowCarValetingPillar } from '@/data/wilmslow/car-valeting';

export const dynamic = 'force-static';
export const revalidate = 86400;

export const metadata: Metadata = {
  title: wilmslowCarValetingPillar.seo.title,
  description: wilmslowCarValetingPillar.seo.description,
  keywords: wilmslowCarValetingPillar.seo.keywords,
  alternates: {
    canonical: wilmslowCarValetingPillar.seo.canonical,
    languages: { 'en-GB': wilmslowCarValetingPillar.seo.canonical },
  },
  robots: { index: true, follow: true },
  other: {
    'geo.region': 'GB-CHE',
    'geo.placename': 'Wilmslow, Cheshire East',
    'geo.position': '53.3271;-2.2336',
  },
};

export default function WilmslowCarValetingPage() {
  return <PillarPageTemplate data={wilmslowCarValetingPillar} location="Wilmslow" />;
}
