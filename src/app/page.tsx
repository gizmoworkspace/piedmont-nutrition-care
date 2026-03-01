import Link from "next/link";
import TestimonialCard from "@/components/TestimonialCard";
import CTASection from "@/components/CTASection";
import ProofBar from "@/components/ProofBar";
import { CheckIcon, XMarkIcon } from "@/components/Icons";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative bg-warm-50 section-padding pt-16 md:pt-24">
        <div className="container-wide">
          <div className="max-w-3xl">
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl text-warm-950 leading-tight mb-6 animate-fade-in-up">
              Your cravings, weight resistance, and gut pain aren&apos;t willpower failures.{" "}
              <span className="text-green-600">They&apos;re gut health failures.</span>
            </h1>
            <p className="text-lg md:text-xl text-warm-600 leading-relaxed mb-8 max-w-2xl animate-fade-in-up-delay-1">
              You&apos;ve done everything &ldquo;right&rdquo; — counted calories, survived elimination diets, sat through 10-minute doctor visits that ended with &ldquo;eat less, move more.&rdquo; Your body kept fighting back. Because no one looked at the root cause: what&apos;s happening inside your digestive tract. Piedmont Nutrition Care uses clinical food science to repair your gut, rebalance your metabolism, and build a plan your body actually responds to — with better versions of the foods you already love.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-6 animate-fade-in-up-delay-2">
              <Link href="/contact" className="btn-primary text-lg text-center">
                Book Your Assessment
              </Link>
              <Link href="/insurance" className="btn-secondary text-center">
                Check If Your Insurance Covers It
              </Link>
            </div>
            <p className="text-warm-500 text-sm animate-fade-in-up-delay-3">
              60-minute consultations  ·  BCBS, Aetna &amp; Medicare accepted  ·  In-person or virtual
            </p>
          </div>
        </div>
      </section>

      {/* PROOF BAR */}
      <ProofBar items={[
        { icon: "star", text: "5.0 Google Rating" },
        { icon: "academic", text: "MS, RD, LDN Credentials" },
        { icon: "clipboard", text: "20+ Years Clinical Experience" },
        { icon: "building", text: "Accepted by Major NC Insurers" },
      ]} />

      {/* AGITATION */}
      <section className="section-padding">
        <div className="container-narrow">
          <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl text-warm-950 mb-8">
            You&apos;ve been doing everything right. So why does your body keep working against you?
          </h2>
          <div className="space-y-6 text-warm-600 leading-relaxed text-lg">
            <p>
              Your A1C keeps creeping up. Your stomach bloats so badly after meals you look six months pregnant. You&apos;re mentally mapping public restrooms before you leave the house.
            </p>
            <p>
              You&apos;ve cut your calories to 1,200 a day. You&apos;ve tried Keto, Whole30, calorie-counting apps. Maybe you&apos;re on Ozempic and dreading the day you have to stop. You&apos;ve spent thousands on supplements, 30-day challenges, and programs that promised everything and delivered nothing.
            </p>
            <p>
              And every doctor you&apos;ve seen has said the same thing: eat less, move more. In a 10-minute appointment that felt more like a lecture than a conversation.
            </p>
            <p>
              None of it worked. Not because you lack willpower or discipline. You have more of both than most people will ever need.
            </p>
            <p>
              It didn&apos;t work because no one addressed the actual problem: a compromised gut that can&apos;t properly regulate your blood sugar, your hunger hormones, or your inflammatory response. You&apos;ve been fighting your biology with restriction — and biology always wins.
            </p>
          </div>
        </div>
      </section>

      {/* CROSSHEAD */}
      <section className="py-16 bg-green-50">
        <div className="container-narrow text-center">
          <p className="font-heading text-2xl md:text-3xl lg:text-4xl text-green-700 italic leading-snug">
            Your metabolism isn&apos;t broken. It&apos;s been getting the wrong instructions.
          </p>
        </div>
      </section>

      {/* HOW SECTION */}
      <section className="section-padding">
        <div className="container-wide">
          <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl text-warm-950 mb-12 text-center">
            How Piedmont Nutrition Care works: four steps from confused to confident
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                step: "1",
                title: "Your Gut & Metabolic Foundation Assessment",
                body: "Your first session is 60 minutes, one-on-one, with Jeanne — not a rotating roster of providers. You'll walk through your full health history, your current symptoms, your medications, your lab work, and the things you've already tried. This is the appointment your doctor never had time for — so that you finally have a clinician who understands your complete picture, not just a snapshot.",
              },
              {
                step: "2",
                title: "Clinical Lab Analysis & Gut Health Assessment",
                body: "Jeanne reviews your blood panels, cholesterol markers, A1C, inflammation levels, and digestive function — the data most providers glance at for 30 seconds. She identifies the specific biological mechanisms driving your symptoms: gut microbiome disruption, leptin resistance (when your brain stops hearing the \"I'm full\" signal), blood sugar dysregulation, or hormonal imbalances — so that you understand exactly WHY your body has been working against you, not just that it has.",
              },
              {
                step: "3",
                title: "Personalized Food Chemistry Protocol",
                body: "You receive a nutrition plan built from your unique biochemistry — not a generic handout. It's designed around better versions of the foods you already love, including Southern staples. No calorie counting. No elimination diets. No separate meals for you and your family — so that eating becomes something you enjoy again instead of a source of anxiety and guilt.",
              },
              {
                step: "4",
                title: "Continued Clinical Monitoring & Adjustment",
                body: "You aren't handed a plan and sent on your way. Jeanne tracks your lab markers, adjusts your protocol as your body responds, and serves as your ongoing clinical partner — so that you have someone carrying the cognitive load with you, translating the science into simple daily steps as your health evolves.",
              },
            ].map((item) => (
              <div key={item.step} className="bg-white rounded-[8px] p-8 shadow-card border-t-2 border-green-400 hover:shadow-lifted transition-shadow duration-200">
                <div className="flex items-center gap-4 mb-4">
                  <span className="w-10 h-10 rounded-full bg-green-100 text-green-700 font-heading text-lg font-bold flex items-center justify-center flex-shrink-0">
                    {item.step}
                  </span>
                  <h3 className="font-heading text-lg text-warm-900">{item.title}</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 max-w-2xl mx-auto">
            <TestimonialCard
              quote="After months of intense IBS symptoms, I met with Jeanne to help figure out which foods to avoid and which foods to eat so that I wouldn't have to continue taking steroids and antibiotics. After following her recommendations, I am feeling so much better. I'm living and eating with far less abdominal pain and digestive issues."
              author="M. Cooper"
            />
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section-padding bg-warm-50">
        <div className="container-wide">
          <div className="grid md:grid-cols-3 gap-6">
            <TestimonialCard
              quote="Jeanne is extremely knowledgeable about food, food chemistry, and the latest research findings on nutrition. She can suggest dietary changes to prevent cancer, boost a sluggish metabolism, improve blood sugar, or lower LDL. Her intelligence, compassion and sense of humor make working with her not only helpful, but also fun."
              author="Liz"
            />
            <TestimonialCard
              quote="As a cancer survivor struggling with weight and gut issues, I'm so grateful to have found Jeanne. She understands the science of food as well as how to share it with me, apply it to my specific needs, and guide me to helpful resources. I'm excited about moving forward with the plan she has developed for me."
              author="Ann"
              context="Cancer survivor"
            />
            <TestimonialCard
              quote="I highly recommend Jeanne Doherty as a nutritionist. Recently I have worked with her to lower my blood sugars and improve cholesterol. Her advice is practical and food suggestions are enjoyable, better versions of my favorite foods. I am grateful for the transformative impact she has had on my lifestyle and wellbeing."
              author="Doug"
            />
          </div>
        </div>
      </section>

      {/* COMPARISON TABLE */}
      <section className="section-padding">
        <div className="container-wide">
          <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl text-warm-950 mb-10 text-center">
            You&apos;ve tried the old way. Here&apos;s what&apos;s different.
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px]">
              <thead>
                <tr className="border-b-2 border-warm-200">
                  <th className="text-left py-4 px-4 font-heading text-warm-500 font-normal text-sm uppercase tracking-wide">What You&apos;ve Tried</th>
                  <th className="text-left py-4 px-4 font-heading text-warm-900 font-normal text-sm uppercase tracking-wide">Piedmont Nutrition Care</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {[
                  ["Starving yourself on restrictive diets, losing 20 lbs, gaining 30 back", "Understanding your gut chemistry and building a sustainable metabolic foundation"],
                  ["10-minute doctor visits ending with \"eat less, move more\"", "60-minute consultations where your symptoms are validated and your labs are analyzed"],
                  ["Generic meal plan handouts that ignore your life", "Personalized food chemistry protocols with better versions of your favorite foods"],
                  ["Fighting daily cravings with willpower", "Healing the gut dysfunction that's creating the cravings"],
                  ["Spending thousands on supplements and 30-day challenges", "One qualified expert who identifies the root cause and gives you a clear, permanent map"],
                  ["Faceless telehealth where your dietitian might not show up", "A dedicated local practitioner who knows your name, family, and full medical history"],
                  ["GLP-1 injections and dreading the day you stop", "Rebuilding your metabolic resilience so your body maintains results naturally"],
                ].map(([old, newWay], i) => (
                  <tr key={i} className="border-b border-warm-100">
                    <td className="py-4 px-4 text-warm-400 flex items-start gap-2">
                      <XMarkIcon className="w-4 h-4 text-warm-300 flex-shrink-0 mt-0.5" />
                      <span>{old}</span>
                    </td>
                    <td className="py-4 px-4 text-warm-800 font-medium">
                      <span className="flex items-start gap-2">
                        <CheckIcon className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>{newWay}</span>
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* OBJECTION HANDLING */}
      <section className="section-padding bg-warm-50">
        <div className="container-narrow">
          <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl text-warm-950 mb-10 text-center">
            Your questions, answered honestly
          </h2>
          <div className="space-y-6">
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
              <div key={i} className="bg-white rounded-[8px] p-6 md:p-8 shadow-card">
                <h3 className="font-heading text-lg text-warm-900 mb-3">{item.q}</h3>
                <p className="text-warm-600 leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>

          {/* STAKES */}
          <div className="mt-12 bg-green-800 text-white rounded-[8px] p-8 md:p-10 text-center">
            <p className="text-lg leading-relaxed text-green-50">
              Your A1C doesn&apos;t pause while you decide. Your gut symptoms don&apos;t improve on their own. Every month without addressing the root cause is another month of cravings you can&apos;t explain, energy you don&apos;t have, and lab numbers moving in the wrong direction. You&apos;ve spent years trying to solve this alone. The next step isn&apos;t another app or another 30-day challenge.
            </p>
          </div>
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
