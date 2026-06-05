import Link from "next/link";
import Image from "next/image";

function getFolder(folder: string) {
  return `joellevoogt:~/${folder}$`;
}

export default function Terminal({
  folder,
  children,
}: {
  folder: string;
  children: React.ReactNode;
}) {
  return (
    // terminal window
    <div className="w-full border border-[#00AA2A] rounded-md bg-[#0F0F0F]  drop-shadow-[0_0_10px_rgba(0,255,65,0.50)]">
      <div className="flex p-4 border-b  border-[#00AA2A]">
        <div className="flex gap-1.5 items-center">
          <span className="inline-block w-3 h-3 rounded-full bg-[#FF5F56]" />
          <span className="inline-block w-3 h-3 rounded-full bg-[##FFBD2E]" />
          <span className="inline-block w-3 h-3 rounded-full bg-[#27CA40]" />
        </div>
        <div className="flex w-full justify-center">
          <p className="text-sm text-surface-600 font-mono">
            {getFolder(folder)}
          </p>
        </div>
      </div>

      <div className="p-4">{children}</div>
    </div>
  );
}
