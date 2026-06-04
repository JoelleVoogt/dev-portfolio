import Link from "next/link";

export default function Nav() {
  return (
    <nav className="flex justify-between w-full p-4 fixed top-0 left-0 border-b border-b-green-600 bg-background">
      <div>
        <Link className="text-sm text-green-400 font-mono" href="/">
          joelle:~$
        </Link>
      </div>
      <div className="text-sm text-green-400 font-mono space-x-3 flex items-center">
        <Link href="#whoami">whoami</Link>
        <Link href="#projects">projects</Link>
        <Link href="#contact">contact</Link>
      </div>
    </nav>
  );
}
