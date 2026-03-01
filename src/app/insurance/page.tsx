import type { Metadata } from "next";
import CTASection from "@/components/CTASection";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { ShieldCheckIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Insurance & Pricing | Piedmont Nutrition Care",
  description: "Transparent pricing and insurance information. BCBS, Aetna, and Medicare accepted. Medical Nutrition Therapy coverage details.",
};

export default function Insurance() {
  return (
    <>
      {/* HERO */}
      <section className="relative bg-gradient-hero overflow-hidden min-h-[50vh] flex items-center">
        <div className="absolute inset-0 bg-black/15" />
        <div className="max-w-6xl mx-auto px-5 sm:px-8 md:px-12 lg:px-20 py-20 sm:py-24 md:py-32 lg:py-36 w-full relative z-10">
          <div className="max-w-2xl lg:max-w-3xl">
            <h1 className="font-heading text-[1.75rem] sm:text-3xl md:text-4xl lg:text-[2.75rem] xl:text-5xl text-white leading-[1.12] mb-5 sm:mb-6 md:mb-8 animate-fade-in-up tracking-tight">
              You deserve to know what this costs before you commit.
            </h1>
            <p className="text-[0.95rem] sm:text-base md:text-lg text-white/65 leading-relaxed max-w-2xl animate-fade-in-up-delay-1">
              No surprises. No hidden fees. No calling three departments to find out if your insurance covers it. Piedmont Nutrition Care believes pricing transparency is a basic right — and that understanding your investment upfront is the first step toward trusting the process.
            </p>
          </div>
        </div>
      </section>

      {/* INSURANCE COVERAGE */}
      <section className="section-padding bg-cream">
        <div className="container-narrow">
          <AnimateOnScroll>
            <p className="text-xs uppercase tracking-[0.2em] text-warm-400 font-medium mb-4">Coverage</p>
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] text-warm-950 mb-10 tracking-tight leading-[1.1]">
              Your insurance likely covers Medical Nutrition Therapy
            </h2>
            <p className="text-base md:text-lg text-warm-600 leading-relaxed mb-16 max-w-2xl">
              Medical Nutrition Therapy (MNT) is a recognized clinical treatment, not a wellness luxury. Most major insurance plans cover MNT for qualifying conditions including diabetes, high cholesterol, cardiovascular disease, IBS, and obesity-related diagnoses.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll>
            <h3 className="font-heading text-xl text-warm-900 mb-6">Accepted Insurance</h3>
          </AnimateOnScroll>
          <div className="grid sm:grid-cols-3 gap-6 mb-16 stagger-children">
            {["Blue Cross Blue Shield (BCBS)", "Aetna", "Medicare"].map((carrier) => (
              <AnimateOnScroll key={carrier}>
                <div className="bg-white rounded-2xl p-8 text-center border border-warm-100/50 hover:shadow-card transition-shadow duration-300">
                  <ShieldCheckIcon className="w-8 h-8 text-green-500 mx-auto mb-4" />
                  <span className="text-warm-800 font-semibold">{carrier}</span>
                </div>
              </AnimateOnScroll>
            ))}
          </div>

          <AnimateOnScroll>
            <h3 className="font-heading text-xl text-warm-900 mb-6">How to Verify Your Coverage</h3>
          </AnimateOnScroll>
          <div className="space-y-4 stagger-children">
            {[
              { step: "01", text: "Call the number on the back of your insurance card or contact our office directly." },
              { step: "02", text: "Piedmont Nutrition Care will confirm your specific benefit level before your first appointment." },
              { step: "03", text: "You'll know your exact out-of-pocket cost before you walk in the door." },
            ].map((item) => (
              <AnimateOnScroll key={item.step}>
                <div className="flex items-start gap-5 bg-white rounded-2xl p-6 border border-warm-100/50 hover:shadow-card transition-shadow duration-300">
                  <span className="text-warm-200 font-heading font-bold text-xl flex-shrink-0">{item.step}</span>
                  <p className="text-warm-600 leading-relaxed">{item.text}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* SELF-PAY */}
      <section className="section-padding bg-warm-50">
        <div className="container-narrow">
          <AnimateOnScroll>
            <p className="text-xs uppercase tracking-[0.2em] text-warm-400 font-medium mb-4">Self-Pay</p>
            <h2 className="font-heading text-3xl md:text-4xl text-warm-950 mb-10 tracking-tight leading-[1.1]">Self-Pay Options</h2>
            <div className="bg-white rounded-2xl p-8 md:p-10 shadow-card border border-warm-100/50">
              <div className="space-y-4">
                <div className="flex justify-between items-center py-4 border-b border-warm-100">
                  <span className="text-warm-700 font-medium">Initial Assessment (60 minutes)</span>
                  <span className="text-green-700 font-semibold bg-green-50 px-3 py-1 rounded-full text-sm">Contact for pricing</span>
                </div>
                <div className="flex justify-between items-center py-4 border-b border-warm-100">
                  <span className="text-warm-700 font-medium">Follow-Up Session (60 minutes)</span>
                  <span className="text-green-700 font-semibold bg-green-50 px-3 py-1 rounded-full text-sm">Contact for pricing</span>
                </div>
              </div>
              <p className="text-warm-500 text-sm mt-8">
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
            <p className="text-xs uppercase tracking-[0.2em] text-warm-400 font-medium mb-4 text-center">Perspective</p>
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] text-warm-950 mb-12 text-center tracking-tight leading-[1.1]">
              Compare the real cost
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll>
            <div className="bg-warm-50 rounded-2xl p-8 md:p-10 border border-warm-200/50">
              <p className="text-base md:text-lg leading-relaxed text-warm-600 max-w-2xl">
                A single month of GLP-1 medication costs $800–$1,500 out of pocket — and the weight returns when you stop. A year of calorie-counting app subscriptions, supplements, and 30-day challenges adds up to hundreds of dollars that bought you no lasting results. A session with a credentialed clinical dietitian who identifies the root cause and builds a permanent protocol? That&apos;s the investment that actually resolves the problem.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* OBJECTIONS */}
      <section className="section-padding bg-warm-50">
        <div className="container-narrow">
          <div className="space-y-6 stagger-children">
            <AnimateOnScroll>
              <div className="bg-white rounded-2xl p-8 md:p-10 shadow-card border border-warm-100/50 hover:shadow-lifted transition-shadow duration-300">
                <h3 className="font-heading text-lg md:text-xl text-warm-900 mb-4">&ldquo;I&apos;m on a high-deductible plan&rdquo;</h3>
                <p className="text-warm-600 leading-relaxed max-w-2xl">
                  Even with a high-deductible plan, MNT sessions count toward your deductible and are often available at negotiated in-network rates. Piedmont Nutrition Care will verify your specific benefit level before your first session so there are no financial surprises. Compare this to what you&apos;ve already spent on supplements, apps, programs, and co-pays for approaches that didn&apos;t address the root cause.
                </p>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll>
              <div className="bg-white rounded-2xl p-8 md:p-10 shadow-card border border-warm-100/50 hover:shadow-lifted transition-shadow duration-300">
                <h3 className="font-heading text-lg md:text-xl text-warm-900 mb-4">&ldquo;I don&apos;t know if my condition qualifies&rdquo;</h3>
                <p className="text-warm-600 leading-relaxed max-w-2xl">
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
