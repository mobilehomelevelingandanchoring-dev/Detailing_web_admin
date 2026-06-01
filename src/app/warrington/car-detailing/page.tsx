import type { Metadata } from 'next';
import { PillarPageTemplate } from '@/components/pages/PillarPageTemplate';
import { warringtonCarDetailingPillar } from '@/data/warrington/car-detailing';

export const metadata: Metadata = {
  title: warringtonCarDetailingPillar.seo.title,
  description: warringtonCarDetailingPillar.seo.description,
  keywords: warringtonCarDetailingPillar.seo.keywords,
  alternates: { canonical: warringtonCarDetailingPillar.seo.canonical },
};

export default function WarringtonCarDetailingPage() {
  return <PillarPageTemplate data={warringtonCarDetailingPillar} location="Warrington" />;
}
