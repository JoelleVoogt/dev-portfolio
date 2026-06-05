export default function Concatenate({
  folderLocation,
}: {
  folderLocation: string;
}) {
  return (
    <div className="flex flex-col md:flex-row gap-2">
      <p className="text-secondary-400 text-glow-secondary">joellevoogt</p>
      <p className="text-brand-400">:~/about$</p>
      <p className="text-surface-200">{folderLocation}</p>
    </div>
  );
}
