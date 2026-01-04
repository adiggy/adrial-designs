'use client';

import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';
import { getProjectBySlug, projects } from '@/data/projects';
import { notFound } from 'next/navigation';

export default function ProjectPage() {
  const params = useParams();
  const slug = params.slug as string;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  // Find adjacent projects for navigation
  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];
  const prevProject = projects[(currentIndex - 1 + projects.length) % projects.length];

  return (
    <article className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-end pb-16 px-4">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src={project.heroImage || 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600&q=80'}
            alt={project.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/20" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto w-full pt-32">
          {/* Back Link */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              href="/#work"
              className="inline-flex items-center gap-2 text-foreground-secondary
                         hover:text-foreground transition-colors mb-8 group"
            >
              <ArrowLeft
                size={16}
                className="group-hover:-translate-x-1 transition-transform"
              />
              <span>Back to Work</span>
            </Link>
          </motion.div>

          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <p className="text-sm font-medium text-accent uppercase tracking-widest mb-4">
              {project.category}
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
              {project.title}
            </h1>
            <p className="text-xl text-foreground-secondary max-w-2xl">
              {project.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Grid */}
      <section className="px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-[1fr_300px] gap-12 lg:gap-16">
            {/* Main Content */}
            <div>
              {/* Summary */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-16"
              >
                <p className="text-xl md:text-2xl text-foreground leading-relaxed">
                  {project.summary}
                </p>
              </motion.div>

              {/* Challenge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-12"
              >
                <h2 className="text-sm font-medium text-foreground-muted uppercase tracking-widest mb-4">
                  The Challenge
                </h2>
                <p className="text-lg text-foreground-secondary leading-relaxed">
                  {project.challenge}
                </p>
              </motion.div>

              {/* Approach */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-16"
              >
                <h2 className="text-sm font-medium text-foreground-muted uppercase tracking-widest mb-4">
                  The Approach
                </h2>
                <p className="text-lg text-foreground-secondary leading-relaxed">
                  {project.approach}
                </p>
              </motion.div>
            </div>

            {/* Sidebar */}
            <motion.aside
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:sticky lg:top-32 lg:self-start"
            >
              <div className="p-6 rounded-2xl bg-surface border border-border shadow-sm">
                <h3 className="text-sm font-medium text-foreground-muted uppercase tracking-widest mb-6">
                  Project Details
                </h3>

                {/* Client */}
                <div className="mb-6">
                  <p className="text-xs text-foreground-muted mb-1">Client</p>
                  <p className="text-foreground font-medium">{project.client}</p>
                </div>

                {/* Role */}
                <div className="mb-6">
                  <p className="text-xs text-foreground-muted mb-2">Role</p>
                  <div className="flex flex-wrap gap-2">
                    {project.role.map((r) => (
                      <span
                        key={r}
                        className="px-3 py-1 text-sm bg-background-secondary rounded-full
                                   text-foreground-secondary"
                      >
                        {r}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Tools */}
                <div>
                  <p className="text-xs text-foreground-muted mb-2">Tools Used</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool) => (
                      <span
                        key={tool}
                        className="px-3 py-1 text-sm border border-border rounded-full
                                   text-foreground-muted"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.aside>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="px-4 py-16 bg-surface">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-medium text-foreground-muted uppercase tracking-widest mb-8"
          >
            Project Gallery
          </motion.h2>

          <div className="grid grid-cols-6 gap-4">
            {project.gallery.map((item, index) => {
              const colSpan =
                item.type === 'full'
                  ? 'col-span-6'
                  : item.type === 'half'
                  ? 'col-span-6 md:col-span-3'
                  : 'col-span-6 md:col-span-2';

              const height = item.type === 'full' ? 'h-[400px]' : 'h-[280px]';

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`${colSpan} ${height}`}
                >
                  <div className="relative h-full rounded-2xl overflow-hidden bg-background border border-border
                                  shadow-sm hover:shadow-lg transition-shadow group">
                    <Image
                      src={item.image || `https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80`}
                      alt={item.label}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      <p className="text-sm text-white font-medium">{item.label}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Project Navigation */}
      <section className="px-4 py-16 border-t border-border bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-4">
            {/* Previous */}
            <Link href={`/work/${prevProject.slug}`} className="group">
              <motion.div
                whileHover={{ x: -4 }}
                className="p-6 rounded-2xl bg-surface border border-border
                           hover:shadow-md hover:border-border-hover transition-all"
              >
                <p className="text-sm text-foreground-muted mb-2">
                  ← Previous Project
                </p>
                <p className="text-lg font-semibold text-foreground">
                  {prevProject.title}
                </p>
              </motion.div>
            </Link>

            {/* Next */}
            <Link href={`/work/${nextProject.slug}`} className="group">
              <motion.div
                whileHover={{ x: 4 }}
                className="p-6 rounded-2xl bg-surface border border-border
                           hover:shadow-md hover:border-border-hover transition-all text-right"
              >
                <p className="text-sm text-foreground-muted mb-2">
                  Next Project →
                </p>
                <p className="text-lg font-semibold text-foreground">
                  {nextProject.title}
                </p>
              </motion.div>
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
}
