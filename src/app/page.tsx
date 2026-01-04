import Hero from '@/components/Hero';
import WorkGrid from '@/components/WorkGrid';
import Process from '@/components/Process';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Hero />
      <WorkGrid />
      <Process />

      {/* CTA Section */}
      <section className="py-24 px-4 bg-background">
        <div className="max-w-4xl mx-auto text-center">
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
        </div>
      </section>
    </>
  );
}
