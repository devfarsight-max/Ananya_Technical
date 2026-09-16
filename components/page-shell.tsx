'use client';

import Link from '@/components/site-link';
import { motion, useReducedMotion } from 'framer-motion';
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
  const shouldReduceMotion = useReducedMotion();

  const reveal = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <main className="min-h-screen bg-[#FAF7EF] text-[#681321]">
      <Header />
      <motion.section
        className="page-hero"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: shouldReduceMotion ? 0 : 0.08 } },
        }}
      >
        <div className="site-container">
          <motion.div variants={reveal}>
            <Link
              href="/"
              className="mb-8 inline-block text-sm text-[#681321]/65 hover:underline"
            >
              Home / {eyebrow.toLowerCase()}
            </Link>
          </motion.div>
          <div className="grid items-end gap-8 lg:grid-cols-[1.25fr_.75fr] lg:gap-16">
            <motion.div variants={reveal}>
              <p className="eyebrow">{eyebrow}</p>
              <h1 className="hero-title mt-5">{title}</h1>
            </motion.div>
            <motion.p
              variants={reveal}
              className="max-w-xl text-lg leading-8 text-[#681321]/75"
            >
              {intro}
            </motion.p>
          </div>
        </div>
      </motion.section>
      {children}
      <motion.section
        className="bg-brand-soft px-5 py-16 sm:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: shouldReduceMotion ? 0 : 0.08 } },
        }}
      >
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 lg:flex-row lg:items-center">
          <motion.div variants={reveal}>
            <p className="eyebrow">YOUR NEXT CHAPTER</p>
            <h2 className="mt-3 max-w-2xl text-3xl font-bold leading-tight sm:text-4xl">
              A conversation can be the beginning of something meaningful.
            </h2>
            <p className="mt-4 max-w-2xl leading-7 text-[#681321]/75">
              Share your interests, learning goals, or questions with our team.
              Together, we can explore the right next step.
            </p>
          </motion.div>
          <motion.div
            variants={reveal}
            whileHover={shouldReduceMotion ? undefined : { y: -2 }}
            whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
          >
            <Link href="/contact" className="button-primary shrink-0">
              Make an enquiry <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </motion.section>
      <Footer />
    </main>
  );
}
