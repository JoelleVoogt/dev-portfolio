import Link from "next/link";
import Image from "next/image";
import Terminal from "@/components/terminal";
import Concatenate from "@/components/concatenate";
import Directories from "@/components/directories";

export default function Projects() {
  return (
    <div
      className="font-mono min-h-screen max-w-5xl w-full mx-auto flex justify-start items-center p-4"
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
                path="/dodge-the-meteor-game/"
              ></Directories>
              <Directories
                parent="dev"
                subdirectory="2026"
                path="/music-player/"
              ></Directories>
            </div>
          </div>
        </div>
      </Terminal>
    </div>
  );
}
