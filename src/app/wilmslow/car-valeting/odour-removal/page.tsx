import type { Metadata } from 'next';
import { ServicePageTemplate } from '@/components/pages/ServicePageTemplate';
import { odourRemovalWilmslow } from '@/data/wilmslow/car-valeting/odour-removal';

export const dynamic = 'force-static';
export const revalidate = 86400;

export const metadata: Metadata = {
  title: odourRemovalWilmslow.seo.title,
  description: odourRemovalWilmslow.seo.description,
  keywords: odourRemovalWilmslow.seo.keywords,
  alternates: {
    canonical: odourRemovalWilmslow.seo.canonical,
    languages: { 'en-GB': odourRemovalWilmslow.seo.canonical },
  },
  robots: { index: true, follow: true },
  other: {
    'geo.region': 'GB-CHE',
    'geo.placename': 'Wilmslow, Cheshire East',
    'geo.position': '53.3271;-2.2336',
  },
};

export default function WilmslowOdourRemovalPage() {
  return <ServicePageTemplate data={odourRemovalWilmslow} location="Wilmslow" />;
}
