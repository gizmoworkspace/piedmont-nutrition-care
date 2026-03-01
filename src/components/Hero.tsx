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
    <section className="relative bg-warm-50 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 py-20 md:py-28 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl text-warm-950 leading-tight mb-6">
              {headline}
            </h1>
            <p className="text-lg md:text-xl text-warm-600 leading-relaxed mb-8 max-w-xl">
              {subheadline}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <Link href={primaryCTA.href} className="btn-primary text-center">
                {primaryCTA.text}
              </Link>
              {secondaryCTA && (
                <Link href={secondaryCTA.href} className="btn-secondary text-center">
                  {secondaryCTA.text}
                </Link>
              )}
            </div>
            {clickTriggers && (
              <p className="text-sm text-warm-500 font-body">
                {clickTriggers.join("  ·  ")}
              </p>
            )}
          </div>
          <div className="hidden lg:block">
            <div className="bg-warm-200/50 rounded-[8px] aspect-[4/3] flex items-center justify-center text-warm-400 text-sm font-body p-8 text-center">
              [Photo: {imageAlt}]
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
