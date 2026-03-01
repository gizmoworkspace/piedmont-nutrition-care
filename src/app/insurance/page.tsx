import type { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/CTASection";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { CheckIcon, ShieldCheckIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Insurance & Pricing | Piedmont Nutrition Care",
  description: "Transparent pricing and insurance information. BCBS, Aetna, and Medicare accepted. Medical Nutrition Therapy coverage details.",
};

export default function Insurance() {
  return (
    <>
      {/* HERO */}
      <section className="relative section-padding bg-gradient-to-br from-green-950 via-green-900 to-green-800 overflow-hidden grain-overlay">
        <div className="absolute inset-0 bg-dot-pattern bg-dot opacity-[0.03]" />
        <div className="container-wide relative z-10">
          <div className="max-w-3xl">
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl text-white leading-tight mb-6 animate-fade-in-up drop-shadow-lg">
              You deserve to know what this costs before you commit.
            </h1>
            <p className="text-lg text-green-100/90 leading-relaxed max-w-2xl animate-fade-in-up-delay-1">
              No surprises. No hidden fees. No calling three departments to find out if your insurance covers it. Piedmont Nutrition Care believes pricing transparency is a basic right — and that understanding your investment upfront is the first step toward trusting the process.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1200 60" preserveAspectRatio="none" className="block w-full h-[30px] md:h-[50px]">
            <path d="M0,60 C300,20 900,20 1200,60 L1200,60 L0,60 Z" fill="#FDFBF7" />
          </svg>
        </div>
      </section>

      {/* INSURANCE COVERAGE */}
      <section className="section-padding bg-cream">
        <div className="container-narrow">
          <AnimateOnScroll>
            <h2 className="font-heading text-xl sm:text-2xl md:text-3xl lg:text-4xl text-warm-950 mb-6">
              Your insurance likely covers Medical Nutrition Therapy
            </h2>
            <p className="text-lg text-warm-600 leading-relaxed mb-10">
              Medical Nutrition Therapy (MNT) is a recognized clinical treatment, not a wellness luxury. Most major insurance plans cover MNT for qualifying conditions including diabetes, high cholesterol, cardiovascular disease, IBS, and obesity-related diagnoses.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll>
            <h3 className="font-heading text-xl text-warm-900 mb-4">Accepted Insurance</h3>
          </AnimateOnScroll>
          <div className="grid sm:grid-cols-3 gap-4 mb-12 stagger-children">
            {["Blue Cross Blue Shield (BCBS)", "Aetna", "Medicare"].map((carrier) => (
              <AnimateOnScroll key={carrier}>
                <div className="bg-gradient-to-br from-green-50 to-green-100/50 rounded-2xl p-6 text-center border border-green-200/50 hover:shadow-card transition-all duration-300 hover:-translate-y-0.5">
                  <ShieldCheckIcon className="w-8 h-8 text-green-500 mx-auto mb-3" />
                  <span className="text-warm-800 font-semibold">{carrier}</span>
                </div>
              </AnimateOnScroll>
            ))}
          </div>

          <AnimateOnScroll>
            <h3 className="font-heading text-xl text-warm-900 mb-4">How to Verify Your Coverage</h3>
          </AnimateOnScroll>
          <div className="space-y-4 stagger-children">
            {[
              { step: "1", text: "Call the number on the back of your insurance card or contact our office directly." },
              { step: "2", text: "Piedmont Nutrition Care will confirm your specific benefit level before your first appointment." },
              { step: "3", text: "You'll know your exact out-of-pocket cost before you walk in the door." },
            ].map((item) => (
              <AnimateOnScroll key={item.step}>
                <div className="flex items-start gap-4 bg-white rounded-2xl p-5 shadow-card border border-warm-100/50 hover:shadow-deep transition-all duration-300">
                  <span className="w-10 h-10 rounded-2xl bg-gradient-btn text-white font-bold flex items-center justify-center flex-shrink-0 text-sm shadow-glow-green">
                    {item.step}
                  </span>
                  <p className="text-warm-600 leading-relaxed">{item.text}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* SELF-PAY */}
      <section className="relative section-padding bg-gradient-to-br from-warm-50 via-cream to-green-50/30 overflow-hidden">
        <div className="container-narrow relative z-10">
          <AnimateOnScroll>
            <h2 className="font-heading text-2xl md:text-3xl text-warm-950 mb-6">Self-Pay Options</h2>
            <div className="bg-white rounded-2xl p-8 shadow-card border border-warm-100/50">
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-warm-100">
                  <span className="text-warm-700 font-medium">Initial Assessment (60 minutes)</span>
                  <span className="text-green-700 font-semibold bg-green-50 px-3 py-1 rounded-full text-sm">Contact for pricing</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-warm-100">
                  <span className="text-warm-700 font-medium">Follow-Up Session (60 minutes)</span>
                  <span className="text-green-700 font-semibold bg-green-50 px-3 py-1 rounded-full text-sm">Contact for pricing</span>
                </div>
              </div>
              <p className="text-warm-500 text-sm mt-6">
                Call <a href="tel:3369865388" className="text-green-600 font-semibold hover:underline">336-986-5388</a> for current self-pay rates. Transparent, upfront pricing — no billing surprises.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ROI FRAMING */}
      <section className="section-padding bg-cream">
        <div className="container-narrow">
          <AnimateOnScroll>
            <h2 className="font-heading text-xl sm:text-2xl md:text-3xl lg:text-4xl text-warm-950 mb-8 text-center">
              Compare the real cost
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll>
            <div className="relative bg-gradient-cta text-white rounded-2xl p-5 sm:p-6 md:p-8 lg:p-10 overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-green-400/10 rounded-full blur-3xl" />
              <p className="text-lg leading-relaxed text-green-50 relative z-10">
                A single month of GLP-1 medication costs $800–$1,500 out of pocket — and the weight returns when you stop. A year of calorie-counting app subscriptions, supplements, and 30-day challenges adds up to hundreds of dollars that bought you no lasting results. A session with a credentialed clinical dietitian who identifies the root cause and builds a permanent protocol? That&apos;s the investment that actually resolves the problem.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* OBJECTIONS */}
      <section className="relative section-padding bg-gradient-to-br from-warm-50 via-cream to-green-50/30 overflow-hidden">
        <div className="container-narrow relative z-10">
          <div className="space-y-6 stagger-children">
            <AnimateOnScroll>
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-card border border-warm-100/50 hover:shadow-deep transition-all duration-300">
                <h3 className="font-heading text-lg text-warm-900 mb-3">&ldquo;I&apos;m on a high-deductible plan&rdquo;</h3>
                <p className="text-warm-600 leading-relaxed">
                  Even with a high-deductible plan, MNT sessions count toward your deductible and are often available at negotiated in-network rates. Piedmont Nutrition Care will verify your specific benefit level before your first session so there are no financial surprises. Compare this to what you&apos;ve already spent on supplements, apps, programs, and co-pays for approaches that didn&apos;t address the root cause.
                </p>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll>
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-card border border-warm-100/50 hover:shadow-deep transition-all duration-300">
                <h3 className="font-heading text-lg text-warm-900 mb-3">&ldquo;I don&apos;t know if my condition qualifies&rdquo;</h3>
                <p className="text-warm-600 leading-relaxed">
                  If you have a diagnosis of diabetes, pre-diabetes, high cholesterol, IBS, obesity, cardiovascular disease, or an oncology-related nutrition need, you likely qualify for covered Medical Nutrition Therapy. Not sure? Call{" "}
                  <a href="tel:3369865388" className="text-green-600 font-semibold hover:underline">336-986-5388</a>{" "}
                  and Jeanne&apos;s office will check for you.
                </p>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <CTASection
        headline="Know your cost before you commit"
        primaryLabel="Verify My Insurance Coverage"
        primaryHref="/contact"
        triggers={["No surprise bills", "BCBS, Aetna & Medicare accepted"]}
      />
    </>
  );
}
