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
    <div className="border-b border-warm-200">
      <button
        className="w-full text-left py-5 px-1 flex items-center justify-between gap-4 group"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span className="font-heading text-lg text-warm-900 group-hover:text-green-600 transition-colors">
          {question}
        </span>
        <ChevronDownIcon
          className={`w-5 h-5 text-warm-400 transition-transform duration-200 flex-shrink-0 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-[1000px] pb-5" : "max-h-0"
        }`}
      >
        <p className="text-warm-600 leading-relaxed px-1">{answer}</p>
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
