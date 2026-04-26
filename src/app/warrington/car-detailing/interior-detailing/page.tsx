import type { Metadata } from 'next';
import { ServicePageTemplate } from '@/components/pages/ServicePageTemplate';
import { interiorDetailingWarrington } from '@/data/warrington/car-detailing/interior-detailing';

export const metadata: Metadata = {
  title: interiorDetailingWarrington.seo.title,
  description: interiorDetailingWarrington.seo.description,
  keywords: interiorDetailingWarrington.seo.keywords,
  alternates: { canonical: interiorDetailingWarrington.seo.canonical },
};

export default function InteriorDetailingWarringtonPage() {
  return <ServicePageTemplate data={interiorDetailingWarrington} location="Warrington" />;
}
