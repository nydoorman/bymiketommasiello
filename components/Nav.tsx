'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Nav() {
  const path = usePathname()

  const links = [
    { href: '/archive', label: 'archive' },
    { href: '/topics', label: 'topics' },
    { href: '/about', label: 'about' },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10 h-12 bg-cream/90 backdrop-blur-sm border-b border-border">
      <Link href="/" className="text-[13px] font-bold tracking-caps text-ink hover:text-gold transition-colors">
        mike tommasiello
      </Link>
      <div className="flex items-center gap-6">
        {links.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={`text-[12px] font-semibold tracking-caps transition-colors ${
              path.startsWith(href) ? 'text-gold' : 'text-muted hover:text-ink'
            }`}
          >
            {label}
          </Link>
        ))}
        <a href="https://instagram.com/nydoorman" target="_blank" rel="noopener noreferrer"
          className="text-[12px] font-semibold tracking-caps text-muted hover:text-ink transition-colors">
          ig
        </a>
        <a href="https://threads.net/nydoorman" target="_blank" rel="noopener noreferrer"
          className="text-[12px] font-semibold tracking-caps text-muted hover:text-ink transition-colors">
          threads
        </a>
      </div>
    </nav>
  )
}
