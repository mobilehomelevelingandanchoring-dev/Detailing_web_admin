import type { Metadata } from 'next';
import { ServicePageTemplate } from '@/components/pages/ServicePageTemplate';
import { newCarProtectionWilmslow } from '@/data/wilmslow/car-detailing/new-car-protection';

export const dynamic = 'force-static';
export const revalidate = 86400;

export const metadata: Metadata = {
  title: newCarProtectionWilmslow.seo.title,
  description: newCarProtectionWilmslow.seo.description,
  keywords: newCarProtectionWilmslow.seo.keywords,
  alternates: {
    canonical: newCarProtectionWilmslow.seo.canonical,
    languages: { 'en-GB': newCarProtectionWilmslow.seo.canonical },
  },
  robots: { index: true, follow: true },
  other: {
    'geo.region': 'GB-CHE',
    'geo.placename': 'Wilmslow, Cheshire East',
    'geo.position': '53.3271;-2.2336',
  },
};

export default function WilmslowNewCarProtectionPage() {
  return <ServicePageTemplate data={newCarProtectionWilmslow} location="Wilmslow" />;
}
