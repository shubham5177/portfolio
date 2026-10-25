"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/certificates", label: "Certificates" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  function linkClass(href: string) {
    const isActive = href === "/" ? pathname === href : pathname.startsWith(href);
    return `flex min-h-11 items-center text-sm font-medium transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-glow ${
      isActive ? "text-white" : "text-slate-400"
    }`;
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line/80 bg-ink/85 shadow-lg shadow-black/10 backdrop-blur-xl">
      <div className="container-x flex min-h-16 items-center justify-between gap-4 sm:min-h-20">
        <Link
          href="/"
          aria-label="Shubham Madane home"
          onClick={() => setMenuOpen(false)}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand text-sm font-black text-white transition-transform hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-glow"
        >
          SM
        </Link>
        <nav aria-label="Main navigation" className="hidden items-center gap-7 lg:flex">
          {links.map((l) => (
            <Link key={l.href} href={l.href} aria-current={pathname === l.href ? "page" : undefined} className={linkClass(l.href)}>
              {l.label}
            </Link>
          ))}
        </nav>
        <Link href="/contact" className="btn-primary hidden !px-5 !py-2.5 sm:inline-flex">
          Let&apos;s talk <span aria-hidden="true" className="ml-2">↗</span>
        </Link>
        <button
          type="button"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-line bg-panel text-white transition hover:border-brand/60 hover:bg-white/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-glow lg:hidden"
        >
          <span className="sr-only">{menuOpen ? "Close menu" : "Open menu"}</span>
          <span className="flex w-5 flex-col gap-1.5" aria-hidden="true">
            <span className={`h-0.5 w-full rounded bg-current transition-transform ${menuOpen ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`h-0.5 w-full rounded bg-current transition-opacity ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`h-0.5 w-full rounded bg-current transition-transform ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`} />
          </span>
        </button>
      </div>
      <nav
        id="mobile-navigation"
        aria-label="Mobile navigation"
        className={`grid overflow-hidden border-t border-line/70 transition-[grid-template-rows,opacity] duration-300 ease-out lg:hidden ${
          menuOpen ? "grid-rows-[1fr] opacity-100" : "pointer-events-none grid-rows-[0fr] opacity-0"
        }`}
        aria-hidden={!menuOpen}
      >
        <div className="min-h-0">
          <div className="container-x grid gap-1 py-3">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                aria-current={pathname === l.href ? "page" : undefined}
                tabIndex={menuOpen ? 0 : -1}
                onClick={() => setMenuOpen(false)}
                className={`${linkClass(l.href)} rounded-xl px-3 hover:bg-white/5`}
              >
                {l.label}
              </Link>
            ))}
            <Link href="/contact" tabIndex={menuOpen ? 0 : -1} onClick={() => setMenuOpen(false)} className="btn-primary mt-2 w-full">
              Let&apos;s talk <span aria-hidden="true" className="ml-2">↗</span>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
