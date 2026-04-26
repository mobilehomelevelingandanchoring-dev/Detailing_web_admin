import type { Metadata } from 'next';
import { ServicePageTemplate } from '@/components/pages/ServicePageTemplate';
import { mobileValetingPoynton } from '@/data/stockport/areas/poynton/car-valeting/mobile-valeting';

export const metadata: Metadata = {
  title: mobileValetingPoynton.seo.title,
  description: mobileValetingPoynton.seo.description,
  keywords: mobileValetingPoynton.seo.keywords,
  alternates: { canonical: mobileValetingPoynton.seo.canonical },
  robots: 'index, follow',
  openGraph: {
    title: mobileValetingPoynton.seo.title,
    description: mobileValetingPoynton.seo.description,
    url: mobileValetingPoynton.seo.canonical,
    siteName: 'SRV Detailing',
    locale: 'en_GB',
    type: 'website',
  },
};

export default function PoyntonMobileValetingPage() {
  return <ServicePageTemplate data={mobileValetingPoynton} location="Poynton" />;
}
