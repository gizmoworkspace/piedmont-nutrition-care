"use client";

import { useState } from "react";

interface AccordionItemProps {
  question: string;
  answer: string;
}

function AccordionItem({ question, answer }: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-sage-200">
      <button
        className="w-full text-left py-5 px-1 flex items-center justify-between gap-4 group"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-heading text-lg text-sage-800 group-hover:text-sage-600 transition-colors">
          {question}
        </span>
        <span
          className={`text-sage-500 text-2xl transition-transform duration-300 flex-shrink-0 ${
            isOpen ? "rotate-45" : ""
          }`}
        >
          +
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-[1000px] pb-5" : "max-h-0"
        }`}
      >
        <p className="text-gray-600 leading-relaxed px-1">{answer}</p>
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
