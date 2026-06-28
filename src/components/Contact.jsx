import { motion } from 'framer-motion'
import { FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin, FiFileText, FiDownload } from 'react-icons/fi'

const CONTACT_CARDS = [
  {
    icon: FiMail,
    title: 'Email',
    value: 'ayushsoni55aa@gmail.com',
    href: 'https://mail.google.com/mail/?view=cm&to=ayushsoni55aa@gmail.com', // ✅ updated
    label: 'Open mail application',
  },
  {
    icon: FiPhone,
    title: 'Phone',
    value: '+91-8112987405',
    href: 'tel:+918112987405',
    label: 'Open telephone dialer',
  },
  {
    icon: FiMapPin,
    title: 'Location',
    value: 'Lucknow, India',
    href: null,
    label: 'Display location',
  },
  {
    icon: FiGithub,
    title: 'GitHub',
    value: 'github.com/ayushsoni30',
    href: 'https://github.com/ayushsoni30',
    label: 'Visit GitHub profile',
  },
  {
    icon: FiLinkedin,
    title: 'LinkedIn',
    value: 'linkedin.com/in/ayushsoni3030',
    href: 'https://www.linkedin.com/in/ayushsoni3030',
    label: 'Visit LinkedIn profile',
  },
]

export default function Contact() {
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
    hidden: { opacity: 0, y: 25 },
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
    <section id="contact" className="py-24 bg-bg-dark/50 relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 bg-primary/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary font-display font-medium tracking-widest text-sm uppercase">
            Get In Touch
          </span>
          <h2 className="font-display font-bold text-3xl md:text-5xl text-white tracking-tight mt-2 mb-4">
            Let's Connect
          </h2>
          <p className="font-sans text-text-muted text-base md:text-lg max-w-xl mx-auto">
            Open to internships, full-time roles, and exciting collaborations.
          </p>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full mt-6" />
        </motion.div>

        {/* Contact Cards Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {CONTACT_CARDS.map((card, idx) => {
            const Icon = card.icon
            const CardWrapper = card.href ? 'a' : 'div'
            const props = card.href
              ? {
                  href: card.href,
                  target: card.href.startsWith('http') ? '_blank' : undefined,
                  rel: card.href.startsWith('http') ? 'noopener noreferrer' : undefined,
                  'aria-label': card.label,
                }
              : {}

            return (
              <motion.div
                key={idx}
                variants={cardVariants}
                className="h-full"
              >
                <CardWrapper
                  {...props}
                  className={`bg-card-dark border border-border-dark p-6 rounded-2xl flex flex-col items-center justify-center text-center shadow-lg transition-all duration-300 h-full grow block ${
                    card.href
                      ? 'hover:border-primary/60 hover:shadow-[0_10px_20px_rgba(59,130,246,0.12)] cursor-pointer group'
                      : 'cursor-default'
                  }`}
                >
                  <span className={`text-2xl bg-bg-dark p-4 rounded-full border border-border-dark mb-4 transition-colors duration-300 ${
                    card.href ? 'group-hover:text-primary group-hover:border-primary/40' : ''
                  }`}>
                    <Icon />
                  </span>
                  <h3 className="font-display font-semibold text-base text-white mb-2">
                    {card.title}
                  </h3>
                  <p className={`font-sans text-sm break-all font-medium transition-colors duration-200 ${
                    card.href ? 'text-text-muted group-hover:text-primary' : 'text-text-muted'
                  }`}>
                    {card.value}
                  </p>
                </CardWrapper>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Resume Actions */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <a
            href="https://drive.google.com/file/d/1GtcM5X_tLoRk3gyO2ME3ddVqIebXMZUO/view?usp=drivesdk"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-primary hover:bg-primary/95 text-white font-sans text-sm md:text-base font-bold px-8 py-4 rounded-full transition-all duration-300 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] w-full sm:w-auto"
            aria-label="View Resume in Google Drive"
          >
            <FiFileText />
            View Resume
          </a>
          <a
            href="https://drive.google.com/file/d/1GtcM5X_tLoRk3gyO2ME3ddVqIebXMZUO/view?usp=drivesdk"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 border border-border-dark hover:border-white text-text-muted hover:text-white font-sans text-sm md:text-base font-bold px-8 py-4 rounded-full bg-card-dark/40 hover:bg-card-dark/80 transition-all duration-300 w-full sm:w-auto"
            aria-label="Download Resume from Google Drive"
          >
            <FiDownload />
            Download Resume
          </a>
        </motion.div>
      </div>
    </section>
  )
}
