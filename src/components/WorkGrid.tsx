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

const filters = [
  { id: 'all', label: 'All' },
  { id: 'strategy', label: 'Strategy' },
  { id: 'brand', label: 'Brand' },
  { id: 'web', label: 'Web' },
  { id: 'apps', label: 'Apps/Tools' },
];

// Projects with real placeholder images
const projects = [
  {
    id: 1,
    slug: 'gillings-school',
    title: 'UNC Gillings School',
    category: 'web',
    description: 'Complete web platform for #1 public school of public health',
    size: 'large',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
  },
  {
    id: 2,
    slug: 'premier-international',
    title: 'Premier International',
    category: 'brand',
    description: 'Strategic brand identity for global advisory firm',
    size: 'medium',
    image: 'https://images.unsplash.com/photo-1634942537034-2531766767d1?w=800&q=80',
  },
  {
    id: 3,
    slug: 'sunset-grove',
    title: 'Sunset Grove',
    category: 'strategy',
    description: 'Master-planned community brand strategy',
    size: 'small',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
  },
  {
    id: 4,
    slug: 'covid-dashboard',
    title: 'NC COVID Dashboard',
    category: 'apps',
    description: 'Real-time pandemic data visualization',
    size: 'small',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
  },
  {
    id: 5,
    slug: 'davinci-education',
    title: 'DaVinci Education',
    category: 'web',
    description: 'Educational platform redesign',
    size: 'medium',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80',
  },
  {
    id: 6,
    slug: 'bronco-rentals',
    title: 'Luxury Bronco Rentals',
    category: 'brand',
    description: 'Premium 4x4 rental experience in Los Cabos',
    size: 'small',
    image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800&q=80',
  },
];

const getSizeClasses = (size: string) => {
  switch (size) {
    case 'large':
      return 'md:col-span-2 md:row-span-2';
    case 'medium':
      return 'md:col-span-2';
    default:
      return '';
  }
};

export default function WorkGrid() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredProjects =
    activeFilter === 'all'
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="work" className="py-32 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Selected Work
          </h2>
          <p className="text-lg text-foreground-secondary max-w-xl">
            A curated selection of projects spanning strategy, brand identity,
            and digital product design.
          </p>
        </motion.div>

        {/* Filter Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="flex flex-wrap gap-2 mb-12"
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

        {/* Bento Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[220px]"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className={getSizeClasses(project.size)}
              >
                <Link href={`/work/${project.slug}`} className="block h-full group">
                  <div className="relative h-full rounded-2xl overflow-hidden bg-surface border border-border
                                  shadow-sm hover:shadow-xl transition-all duration-500">
                    {/* Image */}
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent
                                    opacity-80 group-hover:opacity-90 transition-opacity" />

                    {/* Content */}
                    <div className="absolute inset-0 p-6 flex flex-col justify-end">
                      <p className="text-xs font-medium text-white/70 uppercase tracking-wider mb-2">
                        {project.category}
                      </p>
                      <h3 className={`font-semibold text-white mb-1 ${
                        project.size === 'large' ? 'text-2xl' : 'text-lg'
                      }`}>
                        {project.title}
                      </h3>
                      <p className={`text-white/80 ${
                        project.size === 'large' ? 'text-base' : 'text-sm'
                      }`}>
                        {project.description}
                      </p>
                    </div>

                    {/* Hover Arrow */}
                    <div className="absolute top-4 right-4 p-2 rounded-full bg-white/10 backdrop-blur-sm
                                    opacity-0 group-hover:opacity-100 transition-opacity text-white">
                      <ArrowIcon />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View All Link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <Link
            href="/work"
            className="inline-flex items-center gap-2 px-6 py-3 text-foreground-secondary
                       hover:text-foreground bg-surface border border-border hover:border-border-hover
                       rounded-full transition-all group"
          >
            <span>View all projects</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
