import Image from 'next/image'
import { Article } from '@/lib/articles'

interface GalleryCardProps {
  article: Article
  priority?: boolean
}

export default function GalleryCard({ article, priority = false }: GalleryCardProps) {
  return (
    <a
      href={article.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block overflow-hidden bg-border aspect-[4/3]"
    >
      <Image
        src={article.image}
        alt={article.title}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        priority={priority}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Text on hover */}
      <div className="absolute inset-0 flex flex-col justify-end p-5 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
        {article.subject && (
          <p className="text-[11px] font-bold tracking-caps text-gold mb-1.5">
            {article.subject}
          </p>
        )}
        <h3 className="font-bold text-cream text-base md:text-lg leading-tight mb-1.5">
          {article.title}
        </h3>
        <p className="text-[11px] text-cream/60 tracking-caps">
          {article.publication} · {article.date.slice(0, 4)}
        </p>
      </div>
    </a>
  )
}
