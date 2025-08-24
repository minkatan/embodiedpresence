import imageUrlBuilder from '@sanity/image-url'
import type { Image } from 'sanity'
import { sanityClient } from './sanity.client'

const builder = imageUrlBuilder(sanityClient)
export function urlFor(src: Image | any) {
  return builder.image(src)
}