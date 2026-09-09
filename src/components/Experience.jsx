import { motion } from 'framer-motion'

const EXPERIENCES = [
  {
    role: 'Frontend Developer Intern',
    company: 'Sysslan IT Solutions',
    duration: 'MAY 2026 – JULY 2026',
    type: 'REMOTE // INTERNSHIP',
    status: 'COMPLETED',
    highlights: [
      'Built a responsive Event Ticket Booking System using HTML, CSS, and modern JavaScript with reusable UI components and structured layouts.',
      'Engineered dynamic features including real-time event catalogs, booking validation forms, DOM-driven interactions, and client-side error handling.',
      'Ensured cross-browser compatibility and optimized responsive rendering across mobile and desktop breakpoints.',
    ],
  },
  {
    role: 'Python Developer Trainee',
    company: 'NextOlive',
    duration: '6 WEEKS DURATION',
    type: 'REMOTE // INTENSIVE',
    status: 'COMPLETED',
    highlights: [
      'Hands-on development in Python: object-oriented programming, data structures, modular file handling, and algorithmic optimization.',
      'Engineered 3+ mini-projects and solved competitive coding challenges targeting runtime efficiency and debugging accuracy.',
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-24 border-b border-[#252525] bg-[#0B0B0B] relative">
      <div className="px-6 md:px-12 max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="text-left mb-16">
          <div className="eyebrow-label mb-3">
            <span className="eyebrow-marker" />
            <span>CAREER CHANGELOG</span>
          </div>
          <h2 className="font-sans text-3xl md:text-5xl font-bold tracking-tight text-[#F2F2F0]">
            Professional Experience
          </h2>
          <p className="font-sans text-base md:text-lg text-[#777777] mt-3 max-w-xl">
            Software engineering internships, training programs, and real-world system implementations.
          </p>
        </div>

        {/* Timeline Changelog Container */}
        <div className="relative border-l border-[#252525] ml-4 md:ml-8 pl-8 md:pl-12 space-y-12 text-left">
          {EXPERIENCES.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="relative group"
            >
              {/* Timeline Indicator Square */}
              <div className="absolute -left-[41px] md:-left-[57px] top-1.5 w-4 h-4 bg-[#0B0B0B] border border-[#FF6900] flex items-center justify-center">
                <div className="w-1.5 h-1.5 bg-[#FF6900]" />
              </div>

              {/* Experience Card */}
              <div className="bg-[#111111] border border-[#252525] p-6 md:p-8 hover:border-[#303030] transition-colors duration-180">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#252525] pb-4 mb-5">
                  <div>
                    <span className="font-mono text-xs text-[#FF6900] font-bold">
                      [{String(idx + 1).padStart(2, '0')}]
                    </span>
                    <h3 className="font-sans text-xl font-bold text-[#F2F2F0] inline-block ml-2">
                      {exp.role}
                    </h3>
                    <div className="font-mono text-xs text-[#777777] mt-0.5">
                      {exp.company}
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-2 font-mono text-[10px]">
                    <span className="border border-[#252525] px-2.5 py-1 text-[#777777] bg-[#151515]">
                      {exp.duration}
                    </span>
                    <span className="border border-[#252525] px-2.5 py-1 text-[#FF6900] bg-[#151515]">
                      {exp.status}
                    </span>
                  </div>
                </div>

                <ul className="space-y-2.5 font-sans text-sm text-[#777777] leading-relaxed">
                  {exp.highlights.map((highlight, hIdx) => (
                    <li key={hIdx} className="flex items-start gap-3">
                      <span className="w-1 h-1 bg-[#FF6900] mt-2 shrink-0" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
