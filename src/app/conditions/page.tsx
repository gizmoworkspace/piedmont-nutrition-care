import type { Metadata } from "next";
import Link from "next/link";

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
      <section className="section-padding bg-gradient-to-br from-sage-50 via-warm-50 to-cream">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-heading text-4xl md:text-5xl text-sage-900 leading-tight mb-6">
              Your condition is specific. Your nutrition plan should be, too.
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Piedmont Nutrition Care provides evidence-based Medical Nutrition Therapy for chronic metabolic, gastrointestinal, and weight-related conditions. Select your condition below to see how a root-cause, food-chemistry approach applies to your specific situation.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {conditions.map((c) => (
              <Link
                key={c.href}
                href={c.href}
                className="bg-white rounded-2xl p-8 shadow-sm border border-sage-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
              >
                <h2 className="font-heading text-xl text-sage-800 group-hover:text-sage-600 mb-3 transition-colors">
                  {c.title}
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">{c.hook}</p>
                <span className="text-sage-600 font-semibold text-sm">
                  Learn more →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
