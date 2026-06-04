import Link from "next/link";

export default function Nav() {
  return (
    <nav className="flex justify-between w-full p-4 fixed top-0 left-0 border-b border-b-green-600">
      <div>
        <Link className="text-md text-green-400" href="/">
          joellevoogt:~$
        </Link>
      </div>
      <div className="space-x-3 text-green-400">
        <Link className="text-md" href="#whoami">
          whoami
        </Link>
        <Link className="text-md" href="#projects">
          projects
        </Link>
        <Link className="text-md" href="#contact">
          contact
        </Link>
      </div>
    </nav>
  );
}
