import type { Metadata } from 'next';
import { PillarPageTemplate } from '@/components/pages/PillarPageTemplate';
import { poyntonCarValetingPillar } from '@/data/stockport/areas/poynton/car-valeting';

export const metadata: Metadata = {
  title: poyntonCarValetingPillar.seo.title,
  description: poyntonCarValetingPillar.seo.description,
  keywords: poyntonCarValetingPillar.seo.keywords,
  alternates: { canonical: poyntonCarValetingPillar.seo.canonical },
  robots: 'index, follow',
  openGraph: {
    title: poyntonCarValetingPillar.seo.title,
    description: poyntonCarValetingPillar.seo.description,
    url: poyntonCarValetingPillar.seo.canonical,
    siteName: 'SRV Detailing',
    locale: 'en_GB',
    type: 'website',
  },
};

export default function PoyntonCarValetingPage() {
  return <PillarPageTemplate data={poyntonCarValetingPillar} location="Poynton" />;
}
