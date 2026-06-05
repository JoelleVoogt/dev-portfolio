import Link from "next/link";
import Image from "next/image";
import Terminal from "@/components/sections/terminal";

export default function WhoAmI() {
  return (
    <div
      className="min-h-screen max-w-5xl w-full mx-auto flex justify-start items-center p-4"
      id="whoami"
    >
      <Terminal folder="about">
        <p className="text-sm text-mist-100 font-mono">Joelle Voogt</p>
        <p className="text-sm text-mist-100 font-mono">
          Front-end Developer with a UX background
        </p>
      </Terminal>
    </div>
  );
}
