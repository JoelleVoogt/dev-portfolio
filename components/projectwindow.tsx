export default function ProjectWindow({
  location,
  year,
}: {
  location: string;
  year?: string;
}) {
  return (
    <>
      <div className="font-mono flex flex-row items-center space-x-4 border border-brand-400 p-4 md:px-6 rounded-t-sm">
        <div className="flex flex-row gap-2 md:gap-4">
          <p className="text-secondary-400">$</p>
          <p>cat</p>
          <p>{location}</p>
        </div>
        <div className="hidden md:block">
          <p className="text-sm text-surface-600">{year}</p>
        </div>
      </div>
    </>
  );
}
