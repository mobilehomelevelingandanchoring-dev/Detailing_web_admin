import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { BlogPostPageTemplate } from '@/components/pages/BlogPostPageTemplate';
import { getBlogPostBySlug, getAllBlogSlugs } from '@/data/blog/blog-data';
import { breadcrumbJsonLd, HOME, BLOG, BASE } from '@/lib/breadcrumb';

// Static generation: pre-render every known blog post at build time.
// Removes the cold-start penalty of force-dynamic and ensures posts are
// included in the build output — preventing 404s on first visit after deploy.
export async function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }));
}

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.seo.title,
    description: post.seo.description,
    keywords: post.seo.keywords,
    alternates: { canonical: post.seo.canonical },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();
  const crumbs = breadcrumbJsonLd([
    HOME,
    BLOG,
    { name: post.seo.title, url: `${BASE}/blog/${slug}` },
  ]);
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbs) }} />
      <BlogPostPageTemplate data={post} />
    </>
  );
}
