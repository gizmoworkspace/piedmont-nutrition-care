"use client";

interface ProofBarProps {
  items: { text: string }[];
}

export default function ProofBar({ items }: ProofBarProps) {
  return (
    <section className="py-4 sm:py-6 px-5 sm:px-8 border-b border-warm-100/60">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-wrap justify-center items-center gap-x-2 sm:gap-x-3 gap-y-1 text-xs sm:text-sm font-body text-warm-400">
          {items.map((item, i) => (
            <span key={i} className="flex items-center gap-1.5">
              {i > 0 && (
                <span className="text-warm-300 mx-0.5 sm:mx-1 hidden sm:inline" aria-hidden="true">·</span>
              )}
              <span>{item.text}</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
