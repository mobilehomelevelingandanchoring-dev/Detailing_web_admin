import type { Metadata } from 'next';
import { ServicePageTemplate } from '@/components/pages/ServicePageTemplate';
import { upholsteryCleaningWilmslow } from '@/data/wilmslow/car-valeting/upholstery-cleaning';

export const dynamic = 'force-static';
export const revalidate = 86400;

export const metadata: Metadata = {
  title: upholsteryCleaningWilmslow.seo.title,
  description: upholsteryCleaningWilmslow.seo.description,
  keywords: upholsteryCleaningWilmslow.seo.keywords,
  alternates: {
    canonical: upholsteryCleaningWilmslow.seo.canonical,
    languages: { 'en-GB': upholsteryCleaningWilmslow.seo.canonical },
  },
  robots: { index: true, follow: true },
  other: {
    'geo.region': 'GB-CHE',
    'geo.placename': 'Wilmslow, Cheshire East',
    'geo.position': '53.3271;-2.2336',
  },
};

export default function WilmslowUpholsteryCleaningPage() {
  return <ServicePageTemplate data={upholsteryCleaningWilmslow} location="Wilmslow" />;
}
