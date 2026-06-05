import { ArrowRight } from "lucide-react";

export default function Socials({
  social,
  destination,
  url,
}: {
  social: string;
  destination: string;
  url: string;
}) {
  return (
    <>
      <div className="flex flex-row gap-2">
        <p className="text-secondary-400">{social}</p>
        <ArrowRight className="text-brand-400 text-glow-secondary w-6 h-6 shrink-0" />
        <div className="text-surface-100">
          <a
            className="underline underline-offset-8 decoration-dashed decoration-brand-400"
            href={destination}
            target="_blank"
          >
            {url}
          </a>
        </div>
      </div>
    </>
  );
}
