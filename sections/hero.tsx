import Image from "next/image";
import SystemBoot from "@/components/systemboot";
import Button from "@/components/button";

export default function Hero() {
  return (
    <div
      id="hero"
      className="font-mono min-h-screen flex flex-col justify-center items-center p-4 gap-8"
    >
      <div className="flex justify-start items-center">
        <div className="flex flex-col md:flex-row justify-start items-center gap-8">
          <Image
            src="/avatar-mobile.png"
            width={160}
            height={160}
            className="block md:hidden border-2 border-green-400 rounded-sm shadow-brand"
            alt="Photo of Joelle Voogt"
          />
          <Image
            src="/avatar-desktop.png"
            width={200}
            height={200}
            className="hidden md:block border-2 border-green-400 rounded-sm shadow-brand"
            alt="Photo of Joelle Voogt"
          />
          <img
            src="/joellevoogt-mobile.svg"
            width={355}
            height={54}
            className="block md:hidden
            drop-shadow-[0_0_10px_rgba(0,255,65,0.50)]"
            alt="ASCII of Joelle Voogt"
          />
          <img
            src="/joellevoogt-desktop.svg"
            width={760}
            height={132}
            className="hidden md:block
            drop-shadow-[0_0_10px_rgba(0,255,65,0.50)]"
            alt="ASCII of Joelle Voogt"
          />
        </div>
      </div>
      <div className="grid gap-y-2 md:gap-y-3 w-full text-sm md:text-base grid-cols-[104px_56px_1fr] md:grid-cols-[176px_80px_1fr] drop-shadow-[0_0_10px_rgba(0,255,65,0.30)]">
        <SystemBoot boot="ROL" status="Front-end Developer" delay="0.2s" />
        <SystemBoot
          boot="STACK"
          status="Next.js, React, TypeScript, Tailwind"
          delay="0.4s"
        />
        <SystemBoot boot="ACHTERGROND" status="7 jaar UX/UI" delay="0.6s" />
        <SystemBoot boot="EXPERTISE" status="WCAG 2.2" delay="0.8s" />
        <SystemBoot
          boot="KRACHT"
          status="Design als fundament onder de stap naar code"
          statusColor="text-secondary-400"
          delay="1.0s"
        />
      </div>

      <div className="flex items-start gap-2 w-full place-content-between text-brand-400 text-glow-brand text-base">
        <div
          className="flex gap-3 items-center animate-typing"
          style={{ animationDelay: "1.2s" }}
        >
          <div className="flex flex-col w-full max-w-4xl">
            {/* <p>System ready. Scroll to explore.</p> */}
            <p>
              Ik bouw toegankelijke, schaalbare interfaces, gedragen door een
              heldere architectuur
            </p>
          </div>
          <span
            className="w-[1.1ch] h-[1.3em] bg-brand-400 glow-brand animate-blink "
            style={{ animationDelay: "1.2s", animationFillMode: "backwards" }}
          />
        </div>
      </div>
    </div>
  );
}
