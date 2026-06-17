import Terminal from "@/components/terminal";
import Concatenate from "@/components/concatenate";
import Directories from "@/components/directories";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/projectcard";

export default function Projects() {
  return (
    <div
      className="font-mono min-h-screen max-w-7xl w-full mx-auto my-24 md:my-32 flex justify-start items-center p-4"
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
                path="/ typography /"
                previewImage="/projects/typography-desktop4.png"
                href="#typography-playground"
              ></Directories>
              <Directories
                parent="dev"
                subdirectory="2026"
                path="/ nextjs-dashboard /"
                previewImage="/projects/nextjs-dashboard-desktop.png"
                href="#nextjs-dashboard"
              ></Directories>
              <Directories
                parent="dev"
                subdirectory="2026"
                path="/ music-player /"
                previewImage="/projects/music-player-desktop.png"
                href="#music-player"
              ></Directories>
              {/* <Directories
                parent="dev"
                subdirectory="2026"
                path="/ dodge-the-meteor /"
                previewImage="/projects/dodge-the-meteor-desktop.png"
                href="#dodge-the-meteor"
              ></Directories>
              <Directories
                parent="dev"
                subdirectory="2026"
                path="/ shopping-cart /"
                previewImage="/projects/shopping-cart-desktop.png"
                href="#shopping-cart"
              ></Directories> */}
            </div>

            <div className="flex flex-col gap-24 md:gap-56">
              {projects.map((project) => (
                <div key={project.slug} id={project.slug}>
                  <ProjectCard project={project} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </Terminal>
    </div>
  );
}
