import type { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Insurance & Pricing | Piedmont Nutrition Care",
  description: "Transparent pricing and insurance information. BCBS, Aetna, and Medicare accepted. Medical Nutrition Therapy coverage details.",
};

export default function Insurance() {
  return (
    <>
      {/* HERO */}
      <section className="section-padding bg-gradient-to-br from-sage-50 via-warm-50 to-cream">
        <div className="container-wide">
          <div className="max-w-3xl">
            <h1 className="font-heading text-4xl md:text-5xl text-sage-900 leading-tight mb-6">
              You deserve to know what this costs before you commit.
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              No surprises. No hidden fees. No calling three departments to find out if your insurance covers it. Piedmont Nutrition Care believes pricing transparency is a basic right — and that understanding your investment upfront is the first step toward trusting the process.
            </p>
          </div>
        </div>
      </section>

      {/* INSURANCE COVERAGE */}
      <section className="section-padding">
        <div className="container-narrow">
          <h2 className="font-heading text-3xl md:text-4xl text-sage-800 mb-6">
            Your insurance likely covers Medical Nutrition Therapy
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            Medical Nutrition Therapy (MNT) is a recognized clinical treatment, not a wellness luxury. Most major insurance plans cover MNT for qualifying conditions including diabetes, high cholesterol, cardiovascular disease, IBS, and obesity-related diagnoses.
          </p>

          <h3 className="font-heading text-2xl text-sage-800 mb-4">Accepted Insurance</h3>
          <div className="grid sm:grid-cols-3 gap-4 mb-10">
            {["Blue Cross Blue Shield (BCBS)", "Aetna", "Medicare"].map((carrier) => (
              <div key={carrier} className="bg-sage-50 rounded-xl p-6 text-center border border-sage-200">
                <span className="text-sage-800 font-semibold text-lg">{carrier}</span>
              </div>
            ))}
          </div>

          <h3 className="font-heading text-2xl text-sage-800 mb-4">How to Verify Your Coverage</h3>
          <div className="space-y-4">
            {[
              { step: "1", text: "Call the number on the back of your insurance card or contact our office directly." },
              { step: "2", text: "Piedmont Nutrition Care will confirm your specific benefit level before your first appointment." },
              { step: "3", text: "You'll know your exact out-of-pocket cost before you walk in the door." },
            ].map((item) => (
              <div key={item.step} className="flex items-start gap-4 bg-white rounded-xl p-5 shadow-sm border border-sage-100">
                <span className="w-10 h-10 rounded-full bg-sage-600 text-white font-bold flex items-center justify-center flex-shrink-0">
                  {item.step}
                </span>
                <p className="text-gray-600 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SELF-PAY */}
      <section className="section-padding bg-warm-50">
        <div className="container-narrow">
          <h2 className="font-heading text-3xl text-sage-800 mb-6">Self-Pay Options</h2>
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-sage-100">
            <div className="space-y-4">
              <div className="flex justify-between items-center py-3 border-b border-sage-100">
                <span className="text-gray-700 font-medium">Initial Assessment (60 minutes)</span>
                <span className="text-sage-700 font-semibold">Contact for pricing</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-sage-100">
                <span className="text-gray-700 font-medium">Follow-Up Session (60 minutes)</span>
                <span className="text-sage-700 font-semibold">Contact for pricing</span>
              </div>
            </div>
            <p className="text-gray-500 text-sm mt-4">
              Call <a href="tel:3369865388" className="text-sage-700 font-semibold hover:underline">336-986-5388</a> for current self-pay rates. Transparent, upfront pricing — no billing surprises.
            </p>
          </div>
        </div>
      </section>

      {/* ROI FRAMING */}
      <section className="section-padding">
        <div className="container-narrow">
          <h2 className="font-heading text-3xl md:text-4xl text-sage-800 mb-8 text-center">
            Compare the real cost
          </h2>
          <div className="bg-sage-700 text-white rounded-2xl p-8 md:p-10">
            <p className="text-lg leading-relaxed">
              A single month of GLP-1 medication costs $800–$1,500 out of pocket — and the weight returns when you stop. A year of calorie-counting app subscriptions, supplements, and 30-day challenges adds up to hundreds of dollars that bought you no lasting results. A session with a credentialed clinical dietitian who identifies the root cause and builds a permanent protocol? That&apos;s the investment that actually resolves the problem.
            </p>
          </div>
        </div>
      </section>

      {/* OBJECTIONS */}
      <section className="section-padding bg-sage-50">
        <div className="container-narrow">
          <div className="space-y-8">
            <div className="bg-white rounded-xl p-6 md:p-8 shadow-sm border border-sage-100">
              <h3 className="font-heading text-xl text-sage-800 mb-3">&ldquo;I&apos;m on a high-deductible plan&rdquo;</h3>
              <p className="text-gray-600 leading-relaxed">
                Even with a high-deductible plan, MNT sessions count toward your deductible and are often available at negotiated in-network rates. Piedmont Nutrition Care will verify your specific benefit level before your first session so there are no financial surprises. Compare this to what you&apos;ve already spent on supplements, apps, programs, and co-pays for approaches that didn&apos;t address the root cause.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 md:p-8 shadow-sm border border-sage-100">
              <h3 className="font-heading text-xl text-sage-800 mb-3">&ldquo;I don&apos;t know if my condition qualifies&rdquo;</h3>
              <p className="text-gray-600 leading-relaxed">
                If you have a diagnosis of diabetes, pre-diabetes, high cholesterol, IBS, obesity, cardiovascular disease, or an oncology-related nutrition need, you likely qualify for covered Medical Nutrition Therapy. Not sure? Call{" "}
                <a href="tel:3369865388" className="text-sage-700 font-semibold hover:underline">336-986-5388</a>{" "}
                and Jeanne&apos;s office will check for you.
              </p>
            </div>
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
