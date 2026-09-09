import { motion } from 'framer-motion'
import { FiCpu, FiServer, FiLayers, FiArrowUpRight } from 'react-icons/fi'

const CAPABILITIES = [
  {
    index: '01',
    title: 'Enterprise MERN Architecture',
    subtitle: 'Scalable Full-Stack Engineering',
    description:
      'Designing decoupled client-server systems with React 18 and Node.js/Express. Engineered with strict modularity, clean RESTful endpoints, optimized state machines, and relational/document schemas built for horizontal scaling.',
    icon: FiLayers,
    specs: ['React 18 / Vite', 'Express Middleware', 'REST & GraphQL', 'State Machines'],
  },
  {
    index: '02',
    title: 'AI Agent & LLM Tooling',
    subtitle: 'Claude API & Context Engineering',
    description:
      'Integrating advanced Large Language Model systems with enforced software-engineering domain restrictions, dynamic follow-up prompt evaluation, and context-aware session memory with low-latency streaming.',
    icon: FiCpu,
    specs: ['Claude 3.5 Sonnet', 'Prompt Engineering', 'RAG Architectures', 'Stream Processing'],
  },
  {
    index: '03',
    title: 'Systems & Cloud DevOps',
    subtitle: 'Continuous Integration & Reliability',
    description:
      'Deploying containerized services with Docker, configuring automated GitHub Actions CI/CD workflows, and managing persistent MongoDB database clusters with index optimization and zero-downtime releases.',
    icon: FiServer,
    specs: ['Docker Containers', 'CI/CD Pipelines', 'MongoDB Atlas', 'Vercel / Render'],
  },
]

export default function About() {
  return (
    <section id="about" className="py-24 border-b border-[#252525] bg-[#0B0B0B] relative">
      <div className="px-6 md:px-12 max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 text-left">
          <div>
            <div className="eyebrow-label mb-3">
              <span className="eyebrow-marker" />
              <span>CORE ARCHITECTURE</span>
            </div>
            <h2 className="font-sans text-3xl md:text-5xl font-bold tracking-tight text-[#F2F2F0]">
              Engineering principles & system capabilities.
            </h2>
            <p className="font-sans text-base md:text-lg text-[#777777] mt-3 max-w-2xl">
              Specialized in production-grade full stack development, high-throughput API integrations, and robust application architecture.
            </p>
          </div>

          <a
            href="https://github.com/ayushsoni30"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[#777777] hover:text-[#F2F2F0] transition-colors duration-150 self-start md:self-auto border border-[#252525] px-4 py-2.5 bg-[#111111]"
          >
            <span>VIEW GITHUB ORG</span>
            <FiArrowUpRight />
          </a>
        </div>

        {/* 3 Industrial Feature Cards (DESIGN.md Section 14 & 15) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CAPABILITIES.map((cap) => {
            const Icon = cap.icon
            return (
              <motion.div
                key={cap.index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="bg-[#111111] border border-[#252525] p-8 flex flex-col justify-between text-left hover:border-[#303030] transition-colors duration-180 min-h-[360px] group"
              >
                <div>
                  {/* Top index and icon row */}
                  <div className="flex items-center justify-between border-b border-[#252525] pb-4 mb-6">
                    <span className="font-mono text-xs font-bold text-[#FF6900]">
                      {cap.index}
                    </span>
                    <Icon className="text-lg text-[#777777] group-hover:text-[#F2F2F0] transition-colors duration-150" />
                  </div>

                  <div className="font-mono text-[11px] uppercase tracking-wider text-[#555555] mb-2">
                    {cap.subtitle}
                  </div>

                  <h3 className="font-sans text-xl font-bold text-[#F2F2F0] mb-4">
                    {cap.title}
                  </h3>

                  <p className="font-sans text-sm text-[#777777] leading-relaxed mb-6">
                    {cap.description}
                  </p>
                </div>

                {/* Specs metadata */}
                <div className="pt-6 border-t border-[#252525] flex flex-wrap gap-2">
                  {cap.specs.map((spec, sIdx) => (
                    <span
                      key={sIdx}
                      className="font-mono text-[10px] text-[#555555] bg-[#151515] px-2 py-1 border border-[#252525]"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
