import Link from "next/link";
import TestimonialCard from "@/components/TestimonialCard";
import CTASection from "@/components/CTASection";
import ProofBar from "@/components/ProofBar";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { CheckIcon, XMarkIcon } from "@/components/Icons";

export default function Home() {
  return (
    <>
      {/* HERO — Full viewport, deep green gradient */}
      <section className="relative min-h-[90vh] flex items-center bg-gradient-hero overflow-hidden grain-overlay">
        {/* Background image overlay */}
        <div
          className="absolute inset-0 opacity-10 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1490818387583-1baba5e638af?w=1600&h=900&fit=crop')" }}
        />
        {/* Decorative blobs */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-green-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-amber-400/5 rounded-full blur-3xl" />
        {/* Dot pattern */}
        <div className="absolute inset-0 bg-dot-pattern bg-dot opacity-[0.03]" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 md:py-28 lg:py-32 w-full">
          <div className="max-w-3xl">
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white leading-tight mb-6 animate-fade-in-up drop-shadow-lg">
              Your cravings, weight resistance, and gut pain aren&apos;t willpower failures.{" "}
              <span className="text-green-300">They&apos;re gut health failures.</span>
            </h1>
            <p className="text-lg md:text-xl text-green-100/80 leading-relaxed mb-8 max-w-2xl animate-fade-in-up-delay-1">
              You&apos;ve done everything &ldquo;right&rdquo; — counted calories, survived elimination diets, sat through 10-minute doctor visits that ended with &ldquo;eat less, move more.&rdquo; Your body kept fighting back. Because no one looked at the root cause: what&apos;s happening inside your digestive tract. Piedmont Nutrition Care uses clinical food science to repair your gut, rebalance your metabolism, and build a plan your body actually responds to — with better versions of the foods you already love.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-6 animate-fade-in-up-delay-2">
              <Link href="/contact" className="btn-primary text-lg text-center !shadow-glow-green">
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
        </div>

        {/* Curved bottom */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1200 60" preserveAspectRatio="none" className="block w-full h-[30px] md:h-[50px]">
            <path d="M0,60 C300,20 900,20 1200,60 L1200,60 L0,60 Z" fill="#FDFBF7" />
          </svg>
        </div>
      </section>

      {/* PROOF BAR — Floating glass */}
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
        <div className="container-narrow">
          <AnimateOnScroll>
            <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl text-warm-950 mb-8">
              You&apos;ve been doing everything right. So why does your body keep working against you?
            </h2>
          </AnimateOnScroll>
          <div className="space-y-6 text-warm-600 leading-relaxed text-lg">
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
              <p>
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

      {/* CROSSHEAD — Pull quote */}
      <section className="relative py-20 bg-gradient-to-br from-green-50 via-cream to-amber-50 overflow-hidden">
        <div className="absolute inset-0 bg-dot-pattern bg-dot opacity-[0.04]" />
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-24 bg-gradient-to-b from-green-400 to-amber-400 rounded-r-full" />
        <div className="container-narrow text-center relative z-10">
          <AnimateOnScroll animation="scale-up">
            <p className="font-heading text-2xl md:text-3xl lg:text-4xl text-green-700 italic leading-snug">
              Your metabolism isn&apos;t broken. It&apos;s been getting the wrong instructions.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* HOW IT WORKS — Timeline stepper */}
      <section className="section-padding bg-cream">
        <div className="container-wide">
          <AnimateOnScroll>
            <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl text-warm-950 mb-4 text-center">
              How Piedmont Nutrition Care works
            </h2>
            <p className="text-warm-500 text-center mb-14 text-lg">Four steps from confused to confident</p>
          </AnimateOnScroll>

          {/* Desktop timeline */}
          <div className="hidden md:block relative">
            {/* Connecting line */}
            <div className="absolute top-8 left-[calc(12.5%+20px)] right-[calc(12.5%+20px)] h-0.5 bg-gradient-to-r from-green-300 via-green-400 to-green-300 z-0" />

            <div className="grid md:grid-cols-4 gap-6 relative z-10 stagger-children">
              {[
                {
                  step: "1",
                  icon: "🩺",
                  title: "Your Gut & Metabolic Foundation Assessment",
                  body: "Your first session is 60 minutes, one-on-one, with Jeanne — not a rotating roster of providers. You'll walk through your full health history, your current symptoms, your medications, your lab work, and the things you've already tried. This is the appointment your doctor never had time for — so that you finally have a clinician who understands your complete picture, not just a snapshot.",
                },
                {
                  step: "2",
                  icon: "🔬",
                  title: "Clinical Lab Analysis & Gut Health Assessment",
                  body: "Jeanne reviews your blood panels, cholesterol markers, A1C, inflammation levels, and digestive function — the data most providers glance at for 30 seconds. She identifies the specific biological mechanisms driving your symptoms: gut microbiome disruption, leptin resistance (when your brain stops hearing the \"I'm full\" signal), blood sugar dysregulation, or hormonal imbalances — so that you understand exactly WHY your body has been working against you, not just that it has.",
                },
                {
                  step: "3",
                  icon: "🥗",
                  title: "Personalized Food Chemistry Protocol",
                  body: "You receive a nutrition plan built from your unique biochemistry — not a generic handout. It's designed around better versions of the foods you already love, including Southern staples. No calorie counting. No elimination diets. No separate meals for you and your family — so that eating becomes something you enjoy again instead of a source of anxiety and guilt.",
                },
                {
                  step: "4",
                  icon: "📈",
                  title: "Continued Clinical Monitoring & Adjustment",
                  body: "You aren't handed a plan and sent on your way. Jeanne tracks your lab markers, adjusts your protocol as your body responds, and serves as your ongoing clinical partner — so that you have someone carrying the cognitive load with you, translating the science into simple daily steps as your health evolves.",
                },
              ].map((item) => (
                <AnimateOnScroll key={item.step} className="text-center group">
                  <div className="w-16 h-16 rounded-2xl bg-white shadow-card mx-auto mb-4 flex items-center justify-center text-2xl group-hover:shadow-deep group-hover:-translate-y-1 transition-all duration-300 border border-green-100">
                    {item.icon}
                  </div>
                  <div className="bg-white rounded-2xl p-6 shadow-card hover:shadow-deep transition-all duration-300 text-left border border-warm-100/50">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="w-7 h-7 rounded-full bg-green-500 text-white font-bold text-xs flex items-center justify-center flex-shrink-0">
                        {item.step}
                      </span>
                      <h3 className="font-heading text-base text-warm-900 leading-snug">{item.title}</h3>
                    </div>
                    <p className="text-warm-600 leading-relaxed text-sm">{item.body}</p>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>

          {/* Mobile stack */}
          <div className="md:hidden space-y-6 stagger-children">
            {[
              {
                step: "1",
                icon: "🩺",
                title: "Your Gut & Metabolic Foundation Assessment",
                body: "Your first session is 60 minutes, one-on-one, with Jeanne — not a rotating roster of providers. You'll walk through your full health history, your current symptoms, your medications, your lab work, and the things you've already tried. This is the appointment your doctor never had time for — so that you finally have a clinician who understands your complete picture, not just a snapshot.",
              },
              {
                step: "2",
                icon: "🔬",
                title: "Clinical Lab Analysis & Gut Health Assessment",
                body: "Jeanne reviews your blood panels, cholesterol markers, A1C, inflammation levels, and digestive function — the data most providers glance at for 30 seconds. She identifies the specific biological mechanisms driving your symptoms: gut microbiome disruption, leptin resistance (when your brain stops hearing the \"I'm full\" signal), blood sugar dysregulation, or hormonal imbalances — so that you understand exactly WHY your body has been working against you, not just that it has.",
              },
              {
                step: "3",
                icon: "🥗",
                title: "Personalized Food Chemistry Protocol",
                body: "You receive a nutrition plan built from your unique biochemistry — not a generic handout. It's designed around better versions of the foods you already love, including Southern staples. No calorie counting. No elimination diets. No separate meals for you and your family — so that eating becomes something you enjoy again instead of a source of anxiety and guilt.",
              },
              {
                step: "4",
                icon: "📈",
                title: "Continued Clinical Monitoring & Adjustment",
                body: "You aren't handed a plan and sent on your way. Jeanne tracks your lab markers, adjusts your protocol as your body responds, and serves as your ongoing clinical partner — so that you have someone carrying the cognitive load with you, translating the science into simple daily steps as your health evolves.",
              },
            ].map((item) => (
              <AnimateOnScroll key={item.step}>
                <div className="bg-white rounded-2xl p-6 shadow-card border-l-4 border-green-400">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl">{item.icon}</span>
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

          {/* Inline testimonial */}
          <AnimateOnScroll className="mt-14">
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

      {/* TESTIMONIALS — with image backgrounds */}
      <section className="relative section-padding bg-gradient-to-br from-warm-50 via-cream to-green-50 overflow-hidden">
        <div className="absolute inset-0 bg-dot-pattern bg-dot opacity-[0.03]" />
        <div className="container-wide relative z-10">
          <AnimateOnScroll>
            <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl text-warm-950 mb-12 text-center">
              What our patients say
            </h2>
          </AnimateOnScroll>
          <div className="grid md:grid-cols-3 gap-6 stagger-children">
            <AnimateOnScroll>
              <TestimonialCard
                quote="Jeanne is extremely knowledgeable about food, food chemistry, and the latest research findings on nutrition. She can suggest dietary changes to prevent cancer, boost a sluggish metabolism, improve blood sugar, or lower LDL. Her intelligence, compassion and sense of humor make working with her not only helpful, but also fun."
                author="Liz"
              />
            </AnimateOnScroll>
            <AnimateOnScroll>
              <TestimonialCard
                quote="As a cancer survivor struggling with weight and gut issues, I'm so grateful to have found Jeanne. She understands the science of food as well as how to share it with me, apply it to my specific needs, and guide me to helpful resources. I'm excited about moving forward with the plan she has developed for me."
                author="Ann"
                context="Cancer survivor"
              />
            </AnimateOnScroll>
            <AnimateOnScroll>
              <TestimonialCard
                quote="I highly recommend Jeanne Doherty as a nutritionist. Recently I have worked with her to lower my blood sugars and improve cholesterol. Her advice is practical and food suggestions are enjoyable, better versions of my favorite foods. I am grateful for the transformative impact she has had on my lifestyle and wellbeing."
                author="Doug"
              />
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* COMPARISON — Side by side cards */}
      <section className="section-padding bg-cream">
        <div className="container-wide">
          <AnimateOnScroll>
            <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl text-warm-950 mb-10 text-center">
              You&apos;ve tried the old way. Here&apos;s what&apos;s different.
            </h2>
          </AnimateOnScroll>

          <AnimateOnScroll>
            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {/* Old Way Card */}
              <div className="bg-warm-100/80 rounded-2xl p-8 border border-warm-200/50">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-warm-300/50 flex items-center justify-center">
                    <XMarkIcon className="w-5 h-5 text-warm-500" />
                  </div>
                  <h3 className="font-heading text-lg text-warm-500 uppercase tracking-wide">What You&apos;ve Tried</h3>
                </div>
                <div className="space-y-4">
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
                      <span className="text-warm-500 text-sm leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* New Way Card */}
              <div className="bg-green-50 rounded-2xl p-8 border border-green-200/50 shadow-card relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-green-200/20 rounded-full blur-2xl" />
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center">
                      <CheckIcon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="font-heading text-lg text-green-700 uppercase tracking-wide">Piedmont Nutrition Care</h3>
                  </div>
                  <div className="space-y-4">
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
      <section className="relative section-padding bg-gradient-to-br from-warm-50 via-cream to-green-50/50 overflow-hidden">
        <div className="absolute inset-0 bg-dot-pattern bg-dot opacity-[0.03]" />
        <div className="container-narrow relative z-10">
          <AnimateOnScroll>
            <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl text-warm-950 mb-10 text-center">
              Your questions, answered honestly
            </h2>
          </AnimateOnScroll>
          <div className="space-y-6 stagger-children">
            {[
              {
                q: "\"I've tried everything. My body is just broken.\"",
                a: "Your body isn't broken. It's been responding logically to years of conflicting instructions: starvation diets that triggered metabolic adaptation, medications that masked symptoms without addressing causes, and advice that ignored your unique biochemistry. When your gut flora is compromised, leptin resistance increases (your brain stops hearing the \"I'm full\" signal), blood sugar swings become uncontrollable, and cravings intensify — no matter how disciplined you are. The problem was never your effort. It was the approach.",
              },
              {
                q: "\"Will my insurance cover this?\"",
                a: "Piedmont Nutrition Care accepts BCBS, Aetna, and Medicare. Medical Nutrition Therapy is a covered benefit under most plans for conditions including diabetes, high cholesterol, IBS, and obesity. You can verify your specific coverage before your first session — no surprises, no hidden fees.",
              },
              {
                q: "\"I don't want to give up my favorite foods.\"",
                a: "You won't. This isn't an elimination diet. Jeanne's approach builds on the foods you already enjoy — including Southern staples — and finds better versions that support your gut health and metabolic goals. Your family eats the same foundational meals with minor adjustments. No separate cooking. No guilt.",
              },
              {
                q: "\"Another expert is just going to judge me.\"",
                a: "Every appointment at Piedmont Nutrition Care is 60 minutes, one-on-one, unhurried. Jeanne's patients consistently describe feeling heard, validated, and respected for the first time in their medical journey. This is a partnership, not a lecture.",
              },
            ].map((item, i) => (
              <AnimateOnScroll key={i}>
                <div className="bg-white rounded-2xl p-6 md:p-8 shadow-card hover:shadow-deep transition-all duration-300 border border-warm-100/50">
                  <h3 className="font-heading text-lg text-warm-900 mb-3">{item.q}</h3>
                  <p className="text-warm-600 leading-relaxed">{item.a}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>

          {/* STAKES */}
          <AnimateOnScroll className="mt-12">
            <div className="relative bg-gradient-cta text-white rounded-2xl p-8 md:p-10 text-center overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-green-400/10 rounded-full blur-3xl" />
              <p className="text-lg leading-relaxed text-green-50 relative z-10">
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
