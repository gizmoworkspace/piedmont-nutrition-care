import Link from "next/link";
import { PhoneIcon } from "./Icons";
import { getGlobal } from "@/lib/content";

export default function MobileCTA() {
  const global = getGlobal();
  const phoneClean = global.phone.replace(/-/g, "");

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-warm-200 shadow-lifted">
      <div className="flex items-center justify-between px-4 py-3">
        <a href={`tel:${phoneClean}`} className="flex items-center gap-2 text-warm-700 text-sm font-medium">
          <PhoneIcon className="w-4 h-4 text-green-500" />
          {global.phone}
        </a>
        <Link
          href={global.bookingUrl}
          className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2.5 px-6 rounded-[8px] text-sm shadow-soft transition-colors"
        >
          Book Now
        </Link>
      </div>
    </div>
  );
}
