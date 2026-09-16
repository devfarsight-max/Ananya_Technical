import Image from 'next/image';
import Link from '@/components/site-link';
import { ChevronDown, Menu, X } from 'lucide-react';
const services = [
  { label: 'Educational Studies', href: '/services/education' },
  { label: 'Performing Arts', href: '/services/performing-arts' },
  { label: 'Technological Studies', href: '/services/technical' },
];
const links = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Vision & Mission', href: '/vision-mission' },
  { label: 'Achievements', href: '/achievements' },
];
export function Header() {
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
        <details className="group lg:hidden">
          <summary
            aria-label="Toggle mobile navigation"
            className="flex cursor-pointer list-none items-center gap-2 rounded border border-white/30 p-2 [&::-webkit-details-marker]:hidden"
          >
            <Menu className="group-open:hidden" aria-hidden="true" />
            <X className="hidden group-open:block" aria-hidden="true" />
            <span className="text-sm font-semibold">Menu</span>
          </summary>
          <nav
            aria-label="Mobile navigation"
            className="absolute inset-x-0 top-full max-h-[calc(100dvh-6rem)] overflow-y-auto border-t border-white/20 bg-maroon px-5 pb-5 shadow-xl"
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
                className="block border-b border-white/10 py-4 text-sm hover:bg-white/10"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </details>
      </nav>
    </header>
  );
}
