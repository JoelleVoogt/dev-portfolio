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
    <div className="flex flex-row items-center gap-2 border-b border-b-surface-800 py-3">
      <p className="text-secondary-400">{parent}</p>
      <p className="text-surface-500">{subdirectory}</p>
      <p className="text-surface-200">{path}</p>
    </div>
  );
}
