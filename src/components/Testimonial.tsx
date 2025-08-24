type Props = {
    quote: string
    author: string
    role?: string
  }
  
  export default function Testimonial({ quote, author, role }: Props) {
    return (
      <section className="py-12">
        <div
          className="mx-auto max-w-4xl rounded-3xl border p-8 md:p-12"
          style={{ background: 'white' }}
        >
          <svg
            aria-hidden
            viewBox="0 0 24 24"
            className="mb-4 h-6 w-6 opacity-40"
            fill="currentColor"
          >
            <path d="M7.17 6A5.17 5.17 0 0 0 2 11.17V22h8.27V11.17A5.17 5.17 0 0 0 5.1 6H7.17Zm12 0A5.17 5.17 0 0 0 14 11.17V22h8.27V11.17A5.17 5.17 0 0 0 17.1 6h2.07Z" />
          </svg>
          <blockquote className="text-xl leading-relaxed tracking-tight">
            “{quote}”
          </blockquote>
          <div className="mt-6 text-sm text-[var(--muted)]">
            <span className="font-medium text-[color:var(--ink)]">{author}</span>
            {role ? ` — ${role}` : null}
          </div>
        </div>
      </section>
    )
  }