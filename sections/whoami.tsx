import Terminal from "@/components/terminal";
import Skill from "@/components/skill";
import Concatenate from "@/components/concatenate";

export default function WhoAmI() {
  return (
    <div
      className="font-mono min-h-screen max-w-5xl w-full mx-auto flex justify-start items-center p-4"
      id="whoami"
    >
      <Terminal folder="about">
        {/* whoami */}
        <div className="flex flex-col gap-18 my-6">
          <div className="flex flex-col gap-5">
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
          </div>

          {/* skills */}
          <div className="flex flex-col gap-5">
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
