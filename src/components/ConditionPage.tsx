import Link from "next/link";
import TestimonialCard from "./TestimonialCard";
import CTASection from "./CTASection";

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
      <section className="section-padding bg-gradient-to-br from-sage-50 via-warm-50 to-cream">
        <div className="container-wide">
          <div className="mb-4">
            <Link href="/conditions" className="text-sage-600 text-sm hover:underline">
              ← All Conditions
            </Link>
          </div>
          <div className="max-w-3xl">
            <h1 className="font-heading text-4xl md:text-5xl text-sage-900 leading-tight mb-6">
              {headline}
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">{subheadline}</p>
          </div>
        </div>
      </section>

      {/* AGITATION */}
      <section className="section-padding">
        <div className="container-narrow">
          <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
            {agitation.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="section-padding bg-warm-50">
        <div className="container-narrow">
          <h2 className="font-heading text-3xl md:text-4xl text-sage-800 mb-8">
            How It Works
          </h2>
          <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
            {howItWorks.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="section-padding">
        <div className="container-narrow">
          <TestimonialCard
            quote={testimonial.quote}
            author={testimonial.author}
            context={testimonial.context}
          />
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
