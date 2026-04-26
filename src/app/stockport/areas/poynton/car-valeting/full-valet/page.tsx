import type { Metadata } from 'next';
import { ServicePageTemplate } from '@/components/pages/ServicePageTemplate';
import { fullValetPoynton } from '@/data/stockport/areas/poynton/car-valeting/full-valet';

export const metadata: Metadata = {
  title: fullValetPoynton.seo.title,
  description: fullValetPoynton.seo.description,
  keywords: fullValetPoynton.seo.keywords,
  alternates: { canonical: fullValetPoynton.seo.canonical },
  robots: 'index, follow',
  openGraph: {
    title: fullValetPoynton.seo.title,
    description: fullValetPoynton.seo.description,
    url: fullValetPoynton.seo.canonical,
    siteName: 'SRV Detailing',
    locale: 'en_GB',
    type: 'website',
  },
};

export default function PoyntonFullValetPage() {
  return <ServicePageTemplate data={fullValetPoynton} location="Poynton" />;
}
