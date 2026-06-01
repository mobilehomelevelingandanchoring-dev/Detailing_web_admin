import type { Metadata } from 'next';
import { ServicePageTemplate } from '@/components/pages/ServicePageTemplate';
import { exteriorDetailingWarrington } from '@/data/warrington/car-detailing/exterior-detailing';

export const metadata: Metadata = {
  title: exteriorDetailingWarrington.seo.title,
  description: exteriorDetailingWarrington.seo.description,
  keywords: exteriorDetailingWarrington.seo.keywords,
  alternates: { canonical: exteriorDetailingWarrington.seo.canonical },
};

export default function ExteriorDetailingWarringtonPage() {
  return <ServicePageTemplate data={exteriorDetailingWarrington} location="Warrington" />;
}
