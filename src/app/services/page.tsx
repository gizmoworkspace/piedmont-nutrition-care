import type { Metadata } from "next";
import Link from "next/link";
import TestimonialCard from "@/components/TestimonialCard";
import ProofBar from "@/components/ProofBar";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { CheckIcon, XMarkIcon, ArrowRightIcon, EarIcon, BeakerIcon, TestTubeIcon, DocumentTextIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Services & How It Works | Piedmont Nutrition Care",
  description: "Clinical nutrition therapy that fixes the cause — not just the symptoms. Learn about Medical Nutrition Therapy and our 4-step process.",
};

export default function Services() {
  return (
    <>
      {/* HERO */}
      <section className="relative section-padding bg-gradient-to-br from-green-950 via-green-900 to-green-800 overflow-hidden grain-overlay">
        <div className="absolute inset-0 bg-dot-pattern bg-dot opacity-[0.03]" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-amber-400/5 rounded-full blur-3xl" />
        <div className="container-wide relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl text-white leading-tight mb-6 animate-fade-in-up drop-shadow-lg">
              Clinical nutrition therapy that fixes the cause — not just the symptoms
            </h1>
            <p className="text-lg text-green-100/90 leading-relaxed max-w-2xl mx-auto animate-fade-in-up-delay-1">
              Your cravings, weight resistance, and digestive pain are downstream symptoms of a compromised gut. Piedmont Nutrition Care identifies the root-cause biological dysfunction — through your lab work, your health history, and clinical food science — and builds a personalized protocol that restores your metabolic foundation from the inside out.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1200 60" preserveAspectRatio="none" className="block w-full h-[30px] md:h-[50px]">
            <path d="M0,60 C300,20 900,20 1200,60 L1200,60 L0,60 Z" fill="#FDFBF7" />
          </svg>
        </div>
      </section>

      {/* PROOF BAR */}
      <ProofBar floating items={[
        { icon: "shield", text: "Registered Dietitian Nutritionist (RDN)" },
        { icon: "clipboard", text: "Licensed Dietitian Nutritionist (LDN)" },
        { icon: "academic", text: "MS in Nutrition from UNCG" },
        { icon: "beaker", text: "Food Chemistry Specialization" },
        { icon: "star", text: "5.0 Health Grades Rating" },
      ]} />

      {/* AGITATION */}
      <section className="section-padding bg-cream">
        <div className="container-wide">
          <div className="relative bg-white rounded-3xl shadow-card border border-warm-100/60 overflow-hidden">
            {/* Left accent bar */}
            <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-amber-400 via-amber-500 to-green-500 rounded-l-3xl" />
            
            <div className="px-8 py-10 md:px-14 md:py-14 lg:px-20 lg:py-16">
              <AnimateOnScroll>
                <p className="text-xs md:text-sm font-semibold tracking-[0.2em] uppercase text-amber-500 mb-3">The Problem</p>
                <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl text-warm-950 mb-8 md:mb-10">
                  Why the advice you&apos;ve been following was designed to fail
                </h2>
              </AnimateOnScroll>
              <div className="space-y-6 text-warm-600 leading-relaxed text-base md:text-lg max-w-3xl">
                <AnimateOnScroll delay={100}><p>
                  <span className="hidden md:inline">Calorie-counting apps treat your body like a math equation. Elimination diets treat food like the enemy. GLP-1 medications suppress your appetite chemically without rebuilding the metabolic foundation that keeps weight off long-term. And your doctor&apos;s 10-minute appointment doesn&apos;t leave time to investigate why your body stopped responding in the first place.</span>
                  <span className="md:hidden">Calorie apps, elimination diets, and GLP-1 medications all share the same flaw: they manage symptoms without rebuilding the metabolic foundation that produces lasting results.</span>
                </p></AnimateOnScroll>
                <AnimateOnScroll delay={200}>
                  <p className="text-warm-800 font-medium text-lg md:text-xl italic border-l-4 border-amber-300/60 pl-5 my-2">
                    These approaches share a common flaw: they manage symptoms without addressing the underlying biological dysfunction.
                  </p>
                </AnimateOnScroll>
                <AnimateOnScroll delay={300}><p>
                  <span className="hidden md:inline">Your gut microbiome (the trillions of bacteria in your digestive tract) directly controls blood sugar regulation, hunger hormone signaling, inflammatory response, and nutrient absorption. When that ecosystem is damaged, no amount of willpower, calorie restriction, or medication alone can produce sustainable results.</span>
                  <span className="md:hidden">Your gut microbiome controls blood sugar, hunger hormones, and inflammation. When that ecosystem is damaged, no amount of willpower or restriction can produce sustainable results.</span>
                </p></AnimateOnScroll>
                <AnimateOnScroll delay={400}>
                  <p className="font-semibold text-green-700 text-xl mt-2">That&apos;s not your failure. That&apos;s biology.</p>
                </AnimateOnScroll>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CROSSHEAD */}
      <section className="relative py-10 md:py-14 px-6 md:px-8 bg-gradient-to-br from-green-50 via-cream to-amber-50 overflow-hidden">
        <div className="absolute left-5 top-1/2 -translate-y-1/2 w-1 h-24 bg-gradient-to-b from-green-400 to-amber-400 rounded-full" />
        <div className="container-narrow text-center relative z-10">
          <AnimateOnScroll animation="scale-up">
            <p className="font-heading text-2xl md:text-3xl lg:text-4xl text-green-700 italic leading-snug">
              Restore the system, and the symptoms resolve themselves.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* WHAT IS MNT */}
      <section className="relative section-padding bg-gradient-to-br from-green-50 via-cream to-amber-50 overflow-hidden">
        <div className="container-wide">
          <AnimateOnScroll>
            <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl text-warm-950 mb-6 text-center">
              What Medical Nutrition Therapy Actually Is
            </h2>
            <p className="text-lg text-warm-600 leading-relaxed max-w-3xl mx-auto text-center">
              <span className="hidden md:inline">Medical Nutrition Therapy (MNT) is a clinical, evidence-based treatment delivered by a credentialed Registered Dietitian. It&apos;s not a meal plan from an app. It&apos;s not advice from a wellness influencer. It&apos;s a diagnostic and therapeutic process that uses your actual lab data, health history, and biochemistry to create a targeted nutrition intervention — covered by most major insurance plans because it produces measurable clinical outcomes.</span>
              <span className="md:hidden">Medical Nutrition Therapy (MNT) is a clinical, evidence-based treatment using your lab data and biochemistry to create a targeted nutrition intervention — covered by most major insurance plans.</span>
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* 4-STEP PROCESS */}
      <section className="relative section-padding bg-gradient-to-br from-warm-50 via-cream to-green-50/30 overflow-hidden">
        <div className="absolute inset-0 bg-dot-pattern bg-dot opacity-[0.03]" />
        <div className="container-wide relative z-10">
          <AnimateOnScroll>
            <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl text-warm-950 mb-12 text-center">
              Your 4-Step Process
            </h2>
          </AnimateOnScroll>
          <div className="space-y-6 stagger-children">
            {[
              {
                step: "1",
                Icon: EarIcon,
                label: "Hear You",
                title: "Comprehensive Health Assessment",
                body: "Your first 60-minute session is designed to do what no 10-minute appointment ever could. Jeanne reviews your full health history, current medications, family medical context, lifestyle demands, food preferences, and the things you've already tried — so that you have a clinician who sees the whole picture, not a fragment of it. You'll also discuss your goals: what does \"better\" actually look like for your life?",
                bodyShort: "60 minutes with Jeanne reviewing your full health history, medications, lifestyle, and food preferences. The appointment your doctor never had time for.",
              },
              {
                step: "2",
                Icon: BeakerIcon,
                label: "Gather Specifics",
                title: "Lab Analysis & Root-Cause Identification",
                body: "Jeanne analyzes your blood panels, A1C, cholesterol markers (LDL, HDL, triglycerides), inflammatory indicators, and digestive function — not at a glance, but in depth. She identifies the specific biological mechanisms driving your symptoms: gut dysbiosis (imbalanced gut bacteria), leptin resistance, insulin sensitivity issues, micronutrient deficiencies, or hormonal disruption — so that you finally understand the WHY behind what your body has been doing.",
                bodyShort: "In-depth analysis of your blood panels, A1C, cholesterol, and digestive function. Identifies the specific biological mechanisms driving your symptoms.",
              },
              {
                step: "3",
                Icon: TestTubeIcon,
                label: "Learn Better Foods",
                title: "Food Chemistry Education",
                body: "This isn't a lecture about calories. Jeanne teaches you how different foods interact with your specific biology at the molecular level: why certain carbohydrates spike your blood sugar while others stabilize it, how specific fiber types feed beneficial gut bacteria, which protein sources support your metabolic goals — so that you make food choices from understanding, not from a rules list you'll eventually abandon.",
                bodyShort: "Learn how foods interact with your specific biology — why certain carbs spike your blood sugar while others stabilize it, and which foods feed beneficial gut bacteria.",
              },
              {
                step: "4",
                Icon: DocumentTextIcon,
                label: "Your Food Rx",
                title: "Personalized Nutrition Protocol",
                body: "You receive a clinical nutrition plan built from your unique data. It centers on better versions of the foods you already enjoy — not elimination, not deprivation. Your family can eat the same foundational meals with minor adjustments. The plan evolves with you through ongoing sessions as your lab markers improve and your goals shift — so that you have a living, adaptable strategy instead of a static document that stops working in three weeks.",
                bodyShort: "A nutrition plan built from your data — better versions of foods you love, not elimination. Your family eats the same meals. The plan evolves as your markers improve.",
              },
            ].map((item) => (
              <AnimateOnScroll key={item.step}>
                <div className="bg-white rounded-2xl p-6 md:p-8 lg:p-10 shadow-card hover:shadow-deep transition-all duration-300 border border-warm-100/50">
                  <div className="flex items-start gap-4 md:gap-5">
                    <div className="flex-shrink-0 flex flex-col items-center gap-2">
                      <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center">
                        <item.Icon className="w-5 h-5 text-green-600" />
                      </div>
                      <span className="w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-gradient-btn text-white font-heading text-base md:text-lg font-bold flex items-center justify-center shadow-glow-green">
                        {item.step}
                      </span>
                    </div>
                    <div>
                      <p className="text-green-600 font-medium text-sm uppercase tracking-wide mb-1">{item.label}</p>
                      <h3 className="font-heading text-lg md:text-xl lg:text-2xl text-warm-900 mb-3">{item.title}</h3>
                      <p className="text-warm-600 leading-relaxed text-sm md:text-base">
                        <span className="hidden md:inline">{item.body}</span>
                        <span className="md:hidden">{item.bodyShort}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section className="section-padding bg-white">
        <div className="container-narrow">
          <AnimateOnScroll>
            <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl text-warm-950 mb-8 text-center">
              What&apos;s Included in Every Session
            </h2>
          </AnimateOnScroll>
          <div className="grid sm:grid-cols-2 gap-4 stagger-children">
            {[
              "60-minute one-on-one consultation with Jeanne (never a substitute provider)",
              "Review and interpretation of current lab work and clinical markers",
              "Personalized food chemistry recommendations based on your biochemistry",
              "Practical meal strategies adapted to your family, schedule, and food preferences",
              "Ongoing progress tracking with objective, measurable benchmarks",
              "Coordination with your primary care physician when clinically appropriate",
            ].map((item, i) => (
              <AnimateOnScroll key={i}>
                <div className="flex items-start gap-3 bg-green-50 rounded-2xl p-5 border border-green-100/50 hover:shadow-card transition-all duration-300 h-full">
                  <CheckIcon className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <p className="text-warm-700 text-sm">{item}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* CONDITIONS */}
      <section className="relative section-padding bg-gradient-to-br from-warm-50 via-cream to-green-50/30 overflow-hidden">
        <div className="container-wide relative z-10">
          <AnimateOnScroll>
            <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl text-warm-950 mb-10 text-center">
              Conditions We Specialize In
            </h2>
          </AnimateOnScroll>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
            {[
              { title: "Diabetes & Blood Sugar", desc: "A1C reduction, insulin sensitivity, blood sugar stabilization", href: "/conditions/diabetes" },
              { title: "IBS & Digestive Disorders", desc: "Bloating, abdominal pain, gut microbiome restoration", href: "/conditions/ibs" },
              { title: "Oncology Nutrition", desc: "Post-treatment gut recovery, immune support, weight management", href: "/conditions/oncology" },
              { title: "Cardiovascular Health", desc: "Cholesterol optimization, blood pressure support", href: "/conditions/heart-health" },
              { title: "Weight Management", desc: "Root-cause metabolic repair, GLP-1 off-ramp support", href: "/conditions/weight-management" },
            ].map((c) => (
              <AnimateOnScroll key={c.href}>
                <Link href={c.href} className="block h-full bg-white rounded-2xl p-6 shadow-card hover:shadow-lifted transition-all duration-300 group border border-warm-100/50 hover:-translate-y-[2px]">
                  <h3 className="font-heading text-lg text-warm-900 group-hover:text-green-600 mb-2 transition-colors">{c.title}</h3>
                  <p className="text-warm-500 text-sm mb-4">{c.desc}</p>
                  <span className="inline-flex items-center gap-1 text-green-600 text-sm font-medium group-hover:gap-2 transition-all duration-300">
                    Learn more
                    <ArrowRightIcon className="w-4 h-4" />
                  </span>
                </Link>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARISON */}
      <section className="relative section-padding bg-gradient-to-br from-warm-50 via-cream to-green-50/30 overflow-hidden">
        <div className="container-wide relative z-10">
          <AnimateOnScroll>
            <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl text-warm-950 mb-10 text-center">
              How this compares to what you&apos;ve tried
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll>
            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              <div className="bg-warm-100/80 rounded-2xl p-8 border border-warm-200/50">
                <h3 className="font-heading text-lg text-warm-500 uppercase tracking-wide mb-6">The Old Way</h3>
                <div className="space-y-4">
                  {[
                    "Calorie-counting apps",
                    "Generic meal plan handouts",
                    "10-minute rushed appointments",
                    "Rotating providers who don't know you",
                    "Symptom management forever",
                    "GLP-1 dependency with no exit plan",
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <XMarkIcon className="w-4 h-4 text-warm-400 flex-shrink-0 mt-1" />
                      <span className="text-warm-500 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-green-50 rounded-2xl p-8 border border-green-200/50 shadow-card">
                <h3 className="font-heading text-lg text-green-700 uppercase tracking-wide mb-6">Piedmont Nutrition Care</h3>
                <div className="space-y-4">
                  {[
                    "Clinical food chemistry based on your lab data",
                    "Personalized protocols built from your biochemistry",
                    "60-minute unhurried consultations",
                    "Same credentialed practitioner every visit",
                    "Root-cause resolution",
                    "Medication Off-Ramp that rebuilds metabolic resilience",
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckIcon className="w-4 h-4 text-green-500 flex-shrink-0 mt-1" />
                      <span className="text-warm-800 text-sm font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* CLOSE */}
      <section className="section-padding bg-white">
        <div className="container-narrow text-center">
          <AnimateOnScroll>
            <h2 className="font-heading text-2xl md:text-3xl text-warm-950 mb-6">For People Still Deciding</h2>
            <p className="text-lg text-warm-600 leading-relaxed max-w-2xl mx-auto">
              If you&apos;re comparing providers, here&apos;s what matters: Piedmont Nutrition Care is a one-on-one clinical practice, not a platform. You see the same credentialed practitioner at every session. Your plan is built from your actual lab data, not a template. And the goal isn&apos;t to manage your symptoms indefinitely — it&apos;s to resolve the underlying cause so your body starts working for you again.
            </p>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
