import type { Metadata } from 'next'
import ContactPageClient from './ContactPageClient'  // client component

export const metadata: Metadata = {
  title: 'Contact — embodiedpresence',
  description:
    'Book a private Pilates or Gyrotonic® session, ask a question, or request guidance on where to start.',
}

export default function ContactPage() {
  // Server Component — can export metadata
  return <ContactPageClient />
}