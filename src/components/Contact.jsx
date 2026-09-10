import { motion } from 'framer-motion'
import { FiArrowUpRight } from 'react-icons/fi'

const CONTACT_POINTS = [
  {
    label: 'Email',
    value: 'ayushsoni55aa@gmail.com',
    href: 'https://mail.google.com/mail/?view=cm&to=ayushsoni55aa@gmail.com',
  },
  {
    label: 'Phone',
    value: '+91-8112987405',
    href: 'tel:+918112987405',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/ayushsoni3030',
    href: 'https://www.linkedin.com/in/ayushsoni3030',
  },
  {
    label: 'GitHub',
    value: 'github.com/ayushsoni30',
    href: 'https://github.com/ayushsoni30',
  },
]

export default function Contact() {
  return (
    <section id="contact" className="py-28 border-b border-line relative">
      <div className="px-6 md:px-12 max-w-7xl mx-auto">

        {/* Big Editorial Question */}
        <div className="text-left mb-16">
          <div className="eyebrow-label mb-6">
            <span className="eyebrow-marker" />
            <span>08 — CONTACT</span>
          </div>
          <h2 className="display text-4xl sm:text-6xl md:text-7xl max-w-4xl mb-8">
            Have a project in mind? Let's talk.
          </h2>
          <a
            href="https://mail.google.com/mail/?view=cm&to=ayushsoni55aa@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-serif text-2xl md:text-4xl italic text-accent hover:text-ink transition-colors duration-150"
          >
            ayushsoni55aa@gmail.com ↗
          </a>
        </div>

        {/* Contact Row List */}
        <div className="border-t border-line">
          {CONTACT_POINTS.map((point, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.05 }}
            >
              <a
                href={point.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between gap-4 py-6 border-b border-line group"
              >
                <span className="font-mono text-xs uppercase tracking-[0.14em] text-ink-faint group-hover:text-ink transition-colors duration-150">
                  {point.label}
                </span>
                <span className="flex items-center gap-3">
                  <span className="font-sans text-sm md:text-base text-ink break-all">
                    {point.value}
                  </span>
                  <FiArrowUpRight className="text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-150" />
                </span>
              </a>
            </motion.div>
          ))}
        </div>

        {/* Note about availability */}
        <p className="font-sans text-sm text-ink-muted mt-10 max-w-2xl">
          Open for software engineering roles, full stack projects, and high-leverage technical
          collaborations. Based in Lucknow, India (UTC+5:30).
        </p>

      </div>
    </section>
  )
}