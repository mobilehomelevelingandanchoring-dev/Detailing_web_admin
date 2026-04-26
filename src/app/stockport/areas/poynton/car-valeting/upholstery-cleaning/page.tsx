import type { Metadata } from 'next';
import { ServicePageTemplate } from '@/components/pages/ServicePageTemplate';
import { upholsteryCleaningPoynton } from '@/data/stockport/areas/poynton/car-valeting/upholstery-cleaning';

export const metadata: Metadata = {
  title: upholsteryCleaningPoynton.seo.title,
  description: upholsteryCleaningPoynton.seo.description,
  keywords: upholsteryCleaningPoynton.seo.keywords,
  alternates: { canonical: upholsteryCleaningPoynton.seo.canonical },
  robots: 'index, follow',
  openGraph: {
    title: upholsteryCleaningPoynton.seo.title,
    description: upholsteryCleaningPoynton.seo.description,
    url: upholsteryCleaningPoynton.seo.canonical,
    siteName: 'SRV Detailing',
    locale: 'en_GB',
    type: 'website',
  },
};

export default function PoyntonUpholsteryCleaningPage() {
  return <ServicePageTemplate data={upholsteryCleaningPoynton} location="Poynton" />;
}
