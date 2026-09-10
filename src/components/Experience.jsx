import { motion } from 'framer-motion'

const EXPERIENCES = [
  {
    role: 'Frontend Developer Intern',
    company: 'Sysslan IT Solutions',
    duration: 'MAY – JULY 2026',
    highlights: [
      'Built a responsive Event Ticket Booking System using HTML, CSS, and modern JavaScript with reusable UI components and structured layouts.',
      'Engineered dynamic features including real-time event catalogs, booking validation forms, DOM-driven interactions, and client-side error handling.',
      'Ensured cross-browser compatibility and optimized responsive rendering across mobile and desktop breakpoints.',
    ],
  },
  {
    role: 'Python Developer Trainee',
    company: 'NextOlive',
    duration: '6 WEEKS',
    highlights: [
      'Hands-on development in Python: object-oriented programming, data structures, modular file handling, and algorithmic optimization.',
      'Engineered 3+ mini-projects and solved competitive coding challenges targeting runtime efficiency and debugging accuracy.',
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-24 border-b border-line relative">
      <div className="px-6 md:px-12 max-w-5xl mx-auto">

        {/* Section Header */}
        <div className="mb-16 text-left">
          <div className="eyebrow-label mb-3">
            <span className="eyebrow-marker" />
            <span>03 — EXPERIENCE</span>
          </div>
          <h2 className="display text-4xl md:text-6xl max-w-3xl mb-4">
            Where I've worked.
          </h2>
        </div>

        {/* Hairline Rows */}
        <div className="border-t border-line">
          {EXPERIENCES.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="py-8 md:py-10 border-b border-line"
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-4">
                <div>
                  <h3 className="display text-2xl">{exp.role}</h3>
                  <div className="font-sans text-sm text-ink-muted mt-1">{exp.company}</div>
                </div>
                <span className="font-mono text-xs text-ink-faint uppercase tracking-wider shrink-0">
                  {exp.duration}
                </span>
              </div>
              <ul className="space-y-2 font-sans text-sm text-ink-muted leading-relaxed max-w-3xl">
                {exp.highlights.map((highlight, hIdx) => (
                  <li key={hIdx} className="flex items-start gap-3">
                    <span className="w-1 h-1 bg-accent mt-2 shrink-0" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}