"use client";

import { useState } from "react";
import { ChevronDownIcon } from "./Icons";

function Accordion({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-warm-200">
      <button
        className="w-full text-left py-5 flex justify-between items-start gap-4"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span className="font-heading text-lg text-warm-900">{question}</span>
        <ChevronDownIcon
          className={`w-5 h-5 shrink-0 text-warm-400 transition-transform duration-200 mt-1 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-[800px] pb-5" : "max-h-0"}`}
      >
        <p className="text-warm-600 leading-relaxed">{answer}</p>
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
          <h2 className="font-heading text-xl md:text-2xl text-warm-900 mb-4 pb-2 border-b-2 border-green-200">
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
