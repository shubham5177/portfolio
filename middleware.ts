import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";

export async function middleware(request: NextRequest) {
  const session = await auth.api.getSession({ headers: request.headers });
  
  // Protect dashboard route
  if (request.nextUrl.pathname.startsWith('/dashboard') && !session) {
    const url = request.nextUrl.clone();
    url.pathname = '/signin';
    return NextResponse.redirect(url);
  }
  
  // Redirect authenticated users away from auth pages
  if ((request.nextUrl.pathname === '/signin' || request.nextUrl.pathname === '/signup') && session) {
    const url = request.nextUrl.clone();
    url.pathname = '/dashboard';
    return NextResponse.redirect(url);
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard", "/signin", "/signup"],
};