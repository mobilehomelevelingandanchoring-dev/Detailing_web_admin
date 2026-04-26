import type { Metadata } from 'next';
import { ServicePageTemplate } from '@/components/pages/ServicePageTemplate';
import { exteriorDetailingPoynton } from '@/data/stockport/areas/poynton/car-detailing/exterior-detailing';

export const metadata: Metadata = {
  title: exteriorDetailingPoynton.seo.title,
  description: exteriorDetailingPoynton.seo.description,
  keywords: exteriorDetailingPoynton.seo.keywords,
  alternates: { canonical: exteriorDetailingPoynton.seo.canonical },
  robots: 'index, follow',
  openGraph: {
    title: exteriorDetailingPoynton.seo.title,
    description: exteriorDetailingPoynton.seo.description,
    url: exteriorDetailingPoynton.seo.canonical,
    siteName: 'SRV Detailing',
    locale: 'en_GB',
    type: 'website',
  },
};

export default function PoyntonExteriorDetailingPage() {
  return <ServicePageTemplate data={exteriorDetailingPoynton} location="Poynton" />;
}
