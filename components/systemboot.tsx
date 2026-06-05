export default function SystemBoot({
  boot,
  status,
  statusColor = "text-surface-50",
  textGlow,
}: {
  boot: string;
  status: string;
  statusColor?: string;
  textGlow?: string;
}) {
  return (
    <>
      <span className="text-surface-400 tracking-widest">{boot}</span>
      <span className="text-brand-400">[OK]</span>
      <span className={`${statusColor} ${textGlow}`}>{status}</span>
    </>
  );
}
