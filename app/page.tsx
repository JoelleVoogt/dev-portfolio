import Image from "next/image";
import Link from "next/link";
import Nav from "../components/sections/nav";
import WhoAmI from "@/components/sections/whoami";
import Projects from "@/components/sections/projects";
import Contact from "@/components/sections/contact";

export default function Home() {
  return (
    <div className="mt-16">
      <div className="flex flex-col flex-1 items-center justify-center bg-black">
        <Nav />
        <WhoAmI />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}
