export default function ProjectWindow({
  location,
  year,
}: {
  location: string;
  year?: string;
}) {
  return (
    <>
      <span className="font-mono flex flex-row border border-brand-400 items-center space-x-4 p-4 md:px-6 rounded-t-sm justify-between">
        <p className="text-sm md:text-base">
          <span className="text-secondary-400 text-glow-secondary hidden md:inline">
            ${" "}
          </span>
          <span className="hidden md:inline">cat .</span>
          <span>/ </span>
          <span>{location}</span>
          <span> / README.md</span>
        </p>
        <p className="hidden md:block">
          <span className="text-sm text-surface-400">{year}</span>
        </p>
      </span>
    </>
  );
}
