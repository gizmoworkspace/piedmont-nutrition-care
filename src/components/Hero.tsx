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
    <section className="relative bg-gradient-hero overflow-hidden min-h-[60vh] flex items-center">
      <div className="absolute inset-0 bg-black/10" />
      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 lg:px-20 py-28 md:py-36 lg:py-44 w-full">
        <div className="max-w-3xl">
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white leading-[1.1] mb-8 animate-fade-in-up tracking-tight">
            {headline}
          </h1>
          <p className="text-lg md:text-xl text-green-100/80 leading-relaxed mb-10 max-w-2xl animate-fade-in-up-delay-1">
            {subheadline}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-6 animate-fade-in-up-delay-2">
            <Link href={primaryCTA.href} className="btn-primary text-center !shadow-glow-green">
              {primaryCTA.text}
            </Link>
            {secondaryCTA && (
              <Link href={secondaryCTA.href} className="inline-block border border-white/30 text-white hover:bg-white/10 font-medium py-3.5 px-8 rounded-[8px] transition-all duration-300 text-center">
                {secondaryCTA.text}
              </Link>
            )}
          </div>
          {clickTriggers && (
            <p className="text-green-200/50 text-sm animate-fade-in-up-delay-3">
              {clickTriggers.join("  ·  ")}
            </p>
          )}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 60" preserveAspectRatio="none" className="block w-full h-[30px] md:h-[50px]">
          <path d="M0,60 C300,20 900,20 1200,60 L1200,60 L0,60 Z" fill="#FDFBF7" />
        </svg>
      </div>
    </section>
  );
}
