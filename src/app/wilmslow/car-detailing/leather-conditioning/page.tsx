import type { Metadata } from 'next';
import { ServicePageTemplate } from '@/components/pages/ServicePageTemplate';
import { leatherConditioningWilmslow } from '@/data/wilmslow/car-detailing/leather-conditioning';

export const dynamic = 'force-static';
export const revalidate = 86400;

export const metadata: Metadata = {
  title: leatherConditioningWilmslow.seo.title,
  description: leatherConditioningWilmslow.seo.description,
  keywords: leatherConditioningWilmslow.seo.keywords,
  alternates: {
    canonical: leatherConditioningWilmslow.seo.canonical,
    languages: { 'en-GB': leatherConditioningWilmslow.seo.canonical },
  },
  robots: { index: true, follow: true },
  other: {
    'geo.region': 'GB-CHE',
    'geo.placename': 'Wilmslow, Cheshire East',
    'geo.position': '53.3271;-2.2336',
  },
};

export default function WilmslowLeatherConditioningPage() {
  return <ServicePageTemplate data={leatherConditioningWilmslow} location="Wilmslow" />;
}
