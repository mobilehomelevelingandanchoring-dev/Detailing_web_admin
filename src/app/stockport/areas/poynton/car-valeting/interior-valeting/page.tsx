import type { Metadata } from 'next';
import { ServicePageTemplate } from '@/components/pages/ServicePageTemplate';
import { interiorValetingPoynton } from '@/data/stockport/areas/poynton/car-valeting/interior-valeting';

export const metadata: Metadata = {
  title: interiorValetingPoynton.seo.title,
  description: interiorValetingPoynton.seo.description,
  keywords: interiorValetingPoynton.seo.keywords,
  alternates: { canonical: interiorValetingPoynton.seo.canonical },
  robots: 'index, follow',
  openGraph: {
    title: interiorValetingPoynton.seo.title,
    description: interiorValetingPoynton.seo.description,
    url: interiorValetingPoynton.seo.canonical,
    siteName: 'SRV Detailing',
    locale: 'en_GB',
    type: 'website',
  },
};

export default function PoyntonInteriorValetingPage() {
  return <ServicePageTemplate data={interiorValetingPoynton} location="Poynton" />;
}
