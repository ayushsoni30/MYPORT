import { motion } from 'framer-motion'
import { FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin, FiFileText, FiArrowUpRight } from 'react-icons/fi'

const CONTACT_POINTS = [
  {
    icon: FiMail,
    label: 'PRIMARY EMAIL',
    value: 'ayushsoni55aa@gmail.com',
    href: 'https://mail.google.com/mail/?view=cm&to=ayushsoni55aa@gmail.com',
    action: 'SEND EMAIL ↗',
  },
  {
    icon: FiPhone,
    label: 'TELEPHONE',
    value: '+91-8112987405',
    href: 'tel:+918112987405',
    action: 'DIAL ↗',
  },
  {
    icon: FiLinkedin,
    label: 'LINKEDIN NETWORK',
    value: 'linkedin.com/in/ayushsoni3030',
    href: 'https://www.linkedin.com/in/ayushsoni3030',
    action: 'CONNECT ↗',
  },
  {
    icon: FiGithub,
    label: 'GITHUB PROFILE',
    value: 'github.com/ayushsoni30',
    href: 'https://github.com/ayushsoni30',
    action: 'VIEW ORG ↗',
  },
  {
    icon: FiMapPin,
    label: 'BASE LOCATION',
    value: 'Lucknow, Uttar Pradesh, India',
    href: null,
    action: 'TIMEZONE: IST (UTC+5:30)',
  },
]

export default function Contact() {
  return (
    <section id="contact" className="py-24 border-b border-[#252525] bg-[#0B0B0B] relative">
      <div className="px-6 md:px-12 max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-left mb-16">
          <div className="eyebrow-label mb-3">
            <span className="eyebrow-marker" />
            <span>DIRECT INQUIRIES</span>
          </div>
          <h2 className="font-sans text-3xl md:text-5xl font-bold tracking-tight text-[#F2F2F0]">
            Connect with Engineering
          </h2>
          <p className="font-sans text-base md:text-lg text-[#777777] mt-3 max-w-xl">
            Open for software engineering roles, full stack projects, and high-leverage technical collaborations.
          </p>
        </div>

        {/* Contact Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {CONTACT_POINTS.map((point, idx) => {
            const Icon = point.icon
            const isClickable = Boolean(point.href)
            const CardElement = isClickable ? 'a' : 'div'

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
              >
                <CardElement
                  href={point.href || undefined}
                  target={isClickable && point.href?.startsWith('http') ? '_blank' : undefined}
                  rel={isClickable && point.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className={`bg-[#111111] border border-[#252525] p-6 text-left flex flex-col justify-between h-full group transition-colors duration-180 block ${
                    isClickable ? 'hover:border-[#303030] cursor-pointer' : 'cursor-default'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between border-b border-[#252525] pb-3 mb-4">
                      <span className="font-mono text-[10px] text-[#555555] uppercase tracking-wider">
                        {point.label}
                      </span>
                      <Icon className="text-sm text-[#777777] group-hover:text-[#FF6900] transition-colors duration-150" />
                    </div>

                    <div className="font-mono text-sm font-semibold text-[#F2F2F0] break-all mb-4">
                      {point.value}
                    </div>
                  </div>

                  <div className="pt-3 border-t border-[#252525] font-mono text-[11px] text-[#777777] flex items-center justify-between group-hover:text-[#F2F2F0] transition-colors duration-150">
                    <span>{point.action}</span>
                    {isClickable && <FiArrowUpRight />}
                  </div>
                </CardElement>
              </motion.div>
            )
          })}
        </div>

        {/* Action Button Row */}
        <div className="flex flex-wrap items-center justify-start gap-4 pt-8 border-t border-[#252525]">
          <a
            href="https://mail.google.com/mail/?view=cm&to=ayushsoni55aa@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            <span>SEND DIRECT EMAIL</span>
            <FiArrowUpRight />
          </a>

          <a
            href="https://drive.google.com/file/d/1NSBH94j34LY_SjHJsJv7tk_PZ33ooFAx/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            <FiFileText />
            <span>DOWNLOAD RESUME (PDF)</span>
          </a>
        </div>

      </div>
    </section>
  )
}
