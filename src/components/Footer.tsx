import Link from "next/link";
import Image from "next/image";
import { getGlobal } from "@/lib/content";

export default function Footer() {
  const global = getGlobal();
  const phoneClean = global.phone.replace(/-/g, "");

  return (
    <footer className="bg-gradient-dark text-warm-300 pb-24 md:pb-0">
      <div className="border-t border-warm-800" />
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20 py-20 md:py-28">
        {/* Mini CTA */}
        <div className="text-center mb-16 pb-16 border-b border-warm-800">
          <h3 className="font-heading text-2xl md:text-3xl text-white mb-6">
            Ready to feel better?
          </h3>
          <p className="text-warm-400 mb-10 max-w-xl mx-auto leading-relaxed">
            Book your Gut &amp; Metabolic Foundation Assessment and take the first step toward understanding what your body has been trying to tell you.
          </p>
          <Link href={global.bookingUrl} className="inline-block bg-green-500 hover:bg-green-600 text-white font-medium py-3.5 px-8 rounded-[8px] transition-all duration-300 hover:scale-[1.02]">
            Book Your Assessment
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
          <div>
            <Image
              src="/logo.png"
              alt="Piedmont Nutrition Care"
              width={140}
              height={42}
              className="h-9 w-auto object-contain mb-5 brightness-0 invert opacity-70"
            />
            <p className="text-warm-500 text-sm leading-relaxed mb-4">
              {global.practitionerName}, {global.credentials}<br />
              {global.address.street}<br />
              {global.address.city}, {global.address.state} {global.address.zip}
            </p>
            <div className="space-y-2">
              <p>
                <a href={`tel:${phoneClean}`} className="text-warm-400 hover:text-white transition-colors text-sm">
                  {global.phone}
                </a>
              </p>
              <p>
                <a href={`mailto:${global.email}`} className="text-warm-400 hover:text-white transition-colors text-sm">
                  {global.email}
                </a>
              </p>
            </div>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-warm-500 font-medium mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/about" className="text-warm-400 hover:text-white transition-colors">About Jeanne</Link></li>
              <li><Link href="/services" className="text-warm-400 hover:text-white transition-colors">How It Works</Link></li>
              <li><Link href="/conditions" className="text-warm-400 hover:text-white transition-colors">Conditions We Treat</Link></li>
              <li><Link href="/insurance" className="text-warm-400 hover:text-white transition-colors">Insurance &amp; Pricing</Link></li>
              <li><Link href="/faq" className="text-warm-400 hover:text-white transition-colors">FAQ</Link></li>
              <li><Link href="/contact" className="text-warm-400 hover:text-white transition-colors">Book Your Assessment</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-warm-500 font-medium mb-6">Insurance Accepted</h4>
            <ul className="space-y-3 text-sm text-warm-400">
              {global.insuranceCarriers.map((carrier) => (
                <li key={carrier}>{carrier}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-warm-800 text-center text-warm-600 text-xs">
          <p>&copy; {new Date().getFullYear()} {global.siteName}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
