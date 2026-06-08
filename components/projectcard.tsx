import Image from "next/image";
import ProjectWindow from "@/components/projectwindow";
import TagList from "@/components/taglist";
import Button from "@/components/button";
import { type Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <>
      <a href={project.url} target="_blank" rel="noopener noreferrer">
        <div className="flex flex-col bg-brand-500/5 shadow-brand-card hover:shadow-brand hover:translate-x-1 duration-300 transition-all md:hover:bg-brand-500/10 md:hover:glow-brand">
          <ProjectWindow location={project.slug} year={project.year} />

          {/* Mobile image */}
          <div className="relative block md:hidden w-full h-[240px] border border-brand-400 border-t-0 project-image duration-30 overflow-hidden">
            <Image
              src={project.mobileImage}
              fill
              className="object-cover"
              alt={project.title}
              // sizes="100vw"
            />
          </div>

          {/* Desktop image */}
          <div className="flex flex-col gap-10 px-4 py-8 md:px-6 md:py-8 border border-brand-400 rounded-b-sm border-t-0">
            <div className="relative hidden md:block w-full h-[664px] md:border border-brand-700 md:rounded-sm project-image duration-30 overflow-hidden">
              <Image
                src={project.desktopImage}
                fill
                className="object-cover"
                alt={project.title}
                sizes="min-width: 768px) 100vw, 0px"
              />
            </div>

            <div className="flex flex-col gap-8">
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
                asChild
              />
            </div>
          </div>
        </div>
      </a>
    </>
  );
}
