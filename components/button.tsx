import { ArrowRight } from "lucide-react";

const buttonVariants = {
  primary:
    "bg-secondary-400 hover:bg-brand-400 shadow-secondary hover:shadow-brand text-surface-0 hover:text-surface-950",
  ghost:
    "border border-secondary-400 hover:bg-brand-400 shadow-secondary hover:shadow-brand text-surface-0 hover:text-surface-950 hover:border-brand-400",
};

export default function Button({
  variant,
  text,
  destination,
}: {
  variant: "primary" | "ghost";
  text: string;
  destination: string;
}) {
  return (
    <>
      <div
        className={`flex flex-row px-4 py-3 w-fit gap-2 align-middle font-bold ${buttonVariants[variant]}`}
      >
        <ArrowRight className="text-glow-secondary w-6 h-6 shrink-0" />
        <a href={destination}>{text}</a>
      </div>
    </>
  );
}
