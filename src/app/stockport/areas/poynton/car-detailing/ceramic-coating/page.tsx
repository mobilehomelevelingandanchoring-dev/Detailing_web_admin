import type { Metadata } from 'next';
import { ServicePageTemplate } from '@/components/pages/ServicePageTemplate';
import { ceramicCoatingPoynton } from '@/data/stockport/areas/poynton/car-detailing/ceramic-coating';

export const metadata: Metadata = {
  title: ceramicCoatingPoynton.seo.title,
  description: ceramicCoatingPoynton.seo.description,
  keywords: ceramicCoatingPoynton.seo.keywords,
  alternates: { canonical: ceramicCoatingPoynton.seo.canonical },
  robots: 'index, follow',
  openGraph: {
    title: ceramicCoatingPoynton.seo.title,
    description: ceramicCoatingPoynton.seo.description,
    url: ceramicCoatingPoynton.seo.canonical,
    siteName: 'SRV Detailing',
    locale: 'en_GB',
    type: 'website',
  },
};

export default function PoyntonCeramicCoatingPage() {
  return <ServicePageTemplate data={ceramicCoatingPoynton} location="Poynton" />;
}
