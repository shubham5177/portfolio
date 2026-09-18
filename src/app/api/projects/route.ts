import { NextResponse } from 'next/server'
import { auth } from '@/lib/auth'
import { projects } from '@/lib/data/projects'

export async function GET(request: Request) {
  const session = await auth.api.getSession({ headers: request.headers })

  if (!session?.user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  return NextResponse.json({ projects })
}