import type { Metadata } from 'next';
import { LocationHubTemplate } from '@/components/pages/LocationHubTemplate';
import { stockportHub } from '@/data/stockport/hub';
import { GoogleMapsEmbed } from '@/components/GoogleMapsEmbed';

// ── Supplemental LocalBusiness schema ────────────────────────────────────────
// Uses @id to MERGE with the root-layout entity rather than creating a
// duplicate business node. Adding `hasMap` here links the verified Google Maps
// place (by place ID inside the embed URL) to the /stockport canonical page —
// a strong local entity disambiguation signal for Google's Knowledge Graph.
// `areaServed` is scoped to Stockport specifically on this page; the broader
// Greater Manchester coverage lives in the root layout schema.
const stockportMapSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://www.srvdetailing.co.uk/#business',
  name: 'SRV Detailing',
  url: 'https://www.srvdetailing.co.uk/stockport',
  hasMap: 'https://share.google/AZFyOF2xIb3XaZetX',
  areaServed: [
    { '@type': 'City', name: 'Stockport' },
    { '@type': 'AdministrativeArea', name: 'Greater Manchester' },
  ],
};

export const metadata: Metadata = {
  title: stockportHub.seo.title,
  description: stockportHub.seo.description,
  keywords: stockportHub.seo.keywords,
  alternates: { canonical: stockportHub.seo.canonical },
};

export default function StockportPage() {
  return (
    <>
      {/* Supplemental schema — merges hasMap into the global business entity */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(stockportMapSchema) }}
      />
      <LocationHubTemplate
        data={stockportHub}
        mapSection={
          <GoogleMapsEmbed
            heading="Our Location in Stockport"
            className="mt-16"
          />
        }
      />
    </>
  );
}
