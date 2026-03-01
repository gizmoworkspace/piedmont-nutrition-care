import Link from "next/link";
import TestimonialCard from "@/components/TestimonialCard";
import CTASection from "@/components/CTASection";
import ProofBar from "@/components/ProofBar";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import HeroAnimation from "@/components/HeroAnimation";
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
      <section className="relative min-h-[90vh] flex items-center bg-gradient-hero overflow-hidden grain-overlay">
        {/* Mobile: full background image */}
        <div
          className="absolute inset-0 opacity-10 bg-cover bg-center bg-fixed md:hidden"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1490818387583-1baba5e638af?w=1600&h=900&fit=crop')" }}
        />
        {/* Dark overlay for contrast */}
        <div className="absolute inset-0 bg-black/20 md:hidden" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-green-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-amber-400/5 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-dot-pattern bg-dot opacity-[0.03]" />

        {/* Animated illustration on the right side */}
        <div className="hidden md:block absolute top-0 right-0 bottom-0 w-[55%] overflow-hidden">
          <HeroAnimation />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-8 py-16 md:py-24 lg:py-32 w-full">
          <div className="relative">
            {/* Left column: text */}
            <div className="max-w-3xl">
              <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white leading-[1.2] md:leading-[1.15] mb-8 animate-fade-in-up drop-shadow-lg tracking-tight">
                Your cravings, weight resistance, and gut pain aren&apos;t willpower failures.{" "}
                <span className="text-green-300">They&apos;re gut health failures.</span>
              </h1>
              <p className="text-lg md:text-xl text-green-100/90 leading-relaxed mb-8 max-w-2xl animate-fade-in-up-delay-1">
                No one looked at the root cause: what&apos;s happening inside your digestive tract. Piedmont Nutrition Care uses clinical food science to repair your gut, rebalance your metabolism, and build a plan your body actually responds to — with better versions of the foods you already love.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-6 animate-fade-in-up-delay-2">
                <Link href="/contact" className="btn-primary text-lg text-center !shadow-glow-green hover:scale-[1.02] transition-transform">
                  Book Your Assessment
                </Link>
                <Link href="/insurance" className="inline-block border-2 border-white/30 text-white hover:bg-white/10 font-medium py-3.5 px-8 rounded-[8px] transition-all duration-300 text-center hover:-translate-y-0.5">
                  Check If Your Insurance Covers It
                </Link>
              </div>
              <p className="text-green-200/60 text-sm animate-fade-in-up-delay-3">
                60-minute consultations  ·  BCBS, Aetna &amp; Medicare accepted  ·  In-person or virtual
              </p>
            </div>

{/* Right image now placed at section level */}
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1200 60" preserveAspectRatio="none" className="block w-full h-[30px] md:h-[50px]">
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
      <section className="section-padding bg-cream">
        <div className="container-wide">
          <AnimateOnScroll>
            <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl text-warm-950 mb-14 tracking-tight text-center max-w-3xl mx-auto">
              You&apos;ve been doing everything right. So why does your body keep working against you?
            </h2>
          </AnimateOnScroll>

          {/* Three cards in a row */}
          <div className="grid md:grid-cols-3 gap-6 mb-12 stagger-children">
            <AnimateOnScroll className="h-full">
              <div className="bg-white rounded-2xl p-6 md:p-8 border border-warm-100/50 shadow-card h-full">
                <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                  </svg>
                </div>
                <h3 className="font-heading text-lg text-warm-900 mb-3">The symptoms you can&apos;t explain</h3>
                <p className="text-warm-600 leading-relaxed text-sm">
                  Your A1C keeps creeping up. Your stomach bloats so badly after meals you look six months pregnant. You&apos;re mentally mapping public restrooms before you leave the house.
                </p>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll className="h-full">
              <div className="bg-white rounded-2xl p-6 md:p-8 border border-warm-100/50 shadow-card h-full">
                <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.008H9.375V9.75zm5.25 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.008h-.008V9.75z" />
                  </svg>
                </div>
                <h3 className="font-heading text-lg text-warm-900 mb-3">The toll it&apos;s taken</h3>
                <p className="text-warm-600 leading-relaxed text-sm">
                  Every failed program chips away at your confidence. You start to believe your body is just &ldquo;broken.&rdquo; The shame compounds — you blame yourself for not having enough discipline, even though discipline was never the problem.
                </p>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll className="h-full">
              <div className="bg-white rounded-2xl p-6 md:p-8 border border-warm-100/50 shadow-card h-full">
                <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                  </svg>
                </div>
                <h3 className="font-heading text-lg text-warm-900 mb-3">The real problem</h3>
                <p className="text-warm-600 leading-relaxed text-sm">
                  Your gut microbiome directly controls blood sugar regulation, hunger hormone signaling, and inflammatory response. When that ecosystem is damaged, no amount of restriction can produce lasting results.
                </p>
              </div>
            </AnimateOnScroll>
          </div>

          {/* Text below cards */}
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <AnimateOnScroll>
              <p className="text-warm-800 leading-relaxed font-medium text-lg">
                None of it worked. Not because you lack willpower or discipline. You have more of both than most people will ever need.
              </p>
            </AnimateOnScroll>
            <AnimateOnScroll delay={100}>
              <p className="text-warm-500 leading-relaxed italic">
                The healthcare system wasn&apos;t built to solve this. It was built to manage symptoms, write prescriptions, and move to the next patient. You deserve more than that.
              </p>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* CROSSHEAD */}
      <section className="relative py-16 md:py-24 bg-gradient-to-br from-green-900 via-green-950 to-green-900 overflow-hidden">
        {/* Background texture */}
        <div className="absolute inset-0 bg-dot-pattern bg-dot opacity-[0.06]" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-green-400/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-amber-400/5 rounded-full blur-3xl" />

        <div className="container-wide relative z-10">
          {/* Decorative line above */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-16 md:w-24 bg-gradient-to-r from-transparent to-green-400/50" />
            <div className="w-2 h-2 rounded-full bg-green-400/60" />
            <div className="h-px w-16 md:w-24 bg-gradient-to-l from-transparent to-green-400/50" />
          </div>

          <AnimateOnScroll animation="scale-up">
            <p className="font-heading text-2xl md:text-3xl lg:text-5xl text-white text-center italic leading-snug max-w-3xl mx-auto tracking-tight">
              Your metabolism isn&apos;t broken.{" "}
              <span className="text-green-300">It&apos;s been getting the wrong instructions.</span>
            </p>
          </AnimateOnScroll>

          {/* Supporting line */}
          <AnimateOnScroll delay={200}>
            <p className="text-green-200/60 text-center text-base md:text-lg mt-6 max-w-xl mx-auto">
              Restore the system, and the symptoms resolve themselves.
            </p>
          </AnimateOnScroll>

          {/* Decorative line below */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <div className="h-px w-16 md:w-24 bg-gradient-to-r from-transparent to-green-400/50" />
            <div className="w-2 h-2 rounded-full bg-green-400/60" />
            <div className="h-px w-16 md:w-24 bg-gradient-to-l from-transparent to-green-400/50" />
          </div>
        </div>

        {/* Section divider curves */}
        <div className="absolute top-0 left-0 right-0">
          <svg viewBox="0 0 1200 40" preserveAspectRatio="none" className="block w-full h-[20px] md:h-[30px] rotate-180">
            <path d="M0,40 C300,10 900,10 1200,40 L1200,40 L0,40 Z" fill="#FDFBF7" />
          </svg>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1200 40" preserveAspectRatio="none" className="block w-full h-[20px] md:h-[30px]">
            <path d="M0,40 C300,10 900,10 1200,40 L1200,40 L0,40 Z" fill="#FDFBF7" />
          </svg>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="section-padding bg-cream">
        <div className="container-wide">
          <AnimateOnScroll>
            <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl text-warm-950 mb-4 text-center tracking-tight">
              How Piedmont Nutrition Care works
            </h2>
            <p className="text-warm-500 text-center mb-16 text-lg max-w-xl mx-auto">Four steps from confused to confident</p>
          </AnimateOnScroll>

          {/* Desktop timeline */}
          <div className="hidden md:block relative">
            <div className="absolute top-10 left-[calc(12.5%+20px)] right-[calc(12.5%+20px)] h-0.5 bg-gradient-to-r from-green-300 via-green-400 to-green-300 z-0" />

            <div className="grid md:grid-cols-4 gap-8 relative z-10 stagger-children">
              {steps.map((item) => (
                <AnimateOnScroll key={item.step} className="text-center group h-full">
                  <div className="w-16 h-16 rounded-2xl bg-white shadow-card mx-auto mb-6 flex items-center justify-center group-hover:shadow-deep group-hover:-translate-y-[2px] transition-all duration-300 border border-green-100">
                    <item.Icon className="w-7 h-7 text-green-600" />
                  </div>
                  <div className="bg-white rounded-2xl p-6 shadow-card hover:shadow-deep transition-all duration-300 text-left border border-warm-100/50 h-full flex flex-col hover:-translate-y-[2px]">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="w-8 h-8 rounded-full bg-green-500 text-white font-bold text-sm flex items-center justify-center flex-shrink-0">
                        {item.step}
                      </span>
                      <h3 className="font-heading text-base text-warm-900 leading-snug">{item.title}</h3>
                    </div>
                    <p className="text-warm-600 leading-relaxed text-sm flex-grow">{item.body}</p>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>

          {/* Mobile stack */}
          <div className="md:hidden space-y-6 stagger-children">
            {steps.map((item) => (
              <AnimateOnScroll key={item.step}>
                <div className="bg-white rounded-2xl p-6 shadow-card border-l-4 border-green-400">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center flex-shrink-0">
                      <item.Icon className="w-5 h-5 text-green-600" />
                    </div>
                    <span className="w-8 h-8 rounded-full bg-green-500 text-white font-bold text-sm flex items-center justify-center flex-shrink-0">
                      {item.step}
                    </span>
                    <h3 className="font-heading text-base text-warm-900">{item.title}</h3>
                  </div>
                  <p className="text-warm-600 leading-relaxed text-sm">{item.body}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>

        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="relative section-padding bg-warm-50 overflow-hidden">
        <div className="absolute inset-0 bg-dot-pattern bg-dot opacity-[0.03]" />
        <div className="container-wide relative z-10">
          <AnimateOnScroll>
            <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl text-warm-950 mb-14 text-center tracking-tight">
              What our patients say
            </h2>
          </AnimateOnScroll>
          <div className="grid md:grid-cols-2 gap-8 stagger-children items-stretch">
            <AnimateOnScroll className="h-full">
              <TestimonialCard
                quote="After months of intense IBS symptoms, I met with Jeanne to help figure out which foods to avoid and which foods to eat so that I wouldn't have to continue taking steroids and antibiotics. After following her recommendations, I am feeling so much better. I'm living and eating with far less abdominal pain and digestive issues."
                author="M. Cooper"
                context="IBS Recovery"
              />
            </AnimateOnScroll>
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
                quote="I highly recommend Jeanne Doherty as a nutritionist. Recently I have worked with her to lower my blood sugars and improve cholesterol. Her advice is practical and food suggestions are enjoyable, better versions of my favorite foods. I am grateful for the transformative impact she has had on my lifestyle and wellbeing."
                author="Doug"
              />
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* COMPARISON */}
      <section className="section-padding bg-cream">
        <div className="container-wide">
          <AnimateOnScroll>
            <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl text-warm-950 mb-12 text-center tracking-tight">
              You&apos;ve tried the old way. Here&apos;s what&apos;s different.
            </h2>
          </AnimateOnScroll>

          <AnimateOnScroll>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">
              {/* Old Way Card */}
              <div className="bg-warm-100/60 rounded-2xl p-6 md:p-8 border border-warm-200/40 opacity-80 h-full flex flex-col">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 rounded-full bg-warm-300/40 flex items-center justify-center">
                    <XMarkIcon className="w-5 h-5 text-warm-400" />
                  </div>
                  <h3 className="font-heading text-lg text-warm-600 uppercase tracking-widest">What You&apos;ve Tried</h3>
                </div>
                <div className="space-y-4 flex-grow">
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
                      <XMarkIcon className="w-4 h-4 text-warm-400 flex-shrink-0 mt-1" />
                      <span className="text-warm-600 text-sm leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* New Way Card */}
              <div className="bg-white rounded-2xl p-6 md:p-8 border border-green-200/50 shadow-lifted relative overflow-hidden h-full flex flex-col">
                <div className="absolute top-0 right-0 w-40 h-40 bg-green-200/20 rounded-full blur-2xl" />
                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center shadow-glow-green">
                      <CheckIcon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="font-heading text-lg text-green-700 uppercase tracking-widest">Piedmont Nutrition Care</h3>
                  </div>
                  <div className="space-y-4 flex-grow">
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
        <div className="container-narrow relative z-10">
          <AnimateOnScroll>
            <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl text-warm-950 mb-12 text-center tracking-tight">
              Your questions, answered honestly
            </h2>
          </AnimateOnScroll>
          <div className="space-y-8 stagger-children">
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
                <div className={`bg-white rounded-2xl p-6 md:p-8 shadow-card hover:shadow-lifted transition-all duration-300 border border-warm-100/50 border-l-4 ${item.accent} hover:-translate-y-[2px]`}>
                  <h3 className="font-heading text-lg text-warm-900 mb-4">{item.q}</h3>
                  <p className="text-warm-600 leading-relaxed max-w-2xl">{item.a}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>

          {/* STAKES */}
          <AnimateOnScroll className="mt-14">
            <div className="relative bg-gradient-cta text-white rounded-2xl p-8 md:p-12 text-center overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-green-400/10 rounded-full blur-3xl" />
              <p className="text-lg leading-relaxed text-green-50 relative z-10 max-w-2xl mx-auto">
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
