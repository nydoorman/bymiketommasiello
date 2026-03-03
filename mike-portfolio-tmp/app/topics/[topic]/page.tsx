import Nav from '@/components/Nav'
import GalleryCard from '@/components/GalleryCard'
import Link from 'next/link'
import { articles, allTopics } from '@/lib/articles'
import { notFound } from 'next/navigation'

export function generateStaticParams() {
  return allTopics.map(topic => ({ topic: encodeURIComponent(topic) }))
}

export function generateMetadata({ params }: { params: { topic: string } }) {
  const topic = decodeURIComponent(params.topic)
  return { title: `${topic} — mike tommasiello` }
}

export default function TopicPage({ params }: { params: { topic: string } }) {
  const topic = decodeURIComponent(params.topic)
  const filtered = articles
    .filter(a => a.topics.includes(topic))
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  if (!allTopics.includes(topic)) notFound()

  return (
    <>
      <Nav />
      <main className="pt-12">
        <div className="px-6 md:px-10 pt-12 pb-6 border-b border-border flex items-end justify-between">
          <div>
            <Link href="/topics" className="text-[11px] text-muted tracking-caps hover:text-ink transition-colors mb-3 inline-block">
              ← topics
            </Link>
            <h1 className="font-bold text-4xl md:text-6xl text-ink">{topic}</h1>
          </div>
          <p className="text-[11px] text-muted tracking-caps pb-1">
            {filtered.length} {filtered.length === 1 ? 'story' : 'stories'}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border mt-px">
          {filtered.map((article, i) => (
            <GalleryCard key={article.slug} article={article} priority={i < 3} />
          ))}
        </div>
      </main>

      <footer className="border-t border-border px-6 md:px-10 py-6 flex justify-between items-center mt-8">
        <p className="text-[11px] text-muted tracking-caps">© mike tommasiello</p>
      </footer>
    </>
  )
}
