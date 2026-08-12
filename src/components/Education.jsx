import { motion } from 'framer-motion'

const EDUCATION_ENTRIES = [
  {
    institution: 'School of Management Sciences',
    degree: 'B.Tech — Computer Science (AI & ML)',
    location: 'Lucknow, India',
    duration: 'Aug 2023 – Present',
    badge: 'CURRENT',
    feedId: 'CAM_05',
    panelStyle: 'glass-panel-neon-gold',
  },
  {
    institution: 'Modern Public School',
    degree: 'Senior Secondary (12th)',
    location: 'Raebareli, India',
    duration: '2022 – 2023',
    badge: null,
    feedId: 'CAM_06',
    panelStyle: 'glass-panel-neon-orange',
  },
]

export default function Education() {
  return (
    <section id="education" className="py-24 bg-bg-dark/50 relative overflow-hidden">
      {/* Background Decorative Grids */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b08_1px,transparent_1px),linear-gradient(to_bottom,#1e293b08_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Scattered Accent Dots */}
      <div className="absolute top-1/4 left-16 accent-dot-neon" />
      <div className="absolute bottom-1/4 right-16 accent-dot-neon" />

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
          <span className="text-secondary font-mono tracking-widest text-xs uppercase bg-secondary/10 px-3 py-1 rounded-full border border-secondary/20">
            ACADEMIC_RECORD // DATABASE
          </span>
          <h2 className="font-display font-bold text-3xl md:text-5xl text-text-light tracking-tight mt-4 mb-4">
            Education
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
        </motion.div>

        {/* Timeline container */}
        <div className="relative border-l border-border-dark/60 ml-4 md:ml-8 pl-8 md:pl-12 space-y-12 py-4">
          {EDUCATION_ENTRIES.map((edu, idx) => (
            <div key={idx} className="relative group">
              {/* Timeline Indicator Dot */}
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="absolute -left-[45px] md:-left-[61px] top-4 w-6 h-6 rounded-full bg-bg-dark border-2 border-primary flex items-center justify-center z-20"
              >
                <div className="w-2.5 h-2.5 rounded-full bg-primary" />
              </motion.div>

              {/* Education Card inside Glass Panel with Video Scanner overlays */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className={`border-2 p-6 md:p-8 rounded-3xl shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-4 transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,140,66,0.4)] hover:border-primary/80 text-left relative overflow-hidden video-crt-overlay video-scanline ${edu.panelStyle}`}
              >
                {/* Telemetry log on side/top */}
                <div className="absolute top-2.5 right-6 flex items-center gap-1.5 z-20">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500 blink-rec" />
                  <span className="font-mono text-[8px] text-primary font-bold">REC [{edu.feedId}]</span>
                </div>

                <div className="relative z-20 mt-2 md:mt-0">
                  <div className="flex items-center gap-3 flex-wrap mb-2">
                    <h3 className="font-display font-bold text-lg md:text-xl text-text-light group-hover:text-primary transition-colors duration-200">
                      {edu.institution}
                    </h3>
                    {edu.badge && (
                      <span className="pulse-badge font-sans text-[10px] font-bold tracking-widest px-2.5 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
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
                <div className="md:text-right shrink-0 relative z-20">
                  <span className="font-sans text-xs md:text-sm bg-bg-dark/60 border border-border-dark/60 text-text-muted px-4 py-1.5 rounded-full">
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
