import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMenu, FiX, FiDownload } from 'react-icons/fi'

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Education', href: '#education' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [scrolled, setScrolled] = useState(false)

  // Track scroll position to change background styling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)

      // Simple intersection tracker
      const scrollPosition = window.scrollY + 120
      for (const link of NAV_LINKS) {
        const sectionId = link.href.slice(1)
        const el = document.getElementById(sectionId)
        if (el) {
          const top = el.offsetTop
          const height = el.offsetHeight
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId)
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Smooth scroll handler
  const handleScrollTo = (e, targetId) => {
    e.preventDefault()
    setIsOpen(false)
    const el = document.getElementById(targetId)
    if (el) {
      const offsetTop = el.offsetTop - 80 // Navbar offset
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      })
      setActiveSection(targetId)
    }
  }

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-bg-dark/80 backdrop-blur-md border-b border-border-dark py-4 shadow-lg'
          : 'bg-transparent py-6'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#home"
          onClick={(e) => handleScrollTo(e, 'home')}
          className="font-display font-bold text-2xl tracking-wider text-primary flex items-center gap-2 group cursor-pointer"
        >
          <span className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-sans transition-transform duration-300 group-hover:rotate-12">
            AS
          </span>
          <span className="hidden sm:inline-block text-white group-hover:text-primary transition-colors duration-200">
            Ayush Soni
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => {
            const sectionId = link.href.slice(1)
            const isActive = activeSection === sectionId
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleScrollTo(e, sectionId)}
                className={`relative font-sans text-sm font-medium tracking-wide transition-colors duration-200 py-1 ${
                  isActive ? 'text-primary' : 'text-text-muted hover:text-white'
                }`}
              >
                {link.label}
                {isActive && (
                  <motion.span
                    layoutId="activeUnderline"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            )
          })}
        </nav>

        {/* Right CTA */}
        <div className="hidden lg:flex items-center">
          <a
            href="https://drive.google.com/file/d/1GtcM5X_tLoRk3gyO2ME3ddVqIebXMZUO/view?usp=drivesdk"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-primary text-primary hover:bg-primary hover:text-white font-sans text-sm font-semibold transition-all duration-300 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
            aria-label="Download Resume"
          >
            <FiDownload />
            Resume
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-white hover:text-primary p-2 focus:outline-none cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
        >
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-bg-dark border-b border-border-dark"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {NAV_LINKS.map((link) => {
                const sectionId = link.href.slice(1)
                const isActive = activeSection === sectionId
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => handleScrollTo(e, sectionId)}
                    className={`font-sans text-lg font-medium tracking-wide transition-colors duration-200 ${
                      isActive ? 'text-primary' : 'text-text-muted hover:text-white'
                    }`}
                  >
                    {link.label}
                  </a>
                )
              })}
              <a
                href="https://drive.google.com/file/d/1GtcM5X_tLoRk3gyO2ME3ddVqIebXMZUO/view?usp=drivesdk"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl border border-primary text-primary hover:bg-primary hover:text-white font-sans text-base font-semibold transition-all duration-200"
              >
                <FiDownload />
                Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
