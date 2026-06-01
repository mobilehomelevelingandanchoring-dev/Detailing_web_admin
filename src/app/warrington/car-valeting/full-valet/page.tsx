import type { Metadata } from 'next';
import { ServicePageTemplate } from '@/components/pages/ServicePageTemplate';
import { fullValetWarrington } from '@/data/warrington/car-valeting/full-valet';

export const metadata: Metadata = {
  title: fullValetWarrington.seo.title,
  description: fullValetWarrington.seo.description,
  keywords: fullValetWarrington.seo.keywords,
  alternates: { canonical: fullValetWarrington.seo.canonical },
};

export default function FullValetWarringtonPage() {
  return <ServicePageTemplate data={fullValetWarrington} location="Warrington" />;
}
