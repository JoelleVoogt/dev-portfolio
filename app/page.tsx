import "./globals.css";
import Image from "next/image";
import Link from "next/link";
import Nav from "../components/sections/nav";
import Hero from "@/components/sections/hero";
import WhoAmI from "@/components/sections/whoami";
import Projects from "@/components/sections/projects";
import Contact from "@/components/sections/contact";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <div className="box-border">
      <div className="flex flex-col flex-1 items-center justify-center bg-background">
        <Nav />
        <Hero />
        <WhoAmI />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
