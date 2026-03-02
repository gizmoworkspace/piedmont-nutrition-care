import type { Metadata } from "next";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { getGlobal } from "@/lib/content";

export const metadata: Metadata = {
  title: "Videos | Piedmont Nutrition Care",
  description: "Watch the latest nutrition tips, cooking demos, and health education videos from Jeanne Doherty, MS, RD, LDN.",
};

export default function Videos() {
  const global = getGlobal();

  return (
    <>
      {/* HERO */}
      <section className="relative section-padding bg-gradient-to-br from-green-950 via-green-900 to-green-800 overflow-hidden grain-overlay">
        <div className="absolute inset-0 bg-dot-pattern bg-dot opacity-[0.03]" />
        <div className="container-narrow relative z-10">
          <div className="text-center mx-auto">
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl text-white leading-tight mb-6 animate-fade-in-up drop-shadow-lg">
              Watch &amp; Learn
            </h1>
            <p className="text-lg text-green-100/90 leading-relaxed animate-fade-in-up-delay-1">
              Nutrition tips, cooking demos, and food science — straight from Jeanne.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1200 60" preserveAspectRatio="none" className="block w-full h-[30px] md:h-[50px]">
            <path d="M0,60 C300,20 900,20 1200,60 L1200,60 L0,60 Z" fill="#FDFBF7" />
          </svg>
        </div>
      </section>

      {/* FEATURED VIDEO */}
      {global.youtubeVideoUrl && (
        <section className="section-padding bg-cream">
          <div className="max-w-4xl mx-auto">
            <AnimateOnScroll>
              <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl text-warm-950 mb-8 text-center">
                Latest Video
              </h2>
            </AnimateOnScroll>
            <AnimateOnScroll>
              <div className="rounded-2xl overflow-hidden shadow-deep aspect-video">
                <iframe
                  src={global.youtubeVideoUrl.replace("watch?v=", "embed/")}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title="Latest video from Jeanne Doherty"
                />
              </div>
            </AnimateOnScroll>
          </div>
        </section>
      )}

      {/* RECIPE OF THE WEEK */}
      {global.recipeOfTheWeek?.title && (
        <section className="section-padding bg-white">
          <div className="max-w-4xl mx-auto">
            <AnimateOnScroll>
              <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl text-warm-950 mb-8 text-center">
                Recipe of the Week
              </h2>
            </AnimateOnScroll>
            <AnimateOnScroll>
              <div className="bg-cream rounded-2xl shadow-card border border-warm-100/50 overflow-hidden">
                <div className={`${global.recipeOfTheWeek.imageUrl ? 'grid md:grid-cols-2' : ''}`}>
                  {global.recipeOfTheWeek.imageUrl && (
                    <div className="aspect-video md:aspect-auto">
                      <img
                        src={global.recipeOfTheWeek.imageUrl}
                        alt={global.recipeOfTheWeek.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <div className="p-8 md:p-10 flex flex-col justify-center">
                    <h3 className="font-heading text-2xl md:text-3xl text-warm-900 mb-4">{global.recipeOfTheWeek.title}</h3>
                    {global.recipeOfTheWeek.description && (
                      <p className="text-warm-600 leading-relaxed text-lg mb-6">{global.recipeOfTheWeek.description}</p>
                    )}
                    {global.recipeOfTheWeek.youtubeUrl && (
                      <a href={global.recipeOfTheWeek.youtubeUrl} target="_blank" rel="noopener noreferrer" className="text-green-600 font-semibold hover:underline mb-2">
                        Watch the video →
                      </a>
                    )}
                    {global.recipeOfTheWeek.linkUrl && (
                      <a href={global.recipeOfTheWeek.linkUrl} target="_blank" rel="noopener noreferrer" className="text-green-600 font-semibold hover:underline">
                        View full recipe →
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="section-padding bg-cream">
        <div className="container-narrow text-center">
          <AnimateOnScroll>
            <p className="text-warm-600 text-lg leading-relaxed max-w-2xl mx-auto">
              Want personalized nutrition guidance? Jeanne works one-on-one with patients in Winston-Salem and virtually across North Carolina.
            </p>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
