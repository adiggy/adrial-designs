'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const featuredClients = [
  { name: 'UNC Chapel Hill', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=200&q=80' },
  { name: 'Premier International', image: 'https://images.unsplash.com/photo-1634942537034-2531766767d1?w=200&q=80' },
  { name: 'DaVinci Education', image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=200&q=80' },
  { name: 'Sunset Grove', image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=200&q=80' },
];

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

          {/* Featured Work Strip - subtle preview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="pt-8 border-t border-border"
          >
            <p className="text-xs text-foreground-muted uppercase tracking-widest mb-6">
              Recent Projects
            </p>
            <div className="flex items-center justify-center gap-1">
              {featuredClients.map((client, index) => (
                <motion.div
                  key={client.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  className="group relative"
                >
                  <Link href="#work">
                    <div className="w-20 h-14 md:w-28 md:h-20 rounded-lg overflow-hidden border border-border
                                    bg-background-secondary relative
                                    hover:border-border-hover hover:shadow-lg transition-all">
                      <Image
                        src={client.image}
                        alt={client.name}
                        fill
                        className="object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                      />
                    </div>
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2 }}
              >
                <Link
                  href="/work"
                  className="w-20 h-14 md:w-28 md:h-20 rounded-lg border border-dashed border-border
                             flex items-center justify-center text-foreground-muted
                             hover:border-foreground-muted hover:text-foreground transition-colors"
                >
                  <span className="text-xs md:text-sm">View All</span>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
