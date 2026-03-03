import Nav from '@/components/Nav'

export default function About() {
  return (
    <>
      <Nav />
      <main className="pt-24 pb-20 px-6 md:px-10 max-w-2xl mx-auto">
        <h1 className="text-[11px] font-bold tracking-caps text-gold mb-10">about</h1>

        <p className="text-xl md:text-2xl leading-relaxed text-ink mb-12">
          Mike Tommasiello is a New York-based writer and creative strategist whose work explores the intersection of culture, craft, and commerce. He contributes features and interviews to Surface Magazine, Cool Hunting and others, profiling creatives and industry titans across fashion, food, culture, sports and design. When he&apos;s not writing, he runs No.9, a creative agency specializing in social strategy and experiential partnerships.
        </p>

        <a
          href="mailto:tommasiello.m@me.com?subject=Pitch"
          className="inline-block text-[12px] font-bold tracking-caps border border-ink text-ink px-6 py-3 hover:bg-ink hover:text-cream transition-colors duration-200"
        >
          contact me
        </a>

        <div className="mt-16 pt-8 border-t border-border flex gap-8">
          <a href="https://instagram.com/nydoorman" target="_blank" rel="noopener noreferrer"
            className="text-[11px] font-semibold tracking-caps text-muted hover:text-ink transition-colors">
            instagram
          </a>
          <a href="https://threads.net/nydoorman" target="_blank" rel="noopener noreferrer"
            className="text-[11px] font-semibold tracking-caps text-muted hover:text-ink transition-colors">
            threads
          </a>
          <a href="https://coolhunting.com/author/mike-tommasiello/" target="_blank" rel="noopener noreferrer"
            className="text-[11px] font-semibold tracking-caps text-muted hover:text-ink transition-colors">
            cool hunting
          </a>
          <a href="https://www.surfacemag.com" target="_blank" rel="noopener noreferrer"
            className="text-[11px] font-semibold tracking-caps text-muted hover:text-ink transition-colors">
            surface
          </a>
        </div>
      </main>
    </>
  )
}
