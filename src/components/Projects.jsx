import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiExternalLink, FiGithub } from 'react-icons/fi'
import hirecoreImg from '../assets/hirecoreos.png'
import quiziiImg from '../assets/quizii.png'
import zeninImg from '../assets/zenin.png'

const PROJECTS = [
  {
    id: '01',
    title: 'ZeniN — AI Technical Mentor',
    tagline: 'Real-time AI Engineering Assistant with Claude API',
    badges: ['AI INFERENCE', 'MERN STACK'],
    category: 'ai',
    description:
      'Full-stack AI mentor delivering context-aware coding guidance with strict software-engineering domain restrictions, dynamic follow-up prompt evaluation, and persistent MongoDB session threads.',
    tech: ['React 18', 'Node.js', 'Express.js', 'MongoDB', 'Claude API', 'Tailwind CSS'],
    demoUrl: 'https://zenin-tech-ai.vercel.app/',
    githubUrl: 'https://github.com/ayushsoni30/ZENIN--TECH--AI',
    image: zeninImg,
    metrics: { latency: '142ms', architecture: 'Microservice' },
  },
  {
    id: '02',
    title: 'Quizii — Interactive Quiz Platform',
    tagline: 'High-Performance Reactive Assessment Engine',
    badges: ['FRONTEND', 'REST API'],
    category: 'frontend',
    description:
      'Engineered interactive assessment engine with dynamic OpenTDB question streams, 15-second deterministic countdown interval handlers, animated state transitions, and instant scoring analytics.',
    tech: ['React.js', 'Framer Motion', 'OpenTDB API', 'JavaScript', 'CSS3', 'Vite'],
    demoUrl: 'https://quizii-by-ayush.vercel.app/',
    githubUrl: 'https://github.com/ayushsoni30/Quizii-by-Ayush',
    image: quiziiImg,
    metrics: { perf: '99/100', timing: '15s Loop' },
  },
  {
    id: '03',
    title: 'HireCoreOS — AI Career & Recruitment OS',
    tagline: 'Autonomous Career Pathway & Skill Gap Analysis Engine',
    badges: ['ENTERPRISE', 'AI INTEGRATION'],
    category: 'ai',
    description:
      'AI recruitment platform providing structured technical candidate evaluation, algorithmic skill gap detection, and personalized roadmap synthesis powered by modern LLM APIs.',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'AI API', 'Tailwind CSS'],
    demoUrl: 'https://hirecore.localplayer.dev/landing',
    githubUrl: 'https://github.com/ayushsoni30/HireCoreOS',
    image: hirecoreImg,
    metrics: { coverage: 'End-to-End', auth: 'JWT + RBAC' },
  },
]

export default function Projects() {
  const [filter, setFilter] = useState('all')

  const filteredProjects = PROJECTS.filter((p) => {
    if (filter === 'all') return true
    return p.category === filter
  })

  return (
    <section id="projects" className="py-24 border-b border-[#252525] bg-[#0B0B0B] relative">
      <div className="px-6 md:px-12 max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 text-left">
          <div>
            <div className="eyebrow-label mb-3">
              <span className="eyebrow-marker" />
              <span>DEPLOYED PRODUCTION SYSTEMS</span>
            </div>
            <h2 className="font-sans text-3xl md:text-5xl font-bold tracking-tight text-[#F2F2F0]">
              Featured Projects
            </h2>
            <p className="font-sans text-base md:text-lg text-[#777777] mt-3 max-w-xl">
              Production web applications and AI services built with modular architectures and verified deployment pipelines.
            </p>
          </div>

          {/* Infrastructure Filter Tabs (DESIGN.md Section 19) */}
          <div className="flex items-center gap-2 border border-[#252525] p-1 bg-[#111111] self-start md:self-auto">
            <button
              onClick={() => setFilter('all')}
              className={`font-mono text-xs uppercase tracking-wider px-3.5 py-1.5 transition-all duration-150 cursor-pointer ${
                filter === 'all'
                  ? 'bg-[#F2F2F0] text-[#0B0B0B] font-semibold'
                  : 'text-[#777777] hover:text-[#F2F2F0]'
              }`}
            >
              ALL [03]
            </button>
            <button
              onClick={() => setFilter('ai')}
              className={`font-mono text-xs uppercase tracking-wider px-3.5 py-1.5 transition-all duration-150 cursor-pointer ${
                filter === 'ai'
                  ? 'bg-[#F2F2F0] text-[#0B0B0B] font-semibold'
                  : 'text-[#777777] hover:text-[#F2F2F0]'
              }`}
            >
              AI SYSTEMS [02]
            </button>
            <button
              onClick={() => setFilter('frontend')}
              className={`font-mono text-xs uppercase tracking-wider px-3.5 py-1.5 transition-all duration-150 cursor-pointer ${
                filter === 'frontend'
                  ? 'bg-[#F2F2F0] text-[#0B0B0B] font-semibold'
                  : 'text-[#777777] hover:text-[#F2F2F0]'
              }`}
            >
              FRONTEND [01]
            </button>
          </div>
        </div>

        {/* Technical Project Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="bg-[#111111] border border-[#252525] hover:border-[#303030] transition-colors duration-180 flex flex-col justify-between text-left group"
            >
              {/* Project Top Bar */}
              <div className="px-6 py-4 border-b border-[#252525] flex items-center justify-between font-mono text-xs text-[#777777]">
                <div className="flex items-center gap-2">
                  <span className="text-[#FF6900] font-bold">[{project.id}]</span>
                  <span className="uppercase tracking-wider">{project.category}</span>
                </div>
                <div className="flex gap-2">
                  {project.badges.map((badge, bIdx) => (
                    <span
                      key={bIdx}
                      className="text-[10px] text-[#777777] border border-[#252525] px-2 py-0.5"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              </div>

              {/* Project Image Preview */}
              <div className="h-52 overflow-hidden bg-[#151515] border-b border-[#252525] relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 group-hover:scale-102 transition-all duration-300"
                />
              </div>

              {/* Card Body */}
              <div className="p-6 md:p-8 flex flex-col grow">
                <h3 className="font-sans text-xl font-bold text-[#F2F2F0] mb-2 group-hover:text-[#FF6900] transition-colors duration-150">
                  {project.title}
                </h3>
                
                <p className="font-sans text-sm text-[#777777] leading-relaxed mb-6 grow">
                  {project.description}
                </p>

                {/* Tech Chips */}
                <div className="flex flex-wrap gap-1.5 mb-8">
                  {project.tech.map((t, tIdx) => (
                    <span
                      key={tIdx}
                      className="font-mono text-[11px] bg-[#151515] text-[#777777] border border-[#252525] px-2 py-1"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Industrial Buttons */}
                <div className="grid grid-cols-2 gap-3 pt-4 border-t border-[#252525] mt-auto">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary text-xs py-2.5 px-3 w-full"
                    aria-label={`Live Demo for ${project.title}`}
                  >
                    <FiExternalLink />
                    <span>LIVE DEMO ↗</span>
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary text-xs py-2.5 px-3 w-full"
                    aria-label={`GitHub repo for ${project.title}`}
                  >
                    <FiGithub />
                    <span>GITHUB ↗</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Global Repository Link */}
        <div className="text-center pt-8 border-t border-[#252525]">
          <a
            href="https://github.com/ayushsoni30"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 font-mono text-xs uppercase tracking-[0.14em] text-[#777777] hover:text-[#F2F2F0] transition-colors duration-150"
          >
            <span>VIEW COMPLETE REPOSITORY ARCHIVE ON GITHUB</span>
            <span>→</span>
          </a>
        </div>

      </div>
    </section>
  )
}
