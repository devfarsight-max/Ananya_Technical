import Image from 'next/image';
import Link from '@/components/site-link';

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-maroon px-5 py-12 text-sm text-[#FAF7EF]/55 sm:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-3">
        <div>
          <Link href="/" aria-label="Ananya Technical Services home" className="mb-5 inline-block">
            <Image src="/ats-logo.jpeg" alt="ATS - Ananya Technical Services Private Limited" width={1254} height={1254} className="h-32 w-32 rounded-full object-contain" />
          </Link>
          <p className="font-bold tracking-[.12em] text-[#FAF7EF]">ANANYA TECHNICAL SERVICES</p>
          <p className="mt-2 text-xs">PRIVATE LIMITED</p>
          <p className="mt-5 max-w-xs italic text-[#FAF7EF]/70">“Where Education Builds You and Art Defines You.”</p>
        </div>
        <div>
          <p className="font-bold text-brand-accent">Explore</p>
          <div className="mt-3 grid gap-2">
            <Link href="/">Home</Link><Link href="/about">About</Link><Link href="/services/education">Educational Studies</Link><Link href="/services/performing-arts">Performing Arts</Link><Link href="/services/technical">Technological Studies</Link><Link href="/vision-mission">Vision &amp; Mission</Link><Link href="/achievements">Achievements</Link><Link href="/team">Team</Link>
            <a href="https://youtube.com/@ghungrootales.by_ananya?si=Qgr-7cMWKZBdImtO" target="_blank" rel="noopener noreferrer">Performing Arts YouTube</a>
            <a href="https://youtube.com/@nyaya.simplified_byats?si=4-gADF8BkUpm1NOg" target="_blank" rel="noopener noreferrer">Legal YouTube</a>
          </div>
        </div>
        <div>
          <p className="font-bold text-brand-accent">Contact</p>
          <div className="mt-3 grid gap-2"><a href="tel:+918318093584">+91 8318093584</a><a href="tel:+917522001459">+91 7522001459</a><a href="mailto:info@atspvl.com">info@atspvl.com</a><p>House No. 1528/21, Ward No. 9,<br />Ghurahupatti, Mirzapur,<br />Uttar Pradesh</p></div>
        </div>
      </div>
      <p className="mx-auto mt-10 max-w-7xl border-t border-white/10 pt-5 text-xs">© 2026 Ananya Technical Services Private Limited. All Rights Reserved.</p>
    </footer>
  );
}
