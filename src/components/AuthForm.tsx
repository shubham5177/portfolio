"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function AuthForm({ mode }: { mode: "signin" | "signup" }) {
  const router = useRouter();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const isUp = mode === "signup";

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");
    const data = Object.fromEntries(new FormData(e.currentTarget));
    const res = await fetch(`/api/${mode}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    const json = await res.json().catch(() => ({}));
    setLoading(false);
    if (!res.ok) return setError(json.error || "Something went wrong. Try again.");
    router.push("/dashboard");
    router.refresh();
  }

  return (
    <div className="relative flex min-h-[calc(100vh-5rem)] items-center justify-center px-6 py-16">
      <div className="glow pointer-events-none absolute inset-0" />
      <div className="card relative w-full max-w-md">
        <h1 className="text-3xl font-black text-white">{isUp ? "Create your account" : "Welcome back"}</h1>
        <p className="mt-2 text-sm text-slate-500">
          {isUp ? "Sign up to access your dashboard." : "Sign in to open your dashboard."}
        </p>
        <form onSubmit={onSubmit} className="mt-8 space-y-5">
          {isUp && (
            <div>
              <label className="label" htmlFor="name">Full name</label>
              <input id="name" name="name" required className="field" placeholder="Shubham Madane" />
            </div>
          )}
          <div>
            <label className="label" htmlFor="email">Email</label>
            <input id="email" name="email" type="email" required className="field" placeholder="you@example.com" />
          </div>
          <div>
            <label className="label" htmlFor="password">Password</label>
            <input id="password" name="password" type="password" required minLength={isUp ? 8 : 1} className="field" placeholder={isUp ? "At least 8 characters" : "Your password"} />
          </div>
          {error && <p role="alert" className="rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300">{error}</p>}
          <button disabled={loading} className="btn-primary w-full disabled:opacity-60">
            {loading ? "Please wait…" : isUp ? "Create account" : "Sign in"}
          </button>
        </form>
        <p className="mt-6 text-center text-sm text-slate-500">
          {isUp ? "Already have an account? " : "New here? "}
          <Link href={isUp ? "/signin" : "/signup"} className="font-semibold text-brand-soft hover:text-white">
            {isUp ? "Sign in" : "Create an account"}
          </Link>
        </p>
      </div>
    </div>
  );
}
