import type { Metadata } from 'next';
import { ServicePageTemplate } from '@/components/pages/ServicePageTemplate';
import { petHairRemovalPoynton } from '@/data/stockport/areas/poynton/car-valeting/pet-hair-removal';

export const metadata: Metadata = {
  title: petHairRemovalPoynton.seo.title,
  description: petHairRemovalPoynton.seo.description,
  keywords: petHairRemovalPoynton.seo.keywords,
  alternates: { canonical: petHairRemovalPoynton.seo.canonical },
  robots: 'index, follow',
  openGraph: {
    title: petHairRemovalPoynton.seo.title,
    description: petHairRemovalPoynton.seo.description,
    url: petHairRemovalPoynton.seo.canonical,
    siteName: 'SRV Detailing',
    locale: 'en_GB',
    type: 'website',
  },
};

export default function PoyntonPetHairRemovalPage() {
  return <ServicePageTemplate data={petHairRemovalPoynton} location="Poynton" />;
}
