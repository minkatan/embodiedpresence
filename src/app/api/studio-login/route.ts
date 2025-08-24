import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'

const AUTH_COOKIE = 'studio_auth'

export async function POST(req: Request) {
  const form = await req.formData()
  const password = String(form.get('password') || '')
  const next = String(form.get('next') || '/studio')
  const expected = process.env.STUDIO_PASSWORD

  if (!expected) {
    return new NextResponse('Studio password not configured.', { status: 500 })
  }

  if (password !== expected) {
    const url = new URL('/studio/login', req.url)
    url.searchParams.set('error', '1')
    if (next) url.searchParams.set('next', next)
    return NextResponse.redirect(url)
  }

  const isProd = process.env.NODE_ENV === 'production'
  cookies().set(AUTH_COOKIE, 'ok', {
    httpOnly: true,
    secure: isProd,
    sameSite: 'lax',
    path: '/',
    maxAge: 60 * 60 * 8, // 8 hours
  })

  return NextResponse.redirect(new URL(next, req.url))
}