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
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10 h-14 bg-cream/90 backdrop-blur-sm border-b border-border">
      <Link href="/" className="flex flex-col leading-none group">
        <span className="text-[9px] font-semibold tracking-[0.3em] text-gold uppercase group-hover:text-gold/70 transition-colors">by</span>
        <span className="text-[15px] font-bold tracking-[0.12em] text-ink group-hover:text-gold transition-colors">mike tommasiello</span>
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
