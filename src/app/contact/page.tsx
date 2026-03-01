import type { Metadata } from "next";
import Link from "next/link";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { CalendarIcon, PhoneIcon, EnvelopeIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Contact & Book Your Assessment | Piedmont Nutrition Care",
  description: "Book your 60-minute Gut & Metabolic Foundation Assessment with Jeanne Doherty, MS, RD, LDN in Winston-Salem, NC. Call 336-986-5388.",
};

export default function Contact() {
  return (
    <>
      {/* HERO */}
      <section className="relative bg-gradient-hero overflow-hidden min-h-[50vh] flex items-center">
        <div className="absolute inset-0 bg-black/15" />
        <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20 py-28 md:py-36 lg:py-44 w-full relative z-10">
          <div className="max-w-3xl">
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white leading-[1.1] mb-8 animate-fade-in-up tracking-tight">
              Your next step: 60 minutes that change how you understand your body.
            </h1>
            <p className="text-lg text-green-100/70 leading-relaxed max-w-2xl animate-fade-in-up-delay-1">
              Book your Gut &amp; Metabolic Foundation Assessment with Jeanne Doherty, MS, RD, LDN. Your first session is a comprehensive 60-minute evaluation of your health history, current symptoms, lab work, and goals — so you leave with a clear understanding of what&apos;s been driving your symptoms and a concrete plan to address it.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1200 60" preserveAspectRatio="none" className="block w-full h-[30px] md:h-[50px]">
            <path d="M0,60 C300,20 900,20 1200,60 L1200,60 L0,60 Z" fill="#FDFBF7" />
          </svg>
        </div>
      </section>

      {/* BOOKING OPTIONS */}
      <section className="section-padding bg-cream">
        <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid md:grid-cols-3 gap-8 md:gap-12 stagger-children">
            {/* Book Online */}
            <AnimateOnScroll>
              <div className="bg-white rounded-2xl p-8 md:p-10 shadow-card text-center border border-warm-100/50 hover:shadow-lifted transition-all duration-300 hover:-translate-y-[2px] h-full flex flex-col">
                <div className="w-14 h-14 rounded-2xl bg-green-50 flex items-center justify-center mx-auto mb-6">
                  <CalendarIcon className="w-7 h-7 text-green-600" />
                </div>
                <h2 className="font-heading text-lg md:text-xl text-warm-900 mb-3">Book Online</h2>
                <p className="text-warm-600 mb-8 text-sm leading-relaxed flex-grow">
                  Select a time that works for you. In-person or virtual appointments available.
                </p>
                <a href="tel:3369865388" className="btn-primary block">
                  Call to Schedule
                </a>
                <p className="text-warm-400 text-xs mt-3">Online booking coming soon</p>
              </div>
            </AnimateOnScroll>

            {/* Call */}
            <AnimateOnScroll>
              <div className="bg-white rounded-2xl p-8 md:p-10 shadow-card text-center border border-warm-100/50 hover:shadow-lifted transition-all duration-300 hover:-translate-y-[2px] h-full flex flex-col">
                <div className="w-14 h-14 rounded-2xl bg-green-50 flex items-center justify-center mx-auto mb-6">
                  <PhoneIcon className="w-7 h-7 text-green-600" />
                </div>
                <h2 className="font-heading text-lg md:text-xl text-warm-900 mb-3">Call</h2>
                <a
                  href="tel:3369865388"
                  className="text-2xl font-heading text-green-700 hover:text-green-600 transition-colors block mb-6"
                >
                  336-986-5388
                </a>
                <p className="text-warm-600 text-sm leading-relaxed flex-grow">
                  Prefer to talk first? Call during office hours and we&apos;ll walk you through what to expect, verify your insurance, and find a time that works.
                </p>
              </div>
            </AnimateOnScroll>

            {/* Email */}
            <AnimateOnScroll>
              <div className="bg-white rounded-2xl p-8 md:p-10 shadow-card text-center border border-warm-100/50 hover:shadow-lifted transition-all duration-300 hover:-translate-y-[2px] h-full flex flex-col">
                <div className="w-14 h-14 rounded-2xl bg-green-50 flex items-center justify-center mx-auto mb-6">
                  <EnvelopeIcon className="w-7 h-7 text-green-600" />
                </div>
                <h2 className="font-heading text-lg md:text-xl text-warm-900 mb-3">Email</h2>
                <a
                  href="mailto:jeanne@piedmontnutritioncare.com"
                  className="text-green-600 hover:text-green-700 font-semibold transition-colors block mb-6 text-sm"
                >
                  jeanne@piedmontnutritioncare.com
                </a>
                <p className="text-warm-600 text-sm leading-relaxed flex-grow">
                  Have questions before booking? Send an email and we&apos;ll respond within one business day.
                </p>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* WHAT TO EXPECT */}
      <section className="section-padding bg-warm-50">
        <div className="container-narrow">
          <AnimateOnScroll>
            <p className="text-xs uppercase tracking-[0.2em] text-warm-400 font-medium mb-4 text-center">Your Visit</p>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-warm-950 mb-12 text-center tracking-tight leading-[1.1]">What to Expect</h2>
          </AnimateOnScroll>
          <div className="space-y-5 stagger-children">
            {[
              {
                step: "01",
                label: "Before your appointment",
                text: "You'll receive intake forms to complete at your own pace, including health history and current medications.",
              },
              {
                step: "02",
                label: "At your appointment",
                text: "60 minutes, one-on-one with Jeanne. Bring your recent lab work, insurance card, and any questions.",
              },
              {
                step: "03",
                label: "After your appointment",
                text: "You'll leave with a clear assessment, initial recommendations, and a plan for next steps.",
              },
            ].map((item) => (
              <AnimateOnScroll key={item.step}>
                <div className="flex items-start gap-5 bg-white rounded-2xl p-6 md:p-8 border border-warm-100/50 hover:shadow-card transition-all duration-300">
                  <span className="text-warm-200 font-heading font-bold text-xl flex-shrink-0">{item.step}</span>
                  <div>
                    <h3 className="font-semibold text-warm-900 mb-1 text-sm">{item.label}</h3>
                    <p className="text-warm-600 text-sm leading-relaxed">{item.text}</p>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* LOCATION + MAP */}
      <section className="section-padding bg-cream">
        <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start">
            <AnimateOnScroll animation="fade-left">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-warm-400 font-medium mb-4">Location</p>
                <h2 className="font-heading text-3xl md:text-4xl text-warm-950 mb-6 tracking-tight leading-[1.1]">Our Office</h2>
                <address className="not-italic text-warm-600 text-lg leading-relaxed mb-8">
                  2990 Bethesda Place, Suite 603C<br />
                  Winston-Salem, NC 27104
                </address>
                <p className="text-warm-500 text-sm mb-8">
                  Located in the Bethesda Place professional building. Free parking available.
                </p>
                <div className="space-y-4">
                  <p>
                    <a href="tel:3369865388" className="inline-flex items-center gap-2 text-warm-700 hover:text-green-600 transition-colors">
                      <PhoneIcon className="w-4 h-4 text-green-500" />
                      <span className="font-semibold">336-986-5388</span>
                    </a>
                  </p>
                  <p>
                    <a href="mailto:jeanne@piedmontnutritioncare.com" className="inline-flex items-center gap-2 text-warm-700 hover:text-green-600 transition-colors">
                      <EnvelopeIcon className="w-4 h-4 text-green-500" />
                      <span>jeanne@piedmontnutritioncare.com</span>
                    </a>
                  </p>
                </div>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fade-right">
              <div className="rounded-2xl overflow-hidden shadow-deep aspect-video">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3220.5!2d-80.3!3d36.1!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s2990+Bethesda+Place+Winston-Salem+NC+27104!5e0!3m2!1sen!2sus!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Piedmont Nutrition Care location"
                />
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* INSURANCE QUICK CHECK */}
      <section className="py-20 bg-warm-50">
        <div className="container-narrow text-center">
          <AnimateOnScroll>
            <h2 className="font-heading text-xl md:text-2xl text-warm-900 mb-6 tracking-tight">Not sure if your insurance covers it?</h2>
            <p className="text-warm-600 mb-6 max-w-2xl mx-auto">
              Call{" "}
              <a href="tel:3369865388" className="text-green-600 font-semibold hover:underline">336-986-5388</a>{" "}
              or visit our{" "}
              <Link href="/insurance" className="text-green-600 font-semibold hover:underline">Insurance &amp; Pricing page</Link>{" "}
              to verify your coverage before booking.
            </p>
            <p className="text-warm-400 text-sm">
              BCBS, Aetna &amp; Medicare accepted  ·  60-minute sessions  ·  Same practitioner every visit  ·  In-person or virtual
            </p>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
