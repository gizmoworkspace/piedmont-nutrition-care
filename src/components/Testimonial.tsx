interface TestimonialProps {
  quote: string;
  author: string;
  context?: string;
}

export default function Testimonial({ quote, author, context }: TestimonialProps) {
  return (
    <blockquote className="bg-green-50 border-l-4 border-green-400 rounded-r-[8px] p-6 md:p-8">
      <p className="text-warm-800 text-lg leading-relaxed italic mb-4">
        &ldquo;{quote}&rdquo;
      </p>
      <footer className="font-body text-sm text-warm-600">
        <span className="font-semibold text-warm-800">&mdash; {author}</span>
        {context && <span className="text-warm-500 ml-1">, {context}</span>}
      </footer>
    </blockquote>
  );
}
