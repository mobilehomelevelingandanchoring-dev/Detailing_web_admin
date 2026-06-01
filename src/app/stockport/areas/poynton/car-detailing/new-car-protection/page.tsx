import type { Metadata } from 'next';
import { ServicePageTemplate } from '@/components/pages/ServicePageTemplate';
import { newCarProtectionPoynton } from '@/data/stockport/areas/poynton/car-detailing/new-car-protection';

export const metadata: Metadata = {
  title: newCarProtectionPoynton.seo.title,
  description: newCarProtectionPoynton.seo.description,
  keywords: newCarProtectionPoynton.seo.keywords,
  alternates: { canonical: newCarProtectionPoynton.seo.canonical },
  robots: 'index, follow',
  openGraph: {
    title: newCarProtectionPoynton.seo.title,
    description: newCarProtectionPoynton.seo.description,
    url: newCarProtectionPoynton.seo.canonical,
    siteName: 'SRV Detailing',
    locale: 'en_GB',
    type: 'website',
  },
};

export default function PoyntonNewCarProtectionPage() {
  return <ServicePageTemplate data={newCarProtectionPoynton} location="Poynton" />;
}
