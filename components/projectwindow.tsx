export default function ProjectWindow({
  location,
  year,
}: {
  location: string;
  year?: string;
}) {
  return (
    <>
      <div className="font-mono flex flex-row items-center space-x-4 border border-brand-400 p-4 md:px-6 rounded-t-sm justify-between">
        <div className="flex flex-row gap-1 md:gap-4">
          <p className="text-secondary-400 text-sm md:text-base">$</p>
          <p className="text-sm md:text-base">cat</p>
          <p className="text-sm md:text-base">{location}</p>
        </div>
        <div className="hidden md:block">
          <p className="text-sm text-surface-500">{year}</p>
        </div>
      </div>
    </>
  );
}
