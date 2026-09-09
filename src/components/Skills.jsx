import { motion } from 'framer-motion'
import {
  SiJavascript,
  SiTypescript,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiHtml5,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiVercel,
  SiRender,
  SiDocker,
  SiFastapi,
} from 'react-icons/si'
import { DiCss3, DiMysql } from 'react-icons/di'
import { FiCpu, FiTerminal } from 'react-icons/fi'
import { LuWorkflow } from 'react-icons/lu'
import { MdArchitecture } from 'react-icons/md'

const STACK_CATEGORIES = [
  {
    title: 'LANGUAGES & RUNTIMES',
    category: 'RUNTIME',
    skills: [
      { name: 'JavaScript (ES6+)', icon: SiJavascript },
      { name: 'TypeScript', icon: SiTypescript },
      { name: 'Python 3', icon: SiPython },
      { name: 'HTML5 Semantic', icon: SiHtml5 },
    ],
  },
  {
    title: 'FRONTEND ARCHITECTURE',
    category: 'CLIENT',
    skills: [
      { name: 'React 18', icon: SiReact },
      { name: 'Tailwind CSS', icon: SiTailwindcss },
      { name: 'CSS3 / PostCSS', icon: DiCss3 },
      { name: 'Framer Motion', icon: FiTerminal },
    ],
  },
  {
    title: 'BACKEND & SERVICES',
    category: 'SERVER',
    skills: [
      { name: 'Node.js', icon: SiNodedotjs },
      { name: 'Express.js', icon: SiExpress },
      { name: 'FastAPI', icon: SiFastapi },
      { name: 'RESTful Design', icon: MdArchitecture },
    ],
  },
  {
    title: 'AI & LLM INTEGRATION',
    category: 'INTELLIGENCE',
    skills: [
      { name: 'Claude API (Anthropic)', icon: FiCpu },
      { name: 'Prompt Engineering', icon: FiTerminal },
      { name: 'RAG Workflows', icon: MdArchitecture },
      { name: 'Context Optimization', icon: FiCpu },
    ],
  },
  {
    title: 'DATA PERSISTENCE',
    category: 'DATABASE',
    skills: [
      { name: 'MongoDB Atlas', icon: SiMongodb },
      { name: 'Mongoose ODM', icon: SiMongodb },
      { name: 'MySQL Relational', icon: DiMysql },
      { name: 'Query Optimization', icon: MdArchitecture },
    ],
  },
  {
    title: 'DEVOPS & CLOUD EDGE',
    category: 'INFRA',
    skills: [
      { name: 'Docker Containers', icon: SiDocker },
      { name: 'CI/CD Pipelines', icon: LuWorkflow },
      { name: 'Vercel Edge', icon: SiVercel },
      { name: 'Render Cloud', icon: SiRender },
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-24 border-b border-[#252525] bg-[#0B0B0B] relative">
      <div className="px-6 md:px-12 max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-left mb-16">
          <div className="eyebrow-label mb-3">
            <span className="eyebrow-marker" />
            <span>TECHNICAL MATRIX</span>
          </div>
          <h2 className="font-sans text-3xl md:text-5xl font-bold tracking-tight text-[#F2F2F0]">
            Skills & Infrastructure Stack
          </h2>
          <p className="font-sans text-base md:text-lg text-[#777777] mt-3 max-w-2xl">
            Core technologies and tools deployed across production web applications, database layers, and AI inference workflows.
          </p>
        </div>

        {/* Technical Matrix Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {STACK_CATEGORIES.map((cat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.05 }}
              className="bg-[#111111] border border-[#252525] p-6 text-left hover:border-[#303030] transition-colors duration-180 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between border-b border-[#252525] pb-3 mb-4 font-mono text-[11px] text-[#555555]">
                  <span className="text-[#FF6900] font-semibold">{cat.category}</span>
                  <span>[{String(idx + 1).padStart(2, '0')}]</span>
                </div>

                <h3 className="font-mono text-xs font-bold text-[#F2F2F0] tracking-wider uppercase mb-5">
                  {cat.title}
                </h3>

                <div className="space-y-2">
                  {cat.skills.map((skill, sIdx) => {
                    const Icon = skill.icon
                    return (
                      <div
                        key={sIdx}
                        className="flex items-center justify-between p-2 bg-[#151515] border border-[#202020] hover:border-[#303030] transition-colors duration-150"
                      >
                        <div className="flex items-center gap-2.5">
                          <Icon className="text-sm text-[#777777]" />
                          <span className="font-mono text-xs text-[#F2F2F0]">
                            {skill.name}
                          </span>
                        </div>
                        <span className="font-mono text-[9px] text-[#555555] uppercase">
                          VERIFIED
                        </span>
                      </div>
                    )
                  })}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
