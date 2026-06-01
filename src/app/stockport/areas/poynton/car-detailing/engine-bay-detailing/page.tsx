import type { Metadata } from 'next';
import { ServicePageTemplate } from '@/components/pages/ServicePageTemplate';
import { engineBayDetailingPoynton } from '@/data/stockport/areas/poynton/car-detailing/engine-bay-detailing';

export const metadata: Metadata = {
  title: engineBayDetailingPoynton.seo.title,
  description: engineBayDetailingPoynton.seo.description,
  keywords: engineBayDetailingPoynton.seo.keywords,
  alternates: { canonical: engineBayDetailingPoynton.seo.canonical },
  robots: 'index, follow',
  openGraph: {
    title: engineBayDetailingPoynton.seo.title,
    description: engineBayDetailingPoynton.seo.description,
    url: engineBayDetailingPoynton.seo.canonical,
    siteName: 'SRV Detailing',
    locale: 'en_GB',
    type: 'website',
  },
};

export default function PoyntonEngineBayDetailingPage() {
  return <ServicePageTemplate data={engineBayDetailingPoynton} location="Poynton" />;
}
