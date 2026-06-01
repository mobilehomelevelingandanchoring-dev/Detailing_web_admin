import type { Metadata } from 'next';
import { ServicePageTemplate } from '@/components/pages/ServicePageTemplate';
import { petHairRemovalWilmslow } from '@/data/wilmslow/car-valeting/pet-hair-removal';

export const dynamic = 'force-static';
export const revalidate = 86400;

export const metadata: Metadata = {
  title: petHairRemovalWilmslow.seo.title,
  description: petHairRemovalWilmslow.seo.description,
  keywords: petHairRemovalWilmslow.seo.keywords,
  alternates: {
    canonical: petHairRemovalWilmslow.seo.canonical,
    languages: { 'en-GB': petHairRemovalWilmslow.seo.canonical },
  },
  robots: { index: true, follow: true },
  other: {
    'geo.region': 'GB-CHE',
    'geo.placename': 'Wilmslow, Cheshire East',
    'geo.position': '53.3271;-2.2336',
  },
};

export default function WilmslowPetHairRemovalPage() {
  return <ServicePageTemplate data={petHairRemovalWilmslow} location="Wilmslow" />;
}
