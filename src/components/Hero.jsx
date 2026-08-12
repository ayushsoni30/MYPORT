import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FiArrowRight, FiFileText, FiTerminal } from 'react-icons/fi'

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

      {/* Scattered Accent Dots */}
      <div className="absolute top-1/3 left-1/4 accent-dot-neon" />
      <div className="absolute bottom-1/3 right-1/4 accent-dot-neon" />
      
      {/* Background Glowing Orb */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-primary/10 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center w-full z-10">
        
        {/* Left Content: Glassmorphism Console Panel */}
        <motion.div
          className="lg:col-span-7 flex flex-col items-start text-left glass-panel-neon-gold border-2 p-8 md:p-12 rounded-3xl relative overflow-hidden video-crt-overlay video-scanline shadow-2xl w-full"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* HUD Status label */}
          <div className="absolute top-4 right-6 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary blink-rec" />
            <span className="font-mono text-[9px] text-secondary tracking-widest uppercase font-bold">FEED_AS_LND</span>
          </div>

          <span className="text-primary font-display font-medium tracking-widest text-sm uppercase mb-4">
            Hi, I'm
          </span>
          <h1 className="font-display font-bold text-4xl md:text-6xl text-text-light tracking-tight leading-none mb-6">
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
              className="flex items-center justify-center gap-2 btn-primary-neon text-sm md:text-base px-8 py-3.5 group cursor-pointer"
            >
              View Projects
              <FiArrowRight className="group-hover:translate-x-1 transition-transform duration-200" />
            </a>
            <a
              href="https://drive.google.com/file/d/1GtcM5X_tLoRk3gyO2ME3ddVqIebXMZUO/view?usp=drivesdk"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 btn-secondary-neon text-sm md:text-base px-8 py-3.5 group cursor-pointer"
            >
              <FiFileText />
              Download Resume
            </a>
          </div>
        </motion.div>

        {/* Right Content - Mock Coding Editor in Glass panel with CRT effect */}
        <motion.div
          className="lg:col-span-5 flex justify-center w-full"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <motion.div
            whileHover={{ y: -5, rotateX: 2, rotateY: -2 }}
            transition={{ duration: 0.3 }}
            className="w-full max-w-md glass-panel-neon-orange border-2 rounded-2xl overflow-hidden shadow-2xl relative video-crt-overlay video-scanline"
          >
            {/* Terminal Window Header with recording feed details */}
            <div className="bg-bg-dark/60 border-b border-border-dark/60 px-4 py-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500 blink-rec" />
                <span className="font-mono text-[10px] text-primary tracking-widest font-bold">REC [CAM_01]</span>
              </div>
              <div className="font-mono text-[10px] text-text-muted tracking-wider">
                DIAGNOSTICS_CORE
              </div>
              <div className="text-[10px] font-mono text-secondary">29.97 FPS</div>
            </div>

            {/* High-Tech HUD Analytics Dashboard */}
            <div className="p-6 font-mono text-left text-xs space-y-6 bg-[#0a0f1d]/75 relative">
              
              {/* Telemetry GPS metadata overlay */}
              <div className="absolute bottom-2 right-4 font-mono text-[8px] text-primary/30 z-20 pointer-events-none select-none">
                SYS_LOC: 26.8467° N / 80.9462° E
              </div>

              {/* Row 1: Radar Scan & Object Recognition */}
              <div className="grid grid-cols-12 gap-4 items-center">
                {/* Sonar Radar Scan SVG */}
                <div className="col-span-5 flex justify-center">
                  <div className="relative w-24 h-24 rounded-full border border-primary/20 bg-bg-dark/40 flex items-center justify-center overflow-hidden">
                    <svg viewBox="0 0 100 100" className="w-full h-full text-primary/60">
                      <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
                      <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="0.5" />
                      <circle cx="50" cy="50" r="15" fill="none" stroke="currentColor" strokeWidth="0.5" />
                      <line x1="50" y1="5" x2="50" y2="95" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
                      <line x1="5" y1="50" x2="95" y2="50" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
                      {/* Sweep Scanning Line */}
                      <line x1="50" y1="50" x2="50" y2="5" stroke="var(--primary)" strokeWidth="1.5" className="radar-sweep-line" />
                      {/* Bounded Target Blips */}
                      <circle cx="35" cy="40" r="2" fill="var(--primary)" className="animate-ping" />
                      <circle cx="70" cy="65" r="2.5" fill="var(--primary)" />
                    </svg>
                    <div className="absolute text-[8px] text-secondary font-bold font-mono">SCANNING...</div>
                  </div>
                </div>

                {/* Target Metadata details */}
                <div className="col-span-7 space-y-1.5 border-l border-border-dark/60 pl-4">
                  <div className="text-[10px] text-secondary tracking-widest font-bold font-mono">TARGET IDENTIFIED</div>
                  <div className="text-sm font-bold text-text-light font-display">AYUSH SONI // DEV</div>
                  <div className="text-[10px] text-text-muted flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                    STATUS: SECURE_AUTHORIZED
                  </div>
                  <div className="text-[9px] text-text-muted">CONFIDENCE_RATING: 99.98%</div>
                  <div className="text-[9px] text-text-muted">COGNITIVE_LOAD: ACTIVE</div>
                </div>
              </div>

              {/* Row 2: Live Diagnostic Latency SVG Graph */}
              <div className="border border-border-dark/60 rounded-xl p-4 bg-bg-dark/40 relative">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-[9px] font-bold text-secondary uppercase tracking-widest font-mono">AI API Request Latency (CLAUDE_3.5)</span>
                  <span className="text-[9px] font-mono text-primary font-bold">142ms Avg</span>
                </div>
                <div className="h-12 w-full flex items-end">
                  <svg viewBox="0 0 200 50" className="w-full h-full text-primary">
                    {/* Simulated Waveform Path */}
                    <path
                      d="M 0,25 Q 15,10 30,25 T 60,35 T 90,20 T 120,40 T 150,15 T 180,30 T 200,25"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                    <path
                      d="M 0,25 Q 15,10 30,25 T 60,35 T 90,20 T 120,40 T 150,15 T 180,30 T 200,25 L 200,50 L 0,50 Z"
                      fill="url(#latency-gradient)"
                      opacity="0.1"
                    />
                    <defs>
                      <linearGradient id="latency-gradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="var(--primary)" />
                        <stop offset="100%" stopColor="transparent" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>

              {/* Row 3: Running Diagnostic Log Console Feed */}
              <div className="border border-border-dark/30 rounded-lg p-3 bg-bg-dark/60">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-1.5">
                    <FiTerminal className="text-secondary text-[10px]" />
                    <span className="font-mono text-[9px] font-bold text-text-muted uppercase tracking-wider">DIAGNOSTIC_LOGGER</span>
                  </div>
                  <span className="text-[8px] font-mono text-green-400">SYS_OPERATIONAL</span>
                </div>
                <div className="font-mono text-[10px] space-y-1 text-text-muted/90">
                  <div className="flex justify-between">
                    <span>&gt; connecting_to_claude_api...</span>
                    <span className="text-green-400">[SUCCESS]</span>
                  </div>
                  <div className="flex justify-between">
                    <span>&gt; cognitive_agent_status...</span>
                    <span className="text-green-400">[ONLINE]</span>
                  </div>
                  <div className="flex justify-between">
                    <span>&gt; database_pool_mern...</span>
                    <span className="text-secondary">[STABLE]</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
