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
  SiJsonwebtokens,
  SiAuth0,
  SiVercel,
  SiNetlify,
  SiGit,
  SiGithub,
  SiPostman,
  SiJupyter,
  SiStreamlit,
} from 'react-icons/si'
import { DiCss3 } from 'react-icons/di'
import { TbBrandVscode } from 'react-icons/tb'
import { FiLock, FiServer, FiShield } from 'react-icons/fi'

const SKILL_CATEGORIES = [
  {
    title: 'Languages',
    skills: [
      { name: 'JavaScript', icon: SiJavascript },
      { name: 'TypeScript', icon: SiTypescript },
      { name: 'Python', icon: SiPython },
    ],
  },
  {
    title: 'Frontend',
    skills: [
      { name: 'React.js', icon: SiReact },
      { name: 'Tailwind CSS', icon: SiTailwindcss },
      { name: 'HTML5', icon: SiHtml5 },
      { name: 'CSS3', icon: DiCss3 },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', icon: SiNodedotjs },
      { name: 'Express.js', icon: SiExpress },
    ],
  },
  {
    title: 'Database',
    skills: [{ name: 'MongoDB', icon: SiMongodb }],
  },
  {
    title: 'Auth & Security',
    skills: [
      { name: 'JWT', icon: SiJsonwebtokens },
      { name: 'OAuth 2.0', icon: FiLock },
      { name: 'Auth0', icon: SiAuth0 },
      { name: 'bcrypt', icon: FiShield },
    ],
  },
  {
    title: 'Deployment',
    skills: [
      { name: 'Vercel', icon: SiVercel },
      { name: 'Netlify', icon: SiNetlify },
      { name: 'Render', icon: FiServer },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', icon: SiGit },
      { name: 'GitHub', icon: SiGithub },
      { name: 'Postman', icon: SiPostman },
      { name: 'VS Code', icon: TbBrandVscode },
      { name: 'Jupyter', icon: SiJupyter },
      { name: 'Streamlit', icon: SiStreamlit },
    ],
  },
]

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  }

  return (
    <section id="skills" className="py-24 bg-bg-dark/50 relative overflow-hidden">
      <div className="absolute top-1/3 left-1/4 w-75 h-75 bg-primary/5 rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary font-display font-medium tracking-widest text-sm uppercase">
            My Toolbox
          </span>
          <h2 className="font-display font-bold text-3xl md:text-5xl text-text-light tracking-tight mt-2 mb-6">
            Skills & Technologies
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
        </motion.div>

        {/* Skill Groups Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {SKILL_CATEGORIES.map((category, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              className="bg-card-dark border border-border-dark p-6 rounded-2xl flex flex-col justify-start text-left shadow-lg"
            >
              <h3 className="font-display font-semibold text-lg text-secondary mb-5 border-b border-border-dark/60 pb-2">
                {category.title}
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {category.skills.map((skill, sIdx) => {
                  const Icon = skill.icon
                  return (
                    <motion.div
                      key={sIdx}
                      whileHover={{ y: -4, borderColor: '#3b82f6' }}
                      transition={{ duration: 0.2 }}
                      className="bg-bg-dark border border-border-dark px-3 py-2.5 rounded-xl flex items-center gap-2.5 transition-all duration-300 hover:shadow-[0_0_12px_rgba(59,130,246,0.2)] group"
                    >
                      <Icon className="text-xl text-text-muted group-hover:text-primary transition-colors duration-200" />
                      <span className="font-sans text-xs md:text-sm text-text-light group-hover:text-primary font-medium truncate">
                        {skill.name}
                      </span>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
