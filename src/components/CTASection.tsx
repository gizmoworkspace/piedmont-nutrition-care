import Link from "next/link";

interface CTASectionProps {
  headline: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  triggers?: string[];
  testimonial?: { quote: string; author: string };
  showPhone?: boolean;
}

export default function CTASection({
  headline,
  primaryLabel = "Book Your Assessment",
  primaryHref = "/contact",
  secondaryLabel,
  secondaryHref,
  triggers,
  testimonial,
  showPhone = true,
}: CTASectionProps) {
  return (
    <section className="section-padding bg-sage-50">
      <div className="container-narrow text-center">
        <h2 className="font-heading text-3xl md:text-4xl text-sage-800 mb-6">
          {headline}
        </h2>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
          <Link href={primaryHref} className="btn-primary text-lg">
            {primaryLabel}
          </Link>
          {secondaryLabel && secondaryHref && (
            <Link href={secondaryHref} className="btn-secondary">
              {secondaryLabel}
            </Link>
          )}
        </div>
        {triggers && (
          <p className="text-sage-600 text-sm mb-4">
            {triggers.join(" · ")}
          </p>
        )}
        {showPhone && (
          <p className="text-gray-500 text-sm">
            Prefer to call?{" "}
            <a href="tel:3369865388" className="text-sage-700 font-semibold hover:underline">
              336-986-5388
            </a>
          </p>
        )}
        {testimonial && (
          <div className="mt-8 max-w-2xl mx-auto">
            <p className="text-gray-600 italic">&ldquo;{testimonial.quote}&rdquo;</p>
            <p className="text-sage-600 font-semibold text-sm mt-2">— {testimonial.author}</p>
          </div>
        )}
      </div>
    </section>
  );
}
