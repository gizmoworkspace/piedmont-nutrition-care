import Link from "next/link";

interface HeroProps {
  headline: string;
  subheadline: string;
  primaryCTA?: { text: string; href: string };
  secondaryCTA?: { text: string; href: string };
  clickTriggers?: string[];
  imageAlt?: string;
}

export default function Hero({
  headline,
  subheadline,
  primaryCTA = { text: "Book Your Assessment", href: "/contact" },
  secondaryCTA,
  clickTriggers,
}: HeroProps) {
  return (
    <section className="relative bg-gradient-hero overflow-hidden min-h-[50vh] sm:min-h-[55vh] max-h-[700px] flex items-center">
      <div className="absolute inset-0 bg-black/15" />
      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8 md:px-12 lg:px-20 py-20 sm:py-24 md:py-32 lg:py-36 w-full">
        <div className="max-w-2xl lg:max-w-3xl">
          <h1 className="font-heading text-[1.75rem] sm:text-3xl md:text-4xl lg:text-[2.75rem] xl:text-5xl text-white leading-[1.12] mb-5 sm:mb-6 md:mb-8 animate-fade-in-up tracking-tight">
            {headline}
          </h1>
          <p className="text-[0.95rem] sm:text-base md:text-lg text-white/65 leading-relaxed mb-6 sm:mb-8 max-w-xl lg:max-w-2xl animate-fade-in-up-delay-1">
            {subheadline}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 mb-5 animate-fade-in-up-delay-2">
            <Link href={primaryCTA.href} className="btn-primary text-center text-sm sm:text-base">
              {primaryCTA.text}
            </Link>
            {secondaryCTA && (
              <Link href={secondaryCTA.href} className="inline-block border border-white/20 text-white hover:bg-white/10 font-medium py-3 px-6 sm:py-3.5 sm:px-8 rounded-[8px] transition-colors duration-300 text-center text-sm sm:text-base">
                {secondaryCTA.text}
              </Link>
            )}
          </div>
          {clickTriggers && (
            <p className="text-white/30 text-xs sm:text-sm animate-fade-in-up-delay-3">
              {clickTriggers.join("  ·  ")}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
