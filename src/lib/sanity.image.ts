import imageUrlBuilder from '@sanity/image-url'
import type { Image, ImageAsset, Reference } from 'sanity'
import { sanityClient } from './sanity.client'

// A safe “source” union that covers common Sanity image shapes
type SanityImageSource =
  | Image
  | ImageAsset
  | Reference
  | { _ref: string }
  | { asset: { _ref: string } }
  | { asset: { _id: string } }

const builder = imageUrlBuilder(sanityClient)

export function urlFor(source: SanityImageSource) {
  return builder.image(source)
}