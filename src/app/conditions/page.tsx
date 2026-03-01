import type { Metadata } from "next";
import Link from "next/link";
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
  },
  {
    title: "IBS & Digestive Disorders",
    hook: "Bloating, abdominal pain, and unpredictable bowel habits resolved through targeted gut microbiome restoration.",
    href: "/conditions/ibs",
  },
  {
    title: "Oncology Nutrition",
    hook: "Post-treatment gut recovery, immune support, and weight management for cancer survivors.",
    href: "/conditions/oncology",
  },
  {
    title: "Cardiovascular Health",
    hook: "Cholesterol optimization and blood pressure support through targeted food chemistry protocols.",
    href: "/conditions/heart-health",
  },
  {
    title: "Sustainable Weight Management",
    hook: "Root-cause metabolic repair, GLP-1 medication off-ramp support, and perimenopause weight resistance solutions.",
    href: "/conditions/weight-management",
  },
];

export default function Conditions() {
  return (
    <>
      <section className="section-padding bg-warm-50">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl text-warm-950 leading-tight mb-6">
              Your condition is specific. Your nutrition plan should be, too.
            </h1>
            <p className="text-lg text-warm-600 leading-relaxed max-w-2xl mx-auto">
              Piedmont Nutrition Care provides evidence-based Medical Nutrition Therapy for chronic metabolic, gastrointestinal, and weight-related conditions. Select your condition below to see how a root-cause, food-chemistry approach applies to your specific situation.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {conditions.map((c) => (
              <Link
                key={c.href}
                href={c.href}
                className="bg-white rounded-[8px] p-8 shadow-card hover:shadow-lifted transition-all duration-200 group border-t-2 border-green-400"
              >
                <h2 className="font-heading text-xl text-warm-900 group-hover:text-green-600 mb-3 transition-colors">
                  {c.title}
                </h2>
                <p className="text-warm-600 leading-relaxed mb-4 text-sm">{c.hook}</p>
                <span className="inline-flex items-center gap-1 text-green-600 font-medium text-sm">
                  Learn more
                  <ArrowRightIcon className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
