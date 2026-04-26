import type { Metadata } from 'next';
import { ServicePageTemplate } from '@/components/pages/ServicePageTemplate';
import { miniValetWarrington } from '@/data/warrington/car-valeting/mini-valet';

export const metadata: Metadata = {
  title: miniValetWarrington.seo.title,
  description: miniValetWarrington.seo.description,
  keywords: miniValetWarrington.seo.keywords,
  alternates: { canonical: miniValetWarrington.seo.canonical },
};

export default function MiniValetWarringtonPage() {
  return <ServicePageTemplate data={miniValetWarrington} location="Warrington" />;
}
