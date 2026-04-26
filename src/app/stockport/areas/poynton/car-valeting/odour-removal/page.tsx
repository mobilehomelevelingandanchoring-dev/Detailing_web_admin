import type { Metadata } from 'next';
import { ServicePageTemplate } from '@/components/pages/ServicePageTemplate';
import { odourRemovalPoynton } from '@/data/stockport/areas/poynton/car-valeting/odour-removal';

export const metadata: Metadata = {
  title: odourRemovalPoynton.seo.title,
  description: odourRemovalPoynton.seo.description,
  keywords: odourRemovalPoynton.seo.keywords,
  alternates: { canonical: odourRemovalPoynton.seo.canonical },
  robots: 'index, follow',
  openGraph: {
    title: odourRemovalPoynton.seo.title,
    description: odourRemovalPoynton.seo.description,
    url: odourRemovalPoynton.seo.canonical,
    siteName: 'SRV Detailing',
    locale: 'en_GB',
    type: 'website',
  },
};

export default function PoyntonOdourRemovalPage() {
  return <ServicePageTemplate data={odourRemovalPoynton} location="Poynton" />;
}
