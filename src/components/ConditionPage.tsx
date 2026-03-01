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
      <section className="relative section-padding bg-gradient-to-br from-green-950 via-green-900 to-green-800 overflow-hidden grain-overlay">
        <div className="absolute inset-0 bg-dot-pattern bg-dot opacity-[0.03]" />
        <div className="container-wide relative z-10">
          <div className="mb-6">
            <Link href="/conditions" className="inline-flex items-center gap-1.5 text-green-300/80 text-sm hover:text-white transition-colors">
              <ArrowLeftIcon className="w-4 h-4" />
              All Conditions
            </Link>
          </div>
          <div className="max-w-3xl">
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl text-white leading-tight mb-6 animate-fade-in-up drop-shadow-lg">
              {headline}
            </h1>
            <p className="text-lg text-green-100/90 leading-relaxed max-w-2xl animate-fade-in-up-delay-1">{subheadline}</p>
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
        <div className="container-wide">
          <div className="space-y-6 text-warm-600 leading-relaxed text-lg max-w-4xl">
            {agitation.map((p, i) => (
              <AnimateOnScroll key={i} delay={i * 100}>
                <p>{p}</p>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="relative section-padding bg-gradient-to-br from-green-50 via-cream to-amber-50 overflow-hidden">
        <div className="absolute inset-0 bg-dot-pattern bg-dot opacity-[0.03]" />
        <div className="container-wide relative z-10">
          <AnimateOnScroll>
            <h2 className="font-heading text-3xl md:text-4xl text-warm-950 mb-8">
              How It Works
            </h2>
          </AnimateOnScroll>
          <div className="space-y-6 text-warm-600 leading-relaxed text-lg max-w-4xl">
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
