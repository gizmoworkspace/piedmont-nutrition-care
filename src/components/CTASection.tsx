import Link from "next/link";

interface CTASectionProps {
  headline: string;
  primaryCTA?: { text: string; href: string };
  primaryLabel?: string;
  primaryHref?: string;
  secondaryCTA?: { text: string; href: string };
  secondaryLabel?: string;
  secondaryHref?: string;
  clickTriggers?: string[];
  triggers?: string[];
  testimonial?: { quote: string; author: string };
  showPhone?: boolean;
}

export default function CTASection({
  headline,
  primaryCTA,
  primaryLabel,
  primaryHref,
  secondaryCTA,
  secondaryLabel,
  secondaryHref,
  clickTriggers,
  triggers,
  testimonial,
  showPhone = true,
}: CTASectionProps) {
  const pText = primaryCTA?.text || primaryLabel || "Book Your Assessment";
  const pHref = primaryCTA?.href || primaryHref || "/contact";
  const sText = secondaryCTA?.text || secondaryLabel;
  const sHref = secondaryCTA?.href || secondaryHref;
  const trigs = clickTriggers || triggers;

  return (
    <section className="bg-sage-700 text-white">
      <div className="max-w-3xl mx-auto px-6 py-16 md:py-24 text-center">
        <h2 className="font-heading text-2xl md:text-4xl mb-8">{headline}</h2>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
          <Link
            href={pHref}
            className="inline-block bg-white text-sage-800 px-8 py-4 rounded-lg text-lg font-sans font-semibold hover:bg-warm-100 transition-colors"
          >
            {pText}
          </Link>
          {sText && sHref && (
            <Link
              href={sHref}
              className="inline-block border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-sans font-semibold hover:bg-sage-600 transition-colors"
            >
              {sText}
            </Link>
          )}
        </div>
        {trigs && (
          <p className="text-sage-200 text-sm font-sans mb-6">
            {trigs.join(" · ")}
          </p>
        )}
        {showPhone && (
          <p className="font-sans text-sm text-sage-200">
            Prefer to call?{" "}
            <a href="tel:3369865388" className="text-white underline hover:no-underline">
              336-986-5388
            </a>
          </p>
        )}
        {testimonial && (
          <div className="mt-8 pt-8 border-t border-sage-600">
            <p className="italic text-sage-100 text-sm max-w-lg mx-auto">
              &ldquo;{testimonial.quote}&rdquo;
            </p>
            <p className="text-sage-300 text-xs font-sans mt-2">— {testimonial.author}</p>
          </div>
        )}
      </div>
    </section>
  );
}
