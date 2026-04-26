import type { Metadata } from 'next';
import { ServicePageTemplate } from '@/components/pages/ServicePageTemplate';
import { exteriorValetingPoynton } from '@/data/stockport/areas/poynton/car-valeting/exterior-valeting';

export const metadata: Metadata = {
  title: exteriorValetingPoynton.seo.title,
  description: exteriorValetingPoynton.seo.description,
  keywords: exteriorValetingPoynton.seo.keywords,
  alternates: { canonical: exteriorValetingPoynton.seo.canonical },
  robots: 'index, follow',
  openGraph: {
    title: exteriorValetingPoynton.seo.title,
    description: exteriorValetingPoynton.seo.description,
    url: exteriorValetingPoynton.seo.canonical,
    siteName: 'SRV Detailing',
    locale: 'en_GB',
    type: 'website',
  },
};

export default function PoyntonExteriorValetingPage() {
  return <ServicePageTemplate data={exteriorValetingPoynton} location="Poynton" />;
}
