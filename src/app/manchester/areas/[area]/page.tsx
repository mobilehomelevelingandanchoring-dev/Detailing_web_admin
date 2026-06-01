import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { AreaPageTemplate } from '@/components/pages/AreaPageTemplate';
import { getManchesterAreaBySlug, getAllManchesterAreaSlugs } from '@/data/manchester/areas/areas-data';
import { breadcrumbJsonLd, HOME, MANCHESTER, MANCHESTER_AREAS, BASE, slugToName } from '@/lib/breadcrumb';

interface Props {
  params: Promise<{ area: string }>;
}

export async function generateStaticParams() {
  return getAllManchesterAreaSlugs().map((area) => ({ area }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { area } = await params;
  const data = getManchesterAreaBySlug(area);
  if (!data) return {};
  return {
    title: data.seo.title,
    description: data.seo.description,
    keywords: data.seo.keywords,
    alternates: { canonical: data.seo.canonical },
  };
}

export default async function ManchesterAreaPage({ params }: Props) {
  const { area } = await params;
  const data = getManchesterAreaBySlug(area);
  if (!data) notFound();
  const crumbs = breadcrumbJsonLd([
    HOME,
    MANCHESTER,
    MANCHESTER_AREAS,
    { name: slugToName(area), url: `${BASE}/manchester/areas/${area}` },
  ]);
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbs) }} />
      <AreaPageTemplate data={data} />
    </>
  );
}
