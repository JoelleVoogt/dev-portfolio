import Link from "next/link";
import Image from "next/image";
import Terminal from "@/components/terminal";

export default function Projects() {
  return (
    <div
      className="font-mono min-h-screen max-w-5xl w-full mx-auto flex justify-start items-center p-4"
      id="projects"
    >
      <Terminal folder="projects">
        <div className="flex flex-col gap-8 my-6">
          <div className="flex flex-col gap-1">
            <p>Projects</p>
          </div>
        </div>
      </Terminal>
    </div>
  );
}
