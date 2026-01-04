'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const footerLinks = {
  work: [
    { name: 'All Projects', href: '/work' },
    { name: 'Web Design', href: '/work?filter=web' },
    { name: 'Brand Identity', href: '/work?filter=brand' },
    { name: 'Strategy', href: '/work?filter=strategy' },
  ],
  company: [
    { name: 'About', href: '/about' },
    { name: 'Strategy', href: '/strategy' },
    { name: 'Contact', href: '/contact' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-border">
      {/* CTA Section */}
      <div className="max-w-6xl mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Ready to elevate your brand?
          </h2>
          <p className="text-lg text-foreground-secondary mb-8 max-w-xl mx-auto">
            Let&apos;s discuss how strategic design can transform your business.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-foreground text-background
                       font-medium rounded-lg hover:bg-foreground/90 transition-colors"
          >
            Start a Conversation
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </motion.div>

        {/* Links Grid */}
        <div className="grid md:grid-cols-4 gap-12 pb-12 border-b border-border">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <Image
              src="/logo.svg"
              alt="Adrial Designs"
              width={160}
              height={30}
              className="h-7 w-auto mb-4"
            />
            <p className="text-foreground-secondary text-[15px] max-w-sm">
              Strategic design for research institutions, public health organizations,
              and ambitious companies—powered by 20+ years of expertise.
            </p>
          </div>

          {/* Work Links */}
          <div>
            <h3 className="font-medium text-sm uppercase tracking-wider text-foreground-muted mb-4">
              Work
            </h3>
            <ul className="space-y-3">
              {footerLinks.work.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-foreground-secondary text-[15px] hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-medium text-sm uppercase tracking-wider text-foreground-muted mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-foreground-secondary text-[15px] hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex items-center justify-between pt-8">
          <p className="text-sm text-foreground-muted">
            © {new Date().getFullYear()} Adrial Designs. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
