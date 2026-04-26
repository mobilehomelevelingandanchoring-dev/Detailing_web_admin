import Link from 'next/link';

interface FooterColumnProps {
  title: string;
  links: ReadonlyArray<{ readonly label: string; readonly href: string }>;
}

export function FooterColumn({ title, links }: FooterColumnProps) {
  return (
    <nav aria-label={`${title} links`}>
      <h3 className="text-xs font-bold text-primary uppercase tracking-widest mb-4">
        {title}
      </h3>
      <ul className="space-y-2.5">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-sm text-zinc-400 hover:text-white transition-colors duration-150"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
