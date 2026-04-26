import Link from 'next/link';
import { DETAILING_NAV, VALETING_NAV } from './nav-data';

export function MegaMenuServices() {
  return (
    <div className="w-full max-w-screen-xl mx-auto px-4 py-6">
      <div className="grid grid-cols-2 gap-8">
        {/* ── Car Detailing column ── */}
        <div>
          <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-4">
            {DETAILING_NAV.title}
          </p>
          <ul className="space-y-0.5">
            {DETAILING_NAV.links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="group flex flex-col px-3 py-2.5 rounded-lg hover:bg-zinc-50 transition-colors duration-120"
                >
                  <span className="text-sm font-medium text-zinc-800 group-hover:text-primary transition-colors duration-120">
                    {link.label}
                  </span>
                  {link.description && (
                    <span className="text-xs text-zinc-400 mt-0.5 leading-snug">
                      {link.description}
                    </span>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* ── Car Valeting column ── */}
        <div>
          <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-4">
            {VALETING_NAV.title}
          </p>
          <ul className="space-y-0.5">
            {VALETING_NAV.links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="group flex flex-col px-3 py-2.5 rounded-lg hover:bg-zinc-50 transition-colors duration-120"
                >
                  <span className="text-sm font-medium text-zinc-800 group-hover:text-primary transition-colors duration-120">
                    {link.label}
                  </span>
                  {link.description && (
                    <span className="text-xs text-zinc-400 mt-0.5 leading-snug">
                      {link.description}
                    </span>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* ── Bottom CTA row ── */}
      <div className="flex items-center gap-3 mt-5 pt-5 border-t border-zinc-100">
        <Link
          href="/services"
          className="text-sm font-medium text-zinc-600 hover:text-primary transition-colors duration-150"
        >
          View all services &rarr;
        </Link>
        <span className="text-zinc-200" aria-hidden>|</span>
        <Link
          href="/booking"
          className="inline-flex items-center gap-1.5 bg-primary hover:bg-primary/90 text-white text-sm font-semibold px-4 py-2 rounded-full transition-transform duration-150 hover:scale-[1.02]"
        >
          Get a free quote &rarr;
        </Link>
      </div>
    </div>
  );
}
