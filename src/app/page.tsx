import Link from "next/link";
import Image from "next/image";
import TestimonialCard from "@/components/TestimonialCard";
import CTASection from "@/components/CTASection";
import ProofBar from "@/components/ProofBar";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import HeroIllustration from "@/components/HeroIllustration";
import { CheckIcon, XMarkIcon, StethoscopeIcon, BeakerIcon, LeafIcon, ChartUpIcon } from "@/components/Icons";

export default function Home() {
  const steps = [
    {
      step: "1",
      Icon: StethoscopeIcon,
      title: "Your Gut & Metabolic Foundation Assessment",
      body: "Your first session is 60 minutes, one-on-one, with Jeanne — not a rotating roster of providers. You'll walk through your full health history, your current symptoms, your medications, your lab work, and the things you've already tried. This is the appointment your doctor never had time for — so that you finally have a clinician who understands your complete picture, not just a snapshot.",
    },
    {
      step: "2",
      Icon: BeakerIcon,
      title: "Clinical Lab Analysis & Gut Health Assessment",
      body: "Jeanne reviews your blood panels, cholesterol markers, A1C, inflammation levels, and digestive function — the data most providers glance at for 30 seconds. She identifies the specific biological mechanisms driving your symptoms: gut microbiome disruption, leptin resistance (when your brain stops hearing the \"I'm full\" signal), blood sugar dysregulation, or hormonal imbalances — so that you understand exactly WHY your body has been working against you, not just that it has.",
    },
    {
      step: "3",
      Icon: LeafIcon,
      title: "Personalized Food Chemistry Protocol",
      body: "You receive a nutrition plan built from your unique biochemistry — not a generic handout. It's designed around better versions of the foods you already love, including Southern staples. No calorie counting. No elimination diets. No separate meals for you and your family — so that eating becomes something you enjoy again instead of a source of anxiety and guilt.",
    },
    {
      step: "4",
      Icon: ChartUpIcon,
      title: "Continued Clinical Monitoring & Adjustment",
      body: "You aren't handed a plan and sent on your way. Jeanne tracks your lab markers, adjusts your protocol as your body responds, and serves as your ongoing clinical partner — so that you have someone carrying the cognitive load with you, translating the science into simple daily steps as your health evolves.",
    },
  ];

  return (
    <>
      {/* HERO */}
      <section className="hero-section relative min-h-[88svh] sm:min-h-[90vh] flex items-center bg-gradient-hero overflow-hidden grain-overlay">
        <div
          className="hero-parallax absolute inset-0 opacity-[0.08] bg-cover bg-center scale-110"
          style={{ backgroundImage: "url('/hero-bg.jpg')" }}
        />
        <div className="absolute inset-0 bg-black/25" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-green-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-amber-400/5 rounded-full blur-3xl" />

        <div className="hero-content relative z-10 max-w-6xl mx-auto px-5 sm:px-6 md:px-8 py-16 sm:py-20 md:py-28 lg:py-36 w-full">
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-3">
              <h1 className="font-heading text-[1.65rem] sm:text-3xl md:text-4xl lg:text-[2.75rem] xl:text-[3.25rem] text-white leading-[1.25] sm:leading-[1.2] mb-5 sm:mb-6 md:mb-8 animate-fade-in-up drop-shadow-lg tracking-tight">
                Your cravings, weight resistance, and gut pain aren&apos;t willpower failures.{" "}
                <span className="text-green-300">They&apos;re gut health failures.</span>
              </h1>
              <p className="text-[0.9rem] sm:text-base md:text-lg text-green-100/75 leading-relaxed mb-6 sm:mb-8 max-w-xl animate-fade-in-up-delay-1">
                No one looked at the root cause: what&apos;s happening inside your digestive tract. Piedmont Nutrition Care uses clinical food science to repair your gut, rebalance your metabolism, and build a plan your body actually responds to.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-5 sm:mb-8 animate-fade-in-up-delay-2">
                <Link href="/contact" className="btn-primary !text-base sm:!text-lg text-center !shadow-glow-green hover:scale-[1.02] transition-transform">
                  Book Your Assessment
                </Link>
                <Link href="/insurance" className="inline-block border-2 border-white/30 text-white hover:bg-white/10 font-medium py-3 px-6 sm:py-3.5 sm:px-8 rounded-[8px] transition-all duration-300 text-center hover:-translate-y-0.5 text-sm sm:text-base">
                  Check Insurance Coverage
                </Link>
              </div>
              <p className="text-green-200/50 text-xs sm:text-sm animate-fade-in-up-delay-3">
                60-minute consultations  ·  BCBS, Aetna &amp; Medicare accepted  ·  In-person or virtual
              </p>
            </div>
            {/* Hero illustration — right side */}
            <div className="hidden lg:block lg:col-span-2 animate-fade-in-up-delay-2">
              <HeroIllustration />
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1200 60" preserveAspectRatio="none" className="block w-full h-[25px] sm:h-[30px] md:h-[50px]">
            <path d="M0,60 C300,20 900,20 1200,60 L1200,60 L0,60 Z" fill="#FDFBF7" />
          </svg>
        </div>
      </section>

      {/* PROOF BAR */}
      <ProofBar
        floating
        items={[
          { icon: "star", text: "5.0 Google Rating" },
          { icon: "academic", text: "MS, RD, LDN Credentials" },
          { icon: "clipboard", text: "20+ Years Clinical Experience" },
          { icon: "building", text: "Accepted by Major NC Insurers" },
        ]}
      />

      {/* AGITATION */}
      <section className="section-padding bg-cream relative overflow-hidden">
        {/* Subtle background texture */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-green-100/20 rounded-full blur-[120px] -mr-40 -mt-40" />
        <div className="container-narrow relative z-10">
          <h2 className="gsap-heading font-heading text-xl sm:text-2xl md:text-3xl lg:text-4xl text-warm-950 mb-8 sm:mb-10 tracking-tight leading-[1.15]">
              You&apos;ve been doing everything right. So why does your body keep working against you?
            </h2>
          <div className="space-y-6 sm:space-y-8 text-warm-600 leading-relaxed text-[0.95rem] sm:text-base md:text-lg max-w-2xl">
            <AnimateOnScroll delay={100}>
              <p className="border-l-2 border-green-300/40 pl-6">
                Your A1C keeps creeping up. Your stomach bloats so badly after meals you look six months pregnant. You&apos;re mentally mapping public restrooms before you leave the house.
              </p>
            </AnimateOnScroll>
            <AnimateOnScroll delay={200}>
              <p>
                You&apos;ve cut your calories to 1,200 a day. You&apos;ve tried Keto, Whole30, calorie-counting apps. Maybe you&apos;re on Ozempic and dreading the day you have to stop. You&apos;ve spent thousands on supplements, 30-day challenges, and programs that promised everything and delivered nothing.
              </p>
            </AnimateOnScroll>
            <AnimateOnScroll delay={300}>
              <p className="border-l-2 border-amber-300/40 pl-6">
                And every doctor you&apos;ve seen has said the same thing: eat less, move more. In a 10-minute appointment that felt more like a lecture than a conversation.
              </p>
            </AnimateOnScroll>
            <AnimateOnScroll delay={400}>
              <p className="font-medium text-warm-700">
                None of it worked. Not because you lack willpower or discipline. You have more of both than most people will ever need.
              </p>
            </AnimateOnScroll>
            <AnimateOnScroll delay={500}>
              <p>
                It didn&apos;t work because no one addressed the actual problem: a compromised gut that can&apos;t properly regulate your blood sugar, your hunger hormones, or your inflammatory response. You&apos;ve been fighting your biology with restriction — and biology always wins.
              </p>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* CROSSHEAD */}
      <section className="relative py-16 sm:py-20 md:py-28 bg-gradient-to-br from-green-50 via-cream to-amber-50 overflow-hidden">
        <div className="absolute inset-0 bg-dot-pattern bg-dot opacity-[0.04]" />
        <div className="gsap-line-grow absolute left-0 top-1/2 -translate-y-1/2 w-1 h-24 bg-gradient-to-b from-green-500 to-amber-500 rounded-r-full" />
        <div className="container-narrow text-center relative z-10 px-5 sm:px-6">
          <p className="gsap-quote font-heading text-xl sm:text-2xl md:text-3xl lg:text-4xl text-green-800 italic leading-snug max-w-2xl mx-auto">
              Your metabolism isn&apos;t broken. It&apos;s been getting the wrong instructions.
            </p>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="section-padding bg-cream relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-amber-100/15 rounded-full blur-[100px] -ml-32 -mb-32" />
        <div className="container-wide relative z-10">
          <h2 className="gsap-heading font-heading text-xl sm:text-2xl md:text-3xl lg:text-4xl text-warm-950 mb-3 sm:mb-4 text-center tracking-tight leading-[1.15]">
              How Piedmont Nutrition Care works
            </h2>
            <p className="text-warm-500 text-center mb-10 sm:mb-12 md:mb-16 text-sm sm:text-base md:text-lg max-w-xl mx-auto">Four steps from confused to confident</p>

          {/* Desktop timeline */}
          <div className="hidden md:block relative">
            <div className="absolute top-10 left-[calc(12.5%+20px)] right-[calc(12.5%+20px)] h-0.5 bg-gradient-to-r from-green-300 via-green-400 to-green-300 z-0" />

            <div className="gsap-card-group grid md:grid-cols-4 gap-8 relative z-10">
              {steps.map((item) => (
                <div key={item.step} className="gsap-card text-center group h-full">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl bg-white shadow-card mx-auto mb-4 sm:mb-6 flex items-center justify-center group-hover:shadow-deep group-hover:-translate-y-[2px] transition-all duration-300 border border-green-100">
                    <item.Icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-green-600" />
                  </div>
                  <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-card hover:shadow-deep transition-all duration-300 text-left border border-warm-100/50 h-full flex flex-col hover:-translate-y-[2px]">
                    <div className="flex items-center gap-2 mb-2 sm:mb-3">
                      <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-green-500 text-white font-bold text-xs sm:text-sm flex items-center justify-center flex-shrink-0">
                        {item.step}
                      </span>
                      <h3 className="font-heading text-sm sm:text-base text-warm-900 leading-snug">{item.title}</h3>
                    </div>
                    <p className="text-warm-600 leading-relaxed text-xs sm:text-sm flex-grow">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile stack */}
          <div className="md:hidden space-y-6 stagger-children">
            {steps.map((item) => (
              <AnimateOnScroll key={item.step}>
                <div className="bg-white rounded-2xl p-5 shadow-card border-l-4 border-green-400">
                  <div className="flex items-start gap-3 mb-2">
                    <div className="w-9 h-9 rounded-lg bg-green-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <item.Icon className="w-4 h-4 text-green-600" />
                    </div>
                    <div>
                      <span className="inline-flex w-6 h-6 rounded-full bg-green-500 text-white font-bold text-[0.65rem] items-center justify-center mb-1">
                        {item.step}
                      </span>
                      <h3 className="font-heading text-[0.9rem] text-warm-900 leading-snug">{item.title}</h3>
                    </div>
                  </div>
                  <p className="text-warm-600 leading-relaxed text-[0.8rem]">{item.body}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>

          {/* Inline testimonial */}
          <AnimateOnScroll className="mt-16">
            <div className="max-w-2xl mx-auto">
              <TestimonialCard
                quote="After months of intense IBS symptoms, I met with Jeanne to help figure out which foods to avoid and which foods to eat so that I wouldn't have to continue taking steroids and antibiotics. After following her recommendations, I am feeling so much better. I'm living and eating with far less abdominal pain and digestive issues."
                author="M. Cooper"
                context="IBS Recovery"
              />
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* PARALLAX IMAGE BREAK */}
      <section className="relative h-[200px] sm:h-[250px] md:h-[300px] overflow-hidden">
        <div className="gsap-parallax-img absolute inset-0 -top-20 -bottom-20">
          <Image
            src="/section-food.jpg"
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-warm-50/80 via-transparent to-warm-50/80" />
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="relative section-padding bg-warm-50 overflow-hidden">
        <div className="absolute inset-0 bg-dot-pattern bg-dot opacity-[0.03]" />
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-green-50/30 rounded-full blur-[120px] -ml-48 -mt-48" />
        <div className="container-wide relative z-10">
          <h2 className="gsap-heading font-heading text-xl sm:text-2xl md:text-3xl lg:text-4xl text-warm-950 mb-8 sm:mb-10 md:mb-14 text-center tracking-tight leading-[1.15]">
              What our patients say
            </h2>
          <div className="gsap-card-group grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
            <div className="gsap-card h-full">
              <TestimonialCard
                quote="Jeanne is extremely knowledgeable about food, food chemistry, and the latest research findings on nutrition. She can suggest dietary changes to prevent cancer, boost a sluggish metabolism, improve blood sugar, or lower LDL. Her intelligence, compassion and sense of humor make working with her not only helpful, but also fun."
                author="Liz"
              />
            </div>
            <div className="gsap-card h-full">
              <TestimonialCard
                quote="As a cancer survivor struggling with weight and gut issues, I'm so grateful to have found Jeanne. She understands the science of food as well as how to share it with me, apply it to my specific needs, and guide me to helpful resources. I'm excited about moving forward with the plan she has developed for me."
                author="Ann"
                context="Cancer survivor"
              />
            </div>
            <div className="gsap-card h-full sm:col-span-2 lg:col-span-1">
              <TestimonialCard
                quote="I highly recommend Jeanne Doherty as a nutritionist. Recently I have worked with her to lower my blood sugars and improve cholesterol. Her advice is practical and food suggestions are enjoyable, better versions of my favorite foods. I am grateful for the transformative impact she has had on my lifestyle and wellbeing."
                author="Doug"
              />
            </div>
          </div>
        </div>
      </section>

      {/* COMPARISON */}
      <section className="section-padding bg-cream relative overflow-hidden">
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-green-50/30 rounded-full blur-[100px] -mr-60 -mt-60" />
        <div className="container-wide relative z-10">
          <h2 className="gsap-heading font-heading text-xl sm:text-2xl md:text-3xl lg:text-4xl text-warm-950 mb-8 sm:mb-10 md:mb-12 text-center tracking-tight leading-[1.15]">
              You&apos;ve tried the old way. Here&apos;s what&apos;s different.
            </h2>

          <AnimateOnScroll>
            <div className="grid md:grid-cols-2 gap-5 sm:gap-6 md:gap-8 max-w-5xl mx-auto">
              {/* Old Way Card */}
              <div className="bg-warm-100/60 rounded-2xl p-6 sm:p-8 md:p-10 border border-warm-200/40 opacity-80 h-full flex flex-col">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 rounded-full bg-warm-300/40 flex items-center justify-center">
                    <XMarkIcon className="w-5 h-5 text-warm-400" />
                  </div>
                  <h3 className="font-heading text-lg text-warm-400 uppercase tracking-widest">What You&apos;ve Tried</h3>
                </div>
                <div className="space-y-5 flex-grow">
                  {[
                    "Starving yourself on restrictive diets, losing 20 lbs, gaining 30 back",
                    "10-minute doctor visits ending with \"eat less, move more\"",
                    "Generic meal plan handouts that ignore your life",
                    "Fighting daily cravings with willpower",
                    "Spending thousands on supplements and 30-day challenges",
                    "Faceless telehealth where your dietitian might not show up",
                    "GLP-1 injections and dreading the day you stop",
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <XMarkIcon className="w-4 h-4 text-warm-300 flex-shrink-0 mt-1" />
                      <span className="text-warm-400 text-sm leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* New Way Card */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 md:p-10 border border-green-200/50 shadow-lifted relative overflow-hidden h-full flex flex-col">
                <div className="absolute top-0 right-0 w-40 h-40 bg-green-200/20 rounded-full blur-2xl" />
                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center shadow-glow-green">
                      <CheckIcon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="font-heading text-lg text-green-700 uppercase tracking-widest">Piedmont Nutrition Care</h3>
                  </div>
                  <div className="space-y-5 flex-grow">
                    {[
                      "Understanding your gut chemistry and building a sustainable metabolic foundation",
                      "60-minute consultations where your symptoms are validated and your labs are analyzed",
                      "Personalized food chemistry protocols with better versions of your favorite foods",
                      "Healing the gut dysfunction that's creating the cravings",
                      "One qualified expert who identifies the root cause and gives you a clear, permanent map",
                      "A dedicated local practitioner who knows your name, family, and full medical history",
                      "Rebuilding your metabolic resilience so your body maintains results naturally",
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <CheckIcon className="w-4 h-4 text-green-500 flex-shrink-0 mt-1" />
                        <span className="text-warm-800 text-sm leading-relaxed font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* OBJECTION HANDLING */}
      <section className="relative section-padding bg-warm-50 overflow-hidden">
        <div className="absolute inset-0 bg-dot-pattern bg-dot opacity-[0.03]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-amber-50/30 rounded-full blur-[120px] -mr-40 -mb-40" />
        <div className="container-narrow relative z-10">
          <h2 className="gsap-heading font-heading text-xl sm:text-2xl md:text-3xl lg:text-4xl text-warm-950 mb-8 sm:mb-10 md:mb-12 text-center tracking-tight leading-[1.15]">
              Your questions, answered honestly
            </h2>
          <div className="space-y-5 sm:space-y-6 md:space-y-8 stagger-children">
            {[
              {
                q: "\"I've tried everything. My body is just broken.\"",
                a: "Your body isn't broken. It's been responding logically to years of conflicting instructions: starvation diets that triggered metabolic adaptation, medications that masked symptoms without addressing causes, and advice that ignored your unique biochemistry. When your gut flora is compromised, leptin resistance increases (your brain stops hearing the \"I'm full\" signal), blood sugar swings become uncontrollable, and cravings intensify — no matter how disciplined you are. The problem was never your effort. It was the approach.",
                accent: "border-l-green-300",
              },
              {
                q: "\"Will my insurance cover this?\"",
                a: "Piedmont Nutrition Care accepts BCBS, Aetna, and Medicare. Medical Nutrition Therapy is a covered benefit under most plans for conditions including diabetes, high cholesterol, IBS, and obesity. You can verify your specific coverage before your first session — no surprises, no hidden fees.",
                accent: "border-l-amber-300",
              },
              {
                q: "\"I don't want to give up my favorite foods.\"",
                a: "You won't. This isn't an elimination diet. Jeanne's approach builds on the foods you already enjoy — including Southern staples — and finds better versions that support your gut health and metabolic goals. Your family eats the same foundational meals with minor adjustments. No separate cooking. No guilt.",
                accent: "border-l-green-300",
              },
              {
                q: "\"Another expert is just going to judge me.\"",
                a: "Every appointment at Piedmont Nutrition Care is 60 minutes, one-on-one, unhurried. Jeanne's patients consistently describe feeling heard, validated, and respected for the first time in their medical journey. This is a partnership, not a lecture.",
                accent: "border-l-amber-300",
              },
            ].map((item, i) => (
              <AnimateOnScroll key={i}>
                <div className={`bg-white rounded-2xl p-5 sm:p-6 md:p-8 shadow-card hover:shadow-lifted transition-all duration-300 border border-warm-100/50 border-l-4 ${item.accent} hover:-translate-y-[2px]`}>
                  <h3 className="font-heading text-base sm:text-lg text-warm-900 mb-3 sm:mb-4">{item.q}</h3>
                  <p className="text-warm-600 leading-relaxed max-w-2xl text-[0.875rem] sm:text-base">{item.a}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>

          {/* STAKES */}
          <AnimateOnScroll className="mt-14">
            <div className="relative bg-gradient-cta text-white rounded-2xl p-6 sm:p-8 md:p-12 text-center overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-green-400/10 rounded-full blur-3xl" />
              <p className="text-[0.9rem] sm:text-base md:text-lg leading-relaxed text-green-50 relative z-10 max-w-2xl mx-auto">
                Your A1C doesn&apos;t pause while you decide. Your gut symptoms don&apos;t improve on their own. Every month without addressing the root cause is another month of cravings you can&apos;t explain, energy you don&apos;t have, and lab numbers moving in the wrong direction. You&apos;ve spent years trying to solve this alone. The next step isn&apos;t another app or another 30-day challenge.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* FINAL CTA */}
      <CTASection
        headline="Your gut has been trying to tell you something. Let's find out what."
        primaryLabel="Book Your Gut & Metabolic Foundation Assessment"
        secondaryLabel="Check If Your Insurance Covers It"
        secondaryHref="/insurance"
        triggers={["60-minute sessions", "Same practitioner every visit", "BCBS, Aetna & Medicare accepted", "In-person or virtual"]}
        testimonial={{
          quote: "Her intelligence, compassion and sense of humor make working with her not only helpful, but also fun.",
          author: "Liz",
        }}
      />
    </>
  );
}
