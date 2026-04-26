import type { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight, Star, Quote } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { CtaSection } from '@/components/shared/CtaSection';

export const dynamic = 'force-static';
export const revalidate = 86400;

export const metadata: Metadata = {
  title: 'Customer Reviews Wilmslow | SRV Detailing',
  description:
    'Read customer reviews for SRV Detailing in Wilmslow. 5-star rated mobile car detailing and valeting service across SK9 and Cheshire East — prestige vehicle specialists.',
  keywords: ['srv detailing reviews wilmslow', 'car detailing reviews wilmslow', 'car valeting reviews wilmslow sk9'],
  alternates: {
    canonical: 'https://www.srvdetailing.co.uk/wilmslow/reviews',
    languages: { 'en-GB': 'https://www.srvdetailing.co.uk/wilmslow/reviews' },
  },
  robots: { index: true, follow: true },
  other: {
    'geo.region': 'GB-CHE',
    'geo.placename': 'Wilmslow, Cheshire East',
    'geo.position': '53.3271;-2.2336',
  },
  openGraph: {
    title: 'Customer Reviews Wilmslow | SRV Detailing',
    description: 'Read customer reviews for SRV Detailing in Wilmslow. 5-star rated mobile car detailing and valeting service across SK9.',
    url: 'https://www.srvdetailing.co.uk/wilmslow/reviews',
    type: 'website',
    locale: 'en_GB',
    siteName: 'SRV Detailing',
    images: [{ url: '/mobile-van.webp', width: 1200, height: 630, alt: 'SRV Detailing mobile valeting — Wilmslow SK9' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Customer Reviews Wilmslow | SRV Detailing',
    description: '5-star rated mobile car detailing and valeting in Wilmslow. See what our customers say.',
    images: ['/mobile-van.webp'],
  },
};

const reviews = [
  {
    name: 'James W.',
    location: 'Alderley Edge, SK9',
    service: 'Ceramic Coating',
    rating: 5,
    text: "Had my Porsche 911 ceramic coated after reading about SRV Detailing in Wilmslow. The paint correction and coating work is exceptional — the depth and clarity of the paint is better than when the car left Stuttgart. Completely professional from start to finish.",
  },
  {
    name: 'Sarah P.',
    location: 'Wilmslow, SK9',
    service: 'Full Valet',
    rating: 5,
    text: "Regular customer for our Range Rover — monthly full valets since last spring. Always on time, always thorough, always discreet on the driveway. The car looks genuinely showroom-fresh every time they leave. Absolutely worth it.",
  },
  {
    name: 'Richard H.',
    location: 'Prestbury, SK10',
    service: 'Paint Correction',
    rating: 5,
    text: "My AMG C63 had swirl marks from three years of automated car washes. After a two-stage paint correction by SRV, the car looks better than when I bought it. I had no idea correction could make that difference. Booked the ceramic coating follow-up straight away.",
  },
  {
    name: 'Claire M.',
    location: 'Knutsford, WA16',
    service: 'Interior Detailing',
    rating: 5,
    text: "Two dogs and a lot of country walks later, the Defender interior needed serious attention. SRV transformed it — the leather conditioning in particular was brilliant. The hot water extraction on the boot carpet got out stains I thought were permanent.",
  },
  {
    name: 'Tom B.',
    location: 'Handforth, SK9',
    service: 'New Car Protection',
    rating: 5,
    text: "Booked new car protection for a new Cayenne on collection day. SRV came to us the following morning and applied a premium ceramic coating after a light correction. Couldn't be happier — the A34 salt and airport grime just beads straight off.",
  },
  {
    name: 'Amanda L.',
    location: 'Cheadle Hulme, SK8',
    service: 'Pet Hair Removal',
    rating: 5,
    text: "Three Labradors in a BMW X5 is not a good combination for the interior. SRV extracted every hair and deodorised the whole cabin — it genuinely smells and looks like a new car again. The team was professional and thorough throughout.",
  },
];

const reviewsSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'LocalBusiness',
      '@id': 'https://www.srvdetailing.co.uk/#business',
      name: 'SRV Detailing',
      telephone: '+44-7375-759686',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Globe House, Globe Lane',
        addressLocality: 'Dukinfield',
        postalCode: 'SK16 4RG',
        addressCountry: 'GB',
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '5',
        reviewCount: String(reviews.length),
        bestRating: '5',
        worstRating: '1',
      },
      review: reviews.map((r) => ({
        '@type': 'Review',
        author: { '@type': 'Person', name: r.name },
        reviewRating: { '@type': 'Rating', ratingValue: String(r.rating), bestRating: '5' },
        reviewBody: r.text,
        name: r.service,
      })),
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.srvdetailing.co.uk' },
        { '@type': 'ListItem', position: 2, name: 'Wilmslow', item: 'https://www.srvdetailing.co.uk/wilmslow' },
        { '@type': 'ListItem', position: 3, name: 'Reviews', item: 'https://www.srvdetailing.co.uk/wilmslow/reviews' },
      ],
    },
    {
      '@type': 'WebPage',
      '@id': 'https://www.srvdetailing.co.uk/wilmslow/reviews#webpage',
      url: 'https://www.srvdetailing.co.uk/wilmslow/reviews',
      name: 'Customer Reviews Wilmslow | SRV Detailing',
      isPartOf: { '@id': 'https://www.srvdetailing.co.uk/#website' },
      breadcrumb: { '@id': 'https://www.srvdetailing.co.uk/wilmslow/reviews#breadcrumb' },
    },
  ],
};

export default function WilmslowReviewsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewsSchema) }} />
      <Navbar />

      <section className="pt-32 pb-16 bg-gradient-to-b from-primary/5 to-white px-4">
        <div className="max-w-4xl mx-auto text-center">
          <nav aria-label="Breadcrumb" className="mb-6 text-sm text-muted-foreground">
            <ol className="flex items-center justify-center gap-1.5">
              <li><Link href="/" className="hover:text-primary">Home</Link></li>
              <li><ChevronRight className="w-3.5 h-3.5 inline" /></li>
              <li><Link href="/wilmslow" className="hover:text-primary">Wilmslow</Link></li>
              <li><ChevronRight className="w-3.5 h-3.5 inline" /></li>
              <li className="text-foreground font-medium">Reviews</li>
            </ol>
          </nav>

          <div className="flex items-center justify-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Wilmslow Customer <span className="text-primary">Reviews</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See what our Wilmslow and SK9 customers say about our mobile car detailing and valeting service — specialist care for prestige vehicles across Cheshire East.
          </p>
          <div className="mt-6 inline-flex items-center gap-3 bg-white border border-gray-200 rounded-xl px-5 py-3 shadow-sm text-sm text-muted-foreground">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="font-semibold text-foreground">5.0</span>
            <span>·</span>
            <span>★★★★★ | Insured | SK9 | Same Week</span>
          </div>
        </div>
      </section>

      <main className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm"
            >
              <Quote className="w-8 h-8 text-primary/20 mb-4" />
              <p className="text-muted-foreground leading-relaxed mb-4">
                &ldquo;{review.text}&rdquo;
              </p>
              <div className="flex items-center gap-1 mb-3">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="font-semibold text-foreground">{review.name}</p>
              <p className="text-sm text-muted-foreground">
                {review.location} &middot; {review.service}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mb-16">
          <a
            href="https://share.google/PfnRYKg7cZGw1Ozcq"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
          >
            See all our Google Reviews
            <ChevronRight className="w-4 h-4" />
          </a>
        </div>

        <div className="bg-primary/5 border border-primary/10 rounded-2xl p-8 mb-16 text-center">
          <h2 className="text-2xl font-bold text-foreground mb-3">Why Wilmslow Trusts SRV Detailing</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6 text-sm">
            {[
              { label: '22+ Years', sub: 'Professional experience' },
              { label: 'Fully Insured', sub: 'Motor trade coverage' },
              { label: 'SK9 Based', sub: 'Same-week availability' },
              { label: 'Prestige Specialist', sub: 'Porsche, Bentley, AMG' },
            ].map((item) => (
              <div key={item.label} className="bg-white rounded-xl p-4 shadow-sm">
                <p className="font-bold text-primary text-lg">{item.label}</p>
                <p className="text-muted-foreground text-xs mt-1">{item.sub}</p>
              </div>
            ))}
          </div>
        </div>

        <CtaSection serviceName="Car Care in Wilmslow" />
      </main>

      <Footer />
    </div>
  );
}
