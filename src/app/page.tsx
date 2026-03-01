import Link from "next/link";
import TestimonialCard from "@/components/TestimonialCard";
import CTASection from "@/components/CTASection";
import ProofBar from "@/components/ProofBar";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import HeroAnimation from "@/components/HeroAnimation";
import { CheckIcon, XMarkIcon, StethoscopeIcon, BeakerIcon, LeafIcon, ChartUpIcon } from "@/components/Icons";
import ResponsiveText from "@/components/ResponsiveText";

export default function Home() {
  const steps = [
    {
      step: "1",
      Icon: StethoscopeIcon,
      title: "Your Gut & Metabolic Foundation Assessment",
      body: "Your first session is 60 minutes, one-on-one, with Jeanne — not a rotating roster of providers. You'll walk through your full health history, your current symptoms, your medications, your lab work, and the things you've already tried. This is the appointment your doctor never had time for — so that you finally have a clinician who understands your complete picture, not just a snapshot.",
      bodyShort: "60 minutes, one-on-one with Jeanne. You'll walk through your full health history, symptoms, medications, and lab work — the appointment your doctor never had time for.",
    },
    {
      step: "2",
      Icon: BeakerIcon,
      title: "Clinical Lab Analysis & Gut Health Assessment",
      body: "Jeanne reviews your blood panels, cholesterol markers, A1C, inflammation levels, and digestive function — the data most providers glance at for 30 seconds. She identifies the specific biological mechanisms driving your symptoms: gut microbiome disruption, leptin resistance (when your brain stops hearing the \"I'm full\" signal), blood sugar dysregulation, or hormonal imbalances — so that you understand exactly WHY your body has been working against you, not just that it has.",
      bodyShort: "Jeanne analyzes your blood panels, A1C, inflammation, and digestive function in depth — identifying the specific biological mechanisms driving your symptoms.",
    },
    {
      step: "3",
      Icon: LeafIcon,
      title: "Personalized Food Chemistry Protocol",
      body: "You receive a nutrition plan built from your unique biochemistry — not a generic handout. It's designed around better versions of the foods you already love, including Southern staples. No calorie counting. No elimination diets. No separate meals for you and your family — so that eating becomes something you enjoy again instead of a source of anxiety and guilt.",
      bodyShort: "A nutrition plan built from your unique biochemistry — better versions of foods you already love. No calorie counting, no elimination diets, no separate family meals.",
    },
    {
      step: "4",
      Icon: ChartUpIcon,
      title: "Continued Clinical Monitoring & Adjustment",
      body: "You aren't handed a plan and sent on your way. Jeanne tracks your lab markers, adjusts your protocol as your body responds, and serves as your ongoing clinical partner — so that you have someone carrying the cognitive load with you, translating the science into simple daily steps as your health evolves.",
      bodyShort: "Jeanne tracks your lab markers, adjusts your protocol as your body responds, and serves as your ongoing clinical partner.",
    },
  ];

  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[90vh] md:min-h-[90vh] flex items-center bg-gradient-hero overflow-hidden grain-overlay">
        {/* Mobile: food image with better visibility */}
        <div
          className="absolute inset-0 opacity-20 bg-cover bg-center md:hidden"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1490818387583-1baba5e638af?w=1600&h=900&fit=crop')" }}
        />
        {/* Mobile gradient overlay — fades image out toward bottom for text contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-green-950/60 via-green-950/80 to-green-950/95 md:hidden" />

        {/* Shared ambient elements */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-green-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-amber-400/5 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-dot-pattern bg-dot opacity-[0.03]" />

        {/* Desktop: animated illustration */}
        <div className="hidden md:block absolute top-0 right-0 bottom-0 w-[55%] overflow-hidden">
          <HeroAnimation />
        </div>

        <div className="relative z-10 w-full px-6 md:px-12 lg:px-20 xl:px-28 py-20 md:py-24 lg:py-32">
          <div className="relative">
            {/* Left column: text */}
            <div className="max-w-2xl">
              <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white leading-[1.2] md:leading-[1.15] mb-6 md:mb-8 animate-fade-in-up drop-shadow-lg tracking-tight">
                Your cravings, weight resistance, and gut pain aren&apos;t willpower failures.{" "}
                <span className="text-green-300">They&apos;re gut health failures.</span>
              </h1>
              <p className="text-base md:text-xl text-green-100/90 leading-relaxed mb-8 max-w-2xl animate-fade-in-up-delay-1">
                <span className="hidden md:inline">No one looked at the root cause: what&apos;s happening inside your digestive tract. Piedmont Nutrition Care uses clinical food science to repair your gut, rebalance your metabolism, and build a plan your body actually responds to — with better versions of the foods you already love.</span>
                <span className="md:hidden">Piedmont Nutrition Care uses clinical food science to repair your gut, rebalance your metabolism, and build a plan your body actually responds to.</span>
              </p>

              {/* Mobile: trust indicators inline */}
              <div className="flex flex-wrap gap-3 mb-6 md:hidden animate-fade-in-up-delay-1">
                {[
                  { icon: "★", text: "5.0 Google Rating" },
                  { icon: "🎓", text: "MS, RD, LDN" },
                  { icon: "🏥", text: "Insurance Accepted" },
                ].map((item) => (
                  <span key={item.text} className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-sm text-green-100 text-xs font-medium px-3 py-1.5 rounded-full border border-white/10">
                    <span>{item.icon}</span>
                    {item.text}
                  </span>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-6 animate-fade-in-up-delay-2">
                <Link href="/contact" className="btn-primary text-base md:text-lg text-center !shadow-glow-green hover:scale-[1.02] transition-transform">
                  Book Your Assessment
                </Link>
                <Link href="/insurance" className="inline-block border-2 border-white/30 text-white hover:bg-white/10 font-medium py-3 md:py-3.5 px-6 md:px-8 rounded-[8px] transition-all duration-300 text-center hover:-translate-y-0.5 text-sm md:text-base">
                  Check If Your Insurance Covers It
                </Link>
              </div>
              <p className="hidden md:block text-green-200/60 text-sm animate-fade-in-up-delay-3">
                60-minute consultations  ·  Blue Cross Blue Shield, Aetna &amp; Medicare accepted  ·  In-person or virtual
              </p>
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
                  <span className="hidden md:inline">Your A1C keeps creeping up. Your stomach bloats painfully after meals, no matter how carefully you eat. You&apos;re mentally mapping public restrooms before you leave the house.</span>
                  <span className="md:hidden">Rising A1C, severe bloating after meals, and constant digestive anxiety.</span>
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
                  <span className="hidden md:inline">Every failed program chips away at your confidence. You start to believe your body is just &ldquo;broken.&rdquo; The shame compounds — you blame yourself for not having enough discipline, even though discipline was never the problem.</span>
                  <span className="md:hidden">Every failed program chips away at your confidence. You start to believe your body is just &ldquo;broken&rdquo; — even though discipline was never the problem.</span>
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
                  <span className="hidden md:inline">Your gut microbiome directly controls blood sugar regulation, hunger hormone signaling, and inflammatory response. When that ecosystem is damaged, no amount of restriction can produce lasting results.</span>
                  <span className="md:hidden">Your gut microbiome controls blood sugar, hunger hormones, and inflammation. When it&apos;s damaged, no amount of restriction works.</span>
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
      <section className="relative py-16 md:py-24 px-6 md:px-8 bg-gradient-to-br from-green-900 via-green-950 to-green-900 overflow-hidden">
        {/* Background texture */}
        <div className="absolute inset-0 bg-dot-pattern bg-dot opacity-[0.06]" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-green-400/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-amber-400/5 rounded-full blur-3xl" />

        {/* Subtle scattered leaves */}
        <svg className="absolute top-8 left-[8%] w-16 h-16 md:w-20 md:h-20 text-green-400/[0.07] rotate-[-20deg]" viewBox="0 0 64 64" fill="currentColor">
          <path d="M32 4C32 4 8 20 8 40c0 12 10 20 24 20s24-8 24-20C56 20 32 4 32 4z" />
        </svg>
        <svg className="absolute top-12 right-[12%] w-10 h-10 md:w-14 md:h-14 text-green-300/[0.06] rotate-[35deg]" viewBox="0 0 64 64" fill="currentColor">
          <path d="M32 4C32 4 8 20 8 40c0 12 10 20 24 20s24-8 24-20C56 20 32 4 32 4z" />
        </svg>
        <svg className="absolute bottom-10 left-[15%] w-12 h-12 md:w-16 md:h-16 text-green-400/[0.05] rotate-[160deg]" viewBox="0 0 64 64" fill="currentColor">
          <path d="M32 4C32 4 8 20 8 40c0 12 10 20 24 20s24-8 24-20C56 20 32 4 32 4z" />
        </svg>
        <svg className="absolute bottom-6 right-[8%] w-14 h-14 md:w-18 md:h-18 text-green-300/[0.06] rotate-[-45deg]" viewBox="0 0 64 64" fill="currentColor">
          <path d="M32 4C32 4 8 20 8 40c0 12 10 20 24 20s24-8 24-20C56 20 32 4 32 4z" />
        </svg>
        <svg className="absolute top-1/2 -translate-y-1/2 left-[3%] w-8 h-8 md:w-12 md:h-12 text-green-400/[0.04] rotate-[75deg] hidden md:block" viewBox="0 0 64 64" fill="currentColor">
          <path d="M32 4C32 4 8 20 8 40c0 12 10 20 24 20s24-8 24-20C56 20 32 4 32 4z" />
        </svg>
        <svg className="absolute top-1/2 -translate-y-1/2 right-[5%] w-10 h-10 text-green-400/[0.05] rotate-[-60deg] hidden md:block" viewBox="0 0 64 64" fill="currentColor">
          <path d="M32 4C32 4 8 20 8 40c0 12 10 20 24 20s24-8 24-20C56 20 32 4 32 4z" />
        </svg>

        <div className="container-wide relative z-10">
          <AnimateOnScroll animation="scale-up">
            <p className="font-heading text-2xl md:text-3xl lg:text-5xl text-white text-center italic leading-snug max-w-3xl mx-auto tracking-tight">
              Your metabolism isn&apos;t broken.{" "}
              <span className="text-green-300">It&apos;s been getting the wrong instructions.</span>
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll delay={200}>
            <p className="text-green-200/60 text-center text-base md:text-lg mt-6 max-w-xl mx-auto">
              Restore the system, and the symptoms resolve themselves.
            </p>
          </AnimateOnScroll>
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

          {/* Desktop grid */}
          <div className="hidden md:grid md:grid-cols-4 gap-6 lg:gap-8 stagger-children">
            {steps.map((item) => (
              <AnimateOnScroll key={item.step} className="h-full group">
                <div className="relative bg-white rounded-2xl p-6 lg:p-8 shadow-card hover:shadow-deep transition-all duration-300 border border-warm-100/50 h-full flex flex-col hover:-translate-y-[2px] overflow-hidden">
                  {/* Big background number */}
                  <span className="absolute -top-4 -left-2 text-[7rem] lg:text-[8rem] font-heading font-bold text-green-100/40 leading-none select-none pointer-events-none">
                    {item.step}
                  </span>
                  <div className="relative z-10">
                    <h3 className="font-heading text-base lg:text-lg text-warm-900 leading-snug mb-3">{item.title}</h3>
                    <p className="text-warm-600 leading-relaxed text-sm">{item.body}</p>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>

          {/* Mobile stack */}
          <div className="md:hidden space-y-4 stagger-children">
            {steps.map((item) => (
              <AnimateOnScroll key={item.step}>
                <div className="relative bg-white rounded-2xl p-5 pl-16 shadow-card border border-warm-100/50 overflow-hidden">
                  {/* Background number */}
                  <span className="absolute -top-2 -left-1 text-[5rem] font-heading font-bold text-green-100/40 leading-none select-none pointer-events-none">
                    {item.step}
                  </span>
                  <div className="relative z-10">
                    <h3 className="font-heading text-base text-warm-900 mb-2">{item.title}</h3>
                    <p className="text-warm-600 leading-relaxed text-sm">{item.bodyShort}</p>
                  </div>
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
                    "Restrictive diets — losing 20 lbs, gaining 30 back",
                    "10-minute doctor visits ending with \"eat less, move more\"",
                    "Generic meal plan handouts that ignore your life",
                    "Fighting daily cravings with willpower",
                    "Spending thousands on supplements and 30-day challenges",
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
                      "60-minute consultations where your labs are actually analyzed",
                      "Personalized food chemistry protocols with better versions of your favorite foods",
                      "Healing the gut dysfunction that's creating the cravings",
                      "One expert who identifies the root cause and gives you a clear map",
                      "A dedicated local practitioner who knows your full medical history",
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
                aShort: "Your body isn't broken — it's been responding to conflicting instructions. Compromised gut flora drives uncontrollable cravings and blood sugar swings. The problem was never your effort. It was the approach.",
                accent: "border-l-green-300",
              },
              {
                q: "\"Will my insurance cover this?\"",
                a: "Piedmont Nutrition Care accepts Blue Cross Blue Shield, Aetna, and Medicare. Medical Nutrition Therapy is a covered benefit under most plans for conditions including diabetes, high cholesterol, IBS, and obesity. You can verify your specific coverage before your first session — no surprises, no hidden fees.",
                aShort: "We accept Blue Cross Blue Shield, Aetna, and Medicare. MNT is covered for diabetes, high cholesterol, IBS, and obesity. Verify your coverage before your first session — no surprises.",
                accent: "border-l-amber-300",
              },
              {
                q: "\"I don't want to give up my favorite foods.\"",
                a: "You won't. This isn't an elimination diet. Jeanne's approach builds on the foods you already enjoy — including Southern staples — and finds better versions that support your gut health and metabolic goals. Your family eats the same foundational meals with minor adjustments. No separate cooking. No guilt.",
                aShort: "You won't. Jeanne finds better versions of foods you already love — including Southern staples. Your family eats the same meals. No guilt.",
                accent: "border-l-green-300",
              },
              {
                q: "\"Another expert is just going to judge me.\"",
                a: "Every appointment at Piedmont Nutrition Care is 60 minutes, one-on-one, unhurried. Jeanne's patients consistently describe feeling heard, validated, and respected for the first time in their medical journey. This is a partnership, not a lecture.",
                aShort: "60 minutes, one-on-one, unhurried. Patients consistently describe feeling heard and respected for the first time. A partnership, not a lecture.",
                accent: "border-l-amber-300",
              },
            ].map((item, i) => (
              <AnimateOnScroll key={i}>
                <div className={`bg-white rounded-2xl p-6 md:p-8 shadow-card hover:shadow-lifted transition-all duration-300 border border-warm-100/50 border-l-4 ${item.accent} hover:-translate-y-[2px]`}>
                  <h3 className="font-heading text-lg text-warm-900 mb-4">{item.q}</h3>
                  <p className="text-warm-600 leading-relaxed max-w-2xl">
                    <span className="hidden md:inline">{item.a}</span>
                    <span className="md:hidden">{item.aShort}</span>
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>

          {/* STAKES */}
          <AnimateOnScroll className="mt-14">
            <div className="relative bg-gradient-cta text-white rounded-2xl p-8 md:p-12 text-center overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-green-400/10 rounded-full blur-3xl" />
              <p className="text-lg leading-relaxed text-green-50 relative z-10 max-w-2xl mx-auto">
                <span className="hidden md:inline">Your A1C doesn&apos;t pause while you decide. Your gut symptoms don&apos;t improve on their own. Every month without addressing the root cause is another month of cravings you can&apos;t explain, energy you don&apos;t have, and lab numbers moving in the wrong direction. You&apos;ve spent years trying to solve this alone. The next step isn&apos;t another app or another 30-day challenge.</span>
                <span className="md:hidden">Your symptoms don&apos;t pause while you decide. Every month without addressing the root cause means more cravings, less energy, and worse lab numbers. The next step isn&apos;t another app.</span>
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
        triggers={["60-minute sessions", "Same practitioner every visit", "Blue Cross Blue Shield, Aetna & Medicare accepted", "In-person or virtual"]}
        testimonial={{
          quote: "Her intelligence, compassion and sense of humor make working with her not only helpful, but also fun.",
          author: "Liz",
        }}
      />
    </>
  );
}
