// src/app/studio/login/page.tsx
'use client'

import { Suspense, useState } from 'react'
import { useSearchParams } from 'next/navigation'

function LoginInner() {
  const searchParams = useSearchParams()
  const [show, setShow] = useState(false)
  const next = searchParams.get('next') || '/studio'
  const error = searchParams.get('error') === '1'

  return (
    <main className="min-h-screen grid place-items-center bg-stone-50 px-4">
      <form
        method="POST"
        action="/api/studio-login"
        className="w-full max-w-sm rounded-2xl border border-stone-200 bg-white p-6 shadow-sm"
      >
        <h1 className="text-xl font-semibold text-stone-900">Enter Studio password</h1>
        <p className="mt-1 text-sm text-stone-600">Studio is private. Please enter the access password.</p>

        <input type="hidden" name="next" value={next} />

        <div className="mt-4">
          <label className="block text-sm text-stone-600">Password</label>
          <div className="mt-1 flex rounded-xl border border-stone-300 focus-within:ring-2 focus-within:ring-green-700/40">
            <input
              className="flex-1 rounded-l-xl bg-white p-3 outline-none"
              name="password"
              type={show ? 'text' : 'password'}
              placeholder="••••••••"
            />
            <button
              type="button"
              onClick={() => setShow((s) => !s)}
              className="rounded-r-xl px-3 text-sm text-stone-600 hover:text-stone-800"
              aria-label={show ? 'Hide password' : 'Show password'}
            >
              {show ? 'Hide' : 'Show'}
            </button>
          </div>
        </div>

        {error && <p className="mt-3 text-sm text-red-600">Wrong password. Please try again.</p>}

        <div className="mt-6">
          <button
            type="submit"
            className="w-full rounded-xl bg-green-700 px-5 py-3 text-stone-50 font-medium shadow hover:bg-green-800"
          >
            Enter Studio
          </button>
        </div>
      </form>
    </main>
  )
}

export default function StudioLoginPage() {
  return (
    <Suspense fallback={null}>
      <LoginInner />
    </Suspense>
  )
}

// Optional: avoid pre-render assumptions
export const dynamic = 'force-dynamic'