import './globals.css';
import { SiteAnimations } from '@/components/site-animations';

export const metadata = { icons: { icon: '/ats-logo.jpeg', apple: '/ats-logo.jpeg' } }; 

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}<SiteAnimations /></body>
    </html>
  );
}
