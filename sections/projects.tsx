import Link from "next/link";
import Image from "next/image";
import Terminal from "@/components/terminal";
import Concatenate from "@/components/concatenate";
import Directories from "@/components/directories";
import Button from "@/components/button";
import ProjectWindow from "@/components/projectwindow";

export default function Projects() {
  return (
    <div
      className="font-mono min-h-screen max-w-5xl w-full mx-auto my-24 md:my-32 flex justify-start items-center p-4"
      id="projects"
    >
      <Terminal folder="projects">
        <div className="flex flex-col gap-30 my-6">
          <div className="flex flex-col gap-18">
            <div className="flex flex-col gap-8">
              <Concatenate
                folderLocationFirst="~/projects$"
                folderLocationSecond="ls -la"
              />
              <p className="text-surface-400">// total 4 featured projects</p>
            </div>

            <div>
              <Directories
                parent="dev"
                subdirectory="2026"
                path="/nextjs-dashboard/"
              ></Directories>
              <Directories
                parent="dev"
                subdirectory="2026"
                path="/rock-paper-scissors/"
              ></Directories>
              <Directories
                parent="dev"
                subdirectory="2026"
                path="/dodge-the-meteor/"
              ></Directories>
              <Directories
                parent="dev"
                subdirectory="2026"
                path="/music-player/"
              ></Directories>
            </div>

            <ProjectWindow
              location="./dodge-the-meteor/README.md"
              year="2026"
            />
            <div className="relative hidden md:block w-full h-[560px] border border-brand-700 rounded-sm shadow-brand shadow-brand-card overflow-hidden">
              <Image
                src="/projects/dodge-the-meteor-desktop.png"
                fill
                className="object-cover"
                alt="Image of the game alien trying to dodge the meteor"
              />
            </div>

            <div className="relative block md:hidden w-full h-[240] border border-brand-700 rounded-sm shadow-brand shadow-brand-card overflow-hidden">
              <Image
                src="/projects/dodge-the-meteor-mobile.png"
                fill
                className="object-cover"
                alt="Image of the game alien trying to dodge the meteor"
              />
            </div>
            <Button
              variant="primary"
              text="./open --url"
              destination="https://start-building-with-next-js.vercel.app/"
            />
          </div>
        </div>
      </Terminal>
    </div>
  );
}
