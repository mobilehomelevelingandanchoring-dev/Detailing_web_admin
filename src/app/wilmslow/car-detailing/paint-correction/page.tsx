import type { Metadata } from 'next';
import { ServicePageTemplate } from '@/components/pages/ServicePageTemplate';
import { paintCorrectionWilmslow } from '@/data/wilmslow/car-detailing/paint-correction';

export const dynamic = 'force-static';
export const revalidate = 86400;

export const metadata: Metadata = {
  title: paintCorrectionWilmslow.seo.title,
  description: paintCorrectionWilmslow.seo.description,
  keywords: paintCorrectionWilmslow.seo.keywords,
  alternates: {
    canonical: paintCorrectionWilmslow.seo.canonical,
    languages: { 'en-GB': paintCorrectionWilmslow.seo.canonical },
  },
  robots: { index: true, follow: true },
  other: {
    'geo.region': 'GB-CHE',
    'geo.placename': 'Wilmslow, Cheshire East',
    'geo.position': '53.3271;-2.2336',
  },
};

export default function WilmslowPaintCorrectionPage() {
  return <ServicePageTemplate data={paintCorrectionWilmslow} location="Wilmslow" />;
}
