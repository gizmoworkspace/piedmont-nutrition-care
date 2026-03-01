"use client";

import { useState } from "react";
import { ChevronDownIcon } from "./Icons";

interface AccordionItemProps {
  question: string;
  answer: string;
}

function AccordionItem({ question, answer }: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-warm-200/60">
      <button
        className="w-full text-left py-5 px-1 flex items-center justify-between gap-4 group"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span className="font-heading text-lg text-warm-900 group-hover:text-green-600 transition-colors">
          {question}
        </span>
        <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-shadow duration-300 ${isOpen ? "bg-green-100 rotate-180" : "bg-warm-100 group-hover:bg-green-50"}`}>
          <ChevronDownIcon
            className={`w-4 h-4 transition-colors duration-200 ${isOpen ? "text-green-600" : "text-warm-400"}`}
          />
        </div>
      </button>
      <div className={`accordion-content ${isOpen ? "is-open" : ""}`}>
        <div>
          <p className="text-warm-600 leading-relaxed px-1 pb-5">{answer}</p>
        </div>
      </div>
    </div>
  );
}

interface AccordionProps {
  items: { question: string; answer: string }[];
}

export default function Accordion({ items }: AccordionProps) {
  return (
    <div>
      {items.map((item, i) => (
        <AccordionItem key={i} question={item.question} answer={item.answer} />
      ))}
    </div>
  );
}
