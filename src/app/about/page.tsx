import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About — embodiedpresence',
  description:
    'Learn the studio’s approach: private, pain‑aware coaching with Pilates and Gyrotonic® in a nature‑calm space.',
}

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <svg className="absolute -left-16 -top-20 h-[28rem] w-[28rem] opacity-10" viewBox="0 0 200 200" fill="none">
            <path d="M181 71c-24 55-77 88-123 86C12 155-9 110 7 77 24 41 79 16 121 19c34 2 58 22 60 52z" fill="#065f46"/>
          </svg>
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24 relative">
          <div className="grid gap-10 lg:grid-cols-2 items-center">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full border border-stone-200 bg-white/60 px-3 py-1 text-xs text-stone-600 backdrop-blur">
                <span className="h-1.5 w-1.5 rounded-full bg-green-700" /> Our approach
              </p>
              <h1 className="mt-4 text-4xl sm:text-5xl font-semibold leading-tight text-stone-900">
                Calm, private coaching for real bodies.
              </h1>
              <p className="mt-4 text-base sm:text-lg text-stone-700 max-w-prose">
                We combine classical Pilates with the Gyrotonic® Method to help you move with ease,
                decompress joints, and build fluid strength. Sessions are fully 1:1 and tuned to your
                goals, pain history, and nervous system.
              </p>
              <div className="mt-8 flex gap-3">
                <Link href="/contact" className="rounded-xl bg-green-700 px-5 py-3 text-stone-50 font-medium shadow hover:bg-green-800">
                  Book a trial
                </Link>
                <Link href="/pricing" className="rounded-xl border border-stone-300 bg-white px-5 py-3 font-medium hover:border-stone-400">
                  See pricing
                </Link>
              </div>
            </div>

            {/* Studio card */}
            <div className="rounded-3xl bg-white p-6 md:p-8 ring-1 ring-stone-200 shadow-sm">
              <dl className="grid grid-cols-2 gap-6 text-sm">
                <div>
                  <dt className="text-stone-500">Session length</dt>
                  <dd className="mt-1 font-medium text-stone-900">55 minutes</dd>
                </div>
                <div>
                  <dt className="text-stone-500">Focus</dt>
                  <dd className="mt-1 font-medium text-stone-900">Mobility & strength</dd>
                </div>
                <div>
                  <dt className="text-stone-500">Methods</dt>
                  <dd className="mt-1 font-medium text-stone-900">Pilates, Gyrotonic®</dd>
                </div>
                <div>
                  <dt className="text-stone-500">Style</dt>
                  <dd className="mt-1 font-medium text-stone-900">Calm, evidence‑informed</dd>
                </div>
              </dl>
              <p className="mt-6 text-sm text-stone-600">
                Biophilic design, warm wood, soft daylight tones, and gentle sound—so your body can
                down‑regulate and learn better.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BIO */}
      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 md:grid-cols-3 items-start">
            <div className="md:col-span-1">
              <div className="aspect-[4/5] w-full rounded-3xl bg-[url('https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center ring-1 ring-stone-200 shadow" />
            </div>
            <div className="md:col-span-2">
              <h2 className="text-3xl font-semibold text-stone-900">Your teacher</h2>
              <p className="mt-3 text-stone-700">
                I’m a movement coach who blends technical precision with nervous‑system care.
                Expect clear cues, breath‑led pacing, and programs that respect pain and fatigue.
              </p>
              <ul className="mt-6 grid gap-3 text-stone-700">
                <li className="flex items-start gap-3"><span className="mt-1 h-2.5 w-2.5 rounded-full bg-green-700" /> Certified in classical Pilates; Gyrotonic® trained</li>
                <li className="flex items-start gap-3"><span className="mt-1 h-2.5 w-2.5 rounded-full bg-green-700" /> Experience with post‑injury return to movement</li>
                <li className="flex items-start gap-3"><span className="mt-1 h-2.5 w-2.5 rounded-full bg-green-700" /> Emphasis on breath, alignment, and joint decompression</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-16 md:py-24 bg-stone-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold text-stone-900">Studio values</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <ValueCard title="Pain‑aware coaching" desc="We design around your history, sensations, and capacity on the day." />
            <ValueCard title="Calm learning" desc="Low sensory load, clear instructions, restful pacing for better retention." />
            <ValueCard title="Progress you can feel" desc="From breath and posture to daily ease—measurable gains over time." />
          </div>
        </div>
      </section>

      {/* FAQ / NEXT STEPS */}
      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <h3 className="text-2xl font-semibold text-stone-900">What to expect in your first visit</h3>
              <ol className="mt-4 list-decimal pl-5 text-stone-700 space-y-2">
                <li>Quick chat about goals, injuries, and preferences.</li>
                <li>Movement screen and breath work to set a baseline.</li>
                <li>Intro sequence on reformer or Gyrotonic® tower.</li>
                <li>Take‑home tips and next steps.</li>
              </ol>
            </div>
            <div className="rounded-2xl p-6 ring-1 ring-stone-200 bg-stone-50">
              <p className="text-stone-700">
                Ready to start? Book a trial session and we’ll tailor everything for you.
              </p>
              <div className="mt-4 flex gap-3">
                <Link href="/contact" className="rounded-xl bg-green-700 px-5 py-3 text-stone-50 font-medium shadow hover:bg-green-800">
                  Book a trial
                </Link>
                <Link href="/pricing" className="rounded-xl border border-stone-300 bg-white px-5 py-3 font-medium hover:border-stone-400">
                  Pricing & policies
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

/* small local components */
function ValueCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
      <h4 className="text-lg font-semibold text-stone-900">{title}</h4>
      <p className="mt-2 text-stone-700">{desc}</p>
    </div>
  )
}