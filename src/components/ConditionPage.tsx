import Link from "next/link";
import AnimateOnScroll from "./AnimateOnScroll";
import { ArrowLeftIcon } from "./Icons";

interface ConditionPageProps {
  headline: string;
  subheadline: string;
  subheadlineShort?: string;
  agitation: string[];
  agitationShort?: string[];
  howItWorks: string[];
  howItWorksShort?: string[];
}

export default function ConditionPage({
  headline,
  subheadline,
  subheadlineShort,
  agitation,
  agitationShort,
  howItWorks,
  howItWorksShort,
}: ConditionPageProps) {
  return (
    <>
      {/* HERO */}
      <section className="relative section-padding bg-gradient-to-br from-green-950 via-green-900 to-green-800 overflow-hidden grain-overlay">
        <div className="absolute inset-0 bg-dot-pattern bg-dot opacity-[0.03]" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-green-400/10 rounded-full blur-3xl" />
        <div className="container-wide relative z-10">
          <div className="mb-6 max-w-4xl mx-auto text-center">
            <Link href="/conditions" className="inline-flex items-center gap-1.5 text-green-300/80 text-sm hover:text-white transition-colors">
              <ArrowLeftIcon className="w-4 h-4" />
              All Conditions
            </Link>
          </div>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl text-white leading-tight mb-6 animate-fade-in-up drop-shadow-lg">
              {headline}
            </h1>
            <p className="text-lg text-green-100/90 leading-relaxed animate-fade-in-up-delay-1 max-w-3xl mx-auto">
              <span className="hidden md:inline">{subheadline}</span>
              <span className="md:hidden">{subheadlineShort || subheadline}</span>
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1200 60" preserveAspectRatio="none" className="block w-full h-[30px] md:h-[50px]">
            <path d="M0,60 C300,20 900,20 1200,60 L1200,60 L0,60 Z" fill="#FDFBF7" />
          </svg>
        </div>
      </section>

      {/* AGITATION — Editorial card */}
      <section className="section-padding bg-cream">
        <div className="container-wide">
          <div className="relative bg-white rounded-3xl shadow-card border border-warm-100/60 overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-amber-400 via-amber-500 to-green-500 rounded-l-3xl" />
            <div className="px-8 py-10 md:px-14 md:py-14 lg:px-20 lg:py-16">
              {/* Desktop */}
              <div className="hidden md:block space-y-6 text-warm-600 leading-relaxed text-lg max-w-3xl">
                {agitation.map((p, i) => {
                  const isLast = i === agitation.length - 1;
                  const isMid = agitation.length > 2 && i === 1;
                  if (isMid) {
                    return (
                      <AnimateOnScroll key={i} delay={i * 150}>
                        <p className="text-warm-800 font-medium text-xl italic border-l-4 border-amber-300/60 pl-5 my-2">{p}</p>
                      </AnimateOnScroll>
                    );
                  }
                  if (isLast && agitation.length > 1) {
                    return (
                      <AnimateOnScroll key={i} delay={i * 150}>
                        <p className="text-warm-700 font-medium">{p}</p>
                      </AnimateOnScroll>
                    );
                  }
                  return (
                    <AnimateOnScroll key={i} delay={i * 150}>
                      <p>{p}</p>
                    </AnimateOnScroll>
                  );
                })}
              </div>
              {/* Mobile */}
              <div className="md:hidden space-y-5 text-warm-600 leading-relaxed text-base">
                {(agitationShort || agitation).map((p, i) => (
                  <AnimateOnScroll key={i} delay={i * 100}>
                    <p>{p}</p>
                  </AnimateOnScroll>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS — Numbered steps with cards */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <AnimateOnScroll>
            <h2 className="font-heading text-3xl md:text-4xl text-warm-950 mb-12 text-center">
              How Jeanne Treats This
            </h2>
          </AnimateOnScroll>
          <div className="space-y-6 max-w-4xl mx-auto">
            {howItWorks.map((p, i) => (
              <AnimateOnScroll key={`d-${i}`} delay={i * 150}>
                <div className="hidden md:block relative bg-white rounded-2xl p-8 shadow-card border border-warm-100/50 hover:shadow-lifted transition-all duration-300">
                  <span className="absolute top-4 right-6 font-heading text-7xl text-green-100/40 leading-none select-none">{i + 1}</span>
                  <p className="text-warm-600 leading-relaxed text-lg relative z-10">{p}</p>
                </div>
              </AnimateOnScroll>
            ))}
            {(howItWorksShort || howItWorks).map((p, i) => (
              <AnimateOnScroll key={`m-${i}`} delay={i * 100}>
                <div className="md:hidden relative bg-cream rounded-2xl p-6 border border-warm-100/50">
                  <span className="absolute top-3 right-4 font-heading text-5xl text-green-100/40 leading-none select-none">{i + 1}</span>
                  <p className="text-warm-600 leading-relaxed text-base relative z-10">{p}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
