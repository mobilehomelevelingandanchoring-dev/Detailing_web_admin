import type { Metadata } from 'next';
import { ServicePageTemplate } from '@/components/pages/ServicePageTemplate';
import { swirlMarkRemovalPoynton } from '@/data/stockport/areas/poynton/car-detailing/swirl-mark-removal';

export const metadata: Metadata = {
  title: swirlMarkRemovalPoynton.seo.title,
  description: swirlMarkRemovalPoynton.seo.description,
  keywords: swirlMarkRemovalPoynton.seo.keywords,
  alternates: { canonical: swirlMarkRemovalPoynton.seo.canonical },
  robots: 'index, follow',
  openGraph: {
    title: swirlMarkRemovalPoynton.seo.title,
    description: swirlMarkRemovalPoynton.seo.description,
    url: swirlMarkRemovalPoynton.seo.canonical,
    siteName: 'SRV Detailing',
    locale: 'en_GB',
    type: 'website',
  },
};

export default function PoyntonSwirlMarkRemovalPage() {
  return <ServicePageTemplate data={swirlMarkRemovalPoynton} location="Poynton" />;
}
