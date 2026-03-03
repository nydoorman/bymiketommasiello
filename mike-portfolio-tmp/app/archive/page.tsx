import Nav from '@/components/Nav'
import SearchableArchive from '@/components/SearchableArchive'
import { articles } from '@/lib/articles'

export const metadata = {
  title: 'archive — mike tommasiello',
  description: 'all stories by mike tommasiello',
}

export default function Archive() {
  return (
    <>
      <Nav />
      <main className="pt-12">
        <div className="px-6 md:px-10 pt-12 pb-2">
          <h1 className="font-bold text-4xl md:text-6xl text-cream">archive</h1>
        </div>
        <SearchableArchive articles={articles} />
      </main>

      <footer className="border-t border-white/10 px-6 md:px-10 py-6 flex flex-col md:flex-row items-center justify-between gap-3 mt-8">
        <p className="text-[11px] text-muted tracking-caps">© mike tommasiello</p>
        <div className="flex gap-6">
          <a href="https://coolhunting.com/author/mike-tommasiello/" target="_blank" rel="noopener noreferrer" className="text-[11px] text-muted hover:text-cream transition-colors tracking-caps">cool hunting</a>
          <a href="https://www.surfacemag.com" target="_blank" rel="noopener noreferrer" className="text-[11px] text-muted hover:text-cream transition-colors tracking-caps">surface</a>
        </div>
      </footer>
    </>
  )
}
