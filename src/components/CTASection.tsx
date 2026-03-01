import Link from "next/link";
import { getGlobal } from "@/lib/content";

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
  showPhone = true,
}: CTASectionProps) {
  const global = getGlobal();
  const phoneClean = global.phone.replace(/-/g, "");

  const pText = primaryCTA?.text || primaryLabel || "Book Your Assessment";
  const pHref = primaryCTA?.href || primaryHref || global.bookingUrl;
  const sText = secondaryCTA?.text || secondaryLabel;
  const sHref = secondaryCTA?.href || secondaryHref;
  const trigs = clickTriggers || triggers;

  return (
    <section className="bg-gradient-cta relative overflow-hidden">
      <div className="absolute inset-0 bg-black/20" />
      <div className="max-w-3xl mx-auto px-6 md:px-12 lg:px-20 py-28 md:py-36 lg:py-44 text-center relative z-10">
        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-white mb-12 leading-[1.1] tracking-tight">{headline}</h2>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Link
            href={pHref}
            className="inline-block bg-white text-green-800 px-8 py-4 rounded-[8px] font-body font-semibold hover:bg-green-50 hover:scale-[1.02] transition-all duration-300 shadow-card hover:shadow-deep"
          >
            {pText}
          </Link>
          {sText && sHref && (
            <Link
              href={sHref}
              className="inline-block border border-white/30 text-white px-8 py-4 rounded-[8px] font-body font-semibold hover:bg-white/10 transition-all duration-300"
            >
              {sText}
            </Link>
          )}
        </div>
        {trigs && (
          <p className="text-green-200/70 text-sm font-body mb-6">
            {trigs.join("  ·  ")}
          </p>
        )}
        {showPhone && (
          <p className="font-body text-sm text-green-300/60">
            Prefer to call?{" "}
            <a href={`tel:${phoneClean}`} className="text-white/80 underline decoration-green-400/40 hover:decoration-white transition-colors">
              {global.phone}
            </a>
          </p>
        )}
      </div>
    </section>
  );
}
