import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import { Geist_Mono } from 'next/font/google';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import './globals.css';

const plusJakarta = Plus_Jakarta_Sans({
  variable: '--font-plus-jakarta',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    default: 'Adrial Designs | Digital Product Studio',
    template: '%s | Adrial Designs',
  },
  description:
    'High-end digital product studio combining 15+ years of design expertise with AI-powered velocity. Strategy, design, and development for ambitious brands.',
  keywords: [
    'digital product studio',
    'web design',
    'brand strategy',
    'UI/UX design',
    'AI-powered design',
    'Next.js development',
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${plusJakarta.variable} ${geistMono.variable} antialiased
                    bg-background text-foreground min-h-screen`}
      >
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
