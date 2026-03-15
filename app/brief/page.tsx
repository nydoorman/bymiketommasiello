'use client'

import { useState } from 'react'
import Link from 'next/link'

const mockBrief = {
  brand: 'maison soleil',
  category: 'fashion & luxury',
  vibe: 'quiet, considered, precise',
  sections: [
    {
      number: '01',
      label: 'brand snapshot',
      content: `maison soleil is a new york-based luxury lifestyle brand operating at the intersection of fashion, interiors, and considered objects. it doesn't chase trends and doesn't need to — the work is too specific for that. founded on the premise that the most valuable things you own should be the hardest to explain to someone who doesn't already get it, maison soleil has quietly accumulated a following that reads more like a private list than a customer base.`,
    },
    {
      number: '02',
      label: 'audience',
      content: null,
      personas: [
        {
          name: 'the editor',
          age: '28–42',
          lifestyle: 'works in fashion, media, or creative direction. owns fewer things than most people but each one is a decision. follows studios, not influencers. subscribes to apartamento.',
          platforms: 'instagram (curated, rarely posts), are.na (actively), substack (reads three, forwards one).',
        },
        {
          name: 'the collector',
          age: '38–55',
          lifestyle: 'high-income, low-noise. buys once and keeps it for twenty years. doesn\'t follow brands — discovers them through people they trust. has a tailor.',
          platforms: 'instagram (passive), word of mouth is the primary channel. email newsletter if the brand earns it.',
        },
      ],
    },
    {
      number: '03',
      label: 'tone of voice',
      content: null,
      adjectives: ['precise', 'unhurried', 'intelligent', 'dry', 'confident'],
      sounds: [
        { type: 'sounds like', text: 'a caption that trusts the image to do most of the work.' },
        { type: 'sounds like', text: 'a designer who answers "why did you make this?" in one sentence.' },
        { type: 'never sounds like', text: 'a brand explaining why it\'s elevated.' },
      ],
    },
    {
      number: '04',
      label: 'content pillars',
      content: null,
      pillars: [
        {
          name: 'the object',
          description: 'individual products treated as subjects — their materials, their making, the decisions behind them.',
          idea: 'a weekly single-image post: one object, shot flat or in-hand, one line of copy that names one specific detail about how it was made. nothing else.',
        },
        {
          name: 'the reference',
          description: 'what the brand looks at — art, architecture, film, furniture. the aesthetic intelligence behind the work.',
          idea: 'a "currently" post: one image from outside the brand — a still, a building, a painting — with one sentence on why it matters to the work. no further explanation.',
        },
        {
          name: 'the process',
          description: 'behind the work without romanticizing it. material selection, production, the friction of making something correctly.',
          idea: 'a short video series: 60 seconds, no voiceover, no music. one step in the production of one product. let the craft speak.',
        },
        {
          name: 'the life',
          description: 'how the objects live in real spaces, on real people — not styled, not directed.',
          idea: 'customer object portraits: one customer, one maison soleil piece, shot in their own space. a brief written exchange about how they found it.',
        },
      ],
    },
    {
      number: '05',
      label: 'platform play',
      content: null,
      platforms: [
        {
          name: 'instagram',
          why: 'the primary visual record of the brand. where the aesthetic is established and protected.',
          format: 'feed: slow, considered, no trend-chasing. every post earns its place. reels: process content only — no talking heads. stories: behind the scenes, material arrivals, studio moments.',
        },
        {
          name: 'threads',
          why: 'the brand voice without the visual pressure. the opportunity to demonstrate intelligence in short form.',
          format: 'one-sentence observations about craft, taste, and the industry. dry, specific, never promotional. reads like a person you would want to follow.',
        },
        {
          name: 'email',
          why: 'the highest-value channel for the collector audience. owned, direct, and treated like correspondence.',
          format: 'monthly. not a newsletter — a letter. one thing the brand is thinking about, one object, one recommendation from outside the brand. no discount codes. ever.',
        },
      ],
    },
    {
      number: '06',
      label: '30-day roadmap',
      content: null,
      weeks: [
        {
          week: 'week 1',
          theme: 'the object, up close',
          direction: 'lead with material and craft. introduce the work through its details before introducing the brand. let people discover what this is before you tell them.',
        },
        {
          week: 'week 2',
          theme: 'what we look at',
          direction: 'references and influences. show the aesthetic intelligence behind the brand without narrating it. one image per day, one line. nothing more.',
        },
        {
          week: 'week 3',
          theme: 'how it\'s made',
          direction: 'process content. raw, unpolished, honest. the friction of making something correctly. this is the week that builds real trust.',
        },
        {
          week: 'week 4',
          theme: 'the people who found it',
          direction: 'customer stories. real spaces, real use, no styling direction. the brand in the world, not in a studio.',
        },
      ],
    },
    {
      number: '07',
      label: 'the signature idea',
      content: `"the long list" — a quarterly post, published on the first day of each season, that lists every material, reference, place, person, and object that shaped the collection. no context, no explanation. just the list. forty to sixty items, one per line. it rewards the people who already know what they're looking at, and it makes everyone else want to be one of those people. it becomes the most-saved post of the quarter every time it runs. it's the content equivalent of the brand itself: specific, confident, and not for everyone.`,
    },
  ],
}

export default function BriefPage() {
  const [showForm, setShowForm] = useState(false)
  const [showOutput, setShowOutput] = useState(false)
  const [formData, setFormData] = useState({ brand: '', category: '', vibe: '' })

  const handleGenerate = (e: React.FormEvent) => {
    e.preventDefault()
    setShowOutput(true)
    setTimeout(() => {
      document.getElementById('output')?.scrollIntoView({ behavior: 'smooth' })
    }, 100)
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#0A0A0A', color: '#FAFAF8' }}>

      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10 h-14 border-b" style={{ backgroundColor: 'rgba(10,10,10,0.92)', borderColor: '#1F1F1F', backdropFilter: 'blur(8px)' }}>
        <Link href="/" className="flex flex-col leading-none group">
          <span className="text-[9px] font-semibold tracking-[0.3em] uppercase transition-colors" style={{ color: '#C8A96E' }}>by</span>
          <span className="text-[15px] font-bold tracking-[0.12em] transition-colors" style={{ color: '#FAFAF8' }}>mike tommasiello</span>
        </Link>
        <div className="flex items-center gap-6">
          {[{ href: '/archive', label: 'archive' }, { href: '/topics', label: 'topics' }, { href: '/about', label: 'about' }].map(({ href, label }) => (
            <Link key={href} href={href} className="text-[12px] font-semibold tracking-[0.08em] transition-colors" style={{ color: '#6B6B6B' }}>
              {label}
            </Link>
          ))}
          <Link href="/brief" className="text-[12px] font-semibold tracking-[0.08em]" style={{ color: '#C8A96E' }}>
            the brief
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-24 px-6 md:px-10 max-w-3xl">
        <p className="text-[11px] font-bold tracking-[0.3em] uppercase mb-8" style={{ color: '#C8A96E' }}>by mike tommasiello</p>
        <h1 className="text-5xl md:text-7xl font-bold tracking-[-0.02em] leading-[1.0] mb-8" style={{ color: '#FAFAF8' }}>
          the social<br />strategy brief.
        </h1>
        <p className="text-[15px] mb-12" style={{ color: '#6B6B6B' }}>
          enter a brand. get a complete strategy.<br />
          <span style={{ color: '#C8A96E' }}>$49.</span>
        </p>
        <button
          onClick={() => { setShowForm(true); setTimeout(() => document.getElementById('form')?.scrollIntoView({ behavior: 'smooth' }), 100) }}
          className="text-[13px] font-semibold tracking-[0.1em] px-8 py-4 border transition-all duration-200"
          style={{ borderColor: '#C8A96E', color: '#FAFAF8', backgroundColor: 'transparent' }}
          onMouseEnter={e => { (e.target as HTMLElement).style.backgroundColor = '#C8A96E'; (e.target as HTMLElement).style.color = '#0A0A0A' }}
          onMouseLeave={e => { (e.target as HTMLElement).style.backgroundColor = 'transparent'; (e.target as HTMLElement).style.color = '#FAFAF8' }}
        >
          generate a brief →
        </button>
      </section>

      {/* What's inside */}
      <section className="px-6 md:px-10 pb-24 border-t" style={{ borderColor: '#1F1F1F' }}>
        <div className="max-w-3xl pt-16">
          <p className="text-[11px] font-bold tracking-[0.3em] uppercase mb-10" style={{ color: '#6B6B6B' }}>what's inside</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-6">
            {['brand snapshot', 'audience personas', 'tone of voice', 'content pillars', 'platform play', '30-day roadmap', 'the signature idea'].map((item, i) => (
              <div key={item} className="flex items-baseline gap-4">
                <span className="text-[10px] font-bold tabular-nums" style={{ color: '#C8A96E' }}>0{i + 1}</span>
                <span className="text-[13px] tracking-[0.05em]" style={{ color: '#FAFAF8' }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      {showForm && (
        <section id="form" className="px-6 md:px-10 pb-24 border-t" style={{ borderColor: '#1F1F1F' }}>
          <div className="max-w-xl pt-16">
            <p className="text-[11px] font-bold tracking-[0.3em] uppercase mb-10" style={{ color: '#6B6B6B' }}>generate your brief</p>
            <form onSubmit={handleGenerate} className="flex flex-col gap-8">
              <div className="flex flex-col gap-2">
                <label className="text-[11px] font-bold tracking-[0.2em] uppercase" style={{ color: '#6B6B6B' }}>brand name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. nydoorman"
                  value={formData.brand}
                  onChange={e => setFormData({ ...formData, brand: e.target.value })}
                  className="bg-transparent border px-4 py-3 text-[14px] outline-none transition-colors"
                  style={{ borderColor: '#2A2A2A', color: '#FAFAF8' }}
                  onFocus={e => (e.target.style.borderColor = '#C8A96E')}
                  onBlur={e => (e.target.style.borderColor = '#2A2A2A')}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[11px] font-bold tracking-[0.2em] uppercase" style={{ color: '#6B6B6B' }}>category</label>
                <select
                  required
                  value={formData.category}
                  onChange={e => setFormData({ ...formData, category: e.target.value })}
                  className="bg-transparent border px-4 py-3 text-[14px] outline-none appearance-none"
                  style={{ borderColor: '#2A2A2A', color: formData.category ? '#FAFAF8' : '#6B6B6B', backgroundColor: '#0A0A0A' }}
                >
                  <option value="" style={{ backgroundColor: '#0A0A0A' }}>select a category</option>
                  {['restaurant & hospitality', 'fashion & luxury', 'consumer goods', 'entertainment', 'tech', 'other'].map(c => (
                    <option key={c} value={c} style={{ backgroundColor: '#0A0A0A', color: '#FAFAF8' }}>{c}</option>
                  ))}
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[11px] font-bold tracking-[0.2em] uppercase" style={{ color: '#6B6B6B' }}>vibe</label>
                <input
                  type="text"
                  placeholder="3 words that describe the brand"
                  value={formData.vibe}
                  onChange={e => setFormData({ ...formData, vibe: e.target.value })}
                  className="bg-transparent border px-4 py-3 text-[14px] outline-none transition-colors"
                  style={{ borderColor: '#2A2A2A', color: '#FAFAF8' }}
                  onFocus={e => (e.target.style.borderColor = '#C8A96E')}
                  onBlur={e => (e.target.style.borderColor = '#2A2A2A')}
                />
                <p className="text-[11px]" style={{ color: '#3A3A3A' }}>how would you describe the brand in 3 words?</p>
              </div>
              <div className="flex flex-col gap-3">
                <button
                  type="submit"
                  className="text-[13px] font-semibold tracking-[0.1em] px-8 py-4 border transition-all duration-200 text-left"
                  style={{ borderColor: '#C8A96E', color: '#FAFAF8', backgroundColor: 'transparent' }}
                  onMouseEnter={e => { (e.target as HTMLElement).style.backgroundColor = '#C8A96E'; (e.target as HTMLElement).style.color = '#0A0A0A' }}
                  onMouseLeave={e => { (e.target as HTMLElement).style.backgroundColor = 'transparent'; (e.target as HTMLElement).style.color = '#FAFAF8' }}
                >
                  generate brief →
                </button>
                <p className="text-[11px]" style={{ color: '#3A3A3A' }}>$49 per brief · payment after preview</p>
              </div>
            </form>
          </div>
        </section>
      )}

      {/* Output */}
      {showOutput && (
        <section id="output" className="px-6 md:px-10 pb-32 border-t" style={{ borderColor: '#1F1F1F' }}>
          <div className="max-w-2xl pt-16">
            <div className="flex items-baseline justify-between mb-12">
              <div>
                <p className="text-[11px] font-bold tracking-[0.3em] uppercase mb-2" style={{ color: '#6B6B6B' }}>the brief</p>
                <p className="text-[22px] font-bold" style={{ color: '#FAFAF8' }}>{mockBrief.brand}</p>
                <p className="text-[12px] mt-1" style={{ color: '#6B6B6B' }}>{mockBrief.category} · {mockBrief.vibe}</p>
              </div>
            </div>

            <div className="flex flex-col gap-16">
              {mockBrief.sections.map((section) => (
                <div key={section.number} className="border-t pt-10" style={{ borderColor: '#1F1F1F' }}>
                  <div className="flex items-baseline gap-4 mb-6">
                    <span className="text-[11px] font-bold tabular-nums" style={{ color: '#C8A96E' }}>{section.number}</span>
                    <span className="text-[11px] font-bold tracking-[0.2em] uppercase" style={{ color: '#6B6B6B' }}>{section.label}</span>
                  </div>

                  {section.content && (
                    <p className="text-[15px] leading-relaxed" style={{ color: '#FAFAF8' }}>{section.content}</p>
                  )}

                  {section.personas && (
                    <div className="flex flex-col gap-8">
                      {section.personas.map(p => (
                        <div key={p.name}>
                          <p className="text-[13px] font-bold mb-1" style={{ color: '#C8A96E' }}>{p.name} · {p.age}</p>
                          <p className="text-[14px] leading-relaxed mb-2" style={{ color: '#FAFAF8' }}>{p.lifestyle}</p>
                          <p className="text-[12px]" style={{ color: '#6B6B6B' }}>{p.platforms}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  {section.adjectives && (
                    <div className="flex flex-col gap-6">
                      <div className="flex flex-wrap gap-3">
                        {section.adjectives.map(a => (
                          <span key={a} className="text-[12px] font-bold tracking-[0.1em] px-3 py-1 border" style={{ borderColor: '#2A2A2A', color: '#FAFAF8' }}>{a}</span>
                        ))}
                      </div>
                      <div className="flex flex-col gap-3">
                        {section.sounds?.map((s, i) => (
                          <div key={i} className="flex gap-3">
                            <span className="text-[11px] font-bold tracking-[0.1em] shrink-0 pt-0.5" style={{ color: s.type === 'sounds like' ? '#C8A96E' : '#6B6B6B' }}>{s.type}</span>
                            <p className="text-[14px] leading-relaxed" style={{ color: '#FAFAF8' }}>{s.text}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {section.pillars && (
                    <div className="flex flex-col gap-8">
                      {section.pillars.map((p, i) => (
                        <div key={p.name}>
                          <p className="text-[11px] font-bold tracking-[0.1em] uppercase mb-1" style={{ color: '#C8A96E' }}>pillar {i + 1} — {p.name}</p>
                          <p className="text-[14px] leading-relaxed mb-2" style={{ color: '#FAFAF8' }}>{p.description}</p>
                          <p className="text-[13px] leading-relaxed pl-4 border-l" style={{ color: '#6B6B6B', borderColor: '#2A2A2A' }}>{p.idea}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  {section.platforms && (
                    <div className="flex flex-col gap-8">
                      {section.platforms.map(p => (
                        <div key={p.name}>
                          <p className="text-[13px] font-bold mb-1" style={{ color: '#C8A96E' }}>{p.name}</p>
                          <p className="text-[12px] mb-2" style={{ color: '#6B6B6B' }}>{p.why}</p>
                          <p className="text-[14px] leading-relaxed" style={{ color: '#FAFAF8' }}>{p.format}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  {section.weeks && (
                    <div className="flex flex-col gap-8">
                      {section.weeks.map(w => (
                        <div key={w.week}>
                          <p className="text-[11px] font-bold tracking-[0.1em] uppercase mb-1" style={{ color: '#C8A96E' }}>{w.week} — {w.theme}</p>
                          <p className="text-[14px] leading-relaxed" style={{ color: '#FAFAF8' }}>{w.direction}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="flex items-center gap-8 mt-16 pt-10 border-t" style={{ borderColor: '#1F1F1F' }}>
              <button
                className="text-[13px] font-semibold tracking-[0.1em] px-8 py-4 border transition-all duration-200"
                style={{ borderColor: '#C8A96E', color: '#FAFAF8', backgroundColor: 'transparent' }}
                onMouseEnter={e => { (e.target as HTMLElement).style.backgroundColor = '#C8A96E'; (e.target as HTMLElement).style.color = '#0A0A0A' }}
                onMouseLeave={e => { (e.target as HTMLElement).style.backgroundColor = 'transparent'; (e.target as HTMLElement).style.color = '#FAFAF8' }}
              >
                download brief →
              </button>
              <button
                onClick={() => { setShowOutput(false); setFormData({ brand: '', category: '', vibe: '' }); document.getElementById('form')?.scrollIntoView({ behavior: 'smooth' }) }}
                className="text-[13px] tracking-[0.05em] transition-colors"
                style={{ color: '#6B6B6B' }}
                onMouseEnter={e => (e.target as HTMLElement).style.color = '#FAFAF8'}
                onMouseLeave={e => (e.target as HTMLElement).style.color = '#6B6B6B'}
              >
                generate another →
              </button>
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="px-6 md:px-10 py-6 border-t" style={{ borderColor: '#1F1F1F' }}>
        <p className="text-[11px] tracking-[0.08em]" style={{ color: '#3A3A3A' }}>© mike tommasiello</p>
      </footer>
    </div>
  )
}
