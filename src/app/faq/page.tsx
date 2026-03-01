import type { Metadata } from "next";
import Accordion from "@/components/Accordion";
import CTASection from "@/components/CTASection";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Piedmont Nutrition Care",
  description: "Answers to common questions about Medical Nutrition Therapy, insurance coverage, and what to expect at Piedmont Nutrition Care.",
};

const practiceQuestions = [
  {
    question: "What's the difference between a Registered Dietitian and a nutritionist?",
    answer: "A Registered Dietitian Nutritionist (RDN) holds a minimum of a master's degree in nutrition science, has completed supervised clinical training, and passed a national credentialing exam. An RDN is licensed to diagnose nutrition-related conditions, prescribe Medical Nutrition Therapy, and bill insurance. The term \"nutritionist\" is unregulated in most states — anyone can use it regardless of training. Jeanne holds an MS in Nutrition from UNCG and is both an RDN and LDN (Licensed Dietitian Nutritionist).",
  },
  {
    question: "Do you offer virtual appointments?",
    answer: "Yes. Piedmont Nutrition Care offers both in-person sessions at our Winston-Salem office and virtual consultations. Both formats provide the same 60-minute, one-on-one care.",
  },
  {
    question: "How long is each session?",
    answer: "Every session is 60 minutes, one-on-one with Jeanne. This isn't a 10-minute appointment with a provider who's already looking at the next chart. You have time to ask questions, review your labs, discuss what's working, and adjust your plan.",
  },
  {
    question: "How many sessions will I need?",
    answer: "That depends on your condition and goals. Some patients see meaningful improvement in their lab markers within 3–4 sessions. Others with more complex conditions (severe IBS, post-oncology, long-standing metabolic dysfunction) benefit from ongoing care over several months. Jeanne will give you an honest assessment of what to expect during your first appointment — no pressure to commit to more sessions than your situation requires.",
  },
];

const approachQuestions = [
  {
    question: "Will I have to give up my favorite foods?",
    answer: "No. Piedmont Nutrition Care's approach is built on finding better versions of the foods you already enjoy — not eliminating them. This includes Southern staples. Your plan works with your preferences, your family's needs, and your real life. If your entire household can't eat the same foundational meal, the plan isn't practical — and impractical plans don't last.",
  },
  {
    question: "Is this just another fad diet?",
    answer: "Piedmont Nutrition Care doesn't use detox protocols, elimination diets, cleanses, or calorie-counting regimens. Jeanne's approach is rooted in clinical food science and your actual lab data. It's evidence-based Medical Nutrition Therapy delivered by a credentialed RDN — not a 30-day challenge from an Instagram influencer.",
  },
  {
    question: "I'm on Ozempic (or another GLP-1 medication). Can you help?",
    answer: "Yes. Many patients come to Piedmont Nutrition Care while on GLP-1 medications or during the transition off them. Jeanne provides a \"Medication Off-Ramp\" protocol that rebuilds the gut microbiome and metabolic resilience your body needs to maintain results after medication ends. She also works with patients who want to optimize their nutrition while staying on GLP-1s. This isn't anti-medication — it's ensuring the biological foundation exists to sustain your progress.",
  },
  {
    question: "I've tried everything and nothing has worked. Why would this be different?",
    answer: "The approaches you've tried — calorie restriction, elimination diets, apps, maybe even medication — share a common flaw: they treated symptoms without addressing the underlying biological dysfunction. Your gut microbiome, your hormonal signaling, your blood sugar regulation — these are systems that need repair, not just management. Piedmont Nutrition Care starts with your actual lab data and identifies the specific root cause. When the right problem is finally being addressed, the response is different.",
  },
];

const insuranceQuestions = [
  {
    question: "Does my insurance cover this?",
    answer: "Piedmont Nutrition Care accepts BCBS, Aetna, and Medicare. Medical Nutrition Therapy is covered by most major plans for qualifying conditions. You can verify your specific coverage before your first session — call 336-986-5388 or visit our Insurance & Pricing page.",
  },
  {
    question: "What if I don't have insurance or my plan doesn't cover MNT?",
    answer: "Self-pay options are available with transparent, upfront pricing. See our Insurance & Pricing page for current rates. No billing surprises.",
  },
  {
    question: "Do I need a referral from my doctor?",
    answer: "In most cases, no referral is required for Medical Nutrition Therapy. Some insurance plans may have specific requirements — Piedmont Nutrition Care will help you verify this before your appointment.",
  },
];

const gettingStartedQuestions = [
  {
    question: "What should I bring to my first appointment?",
    answer: "Your most recent lab work (blood panels, A1C, lipid panel — even if they're a few months old), a list of current medications and supplements, your insurance card, and any questions you've been wanting to ask a dietitian but never had the time to in a 10-minute appointment. If you don't have recent labs, Jeanne can coordinate with your physician to order them.",
  },
  {
    question: "How do I book?",
    answer: "Book online through this website, or call 336-986-5388. If you want to verify insurance coverage first, visit our Insurance & Pricing page or call the office directly.",
  },
];

export default function FAQ() {
  return (
    <>
      <section className="relative bg-gradient-hero overflow-hidden min-h-[40vh] flex items-center">
        <div className="absolute inset-0 bg-black/15" />
        <div className="max-w-6xl mx-auto px-5 sm:px-8 md:px-12 lg:px-20 py-20 sm:py-24 md:py-32 lg:py-36 w-full relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-heading text-[1.75rem] sm:text-3xl md:text-4xl lg:text-[2.75rem] xl:text-5xl text-white leading-[1.12] mb-5 sm:mb-6 md:mb-8 animate-fade-in-up tracking-tight">
              Frequently Asked Questions
            </h1>
            <p className="text-[0.95rem] sm:text-base md:text-lg text-white/65 animate-fade-in-up-delay-1">
              Everything you need to know before your first appointment.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-cream">
        <div className="container-narrow">
          <div className="space-y-16">
            <AnimateOnScroll>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-warm-400 font-medium mb-4">About the Practice</p>
                <Accordion items={practiceQuestions} />
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-warm-400 font-medium mb-4">About the Approach</p>
                <Accordion items={approachQuestions} />
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-warm-400 font-medium mb-4">Insurance &amp; Cost</p>
                <Accordion items={insuranceQuestions} />
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-warm-400 font-medium mb-4">Getting Started</p>
                <Accordion items={gettingStartedQuestions} />
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      <section className="py-20 bg-warm-50">
        <div className="container-narrow text-center">
          <AnimateOnScroll>
            <p className="text-base md:text-lg text-warm-600">
              Still have questions? Call{" "}
              <a href="tel:3369865388" className="text-green-600 font-semibold hover:underline">336-986-5388</a>.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      <CTASection
        headline="Book Your Assessment"
        triggers={["60 minutes", "Same practitioner every visit", "Insurance accepted"]}
      />
    </>
  );
}
