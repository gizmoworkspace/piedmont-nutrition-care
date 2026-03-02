import type { Metadata } from "next";
import Image from "next/image";
import TestimonialCard from "@/components/TestimonialCard";
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
      <section className="relative py-12 md:py-16 lg:py-20 px-6 md:px-8 bg-gradient-to-br from-green-950 via-green-900 to-green-800 overflow-hidden grain-overlay">
        <div className="absolute inset-0 bg-dot-pattern bg-dot opacity-[0.03]" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-green-400/10 rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col-reverse md:flex-row md:items-center gap-10 md:gap-20 lg:gap-28">
            {/* Left: text */}
            <div className="md:w-[55%]">
              <h1 className="font-heading text-2xl md:text-4xl lg:text-5xl text-white leading-tight mb-4 md:mb-6 animate-fade-in-up drop-shadow-lg">
                We&apos;re here to help you eat better, feel better, and live better.
              </h1>
              <p className="text-base md:text-lg text-green-100/90 leading-relaxed max-w-2xl animate-fade-in-up-delay-1">
                <span className="hidden md:inline">Jeanne Doherty, MS, RD, LDN brings a unique combination of 20+ years in the health industry and a deep passion for food science. She earned her Master of Science in Nutrition from UNCG and built Piedmont Nutrition Care to help people find and eat better versions of the foods they love — so they can improve their health deliciously, one bite at a time.</span>
                <span className="md:hidden">Jeanne brings 20+ years of health industry experience and a passion for food science. She built Piedmont Nutrition Care to help people eat better versions of the foods they love.</span>
              </p>
            </div>
            {/* Right: photo */}
            <div className="md:w-[45%] flex justify-center mb-6 md:mb-0">
              <div className="relative md:translate-y-8">
                <div className="rounded-2xl overflow-hidden shadow-xl ring-4 ring-green-400/20">
                  <Image
                    src="/jeanne.jpg"
                    alt="Jeanne Doherty, MS, RD, LDN"
                    width={400}
                    height={666}
                    className="w-[200px] md:w-[340px] lg:w-[400px] h-auto object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
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
        { icon: "star", text: "5.0 Health Grades Rating" },
      ]} />

      {/* ORIGIN STORY */}
      <section className="relative section-padding bg-cream overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-start">
            {/* Left column — headline + first paragraph */}
            <div>
              <AnimateOnScroll>
                <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl text-warm-950 mb-8">
                  Why Piedmont Nutrition Care Exists
                </h2>
              </AnimateOnScroll>
              <AnimateOnScroll delay={100}>
                <p className="text-warm-600 leading-relaxed text-base md:text-lg">
                  <span className="hidden md:inline">For two decades, Jeanne worked inside the health insurance industry. She saw the same pattern over and over: people doing their best to follow advice that just wasn&apos;t working — &ldquo;eat less, move more&rdquo; — and blaming themselves when it didn&apos;t stick. She knew there had to be a better way to help people find foods that actually worked for their bodies.</span>
                  <span className="md:hidden">For two decades, Jeanne watched people do their best to follow advice that wasn&apos;t working — and blame themselves. She knew there had to be a better way.</span>
                </p>
              </AnimateOnScroll>
            </div>

            {/* Right column — pullquote + resolution */}
            <div className="space-y-8">
              <AnimateOnScroll delay={200}>
                <div className="border-l-4 border-green-400 pl-6 py-2">
                  <p className="text-warm-800 font-medium text-lg md:text-xl leading-relaxed">
                    The missing piece was always the same: no one was looking at the food. Not the calories — the actual chemistry of what they were eating and how their body was processing it.
                  </p>
                </div>
              </AnimateOnScroll>
              <AnimateOnScroll delay={300}>
                <p className="text-warm-600 leading-relaxed text-base md:text-lg">
                  <span className="hidden md:inline">Jeanne earned her MS in Nutrition from UNCG with a focus on food science and food chemistry. She founded Piedmont Nutrition Care to be person-centered — the kind of practice where someone takes 60 minutes to really hear you, reviews your actual lab work, and builds a plan around better versions of the foods you love. Because the focus should be on quality, not quantity.</span>
                  <span className="md:hidden">She earned her MS in Nutrition from UNCG and founded Piedmont Nutrition Care: person-centered, 60-minute sessions focused on quality, not quantity.</span>
                </p>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT MAKES JEANNE DIFFERENT */}
      <section className="section-padding bg-white">
        <div className="container-wide">
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
                bodyShort: "MS in Nutrition with food chemistry specialization. Jeanne understands why certain foods affect your blood sugar, gut bacteria, and inflammation — and translates it into actionable recommendations.",
              },
              {
                icon: BuildingIcon,
                title: "Health System Expertise",
                body: "Twenty years inside the health insurance industry gave Jeanne something most dietitians don't have: a deep understanding of how the healthcare system works — and where it lets people down. That experience shapes everything about Piedmont Nutrition Care, from transparent pricing to making sure you never feel like just a number. Here, you're a person with goals and needs, and everything is centered around you.",
                bodyShort: "20 years in health insurance means Jeanne understands the system — and where it lets people down. Transparent pricing, person-centered care.",
              },
              {
                icon: ChatBubbleIcon,
                title: "Communication Skill",
                body: "Jeanne has a marketing background and even hosted \"Generation X-files\" on Winston-Salem public access TV. She's spent years making nutrition science engaging and accessible — not dumbing it down, but translating it into plain English. When she explains why your gut microbiome is affecting your cravings, you'll understand it. When she walks you through your lab results, you'll know exactly what the numbers mean and what to do about them. Outside the office, you'll find her biking, hiking, or playing tennis with WFU alumni friends.",
                bodyShort: "Former TV host of \"Generation X-files\" on local public access. Jeanne makes nutrition science engaging and understandable. Outside work, she's biking, hiking, or playing tennis.",
              },
            ].map((item) => (
              <AnimateOnScroll key={item.title} className="h-full">
                <div className="bg-white rounded-2xl p-6 md:p-8 shadow-card border border-warm-100/50 hover:shadow-lifted hover:-translate-y-[2px] transition-all duration-300 group h-full flex flex-col">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-green-50 to-green-100 flex items-center justify-center mb-5 group-hover:from-green-100 group-hover:to-green-200 transition-all duration-300">
                    <item.icon className="w-7 h-7 text-green-500" />
                  </div>
                  <h3 className="font-heading text-lg text-warm-900 mb-3">{item.title}</h3>
                  <p className="text-warm-600 leading-relaxed text-sm flex-grow">
                    <span className="hidden md:inline">{item.body}</span>
                    <span className="md:hidden">{item.bodyShort}</span>
                  </p>
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
      <section className="section-padding bg-cream">
        <div className="container-narrow">
          <AnimateOnScroll>
            <h2 className="font-heading text-2xl md:text-3xl text-warm-950 mb-3 text-center">The Invitation</h2>
            <div className="w-12 h-1 bg-gradient-to-r from-green-400 to-amber-400 rounded-full mx-auto mb-10" />
          </AnimateOnScroll>
          <div className="max-w-2xl mx-auto space-y-4 md:space-y-6 text-center">
            <AnimateOnScroll delay={100}>
              <p className="text-base md:text-lg text-warm-600 leading-relaxed">
                <span className="hidden md:inline">If you&apos;re ready to stop guessing and start understanding what your body actually needs, we&apos;d love to meet you. The first step is simply a conversation — no pressure, no judgment, just someone who will truly listen.</span>
                <span className="md:hidden">Ready to stop guessing? The first step is a conversation with someone who will truly listen.</span>
              </p>
            </AnimateOnScroll>
            <AnimateOnScroll delay={200}>
              <p className="text-base md:text-lg text-warm-600 leading-relaxed">
                <span className="hidden md:inline">Your first session is 60 minutes, with 45-minute follow-ups — always one-on-one, in Winston-Salem or virtual. HSA/FSA accepted, and superbills are provided for out-of-network reimbursement. You&apos;ll walk out of your first appointment with a clear understanding of what&apos;s driving your symptoms and a concrete plan to address it.</span>
                <span className="md:hidden">60-minute initial session, 45-minute follow-ups. In Winston-Salem or virtual. HSA/FSA accepted, superbills provided.</span>
              </p>
            </AnimateOnScroll>
          </div>
        </div>
      </section>
    </>
  );
}
