import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-line py-14">
      <div className="container-x flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
        <div className="max-w-sm">
          <Link href="/" className="text-2xl font-black text-white">SM<span className="text-brand">.</span></Link>
          <p className="mt-3 text-sm text-slate-500">Designing and developing premium digital experiences for forward-thinking brands.</p>
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium text-slate-400">
          <Link href="/about" className="hover:text-white">About</Link>
          <Link href="/projects" className="hover:text-white">Projects</Link>
          <Link href="/certificates" className="hover:text-white">Certificates</Link>
          <Link href="/contact" className="hover:text-white">Contact</Link>
        </div>
      </div>
      <p className="container-x mt-10 text-xs font-semibold tracking-widest text-slate-600">
        © {new Date().getFullYear()} SHUBHAM MADANE. ALL RIGHTS RESERVED.
      </p>
    </footer>
  );
}
