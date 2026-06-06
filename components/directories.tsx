export default function Directories({
  parent,
  subdirectory,
  path,
}: {
  parent: string;
  subdirectory: string;
  path: string;
}) {
  return (
    <div className="text-sm md:text-base flex flex-row items-center gap-4 border-b border-b-surface-800 last:border-b-0 py-3">
      <p className="text-secondary-400">{parent}</p>
      <p className="text-surface-400">{subdirectory}</p>
      <p className="text-surface-200">{path}</p>
    </div>
  );
}
