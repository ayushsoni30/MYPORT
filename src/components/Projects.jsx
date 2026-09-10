import { motion } from 'framer-motion'
import { FiArrowUpRight, FiGithub } from 'react-icons/fi'

const PROJECTS = [
  {
    id: '01',
    title: 'ZeniN — AI Technical Mentor',
    tagline: 'Real-time AI engineering assistant with Claude API',
    category: 'AI INFERENCE · MERN',
    description:
      'Full-stack AI mentor delivering context-aware coding guidance with strict software-engineering domain restrictions, dynamic follow-up prompt evaluation, and persistent MongoDB session threads.',
    tech: ['React 18', 'Node.js', 'Express.js', 'MongoDB', 'Claude API', 'Tailwind CSS'],
    demoUrl: 'https://zenin-tech-ai.vercel.app/',
    githubUrl: 'https://github.com/ayushsoni30/ZENIN--TECH--AI',
  },
  {
    id: '02',
    title: 'Quizii — Interactive Quiz Platform',
    tagline: 'High-performance reactive assessment engine',
    category: 'FRONTEND · REST API',
    description:
      'Interactive assessment engine with dynamic OpenTDB question streams, 15-second deterministic countdown interval handlers, animated state transitions, and instant scoring analytics.',
    tech: ['React.js', 'Framer Motion', 'OpenTDB API', 'JavaScript', 'CSS3', 'Vite'],
    demoUrl: 'https://quizii-by-ayush.vercel.app/',
    githubUrl: 'https://github.com/ayushsoni30/Quizii-by-Ayush',
  },
  {
    id: '03',
    title: 'HireCoreOS — AI Career & Recruitment OS',
    tagline: 'Autonomous career pathway and skill-gap analysis engine',
    category: 'ENTERPRISE · AI INTEGRATION',
    description:
      'AI recruitment platform providing structured technical candidate evaluation, algorithmic skill gap detection, and personalized roadmap synthesis powered by modern LLM APIs.',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'AI API', 'Tailwind CSS'],
    demoUrl: 'https://hirecore.localplayer.dev/landing',
    githubUrl: 'https://github.com/ayushsoni30/HireCoreOS',
  },
]

const MEASUREMENTS = [
  { label: 'Claude 3.5 Sonnet stream (ZeniN)', value: '142ms TTFT' },
  { label: 'Lighthouse performance — Quizii', value: '98 / 100' },
  { label: 'MongoDB aggregation latency', value: '34ms' },
  { label: 'REST endpoint response time', value: '48ms' },
]

export default function Projects() {
  return (
    <section id="projects" className="py-24 border-b border-line relative">
      <div className="px-6 md:px-12 max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="mb-16 text-left">
          <div className="eyebrow-label mb-3">
            <span className="eyebrow-marker" />
            <span>02 — SELECTED WORK</span>
          </div>
          <h2 className="display text-4xl md:text-6xl max-w-3xl mb-4">
            Things I've shipped.
          </h2>
          <p className="font-sans text-base md:text-lg text-ink-muted max-w-2xl">
            Three production systems — each with a live deployment, public source, and a
            measurable performance profile.
          </p>
        </div>

        {/* Editorial Project Rows */}
        <div className="border-t border-line">
          {PROJECTS.map((project) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="py-10 md:py-12 border-b border-line grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 group"
            >
              {/* Index + Meta */}
              <div className="lg:col-span-2">
                <span className="font-mono text-xs text-accent">[{project.id}]</span>
                <span className="font-mono text-[11px] text-ink-faint uppercase tracking-wider ml-2 hidden md:inline">
                  {project.category}
                </span>
              </div>

              {/* Body */}
              <div className="lg:col-span-10 lg:pr-8">
                <h3 className="display text-3xl md:text-4xl mb-2 group-hover:text-accent transition-colors duration-150">
                  {project.title}
                </h3>
                <div className="font-serif text-base md:text-lg italic text-ink-muted mb-4">
                  {project.tagline}
                </div>
                <p className="font-sans text-sm text-ink-muted leading-relaxed max-w-3xl mb-6">
                  {project.description}
                </p>

                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-x-4 gap-y-1.5">
                    {project.tech.map((t, tIdx) => (
                      <span key={tIdx} className="font-mono text-[11px] text-ink-faint">
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-5">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-ink hover:text-accent transition-colors duration-150"
                      aria-label={`Live demo for ${project.title}`}
                    >
                      <span>Live</span>
                      <FiArrowUpRight />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-ink hover:text-accent transition-colors duration-150"
                      aria-label={`GitHub repo for ${project.title}`}
                    >
                      <FiGithub />
                      <span>Code</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Measured Performance — quiet hairline list */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-b border-line">
          {MEASUREMENTS.map((m, idx) => (
            <div key={idx} className="py-5 flex flex-col gap-1 lg:pr-8">
              <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink-faint">
                {m.label}
              </span>
              <span className="font-mono text-sm text-ink">{m.value}</span>
            </div>
          ))}
        </div>

        {/* Run locally note (folded from the old code section) */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-8">
          <p className="font-sans text-sm text-ink-muted">
            Every system is architected for clean local reproduction — clone, install, run.
          </p>
          <a
            href="https://github.com/ayushsoni30/ZENIN--TECH--AI.git"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.14em] text-ink hover:text-accent transition-colors duration-150 shrink-0"
          >
            <span>git clone ZENIN--TECH--AI</span>
            <FiArrowUpRight />
          </a>
        </div>

      </div>
    </section>
  )
}