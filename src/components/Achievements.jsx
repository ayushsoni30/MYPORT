import { motion } from 'framer-motion'
import { FiAward } from 'react-icons/fi'
import { LuTrophy } from 'react-icons/lu'

const ACHIEVEMENTS = [
  {
    icon: LuTrophy,
    title: 'Runner-Up — Ingenuity 2k24 Hackathon',
    badges: ['HACKATHON', '3rd / 25+ Teams'],
    description:
      'Secured 3rd place out of 25+ competing teams by developing a Recipe Finder web application using the MERN stack with step-by-step cooking instructions and detailed ingredient lists.',
    feedId: 'CAM_03',
    panelStyle: 'glass-panel-neon-gold',
  },
  {
    icon: FiAward,
    title: 'Runner-Up — CodeSprint',
    institution: 'School of Management Sciences, Lucknow',
    badges: ['COMPETITIVE PROGRAMMING'],
    description:
      'Solved a complex programming challenge in under 25 minutes within a 1-hour time limit. Demonstrated strong problem-solving speed and accuracy under pressure.',
    feedId: 'CAM_04',
    panelStyle: 'glass-panel-neon-orange',
  },
]

export default function Achievements() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  }

  return (
    <section id="achievements" className="py-24 bg-bg-dark relative overflow-hidden">
      {/* Background decoration grids */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b08_1px,transparent_1px),linear-gradient(to_bottom,#1e293b08_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Scattered Accent Dots */}
      <div className="absolute top-1/4 right-12 accent-dot-neon" />
      <div className="absolute bottom-1/3 left-12 accent-dot-neon" />

      {/* Background decoration elements */}
      <div className="absolute top-1/4 left-10 w-[200px] h-[200px] bg-primary/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-secondary font-mono tracking-widest text-xs uppercase bg-secondary/10 px-3 py-1 rounded-full border border-secondary/20">
            RECORDED_METRICS // MILESTONES
          </span>
          <h2 className="font-display font-bold text-3xl md:text-5xl text-text-light tracking-tight mt-4 mb-4">
            Key Achievements
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
        </motion.div>

        {/* Achievements Cards Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {ACHIEVEMENTS.map((ach, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              className={`border-2 p-6 md:p-8 rounded-3xl shadow-xl flex flex-col text-left transition-all duration-300 relative overflow-hidden video-crt-overlay video-scanline hover:shadow-[0_0_30px_rgba(255,140,66,0.4)] group ${ach.panelStyle}`}
            >
              {/* Telemetry Header */}
              <div className="flex items-center justify-between border-b border-border-dark/60 pb-3 mb-5 z-20 relative">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-red-500 blink-rec" />
                  <span className="font-mono text-[9px] text-primary tracking-widest font-bold">REC [{ach.feedId}]</span>
                </div>
                <div className="text-[9px] font-mono text-text-muted">SIGNAL_OK // 29.97FPS</div>
              </div>

              {/* Card Details */}
              <div className="flex items-start gap-4 mb-4 relative z-20">
                <span className="text-4xl bg-bg-dark/60 p-3 rounded-xl border border-border-dark group-hover:scale-110 transition-transform duration-300 text-primary flex items-center justify-center">
                  <ach.icon />
                </span>
                <div className="flex-grow">
                  <h3 className="font-display font-bold text-lg md:text-xl text-text-light group-hover:text-primary transition-colors duration-200">
                    {ach.title}
                  </h3>
                  {ach.institution && (
                    <p className="font-sans text-xs text-secondary mt-0.5 font-medium">
                      {ach.institution}
                    </p>
                  )}
                </div>
              </div>

              {/* Badges */}
              <div className="flex flex-wrap gap-1.5 mb-4 relative z-20">
                {ach.badges.map((badge, bIdx) => (
                  <span
                    key={bIdx}
                    className="font-sans text-[10px] font-bold tracking-wider px-2.5 py-0.5 badge-tag-neon"
                  >
                    {badge}
                  </span>
                ))}
              </div>

              <p className="font-sans text-sm md:text-base text-text-muted leading-relaxed relative z-20">
                {ach.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
