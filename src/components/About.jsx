import { motion } from 'framer-motion'
import { FiLayers, FiAward, FiBookOpen, FiCpu, FiCheckCircle, FiTerminal } from 'react-icons/fi'

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
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
    <section id="about" className="py-24 bg-bg-dark relative overflow-hidden">
      {/* Background Decorative Grids */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b08_1px,transparent_1px),linear-gradient(to_bottom,#1e293b08_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Scattered Accent Dots */}
      <div className="absolute top-1/4 left-10 accent-dot-neon" />
      <div className="absolute bottom-1/4 right-10 accent-dot-neon" />
      <div className="absolute top-2/3 right-1/3 accent-dot-neon" />

      {/* Decorative Glow */}
      <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-primary/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          className="max-w-3xl mx-auto text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-secondary font-mono tracking-widest text-xs uppercase bg-secondary/10 px-3 py-1 rounded-full border border-secondary/20">
            SYSTEM_PROFILE // CORE
          </span>
          <h2 className="font-display font-bold text-3xl md:text-5xl text-text-light tracking-tight mt-4 mb-4">
            Professional Profile
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto">
          
          {/* Left Column: Bio & Core Competencies inside a Gold Glass Panel */}
          <motion.div
            className="lg:col-span-7 flex flex-col justify-center space-y-6 text-left glass-panel-neon-gold border-2 p-8 rounded-3xl relative overflow-hidden video-crt-overlay video-scanline shadow-2xl"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            {/* HUD Status label */}
            <div className="absolute top-4 right-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary blink-rec" />
              <span className="font-mono text-[9px] text-secondary tracking-widest uppercase font-bold">FEED_AS_ABOUT</span>
            </div>

            <motion.p variants={itemVariants} className="font-sans text-text-muted text-base md:text-lg leading-relaxed relative z-20">
              I am a results-oriented <strong className="text-text-light font-semibold">Full Stack Developer</strong> specializing in engineering performant MERN stack web applications and integrating advanced Artificial Intelligence systems. Guided by architectural excellence, I bridge the gap between robust backend structures and highly intuitive user experiences.
            </motion.p>
            
            <motion.p variants={itemVariants} className="font-sans text-text-muted text-base md:text-lg leading-relaxed relative z-20">
              My core expertise includes building production-ready platforms using React, Node.js, Express, and MongoDB, alongside crafting context-aware solutions powered by the <strong className="text-text-light font-semibold">Claude API</strong>. I focus on writing modular, self-documenting code, adhering to strict software engineering standards, and designing databases optimized for horizontal scaling.
            </motion.p>
            
            <motion.p variants={itemVariants} className="font-sans text-text-muted text-base md:text-lg leading-relaxed relative z-20">
              Currently pursuing a <strong className="text-text-light font-semibold">B.Tech in Computer Science & Engineering (AI & ML)</strong> at the School of Management Sciences, Lucknow, I actively architect workflows around Generative AI, Retrieval-Augmented Generation (RAG), and autonomous agents to resolve real-world industry bottlenecks.
            </motion.p>

            {/* Inline Dashboard Table rows for highlights */}
            <motion.div variants={itemVariants} className="pt-6 border-t border-border-dark/60 space-y-3 relative z-20">
              <h4 className="text-xs font-bold text-secondary uppercase font-mono tracking-wider mb-2">Key Competencies</h4>
              
              <div className="row-hover-item alternate-row border border-border-dark/40 bg-card-dark/40 rounded-xl p-3 flex items-center justify-between transition-all duration-200">
                <div className="flex items-center gap-3">
                  <FiCheckCircle className="text-primary text-sm" />
                  <span className="font-sans text-sm text-text-light font-medium">Software Quality Assurance & Scalability</span>
                </div>
                <span className="text-[10px] font-mono text-secondary border border-secondary/20 bg-secondary/5 px-2 py-0.5 rounded">VERIFIED</span>
              </div>

              <div className="row-hover-item alternate-row border border-border-dark/40 bg-card-dark/40 rounded-xl p-3 flex items-center justify-between transition-all duration-200">
                <div className="flex items-center gap-3">
                  <FiCheckCircle className="text-primary text-sm" />
                  <span className="font-sans text-sm text-text-light font-medium">AI Agent Integration & API Engineering</span>
                </div>
                <span className="text-[10px] font-mono text-secondary border border-secondary/20 bg-secondary/5 px-2 py-0.5 rounded">VERIFIED</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: SaaS/Dashboard Style Profile Console inside an Orange Glass Panel */}
          <motion.div
            className="lg:col-span-5 flex justify-center w-full"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Outer Frame with Glassmorphism and Video overlay */}
            <div className="w-full max-w-md glass-panel-neon-orange border-2 rounded-2xl p-6 relative overflow-hidden shadow-2xl transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,140,66,0.4)] video-crt-overlay video-scanline">
              
              {/* Decorative Console Header */}
              <div className="flex items-center justify-between border-b border-border-dark/60 pb-4 mb-6 z-20 relative">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500 blink-rec" />
                  <span className="font-mono text-xs font-bold tracking-wider text-text-light">REC [CAM_02]</span>
                </div>
                <div className="text-[10px] font-mono text-text-muted">ACTIVE_NODE_ONLINE</div>
              </div>

              {/* Nested Layered Frame 1 - Glassmorphic inner card */}
              <div className="border border-border-dark/60 rounded-xl p-4 bg-bg-dark/40 mb-4 transition-all duration-300 hover:border-primary/40 relative z-20">
                <div className="text-[10px] font-mono text-secondary font-bold mb-3 tracking-widest uppercase">System Summary</div>
                <div className="space-y-3">
                  
                  <div className="flex items-center justify-between border-b border-border-dark/30 pb-2">
                    <div className="flex items-center gap-2 text-text-muted">
                      <FiLayers className="text-xs text-primary" />
                      <span className="font-sans text-xs">Projects Deployed</span>
                    </div>
                    <span className="font-mono text-xs font-bold text-text-light">2+ Production</span>
                  </div>

                  <div className="flex items-center justify-between border-b border-border-dark/30 pb-2">
                    <div className="flex items-center gap-2 text-text-muted">
                      <FiAward className="text-xs text-primary" />
                      <span className="font-sans text-xs">Hackathon Rank</span>
                    </div>
                    <span className="font-mono text-xs font-bold text-text-light">2x Winner</span>
                  </div>

                  <div className="flex items-center justify-between border-b border-border-dark/30 pb-2">
                    <div className="flex items-center gap-2 text-text-muted">
                      <FiBookOpen className="text-xs text-primary" />
                      <span className="font-sans text-xs">Academic Core</span>
                    </div>
                    <span className="font-mono text-xs font-bold text-text-light">B.Tech CSE AI/ML</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-text-muted">
                      <FiCpu className="text-xs text-primary" />
                      <span className="font-sans text-xs">AI Frameworks</span>
                    </div>
                    <span className="font-mono text-xs font-bold text-text-light">Claude API / RAG</span>
                  </div>

                </div>
              </div>

              {/* Nested Layered Frame 2 (Decreasing glow / subtle details) */}
              <div className="border border-border-dark/30 rounded-lg p-3.5 bg-bg-dark/20 relative z-20">
                <div className="flex items-center gap-2.5 mb-2.5">
                  <FiTerminal className="text-xs text-secondary" />
                  <span className="font-mono text-[9px] font-bold text-text-muted uppercase tracking-wider">Console output log</span>
                </div>
                <div className="font-mono text-[11px] text-left text-text-muted/90 space-y-1">
                  <div><span className="text-primary font-bold">&gt;</span> initial_load_complete: true</div>
                  <div><span className="text-primary font-bold">&gt;</span> mern_stack_engine: [ready]</div>
                  <div><span className="text-primary font-bold">&gt;</span> artificial_intel_agent: [active]</div>
                  <div><span className="text-primary font-bold">&gt;</span> integrity_check: <span className="text-green-400">100% ok</span></div>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
