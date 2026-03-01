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
      <section className="relative bg-gradient-hero overflow-hidden min-h-[50vh] sm:min-h-[55vh] max-h-[700px] flex items-center">
        <div className="absolute inset-0 bg-black/15" />
        <div className="max-w-6xl mx-auto px-5 sm:px-8 md:px-12 lg:px-20 py-20 sm:py-24 md:py-32 lg:py-36 w-full relative z-10">
          <div className="mb-5">
            <Link href="/conditions" className="inline-flex items-center gap-1.5 text-green-300/60 text-sm hover:text-white transition-colors">
              <ArrowLeftIcon className="w-4 h-4" />
              All Conditions
            </Link>
          </div>
          <div className="max-w-2xl lg:max-w-3xl">
            <h1 className="font-heading text-[1.75rem] sm:text-3xl md:text-4xl lg:text-[2.75rem] xl:text-5xl text-white leading-[1.12] mb-5 sm:mb-6 md:mb-8 animate-fade-in-up tracking-tight">
              {headline}
            </h1>
            <p className="text-[0.95rem] sm:text-base md:text-lg text-white/65 leading-relaxed max-w-xl lg:max-w-2xl animate-fade-in-up-delay-1">{subheadline}</p>
          </div>
        </div>
      </section>

      {/* AGITATION */}
      <section className="section-padding bg-cream">
        <div className="container-narrow">
          <div className="space-y-6 text-warm-600 leading-relaxed text-[0.95rem] sm:text-base md:text-lg max-w-2xl">
            {agitation.map((p, i) => (
              <AnimateOnScroll key={i}>
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
            <p className="text-xs uppercase tracking-[0.2em] text-warm-400 font-medium mb-3">How It Works</p>
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl text-warm-950 mb-8 tracking-tight leading-[1.1]">
              The Clinical Approach
            </h2>
          </AnimateOnScroll>
          <div className="space-y-6 text-warm-600 leading-relaxed text-[0.95rem] sm:text-base md:text-lg max-w-2xl">
            {howItWorks.map((p, i) => (
              <AnimateOnScroll key={i}>
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
