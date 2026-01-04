'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

// Calculate years of experience dynamically (started in 2003)
const CAREER_START_YEAR = 2003;
const yearsExperience = new Date().getFullYear() - CAREER_START_YEAR;

// Minimal SVG icons
const IconClock = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <circle cx="12" cy="12" r="10"/>
    <path d="M12 6v6l4 2" strokeLinecap="round"/>
  </svg>
);

const IconAward = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <circle cx="12" cy="8" r="6"/>
    <path d="M8.21 13.89L7 23l5-3 5 3-1.21-9.12" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const IconUsers = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" strokeLinecap="round"/>
    <circle cx="9" cy="7" r="4"/>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" strokeLinecap="round"/>
  </svg>
);

const IconSparkle = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M12 3v18M3 12h18M5.64 5.64l12.72 12.72M18.36 5.64L5.64 18.36" strokeLinecap="round"/>
  </svg>
);

const stats = [
  { value: `${yearsExperience}+`, label: 'Years Experience', icon: IconClock },
  { value: '200+', label: 'Projects Completed', icon: IconAward },
  { value: '50+', label: 'Happy Clients', icon: IconUsers },
  { value: '100%', label: 'AI-Enhanced', icon: IconSparkle },
];

const values = [
  {
    title: 'Clarity Over Complexity',
    description: 'We believe great design simplifies. Every decision we make moves toward clearer communication and easier understanding.',
  },
  {
    title: 'Strategy Before Aesthetics',
    description: 'Beautiful design that doesn\'t work is just decoration. We always start with the "why" before the "how it looks."',
  },
  {
    title: 'Human + Machine',
    description: 'AI accelerates our process, but human judgment guides every output. We use technology to enhance creativity, not replace it.',
  },
  {
    title: 'Long-term Partnerships',
    description: 'We\'re not interested in one-off projects. We build relationships that grow alongside your business.',
  },
];

const clients = [
  'UNC Chapel Hill',
  'Premier International',
  'DaVinci Education',
  'Sunset Grove Development',
  'Colorado State University',
  'Takeout Central',
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-sm font-medium text-foreground-muted uppercase tracking-wide mb-4">
                About
              </p>
              <h1 className="text-5xl md:text-6xl font-bold tracking-[-0.02em] mb-6">
                Design expertise meets
                <span className="gradient-text"> intelligent execution.</span>
              </h1>
              <p className="text-xl text-foreground-secondary leading-relaxed mb-8">
                I&apos;m Adrial Dale, a strategic marketing designer with over {yearsExperience} years
                of experience helping research institutions, public health organizations, and
                ambitious companies clarify their message and elevate their brand.
              </p>
              <p className="text-lg text-foreground-secondary leading-relaxed">
                From UNC Gillings School of Global Public Health to innovative startups,
                I combine deep expertise with cutting-edge AI tools to deliver agency-quality
                work at unprecedented speed—without sacrificing the strategic thinking that
                makes design actually work.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-xl overflow-hidden border border-border">
                <Image
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80"
                  alt="Adrial Dale"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Floating credential */}
              <div className="absolute -bottom-6 -left-6 p-4 rounded-xl bg-surface border border-border shadow-lg">
                <p className="text-2xl font-bold gradient-text">{yearsExperience}+</p>
                <p className="text-sm text-foreground-muted">Years in Design</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 px-4 bg-surface border-y border-border">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border rounded-xl overflow-hidden">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-8 bg-background"
              >
                <div className="w-12 h-12 rounded-lg bg-background-secondary border border-border flex items-center justify-center mx-auto mb-4">
                  <stat.icon />
                </div>
                <p className="text-3xl font-bold mb-1">{stat.value}</p>
                <p className="text-sm text-foreground-muted">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">How I Work</h2>
            <p className="text-lg text-foreground-secondary max-w-2xl mx-auto">
              Principles that guide every project and every decision.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-px bg-border rounded-xl overflow-hidden">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 bg-background"
              >
                <h3 className="text-lg font-semibold mb-3">{value.title}</h3>
                <p className="text-foreground-secondary text-[15px]">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="py-20 px-4 bg-surface border-y border-border">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Trusted By</h2>
            <p className="text-lg text-foreground-secondary">
              Organizations that have trusted me with their brand.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-border rounded-xl overflow-hidden">
            {clients.map((client, index) => (
              <motion.div
                key={client}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex items-center justify-center p-6 bg-background"
              >
                <p className="text-sm font-medium text-foreground-muted text-center">{client}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Let&apos;s build something great together.
            </h2>
            <p className="text-lg text-foreground-secondary mb-8">
              I&apos;d love to hear about your project and explore how I can help.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-foreground text-background
                         font-medium rounded-lg hover:bg-foreground/90 transition-colors"
            >
              Get in Touch
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
