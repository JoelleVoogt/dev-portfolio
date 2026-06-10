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
  icon,
  asChild = false,
  className = "",
}: {
  variant: "primary" | "ghost";
  text: string;
  destination: string;
  icon?: "arrow" | "music" | "pause";
  asChild?: boolean;
  className?: string;
}) {
  const classes = `flex flex-row justify-center py-2 py-2 md:px-4 md:py-3 gap-3 items-center font-bold ${buttonVariants[variant]}`;
  const content = (
    <>
      {icon && <ArrowRight className="text-glow-secondary w-6 h-6 shrink-0" />}
      {text}
    </>
  );

  if (asChild) return <span className={classes}>{content}</span>;
  return (
    <a
      href={destination}
      target="_blank"
      rel="noopener noreferrer"
      className={classes}
    >
      {icon && <ArrowRight className="text-glow-secondary w-6 h-6 shrink-0" />}
      {text}
    </a>
  );
}
