import Link from "next/link";
import Image from "next/image";
import Terminal from "@/components/sections/terminal";

export default function Projects() {
  return (
    <div
      className="min-h-screen max-w-5xl w-full mx-auto flex justify-start items-center p-4"
      id="projects"
    >
      <Terminal folder="about">
        <p>Projects</p>
      </Terminal>
    </div>
  );
}
