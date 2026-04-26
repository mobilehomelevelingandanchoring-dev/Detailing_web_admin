import type { Metadata } from 'next';
import { ServicePageTemplate } from '@/components/pages/ServicePageTemplate';
import { miniValetWilmslow } from '@/data/wilmslow/car-valeting/mini-valet';

export const dynamic = 'force-static';
export const revalidate = 86400;

export const metadata: Metadata = {
  title: miniValetWilmslow.seo.title,
  description: miniValetWilmslow.seo.description,
  keywords: miniValetWilmslow.seo.keywords,
  alternates: {
    canonical: miniValetWilmslow.seo.canonical,
    languages: { 'en-GB': miniValetWilmslow.seo.canonical },
  },
  robots: { index: true, follow: true },
  other: {
    'geo.region': 'GB-CHE',
    'geo.placename': 'Wilmslow, Cheshire East',
    'geo.position': '53.3271;-2.2336',
  },
};

export default function WilmslowMiniValetPage() {
  return <ServicePageTemplate data={miniValetWilmslow} location="Wilmslow" />;
}
