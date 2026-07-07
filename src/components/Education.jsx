import { motion } from 'framer-motion'

const EDUCATION_ENTRIES = [
  {
    institution: 'School of Management Sciences',
    degree: 'B.Tech — Computer Science (AI & ML)',
    location: 'Lucknow, India',
    duration: 'Aug 2023 – Present',
    badge: 'CURRENT',
  },
  {
    institution: 'Modern Public School',
    degree: 'Senior Secondary (12th)',
    location: 'Raebareli, India',
    duration: '2022 – 2023',
    badge: null,
  },
]

export default function Education() {
  return (
    <section id="education" className="py-24 bg-bg-dark/50 relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute bottom-1/4 left-1/3 w-[300px] h-[300px] bg-primary/5 rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary font-display font-medium tracking-widest text-sm uppercase">
            Learning Path
          </span>
          <h2 className="font-display font-bold text-3xl md:text-5xl text-text-light tracking-tight mt-2 mb-6">
            Education
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
        </motion.div>

        {/* Timeline container */}
        <div className="relative border-l border-border-dark ml-4 md:ml-8 pl-8 md:pl-12 space-y-12 py-4">
          {EDUCATION_ENTRIES.map((edu, idx) => (
            <div key={idx} className="relative group">
              {/* Timeline Indicator Dot */}
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="absolute -left-[45px] md:-left-[61px] top-1.5 w-6 h-6 rounded-full bg-bg-dark border-2 border-primary flex items-center justify-center"
              >
                <div className="w-2.5 h-2.5 rounded-full bg-primary" />
              </motion.div>

              {/* Education Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="bg-card-dark border border-border-dark p-6 md:p-8 rounded-2xl shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-4 transition-all duration-300 hover:shadow-[0_10px_25px_rgba(59,130,246,0.1)] hover:border-primary/50 text-left"
              >
                <div>
                  <div className="flex items-center gap-3 flex-wrap mb-2">
                    <h3 className="font-display font-bold text-lg md:text-xl text-text-light group-hover:text-primary transition-colors duration-200">
                      {edu.institution}
                    </h3>
                    {edu.badge && (
                      <span className="pulse-badge font-sans text-[10px] font-bold tracking-widest px-2.5 py-0.5 rounded-full bg-green-500/10 text-green-400 border border-green-500/20 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                        {edu.badge}
                      </span>
                    )}
                  </div>
                  <p className="font-sans text-sm md:text-base text-secondary font-medium mb-1">
                    {edu.degree}
                  </p>
                  <p className="font-sans text-xs md:text-sm text-text-muted">
                    {edu.location}
                  </p>
                </div>
                <div className="md:text-right shrink-0">
                  <span className="font-sans text-xs md:text-sm bg-bg-dark border border-border-dark text-text-muted px-4 py-1.5 rounded-full">
                    {edu.duration}
                  </span>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
