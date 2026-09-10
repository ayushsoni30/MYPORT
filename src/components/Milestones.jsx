import { motion } from 'framer-motion'

const MILESTONES = [
  {
    kind: 'HACKATHON',
    title: 'Third Place — Ingenuity 2k24',
    context: 'Ingenuity 2k24 · 25+ teams',
    detail:
      'Built a full-stack Recipe Finder web application using the MERN stack with step-by-step cooking pipelines and dynamic ingredient scaling.',
  },
  {
    kind: 'SPEED CODING',
    title: 'Runner-Up — CodeSprint Algorithm Challenge',
    context: 'School of Management Sciences, Lucknow',
    detail:
      'Solved complex algorithmic challenges under 25 minutes within a 60-minute time constraint.',
  },
  {
    kind: 'CERTIFICATION',
    title: 'Complete Web Development Course',
    context: 'Udemy · Hitesh Choudhary',
    detail: '100-hour course covering full stack web development.',
  },
  {
    kind: 'CERTIFICATION',
    title: 'Python Programming',
    context: 'Microsoft × Skill India Digital Hub',
    detail: '40-hour course instructed by the Senior Director CSR, Microsoft.',
  },
  {
    kind: 'CERTIFICATION',
    title: 'Python Core & Modular Engineering',
    context: 'NextOlive',
    detail: 'Six-week intensive training focused on modular Python engineering.',
  },
]

export default function Milestones() {
  return (
    <section id="milestones" className="py-24 border-b border-line relative">
      <div className="px-6 md:px-12 max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="mb-16 text-left">
          <div className="eyebrow-label mb-3">
            <span className="eyebrow-marker" />
            <span>06 — MILESTONES</span>
          </div>
          <h2 className="display text-4xl md:text-6xl max-w-3xl mb-4">
            Hackathons, courses & recognitions.
          </h2>
          <p className="font-sans text-base md:text-lg text-ink-muted max-w-2xl">
            Competitive results and completed trainings — the facts, plain.
          </p>
        </div>

        {/* Hairline Rows */}
        <div className="border-t border-line">
          {MILESTONES.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="py-8 md:py-10 border-b border-line"
            >
              <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-accent mb-2">
                {item.kind}
              </div>
              <h3 className="display text-2xl mb-1">{item.title}</h3>
              <div className="font-mono text-xs text-ink-faint mb-3">{item.context}</div>
              <p className="font-sans text-sm text-ink-muted leading-relaxed max-w-2xl">
                {item.detail}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}