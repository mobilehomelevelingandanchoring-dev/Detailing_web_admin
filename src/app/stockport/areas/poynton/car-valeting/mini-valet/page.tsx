import type { Metadata } from 'next';
import { ServicePageTemplate } from '@/components/pages/ServicePageTemplate';
import { miniValetPoynton } from '@/data/stockport/areas/poynton/car-valeting/mini-valet';

export const metadata: Metadata = {
  title: miniValetPoynton.seo.title,
  description: miniValetPoynton.seo.description,
  keywords: miniValetPoynton.seo.keywords,
  alternates: { canonical: miniValetPoynton.seo.canonical },
  robots: 'index, follow',
  openGraph: {
    title: miniValetPoynton.seo.title,
    description: miniValetPoynton.seo.description,
    url: miniValetPoynton.seo.canonical,
    siteName: 'SRV Detailing',
    locale: 'en_GB',
    type: 'website',
  },
};

export default function PoyntonMiniValetPage() {
  return <ServicePageTemplate data={miniValetPoynton} location="Poynton" />;
}
