import Link from "next/link";
import TestimonialCard from "@/components/TestimonialCard";
import CTASection from "@/components/CTASection";
import ProofBar from "@/components/ProofBar";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import Accordion from "@/components/Accordion";
import { StethoscopeIcon, BeakerIcon, LeafIcon, ChartUpIcon } from "@/components/Icons";

export default function Home() {
  const steps = [
    {
      step: "01",
      Icon: StethoscopeIcon,
      title: "Gut & Metabolic Foundation Assessment",
      body: "A 60-minute, one-on-one session where Jeanne reviews your full health history, symptoms, medications, and lab work. The appointment your doctor never had time for.",
    },
    {
      step: "02",
      Icon: BeakerIcon,
      title: "Clinical Lab Analysis",
      body: "In-depth review of your blood panels, A1C, cholesterol markers, and digestive function to identify the specific biological mechanisms driving your symptoms.",
    },
    {
      step: "03",
      Icon: LeafIcon,
      title: "Personalized Food Chemistry Protocol",
      body: "A nutrition plan built from your unique biochemistry — not a generic handout. Better versions of the foods you already love, including Southern staples.",
    },
    {
      step: "04",
      Icon: ChartUpIcon,
      title: "Continued Clinical Monitoring",
      body: "Ongoing tracking of your lab markers with protocol adjustments as your body responds. A clinical partner carrying the cognitive load with you.",
    },
  ];

  const objections = [
    {
      question: "\"I've tried everything. My body is just broken.\"",
      answer: "Your body isn't broken. It's been responding logically to years of conflicting instructions: starvation diets that triggered metabolic adaptation, medications that masked symptoms without addressing causes, and advice that ignored your unique biochemistry. When your gut flora is compromised, leptin resistance increases, blood sugar swings become uncontrollable, and cravings intensify — no matter how disciplined you are. The problem was never your effort. It was the approach.",
    },
    {
      question: "\"Will my insurance cover this?\"",
      answer: "Piedmont Nutrition Care accepts BCBS, Aetna, and Medicare. Medical Nutrition Therapy is a covered benefit under most plans for conditions including diabetes, high cholesterol, IBS, and obesity. You can verify your specific coverage before your first session — no surprises, no hidden fees.",
    },
    {
      question: "\"I don't want to give up my favorite foods.\"",
      answer: "You won't. This isn't an elimination diet. Jeanne's approach builds on the foods you already enjoy — including Southern staples — and finds better versions that support your gut health and metabolic goals. Your family eats the same foundational meals with minor adjustments. No separate cooking. No guilt.",
    },
    {
      question: "\"Another expert is just going to judge me.\"",
      answer: "Every appointment at Piedmont Nutrition Care is 60 minutes, one-on-one, unhurried. Jeanne's patients consistently describe feeling heard, validated, and respected for the first time in their medical journey. This is a partnership, not a lecture.",
    },
  ];

  return (
    <>
      {/* ===== 01. HERO ===== */}
      <section className="relative min-h-screen flex items-center bg-gradient-hero overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.07] bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1490818387583-1baba5e638af?w=1600&h=900&fit=crop')" }}
        />
        <div className="absolute inset-0 bg-black/30" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 lg:px-20 py-28 md:py-36 lg:py-44 w-full">
          <div className="max-w-3xl">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-7xl text-white leading-[1.05] mb-10 animate-fade-in-up tracking-tight">
              Your cravings, weight resistance, and gut pain aren&apos;t willpower failures.{" "}
              <span className="text-green-300">They&apos;re gut health failures.</span>
            </h1>
            <p className="text-lg md:text-xl text-green-100/70 leading-relaxed mb-12 max-w-2xl animate-fade-in-up-delay-1">
              You&apos;ve done everything &ldquo;right&rdquo; — counted calories, survived elimination diets, sat through 10-minute doctor visits that ended with &ldquo;eat less, move more.&rdquo; Your body kept fighting back. Because no one looked at the root cause: what&apos;s happening inside your digestive tract. Piedmont Nutrition Care uses clinical food science to repair your gut, rebalance your metabolism, and build a plan your body actually responds to — with better versions of the foods you already love.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8 animate-fade-in-up-delay-2">
              <Link href="/contact" className="btn-primary text-lg text-center !shadow-glow-green">
                Book Your Assessment
              </Link>
              <Link href="/insurance" className="inline-block border border-white/20 text-white hover:bg-white/10 font-medium py-3.5 px-8 rounded-[8px] transition-all duration-300 text-center hover:-translate-y-0.5">
                Check If Your Insurance Covers It
              </Link>
            </div>
            <p className="text-green-200/40 text-sm animate-fade-in-up-delay-3">
              60-minute consultations  ·  BCBS, Aetna &amp; Medicare accepted  ·  In-person or virtual
            </p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1200 60" preserveAspectRatio="none" className="block w-full h-[30px] md:h-[50px]">
            <path d="M0,60 C300,20 900,20 1200,60 L1200,60 L0,60 Z" fill="#FDFBF7" />
          </svg>
        </div>
      </section>

      {/* ===== 02. PROOF BAR ===== */}
      <ProofBar
        items={[
          { text: "5.0 Google Rating" },
          { text: "MS, RD, LDN" },
          { text: "20+ Years Clinical Experience" },
          { text: "Insurance Accepted" },
        ]}
      />

      {/* ===== 03. THE PROBLEM / SOLUTION ===== */}
      <section className="section-padding bg-cream">
        <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="max-w-2xl">
            <AnimateOnScroll>
              <p className="text-xs uppercase tracking-[0.2em] text-warm-400 font-medium mb-4">The Problem</p>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-warm-950 mb-10 tracking-tight leading-[1.1]">
                You&apos;ve been doing everything right. So why does your body keep working against you?
              </h2>
            </AnimateOnScroll>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            <div className="space-y-8 text-warm-600 leading-relaxed text-base md:text-lg max-w-2xl">
              <AnimateOnScroll delay={100}>
                <p>
                  Your A1C keeps creeping up. Your stomach bloats so badly after meals you look six months pregnant. You&apos;re mentally mapping public restrooms before you leave the house.
                </p>
              </AnimateOnScroll>
              <AnimateOnScroll delay={200}>
                <p>
                  You&apos;ve cut your calories to 1,200 a day. You&apos;ve tried Keto, Whole30, calorie-counting apps. Maybe you&apos;re on Ozempic and dreading the day you have to stop. You&apos;ve spent thousands on supplements, 30-day challenges, and programs that promised everything and delivered nothing.
                </p>
              </AnimateOnScroll>
              <AnimateOnScroll delay={300}>
                <p>
                  And every doctor you&apos;ve seen has said the same thing: eat less, move more. In a 10-minute appointment that felt more like a lecture than a conversation.
                </p>
              </AnimateOnScroll>
              <AnimateOnScroll delay={400}>
                <p className="font-medium text-warm-800">
                  None of it worked. Not because you lack willpower or discipline. You have more of both than most people will ever need.
                </p>
              </AnimateOnScroll>
              <AnimateOnScroll delay={500}>
                <p>
                  It didn&apos;t work because no one addressed the actual problem: a compromised gut that can&apos;t properly regulate your blood sugar, your hunger hormones, or your inflammatory response. You&apos;ve been fighting your biology with restriction — and biology always wins.
                </p>
              </AnimateOnScroll>
            </div>

            {/* Pull quote as oversized typographic moment */}
            <div className="lg:sticky lg:top-32">
              <AnimateOnScroll animation="scale-up">
                <p className="font-heading text-3xl md:text-4xl lg:text-5xl text-green-700 italic leading-[1.15] tracking-tight">
                  Your metabolism isn&apos;t broken. It&apos;s been getting the wrong instructions.
                </p>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 04. HOW IT WORKS ===== */}
      <section className="section-padding bg-warm-50">
        <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20">
          <AnimateOnScroll>
            <p className="text-xs uppercase tracking-[0.2em] text-warm-400 font-medium mb-4 text-center">How It Works</p>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-warm-950 mb-6 text-center tracking-tight leading-[1.1]">
              Four steps from confused to confident
            </h2>
            <p className="text-warm-500 text-center mb-16 text-base md:text-lg max-w-xl mx-auto">A clinical process, not a cookie-cutter program.</p>
          </AnimateOnScroll>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12 stagger-children">
            {steps.map((item) => (
              <AnimateOnScroll key={item.step} className="h-full">
                <div className="bg-white rounded-2xl p-8 md:p-10 shadow-card border border-warm-100/50 hover:shadow-lifted hover:-translate-y-[2px] transition-all duration-300 h-full flex flex-col group">
                  <div className="flex items-start gap-5 mb-5">
                    <span className="section-number text-2xl text-warm-200 font-heading font-bold leading-none mt-1">{item.step}</span>
                    <div className="w-12 h-12 rounded-2xl bg-green-50 flex items-center justify-center flex-shrink-0 group-hover:bg-green-100 transition-colors">
                      <item.Icon className="w-6 h-6 text-green-600" />
                    </div>
                  </div>
                  <h3 className="font-heading text-lg md:text-xl text-warm-900 mb-3">{item.title}</h3>
                  <p className="text-warm-600 leading-relaxed text-sm md:text-base flex-grow">{item.body}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 05. SOCIAL PROOF ===== */}
      <section className="section-padding bg-cream">
        <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20">
          <AnimateOnScroll>
            <p className="text-xs uppercase tracking-[0.2em] text-warm-400 font-medium mb-4 text-center">What Patients Say</p>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-warm-950 mb-16 text-center tracking-tight leading-[1.1]">
              Results that speak for themselves
            </h2>
          </AnimateOnScroll>
          <div className="grid md:grid-cols-3 gap-8 md:gap-12 stagger-children">
            <AnimateOnScroll className="h-full">
              <TestimonialCard
                quote="Jeanne is extremely knowledgeable about food, food chemistry, and the latest research findings on nutrition. She can suggest dietary changes to prevent cancer, boost a sluggish metabolism, improve blood sugar, or lower LDL. Her intelligence, compassion and sense of humor make working with her not only helpful, but also fun."
                author="Liz"
              />
            </AnimateOnScroll>
            <AnimateOnScroll className="h-full">
              <TestimonialCard
                quote="As a cancer survivor struggling with weight and gut issues, I'm so grateful to have found Jeanne. She understands the science of food as well as how to share it with me, apply it to my specific needs, and guide me to helpful resources. I'm excited about moving forward with the plan she has developed for me."
                author="Ann"
                context="Cancer survivor"
              />
            </AnimateOnScroll>
            <AnimateOnScroll className="h-full">
              <TestimonialCard
                quote="After months of intense IBS symptoms, I met with Jeanne to help figure out which foods to avoid and which foods to eat so that I wouldn't have to continue taking steroids and antibiotics. After following her recommendations, I am feeling so much better."
                author="M. Cooper"
                context="IBS Recovery"
              />
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* ===== 06. OBJECTION HANDLING (Accordion) ===== */}
      <section className="section-padding bg-warm-50">
        <div className="max-w-3xl mx-auto px-6 md:px-12 lg:px-20">
          <AnimateOnScroll>
            <p className="text-xs uppercase tracking-[0.2em] text-warm-400 font-medium mb-4 text-center">Common Concerns</p>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-warm-950 mb-12 text-center tracking-tight leading-[1.1]">
              Your questions, answered honestly
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll>
            <Accordion items={objections} />
          </AnimateOnScroll>
        </div>
      </section>

      {/* ===== 07. FINAL CTA ===== */}
      <CTASection
        headline="Your gut has been trying to tell you something. Let's find out what."
        primaryLabel="Book Your Gut & Metabolic Foundation Assessment"
        secondaryLabel="Check If Your Insurance Covers It"
        secondaryHref="/insurance"
        triggers={["60-minute sessions", "Same practitioner every visit", "BCBS, Aetna & Medicare accepted", "In-person or virtual"]}
      />
    </>
  );
}
