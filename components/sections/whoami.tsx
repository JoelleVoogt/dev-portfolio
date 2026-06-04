import Link from "next/link";
import Image from "next/image";

export default function WhoAmI() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center p-4 gap-14">
      <div className="flex justify-start items-center" id="whoami">
        <div className="flex flex-col justify-start items-center gap-8">
          <Image
            src="/avatar-mobile.png"
            width={116}
            height={116}
            className="block md:hidden border-2 border-green-400"
            alt="Photo of Joelle Voogt"
          />
          <Image
            src="/avatar-desktop.png"
            width={200}
            height={200}
            className="hidden md:block border-2 border-green-400"
            alt="Photo of Joelle Voogt"
          />
          <Image
            src="/joellevoogt-mobile.svg"
            width={355}
            height={54}
            className="block md:hidden"
            alt="ASCII of Joelle Voogt"
          />
          <Image
            src="/joellevoogt-desktop.svg"
            width={760}
            height={132}
            className="hidden md:block"
            alt="ASCII of Joelle Voogt"
          />
        </div>
      </div>
      <div
        className="grid gap-y-3 w-full font-mono text-sm md:text-base"
        style={{ gridTemplateColumns: "96px 56px 1fr" }}
      >
        <span className="text-mist-400 tracking-widest">SYSTEM</span>
        <span className="text-brand-400">[OK]</span>
        <span className="text-white">Portfolio v8.2 loaded</span>

        <span className="text-mist-400 tracking-widest">ROLE</span>
        <span className="text-brand-400">[OK]</span>
        <span className="text-white">Front-end Developer</span>

        <span className="text-mist-400 tracking-widest">STACK</span>
        <span className="text-brand-400">[OK]</span>
        <span className="text-white">HTML, CSS, JavaScript</span>

        <span className="text-mist-400 tracking-widest">CERTIFIED</span>
        <span className="text-brand-400">[OK]</span>
        <span className="text-white">7 years UX/UI</span>

        <span className="text-mist-400 tracking-widest">STATUS</span>
        <span className="text-brand-400">[OK]</span>
        <span className="text-secondary-400">Ready to deploy</span>
      </div>

      <div className="flex items-center gap-2 w-full font-mono text-sm text-brand-400">
        <p>System ready. Scroll to explore.</p>
        <span className="w-3 h-5 bg-brand-400 animate-pulse" />
      </div>
    </div>
  );
}
