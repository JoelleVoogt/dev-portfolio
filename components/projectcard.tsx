import Image from "next/image";
import ProjectWindow from "@/components/projectwindow";
import TagList from "@/components/taglist";
import Button from "@/components/button";
import { type Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="flex flex-col p-2 md:p-4">
      <ProjectWindow location={project.slug} year={project.year} />

      <div className="flex flex-col gap-4 px-4 py-8 md:p-8 border border-brand-400 rounded-b-sm border-t-0 ">
        <div className="relative hidden md:block w-full h-[560px] border border-brand-700 rounded-t-sm shadow-brand shadow-brand-card overflow-hidden">
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

        <div className="flex flex-col gap-1">
          <h3 className="font-bold text-lg">{project.title}</h3>
          <p className="text-surface-400">{project.description}</p>
        </div>

        <TagList tags={project.tags} />

        <Button
          variant="primary"
          text="./open --url"
          destination={project.url}
        />
      </div>
    </div>
  );
}
