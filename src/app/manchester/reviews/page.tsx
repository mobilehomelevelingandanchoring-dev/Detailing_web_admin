import type { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight, Star, Quote } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { CtaSection } from '@/components/shared/CtaSection';

export const metadata: Metadata = {
  title: 'Customer Reviews Manchester | SRV Detailing',
  description:
    'Read customer reviews for SRV Detailing in Manchester. 5-star rated mobile car detailing and valeting service across Greater Manchester.',
  keywords: ['srv detailing reviews', 'car detailing reviews manchester', 'car valeting reviews manchester'],
  alternates: { canonical: 'https://www.srvdetailing.co.uk/manchester/reviews' },
  openGraph: {
    title: 'Customer Reviews Manchester | SRV Detailing',
    description: 'Read customer reviews for SRV Detailing in Manchester. 5-star rated mobile car detailing and valeting service across Greater Manchester.',
    url: 'https://www.srvdetailing.co.uk/manchester/reviews',
    type: 'website',
    locale: 'en_GB',
    siteName: 'SRV Detailing',
    images: [{ url: '/mobile-van.webp', width: 1200, height: 630, alt: 'SRV Detailing mobile valeting van — Manchester' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Customer Reviews Manchester | SRV Detailing',
    description: '5-star rated mobile car detailing and valeting in Manchester. See what our customers say.',
    images: ['/mobile-van.webp'],
  },
};

const reviews = [
  {
    name: 'James T.',
    location: 'Didsbury, M20',
    service: 'Ceramic Coating',
    rating: 5,
    text: 'Incredible transformation on my BMW 3 Series. The ceramic coating has made washing so much easier — water just beads off. Professional service from start to finish.',
  },
  {
    name: 'Sarah M.',
    location: 'Chorlton, M21',
    service: 'Full Valet',
    rating: 5,
    text: 'Best valet I have ever had. The interior was spotless — even got the dog hair out of every crevice. Will definitely be using SRV regularly from now on.',
  },
  {
    name: 'David K.',
    location: 'Altrincham, WA14',
    service: 'Paint Correction',
    rating: 5,
    text: 'My Range Rover had terrible swirl marks from hand car washes. After paint correction it looked better than when I collected it from the dealer. Outstanding work.',
  },
  {
    name: 'Emma R.',
    location: 'Sale, M33',
    service: 'Interior Detailing',
    rating: 5,
    text: 'Two kids and a dog meant my car interior was a disaster zone. SRV brought it back to life — stains gone, smells gone, feels like a new car inside. Highly recommend.',
  },
  {
    name: 'Michael P.',
    location: 'Trafford, M32',
    service: 'New Car Protection',
    rating: 5,
    text: 'Had my new Audi A4 ceramic coated within a week of collection. Great advice on protection packages and the finish is flawless. Peace of mind knowing it is protected.',
  },
  {
    name: 'Lisa H.',
    location: 'City Centre, M1',
    service: 'Maintenance Valet',
    rating: 5,
    text: 'Came to my office car park in Spinningfields and valeted my car while I worked. Convenient, professional and the car looked fantastic. Perfect city centre service.',
  },
];

const reviewsSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'LocalBusiness',
      '@id': 'https://www.srvdetailing.co.uk/#business',
      'name': 'SRV Detailing',
      'aggregateRating': {
        '@type': 'AggregateRating',
        'ratingValue': '5',
        'reviewCount': String(reviews.length),
        'bestRating': '5',
        'worstRating': '1',
      },
      'review': reviews.map((r) => ({
        '@type': 'Review',
        'author': { '@type': 'Person', 'name': r.name },
        'reviewRating': { '@type': 'Rating', 'ratingValue': String(r.rating), 'bestRating': '5' },
        'reviewBody': r.text,
        'name': r.service,
      })),
    },
    {
      '@type': 'BreadcrumbList',
      'itemListElement': [
        { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://www.srvdetailing.co.uk' },
        { '@type': 'ListItem', 'position': 2, 'name': 'Manchester', 'item': 'https://www.srvdetailing.co.uk/manchester' },
        { '@type': 'ListItem', 'position': 3, 'name': 'Reviews', 'item': 'https://www.srvdetailing.co.uk/manchester/reviews' },
      ],
    },
  ],
};

export default function ManchesterReviewsPage() {
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
              <li><Link href="/manchester" className="hover:text-primary">Manchester</Link></li>
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
            Manchester Customer <span className="text-primary">Reviews</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See what our Manchester customers say about our mobile car detailing and valeting service. 5-star rated across Google Reviews.
          </p>
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

        <CtaSection serviceName="Car Care in Manchester" />
      </main>

      <Footer />
    </div>
  );
}
