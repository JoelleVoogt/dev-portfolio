type TagProps = {
  label: string;
};

export default function Tag({ label }: TagProps) {
  return (
    <span className="border border-brand-400 text-brand-400 font-mono text-sm px-2 py-1">
      {label}
    </span>
  );
}
