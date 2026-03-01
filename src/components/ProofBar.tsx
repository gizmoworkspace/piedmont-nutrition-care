"use client";

interface ProofBarProps {
  items: { icon?: string; text: string }[];
  floating?: boolean;
}

export default function ProofBar({ items }: ProofBarProps) {
  return (
    <section className="py-6 md:py-8 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-wrap justify-center items-center gap-x-3 gap-y-2 text-sm font-body text-warm-400">
          {items.map((item, i) => (
            <span key={i} className="flex items-center gap-1.5">
              {i > 0 && (
                <span className="text-warm-300 mx-1" aria-hidden="true">·</span>
              )}
              <span>{item.text}</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
