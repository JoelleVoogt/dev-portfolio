import Image from "next/image";
import SystemBoot from "@/components/systemboot";
import Button from "@/components/button";

export default function Hero() {
  return (
    <div className="font-mono min-h-screen flex flex-col justify-center items-center p-4 gap-8">
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
          <Image
            src="/joellevoogt-mobile.svg"
            width={355}
            height={54}
            className="block md:hidden
            drop-shadow-[0_0_10px_rgba(0,255,65,0.50)]"
            alt="ASCII of Joelle Voogt"
          />
          <Image
            src="/joellevoogt-desktop.svg"
            width={760}
            height={132}
            className="hidden md:block
            drop-shadow-[0_0_10px_rgba(0,255,65,0.50)]"
            alt="ASCII of Joelle Voogt"
          />
        </div>
      </div>
      <div className="grid gap-y-2 md:gap-y-3 w-full text-sm md:text-base grid-cols-[96px_56px_1fr] md:grid-cols-[176px_80px_1fr] drop-shadow-[0_0_10px_rgba(0,255,65,0.30)]">
        <SystemBoot boot="SYSTEM" status="Portfolio v8.2 loaded" delay="0.2s" />
        <SystemBoot boot="ROLE" status="Front-end Developer" delay="0.4s" />
        <SystemBoot boot="STACK" status="HTML, CSS, JavaScript" delay="0.6s" />
        <SystemBoot boot="CERTIFIED" status="7 years UX/UI" delay="0.8s" />
        <SystemBoot
          boot="STATUS"
          status="Ready to deploy"
          statusColor="text-secondary-400"
          delay="1.0s"
        />
      </div>

      <div className="flex items-start gap-2 w-full place-content-between text-sm text-brand-400 drop-shadow-[0_0_10px_rgba(0,255,65,0.30)]">
        <div
          className="flex gap-4 items-center animate-typing"
          style={{ animationDelay: "1.2s" }}
        >
          <p>System ready. Scroll to explore.</p>
          <span className="w-3 h-5 bg-brand-400 animate-pulse " />
        </div>
      </div>
    </div>
  );
}
