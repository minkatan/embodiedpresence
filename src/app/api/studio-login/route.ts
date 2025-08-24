// src/app/api/studio-login/route.ts
import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'

const AUTH_COOKIE = 'studio_auth'
const EXPECTED = process.env.STUDIO_PASSWORD || ''

export async function POST(req: Request) {
  try {
    const { password } = await req.json()
    if (!password) {
      return NextResponse.json({ ok: false, error: 'Missing password' }, { status: 400 })
    }
    if (password !== EXPECTED) {
      return NextResponse.json({ ok: false, error: 'Invalid password' }, { status: 401 })
    }

    // ⬅️ Next 15: await the cookie store, then set
    const jar = await cookies()
    const isProd = process.env.NODE_ENV === 'production'
    jar.set(AUTH_COOKIE, 'ok', {
      httpOnly: true,
      secure: isProd,
      sameSite: 'lax',
      path: '/',
      maxAge: 60 * 60 * 24 * 7, // 7 days
    })

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('studio-login error', err)
    return NextResponse.json({ ok: false, error: 'Server error' }, { status: 500 })
  }
}