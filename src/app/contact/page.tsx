import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact & Book Your Assessment | Piedmont Nutrition Care",
  description: "Book your 60-minute Gut & Metabolic Foundation Assessment with Jeanne Doherty, MS, RD, LDN in Winston-Salem, NC. Call 336-986-5388.",
};

export default function Contact() {
  return (
    <>
      {/* HERO */}
      <section className="section-padding bg-gradient-to-br from-sage-50 via-warm-50 to-cream">
        <div className="container-wide">
          <div className="max-w-3xl">
            <h1 className="font-heading text-4xl md:text-5xl text-sage-900 leading-tight mb-6">
              Your next step: 60 minutes that change how you understand your body.
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Book your Gut &amp; Metabolic Foundation Assessment with Jeanne Doherty, MS, RD, LDN. Your first session is a comprehensive 60-minute evaluation of your health history, current symptoms, lab work, and goals — so you leave with a clear understanding of what&apos;s been driving your symptoms and a concrete plan to address it.
            </p>
          </div>
        </div>
      </section>

      {/* BOOKING OPTIONS */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Book Online */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-sage-100 text-center">
              <div className="w-16 h-16 rounded-full bg-sage-100 flex items-center justify-center text-3xl mx-auto mb-4">📅</div>
              <h2 className="font-heading text-xl text-sage-800 mb-3">Book Online</h2>
              <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                Select a time that works for you. In-person or virtual appointments available.
              </p>
              <a
                href="tel:3369865388"
                className="btn-primary block"
              >
                Call to Schedule
              </a>
              <p className="text-gray-400 text-xs mt-3">Online booking coming soon</p>
            </div>

            {/* Call */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-sage-100 text-center">
              <div className="w-16 h-16 rounded-full bg-sage-100 flex items-center justify-center text-3xl mx-auto mb-4">📞</div>
              <h2 className="font-heading text-xl text-sage-800 mb-3">Call</h2>
              <a
                href="tel:3369865388"
                className="text-3xl font-heading text-sage-700 hover:text-sage-600 transition-colors block mb-4"
              >
                336-986-5388
              </a>
              <p className="text-gray-600 text-sm leading-relaxed">
                Prefer to talk first? Call during office hours and we&apos;ll walk you through what to expect, verify your insurance, and find a time that works.
              </p>
            </div>

            {/* Email */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-sage-100 text-center">
              <div className="w-16 h-16 rounded-full bg-sage-100 flex items-center justify-center text-3xl mx-auto mb-4">✉️</div>
              <h2 className="font-heading text-xl text-sage-800 mb-3">Email</h2>
              <a
                href="mailto:jeanne@piedmontnutritioncare.com"
                className="text-sage-700 hover:text-sage-600 font-semibold transition-colors block mb-4"
              >
                jeanne@piedmontnutritioncare.com
              </a>
              <p className="text-gray-600 text-sm leading-relaxed">
                Have questions before booking? Send an email and we&apos;ll respond within one business day.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT TO EXPECT */}
      <section className="section-padding bg-warm-50">
        <div className="container-narrow">
          <h2 className="font-heading text-3xl text-sage-800 mb-8 text-center">What to Expect</h2>
          <div className="space-y-6">
            {[
              {
                label: "Before your appointment",
                text: "You'll receive intake forms to complete at your own pace, including health history and current medications.",
              },
              {
                label: "At your appointment",
                text: "60 minutes, one-on-one with Jeanne. Bring your recent lab work, insurance card, and any questions.",
              },
              {
                label: "After your appointment",
                text: "You'll leave with a clear assessment, initial recommendations, and a plan for next steps.",
              },
            ].map((item) => (
              <div key={item.label} className="flex items-start gap-4 bg-white rounded-xl p-6 shadow-sm border border-sage-100">
                <div className="w-3 h-3 rounded-full bg-sage-500 mt-1.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-sage-800 mb-1">{item.label}</h3>
                  <p className="text-gray-600">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LOCATION + MAP */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div>
              <h2 className="font-heading text-3xl text-sage-800 mb-4">Our Location</h2>
              <address className="not-italic text-gray-600 text-lg leading-relaxed mb-6">
                2990 Bethesda Place, Suite 603C<br />
                Winston-Salem, NC 27104
              </address>
              <p className="text-gray-500 text-sm mb-4">
                Located in the Bethesda Place professional building. Free parking available.
              </p>
              <div className="space-y-2">
                <p>
                  <a href="tel:3369865388" className="text-sage-700 font-semibold hover:underline text-lg">
                    📞 336-986-5388
                  </a>
                </p>
                <p>
                  <a href="mailto:jeanne@piedmontnutritioncare.com" className="text-sage-700 hover:underline">
                    ✉️ jeanne@piedmontnutritioncare.com
                  </a>
                </p>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-md border border-sage-100 aspect-video">
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
          </div>
        </div>
      </section>

      {/* INSURANCE QUICK CHECK */}
      <section className="section-padding bg-sage-50">
        <div className="container-narrow text-center">
          <h2 className="font-heading text-2xl text-sage-800 mb-4">Not sure if your insurance covers it?</h2>
          <p className="text-gray-600 mb-6">
            Call{" "}
            <a href="tel:3369865388" className="text-sage-700 font-semibold hover:underline">336-986-5388</a>{" "}
            or visit our{" "}
            <Link href="/insurance" className="text-sage-700 font-semibold hover:underline">Insurance &amp; Pricing page</Link>{" "}
            to verify your coverage before booking.
          </p>
          <p className="text-sage-600 text-sm">
            BCBS, Aetna &amp; Medicare accepted · 60-minute sessions · Same practitioner every visit · In-person or virtual
          </p>
        </div>
      </section>
    </>
  );
}
