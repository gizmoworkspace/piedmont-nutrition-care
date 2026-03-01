import type { Metadata } from "next";
import Accordion from "@/components/Accordion";
import CTASection from "@/components/CTASection";

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
    answer: "Piedmont Nutrition Care accepts BCBS, Aetna, and Medicare. Medical Nutrition Therapy is covered by most major plans for qualifying conditions. You can verify your specific coverage before your first session — call 336-986-5388 or use the insurance verification tool on our Insurance & Pricing page.",
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
    answer: "Book online through this website, or call 336-986-5388. If you want to verify insurance coverage first, use the tool on our Insurance & Pricing page or call the office directly.",
  },
];

export default function FAQ() {
  return (
    <>
      {/* HERO */}
      <section className="section-padding bg-gradient-to-br from-sage-50 via-warm-50 to-cream">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-heading text-4xl md:text-5xl text-sage-900 leading-tight mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-lg text-gray-600">
              Everything you need to know before your first appointment.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-narrow">
          <div className="space-y-12">
            <div>
              <h2 className="font-heading text-2xl text-sage-800 mb-6">About the Practice</h2>
              <Accordion items={practiceQuestions} />
            </div>
            <div>
              <h2 className="font-heading text-2xl text-sage-800 mb-6">About the Approach</h2>
              <Accordion items={approachQuestions} />
            </div>
            <div>
              <h2 className="font-heading text-2xl text-sage-800 mb-6">About Insurance &amp; Cost</h2>
              <Accordion items={insuranceQuestions} />
            </div>
            <div>
              <h2 className="font-heading text-2xl text-sage-800 mb-6">Getting Started</h2>
              <Accordion items={gettingStartedQuestions} />
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="section-padding bg-sage-50">
        <div className="container-narrow text-center">
          <p className="text-lg text-gray-600 mb-6">
            Still have questions? Call{" "}
            <a href="tel:3369865388" className="text-sage-700 font-semibold hover:underline">336-986-5388</a>.
            Ready to start?
          </p>
        </div>
      </section>

      <CTASection
        headline="Book Your Assessment"
        triggers={["60 minutes", "Same practitioner every visit", "Insurance accepted"]}
      />
    </>
  );
}
