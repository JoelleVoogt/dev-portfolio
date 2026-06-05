import Link from "next/link";
import Image from "next/image";
import Terminal from "@/components/terminal";
import Skill from "@/components/skill";
import Concatenate from "@/components/concatenate";

export default function WhoAmI() {
  return (
    <div
      className="min-h-screen max-w-5xl w-full mx-auto flex justify-start items-center p-4"
      id="whoami"
    >
      <Terminal folder="about">
        {/* whoami */}
        <div className="font-mono flex flex-col gap-12 my-6">
          <Concatenate folderLocation="whoami" />

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
              <Concatenate folderLocation="cat ./skills.txt" />
            </div>
            <div className="flex flex-col gap-2 pl-2 md:pl-6">
              <Skill text="Git & Github" />
              <Skill text="Component Libraries" />
              <Skill text="Responsive Web Development" />
              <Skill text="Accessibility: WCAG 2.2" />
            </div>
          </div>
        </div>
      </Terminal>
    </div>
  );
}
