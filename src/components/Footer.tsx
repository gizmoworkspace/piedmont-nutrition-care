import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-sage-800 text-sage-100 pb-24 md:pb-0">
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-16">
        {/* Mini CTA */}
        <div className="text-center mb-12 pb-12 border-b border-sage-700">
          <h3 className="font-heading text-2xl md:text-3xl text-white mb-4">
            Ready to feel better?
          </h3>
          <p className="text-sage-200 mb-6 max-w-xl mx-auto">
            Book your Gut &amp; Metabolic Foundation Assessment and take the first step toward understanding what your body has been trying to tell you.
          </p>
          <Link href="/contact" className="inline-block bg-white text-sage-800 hover:bg-sage-50 font-semibold py-3 px-8 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg">
            Book Your Assessment
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h4 className="font-heading text-lg text-white mb-3">Piedmont Nutrition Care</h4>
            <p className="text-sage-300 text-sm leading-relaxed">
              Jeanne Doherty, MS, RD, LDN<br />
              2990 Bethesda Place, Suite 603C<br />
              Winston-Salem, NC 27104
            </p>
            <p className="mt-3">
              <a href="tel:3369865388" className="text-sage-200 hover:text-white transition-colors text-sm">
                336-986-5388
              </a>
            </p>
            <p>
              <a href="mailto:jeanne@piedmontnutritioncare.com" className="text-sage-200 hover:text-white transition-colors text-sm">
                jeanne@piedmontnutritioncare.com
              </a>
            </p>
          </div>

          <div>
            <h4 className="font-heading text-lg text-white mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="text-sage-300 hover:text-white transition-colors">About Jeanne</Link></li>
              <li><Link href="/services" className="text-sage-300 hover:text-white transition-colors">How It Works</Link></li>
              <li><Link href="/conditions" className="text-sage-300 hover:text-white transition-colors">Conditions We Treat</Link></li>
              <li><Link href="/insurance" className="text-sage-300 hover:text-white transition-colors">Insurance &amp; Pricing</Link></li>
              <li><Link href="/faq" className="text-sage-300 hover:text-white transition-colors">FAQ</Link></li>
              <li><Link href="/contact" className="text-sage-300 hover:text-white transition-colors">Book Your Assessment</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-lg text-white mb-3">Insurance Accepted</h4>
            <ul className="space-y-2 text-sm text-sage-300">
              <li>Blue Cross Blue Shield (BCBS)</li>
              <li>Aetna</li>
              <li>Medicare</li>
            </ul>
            <div className="mt-4 flex items-center gap-2">
              <div className="bg-sage-700 rounded-lg px-3 py-1.5 text-sm">
                <span className="text-yellow-400">★★★★★</span>
                <span className="text-sage-200 ml-1">5.0 Google Rating</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-sage-700 text-center text-sage-400 text-xs">
          <p>&copy; {new Date().getFullYear()} Piedmont Nutrition Care. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
