/**
 * GoogleMapsEmbed
 *
 * Reusable, Server-Component-safe Google Maps iframe.
 * Safe to import from both "use client" and RSC pages — contains no hooks
 * or browser-only APIs, so Next.js never triggers a hydration mismatch.
 *
 * ── Local SEO rationale ────────────────────────────────────────────────────
 * Embedding the verified Google Maps listing on the /stockport page and
 * contact page strengthens the geographic entity signal for the LocalBusiness
 * in Google's Knowledge Graph. Combined with the `hasMap` property in the
 * page-level structured data, Google can unambiguously associate the business
 * place ID (from the embed URL) with the canonical /stockport URL.
 *
 * ── Performance / CWV ─────────────────────────────────────────────────────
 * `loading="lazy"` instructs the browser to defer the iframe's network
 * request until it is within the viewport threshold — it does not contribute
 * to LCP, TBT, or CLS. The iframe height is fixed so there is no layout
 * shift when the content loads.
 *
 * ── Accessibility ─────────────────────────────────────────────────────────
 * `title` on the <iframe> satisfies WCAG 2.1 SC 4.1.2 (Name, Role, Value).
 * The wrapping <section> carries `aria-label` to create a named landmark.
 *
 * ── referrerPolicy ────────────────────────────────────────────────────────
 * The original embed snippet contains `referrerpolicy="no-ade"` which is a
 * truncated/invalid value. The correct Maps embed policy is
 * "no-referrer-when-downgrade" — this sends a full referrer to HTTPS
 * origins and strips it for HTTP downgrades, matching Google's expectation.
 */

const MAP_SRC =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d303729.5854466303!2d-2.32001985!3d53.50620705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x24b823d85af5eae7%3A0x1173d21c6c8d2e2a!2sSrv%20detailing!5e0!3m2!1sen!2s!4v1772561745988!5m2!1sen!2s';

const IFRAME_TITLE =
  'SRV Detailing — location in Stockport, Greater Manchester on Google Maps';

export interface GoogleMapsEmbedProps {
  /**
   * H2 text rendered above the map frame.
   * Pass `null` to suppress the heading entirely (e.g. when the page
   * already has a nearby heading that provides context).
   */
  heading?: string | null;
  /** Extra Tailwind classes applied to the outer <section> wrapper. */
  className?: string;
}

export function GoogleMapsEmbed({
  heading = 'Our Location in Stockport',
  className = '',
}: GoogleMapsEmbedProps) {
  return (
    <section
      aria-label={heading ?? IFRAME_TITLE}
      className={`w-full ${className}`.trim()}
    >
      {heading && (
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
          {heading}
        </h2>
      )}

      {/*
       * Fixed height prevents cumulative layout shift (CLS = 0).
       * overflow-hidden + rounded-xl give the map a contained, card-like
       * appearance consistent with the rest of the design system.
       * shadow-sm is intentionally subtle to avoid competing with CTAs.
       */}
      <div className="w-full overflow-hidden rounded-xl shadow-sm h-[400px] md:h-[480px]">
        <iframe
          src={MAP_SRC}
          title={IFRAME_TITLE}
          aria-label={IFRAME_TITLE}
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full"
        />
      </div>
    </section>
  );
}
