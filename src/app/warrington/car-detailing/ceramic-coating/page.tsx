import type { Metadata } from 'next';
import { ServicePageTemplate } from '@/components/pages/ServicePageTemplate';
import { ceramicCoatingWarrington } from '@/data/warrington/car-detailing/ceramic-coating';

export const metadata: Metadata = {
  title: ceramicCoatingWarrington.seo.title,
  description: ceramicCoatingWarrington.seo.description,
  keywords: ceramicCoatingWarrington.seo.keywords,
  alternates: { canonical: ceramicCoatingWarrington.seo.canonical },
};

export default function CeramicCoatingWarringtonPage() {
  return <ServicePageTemplate data={ceramicCoatingWarrington} location="Warrington" />;
}
