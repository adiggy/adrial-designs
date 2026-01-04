'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

// Minimal SVG icons
const IconTarget = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <circle cx="12" cy="12" r="10"/>
    <circle cx="12" cy="12" r="6"/>
    <circle cx="12" cy="12" r="2"/>
  </svg>
);

const IconCompass = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <circle cx="12" cy="12" r="10"/>
    <polygon points="16.24,7.76 14.12,14.12 7.76,16.24 9.88,9.88" fill="currentColor" stroke="none"/>
  </svg>
);

const IconLightbulb = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M9 21h6M12 3a6 6 0 0 0-4 10.47V17a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-3.53A6 6 0 0 0 12 3z"/>
  </svg>
);

const services = [
  {
    icon: IconTarget,
    title: 'Brand Strategy',
    description: 'Define your brand\'s purpose, positioning, and promise. We uncover what makes you unique and build a foundation for all future marketing.',
    deliverables: ['Brand Positioning', 'Value Proposition', 'Competitive Analysis', 'Brand Architecture'],
  },
  {
    icon: IconCompass,
    title: 'Messaging Framework',
    description: 'Craft compelling narratives that resonate with your audience. Clear, consistent messaging that converts across every touchpoint.',
    deliverables: ['Core Messaging', 'Tagline Development', 'Voice & Tone Guidelines', 'Key Messages by Audience'],
  },
  {
    icon: IconLightbulb,
    title: 'Go-to-Market Strategy',
    description: 'Launch with impact. We develop comprehensive strategies for product launches, rebrands, and market expansion.',
    deliverables: ['Launch Roadmap', 'Channel Strategy', 'Content Strategy', 'Campaign Planning'],
  },
];

const process = [
  { step: '01', title: 'Discovery', description: 'Deep-dive into your business, market, and audience through stakeholder interviews and research.' },
  { step: '02', title: 'Analysis', description: 'Synthesize findings into actionable insights. Identify opportunities and strategic directions.' },
  { step: '03', title: 'Strategy', description: 'Develop comprehensive strategic frameworks, positioning, and messaging architecture.' },
  { step: '04', title: 'Activation', description: 'Translate strategy into tangible assets, guidelines, and implementation roadmaps.' },
];

export default function StrategyPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <p className="text-sm font-medium text-foreground-muted uppercase tracking-wide mb-4">
              Strategy Services
            </p>
            <h1 className="text-5xl md:text-6xl font-bold tracking-[-0.02em] mb-6">
              Strategy that drives
              <span className="gradient-text"> meaningful results.</span>
            </h1>
            <p className="text-xl text-foreground-secondary leading-relaxed">
              Before we design a single pixel, we define the strategy. Clear thinking
              leads to clear design—and clear design converts.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-4 bg-surface border-y border-border">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">What We Offer</h2>
            <p className="text-lg text-foreground-secondary max-w-2xl">
              Strategic services designed to give your brand clarity, direction, and competitive advantage.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-px bg-border rounded-xl overflow-hidden">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-background p-8"
              >
                <div className="w-12 h-12 rounded-lg bg-background-secondary border border-border flex items-center justify-center mb-6">
                  <service.icon />
                </div>
                <h3 className="text-lg font-semibold mb-3">{service.title}</h3>
                <p className="text-foreground-secondary text-[15px] mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.deliverables.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-foreground-muted">
                      <span className="w-1 h-1 rounded-full bg-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">Our Process</h2>
              <p className="text-lg text-foreground-secondary mb-12">
                A proven methodology refined over 15+ years and hundreds of successful projects.
              </p>

              <div className="space-y-8">
                {process.map((item, index) => (
                  <motion.div
                    key={item.step}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex gap-6"
                  >
                    <div className="text-3xl font-bold text-foreground-muted">{item.step}</div>
                    <div>
                      <h3 className="font-semibold mb-1">{item.title}</h3>
                      <p className="text-foreground-secondary text-[15px]">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square rounded-xl overflow-hidden border border-border">
                <Image
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80"
                  alt="Strategy session"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-surface border-t border-border">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Ready to define your strategy?
            </h2>
            <p className="text-lg text-foreground-secondary mb-8">
              Let&apos;s discuss how strategic clarity can transform your business.
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
        </div>
      </section>
    </div>
  );
}
