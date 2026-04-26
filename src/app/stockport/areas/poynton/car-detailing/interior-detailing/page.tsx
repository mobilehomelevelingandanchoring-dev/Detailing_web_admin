import type { Metadata } from 'next';
import { ServicePageTemplate } from '@/components/pages/ServicePageTemplate';
import { interiorDetailingPoynton } from '@/data/stockport/areas/poynton/car-detailing/interior-detailing';

export const metadata: Metadata = {
  title: interiorDetailingPoynton.seo.title,
  description: interiorDetailingPoynton.seo.description,
  keywords: interiorDetailingPoynton.seo.keywords,
  alternates: { canonical: interiorDetailingPoynton.seo.canonical },
  robots: 'index, follow',
  openGraph: {
    title: interiorDetailingPoynton.seo.title,
    description: interiorDetailingPoynton.seo.description,
    url: interiorDetailingPoynton.seo.canonical,
    siteName: 'SRV Detailing',
    locale: 'en_GB',
    type: 'website',
  },
};

export default function PoyntonInteriorDetailingPage() {
  return <ServicePageTemplate data={interiorDetailingPoynton} location="Poynton" />;
}
