import { motion } from 'framer-motion'

const EXPERIENCES = [
  {
    role: 'Frontend Developer Intern',
    company: 'Sysslan IT Solutions',
    duration: 'May 2026 – July 2026',
    type: '🟢 Remote',
    badge: 'completed',
    highlights: [
      'Built a responsive Event Ticket Booking System using HTML, CSS, and JavaScript with reusable UI components and structured page layouts.',
      'Developed dynamic features including event displays, booking forms, DOM-based interactions, and client-side validation to improve user engagement.',
      'Ensured cross-device compatibility through responsive design, modern styling techniques, and usability-focused UI/UX practices.',
    ],
  },
  {
    role: 'Python Developer Trainee',
    company: 'NextOlive',
    duration: '6 Weeks',
    type: '🔵 Remote | Training',
    badge: 'training',
    highlights: [
      'Gained hands-on experience in Python — OOP, data structures, file handling, and modular application development.',
      'Developed 3+ mini-projects and solved coding challenges to sharpen problem-solving, code optimization, and debugging skills.',
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-bg-dark relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary font-display font-medium tracking-widest text-sm uppercase">
            My Journey
          </span>
          <h2 className="font-display font-bold text-3xl md:text-5xl text-text-light tracking-tight mt-2 mb-6">
            Professional Experience
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
        </motion.div>

        {/* Timeline wrapper */}
        <div className="relative border-l border-border-dark ml-4 md:ml-8 pl-8 md:pl-12 space-y-16 py-4">
          {EXPERIENCES.map((exp, idx) => (
            <div key={idx} className="relative group">
              {/* Timeline Indicator Dot */}
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="absolute -left-[45px] md:-left-[61px] top-1.5 w-6 h-6 rounded-full bg-bg-dark border-2 border-primary flex items-center justify-center"
              >
                <div className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse" />
              </motion.div>

              {/* Experience Card */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="bg-card-dark border border-border-dark p-6 md:p-8 rounded-2xl shadow-xl transition-all duration-300 hover:shadow-[0_10px_25px_rgba(59,130,246,0.1)] hover:border-primary/50"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                  <div>
                    <h3 className="font-display font-bold text-lg md:text-xl text-text-light group-hover:text-primary transition-colors duration-200">
                      {exp.role}
                    </h3>
                    <span className="font-sans text-sm font-semibold text-secondary">
                      {exp.company}
                    </span>
                  </div>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-sans text-xs bg-bg-dark border border-border-dark text-text-muted px-3 py-1 rounded-full">
                      {exp.duration}
                    </span>
                    <span className="font-sans text-xs bg-bg-dark border border-border-dark text-text-light px-3 py-1 rounded-full flex items-center gap-1">
                      {exp.type}
                    </span>
                    {exp.badge && (
                      <span className={`font-sans text-xs px-3 py-1 rounded-full font-semibold uppercase tracking-wider ${
                        exp.badge === 'completed' 
                          ? 'bg-green-500/10 text-green-400 border border-green-500/20' 
                          : 'bg-blue-500/10 text-blue-400 border border-blue-500/20'
                      }`}>
                        {exp.badge}
                      </span>
                    )}
                  </div>
                </div>

                <ul className="list-none space-y-3 pl-0 text-left font-sans text-sm md:text-base text-text-muted">
                  {exp.highlights.map((highlight, hIdx) => (
                    <li key={hIdx} className="relative pl-5 leading-relaxed">
                      <span className="absolute left-0 top-2.5 w-1.5 h-1.5 rounded-full bg-primary/80" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
