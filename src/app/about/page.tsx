import type { Metadata } from "next";
import TestimonialCard from "@/components/TestimonialCard";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "About Jeanne Doherty, MS, RD, LDN | Piedmont Nutrition Care",
  description: "Meet Jeanne Doherty — Registered Dietitian Nutritionist with 20+ years of health industry experience. Winston-Salem, NC functional nutrition practice.",
};

export default function About() {
  return (
    <>
      {/* HERO */}
      <section className="section-padding bg-gradient-to-br from-sage-50 via-warm-50 to-cream">
        <div className="container-wide">
          <div className="max-w-3xl">
            <h1 className="font-heading text-4xl md:text-5xl text-sage-900 leading-tight mb-6">
              You deserve a clinician who listens longer than 10 minutes and looks deeper than a calorie count.
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Jeanne Doherty, MS, RD, LDN spent 20 years in the health insurance industry watching chronic disease devastate people&apos;s lives — and watching generic nutrition advice fail them over and over. She went back to school, earned her Master of Science in Nutrition from UNCG, and built Piedmont Nutrition Care to do what she saw the system couldn&apos;t: connect the science of food chemistry to the real lives of real people.
            </p>
          </div>
        </div>
      </section>

      {/* PROOF BAR */}
      <section className="bg-sage-700 text-white py-5">
        <div className="container-wide">
          <div className="flex flex-wrap justify-center gap-4 md:gap-10 text-sm md:text-base font-medium text-center">
            <span>🎓 MS in Nutrition (UNCG)</span>
            <span>✅ Registered Dietitian Nutritionist (RDN)</span>
            <span>📋 Licensed Dietitian Nutritionist (LDN)</span>
            <span>💼 20+ Years Health Industry Experience</span>
            <span>⭐ 5.0 Google Rating</span>
          </div>
        </div>
      </section>

      {/* ORIGIN STORY */}
      <section className="section-padding">
        <div className="container-narrow">
          <h2 className="font-heading text-3xl md:text-4xl text-sage-800 mb-8">
            Why Piedmont Nutrition Care Exists
          </h2>
          <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
            <p>
              For two decades, Jeanne worked inside the health insurance industry. She saw the same pattern thousands of times: a patient develops a chronic condition. Their doctor prescribes medication and tells them to &ldquo;eat less, move more.&rdquo; The patient tries. It doesn&apos;t work. They blame themselves. The condition worsens. More medication. More co-pays. More shame.
            </p>
            <p>
              The missing piece was always the same: no one was looking at the food. Not the calories — the actual chemistry of what they were eating and how their body was processing it.
            </p>
            <p>
              Jeanne earned her MS in Nutrition from UNCG with a focus on food science and food chemistry. She founded Piedmont Nutrition Care to be the practice she wished existed for every patient she&apos;d watched struggle: one where a credentialed clinician takes 60 minutes (not 10), reviews your actual lab work (not just your weight), and builds a plan around better versions of the foods you love (not a generic handout you&apos;ll throw away).
            </p>
          </div>
        </div>
      </section>

      {/* WHAT MAKES JEANNE DIFFERENT */}
      <section className="section-padding bg-warm-50">
        <div className="container-wide">
          <h2 className="font-heading text-3xl md:text-4xl text-sage-800 mb-10 text-center">
            What Makes Jeanne Different
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-sage-100">
              <div className="w-14 h-14 rounded-full bg-sage-100 flex items-center justify-center text-2xl mb-4">🔬</div>
              <h3 className="font-heading text-xl text-sage-800 mb-3">Clinical Credentials</h3>
              <p className="text-gray-600 leading-relaxed">
                Your nutrition plan is built by a Registered Dietitian Nutritionist with a Master of Science in Nutrition and a specialization in food chemistry. That&apos;s different from a health coach, a wellness influencer, or a telehealth provider matched to you by an algorithm. Jeanne understands the molecular mechanisms behind why certain foods affect your blood sugar, your gut bacteria, and your inflammatory markers — and she translates that into plain-English recommendations you can act on today.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-sage-100">
              <div className="w-14 h-14 rounded-full bg-sage-100 flex items-center justify-center text-2xl mb-4">🏥</div>
              <h3 className="font-heading text-xl text-sage-800 mb-3">Health System Expertise</h3>
              <p className="text-gray-600 leading-relaxed">
                Twenty years inside the health insurance industry gave Jeanne something most dietitians don&apos;t have: a deep understanding of how the healthcare system actually works — the billing, the coverage gaps, the reasons patients fall through the cracks. That experience shapes everything about how Piedmont Nutrition Care operates, from upfront pricing transparency to insurance coordination to ensuring you never feel like a number in a system designed to process you as fast as possible.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-sage-100">
              <div className="w-14 h-14 rounded-full bg-sage-100 flex items-center justify-center text-2xl mb-4">🎤</div>
              <h3 className="font-heading text-xl text-sage-800 mb-3">Communication Skill</h3>
              <p className="text-gray-600 leading-relaxed">
                Jeanne is a former TV host and live cooking demo presenter. She&apos;s spent years making nutrition science engaging and accessible to real audiences — not dumbing it down, but translating it. When she explains why your gut microbiome is affecting your cravings, you&apos;ll understand it. When she walks you through your lab results, you&apos;ll know exactly what the numbers mean and what to do about them.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DEEP PROOF */}
      <section className="section-padding">
        <div className="container-narrow">
          <div className="grid md:grid-cols-2 gap-8">
            <TestimonialCard
              quote="She understands the science of food as well as how to share it with me, apply it to my specific needs, and guide me to helpful resources. I'm excited about moving forward with the plan she has developed for me."
              author="Ann"
              context="Cancer survivor"
            />
            <TestimonialCard
              quote="Her advice is practical and food suggestions are enjoyable, better versions of my favorite foods. I am grateful for the transformative impact she has had on my lifestyle and wellbeing."
              author="Doug"
            />
          </div>
        </div>
      </section>

      {/* CLOSE / INVITATION */}
      <section className="section-padding bg-sage-50">
        <div className="container-narrow text-center">
          <h2 className="font-heading text-3xl md:text-4xl text-sage-800 mb-6">The Invitation</h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-4">
            If your doctor&apos;s advice hasn&apos;t worked, if the apps and 30-day challenges have left you more frustrated than when you started, if you&apos;re tired of managing your health as a full-time job — the next step is a conversation with someone who will actually listen.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            Jeanne accepts BCBS, Aetna, and Medicare. Sessions are 60 minutes, one-on-one, in Winston-Salem or virtual. You&apos;ll walk out of your first appointment with a clear understanding of what&apos;s driving your symptoms and a concrete plan to address it.
          </p>
        </div>
      </section>

      {/* FINAL CTA */}
      <CTASection
        headline="Book Your Assessment with Jeanne"
        triggers={["60 minutes, one-on-one", "Same practitioner every visit", "Insurance accepted", "In-person or virtual"]}
      />
    </>
  );
}
