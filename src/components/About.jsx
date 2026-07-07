import { motion } from 'framer-motion'

const STATS = [
  { icon: '🚀', text: '2+ Projects Deployed' },
  { icon: '🏆', text: '2x Hackathon Winner' },
  { icon: '📚', text: 'Currently: B.Tech CSE AI&ML' },
  { icon: '🤖', text: 'AI Integration Experience' },
]

export default function About() {
  // Animation settings for container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  // Animation settings for children
  const itemVariants = {
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
    <section id="about" className="py-24 bg-bg-dark relative overflow-hidden">
      {/* Decorative Blur Background element */}
      <div className="absolute bottom-10 right-10 w-75 h-75 rounded-full bg-primary/5 blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          className="max-w-3xl mx-auto text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={itemVariants}
        >
          <span className="text-primary font-display font-medium tracking-widest text-sm uppercase">
            About Me
          </span>
          <h2 className="font-display font-bold text-3xl md:text-5xl text-text-light tracking-tight mt-2 mb-6">
            My Background
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Bio Text block */}
          <motion.div
            className="text-left font-sans text-text-muted text-base md:text-lg leading-relaxed space-y-6 mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={itemVariants}
          >
            <p>
              I'm <strong className="text-text-light font-semibold">Ayush Soni</strong>, a Full Stack
              Developer specializing in the MERN stack — MongoDB, Express.js, React, and Node.js. I
              build performant, scalable web applications with clean UI and robust backend
              architecture.
            </p>
            <p>
              I have hands-on experience integrating AI into production apps, having built projects
              using <strong className="text-text-light font-semibold">Claude API</strong> for
              intelligent, context-aware user experiences.
            </p>
            <p>
              Currently pursuing{' '}
              <strong className="text-text-light font-semibold">B.Tech in CSE (AI & ML)</strong> from
              School of Management Sciences, Lucknow, and actively exploring Generative AI, RAG
              pipelines, and AI Agents to build the next generation of intelligent applications.
            </p>
          </motion.div>

          {/* Stats Cards grid */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            {STATS.map((stat, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -8, borderColor: '#3b82f6' }}
                transition={{ duration: 0.3 }}
                className="bg-card-dark border border-border-dark p-6 rounded-2xl flex flex-col items-center justify-center text-center shadow-lg transition-all duration-300 hover:shadow-[0_10px_20px_rgba(59,130,246,0.15)] group"
              >
                <span className="text-3xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </span>
                <span className="font-sans text-sm md:text-base font-semibold text-text-light tracking-wide leading-snug">
                  {stat.text}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
