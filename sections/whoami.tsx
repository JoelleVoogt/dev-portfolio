import Link from "next/link";
import Image from "next/image";
import Terminal from "@/components/terminal";
import { ArrowRight } from "lucide-react";

export default function WhoAmI() {
  return (
    <div
      className="min-h-screen max-w-5xl w-full mx-auto flex justify-start items-center p-4"
      id="whoami"
    >
      <Terminal folder="about">
        {/* whoami */}
        <div className="font-mono flex flex-col gap-16 p-2 my-6">
          <div className="flex flex-col gap-24">
            <div className="flex flex-row gap-1">
              <p className="text-secondary-400 text-glow-secondary">
                joellevoogt
              </p>
              <p className="text-brand-400">:~/about$</p>
              <p className="text-surface-200">whoami</p>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <p className="text-2xl text-brand-400 text-glow-brand">
              Joelle Voogt
            </p>
            <p className="text-surface-200">
              Front-end Developer with a UX background
            </p>
            <p className="text-surface-600">// Based in Delft, Netherlands</p>
          </div>

          {/* skills */}

          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-1">
              <div className="flex flex-row gap-1">
                <p className="text-secondary-400 text-glow-secondary">
                  joellevoogt
                </p>
                <p className="text-brand-400">:~/about$</p>
                <p className="text-surface-200">cat </p>
                <p className="text-surface-200">./skills.txt</p>
              </div>
            </div>
            <div className="flex flex-col gap-2 pl-8">
              <div className="flex flex-row items-center gap-2 text-md">
                <div>
                  <ArrowRight className="text-secondary-400 text-glow-secondary w-6 h-6" />
                </div>
                <div>
                  <p className="text-surface-50">Git & Github</p>
                </div>
              </div>

              <div className="flex flex-row items-center gap-2 text-md">
                <div>
                  <ArrowRight className="text-secondary-400 text-glow-secondary w-6 h-6" />
                </div>
                <div>
                  <p className="text-surface-50">Component Libraries</p>
                </div>
              </div>

              <div className="flex flex-row items-center gap-2 text-md">
                <div>
                  <ArrowRight className="text-secondary-400 text-glow-secondary w-6 h-6" />
                </div>
                <div>
                  <p className="text-surface-50">Responsive Web Development</p>
                </div>
              </div>

              <div className="flex flex-row items-center gap-2 text-md">
                <div>
                  <ArrowRight className="text-secondary-400 text-glow-secondary w-6 h-6" />
                </div>
                <div>
                  <p className="text-surface-50">Accessibility: WCAG 2.2</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Terminal>
    </div>
  );
}
