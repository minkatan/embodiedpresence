import Link from 'next/link'
import type { Route } from 'next'            // ← add this

type CTA = { label: string; href: Route }    // ← make href a Route (internal link only)

export default function Hero({
  eyebrow = 'embodiedpresence',
  title,
  subtitle,
  ctaPrimary,
  ctaSecondary,
}: {
  eyebrow?: string
  title: string
  subtitle?: string
  ctaPrimary?: CTA
  ctaSecondary?: CTA
}) {
  return (
    <section className="border-b bg-white/60 backdrop-blur">
      <div className="mx-auto grid max-w-6xl items-center gap-10 p-8 md:grid-cols-2">
        <div>
          <p className="text-xs uppercase tracking-widest text-[var(--muted)]">{eyebrow}</p>
          <h1 className="mt-2 text-5xl font-semibold leading-tight tracking-tight">{title}</h1>
          {subtitle && (
            <p className="mt-4 max-w-xl text-[15px] leading-7 text-[var(--muted)]">{subtitle}</p>
          )}
          <div className="mt-6 flex flex-wrap gap-3">
            {ctaPrimary && (
              <Link href={ctaPrimary.href} className="rounded-xl border px-4 py-2 text-sm hover:bg-neutral-50">
                {ctaPrimary.label}
              </Link>
            )}
            {ctaSecondary && (
              <Link href={ctaSecondary.href} className="rounded-xl border px-4 py-2 text-sm hover:bg-neutral-50">
                {ctaSecondary.label}
              </Link>
            )}
          </div>
        </div>
        {/* ... right column ... */}
      </div>
    </section>
  )
}