import type { Metadata } from 'next';
import { ServicePageTemplate } from '@/components/pages/ServicePageTemplate';
import { mobileValetingWilmslow } from '@/data/wilmslow/car-valeting/mobile-valeting';

export const dynamic = 'force-static';
export const revalidate = 86400;

export const metadata: Metadata = {
  title: mobileValetingWilmslow.seo.title,
  description: mobileValetingWilmslow.seo.description,
  keywords: mobileValetingWilmslow.seo.keywords,
  alternates: {
    canonical: mobileValetingWilmslow.seo.canonical,
    languages: { 'en-GB': mobileValetingWilmslow.seo.canonical },
  },
  robots: { index: true, follow: true },
  other: {
    'geo.region': 'GB-CHE',
    'geo.placename': 'Wilmslow, Cheshire East',
    'geo.position': '53.3271;-2.2336',
  },
};

export default function WilmslowMobileValetingPage() {
  return <ServicePageTemplate data={mobileValetingWilmslow} location="Wilmslow" />;
}
