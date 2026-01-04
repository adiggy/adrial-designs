'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

// Minimal custom SVG icons
const IconStrategy = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" strokeLinecap="round"/>
  </svg>
);

const IconSpeed = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const IconShield = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const pillars = [
  {
    icon: IconStrategy,
    title: '15+ Years Expertise',
    description:
      'Deep strategic thinking honed across hundreds of projects. Pattern recognition that prevents costly mistakes.',
  },
  {
    icon: IconSpeed,
    title: 'AI-Powered Velocity',
    description:
      'Modern AI tools accelerate execution without sacrificing quality. What took weeks now takes days.',
  },
  {
    icon: IconShield,
    title: 'Human Judgment',
    description:
      'AI generates, humans curate. Every output is refined by experienced eyes that understand your brand.',
  },
];

export default function Process() {
  return (
    <section className="py-32 px-4 bg-surface border-y border-border">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-sm font-medium text-foreground-muted tracking-wide uppercase mb-4">
            The Approach
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-[-0.02em] mb-6">
            Intelligence,{' '}
            <span className="gradient-text">Orchestrated.</span>
          </h2>
          <p className="text-lg text-foreground-secondary max-w-2xl mx-auto">
            A new category of design partner. Not purely human, not purely AI—
            but the optimal synthesis of both.
          </p>
        </motion.div>

        {/* Three Pillars - Vercel style cards */}
        <div className="grid md:grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden mb-24">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-background p-8 md:p-10"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-lg bg-background-secondary border border-border flex items-center justify-center mb-6 text-foreground">
                <pillar.icon />
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold mb-3 tracking-tight">{pillar.title}</h3>
              <p className="text-foreground-secondary text-[15px] leading-relaxed">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Visual Equation - more minimal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative p-8 md:p-16 rounded-2xl bg-background border border-border mb-24"
        >
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 text-center">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-xl bg-background-secondary border border-border flex items-center justify-center mb-3">
                <IconStrategy />
              </div>
              <span className="text-sm text-foreground-secondary">
                Human Strategy
              </span>
            </div>

            <span className="text-2xl text-foreground-muted">+</span>

            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-xl bg-background-secondary border border-border flex items-center justify-center mb-3">
                <IconSpeed />
              </div>
              <span className="text-sm text-foreground-secondary">
                AI Velocity
              </span>
            </div>

            <span className="text-2xl text-foreground-muted">=</span>

            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-xl bg-foreground flex items-center justify-center mb-3">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="text-sm font-medium text-foreground">
                Orchestrated Intelligence
              </span>
            </div>
          </div>
        </motion.div>

        {/* Split content with image */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-bold tracking-tight mb-8">
              Why This Approach Wins
            </h3>
            <div className="space-y-6">
              {[
                {
                  title: 'vs. Traditional Agency',
                  description: 'Faster turnaround, lower overhead costs, and direct collaboration without the bureaucracy.',
                },
                {
                  title: 'vs. AI-Only Tools',
                  description: 'Strategic direction, brand consistency, and zero hallucinations thanks to human oversight.',
                },
                {
                  title: 'vs. Freelancers',
                  description: 'Broader capabilities, systematic process, and reliable delivery every time.',
                },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="w-px bg-gradient-to-b from-accent to-accent-secondary flex-shrink-0" />
                  <div>
                    <h4 className="font-medium mb-1">{item.title}</h4>
                    <p className="text-foreground-secondary text-[15px]">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-xl overflow-hidden border border-border">
              <Image
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80"
                alt="Creative process"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
