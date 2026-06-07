import Image from "next/image";
import ProjectWindow from "@/components/projectwindow";
import TagList from "@/components/taglist";
import Button from "@/components/button";
import { type Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="flex flex-col bg-[#00FF41]/6 shadow-brand-card">
      <ProjectWindow location={project.slug} year={project.year} />

      <div className="flex flex-col gap-8 px-4 py-6 md:px-6 md:py-8 border border-brand-400 rounded-b-sm border-t-0">
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

        <div className="flex flex-col gap-8">
          {/* Mobile layout */}
          <div className="flex flex-col gap-6 md:hidden">
            <TagList tags={project.tags} />
            <div className="flex flex-col gap-2">
              <h3 className="font-bold text-base">{project.title}</h3>
              <p className="text-surface-300">{project.description}</p>
            </div>
          </div>

          {/* Desktop layout */}
          <div className="hidden md:flex md:flex-col md:items-start md:gap-4">
            <div className="flex flex-row items-center place-content-between w-full">
              <h3 className="font-bold text-lg">{project.title}</h3>
              <TagList tags={project.tags} />
            </div>
            <div className="shrink-0">
              <p className="text-surface-300 w-full">{project.description}</p>
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
  );
}
