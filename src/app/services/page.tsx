import type { Metadata } from "next";
import Link from "next/link";
import TestimonialCard from "@/components/TestimonialCard";
import CTASection from "@/components/CTASection";
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
      <section className="relative bg-gradient-hero overflow-hidden min-h-[60vh] flex items-center">
        <div className="absolute inset-0 bg-black/15" />
        <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20 py-28 md:py-36 lg:py-44 w-full relative z-10">
          <div className="max-w-3xl">
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white leading-[1.1] mb-8 animate-fade-in-up tracking-tight">
              Clinical nutrition therapy that fixes the cause — not just the symptoms
            </h1>
            <p className="text-lg text-green-100/70 leading-relaxed max-w-2xl animate-fade-in-up-delay-1">
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
      <ProofBar items={[
        { text: "Registered Dietitian Nutritionist (RDN)" },
        { text: "Licensed Dietitian Nutritionist (LDN)" },
        { text: "MS in Nutrition from UNCG" },
        { text: "Food Chemistry Specialization" },
        { text: "5.0 Google Rating" },
      ]} />

      {/* WHAT IS MNT */}
      <section className="section-padding bg-cream">
        <div className="container-narrow">
          <AnimateOnScroll>
            <p className="text-xs uppercase tracking-[0.2em] text-warm-400 font-medium mb-4">The Approach</p>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-warm-950 mb-10 tracking-tight leading-[1.1]">
              What Medical Nutrition Therapy Actually Is
            </h2>
            <p className="text-base md:text-lg text-warm-600 leading-relaxed max-w-2xl">
              Medical Nutrition Therapy (MNT) is a clinical, evidence-based treatment delivered by a credentialed Registered Dietitian. It&apos;s not a meal plan from an app. It&apos;s not advice from a wellness influencer. It&apos;s a diagnostic and therapeutic process that uses your actual lab data, health history, and biochemistry to create a targeted nutrition intervention — covered by most major insurance plans because it produces measurable clinical outcomes.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* 4-STEP PROCESS (EXPANDED) */}
      <section className="section-padding bg-warm-50">
        <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20">
          <AnimateOnScroll>
            <p className="text-xs uppercase tracking-[0.2em] text-warm-400 font-medium mb-4 text-center">The Process</p>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-warm-950 mb-16 text-center tracking-tight leading-[1.1]">
              Your 4-Step Process
            </h2>
          </AnimateOnScroll>
          <div className="space-y-8 stagger-children">
            {[
              {
                step: "01",
                Icon: EarIcon,
                label: "Hear You",
                title: "Comprehensive Health Assessment",
                body: "Your first 60-minute session is designed to do what no 10-minute appointment ever could. Jeanne reviews your full health history, current medications, family medical context, lifestyle demands, food preferences, and the things you've already tried — so that you have a clinician who sees the whole picture, not a fragment of it. You'll also discuss your goals: what does \"better\" actually look like for your life?",
              },
              {
                step: "02",
                Icon: BeakerIcon,
                label: "Gather Specifics",
                title: "Lab Analysis & Root-Cause Identification",
                body: "Jeanne analyzes your blood panels, A1C, cholesterol markers (LDL, HDL, triglycerides), inflammatory indicators, and digestive function — not at a glance, but in depth. She identifies the specific biological mechanisms driving your symptoms: gut dysbiosis (imbalanced gut bacteria), leptin resistance, insulin sensitivity issues, micronutrient deficiencies, or hormonal disruption — so that you finally understand the WHY behind what your body has been doing.",
              },
              {
                step: "03",
                Icon: TestTubeIcon,
                label: "Learn Better Foods",
                title: "Food Chemistry Education",
                body: "This isn't a lecture about calories. Jeanne teaches you how different foods interact with your specific biology at the molecular level: why certain carbohydrates spike your blood sugar while others stabilize it, how specific fiber types feed beneficial gut bacteria, which protein sources support your metabolic goals — so that you make food choices from understanding, not from a rules list you'll eventually abandon.",
              },
              {
                step: "04",
                Icon: DocumentTextIcon,
                label: "Your Food Rx",
                title: "Personalized Nutrition Protocol",
                body: "You receive a clinical nutrition plan built from your unique data. It centers on better versions of the foods you already enjoy — not elimination, not deprivation. Your family can eat the same foundational meals with minor adjustments. The plan evolves with you through ongoing sessions as your lab markers improve and your goals shift — so that you have a living, adaptable strategy instead of a static document that stops working in three weeks.",
              },
            ].map((item) => (
              <AnimateOnScroll key={item.step}>
                <div className="bg-white rounded-2xl p-8 md:p-10 shadow-card hover:shadow-lifted transition-all duration-300 border border-warm-100/50 hover:-translate-y-[2px]">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 flex flex-col items-center gap-3">
                      <span className="text-warm-200 font-heading font-bold text-2xl">{item.step}</span>
                      <div className="w-12 h-12 rounded-2xl bg-green-50 flex items-center justify-center">
                        <item.Icon className="w-6 h-6 text-green-600" />
                      </div>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.2em] text-green-600 font-medium mb-2">{item.label}</p>
                      <h3 className="font-heading text-xl md:text-2xl text-warm-900 mb-4">{item.title}</h3>
                      <p className="text-warm-600 leading-relaxed text-base max-w-2xl">{item.body}</p>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section className="section-padding bg-cream">
        <div className="container-narrow">
          <AnimateOnScroll>
            <p className="text-xs uppercase tracking-[0.2em] text-warm-400 font-medium mb-4 text-center">Every Session</p>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-warm-950 mb-16 text-center tracking-tight leading-[1.1]">
              What&apos;s Included
            </h2>
          </AnimateOnScroll>
          <div className="grid sm:grid-cols-2 gap-6 stagger-children">
            {[
              "60-minute one-on-one consultation with Jeanne (never a substitute provider)",
              "Review and interpretation of current lab work and clinical markers",
              "Personalized food chemistry recommendations based on your biochemistry",
              "Practical meal strategies adapted to your family, schedule, and food preferences",
              "Ongoing progress tracking with objective, measurable benchmarks",
              "Coordination with your primary care physician when clinically appropriate",
            ].map((item, i) => (
              <AnimateOnScroll key={i}>
                <div className="flex items-start gap-4 bg-white rounded-2xl p-6 border border-warm-100/50 hover:shadow-card transition-all duration-300 hover:-translate-y-[1px]">
                  <CheckIcon className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <p className="text-warm-700 text-sm leading-relaxed">{item}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* CONDITIONS */}
      <section className="section-padding bg-warm-50">
        <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20">
          <AnimateOnScroll>
            <p className="text-xs uppercase tracking-[0.2em] text-warm-400 font-medium mb-4 text-center">Specializations</p>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-warm-950 mb-16 text-center tracking-tight leading-[1.1]">
              Conditions We Specialize In
            </h2>
          </AnimateOnScroll>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 stagger-children">
            {[
              { title: "Diabetes & Blood Sugar", desc: "A1C reduction, insulin sensitivity, blood sugar stabilization", href: "/conditions/diabetes" },
              { title: "IBS & Digestive Disorders", desc: "Bloating, abdominal pain, gut microbiome restoration", href: "/conditions/ibs" },
              { title: "Oncology Nutrition", desc: "Post-treatment gut recovery, immune support, weight management", href: "/conditions/oncology" },
              { title: "Cardiovascular Health", desc: "Cholesterol optimization, blood pressure support", href: "/conditions/heart-health" },
              { title: "Weight Management", desc: "Root-cause metabolic repair, GLP-1 off-ramp support", href: "/conditions/weight-management" },
            ].map((c) => (
              <AnimateOnScroll key={c.href}>
                <Link href={c.href} className="block h-full bg-white rounded-2xl p-8 shadow-card hover:shadow-lifted transition-all duration-300 group border border-warm-100/50 hover:-translate-y-[2px]">
                  <h3 className="font-heading text-lg md:text-xl text-warm-900 group-hover:text-green-600 mb-3 transition-colors">{c.title}</h3>
                  <p className="text-warm-500 text-sm mb-6 leading-relaxed">{c.desc}</p>
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

      {/* TESTIMONIAL */}
      <section className="section-padding bg-cream">
        <div className="container-narrow">
          <AnimateOnScroll>
            <TestimonialCard
              quote="After months of intense IBS symptoms, I met with Jeanne to help figure out which foods to avoid and which foods to eat so that I wouldn't have to continue taking steroids and antibiotics. After following her recommendations, I am feeling so much better. I'm living and eating with far less abdominal pain and digestive issues."
              author="M. Cooper"
              context="IBS Recovery"
            />
          </AnimateOnScroll>
        </div>
      </section>

      {/* COMPARISON */}
      <section className="section-padding bg-warm-50">
        <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20">
          <AnimateOnScroll>
            <p className="text-xs uppercase tracking-[0.2em] text-warm-400 font-medium mb-4 text-center">The Difference</p>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-warm-950 mb-16 text-center tracking-tight leading-[1.1]">
              How this compares to what you&apos;ve tried
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll>
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto">
              <div className="bg-warm-100/60 rounded-2xl p-8 md:p-10 border border-warm-200/40">
                <h3 className="font-heading text-lg text-warm-400 uppercase tracking-widest mb-8">The Old Way</h3>
                <div className="space-y-5">
                  {[
                    "Calorie-counting apps",
                    "Generic meal plan handouts",
                    "10-minute rushed appointments",
                    "Rotating providers who don't know you",
                    "Symptom management forever",
                    "GLP-1 dependency with no exit plan",
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <XMarkIcon className="w-4 h-4 text-warm-300 flex-shrink-0 mt-1" />
                      <span className="text-warm-400 text-sm leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-white rounded-2xl p-8 md:p-10 border border-green-200/50 shadow-card">
                <h3 className="font-heading text-lg text-green-700 uppercase tracking-widest mb-8">Piedmont Nutrition Care</h3>
                <div className="space-y-5">
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
                      <span className="text-warm-800 text-sm font-medium leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* CLOSE */}
      <section className="section-padding bg-cream">
        <div className="container-narrow text-center">
          <AnimateOnScroll>
            <h2 className="font-heading text-3xl md:text-4xl text-warm-950 mb-8 tracking-tight leading-[1.1]">For People Still Deciding</h2>
            <p className="text-base md:text-lg text-warm-600 leading-relaxed max-w-2xl mx-auto">
              If you&apos;re comparing providers, here&apos;s what matters: Piedmont Nutrition Care is a one-on-one clinical practice, not a platform. You see the same credentialed practitioner at every session. Your plan is built from your actual lab data, not a template. And the goal isn&apos;t to manage your symptoms indefinitely — it&apos;s to resolve the underlying cause so your body starts working for you again.
            </p>
          </AnimateOnScroll>
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
