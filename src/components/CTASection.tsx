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
      <div className="max-w-3xl mx-auto px-5 sm:px-8 md:px-12 lg:px-20 py-20 sm:py-24 md:py-32 lg:py-40 text-center relative z-10">
        <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl text-white mb-8 sm:mb-10 leading-[1.12] tracking-tight">{headline}</h2>
        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6">
          <Link
            href={pHref}
            className="inline-block bg-white text-green-800 px-6 sm:px-8 py-3.5 sm:py-4 rounded-[8px] font-body font-semibold hover:bg-green-50 transition-colors duration-300 shadow-card text-sm sm:text-base"
          >
            {pText}
          </Link>
          {sText && sHref && (
            <Link
              href={sHref}
              className="inline-block border border-white/30 text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-[8px] font-body font-semibold hover:bg-white/10 transition-colors duration-300 text-sm sm:text-base"
            >
              {sText}
            </Link>
          )}
        </div>
        {trigs && (
          <p className="text-green-200/70 text-xs sm:text-sm font-body mb-4">
            {trigs.join("  ·  ")}
          </p>
        )}
        {showPhone && (
          <p className="font-body text-xs sm:text-sm text-green-300/60">
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
