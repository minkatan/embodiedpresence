import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Pricing — embodiedpresence',
  description: 'Transparent 1:1 Pilates and Gyrotonic® pricing with simple packs and policies.',
}

export default function PricingPage() {
  return (
    <main className="min-h-screen">
      {/* HERO */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 md:py-20">
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl font-semibold leading-tight text-stone-900">
              Simple, transparent pricing
            </h1>
            <p className="mt-3 text-stone-700">
              All sessions are private (55 minutes). First‑time trial available. Packs never over‑complicate things.
            </p>
          </div>
        </div>
      </section>

      {/* CORE PRICING */}
      <section className="py-12 md:py-16 bg-stone-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-3">
            <PriceCard
              title="First‑time Trial"
              price="RM60"
              per="/session"
              detail="One private session to experience our approach."
              ctaLabel="Book Trial"
              featured={false}
            />
            <PriceCard
              title="1:1 Pilates"
              price="RM95"
              per="/session"
              detail="Classical reformer • mat • small apparatus."
              ctaLabel="Book Now"
              featured
            />
            <PriceCard
              title="Gyrotonic® Private"
              price="RM110"
              per="/session"
              detail="Tower & Pulley • spiral mobility • decompression."
              ctaLabel="Book Now"
              featured={false}
            />
          </div>

          <p className="mt-6 text-sm text-stone-600">
            Need guidance on which option fits your goals or injury history?{' '}
            <Link href="/contact" className="font-medium text-green-800 hover:underline">
              Message us
            </Link>{' '}
            and we’ll help you pick.
          </p>
        </div>
      </section>

      {/* PACKS */}
      <section className="py-12 md:py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold text-stone-900">Packs</h2>
            <p className="mt-2 text-stone-700">
              Save when you commit. Packs are flexible and easy to schedule.
            </p>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <PackCard
              title="5‑Pack (Pilates)"
              price="RM450"
              per="(RM90/session)"
              bullets={[
                'Valid 3 months',
                'Reschedule up to 24h before',
                'Personalized program',
              ]}
            />
            <PackCard
              title="10‑Pack (Pilates)"
              price="RM850"
              per="(RM85/session)"
              bullets={[
                'Valid 6 months',
                'Priority slots',
                'Progress check‑ins',
              ]}
            />
            <PackCard
              title="5‑Pack (Gyrotonic®)"
              price="RM520"
              per="(RM104/session)"
              bullets={[
                'Valid 3 months',
                'Breath‑led sequencing',
                'Spine & joint decompression',
              ]}
            />
            <PackCard
              title="10‑Pack (Gyrotonic®)"
              price="RM990"
              per="(RM99/session)"
              bullets={[
                'Valid 6 months',
                'Priority slots',
                'Progress check‑ins',
              ]}
            />
          </div>
        </div>
      </section>

      {/* POLICIES */}
      <section className="py-12 md:py-16 bg-stone-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-stone-200 bg-white p-6 md:p-8 shadow-sm">
            <h3 className="text-2xl font-semibold text-stone-900">Policies</h3>
            <dl className="mt-6 grid gap-6 md:grid-cols-2 text-sm">
              <div>
                <dt className="text-stone-500">Rescheduling</dt>
                <dd className="mt-1 text-stone-700">Please reschedule at least 24 hours before your session.</dd>
              </div>
              <div>
                <dt className="text-stone-500">Expiration</dt>
                <dd className="mt-1 text-stone-700">5‑packs valid 3 months; 10‑packs valid 6 months from purchase.</dd>
              </div>
              <div>
                <dt className="text-stone-500">Payments</dt>
                <dd className="mt-1 text-stone-700">Cashless preferred. Receipts available upon request.</dd>
              </div>
              <div>
                <dt className="text-stone-500">Accessibility</dt>
                <dd className="mt-1 text-stone-700">If you have pain or mobility needs, message us before booking.</dd>
              </div>
            </dl>
            <p className="mt-6 text-sm text-stone-600">
              Questions?{' '}
              <Link href="/contact" className="font-medium text-green-800 hover:underline">
                Contact us
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-8 md:grid-cols-2">
            <div>
              <h3 className="text-3xl font-semibold text-stone-900">Ready to move better?</h3>
              <p className="mt-3 text-stone-700">
                Book a first‑time trial or message us for a quick consult. We’ll tailor a plan for your goals.
              </p>
              <div className="mt-6 flex gap-3">
                <Link
                  href="/contact"
                  className="rounded-xl bg-green-700 px-5 py-3 text-stone-50 font-medium shadow hover:bg-green-800"
                >
                  Book now
                </Link>
                <Link
                  href="/about"
                  className="rounded-xl border border-stone-300 bg-white px-5 py-3 font-medium hover:border-stone-400"
                >
                  Learn more
                </Link>
              </div>
            </div>
            <div className="rounded-2xl p-6 ring-1 ring-stone-200 bg-stone-50">
              <p className="text-sm text-stone-600">
                Prefer online scheduling and payments? We can add Calendly/Setmore + Stripe later.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

/* ===== Local components (kept here so we don't touch the rest of your project) ===== */

function PriceCard({
  title,
  price,
  per,
  detail,
  ctaLabel,
  featured,
}: {
  title: string
  price: string
  per: string
  detail: string
  ctaLabel: string
  featured?: boolean
}) {
  const base =
    'rounded-2xl p-6 border shadow-sm flex flex-col bg-stone-50 border-stone-200'
  const onFeatured = featured
    ? 'ring-1 ring-green-700 bg-green-50 border-green-700'
    : ''
  return (
    <div className={[base, onFeatured].join(' ')}>
      {featured && <p className="text-xs font-medium text-green-900">Most popular</p>}
      <h3 className="mt-1 text-xl font-semibold text-stone-900">{title}</h3>
      <div className="mt-4 flex items-baseline gap-1">
        <span className="text-4xl font-semibold text-stone-900">{price}</span>
        <span className="text-stone-600">{per}</span>
      </div>
      <p className="mt-2 text-sm text-stone-700">{detail}</p>
      <Link
        href="/contact"
        className={[
          'mt-6 inline-flex rounded-xl px-4 py-2 text-sm font-medium w-fit',
          featured
            ? 'bg-green-700 text-stone-50 hover:bg-green-800'
            : 'bg-stone-900 text-stone-50 hover:bg-stone-800',
        ].join(' ')}
      >
        {ctaLabel}
      </Link>
    </div>
  )
}

function PackCard({
  title,
  price,
  per,
  bullets,
}: {
  title: string
  price: string
  per: string
  bullets: string[]
}) {
  return (
    <div className="rounded-2xl border border-stone-200 bg-stone-50 p-6 shadow-sm">
      <div className="flex items-baseline justify-between">
        <h3 className="text-xl font-semibold text-stone-900">{title}</h3>
        <div className="text-right">
          <div className="text-3xl font-semibold text-stone-900">{price}</div>
          <div className="text-xs text-stone-600">{per}</div>
        </div>
      </div>
      <ul className="mt-4 grid gap-2 text-sm text-stone-700">
        {bullets.map((b, i) => (
          <li key={i} className="flex items-start gap-2">
            <span className="mt-1 h-2 w-2 rounded-full bg-green-700" /> {b}
          </li>
        ))}
      </ul>
      <Link
        href="/contact"
        className="mt-6 inline-flex rounded-xl border border-stone-300 bg-white px-4 py-2 text-sm font-medium hover:border-stone-400"
      >
        Ask about this pack
      </Link>
    </div>
  )
}