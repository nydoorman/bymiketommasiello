'use client'

import { useState } from 'react'
import Link from 'next/link'

const mockBrief = {
  brand: 'via roma',
  category: 'restaurant & hospitality',
  vibe: 'roman, intimate, serious',
  sections: [
    {
      number: '01',
      label: 'brand snapshot',
      content: `via roma is a roman-style salumeria and wine bar in new york city — a room that doesn't perform italianness, it just is it. the food is serious, the wine list is considered, and the space feels like it belongs in a city that has been feeding people for centuries. it arrived in new york without an introduction and didn't need one.`,
    },
    {
      number: '02',
      label: 'audience',
      content: null,
      personas: [
        {
          name: 'the cultural omnivore',
          age: '32–45',
          lifestyle: 'works in media, fashion, or finance. reads the times and eater in the same sitting. has opinions about natural wine and isn\'t embarrassed by them. travels to eat.',
          platforms: 'instagram (saves everything), threads (lurks, occasionally posts takes), substack reader.',
        },
        {
          name: 'the serious diner',
          age: '40–58',
          lifestyle: 'has been to rome. knows what the real thing tastes like. came here skeptical. left converted. tells everyone.',
          platforms: 'instagram (posts once, means it), google reviews (writes paragraphs), word of mouth is their primary channel.',
        },
      ],
    },
    {
      number: '03',
      label: 'tone of voice',
      content: null,
      adjectives: ['authoritative', 'understated', 'specific', 'warm', 'unhurried'],
      sounds: [
        { type: 'sounds like', text: 'a sommelier who doesn\'t need to prove anything.' },
        { type: 'sounds like', text: 'a caption that tells you exactly what you\'re looking at and nothing more.' },
        { type: 'never sounds like', text: 'a restaurant that describes itself as "an experience."' },
      ],
    },
    {
      number: '04',
      label: 'content pillars',
      content: null,
      pillars: [
        {
          name: 'the roman archive',
          description: 'content rooted in provenance — where dishes come from, why they exist, what makes them roman and not just italian.',
          idea: 'short-form video: the chef explains the difference between carbonara made the roman way and every other version you\'ve had. no music. just the explanation.',
        },
        {
          name: 'the room',
          description: 'the physical space as a character — light, materials, the bar, the guests, the hour.',
          idea: 'a weekly still image: the room at a specific time of day. no caption except the time. "6:47 pm."',
        },
        {
          name: 'what we\'re drinking',
          description: 'the wine list as editorial content — specific bottles, producers, regions, and why they\'re on the list.',
          idea: 'staff pick series: one person, one bottle, one sentence on why it\'s there. shot on phone. feels internal, not produced.',
        },
        {
          name: 'the counter',
          description: 'the salumeria side — the products, the sourcing, the ritual of it.',
          idea: 'a morning prep reel: no voiceover. just the counter being set. the sounds. the mise en place. 30 seconds.',
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
          why: 'primary discovery channel for the cultural omnivore audience. the visual record of the brand.',
          format: 'feed: still images, considered and unhurried. reels: staff content, kitchen moments, short-form stories. stories: reservations, daily specials, behind the pass.',
        },
        {
          name: 'threads',
          why: 'emerging high-value audience of food and culture people. low competition for restaurant brands.',
          format: 'short takes — one sentence observations about food, hospitality, the industry. no hashtags. feels like a person, not a brand.',
        },
        {
          name: 'tiktok',
          why: 'discovery for a younger audience that will grow into the core demographic.',
          format: 'employee-generated content: kitchen prep, pasta making, wine pours. raw, not produced. the algorithm rewards consistency over polish.',
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
          theme: 'the roman standard',
          direction: 'establish authority. lead with the heritage. introduce the dishes, the history, the why. this is who we are before we tell you anything else.',
        },
        {
          week: 'week 2',
          theme: 'the people behind it',
          direction: 'staff content. the faces that make the room. no formal portraits — caught moments, mid-service, off-guard. this is when the brand becomes human.',
        },
        {
          week: 'week 3',
          theme: 'what we\'re drinking',
          direction: 'wine content week. introduce the list, the philosophy, a producer. pull back the curtain on the beverage program without making it academic.',
        },
        {
          week: 'week 4',
          theme: 'the room at its best',
          direction: 'full-service content. the energy of a packed room, a good night, a table that didn\'t want to leave. show what it feels like to be there, not just what it looks like.',
        },
      ],
    },
    {
      number: '07',
      label: 'the signature idea',
      content: `"the 6am dispatch" — a weekly iphone video, posted every friday morning, shot in the restaurant before service begins. no music. no voiceover. 60 seconds of the space being prepared: pasta being cut, the bar being stocked, the lights at their lowest. posted with one line of text — what's on the menu tonight. it's the opposite of everything food content looks like right now, which is exactly why it works. it builds a ritual. people start looking for it. it makes the dinner feel earned before it happens.`,
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
                  placeholder="e.g. your brand"
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
