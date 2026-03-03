import Nav from '@/components/Nav'

export default function About() {
  return (
    <>
      <Nav />
      <main className="pt-24 pb-20 px-6 md:px-10 max-w-2xl mx-auto">
        <h1 className="text-[11px] font-bold tracking-caps text-gold mb-10">about</h1>

        <p className="text-xl md:text-2xl leading-relaxed text-ink mb-16">
          Mike Tommasiello is a New York-based writer and creative strategist whose work explores the intersection of culture, craft, and commerce. He contributes features and interviews to Surface Magazine, Cool Hunting and others, profiling creatives and industry titans across fashion, food, culture, sports and design. When he&apos;s not writing, he co-runs No.9 Agency, a creative agency, where he specializes in social strategy and experiential luxury partnerships.
        </p>

        <div className="border-t border-border pt-10">
          <p className="text-[11px] font-bold tracking-caps text-gold mb-6">contact me</p>
          <div className="flex flex-col gap-4">
            <a
              href="mailto:tommasiello.m@me.com?subject=Pitch"
              className="group flex items-center justify-between border border-border px-5 py-4 hover:border-ink transition-colors"
            >
              <span className="text-[13px] font-semibold tracking-caps text-ink">email</span>
              <span className="text-[12px] text-muted group-hover:text-ink transition-colors">tommasiello.m@me.com</span>
            </a>
            <a
              href="https://instagram.com/nydoorman"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between border border-border px-5 py-4 hover:border-ink transition-colors"
            >
              <span className="text-[13px] font-semibold tracking-caps text-ink">instagram</span>
              <span className="text-[12px] text-muted group-hover:text-ink transition-colors">@nydoorman</span>
            </a>
            <a
              href="https://threads.net/nydoorman"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between border border-border px-5 py-4 hover:border-ink transition-colors"
            >
              <span className="text-[13px] font-semibold tracking-caps text-ink">threads</span>
              <span className="text-[12px] text-muted group-hover:text-ink transition-colors">@nydoorman</span>
            </a>
          </div>
        </div>
      </main>
    </>
  )
}
