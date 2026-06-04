import Link from "next/link";
import Image from "next/image";

export default function WhoAmI() {
  return (
    <div className="min-h-screen flex justify-start items-center" id="whoami">
      <div className="flex flex-col p-4 justify-start items-center gap-8">
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
  );
}
