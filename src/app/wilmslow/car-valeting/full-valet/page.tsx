import type { Metadata } from 'next';
import { ServicePageTemplate } from '@/components/pages/ServicePageTemplate';
import { fullValetWilmslow } from '@/data/wilmslow/car-valeting/full-valet';

export const dynamic = 'force-static';
export const revalidate = 86400;

export const metadata: Metadata = {
  title: fullValetWilmslow.seo.title,
  description: fullValetWilmslow.seo.description,
  keywords: fullValetWilmslow.seo.keywords,
  alternates: {
    canonical: fullValetWilmslow.seo.canonical,
    languages: { 'en-GB': fullValetWilmslow.seo.canonical },
  },
  robots: { index: true, follow: true },
  other: {
    'geo.region': 'GB-CHE',
    'geo.placename': 'Wilmslow, Cheshire East',
    'geo.position': '53.3271;-2.2336',
  },
};

export default function WilmslowFullValetPage() {
  return <ServicePageTemplate data={fullValetWilmslow} location="Wilmslow" />;
}
