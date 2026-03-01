import { StarIcon, AcademicCapIcon, ClipboardIcon, BuildingIcon, ShieldCheckIcon, BeakerIcon, ChatBubbleIcon } from "./Icons";

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
}

export default function ProofBar({ items }: ProofBarProps) {
  return (
    <section className="bg-green-800 text-white py-4">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-2 text-sm font-body font-medium">
          {items.map((item, i) => {
            const Icon = item.icon ? iconMap[item.icon] : null;
            return (
              <span key={i} className="flex items-center gap-2">
                {i > 0 && <span className="hidden sm:inline text-green-500/40 -ml-4 mr-0">|</span>}
                {Icon && <Icon className="w-4 h-4 text-green-300" />}
                <span className="text-green-50">{item.text}</span>
              </span>
            );
          })}
        </div>
      </div>
    </section>
  );
}
