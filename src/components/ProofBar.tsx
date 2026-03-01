interface ProofBarProps {
  items: string[];
}

export default function ProofBar({ items }: ProofBarProps) {
  return (
    <section className="bg-sage-700 text-white py-4">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2 text-sm font-sans font-medium">
          {items.map((item, i) => (
            <span key={i} className="flex items-center gap-2">
              {i > 0 && <span className="hidden sm:inline text-sage-400">·</span>}
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
