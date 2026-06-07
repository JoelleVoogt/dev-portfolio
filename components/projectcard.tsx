import Image from "next/image";
import ProjectWindow from "@/components/projectwindow";
import TagList from "@/components/taglist";
import Button from "@/components/button";
import { type Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="flex flex-col bg-[#00FF41]/2">
      <ProjectWindow location={project.slug} year={project.year} />

      <div className="flex flex-col gap-6 px-4 py-6 md:p-8 border border-brand-400 rounded-b-sm border-t-0">
        <div className="relative hidden md:block w-full h-[520px] border border-brand-700 rounded-t-sm shadow-brand shadow-brand-card overflow-hidden">
          <Image
            src={project.desktopImage}
            fill
            className="object-cover"
            alt={project.title}
          />
        </div>

        <div className="relative block md:hidden w-full h-[240px] border border-brand-700 rounded-sm shadow-brand shadow-brand-card overflow-hidden">
          <Image
            src={project.mobileImage}
            fill
            className="object-cover"
            alt={project.title}
          />
        </div>

        <div className="flex flex-col gap-12">
          <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between ">
            <div className="flex flex-col gap-2 min-w-0 grow">
              <h3 className="font-bold text-base md:text-lg">
                {project.title}
              </h3>
              <p className="text-surface-400">{project.description}</p>
            </div>
            <div className="order-first md:order-last shrink-0">
              <TagList tags={project.tags} />
            </div>
          </div>

          <Button
            variant="primary"
            text="./open --url"
            destination={project.url}
          />
        </div>
      </div>
    </div>
  );
}
