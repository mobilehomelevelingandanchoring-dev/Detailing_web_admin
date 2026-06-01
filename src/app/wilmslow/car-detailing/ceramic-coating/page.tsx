import type { Metadata } from 'next';
import { ServicePageTemplate } from '@/components/pages/ServicePageTemplate';
import { ceramicCoatingWilmslow } from '@/data/wilmslow/car-detailing/ceramic-coating';

export const dynamic = 'force-static';
export const revalidate = 86400;

export const metadata: Metadata = {
  title: ceramicCoatingWilmslow.seo.title,
  description: ceramicCoatingWilmslow.seo.description,
  keywords: ceramicCoatingWilmslow.seo.keywords,
  alternates: {
    canonical: ceramicCoatingWilmslow.seo.canonical,
    languages: { 'en-GB': ceramicCoatingWilmslow.seo.canonical },
  },
  robots: { index: true, follow: true },
  other: {
    'geo.region': 'GB-CHE',
    'geo.placename': 'Wilmslow, Cheshire East',
    'geo.position': '53.3271;-2.2336',
  },
};

export default function WilmslowCeramicCoatingPage() {
  return <ServicePageTemplate data={ceramicCoatingWilmslow} location="Wilmslow" />;
}
