import type { Metadata } from "next";
import TestimonialCard from "@/components/TestimonialCard";
import CTASection from "@/components/CTASection";
import ProofBar from "@/components/ProofBar";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { BeakerIcon, BuildingIcon, ChatBubbleIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "About Jeanne Doherty, MS, RD, LDN | Piedmont Nutrition Care",
  description: "Meet Jeanne Doherty — Registered Dietitian Nutritionist with 20+ years of health industry experience. Winston-Salem, NC functional nutrition practice.",
};

export default function About() {
  return (
    <>
      {/* HERO */}
      <section className="relative section-padding bg-gradient-to-br from-green-950 via-green-900 to-green-800 overflow-hidden grain-overlay">
        <div className="absolute inset-0 bg-dot-pattern bg-dot opacity-[0.03]" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-green-400/10 rounded-full blur-3xl" />
        <div className="container-wide relative z-10">
          <div className="max-w-3xl">
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl text-white leading-tight mb-6 animate-fade-in-up drop-shadow-lg">
              You deserve a clinician who listens longer than 10 minutes and looks deeper than a calorie count.
            </h1>
            <p className="text-lg text-green-100/80 leading-relaxed max-w-2xl animate-fade-in-up-delay-1">
              Jeanne Doherty, MS, RD, LDN spent 20 years in the health insurance industry watching chronic disease devastate people&apos;s lives — and watching generic nutrition advice fail them over and over. She went back to school, earned her Master of Science in Nutrition from UNCG, and built Piedmont Nutrition Care to do what she saw the system couldn&apos;t: connect the science of food chemistry to the real lives of real people.
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
        { icon: "academic", text: "MS in Nutrition (UNCG)" },
        { icon: "shield", text: "Registered Dietitian Nutritionist (RDN)" },
        { icon: "clipboard", text: "Licensed Dietitian Nutritionist (LDN)" },
        { icon: "building", text: "20+ Years Health Industry Experience" },
        { icon: "star", text: "5.0 Google Rating" },
      ]} />

      {/* ORIGIN STORY */}
      <section className="section-padding bg-cream">
        <div className="container-narrow">
          <AnimateOnScroll>
            <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl text-warm-950 mb-8">
              Why Piedmont Nutrition Care Exists
            </h2>
          </AnimateOnScroll>
          <div className="space-y-6 text-warm-600 leading-relaxed text-lg">
            <AnimateOnScroll delay={100}><p>
              For two decades, Jeanne worked inside the health insurance industry. She saw the same pattern thousands of times: a patient develops a chronic condition. Their doctor prescribes medication and tells them to &ldquo;eat less, move more.&rdquo; The patient tries. It doesn&apos;t work. They blame themselves. The condition worsens. More medication. More co-pays. More shame.
            </p></AnimateOnScroll>
            <AnimateOnScroll delay={200}><p>
              The missing piece was always the same: no one was looking at the food. Not the calories — the actual chemistry of what they were eating and how their body was processing it.
            </p></AnimateOnScroll>
            <AnimateOnScroll delay={300}><p>
              Jeanne earned her MS in Nutrition from UNCG with a focus on food science and food chemistry. She founded Piedmont Nutrition Care to be the practice she wished existed for every patient she&apos;d watched struggle: one where a credentialed clinician takes 60 minutes (not 10), reviews your actual lab work (not just your weight), and builds a plan around better versions of the foods you love (not a generic handout you&apos;ll throw away).
            </p></AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* WHAT MAKES JEANNE DIFFERENT */}
      <section className="relative section-padding bg-gradient-to-br from-warm-50 via-cream to-green-50/30 overflow-hidden">
        <div className="absolute inset-0 bg-dot-pattern bg-dot opacity-[0.03]" />
        <div className="container-wide relative z-10">
          <AnimateOnScroll>
            <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl text-warm-950 mb-12 text-center">
              What Makes Jeanne Different
            </h2>
          </AnimateOnScroll>
          <div className="grid md:grid-cols-3 gap-6 stagger-children">
            {[
              {
                icon: BeakerIcon,
                title: "Clinical Credentials",
                body: "Your nutrition plan is built by a Registered Dietitian Nutritionist with a Master of Science in Nutrition and a specialization in food chemistry. That's different from a health coach, a wellness influencer, or a telehealth provider matched to you by an algorithm. Jeanne understands the molecular mechanisms behind why certain foods affect your blood sugar, your gut bacteria, and your inflammatory markers — and she translates that into plain-English recommendations you can act on today.",
              },
              {
                icon: BuildingIcon,
                title: "Health System Expertise",
                body: "Twenty years inside the health insurance industry gave Jeanne something most dietitians don't have: a deep understanding of how the healthcare system actually works — the billing, the coverage gaps, the reasons patients fall through the cracks. That experience shapes everything about how Piedmont Nutrition Care operates, from upfront pricing transparency to insurance coordination to ensuring you never feel like a number in a system designed to process you as fast as possible.",
              },
              {
                icon: ChatBubbleIcon,
                title: "Communication Skill",
                body: "Jeanne is a former TV host and live cooking demo presenter. She's spent years making nutrition science engaging and accessible to real audiences — not dumbing it down, but translating it. When she explains why your gut microbiome is affecting your cravings, you'll understand it. When she walks you through your lab results, you'll know exactly what the numbers mean and what to do about them.",
              },
            ].map((item) => (
              <AnimateOnScroll key={item.title}>
                <div className="bg-white rounded-2xl p-8 shadow-card border border-warm-100/50 hover:shadow-deep hover:-translate-y-1 transition-all duration-300 group">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-green-50 to-green-100 flex items-center justify-center mb-5 group-hover:from-green-100 group-hover:to-green-200 transition-all duration-300">
                    <item.icon className="w-7 h-7 text-green-500" />
                  </div>
                  <h3 className="font-heading text-lg text-warm-900 mb-3">{item.title}</h3>
                  <p className="text-warm-600 leading-relaxed text-sm">{item.body}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* DEEP PROOF */}
      <section className="section-padding bg-cream">
        <div className="container-narrow">
          <div className="grid md:grid-cols-2 gap-6 stagger-children">
            <AnimateOnScroll>
              <TestimonialCard
                quote="She understands the science of food as well as how to share it with me, apply it to my specific needs, and guide me to helpful resources. I'm excited about moving forward with the plan she has developed for me."
                author="Ann"
                context="Cancer survivor"
              />
            </AnimateOnScroll>
            <AnimateOnScroll>
              <TestimonialCard
                quote="Her advice is practical and food suggestions are enjoyable, better versions of my favorite foods. I am grateful for the transformative impact she has had on my lifestyle and wellbeing."
                author="Doug"
              />
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* CLOSE / INVITATION */}
      <section className="relative py-20 bg-gradient-to-br from-green-50 via-cream to-amber-50 overflow-hidden">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-24 bg-gradient-to-b from-green-400 to-amber-400 rounded-r-full" />
        <div className="container-narrow text-center relative z-10">
          <AnimateOnScroll>
            <h2 className="font-heading text-2xl md:text-3xl text-warm-950 mb-6">The Invitation</h2>
            <p className="text-lg text-warm-600 leading-relaxed mb-4 max-w-2xl mx-auto">
              If your doctor&apos;s advice hasn&apos;t worked, if the apps and 30-day challenges have left you more frustrated than when you started, if you&apos;re tired of managing your health as a full-time job — the next step is a conversation with someone who will actually listen.
            </p>
            <p className="text-lg text-warm-600 leading-relaxed max-w-2xl mx-auto">
              Jeanne accepts BCBS, Aetna, and Medicare. Sessions are 60 minutes, one-on-one, in Winston-Salem or virtual. You&apos;ll walk out of your first appointment with a clear understanding of what&apos;s driving your symptoms and a concrete plan to address it.
            </p>
          </AnimateOnScroll>
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
