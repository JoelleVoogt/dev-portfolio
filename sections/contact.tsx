import Link from "next/link";
import Image from "next/image";
import Terminal from "@/components/sections/terminal";

export default function Contact() {
  return (
    <div
      className="min-h-screen max-w-5xl w-full mx-auto flex justify-start items-center p-4"
      id="contact"
    >
      <Terminal folder="about">
        <p>Contact</p>
      </Terminal>
    </div>
  );
}
