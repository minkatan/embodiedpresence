import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import type { Image as SanityImage } from 'sanity'
import { sanityClient } from '@/lib/sanity.client'
import { urlFor } from '@/lib/sanity.image'

export const metadata: Metadata = {
  title: 'Instructors — embodiedpresence',
  description: 'Meet our instructors and their specialties.',
}

type Instructor = {
  _id: string
  name: string
  role?: string
  specialties?: string[]
  slug?: { current: string }
  photo?: SanityImage
  photoAlt?: string
}

async function getInstructors(): Promise<Instructor[]> {
  const query = `*[_type=="instructor"]|order(coalesce(order,100) asc, name asc){
    _id, name, role, specialties, slug,
    "photoAlt": coalesce(photo.alt, name),
    photo
  }`
  return sanityClient.fetch(query)
}

// type guard: only build a URL if the Sanity image has an asset
function hasAsset(img: SanityImage | undefined): img is SanityImage & { asset: unknown } {
  return !!img && 'asset' in img
}

export default async function InstructorPage() {
  const instructors = await getInstructors()

  return (
    <main className="min-h-screen">
      {/* HERO */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 md:py-20">
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl font-semibold leading-tight text-stone-900">
              Meet the instructors
            </h1>
            <p className="mt-3 text-stone-700">
              Private, calm, evidence‑informed coaching. Explore each instructor’s focus areas below.
            </p>
          </div>
        </div>
      </section>

      {/* GRID */}
      <section className="py-12 md:py-16 bg-stone-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {instructors.length === 0 ? (
            <EmptyState />
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {instructors.map((p) => (
                <InstructorCard key={p._id} person={p} />
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  )
}

function InstructorCard({ person }: { person: Instructor }) {
  const src = hasAsset(person.photo)
    ? urlFor(person.photo).width(800).height(1000).fit('crop').url()
    : undefined

  const CardInner = (
    <article
      className="rounded-2xl border border-stone-200 bg-white p-4 shadow-sm transition
                 hover:-translate-y-0.5 hover:shadow-md"
      aria-label={`${person.name}${person.role ? `, ${person.role}` : ''}`}
    >
      <div className="overflow-hidden rounded-xl ring-1 ring-stone-200">
        {src ? (
          <Image
            src={src}
            alt={person.photoAlt || person.name}
            width={800}
            height={1000}
            className="h-64 w-full object-cover"
          />
        ) : (
          <div className="h-64 w-full bg-stone-100" />
        )}
      </div>

      <div className="mt-4">
        <h3 className="text-lg font-semibold text-stone-900">{person.name}</h3>
        {person.role && <p className="text-sm text-stone-600">{person.role}</p>}
        {person.specialties?.length ? (
          <ul className="mt-3 flex flex-wrap gap-2">
            {person.specialties.map((s, i) => (
              <li
                key={i}
                className="rounded-full border border-stone-300 bg-white px-3 py-1 text-xs"
              >
                {s}
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </article>
  )

  return person.slug?.current ? (
    <Link
      href={`/instructor/${person.slug.current}`}
      className="block focus:outline-none focus:ring-2 focus:ring-green-700/40 rounded-2xl"
      aria-label={`View ${person.name}'s profile`}
    >
      {CardInner}
    </Link>
  ) : (
    CardInner
  )
}

function EmptyState() {
  return (
    <div className="rounded-2xl border border-stone-200 bg-white p-8 text-stone-700">
      <p>
        No instructors yet. Visit <code>/studio</code> → “Create new” → <b>Instructor</b> to add your first one.
      </p>
    </div>
  )
}