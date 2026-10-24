import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { createUser, findUserByEmail } from "@/lib/db";
import { COOKIE, cookieOptions, createToken } from "@/lib/auth";

export async function POST(req: Request) {
  const body = await req.json().catch(() => ({}));
  const name = String(body.name ?? "").trim();
  const email = String(body.email ?? "").trim().toLowerCase();
  const password = String(body.password ?? "");

  if (name.length < 2) return NextResponse.json({ error: "Enter your full name." }, { status: 400 });
  if (!/^\S+@\S+\.\S+$/.test(email)) return NextResponse.json({ error: "Enter a valid email address." }, { status: 400 });
  if (password.length < 8) return NextResponse.json({ error: "Password must be at least 8 characters." }, { status: 400 });

  const exists = await findUserByEmail(email);
  if (exists) return NextResponse.json({ error: "An account with this email already exists." }, { status: 409 });

  const user = await createUser({
    name,
    email,
    password: await bcrypt.hash(password, 10),
  });

  const res = NextResponse.json({ ok: true });
  res.cookies.set(COOKIE, await createToken({ id: user.id, name: user.name, email: user.email }), cookieOptions);
  return res;
}
