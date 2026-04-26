import type { Metadata } from 'next';
import { ServicePageTemplate } from '@/components/pages/ServicePageTemplate';
import { mobileValetingWarrington } from '@/data/warrington/car-valeting/mobile-valeting';

export const metadata: Metadata = {
  title: mobileValetingWarrington.seo.title,
  description: mobileValetingWarrington.seo.description,
  keywords: mobileValetingWarrington.seo.keywords,
  alternates: { canonical: mobileValetingWarrington.seo.canonical },
};

export default function MobileValetingWarringtonPage() {
  return <ServicePageTemplate data={mobileValetingWarrington} location="Warrington" />;
}
