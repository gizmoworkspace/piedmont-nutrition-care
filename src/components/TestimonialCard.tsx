interface TestimonialCardProps {
  quote: string;
  author: string;
  context?: string;
}

export default function TestimonialCard({ quote, author, context }: TestimonialCardProps) {
  return (
    <blockquote className="group relative bg-white rounded-2xl p-10 md:p-12 shadow-card border border-warm-100/50 hover:shadow-lifted hover:-translate-y-[2px] transition-all duration-300 h-full flex flex-col">
      {/* Subtle quote mark */}
      <svg className="w-8 h-8 text-warm-200 mb-6 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
      </svg>

      <p className="text-warm-700 leading-relaxed text-base md:text-lg mb-8 relative z-10 flex-grow">{quote}</p>

      <footer className="flex items-center gap-3 mt-auto">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-200 to-green-400 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
          {author.charAt(0)}
        </div>
        <div>
          <span className="text-warm-900 font-semibold text-sm block">{author}</span>
          {context && (
            <span className="text-warm-400 text-xs mt-0.5 block">{context}</span>
          )}
        </div>
      </footer>
    </blockquote>
  );
}
