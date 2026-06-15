import "./globals.css";
import Nav from "../sections/nav";
import Hero from "@/sections/hero";
import WhoAmI from "@/sections/whoami";
import Projects from "@/sections/projects";
import Contact from "@/sections/contact";
import Footer from "@/sections/footer";
import Reveal from "@/components/reveal";

export default function Home() {
  return (
    <div className="box-border">
      <div className="flex flex-col flex-1 items-center justify-center bg-background">
        <Nav />
        <Hero />
        <Reveal>
          <WhoAmI />
        </Reveal>
        <Reveal>
          <Projects />
        </Reveal>
        <Reveal>
          <Contact />
        </Reveal>
        <Reveal>
          <Footer />
        </Reveal>
      </div>
    </div>
  );
}
