'use client'
import { useState, useMemo } from 'react'
import Fuse from 'fuse.js'
import { Article } from '@/lib/articles'
import GalleryCard from './GalleryCard'

export default function SearchableArchive({ articles }: { articles: Article[] }) {
  const [query, setQuery] = useState('')

  const fuse = useMemo(() => new Fuse(articles, {
    keys: ['title', 'subject', 'excerpt', 'topics'],
    threshold: 0.3,
  }), [articles])

  const filtered = useMemo(() =>
    query
      ? fuse.search(query).map(r => r.item)
      : [...articles].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()),
    [query, articles, fuse]
  )

  return (
    <div>
      <div className="px-6 md:px-10 py-8 border-b border-border">
        <input
          type="text"
          placeholder="search stories, people, topics..."
          value={query}
          onChange={e => setQuery(e.target.value)}
          className="w-full bg-transparent text-ink font-bold text-xl md:text-2xl placeholder:text-muted/40 focus:outline-none"
        />
      </div>

      <p className="px-6 md:px-10 pt-6 pb-2 text-[11px] text-muted tracking-caps">
        {filtered.length} {filtered.length === 1 ? 'story' : 'stories'}
      </p>

      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border mt-4">
          {filtered.map(article => (
            <GalleryCard key={article.slug} article={article} />
          ))}
        </div>
      ) : (
        <p className="text-muted text-sm px-6 md:px-10 py-16 text-center">
          no stories found for &ldquo;{query}&rdquo;
        </p>
      )}
    </div>
  )
}
