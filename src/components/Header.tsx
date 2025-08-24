import Link from "next/link";

export default function Header() {
    return (
      <header className="sticky top-0 z-40 backdrop-blur bg-stone-50/85 border-b border-stone-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-semibold tracking-wide">
  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-green-700 text-stone-50">EP</span>
  <span>Embodied Presence</span>
</Link>
<nav className="hidden md:flex items-center gap-8 text-sm">
  <Link href="/about" className="hover:text-green-800">About</Link>
  <Link href="/pricing" className="hover:text-green-800">Pricing</Link>
  <Link href="/contact" className="hover:text-green-800">Contact</Link>
</nav>
<Link href="/contact" className="rounded-xl bg-green-700 px-4 py-2 text-stone-50 text-sm font-medium shadow hover:bg-green-800">
  Book 1:1
</Link>
        </div>
      </header>
    );
  }