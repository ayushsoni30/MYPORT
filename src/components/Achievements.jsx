import { motion } from 'framer-motion'
import { FiAward } from 'react-icons/fi'
import { LuTrophy } from 'react-icons/lu'

const ACHIEVEMENTS = [
  {
    icon: LuTrophy,
    title: 'Runner-Up — Ingenuity 2k24 Hackathon',
    event: 'Ingenuity 2k24 / 25+ Teams',
    metric: '3RD / 25+ TEAMS',
    badge: 'HACKATHON',
    description:
      'Secured 3rd place out of 25+ competing engineering teams by building a full-stack Recipe Finder web application using the MERN stack with step-by-step cooking pipelines and dynamic ingredient scaling.',
  },
  {
    icon: FiAward,
    title: 'Runner-Up — CodeSprint Algorithm Challenge',
    event: 'School of Management Sciences, Lucknow',
    metric: '<25 MIN FINISH',
    badge: 'SPEED CODING',
    description:
      'Solved complex algorithmic challenges in under 25 minutes within a 60-minute time constraint. Demonstrated exceptional debugging velocity and algorithmic problem-solving under strict pressure.',
  },
]

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 border-b border-[#252525] bg-[#0B0B0B] relative">
      <div className="px-6 md:px-12 max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-left mb-16">
          <div className="eyebrow-label mb-3">
            <span className="eyebrow-marker" />
            <span>MEASURED OUTCOMES</span>
          </div>
          <h2 className="font-sans text-3xl md:text-5xl font-bold tracking-tight text-[#F2F2F0]">
            Hackathons & Coding Milestones
          </h2>
          <p className="font-sans text-base md:text-lg text-[#777777] mt-3 max-w-xl">
            Competitive programming tournaments and hackathon recognitions verified under timed environments.
          </p>
        </div>

        {/* 2-Column Milestone Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {ACHIEVEMENTS.map((ach, idx) => {
            const Icon = ach.icon
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-[#111111] border border-[#252525] p-8 text-left hover:border-[#303030] transition-colors duration-180 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between border-b border-[#252525] pb-4 mb-6">
                    <div className="flex items-center gap-2.5">
                      <Icon className="text-[#FF6900] text-lg" />
                      <span className="font-mono text-xs font-semibold text-[#F2F2F0]">
                        {ach.badge}
                      </span>
                    </div>
                    <span className="font-mono text-xs text-[#FF6900] border border-[#252525] px-2.5 py-0.5 bg-[#151515]">
                      {ach.metric}
                    </span>
                  </div>

                  <h3 className="font-sans text-xl font-bold text-[#F2F2F0] mb-2">
                    {ach.title}
                  </h3>

                  <div className="font-mono text-xs text-[#777777] mb-4">
                    {ach.event}
                  </div>

                  <p className="font-sans text-sm text-[#777777] leading-relaxed">
                    {ach.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-[#252525] font-mono text-[10px] text-[#555555] flex justify-between">
                  <span>STATUS: VERIFIED RESULT</span>
                  <span>RECORD: OFFICIAL</span>
                </div>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
