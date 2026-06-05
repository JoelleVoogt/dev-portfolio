import { ArrowRight } from "lucide-react";

export default function Skill({ text }: { text: string }) {
  return (
    <div className="flex flex-row items-center gap-2">
      <div>
        <ArrowRight className="text-secondary-400 text-glow-secondary w-6 h-6 shrink-0" />
      </div>
      <div>
        <p className="text-surface-50">{text}</p>
      </div>
    </div>
  );
}
