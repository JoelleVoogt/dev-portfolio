import Terminal from "@/components/terminal";
import Skill from "@/components/skill";
import Concatenate from "@/components/concatenate";
import Tag from "@/components/tag";

export default function WhoAmI() {
  return (
    <div
      className="font-mono min-h-screen max-w-5xl w-full mx-auto flex justify-start items-center p-4 text-base"
      id="whoami"
    >
      <Terminal folder="about">
        {/* whoami */}
        <div className="flex flex-col md:flex-row items-start gap-8 md:gap-18 my-6">
          <div className="flex flex-col gap-5 w-full md:flex-1 md:max-w-3/5">
            <Concatenate
              folderLocationFirst="~/about$"
              folderLocationSecond="whoami"
            />
            <div className="flex flex-col gap-4">
              <p className="text-2xl text-brand-400 text-glow-brand">
                Joelle Voogt
              </p>

              <div className="flex flex-col py-2 gap-8">
                <p className="text-surface-50">
                  Ik ben een Front-end Developer die complexe vraagstukken
                  vertaalt naar eenvoudige, elegante interfaces. Ik hecht waarde
                  aan details. Van pixel-perfecte layouts tot vloeiende
                  interacties en een consistente gebruikerservaring.
                </p>
                <p className="text-surface-50">
                  Onder die oppervlakte bouw ik doordachte structuren die
                  herbruikbaar en onderhoudbaar zijn. Voor mij is het pas af als
                  het voor iedereen werkt, op elk scherm, in elke staat. Die
                  scherpte komt uit mijn designjaren.
                </p>
              </div>
              <p className="text-surface-500">// Locatie: Delft, Nederland</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-5 w-full md:w-2/5 md:shrink-0">
            <p>technologies</p>
            <div className="flex flex-wrap gap-2">
              <Tag label="Next.js" />
              <Tag label="React" />
              <Tag label="TypeScript" />
              <Tag label="Tailwind" />
              <Tag label="Rest APIs" />
              <Tag label="Git" />
              <Tag label="Vercel" />
              <Tag label="Figma" />
              <Tag label="JavaScript" />
              <Tag label="HTML" />
              <Tag label="CSS" />
              <Tag label="WCAG" />
            </div>
          </div>
          {/* skills */}
          {/* <div className="flex flex-col gap-5">
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
          </div> */}
        </div>
      </Terminal>
    </div>
  );
}
