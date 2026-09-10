import { useState, useEffect } from 'react'
import { FiArrowUpRight, FiFileText } from 'react-icons/fi'
import GridGlow from './GridGlow'

const ROLES = [
  'FULL STACK MERN DEVELOPER',
  'AI INTEGRATION SPECIALIST',
  'PRODUCTION WEB ENGINEER',
]

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % ROLES.length)
    }, 3200)
    return () => clearInterval(timer)
  }, [])

  return (
    <section
      id="home"
      className="pt-16 md:pt-20 pb-28 border-b border-line relative overflow-hidden"
    >
      <GridGlow />
      <div className="px-6 md:px-12 max-w-7xl mx-auto relative">
        <div className="text-left">
          {/* Eyebrow Label */}
          <div className="eyebrow-label mb-8">
            <span className="eyebrow-marker" />
            <span>AYUSH SONI — FULL STACK DEVELOPER, LUCKNOW</span>
          </div>

          {/* Huge Display Headline */}
          <h1 className="display text-5xl sm:text-7xl md:text-[5.5rem] lg:text-[7rem] max-w-5xl mb-8">
            I'm Ayush — I build full-stack web apps powered by AI.
          </h1>

          {/* Dynamic Role Indicator in Monospace */}
          <div className="font-mono text-xs uppercase tracking-[0.16em] text-accent mb-8 flex items-center gap-2">
            <span>→</span>
            <span>{ROLES[roleIndex]}</span>
          </div>

          {/* Supporting Copy */}
          <p className="font-sans text-lg md:text-xl text-ink-muted max-w-2xl leading-relaxed mb-12">
            Full stack developer specializing in performant MERN architecture, Claude API
            integrations, and robust database design. Three production systems are live today.
          </p>

          {/* CTA Row */}
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="btn-primary"
              aria-label="Explore Projects"
            >
              <span>SEE THE WORK</span>
              <FiArrowUpRight className="text-base" />
            </a>

            <a
              href="https://drive.google.com/file/d/1NSBH94j34LY_SjHJsJv7tk_PZ33ooFAx/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
              aria-label="Download Resume"
            >
              <FiFileText />
              <span>VIEW RESUME</span>
            </a>
          </div>

          <div className="flex flex-wrap gap-x-8 gap-y-2 mt-14 pt-6 border-t border-line font-mono text-[11px] uppercase tracking-[0.14em] text-ink-faint">
            <span>EMAIL — ayushsoni55aa@gmail.com</span>
            <span>GITHUB — github.com/ayushsoni30</span>
            <span>LINKEDIN — linkedin.com/in/ayushsoni3030</span>
          </div>
        </div>
      </div>
    </section>
  )
}