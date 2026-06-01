import type { Metadata } from 'next';
import { ServicePageTemplate } from '@/components/pages/ServicePageTemplate';
import { carWashWilmslow } from '@/data/wilmslow/car-wash';

export const dynamic = 'force-static';
export const revalidate = 86400;

export const metadata: Metadata = {
  title: carWashWilmslow.seo.title,
  description: carWashWilmslow.seo.description,
  keywords: carWashWilmslow.seo.keywords,
  alternates: {
    canonical: carWashWilmslow.seo.canonical,
    languages: { 'en-GB': carWashWilmslow.seo.canonical },
  },
  robots: { index: true, follow: true },
  other: {
    'geo.region': 'GB-CHE',
    'geo.placename': 'Wilmslow, Cheshire East',
    'geo.position': '53.3271;-2.2336',
  },
};

export default function WilmslowCarWashPage() {
  return <ServicePageTemplate data={carWashWilmslow} location="Wilmslow" />;
}
