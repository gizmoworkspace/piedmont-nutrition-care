import type { Metadata } from "next";
import Link from "next/link";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { ArrowRightIcon, DropletIcon, DigestiveIcon, RibbonIcon, HeartIcon, ScaleIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Conditions We Treat | Piedmont Nutrition Care",
  description: "Evidence-based Medical Nutrition Therapy for diabetes, IBS, oncology nutrition, heart health, and weight management in Winston-Salem, NC.",
};

const conditions = [
  {
    title: "Diabetes & Blood Sugar Management",
    hook: "A1C reduction, insulin sensitivity, and blood sugar stabilization through food chemistry — not just calorie restriction.",
    href: "/conditions/diabetes",
    Icon: DropletIcon,
    iconColor: "text-red-500",
    size: "md:col-span-2",
  },
  {
    title: "IBS & Digestive Disorders",
    hook: "Bloating, abdominal pain, and unpredictable bowel habits resolved through targeted gut microbiome restoration.",
    href: "/conditions/ibs",
    Icon: DigestiveIcon,
    iconColor: "text-green-600",
    size: "",
  },
  {
    title: "Oncology Nutrition",
    hook: "Post-treatment gut recovery, immune support, and weight management for cancer survivors.",
    href: "/conditions/oncology",
    Icon: RibbonIcon,
    iconColor: "text-purple-500",
    size: "",
  },
  {
    title: "Cardiovascular Health",
    hook: "Cholesterol optimization and blood pressure support through targeted food chemistry protocols.",
    href: "/conditions/heart-health",
    Icon: HeartIcon,
    iconColor: "text-rose-500",
    size: "",
  },
  {
    title: "Sustainable Weight Management",
    hook: "Root-cause metabolic repair, GLP-1 medication off-ramp support, and perimenopause weight resistance solutions.",
    href: "/conditions/weight-management",
    Icon: ScaleIcon,
    iconColor: "text-blue-500",
    size: "md:col-span-2",
  },
];

export default function Conditions() {
  return (
    <>
      <section className="relative bg-gradient-hero overflow-hidden min-h-[50vh] flex items-center">
        <div className="absolute inset-0 bg-black/15" />
        <div className="max-w-6xl mx-auto px-5 sm:px-8 md:px-12 lg:px-20 py-20 sm:py-24 md:py-32 lg:py-36 w-full relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-heading text-[1.75rem] sm:text-3xl md:text-4xl lg:text-[2.75rem] xl:text-5xl text-white leading-[1.12] mb-5 sm:mb-6 md:mb-8 animate-fade-in-up tracking-tight">
              Your condition is specific. Your nutrition plan should be, too.
            </h1>
            <p className="text-[0.95rem] sm:text-base md:text-lg text-white/65 leading-relaxed max-w-2xl mx-auto animate-fade-in-up-delay-1">
              Piedmont Nutrition Care provides evidence-based Medical Nutrition Therapy for chronic metabolic, gastrointestinal, and weight-related conditions. Select your condition below to see how a root-cause, food-chemistry approach applies to your specific situation.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-cream">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 md:px-12 lg:px-20">
          <div className="grid md:grid-cols-3 gap-8 md:gap-12 stagger-children">
            {conditions.map((c) => (
              <AnimateOnScroll key={c.href} className={c.size}>
                <Link
                  href={c.href}
                  className="block h-full bg-white rounded-2xl p-8 md:p-10 shadow-card hover:shadow-lifted transition-shadow duration-300 group border border-warm-100/50"
                >
                  <div className="w-12 h-12 rounded-xl bg-warm-50 flex items-center justify-center mb-6 group-hover:bg-green-50 transition-colors">
                    <c.Icon className={`w-6 h-6 ${c.iconColor}`} />
                  </div>
                  <h2 className="font-heading text-xl md:text-2xl text-warm-900 group-hover:text-green-600 mb-4 transition-colors tracking-tight">
                    {c.title}
                  </h2>
                  <p className="text-warm-600 leading-relaxed mb-6 text-sm">{c.hook}</p>
                  <span className="inline-flex items-center gap-1 text-green-600 font-medium text-sm group-hover:gap-2 transition-shadow duration-300">
                    Learn more
                    <ArrowRightIcon className="w-4 h-4" />
                  </span>
                </Link>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
