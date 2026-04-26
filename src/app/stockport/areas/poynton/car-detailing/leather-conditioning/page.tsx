import type { Metadata } from 'next';
import { ServicePageTemplate } from '@/components/pages/ServicePageTemplate';
import { leatherConditioningPoynton } from '@/data/stockport/areas/poynton/car-detailing/leather-conditioning';

export const metadata: Metadata = {
  title: leatherConditioningPoynton.seo.title,
  description: leatherConditioningPoynton.seo.description,
  keywords: leatherConditioningPoynton.seo.keywords,
  alternates: { canonical: leatherConditioningPoynton.seo.canonical },
  robots: 'index, follow',
  openGraph: {
    title: leatherConditioningPoynton.seo.title,
    description: leatherConditioningPoynton.seo.description,
    url: leatherConditioningPoynton.seo.canonical,
    siteName: 'SRV Detailing',
    locale: 'en_GB',
    type: 'website',
  },
};

export default function PoyntonLeatherConditioningPage() {
  return <ServicePageTemplate data={leatherConditioningPoynton} location="Poynton" />;
}
