import { useRef, useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FiGithub, FiExternalLink } from 'react-icons/fi'
import hirecoreImg from '../assets/hirecoreos.png'
import quiziiImg from '../assets/quizii.png'
import zeninImg from '../assets/zenin.png'

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
    image: zeninImg,
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
    image: quiziiImg,
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
    title: 'HireCoreOS — AI Recruitment & Career OS',
    badges: ['AI POWERED', 'FEATURED'],
    description:
      'An AI-powered recruitment and career guidance platform that helps candidates map their career pathways, identify skill gaps, and dynamically generates learning roadmaps using advanced LLM integrations.',
    tech: ['React.js', 'Node.js', 'MongoDB', 'Express.js', 'Tailwind CSS', 'AI API'],
    demoUrl: 'https://hirecore.localplayer.dev/landing',
    githubUrl: 'https://github.com/ayushsoni30/HireCoreOS',
    comingSoon: false,
    image: hirecoreImg,
    graphic: (
      <div className="w-full h-full bg-[#030303] flex flex-col p-4 font-sans text-xs text-text-muted justify-between select-none">
        <div className="flex items-center gap-1.5 border-b border-border-dark pb-2 mb-2">
          <div className="w-2.5 h-2.5 rounded-full bg-secondary" />
          <span className="text-white font-bold font-display">HireCoreOS Roadmap</span>
        </div>
        <div className="grow flex items-center justify-center relative">
          {/* Mock Node Map */}
          <div className="flex items-center gap-4 z-10">
            <div className="bg-primary/20 border border-primary text-white px-2.5 py-1.5 rounded-lg text-[10px] font-semibold">
              Frontend Baseline
            </div>
            <div className="text-secondary font-bold font-mono">→</div>
            <div className="bg-card-dark border border-border-dark text-text-muted px-2.5 py-1.5 rounded-lg text-[10px]">
              AI Integration
            </div>
          </div>
          <div className="absolute w-2/3 h-0.5 bg-border-dark" />
        </div>
        <div className="mt-2 text-center text-secondary text-[9px] border-t border-border-dark pt-1.5 font-bold">
          • AI Automated Pathways •
        </div>
      </div>
    ),
  },
]

function ProjectCard({ project, idx, cardVariants, isHovered, isAnyHovered }) {
  const cardRef = useRef(null)
  const [imgFailed, setImgFailed] = useState(false)
  const [offsets, setOffsets] = useState({ x: 0, y: 0 })
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    const card = cardRef.current
    if (isHovered && card) {
      const rect = card.getBoundingClientRect()
      const cardCenterX = rect.left + rect.width / 2
      const cardCenterY = rect.top + rect.height / 2
      const viewportCenterX = window.innerWidth / 2
      const viewportCenterY = window.innerHeight / 2
      
      setOffsets({
        x: viewportCenterX - cardCenterX,
        y: viewportCenterY - cardCenterY
      })
    } else {
      setOffsets({ x: 0, y: 0 })
    }
  }, [isHovered])

  const handleSpotlightMove = (e) => {
    const card = cardRef.current
    if (!card) return
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    card.style.setProperty('--spotlight-x', `${x}px`)
    card.style.setProperty('--spotlight-y', `${y}px`)
  }

  return (
    <motion.div
      id={`project-card-${idx}`}
      ref={cardRef}
      variants={cardVariants}
      onMouseMove={handleSpotlightMove}
      style={{
        zIndex: isHovered ? 100 : 10,
        transform: isHovered 
          ? `translate(${offsets.x}px, ${offsets.y}px) scale(${isMobile ? 1.02 : 1.15})` 
          : 'translate(0px, 0px) scale(1)',
        boxShadow: isHovered 
          ? '0 25px 60px rgba(255, 140, 66, 0.85), 0 0 100px rgba(212, 165, 116, 0.6)'
          : 'none',
        borderColor: isHovered ? 'var(--primary)' : 'var(--border-dark)',
        transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.4s ease, box-shadow 0.4s ease, opacity 0.4s ease, filter 0.4s ease',
      }}
      className={`bg-card-dark border-2 rounded-2xl overflow-hidden shadow-2xl flex flex-col h-full group origin-center transform-gpu relative ${
        isAnyHovered && !isHovered ? 'blur-[3px] scale-[0.94] opacity-25 pointer-events-none' : ''
      }`}
    >
      {/* Spotlight Hover Glow Overlay */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0"
        style={{
          background: `radial-gradient(320px circle at var(--spotlight-x, 0px) var(--spotlight-y, 0px), rgba(249, 115, 22, 0.06), transparent 80%)`,
        }}
      />

      {/* Simulated Graphic Container with Image Zoom effect on hover */}
      <div className="h-48 border-b border-border-dark overflow-hidden relative z-10 bg-black/20">
        <div className="w-full h-full transition-transform duration-500 group-hover:scale-105 flex items-center justify-center">
          {project.image && !imgFailed ? (
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover" 
              onError={() => setImgFailed(true)}
            />
          ) : (
            project.graphic
          )}
        </div>
      </div>

      {/* Project Card Content */}
      <div className="p-6 flex flex-col grow text-left relative z-10">
        <div className="flex flex-wrap gap-1.5 mb-3">
          {project.badges.map((badge, bIdx) => (
            <span
              key={bIdx}
              className="font-sans text-[10px] font-bold tracking-wider px-2 py-0.5 badge-tag-neon"
            >
              {badge}
            </span>
          ))}
        </div>

        <h3 className="font-display font-bold text-xl text-text-light mb-3 group-hover:text-primary transition-colors duration-200">
          <span className="font-mono text-sm text-primary mr-2 font-medium">[{String(idx + 1).padStart(2, '0')}]</span>
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
              className="flex items-center justify-center gap-1.5 bg-gray-700/50 text-gray-500 font-sans text-xs font-semibold px-4 py-2.5 border border-gray-700 cursor-not-allowed w-1/2"
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
              className="flex items-center justify-center gap-1.5 btn-primary-neon text-xs px-4 py-2.5 w-1/2 cursor-pointer"
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
            className="flex items-center justify-center gap-1.5 btn-secondary-neon text-xs px-4 py-2.5 w-1/2 cursor-pointer"
            aria-label="GitHub Repository"
          >
            <FiGithub />
            GitHub
          </a>
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const [hoveredIdx, setHoveredIdx] = useState(null)

  useEffect(() => {
    if (hoveredIdx === null) return

    document.body.classList.add('projects-card-hovered')

    const handleGlobalMouseMove = (e) => {
      const wrapper = document.getElementById(`project-wrapper-${hoveredIdx}`)
      const card = document.getElementById(`project-card-${hoveredIdx}`)
      if (!wrapper || !card) return

      const wrapperRect = wrapper.getBoundingClientRect()
      const cardRect = card.getBoundingClientRect()

      const pad = 10

      // Check if mouse is inside wrapper
      const insideWrapper = 
        e.clientX >= wrapperRect.left - pad &&
        e.clientX <= wrapperRect.right + pad &&
        e.clientY >= wrapperRect.top - pad &&
        e.clientY <= wrapperRect.bottom + pad

      // Check if mouse is inside centered card
      const insideCard = 
        e.clientX >= cardRect.left - pad &&
        e.clientX <= cardRect.right + pad &&
        e.clientY >= cardRect.top - pad &&
        e.clientY <= cardRect.bottom + pad

      // If mouse is outside BOTH, we hover out!
      if (!insideWrapper && !insideCard) {
        setHoveredIdx(null)
      }
    }

    const handleScroll = () => {
      setHoveredIdx(null)
    }

    const timer = setTimeout(() => {
      window.addEventListener('mousemove', handleGlobalMouseMove)
    }, 100)

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      clearTimeout(timer)
      window.removeEventListener('mousemove', handleGlobalMouseMove)
      window.removeEventListener('scroll', handleScroll)
      document.body.classList.remove('projects-card-hovered')
    }
  }, [hoveredIdx])

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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 relative"
          style={{ zIndex: hoveredIdx !== null ? 40 : 1 }}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {PROJECTS.map((project, idx) => (
            <div
              key={idx}
              id={`project-wrapper-${idx}`}
              className="h-full relative"
              onMouseEnter={() => setHoveredIdx(idx)}
            >
              <ProjectCard 
                idx={idx} 
                project={project} 
                cardVariants={cardVariants} 
                isHovered={hoveredIdx === idx}
                isAnyHovered={hoveredIdx !== null}
              />
            </div>
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
            className="w-full max-w-md py-4 btn-secondary-neon text-center flex items-center justify-center gap-2 group cursor-pointer"
          >
            View All Projects on GitHub
            <span className="group-hover:translate-x-1.5 transition-transform duration-200">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
