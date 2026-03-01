import Link from "next/link";
import { StarIcon } from "./Icons";

export default function Footer() {
  return (
    <footer className="bg-warm-950 text-warm-300 pb-24 md:pb-0">
      <div className="border-t border-warm-800" />
      <div className="max-w-6xl mx-auto px-6 md:px-8 py-16">
        {/* Mini CTA */}
        <div className="text-center mb-12 pb-12 border-b border-warm-800">
          <h3 className="font-heading text-2xl md:text-3xl text-white mb-4">
            Ready to feel better?
          </h3>
          <p className="text-warm-400 mb-8 max-w-xl mx-auto leading-relaxed">
            Book your Gut &amp; Metabolic Foundation Assessment and take the first step toward understanding what your body has been trying to tell you.
          </p>
          <Link href="/contact" className="inline-block bg-green-500 hover:bg-green-600 text-white font-medium py-3.5 px-8 rounded-[8px] transition-colors shadow-soft">
            Book Your Assessment
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <h4 className="font-heading text-lg text-white mb-4">Piedmont Nutrition Care</h4>
            <p className="text-warm-400 text-sm leading-relaxed">
              Jeanne Doherty, MS, RD, LDN<br />
              2990 Bethesda Place, Suite 603C<br />
              Winston-Salem, NC 27104
            </p>
            <div className="mt-4 space-y-1">
              <p>
                <a href="tel:3369865388" className="text-warm-300 hover:text-white transition-colors text-sm">
                  336-986-5388
                </a>
              </p>
              <p>
                <a href="mailto:jeanne@piedmontnutritioncare.com" className="text-warm-300 hover:text-white transition-colors text-sm">
                  jeanne@piedmontnutritioncare.com
                </a>
              </p>
            </div>
          </div>

          <div>
            <h4 className="font-heading text-lg text-white mb-4">Quick Links</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/about" className="text-warm-400 hover:text-white transition-colors">About Jeanne</Link></li>
              <li><Link href="/services" className="text-warm-400 hover:text-white transition-colors">How It Works</Link></li>
              <li><Link href="/conditions" className="text-warm-400 hover:text-white transition-colors">Conditions We Treat</Link></li>
              <li><Link href="/insurance" className="text-warm-400 hover:text-white transition-colors">Insurance &amp; Pricing</Link></li>
              <li><Link href="/faq" className="text-warm-400 hover:text-white transition-colors">FAQ</Link></li>
              <li><Link href="/contact" className="text-warm-400 hover:text-white transition-colors">Book Your Assessment</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-lg text-white mb-4">Insurance Accepted</h4>
            <ul className="space-y-2.5 text-sm text-warm-400">
              <li>Blue Cross Blue Shield (BCBS)</li>
              <li>Aetna</li>
              <li>Medicare</li>
            </ul>
            <div className="mt-5 flex items-center gap-2">
              <div className="flex items-center gap-1.5 bg-warm-900 rounded-[8px] px-3 py-2 text-sm">
                <StarIcon className="w-4 h-4 text-amber-400" />
                <span className="text-warm-200">5.0 Google Rating</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-warm-800 text-center text-warm-600 text-xs">
          <p>&copy; {new Date().getFullYear()} Piedmont Nutrition Care. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
