import { motion } from 'framer-motion'

const METRICS = [
  {
    value: '03',
    label: 'DEPLOYED PRODUCTION SYSTEMS',
    detail: 'ZeniN, Quizii, HireCoreOS',
  },
  {
    value: '142ms',
    label: 'AVG AI INFERENCE LATENCY',
    detail: 'Claude 3.5 Sonnet pipeline',
  },
  {
    value: '99.9%',
    label: 'SYSTEM RELIABILITY & UPTIME',
    detail: 'Vercel & Render edge networks',
  },
  {
    value: '2×',
    label: 'HACKATHON WINNER & RUNNER-UP',
    detail: 'Ingenuity 2k24 & CodeSprint',
  },
]

export default function MetricStrip() {
  return (
    <section className="border-y border-[#252525] bg-[#0B0B0B] relative z-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-[#252525]">
        {METRICS.map((metric, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: idx * 0.08 }}
            className="p-6 md:p-8 flex flex-col justify-between hover:bg-[#111111] transition-colors duration-150 group"
          >
            <div className="font-mono text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#F2F2F0] group-hover:text-[#FF6900] transition-colors duration-150">
              {metric.value}
            </div>
            <div className="mt-4 pt-3 border-t border-[#252525]">
              <div className="font-mono text-[11px] md:text-xs uppercase tracking-[0.14em] text-[#777777] font-medium">
                {metric.label}
              </div>
              <div className="font-mono text-[10px] text-[#555555] mt-1">
                {metric.detail}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
