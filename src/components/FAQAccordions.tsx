"use client";

import { useState } from "react";

function Accordion({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-warm-200">
      <button
        className="w-full text-left py-5 flex justify-between items-start gap-4"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span className="font-heading text-lg text-sage-800">{question}</span>
        <span className={`shrink-0 text-sage-500 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}>
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-[800px] pb-5" : "max-h-0"}`}
      >
        <p className="text-sage-700/80 leading-relaxed">{answer}</p>
      </div>
    </div>
  );
}

interface FAQSection {
  title: string;
  items: { q: string; a: string }[];
}

export default function FAQAccordions({ sections }: { sections: FAQSection[] }) {
  return (
    <>
      {sections.map((section) => (
        <div key={section.title} className="mb-12">
          <h2 className="font-heading text-xl md:text-2xl text-sage-800 mb-4 pb-2 border-b-2 border-sage-200">
            {section.title}
          </h2>
          <div>
            {section.items.map((item) => (
              <Accordion key={item.q} question={item.q} answer={item.a} />
            ))}
          </div>
        </div>
      ))}
    </>
  );
}
