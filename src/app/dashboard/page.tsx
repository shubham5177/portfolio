import { redirect } from "next/navigation";
import { getSession } from "@/lib/auth";
import { countUsers, findRecentMessages } from "@/lib/db";

export const dynamic = "force-dynamic";

export default async function Dashboard() {
  const session = await getSession();
  if (!session) redirect("/signin");

  const isAdmin = session.email === (process.env.ADMIN_EMAIL || "").toLowerCase();
  const messages = await findRecentMessages(isAdmin ? undefined : session.email);
  const users = isAdmin ? await countUsers() : null;

  return (
    <div className="container-x py-16">
      <p className="text-sm font-semibold text-brand-soft">Dashboard</p>
      <h1 className="mt-2 text-4xl font-black text-white">Welcome, {session.name}.</h1>
      <p className="mt-2 text-slate-400">{session.email}</p>

      <div className="mt-10 grid gap-6 sm:grid-cols-3">
        <div className="card !p-6"><p className="text-sm text-slate-500">{isAdmin ? "All messages" : "Your messages"}</p><p className="mt-1 text-3xl font-black text-white">{messages.length}</p></div>
        {isAdmin && <div className="card !p-6"><p className="text-sm text-slate-500">Registered users</p><p className="mt-1 text-3xl font-black text-white">{users}</p></div>}
        <div className="card !p-6"><p className="text-sm text-slate-500">Role</p><p className="mt-1 text-3xl font-black text-white">{isAdmin ? "Admin" : "Member"}</p></div>
      </div>

      <h2 className="mt-14 text-2xl font-black text-white">{isAdmin ? "Inbox" : "Messages you sent"}</h2>
      {messages.length === 0 ? (
        <p className="card mt-6 text-slate-400">No messages yet. Use the Contact page to send one.</p>
      ) : (
        <ul className="mt-6 space-y-4">
          {messages.map((m) => (
            <li key={m.id} className="card !p-6">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-bold text-white">{m.subject}</h3>
                <time className="text-xs text-slate-500">{m.createdAt.toLocaleString("en-IN")}</time>
              </div>
              {isAdmin && <p className="mt-1 text-sm text-brand-soft">{m.name} · {m.email}</p>}
              <p className="mt-3 whitespace-pre-wrap text-slate-400">{m.message}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
