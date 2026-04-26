import type { Metadata } from 'next';
import { ServicePageTemplate } from '@/components/pages/ServicePageTemplate';
import { headlightRestorationWilmslow } from '@/data/wilmslow/car-detailing/headlight-restoration';

export const dynamic = 'force-static';
export const revalidate = 86400;

export const metadata: Metadata = {
  title: headlightRestorationWilmslow.seo.title,
  description: headlightRestorationWilmslow.seo.description,
  keywords: headlightRestorationWilmslow.seo.keywords,
  alternates: {
    canonical: headlightRestorationWilmslow.seo.canonical,
    languages: { 'en-GB': headlightRestorationWilmslow.seo.canonical },
  },
  robots: { index: true, follow: true },
  other: {
    'geo.region': 'GB-CHE',
    'geo.placename': 'Wilmslow, Cheshire East',
    'geo.position': '53.3271;-2.2336',
  },
};

export default function WilmslowHeadlightRestorationPage() {
  return <ServicePageTemplate data={headlightRestorationWilmslow} location="Wilmslow" />;
}
