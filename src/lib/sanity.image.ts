import imageUrlBuilder, { type SanityImageSource } from '@sanity/image-url'
import { sanityClient } from './sanity.client'

// Re‑use your configured client so projectId/dataset are correct
const builder = imageUrlBuilder(sanityClient)

export function urlFor(source: SanityImageSource) {
  return builder.image(source)
}