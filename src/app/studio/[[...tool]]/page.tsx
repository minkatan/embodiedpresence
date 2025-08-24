'use client'

import dynamic from 'next/dynamic'
import config from '../../../../sanity.config'

// Either NextStudio (wrapper) …
const NextStudio = dynamic(
  () => import('next-sanity/studio').then((m) => m.NextStudio),
  { ssr: false }
)

// …or the core Sanity Studio component:
// const Studio = dynamic(() => import('sanity').then((m) => m.Studio), { ssr: false })

export default function StudioPage() {
  return <NextStudio config={config} />
  // return <Studio config={config} />  // if you chose the core component above
}