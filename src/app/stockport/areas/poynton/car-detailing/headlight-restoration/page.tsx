import type { Metadata } from 'next';
import { ServicePageTemplate } from '@/components/pages/ServicePageTemplate';
import { headlightRestorationPoynton } from '@/data/stockport/areas/poynton/car-detailing/headlight-restoration';

export const metadata: Metadata = {
  title: headlightRestorationPoynton.seo.title,
  description: headlightRestorationPoynton.seo.description,
  keywords: headlightRestorationPoynton.seo.keywords,
  alternates: { canonical: headlightRestorationPoynton.seo.canonical },
  robots: 'index, follow',
  openGraph: {
    title: headlightRestorationPoynton.seo.title,
    description: headlightRestorationPoynton.seo.description,
    url: headlightRestorationPoynton.seo.canonical,
    siteName: 'SRV Detailing',
    locale: 'en_GB',
    type: 'website',
  },
};

export default function PoyntonHeadlightRestorationPage() {
  return <ServicePageTemplate data={headlightRestorationPoynton} location="Poynton" />;
}
