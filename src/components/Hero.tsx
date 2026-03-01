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
  imageAlt = "Warm, inviting clinical nutrition office with natural light",
}: HeroProps) {
  return (
    <section className="relative bg-gradient-hero overflow-hidden grain-overlay min-h-[60vh] flex items-center">
      <div className="absolute inset-0 bg-dot-pattern bg-dot opacity-[0.03]" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-green-400/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 md:py-28 lg:py-32 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl text-white leading-tight mb-6 animate-fade-in-up drop-shadow-lg">
              {headline}
            </h1>
            <p className="text-lg md:text-xl text-green-100/80 leading-relaxed mb-8 max-w-xl animate-fade-in-up-delay-1">
              {subheadline}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-6 animate-fade-in-up-delay-2">
              <Link href={primaryCTA.href} className="btn-primary text-center !shadow-glow-green">
                {primaryCTA.text}
              </Link>
              {secondaryCTA && (
                <Link href={secondaryCTA.href} className="inline-block border-2 border-white/30 text-white hover:bg-white/10 font-medium py-3.5 px-8 rounded-[8px] transition-all duration-300 text-center">
                  {secondaryCTA.text}
                </Link>
              )}
            </div>
            {clickTriggers && (
              <p className="text-green-200/60 text-sm animate-fade-in-up-delay-3">
                {clickTriggers.join("  ·  ")}
              </p>
            )}
          </div>
          <div className="hidden lg:block">
            <div className="relative rounded-2xl overflow-hidden shadow-deep aspect-[4/3]">
              <img
                src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=800&h=600&fit=crop"
                alt={imageAlt}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-950/20 to-transparent" />
            </div>
          </div>
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
