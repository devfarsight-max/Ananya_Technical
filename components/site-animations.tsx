'use client';

import { animate, inView, useReducedMotion } from 'framer-motion';
import { useEffect } from 'react';
import { revealTransition } from '@/src/animations/variants';

/** Progressively enhance server-rendered content; links and content never depend on animation. */
export function SiteAnimations() {
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion !== false) return;

    const cleanups: (() => void)[] = [];
    const animations = new Set<{ stop: () => void }>();
    const originals = new Map<HTMLElement, { opacity: string; transform: string }>();
    const revealed = new Set<HTMLElement>();

    const reveal = (element: HTMLElement, index: number) => {
      if (revealed.has(element)) return;
      revealed.add(element);
      originals.set(element, { opacity: element.style.opacity, transform: element.style.transform });
      // Only animate after the content reaches the viewport. Nothing is hidden in the exported HTML.
      const animation = animate(element, { opacity: [0.25, 1], y: [20, 0] }, {
        ...revealTransition,
        delay: Math.min(index * 0.07, 0.28),
      });
      animations.add(animation);
      void animation.then(() => animations.delete(animation));
    };

    document.querySelectorAll<HTMLElement>('main section, main footer').forEach((section) => {
      // Use the section's content container so full-width backgrounds remain still.
      const container = section.firstElementChild instanceof HTMLElement && section.children.length === 1
        ? section.firstElementChild : section;
      const children = Array.from(container.children).filter((child): child is HTMLElement => child instanceof HTMLElement);
      const targets = children.length ? children : [section];
      targets.forEach((target, index) => {
        cleanups.push(inView(target, () => { reveal(target, index); }, { amount: 'some', margin: '0px 0px -24px 0px' }));
      });
    });

    // Reveal rows of cards individually when they are not already section-level targets.
    document.querySelectorAll<HTMLElement>('.detail-card, section article, #performing-arts a, #practice-sessions a, #awards a').forEach((card, index) => {
      cleanups.push(inView(card, () => { reveal(card, index % 3); }, { amount: 'some', margin: '0px 0px -24px 0px' }));
    });

    return () => {
      cleanups.forEach((cleanup) => cleanup());
      animations.forEach((animation) => animation.stop());
      originals.forEach((style, element) => {
        element.style.opacity = style.opacity;
        element.style.transform = style.transform;
      });
    };
  }, [reducedMotion]);

  return null;
}
