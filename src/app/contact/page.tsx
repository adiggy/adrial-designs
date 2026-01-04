'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

// Minimal SVG icons
const IconMail = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <rect x="2" y="4" width="20" height="16" rx="2"/>
    <path d="M22 6l-10 7L2 6" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const IconMapPin = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 1 1 18 0z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
);

const IconCheck = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <circle cx="12" cy="12" r="10"/>
    <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const projectTypes = [
  { id: 'brand', label: 'Brand Strategy & Messaging' },
  { id: 'logo', label: 'Logo Design' },
  { id: 'print', label: 'Print Design' },
  { id: 'web', label: 'Website Design & Development' },
];

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);

  const handleTypeToggle = (typeId: string) => {
    setSelectedTypes(prev =>
      prev.includes(typeId)
        ? prev.filter(id => id !== typeId)
        : [...prev, typeId]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
  };

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
              Contact
            </p>
            <h1 className="text-5xl md:text-6xl font-bold tracking-[-0.02em] mb-6">
              Let&apos;s start a
              <span className="gradient-text"> conversation.</span>
            </h1>
            <p className="text-xl text-foreground-secondary leading-relaxed">
              Have a project in mind? I&apos;d love to hear about it. Tell me about your
              goals, timeline, and budget—and let&apos;s explore how I can help.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="pb-32 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-[1fr_400px] gap-16">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              {isSubmitted ? (
                <div className="p-12 rounded-xl bg-surface border border-border text-center">
                  <div className="inline-flex p-4 rounded-full bg-green-50 border border-green-200 mb-6">
                    <div className="text-green-600">
                      <IconCheck />
                    </div>
                  </div>
                  <h2 className="text-2xl font-bold mb-4">Message sent!</h2>
                  <p className="text-foreground-secondary">
                    Thanks for reaching out. I&apos;ll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Name</label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 rounded-lg bg-surface border border-border
                                   focus:border-foreground focus:ring-1 focus:ring-foreground
                                   transition-colors outline-none"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email</label>
                      <input
                        type="email"
                        required
                        className="w-full px-4 py-3 rounded-lg bg-surface border border-border
                                   focus:border-foreground focus:ring-1 focus:ring-foreground
                                   transition-colors outline-none"
                        placeholder="you@company.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Organization</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg bg-surface border border-border
                                 focus:border-foreground focus:ring-1 focus:ring-foreground
                                 transition-colors outline-none"
                      placeholder="Your company or institution"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-3">Project Type</label>
                    <p className="text-sm text-foreground-muted mb-4">Select all that apply</p>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {projectTypes.map((type) => (
                        <label
                          key={type.id}
                          className={`
                            flex items-center gap-3 p-4 rounded-lg border cursor-pointer transition-all
                            ${selectedTypes.includes(type.id)
                              ? 'bg-foreground/5 border-foreground'
                              : 'bg-surface border-border hover:border-border-hover'
                            }
                          `}
                        >
                          <div className={`
                            w-5 h-5 rounded border-2 flex items-center justify-center transition-colors
                            ${selectedTypes.includes(type.id)
                              ? 'bg-foreground border-foreground'
                              : 'border-border-hover'
                            }
                          `}>
                            {selectedTypes.includes(type.id) && (
                              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                                <path d="M2 6l3 3 5-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              </svg>
                            )}
                          </div>
                          <input
                            type="checkbox"
                            checked={selectedTypes.includes(type.id)}
                            onChange={() => handleTypeToggle(type.id)}
                            className="sr-only"
                          />
                          <span className="text-sm font-medium">{type.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Budget Range</label>
                    <select
                      className="w-full px-4 py-3 rounded-lg bg-surface border border-border
                                 focus:border-foreground focus:ring-1 focus:ring-foreground
                                 transition-colors outline-none appearance-none"
                    >
                      <option value="">Select a budget range</option>
                      <option value="5k-10k">$5,000 - $10,000</option>
                      <option value="10k-25k">$10,000 - $25,000</option>
                      <option value="25k-50k">$25,000 - $50,000</option>
                      <option value="50k+">$50,000+</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Tell me about your project</label>
                    <textarea
                      required
                      rows={6}
                      className="w-full px-4 py-3 rounded-lg bg-surface border border-border
                                 focus:border-foreground focus:ring-1 focus:ring-foreground
                                 transition-colors outline-none resize-none"
                      placeholder="What are you looking to achieve? What's your timeline?"
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-foreground text-background
                               font-medium rounded-lg hover:bg-foreground/90 transition-colors"
                  >
                    Send Message
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </form>
              )}
            </motion.div>

            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              {/* Direct Contact */}
              <div className="p-6 rounded-xl bg-surface border border-border">
                <h3 className="font-semibold mb-4">Direct Contact</h3>
                <div className="space-y-4">
                  <a
                    href="mailto:hello@adrialdesigns.com"
                    className="flex items-center gap-3 text-foreground-secondary hover:text-foreground transition-colors"
                  >
                    <span className="text-accent"><IconMail /></span>
                    hello@adrialdesigns.com
                  </a>
                  <div className="flex items-center gap-3 text-foreground-secondary">
                    <span className="text-accent"><IconMapPin /></span>
                    Chapel Hill, NC
                  </div>
                </div>
              </div>

              {/* Response Time */}
              <div className="p-6 rounded-xl bg-surface border border-border">
                <h3 className="font-semibold mb-4">What to Expect</h3>
                <ul className="space-y-3 text-foreground-secondary text-[15px]">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 mt-2 rounded-full bg-accent flex-shrink-0" />
                    Response within 24 hours
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 mt-2 rounded-full bg-accent flex-shrink-0" />
                    Free 30-minute discovery call
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 mt-2 rounded-full bg-accent flex-shrink-0" />
                    Custom proposal within 1 week
                  </li>
                </ul>
              </div>

              {/* FAQ */}
              <div className="p-6 rounded-xl bg-surface border border-border">
                <h3 className="font-semibold mb-4">Common Questions</h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-medium text-sm mb-1">What&apos;s your typical timeline?</p>
                    <p className="text-sm text-foreground-muted">
                      Most projects take 4-8 weeks, depending on scope.
                    </p>
                  </div>
                  <div>
                    <p className="font-medium text-sm mb-1">Do you work with research institutions?</p>
                    <p className="text-sm text-foreground-muted">
                      Yes! I have extensive experience with universities and public health organizations.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
