import type { Metadata } from 'next';
import { ServicePageTemplate } from '@/components/pages/ServicePageTemplate';
import { paintCorrectionWarrington } from '@/data/warrington/car-detailing/paint-correction';

export const metadata: Metadata = {
  title: paintCorrectionWarrington.seo.title,
  description: paintCorrectionWarrington.seo.description,
  keywords: paintCorrectionWarrington.seo.keywords,
  alternates: { canonical: paintCorrectionWarrington.seo.canonical },
};

export default function PaintCorrectionWarringtonPage() {
  return <ServicePageTemplate data={paintCorrectionWarrington} location="Warrington" />;
}
