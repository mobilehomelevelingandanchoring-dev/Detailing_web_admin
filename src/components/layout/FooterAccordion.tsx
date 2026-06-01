'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';

interface FooterAccordionProps {
  title: string;
  links: ReadonlyArray<{ readonly label: string; readonly href: string }>;
  defaultOpen?: boolean;
}

export function FooterAccordion({
  title,
  links,
  defaultOpen = false,
}: FooterAccordionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const panelId = `footer-acc-${title.toLowerCase().replace(/\s+/g, '-')}`;

  return (
    <div className="border-b border-zinc-800">
      <button
        type="button"
        onClick={() => setIsOpen((o) => !o)}
        aria-expanded={isOpen}
        aria-controls={panelId}
        className="flex items-center justify-between w-full py-4 text-sm font-semibold text-white uppercase tracking-wide text-left"
      >
        <span>{title}</span>
        <ChevronDown
          className={`w-4 h-4 text-zinc-400 flex-shrink-0 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
          aria-hidden
        />
      </button>

      <div
        id={panelId}
        className="overflow-hidden transition-[max-height] duration-[250ms] ease-[cubic-bezier(0.4,0,0.2,1)]"
        style={{ maxHeight: isOpen ? '500px' : '0px' }}
        aria-hidden={!isOpen}
      >
        <ul className="pb-5 space-y-3">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                tabIndex={isOpen ? 0 : -1}
                className="block text-sm text-zinc-400 hover:text-white transition-colors duration-150 py-0.5"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
