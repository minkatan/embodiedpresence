import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { sanityClient } from '@/lib/sanity.client'
import { urlFor } from '@/lib/sanity.image'
import type { Image as SanityImage } from 'sanity'

type Params = { params: { slug: string } }
type Instructor = {
  name: string
  role?: string
  specialties?: string[]
  bio?: string
  photo?: SanityImage
  photoAlt?: string
}

/* -------- Static params for build-time SSG (optional; fine to keep) -------- */
export async function generateStaticParams() {
  const slugs: { slug: { current: string } }[] = await sanityClient.fetch(
    `*[_type=="instructor" && defined(slug.current)]{ slug }`
  )
  return slugs.map((s) => ({ slug: s.slug.current }))
}

/* ------------------------------- Metadata ---------------------------------- */
export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'
  const data: Instructor | null = await sanityClient.fetch(
    `*[_type=="instructor" && slug.current==$slug][0]{
      name, role, bio, photo, "photoAlt": coalesce(photo.alt,name)
    }`,
    { slug: params.slug }
  )

  if (!data) {
    return {
      title: 'Instructor not found — embodiedpresence',
      description: 'Instructor profile not found',
      robots: { index: false, follow: false },
    }
  }

  const ogImg = data.photo
    ? urlFor(data.photo).width(1200).height(630).fit('crop').url()
    : undefined

  const title = `${data.name} — Instructor`
  const description =
    data.bio?.slice(0, 140) ||
    `${data.role || 'Instructor'} at embodiedpresence`

  return {
    title,
    description,
    alternates: { canonical: `${base}/instructor/${params.slug}` },
    openGraph: {
      title,
      description,
      url: `${base}/instructor/${params.slug}`,
      type: 'profile',
      siteName: 'embodiedpresence',
      images: ogImg ? [{ url: ogImg, width: 1200, height: 630, alt: data.photoAlt || data.name }] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ogImg ? [ogImg] : [],
    },
  }
}

/* --------------------------------- Page ------------------------------------ */
export default async function InstructorDetail({ params }: Params) {
  const person: (Instructor & { specialties: string[] }) | null =
    await sanityClient.fetch(
      `*[_type=="instructor" && slug.current==$slug][0]{
        name, role, specialties, bio, photo, "photoAlt": coalesce(photo.alt,name)
      }`,
      { slug: params.slug }
    )

  if (!person) return notFound()

  const img = person.photo
    ? urlFor(person.photo).width(1200).height(1500).fit('crop').url()
    : undefined

  const base = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: person.name,
    jobTitle: person.role || 'Instructor',
    description: person.bio || undefined,
    url: `${base}/instructor/${params.slug}`,
    image: img,
  }

  return (
    <main className="min-h-screen">
      {/* Breadcrumbs */}
      <nav aria-label="Breadcrumb" className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3">
          <ol className="flex items-center gap-2 text-sm text-stone-600">
            <li>
              <Link href="/" className="hover:underline">Home</Link>
            </li>
            <li aria-hidden>›</li>
            <li>
              <Link href="/instructor" className="hover:underline">Instructors</Link>
            </li>
            <li aria-hidden>›</li>
            <li className="text-stone-800 font-medium" aria-current="page">
              {person.name}
            </li>
          </ol>
        </div>
      </nav>

      {/* Profile */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 md:py-20 grid gap-10 md:grid-cols-3">
          <div className="md:col-span-1">
            <div className="overflow-hidden rounded-3xl ring-1 ring-stone-200">
              {img ? (
                <Image
                  src={img}
                  alt={person.photoAlt || person.name}
                  width={1200}
                  height={1500}
                  className="h-auto w-full object-cover"
                  priority
                />
              ) : (
                <div className="h-80 bg-stone-100" />
              )}
            </div>
          </div>

          <div className="md:col-span-2">
            <h1 className="text-4xl font-semibold text-stone-900">{person.name}</h1>
            {person.role && <p className="mt-1 text-stone-600">{person.role}</p>}

            {person.specialties?.length ? (
              <ul className="mt-4 flex flex-wrap gap-2">
                {person.specialties.map((s, i) => (
                  <li key={i} className="rounded-full border border-stone-300 bg-white px-3 py-1 text-xs">
                    {s}
                  </li>
                ))}
              </ul>
            ) : null}

            {person.bio && (
              <p className="mt-6 text-stone-700 max-w-prose">{person.bio}</p>
            )}

            <div className="mt-8">
              <Link
                href="/contact?topic=trial"
                className="inline-flex rounded-xl bg-green-700 px-5 py-3 text-stone-50 font-medium shadow hover:bg-green-800"
              >
                Book a 1:1 Trial
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* JSON-LD for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </main>
  )
}