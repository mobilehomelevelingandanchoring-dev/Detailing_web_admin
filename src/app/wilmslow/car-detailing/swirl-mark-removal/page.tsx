import type { Metadata } from 'next';
import { ServicePageTemplate } from '@/components/pages/ServicePageTemplate';
import { swirlMarkRemovalWilmslow } from '@/data/wilmslow/car-detailing/swirl-mark-removal';

export const dynamic = 'force-static';
export const revalidate = 86400;

export const metadata: Metadata = {
  title: swirlMarkRemovalWilmslow.seo.title,
  description: swirlMarkRemovalWilmslow.seo.description,
  keywords: swirlMarkRemovalWilmslow.seo.keywords,
  alternates: {
    canonical: swirlMarkRemovalWilmslow.seo.canonical,
    languages: { 'en-GB': swirlMarkRemovalWilmslow.seo.canonical },
  },
  robots: { index: true, follow: true },
  other: {
    'geo.region': 'GB-CHE',
    'geo.placename': 'Wilmslow, Cheshire East',
    'geo.position': '53.3271;-2.2336',
  },
};

export default function WilmslowSwirlMarkRemovalPage() {
  return <ServicePageTemplate data={swirlMarkRemovalWilmslow} location="Wilmslow" />;
}
