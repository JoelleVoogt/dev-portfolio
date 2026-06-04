import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <div
      className="w-full bottom-0 left-0 border-t border-t-green-400 bg-background drop-shadow-[0_0_10px_rgba(0,255,65,0.30)]"
      id="footer"
    >
      <div className="flex flex-col md:flex-row justify-between max-w-5xl mx-auto p-4 md:py-4 py-12 gap-4">
        {" "}
        <p className="text-sm text-mist-300 font-mono">
          // Built with VSCode & Next.js
        </p>
        <p className="text-sm text-brand-400 font-mono">
          &copy; Joelle Voogt 2026
        </p>
      </div>
    </div>
  );
}
