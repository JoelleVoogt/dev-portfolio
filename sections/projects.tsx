import Link from "next/link";
import Image from "next/image";
import Terminal from "@/components/sections/terminal";

export default function Projects() {
  return (
    <div
      className="min-h-screen max-w-5xl w-full mx-auto flex justify-start items-center p-4"
      id="projects"
    >
      <Terminal folder="projects">
        <p className="text-sm text-mist-100 font-mono">Projects</p>
      </Terminal>
    </div>
  );
}
