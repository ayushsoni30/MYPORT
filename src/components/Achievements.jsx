import { motion } from 'framer-motion'

const ACHIEVEMENTS = [
  {
    icon: '🥉',
    title: 'Runner-Up — Ingenuity 2k24 Hackathon',
    badges: ['HACKATHON', '3rd / 25+ Teams'],
    description:
      'Secured 3rd place out of 25+ competing teams by developing a Recipe Finder web application using the MERN stack with step-by-step cooking instructions and detailed ingredient lists.',
  },
  {
    icon: '🏅',
    title: 'Runner-Up — CodeSprint',
    institution: 'School of Management Sciences, Lucknow',
    badges: ['COMPETITIVE PROGRAMMING'],
    description:
      'Solved a complex programming challenge in under 25 minutes within a 1-hour time limit. Demonstrated strong problem-solving speed and accuracy under pressure.',
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
          <span className="text-primary font-display font-medium tracking-widest text-sm uppercase">
            Milestones
          </span>
          <h2 className="font-display font-bold text-3xl md:text-5xl text-text-light tracking-tight mt-2 mb-4">
            Achievements
          </h2>
          <p className="font-sans text-text-muted text-base md:text-lg mb-6">
            Milestones that matter
          </p>
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
              whileHover={{ y: -6, borderColor: '#3b82f6' }}
              transition={{ duration: 0.3 }}
              className="bg-card-dark border border-border-dark p-6 md:p-8 rounded-2xl shadow-xl flex flex-col text-left transition-all duration-300 hover:shadow-[0_10px_25px_rgba(59,130,246,0.1)] group"
            >
              <div className="flex items-start gap-4 mb-4">
                <span className="text-4xl bg-bg-dark p-3 rounded-xl border border-border-dark group-hover:scale-110 transition-transform duration-300">
                  {ach.icon}
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
              <div className="flex flex-wrap gap-1.5 mb-4">
                {ach.badges.map((badge, bIdx) => (
                  <span
                    key={bIdx}
                    className="font-sans text-[10px] font-bold tracking-wider px-2.5 py-0.5 rounded bg-primary/10 text-primary border border-primary/20"
                  >
                    {badge}
                  </span>
                ))}
              </div>

              <p className="font-sans text-sm md:text-base text-text-muted leading-relaxed">
                {ach.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
