import type { ComponentPropsWithoutRef } from 'react';

/** Native navigation keeps exported pages usable without the client-side router. */
export default function SiteLink({ children, ...props }: ComponentPropsWithoutRef<'a'>) {
  // oxlint-disable-next-line next/no-html-link-for-pages -- Static exports use document navigation intentionally.
  return <a {...props}>{children}</a>;
}
