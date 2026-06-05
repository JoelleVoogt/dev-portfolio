import Terminal from "@/components/terminal";

export default function Contact() {
  return (
    <div
      className="min-h-screen max-w-5xl w-full mx-auto flex justify-start items-center p-4"
      id="contact"
    >
      <Terminal folder="contact">
        <p className="text-sm text-mist-100 font-mono">Contact</p>
      </Terminal>
    </div>
  );
}
