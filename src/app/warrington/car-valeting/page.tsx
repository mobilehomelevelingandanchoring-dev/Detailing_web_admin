import type { Metadata } from 'next';
import { PillarPageTemplate } from '@/components/pages/PillarPageTemplate';
import { warringtonCarValetingPillar } from '@/data/warrington/car-valeting';

export const metadata: Metadata = {
  title: warringtonCarValetingPillar.seo.title,
  description: warringtonCarValetingPillar.seo.description,
  keywords: warringtonCarValetingPillar.seo.keywords,
  alternates: { canonical: warringtonCarValetingPillar.seo.canonical },
};

export default function WarringtonCarValetingPage() {
  return <PillarPageTemplate data={warringtonCarValetingPillar} location="Warrington" />;
}
