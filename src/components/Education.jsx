import { motion } from 'framer-motion'

const EDUCATION_ENTRIES = [
  {
    institution: 'School of Management Sciences',
    degree: 'B.Tech — Computer Science & Engineering (AI & ML)',
    location: 'Lucknow, India',
    duration: '2023 – PRESENT',
    details:
      'Focusing on core CS theory, Data Structures & Algorithms, Artificial Intelligence, and Machine Learning pipelines.',
  },
  {
    institution: 'Modern Public School',
    degree: 'Senior Secondary (12th Grade) — PCM & Computer Science',
    location: 'Raebareli, India',
    duration: '2022 – 2023',
    details:
      'Foundation in advanced mathematics, physics, and programming basics with Python and C++.',
  },
]

export default function Education() {
  return (
    <section id="education" className="py-24 border-b border-line relative">
      <div className="px-6 md:px-12 max-w-5xl mx-auto">

        {/* Section Header */}
        <div className="mb-16 text-left">
          <div className="eyebrow-label mb-3">
            <span className="eyebrow-marker" />
            <span>04 — EDUCATION</span>
          </div>
          <h2 className="display text-4xl md:text-6xl max-w-3xl mb-4">
            Formal training.
          </h2>
        </div>

        {/* Hairline Rows */}
        <div className="border-t border-line">
          {EDUCATION_ENTRIES.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="py-8 md:py-10 border-b border-line"
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-3">
                <div>
                  <h3 className="display text-2xl">{edu.institution}</h3>
                  <div className="font-sans text-sm text-ink-muted mt-1">{edu.degree}</div>
                </div>
                <span className="font-mono text-xs text-ink-faint uppercase tracking-wider shrink-0">
                  {edu.duration}
                </span>
              </div>
              <p className="font-sans text-sm text-ink-muted leading-relaxed max-w-3xl">
                {edu.details}
              </p>
              <div className="font-mono text-[11px] text-ink-faint mt-3">
                {edu.location}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}