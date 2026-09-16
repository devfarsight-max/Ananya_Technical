'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronDown, Menu, X } from 'lucide-react';
import { useState } from 'react';
const services = [
  { label: 'Educational Studies', href: '/services/education' },
  { label: 'Performing Arts', href: '/services/performing-arts' },
  { label: 'Technological Studies', href: '/services/technical' },
];
const links = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Vision & Mission', href: '/vision-mission' },
  { label: 'Gallery', href: '/gallery' },
];
export function Header() {
  const [mobile, setMobile] = useState(false);
  const path = usePathname();
  const active = (href: string) => (path === href ? 'page' : undefined);
  return (
    <header className="sticky top-0 z-50 border-b border-white/15 bg-maroon text-[#FAF7EF]">
      <nav
        aria-label="Main navigation"
        className="site-container flex h-24 items-center justify-between gap-5"
      >
        <Link
          href="/"
          aria-label="Ananya Technical Services home"
          className="flex shrink-0 items-center gap-3"
        >
          <Image
            src="/ats-logo.jpeg"
            alt="ATS logo"
            width={1254}
            height={1254}
            priority
            className="h-[68px] w-[68px] rounded-full"
          />
          <span>
            <strong className="block text-sm tracking-[.16em]">ANANYA</strong>
            <span className="mt-1 block text-[10px] tracking-[.12em] text-[#FAF7EF]/80">
              TECHNICAL SERVICES
            </span>
          </span>
        </Link>
        <div className="hidden items-center gap-6 lg:flex">
          {links.slice(0, 2).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={active(link.href)}
              className="py-2 text-sm text-[#FAF7EF]/85 hover:text-[#FAF7EF] aria-[current=page]:underline aria-[current=page]:underline-offset-8"
            >
              {link.label}
            </Link>
          ))}
          <details className="relative">
            <summary className="flex cursor-pointer list-none items-center gap-1 py-2 text-sm">
              Services <ChevronDown size={15} />
            </summary>
            <div className="absolute left-0 top-12 w-64 rounded-lg border border-[#681321]/15 bg-[#FAF7EF] p-2 text-[#681321] shadow-xl">
              {services.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active(link.href)}
                  className="block rounded px-4 py-3 text-sm hover:bg-brand-soft"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </details>
          {links.slice(2).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={active(link.href)}
              className="py-2 text-sm text-[#FAF7EF]/85 hover:text-[#FAF7EF] aria-[current=page]:underline aria-[current=page]:underline-offset-8"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="rounded border border-[#FAF7EF]/50 px-5 py-2.5 text-sm font-semibold hover:bg-[#FAF7EF] hover:text-[#681321]"
          >
            Contact us
          </Link>
        </div>
        <button
          onClick={() => setMobile(!mobile)}
          aria-expanded={mobile}
          aria-controls="mobile-navigation"
          aria-label={mobile ? 'Close navigation' : 'Open navigation'}
          className="rounded border border-white/30 p-2 lg:hidden"
        >
          {mobile ? <X /> : <Menu />}
        </button>
      </nav>
      {mobile && (
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className="max-h-[calc(100dvh-6rem)] overflow-y-auto border-t border-white/20 px-5 pb-5 lg:hidden"
        >
          {[
            ...links.slice(0, 2),
            ...services,
            ...links.slice(2),
            { label: 'Contact us', href: '/contact' },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobile(false)}
              aria-current={active(link.href)}
              className="block border-b border-white/10 py-3 text-sm aria-[current=page]:font-bold"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
