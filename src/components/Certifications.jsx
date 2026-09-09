import { motion } from 'framer-motion'
import { FiAward, FiCode, FiTerminal } from 'react-icons/fi'

const CERTIFICATIONS = [
  {
    icon: FiAward,
    title: 'Complete Web Development Course',
    issuer: 'Udemy',
    instructor: 'Hitesh Choudhary',
    issuedDate: 'MARCH 2026',
    duration: '100 HOURS',
    badge: 'VERIFIED',
  },
  {
    icon: FiCode,
    title: 'Python Programming',
    issuer: 'Microsoft × Skill India Digital Hub',
    instructor: 'Manju Dhasmana (Senior Director CSR, Microsoft)',
    issuedDate: 'AUGUST 2025',
    duration: '40 HOURS',
    badge: 'VERIFIED',
  },
  {
    icon: FiTerminal,
    title: 'Python Core & Modular Engineering',
    issuer: 'NextOlive',
    instructor: 'Mohd Vaseem (Company CEO)',
    issuedDate: 'TRAINING PERIOD',
    duration: '6 WEEKS',
    badge: 'VERIFIED',
  },
]

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 border-b border-[#252525] bg-[#0B0B0B] relative">
      <div className="px-6 md:px-12 max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-left mb-16">
          <div className="eyebrow-label mb-3">
            <span className="eyebrow-marker" />
            <span>CREDENTIAL VERIFICATION</span>
          </div>
          <h2 className="font-sans text-3xl md:text-5xl font-bold tracking-tight text-[#F2F2F0]">
            Certifications & Industry Training
          </h2>
          <p className="font-sans text-base md:text-lg text-[#777777] mt-3 max-w-xl">
            Accredited course completion and specialized technical credentials.
          </p>
        </div>

        {/* 3-Column Credential Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CERTIFICATIONS.map((cert, idx) => {
            const Icon = cert.icon
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.08 }}
                className="bg-[#111111] border border-[#252525] p-6 text-left hover:border-[#303030] transition-colors duration-180 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between border-b border-[#252525] pb-3 mb-4">
                    <Icon className="text-base text-[#FF6900]" />
                    <span className="font-mono text-[10px] text-[#FF6900] border border-[#252525] px-2 py-0.5 bg-[#151515]">
                      {cert.badge}
                    </span>
                  </div>

                  <h3 className="font-sans text-lg font-bold text-[#F2F2F0] mb-1">
                    {cert.title}
                  </h3>

                  <div className="font-mono text-xs text-[#777777] mb-4">
                    {cert.issuer}
                  </div>
                </div>

                <div className="border-t border-[#252525] pt-4 font-mono text-[11px] text-[#555555] space-y-1">
                  <div className="flex justify-between">
                    <span>DURATION:</span>
                    <span className="text-[#777777]">{cert.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>ISSUED:</span>
                    <span className="text-[#777777]">{cert.issuedDate}</span>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
