import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const PROTECTED_PREFIX = '/studio'
const LOGIN_PATH = '/studio/login'
const LOGOUT_PATH = '/studio/logout'
const AUTH_COOKIE = 'studio_auth'

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl

  // Only protect /studio and children; allow /studio/login and /studio/logout
  if (!pathname.startsWith(PROTECTED_PREFIX)) return
  if (pathname.startsWith(LOGIN_PATH) || pathname.startsWith(LOGOUT_PATH)) return

  const expected = process.env.STUDIO_PASSWORD
  if (!expected) {
    return new NextResponse('Studio password not configured.', { status: 500 })
  }

  const authed = req.cookies.get(AUTH_COOKIE)?.value === 'ok'
  if (authed) return NextResponse.next()

  const url = req.nextUrl.clone()
  url.pathname = LOGIN_PATH
  url.searchParams.set('next', pathname)
  return NextResponse.redirect(url)
}

export const config = {
  matcher: ['/studio/:path*'],
}