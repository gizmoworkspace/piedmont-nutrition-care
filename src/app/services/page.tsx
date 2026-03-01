import type { Metadata } from "next";
import Link from "next/link";
import TestimonialCard from "@/components/TestimonialCard";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Services & How It Works | Piedmont Nutrition Care",
  description: "Clinical nutrition therapy that fixes the cause — not just the symptoms. Learn about Medical Nutrition Therapy and our 4-step process.",
};

export default function Services() {
  return (
    <>
      {/* HERO */}
      <section className="section-padding bg-gradient-to-br from-sage-50 via-warm-50 to-cream">
        <div className="container-wide">
          <div className="max-w-3xl">
            <h1 className="font-heading text-4xl md:text-5xl text-sage-900 leading-tight mb-6">
              Clinical nutrition therapy that fixes the cause — not just the symptoms
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Your cravings, weight resistance, and digestive pain are downstream symptoms of a compromised gut. Piedmont Nutrition Care identifies the root-cause biological dysfunction — through your lab work, your health history, and clinical food science — and builds a personalized protocol that restores your metabolic foundation from the inside out.
            </p>
          </div>
        </div>
      </section>

      {/* PROOF BAR */}
      <section className="bg-sage-700 text-white py-5">
        <div className="container-wide">
          <div className="flex flex-wrap justify-center gap-4 md:gap-10 text-sm md:text-base font-medium text-center">
            <span>✅ Registered Dietitian Nutritionist (RDN)</span>
            <span>📋 Licensed Dietitian Nutritionist (LDN)</span>
            <span>🎓 MS in Nutrition from UNCG</span>
            <span>🔬 Food Chemistry Specialization</span>
            <span>⭐ 5.0 Google Rating</span>
          </div>
        </div>
      </section>

      {/* AGITATION */}
      <section className="section-padding">
        <div className="container-narrow">
          <h2 className="font-heading text-3xl md:text-4xl text-sage-800 mb-8">
            Why the advice you&apos;ve been following was designed to fail
          </h2>
          <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
            <p>
              Calorie-counting apps treat your body like a math equation. Elimination diets treat food like the enemy. GLP-1 medications suppress your appetite chemically without rebuilding the metabolic foundation that keeps weight off long-term. And your doctor&apos;s 10-minute appointment doesn&apos;t leave time to investigate why your body stopped responding in the first place.
            </p>
            <p>
              These approaches share a common flaw: they manage symptoms without addressing the underlying biological dysfunction. Your gut microbiome (the trillions of bacteria in your digestive tract) directly controls blood sugar regulation, hunger hormone signaling, inflammatory response, and nutrient absorption. When that ecosystem is damaged, no amount of willpower, calorie restriction, or medication alone can produce sustainable results.
            </p>
            <p className="font-semibold text-sage-700">That&apos;s not your failure. That&apos;s biology.</p>
          </div>
        </div>
      </section>

      {/* CROSSHEAD */}
      <section className="py-12 bg-sage-50">
        <div className="container-narrow text-center">
          <p className="font-heading text-2xl md:text-3xl lg:text-4xl text-sage-700 italic">
            Restore the system, and the symptoms resolve themselves.
          </p>
        </div>
      </section>

      {/* WHAT IS MNT */}
      <section className="section-padding">
        <div className="container-narrow">
          <h2 className="font-heading text-3xl md:text-4xl text-sage-800 mb-6">
            What Medical Nutrition Therapy Actually Is
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Medical Nutrition Therapy (MNT) is a clinical, evidence-based treatment delivered by a credentialed Registered Dietitian. It&apos;s not a meal plan from an app. It&apos;s not advice from a wellness influencer. It&apos;s a diagnostic and therapeutic process that uses your actual lab data, health history, and biochemistry to create a targeted nutrition intervention — covered by most major insurance plans because it produces measurable clinical outcomes.
          </p>
        </div>
      </section>

      {/* 4-STEP PROCESS */}
      <section className="section-padding bg-warm-50">
        <div className="container-wide">
          <h2 className="font-heading text-3xl md:text-4xl text-sage-800 mb-12 text-center">
            Your 4-Step Process
          </h2>
          <div className="space-y-8">
            {[
              {
                step: "1",
                label: "Hear You",
                title: "Comprehensive Health Assessment",
                body: "Your first 60-minute session is designed to do what no 10-minute appointment ever could. Jeanne reviews your full health history, current medications, family medical context, lifestyle demands, food preferences, and the things you've already tried — so that you have a clinician who sees the whole picture, not a fragment of it. You'll also discuss your goals: what does \"better\" actually look like for your life?",
              },
              {
                step: "2",
                label: "Gather Specifics",
                title: "Lab Analysis & Root-Cause Identification",
                body: "Jeanne analyzes your blood panels, A1C, cholesterol markers (LDL, HDL, triglycerides), inflammatory indicators, and digestive function — not at a glance, but in depth. She identifies the specific biological mechanisms driving your symptoms: gut dysbiosis (imbalanced gut bacteria), leptin resistance, insulin sensitivity issues, micronutrient deficiencies, or hormonal disruption — so that you finally understand the WHY behind what your body has been doing.",
              },
              {
                step: "3",
                label: "Learn Better Foods",
                title: "Food Chemistry Education",
                body: "This isn't a lecture about calories. Jeanne teaches you how different foods interact with your specific biology at the molecular level: why certain carbohydrates spike your blood sugar while others stabilize it, how specific fiber types feed beneficial gut bacteria, which protein sources support your metabolic goals — so that you make food choices from understanding, not from a rules list you'll eventually abandon.",
              },
              {
                step: "4",
                label: "Your Food Rx",
                title: "Personalized Nutrition Protocol",
                body: "You receive a clinical nutrition plan built from your unique data. It centers on better versions of the foods you already enjoy — not elimination, not deprivation. Your family can eat the same foundational meals with minor adjustments. The plan evolves with you through ongoing sessions as your lab markers improve and your goals shift — so that you have a living, adaptable strategy instead of a static document that stops working in three weeks.",
              },
            ].map((item) => (
              <div key={item.step} className="bg-white rounded-2xl p-8 md:p-10 shadow-sm border border-sage-100">
                <div className="flex items-start gap-5">
                  <div className="flex-shrink-0">
                    <span className="w-14 h-14 rounded-full bg-sage-600 text-white font-heading text-xl font-bold flex items-center justify-center">
                      {item.step}
                    </span>
                  </div>
                  <div>
                    <p className="text-sage-600 font-semibold text-sm uppercase tracking-wide mb-1">{item.label}</p>
                    <h3 className="font-heading text-xl md:text-2xl text-sage-800 mb-3">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section className="section-padding">
        <div className="container-narrow">
          <h2 className="font-heading text-3xl md:text-4xl text-sage-800 mb-8 text-center">
            What&apos;s Included in Every Session
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              "60-minute one-on-one consultation with Jeanne (never a substitute provider)",
              "Review and interpretation of current lab work and clinical markers",
              "Personalized food chemistry recommendations based on your biochemistry",
              "Practical meal strategies adapted to your family, schedule, and food preferences",
              "Ongoing progress tracking with objective, measurable benchmarks",
              "Coordination with your primary care physician when clinically appropriate",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 bg-sage-50 rounded-xl p-4">
                <span className="text-sage-600 mt-0.5 flex-shrink-0">✓</span>
                <p className="text-gray-700 text-sm">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONDITIONS ADDRESSED */}
      <section className="section-padding bg-sage-50">
        <div className="container-wide">
          <h2 className="font-heading text-3xl md:text-4xl text-sage-800 mb-10 text-center">
            Conditions We Specialize In
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Diabetes & Blood Sugar", desc: "A1C reduction, insulin sensitivity, blood sugar stabilization", href: "/conditions/diabetes" },
              { title: "IBS & Digestive Disorders", desc: "Bloating, abdominal pain, gut microbiome restoration", href: "/conditions/ibs" },
              { title: "Oncology Nutrition", desc: "Post-treatment gut recovery, immune support, weight management", href: "/conditions/oncology" },
              { title: "Cardiovascular Health", desc: "Cholesterol optimization, blood pressure support", href: "/conditions/heart-health" },
              { title: "Weight Management", desc: "Root-cause metabolic repair, GLP-1 off-ramp support", href: "/conditions/weight-management" },
            ].map((c) => (
              <Link key={c.href} href={c.href} className="bg-white rounded-xl p-6 shadow-sm border border-sage-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300 group">
                <h3 className="font-heading text-lg text-sage-800 group-hover:text-sage-600 mb-2">{c.title}</h3>
                <p className="text-gray-500 text-sm mb-3">{c.desc}</p>
                <span className="text-sage-600 text-sm font-semibold">Learn more →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="section-padding">
        <div className="container-narrow">
          <TestimonialCard
            quote="After months of intense IBS symptoms, I met with Jeanne to help figure out which foods to avoid and which foods to eat so that I wouldn't have to continue taking steroids and antibiotics. After following her recommendations, I am feeling so much better. I'm living and eating with far less abdominal pain and digestive issues."
            author="M. Cooper"
          />
        </div>
      </section>

      {/* SWITCH SECTION */}
      <section className="section-padding bg-warm-50">
        <div className="container-wide">
          <h2 className="font-heading text-3xl md:text-4xl text-sage-800 mb-10 text-center">
            How this compares to what you&apos;ve tried
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px] border-collapse">
              <thead>
                <tr className="border-b-2 border-sage-300">
                  <th className="text-left py-4 px-4 font-heading text-sage-600">The Old Way</th>
                  <th className="text-left py-4 px-4 font-heading text-sage-800">Piedmont Nutrition Care</th>
                </tr>
              </thead>
              <tbody className="text-gray-600">
                {[
                  ["Calorie-counting apps", "Clinical food chemistry based on your lab data"],
                  ["Generic meal plan handouts", "Personalized protocols built from your biochemistry"],
                  ["10-minute rushed appointments", "60-minute unhurried consultations"],
                  ["Rotating providers who don't know you", "Same credentialed practitioner every visit"],
                  ["Symptom management forever", "Root-cause resolution"],
                  ["GLP-1 dependency with no exit plan", "Medication Off-Ramp that rebuilds metabolic resilience"],
                ].map(([old, newWay], i) => (
                  <tr key={i} className="border-b border-sage-100">
                    <td className="py-4 px-4 text-gray-400">{old}</td>
                    <td className="py-4 px-4 text-sage-700 font-medium">{newWay}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CLOSE */}
      <section className="section-padding">
        <div className="container-narrow text-center">
          <h2 className="font-heading text-2xl md:text-3xl text-sage-800 mb-6">For People Still Deciding</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            If you&apos;re comparing providers, here&apos;s what matters: Piedmont Nutrition Care is a one-on-one clinical practice, not a platform. You see the same credentialed practitioner at every session. Your plan is built from your actual lab data, not a template. And the goal isn&apos;t to manage your symptoms indefinitely — it&apos;s to resolve the underlying cause so your body starts working for you again.
          </p>
        </div>
      </section>

      {/* FINAL CTA */}
      <CTASection
        headline="Your next step isn't another app. It's a real assessment with a real clinician."
        primaryLabel="Book Your Gut & Metabolic Foundation Assessment"
        triggers={["60-minute sessions", "Insurance accepted", "In-person or virtual", "336-986-5388"]}
      />
    </>
  );
}
