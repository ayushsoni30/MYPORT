import { motion } from 'framer-motion'

const STACK_CATEGORIES = [
  {
    title: 'Languages & Runtimes',
    skills: ['JavaScript (ES6+)', 'TypeScript', 'Python 3', 'HTML5 Semantic'],
  },
  {
    title: 'Frontend',
    skills: ['React 18', 'Tailwind CSS', 'CSS3 / PostCSS', 'Framer Motion'],
  },
  {
    title: 'Backend & Services',
    skills: ['Node.js', 'Express.js', 'FastAPI', 'RESTful Design'],
  },
  {
    title: 'AI & LLM Integration',
    skills: ['Claude API (Anthropic)', 'Prompt Engineering', 'RAG Workflows', 'Context Optimization'],
  },
  {
    title: 'Data Persistence',
    skills: ['MongoDB Atlas', 'Mongoose ODM', 'MySQL', 'Query Optimization'],
  },
  {
    title: 'DevOps & Cloud',
    skills: ['Docker Containers', 'CI/CD Pipelines', 'Vercel Edge', 'Render Cloud'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-24 border-b border-line relative">
      <div className="px-6 md:px-12 max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="mb-16 text-left">
          <div className="eyebrow-label mb-3">
            <span className="eyebrow-marker" />
            <span>05 — SKILLS</span>
          </div>
          <h2 className="display text-4xl md:text-6xl max-w-3xl mb-4">
            The stack I build with.
          </h2>
          <p className="font-sans text-base md:text-lg text-ink-muted max-w-2xl">
            Core technologies and tools deployed across production web applications, database
            layers, and AI inference workflows.
          </p>
        </div>

        {/* 3-Column Hairline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 border-t border-line">
          {STACK_CATEGORIES.map((cat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.04 }}
              className={`py-8 md:py-10 md:px-6 border-b border-line ${
                idx >= 3 ? 'md:border-b-0' : ''
              } ${idx % 3 === 0 ? '' : 'md:border-l'}`}
            >
              <h3 className="display text-xl mb-5">{cat.title}</h3>
              <ul className="space-y-2.5">
                {cat.skills.map((skill, sIdx) => (
                  <li key={sIdx} className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 bg-accent shrink-0" />
                    <span className="font-sans text-sm text-ink-muted">{skill}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}