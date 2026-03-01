import type { Metadata } from "next";
import Link from "next/link";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { ArrowRightIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Conditions We Treat | Piedmont Nutrition Care",
  description: "Evidence-based Medical Nutrition Therapy for diabetes, IBS, oncology nutrition, heart health, and weight management in Winston-Salem, NC.",
};

const conditions = [
  {
    title: "Diabetes & Blood Sugar Management",
    hook: "A1C reduction, insulin sensitivity, and blood sugar stabilization through food chemistry — not just calorie restriction.",
    href: "/conditions/diabetes",
    icon: "🩸",
    accent: "from-red-50 to-amber-50",
    size: "md:col-span-2",
  },
  {
    title: "IBS & Digestive Disorders",
    hook: "Bloating, abdominal pain, and unpredictable bowel habits resolved through targeted gut microbiome restoration.",
    href: "/conditions/ibs",
    icon: "🫁",
    accent: "from-green-50 to-emerald-50",
    size: "",
  },
  {
    title: "Oncology Nutrition",
    hook: "Post-treatment gut recovery, immune support, and weight management for cancer survivors.",
    href: "/conditions/oncology",
    icon: "🎗️",
    accent: "from-purple-50 to-pink-50",
    size: "",
  },
  {
    title: "Cardiovascular Health",
    hook: "Cholesterol optimization and blood pressure support through targeted food chemistry protocols.",
    href: "/conditions/heart-health",
    icon: "❤️",
    accent: "from-rose-50 to-red-50",
    size: "",
  },
  {
    title: "Sustainable Weight Management",
    hook: "Root-cause metabolic repair, GLP-1 medication off-ramp support, and perimenopause weight resistance solutions.",
    href: "/conditions/weight-management",
    icon: "⚖️",
    accent: "from-blue-50 to-cyan-50",
    size: "md:col-span-2",
  },
];

export default function Conditions() {
  return (
    <>
      <section className="relative section-padding bg-gradient-to-br from-green-950 via-green-900 to-green-800 overflow-hidden grain-overlay">
        <div className="absolute inset-0 bg-dot-pattern bg-dot opacity-[0.03]" />
        <div className="container-wide relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl text-white leading-tight mb-6 animate-fade-in-up drop-shadow-lg">
              Your condition is specific. Your nutrition plan should be, too.
            </h1>
            <p className="text-lg text-green-100/80 leading-relaxed max-w-2xl mx-auto animate-fade-in-up-delay-1">
              Piedmont Nutrition Care provides evidence-based Medical Nutrition Therapy for chronic metabolic, gastrointestinal, and weight-related conditions. Select your condition below to see how a root-cause, food-chemistry approach applies to your specific situation.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1200 60" preserveAspectRatio="none" className="block w-full h-[30px] md:h-[50px]">
            <path d="M0,60 C300,20 900,20 1200,60 L1200,60 L0,60 Z" fill="#FDFBF7" />
          </svg>
        </div>
      </section>

      <section className="section-padding bg-cream">
        <div className="container-wide">
          {/* Bento grid */}
          <div className="grid md:grid-cols-3 gap-6 stagger-children">
            {conditions.map((c) => (
              <AnimateOnScroll key={c.href} className={c.size}>
                <Link
                  href={c.href}
                  className={`block h-full bg-gradient-to-br ${c.accent} rounded-2xl p-8 shadow-card hover:shadow-deep transition-all duration-300 group border border-warm-100/30 hover:-translate-y-1 relative overflow-hidden`}
                >
                  <div className="absolute top-4 right-4 text-4xl opacity-20 group-hover:opacity-30 transition-opacity">{c.icon}</div>
                  <div className="relative z-10">
                    <div className="text-3xl mb-4">{c.icon}</div>
                    <h2 className="font-heading text-xl md:text-2xl text-warm-900 group-hover:text-green-600 mb-3 transition-colors">
                      {c.title}
                    </h2>
                    <p className="text-warm-600 leading-relaxed mb-4 text-sm">{c.hook}</p>
                    <span className="inline-flex items-center gap-1 text-green-600 font-medium text-sm group-hover:gap-2 transition-all duration-300">
                      Learn more
                      <ArrowRightIcon className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
