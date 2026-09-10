import { useEffect, useState } from 'react'
import { useLenis } from 'lenis/react'

const SECTIONS = [
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Work' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Timeline' },
  { id: 'milestones', label: 'Milestones' },
]

export default function SectionIndicator() {
  const [active, setActive] = useState('about')
  const lenis = useLenis()

  useEffect(() => {
    const elements = SECTIONS.map((s) => document.getElementById(s.id)).filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        let best = null
        let bestDist = Infinity
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          const center =
            entry.boundingClientRect.top + entry.boundingClientRect.height / 2
          const dist = Math.abs(center - window.innerHeight / 2)
          if (dist < bestDist) {
            bestDist = dist
            best = entry.target.id
          }
        }
        if (best) setActive(best)
      },
      { rootMargin: '-40% 0px -40% 0px', threshold: [0, 0.25, 0.5, 1] }
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (!el) return
    const top = el.getBoundingClientRect().top + window.scrollY
    if (lenis) lenis.scrollTo(top)
    else window.scrollTo({ top, behavior: 'smooth' })
    setActive(id)
  }

  return (
    <div className="fixed left-3 md:left-8 top-1/2 -translate-y-1/2 z-30 flex flex-col items-start gap-4">
      {SECTIONS.map(({ id, label }) => {
        const isActive = active === id
        return (
          <button
            key={id}
            onClick={() => scrollTo(id)}
            aria-label={`Scroll to ${label}`}
            className="group flex items-center gap-3 cursor-pointer"
          >
            <span
              className={`h-px transition-all duration-300 ${
                isActive ? 'w-7 bg-accent' : 'w-5 bg-line group-hover:bg-ink-muted'
              }`}
            />
            <span
              className={`hidden md:inline font-mono text-[10px] uppercase tracking-[0.22em] transition-colors duration-200 ${
                isActive
                  ? 'text-ink'
                  : 'text-ink-faint group-hover:text-ink-muted'
              }`}
            >
              {label}
            </span>
          </button>
        )
      })}
    </div>
  )
}