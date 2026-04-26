import type { Metadata } from 'next';
import { PillarPageTemplate } from '@/components/pages/PillarPageTemplate';
import { wilmslowCarDetailingPillar } from '@/data/wilmslow/car-detailing';

export const dynamic = 'force-static';
export const revalidate = 86400;

export const metadata: Metadata = {
  title: wilmslowCarDetailingPillar.seo.title,
  description: wilmslowCarDetailingPillar.seo.description,
  keywords: wilmslowCarDetailingPillar.seo.keywords,
  alternates: {
    canonical: wilmslowCarDetailingPillar.seo.canonical,
    languages: { 'en-GB': wilmslowCarDetailingPillar.seo.canonical },
  },
  robots: { index: true, follow: true },
  other: {
    'geo.region': 'GB-CHE',
    'geo.placename': 'Wilmslow, Cheshire East',
    'geo.position': '53.3271;-2.2336',
  },
};

export default function WilmslowCarDetailingPage() {
  return <PillarPageTemplate data={wilmslowCarDetailingPillar} location="Wilmslow" />;
}
