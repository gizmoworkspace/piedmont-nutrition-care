interface SectionDividerProps {
  from?: string;
  to?: string;
  flip?: boolean;
  className?: string;
}

export default function SectionDivider({
  from = "#FDFBF7",
  to = "#f4f9f2",
  flip = false,
  className = "",
}: SectionDividerProps) {
  return (
    <div className={`relative w-full overflow-hidden leading-[0] ${flip ? "rotate-180" : ""} ${className}`}>
      <svg
        viewBox="0 0 1200 80"
        preserveAspectRatio="none"
        className="block w-full h-[40px] md:h-[60px]"
      >
        <path
          d="M0,40 C300,80 900,0 1200,40 L1200,80 L0,80 Z"
          fill={to}
        />
        <rect width="1200" height="80" fill={from} className="-z-10" />
      </svg>
    </div>
  );
}
