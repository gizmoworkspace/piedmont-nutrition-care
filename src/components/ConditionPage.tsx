import Link from "next/link";
import TestimonialCard from "./TestimonialCard";
import CTASection from "./CTASection";
import AnimateOnScroll from "./AnimateOnScroll";
import { ArrowLeftIcon } from "./Icons";

interface ConditionPageProps {
  headline: string;
  subheadline: string;
  agitation: string[];
  howItWorks: string[];
  testimonial: { quote: string; author: string; context?: string };
  ctaLabel: string;
  ctaTriggers: string[];
}

export default function ConditionPage({
  headline,
  subheadline,
  agitation,
  howItWorks,
  testimonial,
  ctaLabel,
  ctaTriggers,
}: ConditionPageProps) {
  return (
    <>
      {/* HERO */}
      <section className="relative bg-gradient-hero overflow-hidden min-h-[50vh] flex items-center">
        <div className="absolute inset-0 bg-black/10" />
        <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20 py-28 md:py-36 lg:py-44 w-full relative z-10">
          <div className="mb-6">
            <Link href="/conditions" className="inline-flex items-center gap-1.5 text-green-300/60 text-sm hover:text-white transition-colors">
              <ArrowLeftIcon className="w-4 h-4" />
              All Conditions
            </Link>
          </div>
          <div className="max-w-3xl">
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white leading-[1.1] mb-8 animate-fade-in-up tracking-tight">
              {headline}
            </h1>
            <p className="text-lg text-green-100/80 leading-relaxed max-w-2xl animate-fade-in-up-delay-1">{subheadline}</p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1200 60" preserveAspectRatio="none" className="block w-full h-[30px] md:h-[50px]">
            <path d="M0,60 C300,20 900,20 1200,60 L1200,60 L0,60 Z" fill="#FDFBF7" />
          </svg>
        </div>
      </section>

      {/* AGITATION */}
      <section className="section-padding bg-cream">
        <div className="container-narrow">
          <div className="space-y-8 text-warm-600 leading-relaxed text-base md:text-lg max-w-2xl">
            {agitation.map((p, i) => (
              <AnimateOnScroll key={i} delay={i * 100}>
                <p>{p}</p>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="section-padding bg-warm-50">
        <div className="container-narrow">
          <AnimateOnScroll>
            <p className="text-xs uppercase tracking-[0.2em] text-warm-400 font-medium mb-4">How It Works</p>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-warm-950 mb-10 tracking-tight leading-[1.1]">
              The Clinical Approach
            </h2>
          </AnimateOnScroll>
          <div className="space-y-8 text-warm-600 leading-relaxed text-base md:text-lg max-w-2xl">
            {howItWorks.map((p, i) => (
              <AnimateOnScroll key={i} delay={i * 100}>
                <p>{p}</p>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="section-padding bg-cream">
        <div className="container-narrow">
          <AnimateOnScroll>
            <TestimonialCard
              quote={testimonial.quote}
              author={testimonial.author}
              context={testimonial.context}
            />
          </AnimateOnScroll>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        headline={ctaLabel}
        triggers={ctaTriggers}
      />
    </>
  );
}
