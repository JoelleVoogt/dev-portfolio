import Image from "next/image";
import ProjectWindow from "@/components/projectwindow";
import TagList from "@/components/taglist";
import Button from "@/components/button";
import { type Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <>
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:shadow-brand hover:translate-x-1 duration-300 transition-all"
      >
        <div className="flex flex-col bg-[#00FF41]/6 shadow-brand-card">
          <ProjectWindow location={project.slug} year={project.year} />

          <div className="flex flex-col gap-10 px-4 py-8 md:px-6 md:py-8 border border-brand-400 rounded-b-sm border-t-0">
            <div className="relative hidden md:block w-full h-[520px] border border-brand-700 rounded-sm project-image duration-30 overflow-hidden">
              <Image
                src={project.desktopImage}
                fill
                className="object-cover"
                alt={project.title}
              />
            </div>

            <div className="relative block md:hidden w-full h-[240px] border border-brand-700 rounded-sm project-image duration-30 overflow-hidden">
              <Image
                src={project.mobileImage}
                fill
                className="object-cover"
                alt={project.title}
              />
            </div>

            <div className="flex flex-col gap-10">
              {/* Mobile layout */}
              <div className="flex flex-col gap-6 md:hidden">
                <TagList tags={project.tags} />
                <div className="flex flex-col gap-2">
                  <h3 className="font-bold text-xl text-surface-0">
                    {project.title}
                  </h3>
                  <p className="text-surface-300">{project.description}</p>
                </div>
              </div>

              {/* Desktop layout */}
              <div className="hidden md:flex md:flex-col md:items-start md:gap-2">
                <div className="flex flex-row items-end place-content-between w-full">
                  <h3 className="font-bold text-xl text-surface-0">
                    {project.title}
                  </h3>
                  <TagList tags={project.tags} />
                </div>
                <div className="shrink-0">
                  <p className="text-surface-300 w-full">
                    {project.description}
                  </p>
                </div>
              </div>

              <Button
                variant="primary"
                text="./open --url"
                destination={project.url}
                icon="arrow"
              />
            </div>
          </div>
        </div>
      </a>
    </>
  );
}
