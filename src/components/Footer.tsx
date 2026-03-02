import Link from "next/link";
import { StarIcon } from "./Icons";
import { getGlobal } from "@/lib/content";

export default function Footer() {
  const global = getGlobal();
  const phoneClean = global.phone.replace(/-/g, "");

  return (
    <footer className="bg-gradient-dark text-warm-300 pb-24 md:pb-0">
      <div className="border-t border-warm-800" />
      <div className="max-w-6xl mx-auto px-6 md:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <h4 className="font-heading text-lg text-white mb-4">{global.siteName}</h4>
            <p className="text-warm-400 text-sm leading-relaxed">
              {global.practitionerName}, {global.credentials}<br />
              {global.address.street}<br />
              {global.address.city}, {global.address.state} {global.address.zip}
            </p>
            <div className="mt-4 space-y-1">
              <p>
                <a href={`tel:${phoneClean}`} className="text-warm-300 hover:text-white transition-colors text-sm">
                  {global.phone}
                </a>
              </p>
              <p>
                <a href={`mailto:${global.email}`} className="text-warm-300 hover:text-white transition-colors text-sm">
                  {global.email}
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
              <li><Link href="/insurance" className="text-warm-400 hover:text-white transition-colors">Pricing</Link></li>
              <li><Link href="/faq" className="text-warm-400 hover:text-white transition-colors">FAQ</Link></li>
              <li><Link href="/contact" className="text-warm-400 hover:text-white transition-colors">Book Your Assessment</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-lg text-white mb-4">Payment</h4>
            <ul className="space-y-2.5 text-sm text-warm-400">
              <li>Cash pay — no insurance hassles</li>
              <li>HSA &amp; FSA cards accepted</li>
              <li>Superbills for out-of-network reimbursement</li>
            </ul>
            <div className="mt-5 flex items-center gap-2">
              <div className="flex items-center gap-1.5 bg-warm-900 rounded-[8px] px-3 py-2 text-sm">
                <StarIcon className="w-4 h-4 text-amber-400" />
                <span className="text-warm-200">{global.googleRating} Health Grades Rating</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-warm-800 text-center text-warm-600 text-xs">
          <p>&copy; {new Date().getFullYear()} {global.siteName}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
