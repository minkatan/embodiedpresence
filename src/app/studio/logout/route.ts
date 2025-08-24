import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'

const AUTH_COOKIE = 'studio_auth'

export async function POST() {
  const jar = await cookies()          // ⬅️ Next 15: cookies() is a Promise
  jar.delete(AUTH_COOKIE)              // now it's a CookieStore with .delete()
  return NextResponse.json({ ok: true })
}