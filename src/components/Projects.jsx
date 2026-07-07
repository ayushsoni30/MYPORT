import { motion } from 'framer-motion'
import { FiGithub, FiExternalLink } from 'react-icons/fi'

const PROJECTS = [
  {
    title: 'ZeniN — AI Technical Mentor',
    badges: ['FEATURED', 'AI POWERED'],
    description:
      'A full-stack AI-powered technical mentor built with MERN stack and Claude API. Delivers real-time context-aware coding assistance with enforced software-engineering domain restriction, dynamic follow-up question generation, and persistent MongoDB-backed session management.',
    tech: ['React 18', 'Node.js', 'Express.js', 'MongoDB', 'Claude API', 'Tailwind CSS', 'Vite', 'REST API'],
    demoUrl: 'https://zenin-tech-ai.vercel.app/',
    githubUrl: 'https://github.com/ayushsoni30/ZENIN--TECH--AI',
    comingSoon: false,
    // Custom SVG-like component graphic for card
    graphic: (
      <div className="w-full h-full bg-[#0a0f1d] flex flex-col p-4 font-mono text-[10px] text-text-muted justify-between select-none">
        <div className="flex items-center gap-1.5 border-b border-border-dark pb-2 mb-2">
          <div className="w-2 h-2 rounded-full bg-primary" />
          <span className="text-white font-semibold">ZeniN Chat Session</span>
        </div>
        <div className="space-y-2 grow overflow-hidden">
          <div className="bg-card-dark p-2 rounded-lg border border-border-dark text-left">
            <span className="text-primary font-bold">User:</span> Explain REST vs GraphQL?
          </div>
          <div className="bg-primary/5 p-2 rounded-lg border border-primary/20 text-left">
            <span className="text-secondary font-bold">Claude AI:</span> REST exposes resources via URLs, while GraphQL allows querying client-specified shapes...
          </div>
        </div>
        <div className="mt-2 text-center text-primary text-[9px] border-t border-border-dark pt-1.5 font-bold">
          • Claude API Integrated •
        </div>
      </div>
    ),
  },
  {
    title: 'Quizii — Interactive Quiz App',
    badges: ['FRONTEND'],
    description:
      'A responsive React quiz app with real-time question fetching from OpenTDB API, 15-second countdown timer with auto-submit, Framer Motion animations, audio feedback, SVG progress bar, and confetti animation for high scores.',
    tech: ['React.js', 'Framer Motion', 'OpenTDB API', 'JavaScript', 'CSS3', 'Vite'],
    demoUrl: 'https://quizii-by-ayush.vercel.app/',
    githubUrl: 'https://github.com/ayushsoni30/Quizii-by-Ayush',
    comingSoon: false,
    graphic: (
      <div className="w-full h-full bg-[#0a0f1d] flex flex-col p-4 font-sans text-xs text-text-muted justify-between select-none">
        <div className="flex items-center justify-between border-b border-border-dark pb-2 mb-2">
          <span className="text-white font-bold font-display">Quizii Challenge</span>
          <span className="bg-red-500/10 text-red-400 px-2 py-0.5 rounded text-[10px] font-mono border border-red-500/20">
            Timer: 12s
          </span>
        </div>
        <div className="space-y-2 grow flex flex-col justify-center">
          <div className="font-semibold text-white text-center mb-1">
            Which hook is used for side effects in React?
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div className="bg-primary/10 border border-primary text-white p-2 rounded text-center font-medium">
              useEffect
            </div>
            <div className="bg-card-dark border border-border-dark p-2 rounded text-center">
              useState
            </div>
          </div>
        </div>
        <div className="w-full bg-border-dark h-1.5 rounded-full overflow-hidden mt-2">
          <div className="bg-primary h-full w-2/3" />
        </div>
      </div>
    ),
  },
  {
    title: 'Career Buddy — AI Career Assistant',
    badges: ['AI POWERED'],
    description:
      'An AI-powered career guidance assistant that helps students and developers discover personalized career paths, identify skill gaps, and receive intelligent learning roadmap recommendations through conversational AI.',
    tech: ['React.js', 'Node.js', 'MongoDB', 'Express.js', 'Tailwind CSS', 'AI API'],
    demoUrl: '#',
    githubUrl: 'https://github.com/ayushsoni30/careerbuddy',
    comingSoon: true,
    graphic: (
      <div className="w-full h-full bg-[#0a0f1d] flex flex-col p-4 font-sans text-xs text-text-muted justify-between select-none">
        <div className="flex items-center gap-1.5 border-b border-border-dark pb-2 mb-2">
          <div className="w-2.5 h-2.5 rounded-full bg-secondary" />
          <span className="text-white font-bold font-display">Career Buddy Roadmap</span>
        </div>
        <div className="grow flex items-center justify-center relative">
          {/* Mock Node Map */}
          <div className="flex items-center gap-4 z-10">
            <div className="bg-primary/20 border border-primary text-white px-2.5 py-1.5 rounded-lg text-[10px] font-semibold">
              Frontend Baselen
            </div>
            <div className="text-secondary font-bold font-mono">→</div>
            <div className="bg-card-dark border border-border-dark text-text-muted px-2.5 py-1.5 rounded-lg text-[10px]">
              AI Integration
            </div>
          </div>
          <div className="absolute w-2/3 h-0.5 bg-border-dark" />
        </div>
        <div className="mt-2 text-center text-secondary text-[9px] border-t border-border-dark pt-1.5 font-bold">
          • Interactive Roadmaps •
        </div>
      </div>
    ),
  },
]

export default function Projects() {
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
    <section id="projects" className="py-24 bg-bg-dark/50 relative overflow-hidden">
      {/* Background radial highlight */}
      <div className="absolute bottom-1/3 left-1/2 -translate-x-1/2 w-125 h-125 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary font-display font-medium tracking-widest text-sm uppercase">
            My Portfolio
          </span>
          <h2 className="font-display font-bold text-3xl md:text-5xl text-text-light tracking-tight mt-2 mb-4">
            Featured Projects
          </h2>
          <p className="font-sans text-text-muted text-base md:text-lg mb-6">
            Things I've built that I'm proud of
          </p>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
        </motion.div>

        {/* Project Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ y: -8, borderColor: '#3b82f6' }}
              transition={{ duration: 0.3 }}
              className="bg-card-dark border border-border-dark rounded-2xl overflow-hidden shadow-2xl flex flex-col h-full hover:shadow-[0_15px_30px_rgba(59,130,246,0.15)] group"
            >
              {/* Simulated Graphic Container with Image Zoom effect on hover */}
              <div className="h-48 border-b border-border-dark overflow-hidden relative">
                <div className="w-full h-full transition-transform duration-500 group-hover:scale-105">
                  {project.graphic}
                </div>
              </div>

              {/* Project Card Content */}
              <div className="p-6 flex flex-col grow text-left">
                {/* Badges */}
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {project.badges.map((badge, bIdx) => (
                    <span
                      key={bIdx}
                      className="font-sans text-[10px] font-bold tracking-wider px-2 py-0.5 rounded bg-primary/10 text-primary border border-primary/20"
                    >
                      {badge}
                    </span>
                  ))}
                </div>

                <h3 className="font-display font-bold text-xl text-text-light mb-3 group-hover:text-primary transition-colors duration-200">
                  {project.title}
                </h3>

                <p className="font-sans text-sm text-text-muted mb-6 leading-relaxed grow">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tech.map((t, tIdx) => (
                    <span
                      key={tIdx}
                      className="font-sans text-xs bg-bg-dark text-text-muted px-2.5 py-1 rounded-md border border-border-dark/60"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-3 mt-auto">
                  {project.comingSoon ? (
                    <button
                      disabled
                      className="flex items-center justify-center gap-1.5 bg-gray-700/50 text-gray-500 font-sans text-xs font-semibold px-4 py-2.5 rounded-xl border border-gray-700 cursor-not-allowed w-1/2"
                      aria-label="Live demo disabled"
                    >
                      <FiExternalLink />
                      Coming Soon
                    </button>
                  ) : (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-1.5 bg-primary hover:bg-primary/90 text-white font-sans text-xs font-semibold px-4 py-2.5 rounded-xl transition-all duration-300 w-1/2 shadow-md hover:shadow-[0_0_10px_rgba(59,130,246,0.3)]"
                      aria-label="Live Demo"
                    >
                      <FiExternalLink />
                      Live Demo
                    </a>
                  )}

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 border border-border-dark hover:border-text-light text-text-muted hover:text-text-light font-sans text-xs font-semibold px-4 py-2.5 rounded-xl bg-bg-dark/40 hover:bg-bg-dark/80 transition-all duration-300 w-1/2"
                    aria-label="GitHub Repository"
                  >
                    <FiGithub />
                    GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Github Projects */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <a
            href="https://github.com/ayushsoni30"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full max-w-md py-4 border border-primary text-primary hover:bg-primary hover:text-white font-sans font-bold text-center rounded-xl transition-all duration-300 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] flex items-center justify-center gap-2 group"
          >
            View All Projects on GitHub
            <span className="group-hover:translate-x-1.5 transition-transform duration-200">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
