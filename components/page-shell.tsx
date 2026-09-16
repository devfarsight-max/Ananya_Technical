import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';

export function PageShell({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen bg-[#FAF7EF] text-[#681321]">
      <Header />
      <section className="page-hero">
        <div className="site-container">
          <Link
            href="/"
            className="mb-8 inline-block text-sm text-[#681321]/65 hover:underline"
          >
            Home / {eyebrow.toLowerCase()}
          </Link>
          <div className="grid items-end gap-8 lg:grid-cols-[1.25fr_.75fr] lg:gap-16">
            <div>
              <p className="eyebrow">{eyebrow}</p>
              <h1 className="hero-title mt-5">{title}</h1>
            </div>
            <p className="max-w-xl text-lg leading-8 text-[#681321]/75">
              {intro}
            </p>
          </div>
        </div>
      </section>
      {children}
      <section className="bg-brand-soft px-5 py-16 sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 lg:flex-row lg:items-center">
          <div>
            <p className="eyebrow">YOUR NEXT CHAPTER</p>
            <h2 className="mt-3 max-w-2xl text-3xl font-bold leading-tight sm:text-4xl">
              A conversation can be the beginning of something meaningful.
            </h2>
            <p className="mt-4 max-w-2xl leading-7 text-[#681321]/75">
              Share your interests, learning goals, or questions with our team.
              Together, we can explore the right next step.
            </p>
          </div>
          <Link href="/contact" className="button-primary shrink-0">
            Make an enquiry <ArrowRight size={18} />
          </Link>
        </div>
      </section>
      <Footer />
    </main>
  );
}
