interface ResponsiveTextProps {
  full: string;
  short: string;
  className?: string;
}

/**
 * Shows shortened text on mobile, full text on md+ screens.
 * Use for long paragraphs that overwhelm small viewports.
 */
export default function ResponsiveText({ full, short, className = "" }: ResponsiveTextProps) {
  return (
    <>
      <span className={`hidden md:inline ${className}`}>{full}</span>
      <span className={`md:hidden ${className}`}>{short}</span>
    </>
  );
}
