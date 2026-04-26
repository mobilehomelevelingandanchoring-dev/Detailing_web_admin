"use client";

/**
 * CustomerReviews
 * ──────────────────────────────────────────────────────────────────────────────
 * Displays real Google reviews with:
 *  - Aggregate rating badge + Google attribution
 *  - Featured cards (primary-accented, larger) for the most compelling reviews
 *  - Standard grid for remaining reviews
 *  - JSON-LD structured data (LocalBusiness > aggregateRating + review[])
 *    for Google rich snippets / local pack star ratings
 *
 * To add more reviews: append to the `reviews` array below.
 * To change which are featured: set featured: true/false.
 * ──────────────────────────────────────────────────────────────────────────────
 */

import Image from "next/image";
import { Star } from "lucide-react";

// ── Review data ────────────────────────────────────────────────────────────────
// Dates are ISO-8601 — calculated from "X months ago" relative to March 2026.
// Featured = top 4 most detailed / trust-signal-rich reviews.
const reviews = [
  {
    id: "lorraine-starr",
    name: "Lorraine Starr",
    rating: 5,
    date: "2026-01-17",
    dateDisplay: "January 2026",
    text: "Anthony came out to sort an issue with paint overspray on my car windscreen. He came early, was very kind and courteous, and diagnosed the problem straight away. He did a thorough job sorting it out. I would highly recommend SRV Detailing to anyone who wants a small job doing or a showroom finish.",
    featured: true,
  },
  {
    id: "hayley-medcalf",
    name: "Hayley Medcalf",
    rating: 5,
    date: "2025-12-17",
    dateDisplay: "December 2025",
    text: "Knowledgeable. Car is extremely clean. Can't recommend enough. Car is showroom sparkling clean every time.",
    featured: true,
  },
  {
    id: "key2-bhp",
    name: "Key2 Bhp",
    rating: 5,
    date: "2025-12-17",
    dateDisplay: "December 2025",
    text: "Love this guy, been doing our car and work vans for some time now — always reliable, vans always look the business when he has finished. Can't recommend enough.",
    featured: true,
  },
  {
    id: "o-g",
    name: "O G",
    rating: 5,
    date: "2026-01-17",
    dateDisplay: "January 2026",
    text: "Top work. Friendly guy. Really puts effort and care into his work. I always use SRV now.",
    featured: true,
  },
  {
    id: "freya-green",
    name: "Freya Green",
    rating: 5,
    date: "2026-02-17",
    dateDisplay: "February 2026",
    text: "Very helpful and friendly staff.",
    featured: false,
  },
  {
    id: "monkey-scaffolding",
    name: "Monkey Scaffolding",
    rating: 5,
    date: "2026-01-17",
    dateDisplay: "January 2026",
    text: "Does my fleet vans and personal — highly recommend.",
    featured: false,
  },
  {
    id: "aaron-rosario-tulloch",
    name: "Aaron Rosario-Tulloch",
    rating: 5,
    date: "2025-12-17",
    dateDisplay: "December 2025",
    text: "Great service and friendly guy, would recommend to anyone.",
    featured: false,
  },
];

// ── JSON-LD structured data ────────────────────────────────────────────────────
const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  "@id": "https://www.srvdetailing.co.uk/#organization",
  name: "SRV Detailing",
  url: "https://www.srvdetailing.co.uk",
  telephone: "+447375759686",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: String(reviews.length),
    bestRating: "5",
    worstRating: "5",
  },
  review: reviews.map((r) => ({
    "@type": "Review",
    author: { "@type": "Person", name: r.name },
    reviewRating: {
      "@type": "Rating",
      ratingValue: String(r.rating),
      bestRating: "5",
      worstRating: "1",
    },
    datePublished: r.date,
    reviewBody: r.text,
    publisher: { "@type": "Organization", name: "Google" },
  })),
};

// ── Sub-components ─────────────────────────────────────────────────────────────

function StarRow({ rating, size = "sm" }: { rating: number; size?: "sm" | "md" }) {
  const px = size === "md" ? "w-5 h-5" : "w-4 h-4";
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`} role="img">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`${px} ${i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
        />
      ))}
    </div>
  );
}

function ReviewerInitial({ name }: { name: string }) {
  // Avatar placeholder — initials in brand colour circle
  const initials = name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
  return (
    <div className="w-10 h-10 rounded-full bg-primary/15 border border-primary/30 flex items-center justify-center flex-shrink-0">
      <span className="text-sm font-bold text-primary leading-none">{initials}</span>
    </div>
  );
}

function FeaturedCard({ review }: { review: (typeof reviews)[number] }) {
  return (
    <article className="relative flex flex-col bg-white border-2 border-primary/25 rounded-2xl p-6 shadow-md hover:shadow-lg hover:border-primary/40 transition-all duration-300">
      {/* Featured badge */}
      <span className="absolute -top-3 left-5 inline-flex items-center gap-1 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
        <Star className="w-3 h-3 fill-current" aria-hidden="true" />
        Featured Review
      </span>

      {/* Decorative quote */}
      <div className="text-5xl font-serif text-primary/20 leading-none mb-2 select-none" aria-hidden="true">
        &ldquo;
      </div>

      {/* Review text */}
      <p className="text-slate-700 leading-relaxed text-sm flex-1 mb-5">
        {review.text}
      </p>

      {/* Reviewer info */}
      <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
        <ReviewerInitial name={review.name} />
        <div className="min-w-0">
          <p className="font-semibold text-slate-900 text-sm truncate">{review.name}</p>
          <div className="flex items-center gap-2 mt-0.5">
            <StarRow rating={review.rating} size="sm" />
            <span className="text-xs text-slate-400">· {review.dateDisplay}</span>
          </div>
        </div>
        {/* Google G attribution */}
        <div
          className="ml-auto w-7 h-7 rounded-full bg-white border border-slate-200 flex items-center justify-center shadow-sm flex-shrink-0"
          title="Google Review"
          aria-label="Google Review"
        >
          <span className="text-xs font-bold text-[#4285F4]">G</span>
        </div>
      </div>
    </article>
  );
}

function RegularCard({ review }: { review: (typeof reviews)[number] }) {
  return (
    <article className="flex flex-col bg-white border border-slate-100 rounded-xl p-5 shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-300">
      {/* Reviewer header */}
      <div className="flex items-center gap-3 mb-4">
        <ReviewerInitial name={review.name} />
        <div className="min-w-0 flex-1">
          <p className="font-semibold text-slate-900 text-sm truncate">{review.name}</p>
          <div className="flex items-center gap-2 mt-0.5">
            <StarRow rating={review.rating} size="sm" />
            <span className="text-xs text-slate-400">· {review.dateDisplay}</span>
          </div>
        </div>
        <div
          className="w-7 h-7 rounded-full bg-white border border-slate-200 flex items-center justify-center shadow-sm flex-shrink-0"
          title="Google Review"
          aria-label="Google Review"
        >
          <span className="text-xs font-bold text-[#4285F4]">G</span>
        </div>
      </div>

      {/* Review text */}
      <p className="text-slate-600 text-sm leading-relaxed flex-1">{review.text}</p>
    </article>
  );
}

// ── Main component ─────────────────────────────────────────────────────────────

export function CustomerReviews() {
  const featured = reviews.filter((r) => r.featured);
  const regular = reviews.filter((r) => !r.featured);

  return (
    <section
      className="relative py-16 sm:py-20 lg:py-24 overflow-hidden"
      aria-labelledby="reviews-heading"
    >
      {/* JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />

      {/* Background gallery image */}
      <Image
        src="/images/gallery/srv-detailing-car-detailing-greater-manchester-stockport-01.webp.webp"
        alt=""
        fill
        className="object-cover object-center"
        sizes="100vw"
        aria-hidden="true"
      />

      {/* Dark overlay — deep enough for card legibility */}
      <div className="absolute inset-0 bg-black/70" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Section header ──────────────────────────────────────────────── */}
        <div className="text-center mb-12">
          {/* Aggregate rating pill */}
          <div className="inline-flex items-center gap-2 bg-white border border-yellow-200 rounded-full px-5 py-2.5 shadow-sm mb-6">
            <StarRow rating={5} size="md" />
            <span className="font-bold text-slate-900 text-base">5.0</span>
            <span className="text-slate-500 text-sm">·</span>
            <span className="text-slate-600 text-sm">Some of our reviews</span>
          </div>

          <h2
            id="reviews-heading"
            className="text-3xl sm:text-4xl font-bold text-white mb-4 drop-shadow-md"
          >
            What Our Customers{" "}
            <span className="text-primary">Say</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Real reviews from real customers across Stockport, Manchester, and Greater Manchester.
            Every one a five-star rating.
          </p>
        </div>

        {/* ── Featured reviews grid ────────────────────────────────────────── */}
        <div className="grid sm:grid-cols-2 gap-8 mb-10 mt-10">
          {featured.map((review) => (
            <FeaturedCard key={review.id} review={review} />
          ))}
        </div>

        {/* ── Regular reviews grid ─────────────────────────────────────────── */}
        {regular.length > 0 && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
            {regular.map((review) => (
              <RegularCard key={review.id} review={review} />
            ))}
          </div>
        )}

        {/* ── QR Review Banner ─────────────────────────────────────────────── */}
        <div className="mt-12 rounded-2xl overflow-hidden bg-slate-900 shadow-xl">
          <div className="flex flex-col md:flex-row items-center gap-0">

            {/* Left: brand accent strip */}
            <div className="hidden md:block w-2 self-stretch bg-primary flex-shrink-0" />

            {/* QR code block */}
            <div className="flex-shrink-0 flex items-center justify-center bg-white p-5 md:rounded-none md:rounded-l-none">
              <div className="relative w-36 h-36 sm:w-40 sm:h-40">
                <Image
                  src="/images/qr-code.webp.webp"
                  alt="QR code — scan with your phone to leave SRV Detailing a 5-star Google review"
                  fill
                  className="object-contain"
                  sizes="160px"
                />
              </div>
            </div>

            {/* Text block */}
            <div className="flex-1 px-8 py-8 text-white">
              <div className="flex items-center gap-2 mb-3">
                {/* Five stars */}
                <div className="flex gap-0.5" aria-hidden="true">
                  {[1,2,3,4,5].map((i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-yellow-400 font-semibold text-sm ml-1">5.0 on Google</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold mb-2 leading-tight">
                Happy with your detail?<br />
                <span className="text-primary">Scan &amp; leave a review.</span>
              </h3>

              <p className="text-slate-300 text-sm leading-relaxed mb-6 max-w-md">
                Point your phone camera at the QR code — it takes under 30 seconds
                and helps other Manchester &amp; Stockport drivers find us. Every
                review genuinely makes a difference.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                {/* Primary: tap to review (for mobile visitors) */}
                <a
                  href="https://g.page/r/CSoujWwc0nMREAE/review"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-white text-slate-900 font-bold px-6 py-3 rounded-full hover:bg-primary hover:text-white transition-colors duration-200 text-sm shadow"
                  aria-label="Leave SRV Detailing a Google review"
                >
                  <span className="font-extrabold text-[#4285F4]">G</span>
                  Tap to Review on Google
                </a>

                {/* Secondary: on mobile — "or scan on desktop" hint */}
                <span className="hidden sm:flex items-center text-slate-500 text-xs px-2">
                  or scan the QR code on desktop
                </span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
