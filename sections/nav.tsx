import Link from "next/link";

export default function Nav() {
  return (
    <nav className="w-full fixed top-0 left-0 border-b border-b-green-400 bg-background z-50 drop-shadow-[0_0_10px_rgba(0,255,65,0.30)]">
      <div className="flex justify-between max-w-5xl mx-auto p-4">
        <div>
          <Link className="text-sm text-brand-400 font-mono" href="/">
            joellevoogt:~$
          </Link>
        </div>
        <div className="text-sm text-brand-600 font-mono space-x-2 md:space-x-8 flex items-center">
          <Link className="hover:text-brand-400" href="#whoami">
            whoami
          </Link>
          <Link className="hover:text-brand-400" href="#projects">
            projects
          </Link>
          <Link className="hover:text-brand-400" href="#contact">
            contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
