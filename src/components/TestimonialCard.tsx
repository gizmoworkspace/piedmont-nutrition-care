interface TestimonialCardProps {
  quote: string;
  author: string;
  context?: string;
}

export default function TestimonialCard({ quote, author, context }: TestimonialCardProps) {
  return (
    <blockquote className="group relative bg-white rounded-2xl p-5 sm:p-6 md:p-8 shadow-card border-l-4 border-green-400 hover:shadow-lifted hover:-translate-y-[2px] transition-all duration-300 h-full flex flex-col">
      {/* Quote mark */}
      <div className="absolute top-3 right-4 sm:top-4 sm:right-6 text-green-200/60 text-4xl sm:text-6xl font-heading leading-none select-none group-hover:text-green-300/60 transition-colors" aria-hidden="true">
        &ldquo;
      </div>

      {/* Stars */}
      <div className="flex gap-0.5 mb-3 sm:mb-4">
        {[1, 2, 3, 4, 5].map((s) => (
          <svg key={s} className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400 fill-current" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>

      <p className="text-warm-700 leading-relaxed italic mb-4 sm:mb-6 relative z-10 flex-grow text-[0.875rem] sm:text-base">{quote}</p>

      <footer className="flex items-center gap-3 mt-auto">
        {/* Photo placeholder */}
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-200 to-green-400 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
          {author.charAt(0)}
        </div>
        <div>
          <span className="text-warm-900 font-semibold text-sm block">{author}</span>
          {context && (
            <span className="inline-block text-xs bg-green-50 text-green-700 px-2 py-0.5 rounded-full mt-0.5">
              {context}
            </span>
          )}
        </div>
      </footer>
    </blockquote>
  );
}
