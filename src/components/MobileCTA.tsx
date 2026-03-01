import Link from "next/link";

export default function MobileCTA() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-sage-700 shadow-[0_-4px_12px_rgba(0,0,0,0.15)]">
      <div className="flex items-center justify-between px-4 py-3">
        <a href="tel:3369865388" className="text-white text-sm font-medium">
          📞 336-986-5388
        </a>
        <Link
          href="/contact"
          className="bg-white text-sage-800 font-bold py-2 px-6 rounded-lg text-sm shadow-md"
        >
          Book Now
        </Link>
      </div>
    </div>
  );
}
