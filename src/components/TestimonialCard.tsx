interface TestimonialCardProps {
  quote: string;
  author: string;
  context?: string;
}

export default function TestimonialCard({ quote, author, context }: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-sm border border-sage-100 hover:shadow-md transition-shadow duration-300">
      <div className="text-sage-400 text-4xl font-heading mb-3">&ldquo;</div>
      <p className="text-gray-700 leading-relaxed italic mb-4">{quote}</p>
      <div className="flex items-center gap-2">
        <div className="w-8 h-0.5 bg-sage-400"></div>
        <span className="text-sage-700 font-semibold text-sm">{author}</span>
      </div>
      {context && <p className="text-gray-400 text-xs mt-1 ml-10">{context}</p>}
    </div>
  );
}
