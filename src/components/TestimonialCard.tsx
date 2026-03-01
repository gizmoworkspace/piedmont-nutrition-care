interface TestimonialCardProps {
  quote: string;
  author: string;
  context?: string;
}

export default function TestimonialCard({ quote, author, context }: TestimonialCardProps) {
  return (
    <blockquote className="bg-white rounded-[8px] p-8 shadow-card border-l-4 border-green-400 relative">
      <div className="absolute top-4 right-6 text-green-200 text-5xl font-heading leading-none select-none" aria-hidden="true">
        &ldquo;
      </div>
      <p className="text-warm-700 leading-relaxed italic mb-6 relative z-10">{quote}</p>
      <footer className="flex items-center gap-3">
        <div className="w-8 h-[2px] bg-green-400 rounded-full" />
        <div>
          <span className="text-warm-900 font-semibold text-sm">{author}</span>
          {context && <span className="text-warm-500 text-sm ml-1">· {context}</span>}
        </div>
      </footer>
    </blockquote>
  );
}
