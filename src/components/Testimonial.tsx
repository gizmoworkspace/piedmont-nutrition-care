interface TestimonialProps {
  quote: string;
  author: string;
  context?: string;
}

export default function Testimonial({ quote, author, context }: TestimonialProps) {
  return (
    <blockquote className="relative bg-gradient-to-br from-green-50 to-green-100/50 border-l-4 border-green-400 rounded-r-2xl p-6 md:p-8 shadow-card">
      <div className="absolute top-3 right-5 text-green-200/40 text-5xl font-heading leading-none select-none" aria-hidden="true">
        &ldquo;
      </div>
      <p className="text-warm-800 text-lg leading-relaxed italic mb-4 relative z-10">
        &ldquo;{quote}&rdquo;
      </p>
      <footer className="font-body text-sm text-warm-600">
        <span className="font-semibold text-warm-800">&mdash; {author}</span>
        {context && <span className="text-warm-500 ml-1">, {context}</span>}
      </footer>
    </blockquote>
  );
}
