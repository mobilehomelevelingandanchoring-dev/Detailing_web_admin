import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { SchemaMarkup } from '@/components/seo/SchemaMarkup';
import { HeroSection } from '@/components/shared/HeroSection';
import { ContentSections } from '@/components/shared/ContentSections';
import { FaqAccordion } from '@/components/shared/FaqAccordion';
import { CtaSection } from '@/components/shared/CtaSection';
import { ServiceGrid } from '@/components/shared/ServiceGrid';
import { AreaGrid } from '@/components/shared/AreaGrid';
import { generateLocalBusinessSchema } from '@/lib/schema';
import type { LocationHubData } from '@/data/types';

interface LocationHubTemplateProps {
  data: LocationHubData;
  /**
   * Optional slot rendered after the CTA section and before the footer.
   * Kept optional so that LocationHubTemplate can be reused on any city hub
   * page without automatically inheriting a map — preventing doorway-page
   * duplication across all location hubs.
   *
   * Usage (stockport/page.tsx only):
   *   mapSection={<GoogleMapsEmbed heading="Our Location in Stockport" className="mt-8" />}
   */
  mapSection?: React.ReactNode;
}

export function LocationHubTemplate({ data, mapSection }: LocationHubTemplateProps) {
  const localBusinessSchema = generateLocalBusinessSchema({
    name: `SRV Detailing — ${data.name}`,
    url: data.seo.canonical.replace('https://www.srvdetailing.co.uk', ''),
    description: data.seo.description,
    areaServed: data.areas.map((a) => a.name),
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Navbar />
      <SchemaMarkup schemas={[localBusinessSchema]} />

      <HeroSection
        breadcrumbs={data.breadcrumbs}
        title={data.heroTitle}
        description={data.heroDescription}
        badge={`Serving ${data.name}`}
        heroImages={data.heroImages}
      />

      <main className="max-w-7xl mx-auto px-4 py-16">
        <section className="mb-16">
          <div className="prose prose-lg max-w-none text-slate-700 leading-relaxed">
            <p>{data.introText}</p>
          </div>
        </section>

        <ServiceGrid services={data.pillars} title="Our Services" />
        <AreaGrid areas={data.areas} title={`Areas We Cover in ${data.name}`} />
        <ContentSections sections={data.contentSections} />
        <FaqAccordion faqs={data.faqs} />
        <CtaSection serviceName={`Car Care in ${data.name}`} />
        {mapSection}
      </main>

      <Footer />
    </div>
  );
}
