"use client";
import { useRouter } from "next/navigation";

export default function SignOutButton() {
  const router = useRouter();
  async function out() {
    await fetch("/api/signout", { method: "POST" });
    router.push("/");
    router.refresh();
  }
  return (
    <button onClick={out} className="rounded-full border border-line px-5 py-2.5 text-slate-200 transition hover:bg-white/10">
      Sign Out
    </button>
  );
}
