import Link from 'next/link';
import { LOCATIONS_NAV } from './nav-data';

export function MegaMenuLocations() {
  return (
    <div className="w-full max-w-screen-xl mx-auto px-4 py-6">
      <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-4">
        Areas we serve
      </p>
      <div className="grid grid-cols-2 gap-3">
        {LOCATIONS_NAV.map((loc) => (
          <div
            key={loc.href}
            className="rounded-xl border border-zinc-100 hover:border-primary/30 hover:shadow-md transition-all duration-180 p-4"
          >
            <Link
              href={loc.href}
              className="block text-base font-semibold text-zinc-800 hover:text-primary transition-colors duration-120 mb-2"
            >
              {loc.name}
            </Link>
            <ul className="space-y-1.5">
              {loc.subLinks.map((sub) => (
                <li key={sub.href}>
                  <Link
                    href={sub.href}
                    className="text-sm text-zinc-500 hover:text-primary transition-colors duration-120"
                  >
                    {sub.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-5 pt-5 border-t border-zinc-100">
        <Link
          href="/booking"
          className="inline-flex items-center gap-1.5 bg-primary hover:bg-primary/90 text-white text-sm font-semibold px-4 py-2 rounded-full transition-transform duration-150 hover:scale-[1.02]"
        >
          Book in your area &rarr;
        </Link>
      </div>
    </div>
  );
}
