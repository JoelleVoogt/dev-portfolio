export default function SystemBoot({
  boot,
  status,
  statusColor = "text-surface-50",
  textGlow,
  delay = "0",
}: {
  boot: string;
  status: string;
  statusColor?: string;
  textGlow?: string;
  delay?: string;
}) {
  const animation = { animationDelay: delay };

  return (
    <>
      <span
        className="text-surface-400 tracking-widest animate-typing"
        style={animation}
      >
        {boot}
      </span>
      <span className="text-brand-400 animate-typing" style={animation}>
        [OK]
      </span>
      <span
        className={`${statusColor} ${textGlow} animate-typing`}
        style={animation}
      >
        {status}
      </span>
    </>
  );
}
