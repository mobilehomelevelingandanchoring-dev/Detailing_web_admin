import type { Metadata } from 'next';
import { ServicePageTemplate } from '@/components/pages/ServicePageTemplate';
import { paintCorrectionPoynton } from '@/data/stockport/areas/poynton/car-detailing/paint-correction';

export const metadata: Metadata = {
  title: paintCorrectionPoynton.seo.title,
  description: paintCorrectionPoynton.seo.description,
  keywords: paintCorrectionPoynton.seo.keywords,
  alternates: { canonical: paintCorrectionPoynton.seo.canonical },
  robots: 'index, follow',
  openGraph: {
    title: paintCorrectionPoynton.seo.title,
    description: paintCorrectionPoynton.seo.description,
    url: paintCorrectionPoynton.seo.canonical,
    siteName: 'SRV Detailing',
    locale: 'en_GB',
    type: 'website',
  },
};

export default function PoyntonPaintCorrectionPage() {
  return <ServicePageTemplate data={paintCorrectionPoynton} location="Poynton" />;
}
