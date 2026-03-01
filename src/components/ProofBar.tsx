"use client";

import { StarIcon, AcademicCapIcon, ClipboardIcon, BuildingIcon, ShieldCheckIcon, BeakerIcon, ChatBubbleIcon } from "./Icons";
import StatCounter from "./StatCounter";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  star: StarIcon,
  academic: AcademicCapIcon,
  clipboard: ClipboardIcon,
  building: BuildingIcon,
  shield: ShieldCheckIcon,
  beaker: BeakerIcon,
  chat: ChatBubbleIcon,
};

interface ProofBarProps {
  items: { icon?: string; text: string }[];
  floating?: boolean;
}

export default function ProofBar({ items, floating = false }: ProofBarProps) {
  return (
    <section className={`relative z-10 ${floating ? "-mt-8 mb-4 px-6 md:px-8" : ""}`}>
      <div className={`${floating ? "max-w-5xl mx-auto" : ""}`}>
        <div
          className={`${
            floating
              ? "glass-card rounded-2xl px-6 py-4 shadow-deep"
              : "bg-green-800/95 backdrop-blur-sm py-5"
          }`}
        >
          <div className={`${floating ? "" : "max-w-6xl mx-auto px-6 md:px-8"}`}>
            <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-3 text-sm font-body font-medium">
              {items.map((item, i) => {
                const Icon = item.icon ? iconMap[item.icon] : null;
                const isRating = item.text.includes("5.0");
                const isYears = item.text.includes("20+");
                return (
                  <span key={i} className="flex items-center gap-2.5">
                    {i > 0 && (
                      <span className={`hidden sm:inline ${floating ? "text-warm-300" : "text-green-500/40"} -ml-4 mr-0`}>
                        |
                      </span>
                    )}
                    {Icon && (
                      <Icon className={`w-4 h-4 ${floating ? "text-green-500" : "text-green-300"}`} />
                    )}
                    <span className={floating ? "text-warm-800" : "text-green-50"}>
                      {isRating ? (
                        <>
                          <StatCounter end={5.0} decimals={1} className="font-bold" /> Google Rating
                        </>
                      ) : isYears ? (
                        <>
                          <StatCounter end={20} suffix="+" className="font-bold" /> Years Health Industry Experience
                        </>
                      ) : (
                        item.text
                      )}
                    </span>
                  </span>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
