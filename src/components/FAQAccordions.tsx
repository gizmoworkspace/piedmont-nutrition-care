"use client";

import { useState } from "react";
import { ChevronDownIcon } from "./Icons";

function AccordionItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-warm-200/60">
      <button
        className="w-full text-left py-5 flex justify-between items-start gap-4 group"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span className="font-heading text-lg text-warm-900 group-hover:text-green-600 transition-colors">{question}</span>
        <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${isOpen ? "bg-green-100 rotate-180" : "bg-warm-100 group-hover:bg-green-50"}`}>
          <ChevronDownIcon className={`w-4 h-4 transition-colors ${isOpen ? "text-green-600" : "text-warm-400"}`} />
        </div>
      </button>
      <div className={`accordion-content ${isOpen ? "is-open" : ""}`}>
        <div>
          <p className="text-warm-600 leading-relaxed pb-5">{answer}</p>
        </div>
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
          <h2 className="font-heading text-xl md:text-2xl text-warm-900 mb-4 pb-3 border-b-2 border-green-300 inline-block">
            {section.title}
          </h2>
          <div>
            {section.items.map((item) => (
              <AccordionItem key={item.q} question={item.q} answer={item.a} />
            ))}
          </div>
        </div>
      ))}
    </>
  );
}
