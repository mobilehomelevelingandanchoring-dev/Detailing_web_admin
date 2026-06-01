import type { Metadata } from 'next';
import { ServicePageTemplate } from '@/components/pages/ServicePageTemplate';
import { engineBayDetailingWilmslow } from '@/data/wilmslow/car-detailing/engine-bay-detailing';

export const dynamic = 'force-static';
export const revalidate = 86400;

export const metadata: Metadata = {
  title: engineBayDetailingWilmslow.seo.title,
  description: engineBayDetailingWilmslow.seo.description,
  keywords: engineBayDetailingWilmslow.seo.keywords,
  alternates: {
    canonical: engineBayDetailingWilmslow.seo.canonical,
    languages: { 'en-GB': engineBayDetailingWilmslow.seo.canonical },
  },
  robots: { index: true, follow: true },
  other: {
    'geo.region': 'GB-CHE',
    'geo.placename': 'Wilmslow, Cheshire East',
    'geo.position': '53.3271;-2.2336',
  },
};

export default function WilmslowEngineBayDetailingPage() {
  return <ServicePageTemplate data={engineBayDetailingWilmslow} location="Wilmslow" />;
}
