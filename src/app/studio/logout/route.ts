import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'

const AUTH_COOKIE = 'studio_auth'

export async function GET(req: Request) {
  cookies().delete(AUTH_COOKIE)
  const url = new URL('/studio/login', req.url)
  return NextResponse.redirect(url)
}