import './globals.css';

export const metadata = { icons: { icon: '/ats-logo.jpeg', apple: '/ats-logo.jpeg' } }; 

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
