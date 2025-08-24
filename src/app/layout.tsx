
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: {
    default: 'embodiedpresence — Pilates & Gyrotonic®',
    template: '%s — embodiedpresence',
  },
  description: 'Calm, private 1:1 Pilates and Gyrotonic® sessions.',
  openGraph: {
    title: 'embodiedpresence — Pilates & Gyrotonic®',
    description: 'Calm, private 1:1 sessions in a nature‑tone studio.',
    url: '/',
    siteName: 'embodiedpresence',
    locale: 'en_US',
    type: 'website',
  },
  robots: { index: true, follow: true },
}
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[var(--background)] text-[var(--foreground)] antialiased`}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}