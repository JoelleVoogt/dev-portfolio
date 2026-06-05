export default function Concatenate({
  folderLocationFirst,
  folderLocationSecond,
}: {
  folderLocationFirst: string;
  folderLocationSecond: string;
}) {
  return (
    <div className="flex flex-col md:flex-row gap-2">
      <p className="text-secondary-400 text-glow-secondary">joellevoogt</p>
      <p className="text-brand-400">:{folderLocationFirst}</p>
      <p className="text-surface-200">{folderLocationSecond}</p>
    </div>
  );
}
