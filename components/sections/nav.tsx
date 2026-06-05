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
        <div className="text-sm text-brand-400 font-mono gap-4 md:gap-8 flex items-center">
          <Link className="nav-link" href="#whoami">
            whoami
          </Link>
          <Link className="nav-link" href="#projects">
            projects
          </Link>
          <Link className="nav-link" href="#contact">
            contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
