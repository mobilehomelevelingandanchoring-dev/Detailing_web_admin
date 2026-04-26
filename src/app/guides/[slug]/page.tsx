import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { GuidePageTemplate } from '@/components/pages/GuidePageTemplate';
import { getGuideBySlug, getAllGuideSlugs } from '@/data/guides/guides-data';
import { breadcrumbJsonLd, HOME, GUIDES, BASE } from '@/lib/breadcrumb';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllGuideSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) return {};
  return {
    title: guide.seo.title,
    description: guide.seo.description,
    keywords: guide.seo.keywords,
    alternates: { canonical: guide.seo.canonical },
  };
}

export default async function GuidePage({ params }: Props) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) notFound();
  const crumbs = breadcrumbJsonLd([
    HOME,
    GUIDES,
    { name: guide.seo.title, url: `${BASE}/guides/${slug}` },
  ]);
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbs) }} />
      <GuidePageTemplate data={guide} />
    </>
  );
}
