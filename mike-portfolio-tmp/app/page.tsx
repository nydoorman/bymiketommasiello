import Nav from '@/components/Nav'
import GalleryCard from '@/components/GalleryCard'
import { articles } from '@/lib/articles'
import Image from 'next/image'

export default function Home() {
  const sorted = [...articles].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  const hero = sorted[0]
  const rest = sorted.slice(1)

  return (
    <>
      <Nav />
      <main className="pt-12">

        {/* Full-bleed hero */}
        <a
          href={hero.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative block w-full h-[70vh] overflow-hidden"
        >
          <Image
            src={hero.image}
            alt={hero.title}
            fill
            sizes="100vw"
            className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
            {hero.subject && (
              <p className="text-[12px] font-bold tracking-caps text-gold mb-2">{hero.subject}</p>
            )}
            <h1 className="font-bold text-cream text-3xl md:text-5xl lg:text-6xl leading-tight max-w-3xl mb-3">
              {hero.title}
            </h1>
            <p className="text-[12px] text-cream/60 tracking-caps">
              {hero.publication} · {new Date(hero.date).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
            </p>
          </div>
        </a>

        {/* Gallery grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {rest.map((article, i) => (
            <GalleryCard key={article.slug} article={article} priority={i < 3} />
          ))}
        </div>

      </main>

      <footer className="border-t border-border px-6 md:px-10 py-6 flex flex-col md:flex-row items-center justify-between gap-3">
        <p className="text-[11px] text-muted tracking-caps">© mike tommasiello</p>
        <div className="flex gap-6">
          <a href="https://coolhunting.com/author/mike-tommasiello/" target="_blank" rel="noopener noreferrer" className="text-[11px] text-muted hover:text-ink transition-colors tracking-caps">cool hunting</a>
          <a href="https://www.surfacemag.com" target="_blank" rel="noopener noreferrer" className="text-[11px] text-muted hover:text-ink transition-colors tracking-caps">surface</a>
        </div>
      </footer>
    </>
  )
}
