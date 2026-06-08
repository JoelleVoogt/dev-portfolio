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
}: {
  variant: "primary" | "ghost";
  text: string;
  destination: string;
  icon?: "arrow" | "music" | "pause";
  asChild?: boolean;
}) {
  const classes = `flex flex-row px-4 py-3 w-fit gap-3 items-center font-bold ${buttonVariants[variant]}`;
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
      className={`flex flex-row px-4 py-3 w-fit gap-3 items-center font-bold ${buttonVariants[variant]}`}
    >
      {icon && <ArrowRight className="text-glow-secondary w-6 h-6 shrink-0" />}
      {text}
    </a>
  );
}
