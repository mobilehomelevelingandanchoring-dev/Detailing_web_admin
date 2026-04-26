import type { Metadata } from 'next';
import { ServicePageTemplate } from '@/components/pages/ServicePageTemplate';
import { detailingPricesWilmslow } from '@/data/wilmslow/car-detailing/prices';

export const dynamic = 'force-static';
export const revalidate = 86400;

export const metadata: Metadata = {
  title: detailingPricesWilmslow.seo.title,
  description: detailingPricesWilmslow.seo.description,
  keywords: detailingPricesWilmslow.seo.keywords,
  alternates: {
    canonical: detailingPricesWilmslow.seo.canonical,
    languages: { 'en-GB': detailingPricesWilmslow.seo.canonical },
  },
  robots: { index: true, follow: true },
  other: {
    'geo.region': 'GB-CHE',
    'geo.placename': 'Wilmslow, Cheshire East',
    'geo.position': '53.3271;-2.2336',
  },
};

export default function WilmslowDetailingPricesPage() {
  return <ServicePageTemplate data={detailingPricesWilmslow} location="Wilmslow" />;
}
