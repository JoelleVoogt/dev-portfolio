import Link from "next/link";
import Image from "next/image";
import Terminal from "@/components/terminal";

export default function WhoAmI() {
  return (
    <div
      className="min-h-screen max-w-5xl w-full mx-auto flex justify-start items-center p-4"
      id="whoami"
    >
      <Terminal folder="about">
        <div className="flex flex-col gap-12 font-mono">
          <div className="flex flex-row gap-1">
            <p className="text-sm text-secondary-400 text-glow-secondary">
              joellevoogt
            </p>
            <p className="text-sm text-brand-400">:~/about$</p>
            <p className="text-sm text-surface-200">whoami</p>
          </div>

          <div className="flex flex-col gap-2">
            <p className="text-xl text-brand-400 text-glow-brand">
              Joelle Voogt
            </p>
            <p className="text-md text-surface-200">
              Front-end Developer with a UX background
            </p>
            <p className="text-md text-surface-600">
              // Based in Delft, Netherlands
            </p>
          </div>

          <div className="flex flex-row gap-1">
            <p className="text-sm text-secondary-400 text-glow-secondary">
              joellevoogt
            </p>
            <p className="text-sm text-brand-400">:~/about$</p>
            <p className="text-sm text-surface-200">cat </p>
            <p className="text-sm text-surface-200">./skills.txt</p>
          </div>
        </div>
      </Terminal>
    </div>
  );
}
