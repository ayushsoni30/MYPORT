import { motion } from 'framer-motion'

const EDUCATION_ENTRIES = [
  {
    institution: 'School of Management Sciences',
    degree: 'B.Tech — Computer Science & Engineering (AI & ML)',
    location: 'Lucknow, India',
    duration: 'AUG 2023 – PRESENT',
    status: 'ACTIVE_ENROLLMENT',
    details: 'Focusing on core CS theory, Data Structures & Algorithms, Artificial Intelligence, Machine Learning pipelines, and Distributed Systems architecture.',
  },
  {
    institution: 'Modern Public School',
    degree: 'Senior Secondary (12th Grade) — PCM & Computer Science',
    location: 'Raebareli, India',
    duration: '2022 – 2023',
    status: 'COMPLETED',
    details: 'Foundation in advanced mathematics, physics, and programming basics with Python and C++.',
  },
]

export default function Education() {
  return (
    <section id="education" className="py-24 border-b border-[#252525] bg-[#0B0B0B] relative">
      <div className="px-6 md:px-12 max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="text-left mb-16">
          <div className="eyebrow-label mb-3">
            <span className="eyebrow-marker" />
            <span>ACADEMIC FOUNDATION</span>
          </div>
          <h2 className="font-sans text-3xl md:text-5xl font-bold tracking-tight text-[#F2F2F0]">
            Education & Theoretical Core
          </h2>
          <p className="font-sans text-base md:text-lg text-[#777777] mt-3 max-w-xl">
            Formal technical degrees and academic training in computer science, machine learning, and mathematics.
          </p>
        </div>

        {/* Education Timeline */}
        <div className="relative border-l border-[#252525] ml-4 md:ml-8 pl-8 md:pl-12 space-y-10 text-left">
          {EDUCATION_ENTRIES.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="relative"
            >
              {/* Timeline Indicator */}
              <div className="absolute -left-[41px] md:-left-[57px] top-1.5 w-4 h-4 bg-[#0B0B0B] border border-[#FF6900] flex items-center justify-center">
                <div className="w-1.5 h-1.5 bg-[#FF6900]" />
              </div>

              {/* Card */}
              <div className="bg-[#111111] border border-[#252525] p-6 md:p-8 hover:border-[#303030] transition-colors duration-180">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#252525] pb-4 mb-4">
                  <div>
                    <span className="font-mono text-xs text-[#FF6900] font-bold">
                      [{String(idx + 1).padStart(2, '0')}]
                    </span>
                    <h3 className="font-sans text-xl font-bold text-[#F2F2F0] inline-block ml-2">
                      {edu.institution}
                    </h3>
                    <div className="font-mono text-xs text-[#777777] mt-0.5">
                      {edu.degree}
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-2 font-mono text-[10px]">
                    <span className="border border-[#252525] px-2.5 py-1 text-[#777777] bg-[#151515]">
                      {edu.duration}
                    </span>
                    <span className="border border-[#252525] px-2.5 py-1 text-[#FF6900] bg-[#151515]">
                      {edu.status}
                    </span>
                  </div>
                </div>

                <p className="font-sans text-sm text-[#777777] leading-relaxed">
                  {edu.details}
                </p>
                <div className="font-mono text-[11px] text-[#555555] mt-3">
                  LOCATION: {edu.location}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
