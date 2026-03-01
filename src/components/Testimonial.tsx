interface TestimonialProps {
  quote: string;
  author: string;
  context?: string;
}

export default function Testimonial({ quote, author, context }: TestimonialProps) {
  return (
    <blockquote className="bg-warm-100 border-l-4 border-sage-400 rounded-r-xl p-6 md:p-8">
      <p className="text-sage-800 text-lg leading-relaxed italic mb-4">
        &ldquo;{quote}&rdquo;
      </p>
      <footer className="font-sans text-sm text-sage-600">
        <span className="font-semibold">— {author}</span>
        {context && <span className="text-sage-500">, {context}</span>}
      </footer>
    </blockquote>
  );
}
