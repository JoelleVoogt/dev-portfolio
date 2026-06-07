type TagProps = {
  label: string;
};

export default function Tag({ label }: TagProps) {
  return (
    <span className="border border-brand-400 text-brand-400 font-mono text-sm px-1 py-1 md:px-2 md:py-1">
      {label}
    </span>
  );
}
