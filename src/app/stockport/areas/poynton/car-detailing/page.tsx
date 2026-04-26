import type { Metadata } from 'next';
import { PillarPageTemplate } from '@/components/pages/PillarPageTemplate';
import { poyntonCarDetailingPillar } from '@/data/stockport/areas/poynton/car-detailing';

export const metadata: Metadata = {
  title: poyntonCarDetailingPillar.seo.title,
  description: poyntonCarDetailingPillar.seo.description,
  keywords: poyntonCarDetailingPillar.seo.keywords,
  alternates: { canonical: poyntonCarDetailingPillar.seo.canonical },
  robots: 'index, follow',
  openGraph: {
    title: poyntonCarDetailingPillar.seo.title,
    description: poyntonCarDetailingPillar.seo.description,
    url: poyntonCarDetailingPillar.seo.canonical,
    siteName: 'SRV Detailing',
    locale: 'en_GB',
    type: 'website',
  },
};

export default function PoyntonCarDetailingPage() {
  return <PillarPageTemplate data={poyntonCarDetailingPillar} location="Poynton" />;
}
