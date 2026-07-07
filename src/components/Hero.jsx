import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FiArrowRight, FiFileText } from 'react-icons/fi'

const ROLES = [
  'Full Stack MERN Developer',
  'AI Integration Enthusiast',
  'Open to Internship & Full-Time Roles',
]

export default function Hero() {
  const [currentText, setCurrentText] = useState('')
  const [roleIndex, setRoleIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  // Typewriter logic
  useEffect(() => {
    let timer
    const currentRole = ROLES[roleIndex]
    const speed = isDeleting ? 25 : 60

    if (!isDeleting && currentText === currentRole) {
      // Pause at complete role text
      timer = setTimeout(() => setIsDeleting(true), 2500)
    } else if (isDeleting && currentText === '') {
      setIsDeleting(false)
      setRoleIndex((prev) => (prev + 1) % ROLES.length)
    } else {
      timer = setTimeout(() => {
        const nextText = isDeleting
          ? currentRole.slice(0, currentText.length - 1)
          : currentRole.slice(0, currentText.length + 1)
        setCurrentText(nextText)
      }, speed)
    }

    return () => clearTimeout(timer)
  }, [currentText, isDeleting, roleIndex])

  const scrollToProjects = (e) => {
    e.preventDefault()
    const el = document.getElementById('projects')
    if (el) {
      const offsetTop = el.offsetTop - 80
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      })
    }
  }

  return (
    <section
      id="home"
      className="min-h-screen pt-28 pb-16 flex items-center justify-center relative overflow-hidden"
    >
      {/* Background Decorative Grids */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b12_1px,transparent_1px),linear-gradient(to_bottom,#1e293b12_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Background Glowing Orb */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-primary/10 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full z-10">
        {/* Left Content */}
        <motion.div
          className="lg:col-span-7 flex flex-col items-start text-left"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <span className="text-primary font-display font-medium tracking-widest text-sm uppercase mb-4">
            Hi, I'm
          </span>
          <h1 className="font-display font-bold text-5xl md:text-7xl text-text-light tracking-tight leading-none mb-6">
            Ayush Soni
          </h1>

          {/* Typewriter Output */}
          <div className="h-10 md:h-12 flex items-center mb-6">
            <span className="font-display font-semibold text-lg md:text-2xl text-secondary">
              → {currentText}
            </span>
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ repeat: Infinity, duration: 0.8, ease: 'steps(2)' }}
              className="inline-block w-1.5 h-6 md:h-8 bg-primary ml-1.5"
            />
          </div>

          <p className="font-sans text-base md:text-lg text-text-muted max-w-xl mb-10 leading-relaxed">
            Building scalable web apps and AI-powered solutions that solve real problems.
          </p>

          <div className="flex flex-wrap gap-4 w-full sm:w-auto">
            <a
              href="#projects"
              onClick={scrollToProjects}
              className="flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white font-sans text-sm md:text-base font-semibold px-8 py-3.5 rounded-full transition-all duration-300 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] group"
            >
              View Projects
              <FiArrowRight className="group-hover:translate-x-1 transition-transform duration-200" />
            </a>
            <a
              href="https://drive.google.com/file/d/1GtcM5X_tLoRk3gyO2ME3ddVqIebXMZUO/view?usp=drivesdk"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 border border-border-dark hover:border-text-light text-text-muted hover:text-text-light font-sans text-sm md:text-base font-semibold px-8 py-3.5 rounded-full bg-card-dark/40 hover:bg-card-dark/80 transition-all duration-300"
            >
              <FiFileText />
              Download Resume
            </a>
          </div>
        </motion.div>

        {/* Right Content - Mock Coding Editor */}
        <motion.div
          className="lg:col-span-5 flex justify-center w-full"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <motion.div
            whileHover={{ y: -5, rotateX: 2, rotateY: -2 }}
            transition={{ duration: 0.3 }}
            className="w-full max-w-md bg-card-dark border border-border-dark rounded-2xl shadow-2xl overflow-hidden prevent-select"
          >
            {/* Terminal Window Header */}
            <div className="bg-bg-dark/60 border-b border-border-dark px-4 py-3 flex items-center justify-between">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <div className="font-sans text-xs text-text-muted tracking-wide font-mono">
                ayush_soni.js
              </div>
              <div className="w-12" /> {/* spacer */}
            </div>

            {/* Terminal Editor Content */}
            <div className="p-6 font-mono text-left text-xs md:text-sm space-y-3 overflow-x-auto bg-[#0a0f1d]">
              <div>
                <span className="text-purple-400">const</span>{' '}
                <span className="text-blue-400">developer</span> = &#123;
              </div>
              <div className="pl-4">
                <span className="text-text-muted">name:</span>{' '}
                <span className="text-green-400">'Ayush Soni'</span>,
              </div>
              <div className="pl-4">
                <span className="text-text-muted">role:</span>{' '}
                <span className="text-green-400">'Full Stack & AI'</span>,
              </div>
              <div className="pl-4">
                <span className="text-text-muted">stack:</span> [
                <span className="text-green-400">'MERN'</span>,{' '}
                <span className="text-green-400">'Next.js'</span>,{' '}
                <span className="text-green-400">'Claude API'</span>],
              </div>
              <div className="pl-4">
                <span className="text-text-muted">education:</span>{' '}
                <span className="text-green-400">'B.Tech CSE (AI & ML)'</span>,
              </div>
              <div className="pl-4">
                <span className="text-text-muted">location:</span>{' '}
                <span className="text-green-400">'Lucknow, India'</span>
              </div>
              <div>&#125;;</div>
              <div className="pt-2 text-text-muted">// Initializing AI integrations...</div>
              <div>
                <span className="text-purple-400">async function</span>{' '}
                <span className="text-blue-400">integrateAI</span>() &#123;
              </div>
              <div className="pl-4">
                <span className="text-purple-400">const</span> mentor ={' '}
                <span className="text-purple-400">await</span>{' '}
                <span className="text-secondary">ClaudeAPI</span>.initialize(&#123;
              </div>
              <div className="pl-8">
                <span className="text-text-muted">model:</span>{' '}
                <span className="text-green-400">'claude-3-5-sonnet'</span>,
              </div>
              <div className="pl-8">
                <span className="text-text-muted">systemPrompt:</span>{' '}
                <span className="text-green-400">'Enforce software best practices'</span>
              </div>
              <div className="pl-4">&#125;);</div>
              <div className="pl-4">
                <span className="text-purple-400">return</span> mentor.startSession();
              </div>
              <div>&#125;</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
