import { motion } from 'framer-motion'

const CERTIFICATIONS = [
  {
    icon: '🎓',
    title: 'Complete Web Development Course',
    platform: 'Udemy',
    issued: 'March 21, 2026',
    duration: '100 Hours',
    instructor: 'Hitesh Choudhary',
    badge: 'COMPLETED',
  },
  {
    icon: '💻',
    title: 'Python Programming',
    platform: 'Microsoft × Skill India Digital Hub (NSDC)',
    issued: 'Aug 13, 2025',
    duration: '40 Hours',
    instructor: 'Manju Dhasmana (Senior Director CSR, Microsoft)',
    badge: 'COMPLETED',
  },
  {
    icon: '🐍',
    title: 'Python Training',
    platform: 'NextOlive',
    issued: 'During Training Period',
    duration: '6 Weeks',
    instructor: 'Mohd Vaseem (Company CEO)',
    badge: 'COMPLETED',
  },
]

export default function Certifications() {
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
    <section id="certifications" className="py-24 bg-bg-dark relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-1/4 right-10 w-[300px] h-[300px] bg-primary/5 rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary font-display font-medium tracking-widest text-sm uppercase">
            Credentials
          </span>
          <h2 className="font-display font-bold text-3xl md:text-5xl text-white tracking-tight mt-2 mb-4">
            Certifications
          </h2>
          <p className="font-sans text-text-muted text-base md:text-lg mb-6">
            Verified skills and knowledge
          </p>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
        </motion.div>

        {/* Currently Learning Highlight Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto mb-12 bg-card-dark border border-border-dark p-6 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl hover:border-primary/50 transition-all duration-300"
        >
          <div className="text-left">
            <span className="font-sans text-[10px] font-bold tracking-widest text-secondary uppercase bg-secondary/10 px-3 py-1 rounded-full border border-secondary/20">
              Active Focus
            </span>
            <h3 className="font-display font-bold text-lg text-white mt-3">
              Currently Learning: Generative AI & LLMs
            </h3>
            <p className="font-sans text-sm text-text-muted mt-1">
              Deep-diving into Prompt Engineering, RAG Pipelines, and AI Agents to build intelligent tools.
            </p>
          </div>
          <div className="pulse-badge bg-green-500/10 text-green-400 border border-green-500/20 font-sans text-xs font-bold tracking-wider px-4 py-2 rounded-full flex items-center gap-2 shrink-0 select-none">
            <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-ping" />
            Learning GenAI
          </div>
        </motion.div>

        {/* Certifications Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {CERTIFICATIONS.map((cert, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ y: -6, borderColor: '#3b82f6' }}
              transition={{ duration: 0.3 }}
              className="bg-card-dark border border-border-dark p-6 md:p-8 rounded-2xl shadow-xl flex flex-col text-left justify-between h-full transition-all duration-300 hover:shadow-[0_10px_25px_rgba(59,130,246,0.1)] group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-4xl bg-bg-dark p-3 rounded-xl border border-border-dark group-hover:scale-110 transition-transform duration-300">
                    {cert.icon}
                  </span>
                  <span className="font-sans text-[10px] font-bold tracking-wider px-2.5 py-0.5 rounded bg-green-500/10 text-green-400 border border-green-500/20">
                    {cert.badge}
                  </span>
                </div>
                <h3 className="font-display font-bold text-lg text-white mb-2 leading-snug group-hover:text-primary transition-colors duration-200">
                  {cert.title}
                </h3>
                <p className="font-sans text-sm font-semibold text-secondary mb-4">
                  {cert.platform}
                </p>
                <div className="space-y-1.5 border-t border-border-dark/60 pt-4 font-sans text-xs text-text-muted">
                  <div>
                    <span className="text-white font-medium">Issued:</span> {cert.issued}
                  </div>
                  <div>
                    <span className="text-white font-medium">Duration:</span> {cert.duration}
                  </div>
                  {cert.instructor && (
                    <div>
                      <span className="text-white font-medium">By:</span> {cert.instructor}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
