import Link from "next/link";
import { getSession } from "@/lib/auth";
import SignOutButton from "./SignOutButton";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/certificates", label: "Certificates" },
  { href: "/contact", label: "Contact" },
];

export default async function Navbar() {
  const session = await getSession();
  const visibleLinks = session ? [...links, { href: "/dashboard", label: "Dashboard" }] : links;
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-ink/80 backdrop-blur-xl">
      <div className="container-x flex h-20 items-center justify-between gap-4">
        <Link href="/" className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand text-sm font-black text-white">SM</Link>
        <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
          {visibleLinks.map((l) => (
            <Link key={l.href} href={l.href} className="text-slate-400 transition hover:text-white">{l.label}</Link>
          ))}
        </nav>
        <div className="flex items-center gap-3 text-sm font-semibold">
          {session && <SignOutButton />}
        </div>
      </div>
      <nav className="container-x flex gap-6 overflow-x-auto pb-3 text-sm md:hidden">
        {visibleLinks.map((l) => (
          <Link key={l.href} href={l.href} className="whitespace-nowrap text-slate-400 hover:text-white">{l.label}</Link>
        ))}
      </nav>
    </header>
  );
}
