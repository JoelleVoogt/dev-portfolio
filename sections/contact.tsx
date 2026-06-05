import Link from "next/link";
import Terminal from "@/components/terminal";
import Concatenate from "@/components/concatenate";

export default function Contact() {
  return (
    <div
      className="font-mono min-h-screen max-w-5xl w-full mx-auto flex justify-start items-center p-4"
      id="contact"
    >
      <Terminal folder="contact">
        <Concatenate folderLocation="cat ./links.txt" />
        <p className="text-surface-400">// Let's connect</p>
      </Terminal>
    </div>
  );
}
