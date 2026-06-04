import Link from "next/link";
import Image from "next/image";
import Terminal from "@/components/sections/terminal";

export default function WhoAmI() {
  return (
    <div
      className="min-h-screen max-w-5xl w-full mx-auto flex justify-start items-center"
      id="whoami"
    >
      <Terminal folder="about">
        <p>Joelle Voogt</p>
        <p>Front-end Developer with a UX background</p>
      </Terminal>
    </div>
  );
}
