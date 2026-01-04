'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center px-4 overflow-hidden bg-background">
      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `linear-gradient(to right, #000 1px, transparent 1px),
                           linear-gradient(to bottom, #000 1px, transparent 1px)`,
          backgroundSize: '80px 80px'
        }}
      />

      {/* Gradient orb - very subtle */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-gradient-radial from-accent/[0.06] to-transparent rounded-full blur-[100px]" />

      <div className="relative z-10 max-w-5xl mx-auto text-center pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface border border-border mb-8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            <span className="text-sm text-foreground-secondary">Accepting projects for Q1 2026</span>
          </motion.div>

          {/* Main Headline */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-bold tracking-[-0.02em] leading-[0.95] mb-8">
            <span className="block text-foreground">Digital Products,</span>
            <span className="block gradient-text mt-1">
              Orchestrated by Intelligence.
            </span>
          </h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-lg md:text-xl text-foreground-secondary max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            Strategic design for research institutions, public health organizations,
            and ambitious companies—powered by 20+ years of expertise and modern AI tooling.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
          >
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 text-base font-medium
                         bg-foreground text-background hover:bg-foreground/90
                         rounded-lg transition-colors"
            >
              Start a Project
            </Link>

            <Link
              href="#work"
              className="inline-flex items-center gap-2 px-8 py-4 text-base font-medium
                         text-foreground hover:text-foreground/70
                         transition-colors"
            >
              View Work
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="mt-0.5">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </motion.div>

          {/* Client Logos */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="pt-8"
          >
            <Image
              src="/client-logos.jpg"
              alt="Trusted by UNC Gillings, Premier International, DaVinci Education, and more"
              width={813}
              height={80}
              className="mx-auto opacity-70 hover:opacity-100 transition-opacity"
            />
          </motion.div>

          {/* Testimonial */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.8 }}
            className="mt-16 max-w-2xl mx-auto"
          >
            <blockquote className="relative text-center">
              <p className="text-xl md:text-2xl text-foreground-secondary leading-relaxed mb-6">
                &ldquo;Adrial is my go-to designer for <strong className="text-foreground">anything</strong> my
                business needs ... which is why I have used him for three different companies
                over the last 15 years.&rdquo;
              </p>
              <footer className="flex items-center justify-center gap-4">
                <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-border">
                  <Image
                    src="/craig.jpg"
                    alt="Craig Wood"
                    width={56}
                    height={56}
                    className="object-cover"
                  />
                </div>
                <div className="text-left">
                  <p className="text-sm font-semibold text-foreground uppercase tracking-wide">Craig Wood</p>
                  <p className="text-sm text-foreground-muted">CEO, Premier International</p>
                </div>
              </footer>
            </blockquote>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
