import Nav from '@/components/Nav'
import Link from 'next/link'
import { allTopics, articles } from '@/lib/articles'

export const metadata = {
  title: 'topics — mike tommasiello',
}

export default function Topics() {
  return (
    <>
      <Nav />
      <main className="pt-12 px-6 md:px-10">
        <div className="pt-12 pb-10 border-b border-border">
          <h1 className="font-bold text-4xl md:text-6xl text-ink">topics</h1>
        </div>

        <div className="py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {allTopics.map(topic => {
            const count = articles.filter(a => a.topics.includes(topic)).length
            const preview = articles.find(a => a.topics.includes(topic))

            return (
              <Link
                key={topic}
                href={`/topics/${encodeURIComponent(topic)}`}
                className="group relative bg-cream overflow-hidden block aspect-[3/2]"
              >
                {/* Background image from first matching article */}
                {preview && (
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url(${preview.image})` }}
                  />
                )}

                {/* Overlay */}
                <div className="absolute inset-0 bg-ink/50 group-hover:bg-ink/60 transition-colors duration-300" />

                {/* Label */}
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <h2 className="font-bold text-cream text-2xl md:text-3xl leading-tight">
                    {topic}
                  </h2>
                  <p className="text-[11px] text-cream/60 tracking-caps mt-1">
                    {count} {count === 1 ? 'story' : 'stories'}
                  </p>
                </div>
              </Link>
            )
          })}
        </div>
      </main>

      <footer className="border-t border-border px-6 md:px-10 py-6 flex justify-between items-center">
        <p className="text-[11px] text-muted tracking-caps">© mike tommasiello</p>
      </footer>
    </>
  )
}
