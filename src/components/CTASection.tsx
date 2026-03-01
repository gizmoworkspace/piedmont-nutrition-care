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
    <section className="bg-green-800">
      <div className="max-w-3xl mx-auto px-6 py-20 md:py-28 text-center">
        <h2 className="font-heading text-2xl md:text-4xl text-white mb-8 leading-snug">{headline}</h2>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
          <Link
            href={pHref}
            className="inline-block bg-white text-green-800 px-8 py-4 rounded-[8px] font-body font-semibold hover:bg-green-50 transition-colors shadow-soft"
          >
            {pText}
          </Link>
          {sText && sHref && (
            <Link
              href={sHref}
              className="inline-block border border-white/40 text-white px-8 py-4 rounded-[8px] font-body font-semibold hover:bg-green-700 transition-colors"
            >
              {sText}
            </Link>
          )}
        </div>
        {trigs && (
          <p className="text-green-200 text-sm font-body mb-6">
            {trigs.join("  ·  ")}
          </p>
        )}
        {showPhone && (
          <p className="font-body text-sm text-green-300">
            Prefer to call?{" "}
            <a href="tel:3369865388" className="text-white underline decoration-green-400 hover:decoration-white transition-colors">
              336-986-5388
            </a>
          </p>
        )}
        {testimonial && (
          <div className="mt-10 pt-8 border-t border-green-600/40">
            <p className="italic text-green-100 text-sm max-w-lg mx-auto leading-relaxed">
              &ldquo;{testimonial.quote}&rdquo;
            </p>
            <p className="text-green-300 text-xs font-body mt-3">&mdash; {testimonial.author}</p>
          </div>
        )}
      </div>
    </section>
  );
}
