import { motion } from 'framer-motion'

const CAPABILITIES = [
  {
    index: '01',
    title: 'Enterprise MERN Architecture',
    description:
      'Designing decoupled client-server systems with React 18 and Node.js/Express — clean RESTful endpoints, optimized state machines, and schemas built for horizontal scaling.',
    specs: ['React 18 / Vite', 'Express Middleware', 'REST & GraphQL', 'State Machines'],
  },
  {
    index: '02',
    title: 'AI Agent & LLM Tooling',
    description:
      'Integrating Large Language Models with enforced domain restrictions, dynamic follow-up prompt evaluation, and context-aware session memory with low-latency streaming.',
    specs: ['Claude 3.5 Sonnet', 'Prompt Engineering', 'RAG Architectures', 'Stream Processing'],
  },
  {
    index: '03',
    title: 'Systems & Cloud DevOps',
    description:
      'Containerizing services with Docker, automating GitHub Actions CI/CD, and managing MongoDB clusters with index optimization and zero-downtime releases.',
    specs: ['Docker Containers', 'CI/CD Pipelines', 'MongoDB Atlas', 'Vercel / Render'],
  },
]

export default function About() {
  return (
    <section id="about" className="py-24 border-b border-line relative">
      <div className="px-6 md:px-12 max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="mb-16 text-left">
          <div className="eyebrow-label mb-3">
            <span className="eyebrow-marker" />
            <span>01 — ABOUT</span>
          </div>
          <h2 className="display text-4xl md:text-6xl max-w-3xl mb-4">
            Engineering principles & system capabilities.
          </h2>
          <p className="font-sans text-base md:text-lg text-ink-muted max-w-2xl">
            Specialized in production-grade full stack development, high-throughput API
            integrations, and robust application architecture.
          </p>
        </div>

        {/* 3 Hairline-Divided Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 md:divide-x divide-line border-t border-line">
          {CAPABILITIES.map((cap) => (
            <motion.div
              key={cap.index}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="py-8 md:py-10 md:px-8 first:pl-0 last:pr-0"
            >
              <div className="font-mono text-xs text-accent mb-3">{cap.index}</div>
              <h3 className="display text-2xl mb-4">{cap.title}</h3>
              <p className="font-sans text-sm text-ink-muted leading-relaxed mb-6">
                {cap.description}
              </p>
              <div className="pt-4 border-t border-line flex flex-wrap gap-x-4 gap-y-1.5">
                {cap.specs.map((spec, sIdx) => (
                  <span key={sIdx} className="font-mono text-[11px] text-ink-faint">
                    {spec}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}