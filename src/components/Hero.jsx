import { useState, useEffect } from 'react'
import { FiArrowUpRight, FiFileText } from 'react-icons/fi'
import HeroVisual from './HeroVisual'

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
      className="pt-32 pb-24 border-b border-[#252525] bg-[#0B0B0B] relative overflow-hidden"
    >
      <div className="px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Hero Typography & CTA (52%) */}
          <div className="lg:col-span-7 text-left">
            {/* Eyebrow Label */}
            <div className="eyebrow-label mb-6">
              <span className="eyebrow-marker" />
              <span>AYUSH SONI // SYSTEMS & AI INFRASTRUCTURE</span>
            </div>

            {/* Huge Headline (DESIGN.md Section 10) */}
            <h1 className="font-sans text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#F2F2F0] leading-[1.04] mb-6">
              Engineering high-speed web systems & AI applications.
            </h1>

            {/* Dynamic Role Indicator in Monospace */}
            <div className="font-mono text-xs uppercase tracking-[0.16em] text-[#FF6900] mb-6 flex items-center gap-2">
              <span>→</span>
              <span>{ROLES[roleIndex]}</span>
            </div>

            {/* Supporting Copy (DESIGN.md Section 11) */}
            <p className="font-sans text-lg md:text-xl text-[#777777] max-w-2xl leading-relaxed mb-10">
              Full stack developer specializing in performant MERN architecture, Claude API integrations, and robust database design. Focused on building production infrastructure that scales.
            </p>

            {/* Industrial CTA Row (DESIGN.md Section 12) */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="btn-primary"
                aria-label="Explore Projects"
              >
                <span>EXPLORE WORK</span>
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
                <span>DOWNLOAD RESUME</span>
              </a>
            </div>
          </div>

          {/* Right Column: Interactive System Architecture Console (48%) (DESIGN.md Section 9 & 18) */}
          <div className="lg:col-span-5 flex justify-center items-center w-full">
            <HeroVisual />
          </div>

        </div>
      </div>
    </section>
  )
}
