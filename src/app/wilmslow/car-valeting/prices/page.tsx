import type { Metadata } from 'next';
import { ServicePageTemplate } from '@/components/pages/ServicePageTemplate';
import { valetingPricesWilmslow } from '@/data/wilmslow/car-valeting/prices';

export const dynamic = 'force-static';
export const revalidate = 86400;

export const metadata: Metadata = {
  title: valetingPricesWilmslow.seo.title,
  description: valetingPricesWilmslow.seo.description,
  keywords: valetingPricesWilmslow.seo.keywords,
  alternates: {
    canonical: valetingPricesWilmslow.seo.canonical,
    languages: { 'en-GB': valetingPricesWilmslow.seo.canonical },
  },
  robots: { index: true, follow: true },
  other: {
    'geo.region': 'GB-CHE',
    'geo.placename': 'Wilmslow, Cheshire East',
    'geo.position': '53.3271;-2.2336',
  },
};

export default function WilmslowValetingPricesPage() {
  return <ServicePageTemplate data={valetingPricesWilmslow} location="Wilmslow" />;
}
