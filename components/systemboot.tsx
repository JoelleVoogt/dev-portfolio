export default function SystemBoot({
  boot,
  status,
  statusColor = "text-surface-50",
}: {
  boot: string;
  status: string;
  statusColor?: string;
}) {
  return (
    <>
      <span className="text-surface-400 tracking-widest">{boot}</span>
      <span className="text-brand-400">[OK]</span>
      <span className={statusColor}>{status}</span>
    </>
  );
}
