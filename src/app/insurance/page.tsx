import type { Metadata } from "next";
import Link from "next/link";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { CheckIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Pricing | Piedmont Nutrition Care",
  description: "Transparent pricing for Medical Nutrition Therapy. No insurance hassles — straightforward cash-pay with superbills for out-of-network reimbursement. HSA/FSA accepted.",
};

export default function Insurance() {
  return (
    <>
      {/* HERO */}
      <section className="relative section-padding bg-gradient-to-br from-green-950 via-green-900 to-green-800 overflow-hidden grain-overlay">
        <div className="absolute inset-0 bg-dot-pattern bg-dot opacity-[0.03]" />
        <div className="container-narrow relative z-10">
          <div className="text-center mx-auto">
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl text-white leading-tight mb-6 animate-fade-in-up drop-shadow-lg">
              You deserve to know what this costs before you commit.
            </h1>
            <p className="text-lg text-green-100/90 leading-relaxed animate-fade-in-up-delay-1">
              No surprises. No hidden fees. No calling three departments to figure out what you owe. Straightforward pricing, payment at the time of service, and superbills provided for out-of-network reimbursement.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1200 60" preserveAspectRatio="none" className="block w-full h-[30px] md:h-[50px]">
            <path d="M0,60 C300,20 900,20 1200,60 L1200,60 L0,60 Z" fill="#FDFBF7" />
          </svg>
        </div>
      </section>

      {/* INDIVIDUAL SERVICES */}
      <section className="section-padding bg-cream">
        <div className="max-w-7xl mx-auto">
          <AnimateOnScroll>
            <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl text-warm-950 mb-4 text-center">
              Individual Services
            </h2>
            <p className="text-warm-500 text-center mb-12 text-lg max-w-2xl mx-auto">Payment is due at the time of service.</p>
          </AnimateOnScroll>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-8">
            {[
              { service: "Comprehensive Nutrition Assessment", detail: "Anthropometric measurements, lab work review, nutrition diagnosis & personalized intervention", duration: "60 minutes", price: "$150" },
              { service: "Standard Follow-Up", detail: "Ongoing support and progress evaluation", duration: "45 minutes", price: "$100" },
              { service: "Intensive Support Package", detail: "4 follow-up sessions for accelerated progress", duration: "4 × 45 minutes", price: "$350" },
            ].map((item) => (
              <AnimateOnScroll key={item.service}>
                <div className="bg-white rounded-2xl p-8 text-center border border-warm-100/50 h-full flex flex-col">
                  <h3 className="font-heading text-lg text-warm-900 mb-2">{item.service}</h3>
                  <p className="text-warm-500 text-sm mb-4 flex-grow">{item.detail}</p>
                  <p className="text-warm-400 text-xs mb-4">{item.duration}</p>
                  <p className="font-heading text-3xl text-green-600">{item.price}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* WELLNESS & GROUP PACKAGES */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <AnimateOnScroll>
            <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl text-warm-950 mb-12 text-center">
              Wellness &amp; Group Packages
            </h2>
          </AnimateOnScroll>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              { service: "3-Month Wellness Plan", detail: "Nutrition assessment, 4 follow-ups, and email support", price: "$500" },
              { service: "Group Nutrition Class", detail: "Up to 10 people per class", duration: "1 hour", price: "$325/class" },
              { service: "Culinary Medicine Class", detail: "Hands-on food science education", duration: "1–3 hours", price: "$350–$600/class" },
              { service: "Grocery Store Tour", detail: "Learn to shop smarter, in person", duration: "1–3 hours", price: "$100/hour" },
            ].map((item) => (
              <AnimateOnScroll key={item.service}>
                <div className="bg-cream rounded-2xl p-8 border border-warm-100/50 h-full flex flex-col">
                  <div className="flex-grow">
                    <h3 className="font-heading text-lg text-warm-900 mb-2">{item.service}</h3>
                    <p className="text-warm-500 text-sm mb-1">{item.detail}</p>
                    {item.duration && <p className="text-warm-400 text-xs mb-4">{item.duration}</p>}
                  </div>
                  <p className="font-heading text-2xl text-green-600 mt-4">{item.price}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* CORPORATE SERVICES */}
      <section className="section-padding bg-cream">
        <div className="max-w-7xl mx-auto">
          <AnimateOnScroll>
            <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl text-warm-950 mb-12 text-center">
              Corporate Services
            </h2>
          </AnimateOnScroll>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <AnimateOnScroll>
              <div className="bg-white rounded-2xl p-8 border border-warm-100/50 h-full flex flex-col">
                <div className="flex-grow">
                  <h3 className="font-heading text-lg text-warm-900 mb-2">On-Site Nutrition Workshop</h3>
                  <p className="text-warm-500 text-sm mb-1">1–2 hour interactive seminar for your team</p>
                </div>
                <p className="font-heading text-2xl text-green-600 mt-4">$525</p>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll>
              <div className="bg-white rounded-2xl p-8 border border-warm-100/50 h-full flex flex-col">
                <div className="flex-grow">
                  <h3 className="font-heading text-lg text-warm-900 mb-2">Wellness Consulting Retainer</h3>
                  <p className="text-warm-500 text-sm mb-1">Monthly support &amp; programming</p>
                </div>
                <p className="font-heading text-2xl text-green-600 mt-4">From $750/mo</p>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* PAYMENT INFO */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-start">
            <div>
              <AnimateOnScroll>
                <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl text-warm-950 mb-6">
                  Payment &amp; Reimbursement
                </h2>
              </AnimateOnScroll>
              <AnimateOnScroll>
                <div className="space-y-4">
                  {[
                    "Payment is due at the time of service",
                    "HSA and FSA cards accepted",
                    "Superbills provided for out-of-network insurance reimbursement",
                    "Many patients successfully submit superbills and receive partial or full reimbursement from their insurer",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <CheckIcon className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <p className="text-warm-600 leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </AnimateOnScroll>
            </div>
            <div className="flex items-center justify-center">
              <AnimateOnScroll>
                <div className="border-l-4 border-green-400 pl-6 py-2">
                  <p className="text-warm-800 font-medium text-lg md:text-xl leading-relaxed">
                    A session with a credentialed clinical dietitian who identifies the root cause and builds a permanent protocol? That&apos;s the investment that actually resolves the problem.
                  </p>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* ROI FRAMING */}
      <section className="section-padding bg-cream">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <AnimateOnScroll>
                <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl text-warm-950 mb-6">
                  Compare the real cost
                </h2>
              </AnimateOnScroll>
              <AnimateOnScroll>
                <p className="text-warm-600 leading-relaxed text-base md:text-lg">
                  A single month of GLP-1 medication costs $800–$1,500 out of pocket — and the weight returns when you stop. A year of calorie-counting app subscriptions, supplements, and 30-day challenges adds up to hundreds of dollars that bought you no lasting results.
                </p>
              </AnimateOnScroll>
            </div>
            <div className="flex items-center">
              <AnimateOnScroll>
                <div className="bg-white rounded-2xl p-8 border border-warm-100/50">
                  <p className="font-heading text-lg text-warm-900 mb-2">Your first assessment</p>
                  <p className="font-heading text-4xl text-green-600 mb-2">$150</p>
                  <p className="text-warm-500 text-sm">60 minutes, one-on-one with Jeanne. A complete nutrition diagnosis and personalized intervention plan.</p>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
