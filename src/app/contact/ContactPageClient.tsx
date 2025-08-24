'use client'

import { useState } from 'react'
import Link from 'next/link'

/** ── EDITABLE COPY ───────────────────────── */
const content = {
  heroTitle: "Let’s get you moving",
  heroSubtitle:
    "Tell us a little about your goals and body history. We’ll reply with times and next steps.",
  sidebarTitle: "Prefer to chat?",
  sidebarBody:
    "Send us a quick note and we’ll reply with available times. We can also hop on a short call if you like.",
  bullets: [
    "1:1 private sessions",
    "Pain-aware, evidence-informed",
    "Calm, nature-tone studio",
  ],
  ctaSeePricing: "See pricing",
  consentText: "I agree to be contacted about my inquiry.",
  successText: "Thanks! We’ll get back to you shortly.",
  errorText:
    "Please complete all required fields (valid email, message ≥ 5 chars, consent).",

  phone: "+60 …",
  email: "hello@embodiedpresence…",
  address: "Street, City",
  whatsapp: "https://wa.me/60xxxxxxxxx",
}
/** ───────────────────────────────────────── */

type Status = 'idle' | 'sending' | 'ok' | 'error'

export default function ContactPageClient() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [topic, setTopic] = useState<'trial' | 'pilates' | 'gyrotonic' | 'question'>('trial')
  const [message, setMessage] = useState('')
  const [agree, setAgree] = useState(false)
  const [status, setStatus] = useState<Status>('idle')

  const validEmail = (v: string) => /\S+@\S+\.\S+/.test(v)

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!name || !validEmail(email) || message.trim().length < 5 || !agree) {
      setStatus('error')
      return
    }
    setStatus('sending')
  
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, phone, topic, message }),
      })
      const json = await res.json()
      if (!res.ok || !json.ok) throw new Error(json.error || 'Bad response')
      setStatus('ok')
    } catch (err) {
      console.error(err)
      setStatus('error')
    }
  }
  
  return (
    <main className="min-h-screen">
      {/* HERO */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 md:py-20">
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl font-semibold leading-tight text-stone-900">
              {content.heroTitle}
            </h1>
            {content.heroSubtitle && (
              <p className="mt-3 text-stone-700">{content.heroSubtitle}</p>
            )}
          </div>
        </div>
      </section>

      {/* FORM + SIDEBAR */}
      <section className="py-12 md:py-16 bg-stone-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 md:grid-cols-3">
            {/* Form */}
            <div className="md:col-span-2">
              <form
                onSubmit={onSubmit}
                className="rounded-2xl border border-stone-200 bg-white p-6 md:p-8 shadow-sm"
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-sm text-stone-600">Name</label>
                    <input
                      className="mt-1 w-full rounded-xl border border-stone-300 bg-white p-3 focus:outline-none focus:ring-2 focus:ring-green-700/40"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-stone-600">Email</label>
                    <input
                      className="mt-1 w-full rounded-xl border border-stone-300 bg-white p-3 focus:outline-none focus:ring-2 focus:ring-green-700/40"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@email.com"
                      type="email"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-sm text-stone-600">Phone (optional)</label>
                    <input
                      className="mt-1 w-full rounded-xl border border-stone-300 bg-white p-3 focus:outline-none focus:ring-2 focus:ring-green-700/40"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+60 …"
                      inputMode="tel"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-sm text-stone-600">I’m interested in</label>
                    <div className="mt-2 grid grid-cols-2 gap-2 sm:grid-cols-4">
                      <RadioPill label="Trial" active={topic==='trial'} onClick={() => setTopic('trial')} />
                      <RadioPill label="Pilates" active={topic==='pilates'} onClick={() => setTopic('pilates')} />
                      <RadioPill label="Gyrotonic®" active={topic==='gyrotonic'} onClick={() => setTopic('gyrotonic')} />
                      <RadioPill label="Question" active={topic==='question'} onClick={() => setTopic('question')} />
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-sm text-stone-600">
                      Message (goals, injuries, preferences)
                    </label>
                    <textarea
                      className="mt-1 w-full rounded-2xl border border-stone-300 bg-white p-3 focus:outline-none focus:ring-2 focus:ring-green-700/40"
                      rows={6}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Tell us what you need help with…"
                    />
                  </div>
                </div>

                <div className="mt-4 flex items-start gap-3">
                  <input
                    id="agree"
                    type="checkbox"
                    checked={agree}
                    onChange={(e) => setAgree(e.target.checked)}
                    className="mt-1 h-4 w-4 rounded border-stone-300 text-green-700 focus:ring-green-700/40"
                  />
                  <label htmlFor="agree" className="text-sm text-stone-700">
                    {content.consentText}
                  </label>
                </div>

                <div className="mt-6 flex items-center gap-4">
                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="rounded-xl bg-green-700 px-5 py-3 text-stone-50 font-medium shadow hover:bg-green-800 disabled:opacity-60"
                  >
                    {status === 'sending' ? 'Sending…' : 'Send message'}
                  </button>
                  {status === 'error' && (
                    <p className="text-sm text-red-600">{content.errorText}</p>
                  )}
                  {status === 'ok' && (
                    <p className="text-sm text-green-700">{content.successText}</p>
                  )}
                </div>
              </form>
            </div>

            {/* Sidebar */}
            <aside className="md:col-span-1">
              <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
                <h2 className="text-lg font-semibold text-stone-900">
                  {content.sidebarTitle}
                </h2>
                {content.sidebarBody && (
                  <p className="mt-2 text-sm text-stone-700">{content.sidebarBody}</p>
                )}

                <ul className="mt-4 grid gap-2 text-sm text-stone-700">
                  {content.bullets.map((b, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-green-700" /> {b}
                    </li>
                  ))}
                </ul>

                <div className="mt-4 flex flex-wrap gap-3">
                  <Link
                    href="/pricing"
                    className="inline-flex rounded-xl border border-stone-300 bg-white px-4 py-2 text-sm font-medium hover:border-stone-400"
                  >
                    {content.ctaSeePricing}
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  )
}

/* tiny local component */
function RadioPill({
  label, active, onClick,
}: { label: string; active: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={[
        'rounded-full px-3 py-2 text-sm border transition',
        active
          ? 'border-green-700 bg-green-50 text-green-900'
          : 'border-stone-300 bg-white hover:border-stone-400',
      ].join(' ')}
    >
      {label}
    </button>
  )
}