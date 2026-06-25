import Terminal from "@/components/terminal";
import Skill from "@/components/skill";
import Concatenate from "@/components/concatenate";

export default function WhoAmI() {
  return (
    <div
      className="font-mono min-h-screen max-w-5xl w-full mx-auto flex justify-start items-center p-4 text-base"
      id="whoami"
    >
      <Terminal folder="about">
        {/* whoami */}
        <div className="flex flex-col gap-18 my-6">
          <div className="flex flex-col gap-5">
            <Concatenate
              folderLocationFirst="~/about$"
              folderLocationSecond="whoami"
            />
            <div className="flex flex-col gap-4">
              <p className="text-2xl text-brand-400 text-glow-brand">
                Joelle Voogt
              </p>

              <div className="flex flex-col py-2 gap-8  ">
                <p className="text-surface-50">
                  Mijn werk klopt tot in de details: doordachte structuren die
                  herbruikbaar en onderhoudbaar zijn, afgewerkt tot op de pixel.
                  Het is voor mij pas af als het voor iedereen werkt, op elk
                  scherm, in elke staat. Die scherpte komt uit mijn designjaren.
                </p>
              </div>
              <p className="text-surface-500">// Based in Delft, Netherlands</p>
            </div>
          </div>

          {/* skills */}
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-1">
              <Concatenate
                folderLocationFirst="~/about$"
                folderLocationSecond="cat ./skills.txt"
              />
            </div>
            <div className="flex flex-col gap-2 pl-2 md:pl-6 text-md">
              <Skill text="Accessibility: WCAG 2.2" />
              <Skill text="Component Architecture" />
              <Skill text="Responsive & Pixel-Perfect UI" />
              <Skill text="Git & Github" />
            </div>
          </div>
        </div>
      </Terminal>
    </div>
  );
}
