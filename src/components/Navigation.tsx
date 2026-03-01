"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Jeanne" },
    { href: "/services", label: "How It Works" },
    { href: "/conditions", label: "Conditions" },
    { href: "/insurance", label: "Insurance & Pricing" },
    { href: "/faq", label: "FAQ" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-warm-50/95 backdrop-blur-sm border-b border-warm-200 font-sans">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="font-heading text-xl md:text-2xl text-sage-800 font-bold">
          Piedmont Nutrition Care
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-6">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-sage-800 hover:text-sage-600 transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link href="/contact" className="btn-primary !py-2.5 !px-6 !text-sm">
            Book Now
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden text-sage-800 p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-warm-50 border-t border-warm-200 px-6 py-4 space-y-3">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block text-sage-800 hover:text-sage-600 py-2"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="block btn-primary text-center !py-3 mt-2"
            onClick={() => setIsOpen(false)}
          >
            Book Now
          </Link>
        </div>
      )}
    </nav>
  );
}
