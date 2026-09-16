import type { Transition, Variants } from 'framer-motion';

export const revealTransition = {
  duration: 0.6,
  ease: [0.22, 1, 0.36, 1],
} satisfies Transition;

export const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: revealTransition },
} satisfies Variants;

export const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
} satisfies Variants;
