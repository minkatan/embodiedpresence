import { ReactNode } from 'react'
export default function Section({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <section className={`mx-auto max-w-5xl p-6 ${className}`}>{children}</section>
}