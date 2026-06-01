import type { Metadata } from 'next';
import { AreaPageTemplate } from '@/components/pages/AreaPageTemplate';
import { poyntonAreaData } from '@/data/stockport/areas/poynton';

export const metadata: Metadata = {
  title: poyntonAreaData.seo.title,
  description: poyntonAreaData.seo.description,
  keywords: poyntonAreaData.seo.keywords,
  alternates: { canonical: poyntonAreaData.seo.canonical },
  robots: 'index, follow',
  openGraph: {
    title: poyntonAreaData.seo.title,
    description: poyntonAreaData.seo.description,
    url: poyntonAreaData.seo.canonical,
    siteName: 'SRV Detailing',
    locale: 'en_GB',
    type: 'website',
  },
};

export default function PoyntonAreaPage() {
  return <AreaPageTemplate data={poyntonAreaData} />;
}
