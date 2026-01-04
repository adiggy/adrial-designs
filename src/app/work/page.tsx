'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
// Minimal arrow icon
const ArrowIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M7 17L17 7M17 7H7M17 7V17" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
import { projects } from '@/data/projects';

const filters = [
  { id: 'all', label: 'All' },
  { id: 'Web Design', label: 'Web' },
  { id: 'Brand Identity', label: 'Brand' },
  { id: 'Strategy', label: 'Strategy' },
  { id: 'App/Tool', label: 'Apps' },
];

export default function WorkPage() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredProjects =
    activeFilter === 'all'
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <p className="text-sm font-medium text-accent uppercase tracking-widest mb-4">
              Portfolio
            </p>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
              Selected
              <span className="gradient-text"> work.</span>
            </h1>
            <p className="text-xl text-foreground-secondary leading-relaxed">
              A curated collection of projects spanning strategy, brand identity,
              web design, and digital product development.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="pb-8 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex flex-wrap gap-2"
          >
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`
                  px-5 py-2.5 text-sm font-medium rounded-full
                  transition-all duration-300
                  ${
                    activeFilter === filter.id
                      ? 'bg-foreground text-background shadow-md'
                      : 'bg-surface text-foreground-secondary hover:text-foreground border border-border hover:border-border-hover'
                  }
                `}
              >
                {filter.label}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-32 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div layout className="grid md:grid-cols-2 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.slug}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <Link href={`/work/${project.slug}`} className="block group">
                    <div className="rounded-2xl overflow-hidden bg-surface border border-border
                                    shadow-sm hover:shadow-xl transition-all duration-500">
                      {/* Image */}
                      <div className="aspect-[16/10] relative overflow-hidden">
                        <Image
                          src={project.heroImage}
                          alt={project.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent
                                        opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="absolute top-4 right-4 p-2 rounded-full bg-white/90 backdrop-blur-sm
                                        opacity-0 group-hover:opacity-100 transition-opacity shadow-lg text-foreground">
                          <ArrowIcon />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        <p className="text-xs font-medium text-accent uppercase tracking-wider mb-2">
                          {project.category}
                        </p>
                        <h2 className="text-xl font-semibold mb-2 group-hover:text-accent transition-colors">
                          {project.title}
                        </h2>
                        <p className="text-foreground-secondary">
                          {project.subtitle}
                        </p>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-surface border-t border-border">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Like what you see?
          </h2>
          <p className="text-lg text-foreground-secondary mb-8 max-w-xl mx-auto">
            Let&apos;s talk about bringing this level of craft to your project.
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
        </div>
      </section>
    </div>
  );
}
