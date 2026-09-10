import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMenu, FiX, FiArrowUpRight, FiFileText, FiSun, FiMoon } from 'react-icons/fi'
import { useLenis } from 'lenis/react'

const NAV_LINKS = [
  { label: 'Work', href: '#projects' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Timeline', href: '#experience' },
  { label: 'Milestones', href: '#milestones' },
]

const ALL_SECTIONS = [
  { id: 'home', label: 'Overview' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Selected Work' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'milestones', label: 'Milestones' },
  { id: 'contact', label: 'Contact' },
]

function getStoredTheme() {
  const stored = localStorage.getItem('theme')
  return stored === 'light' ? 'light' : 'dark'
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [scrolled, setScrolled] = useState(false)
  const [theme, setTheme] = useState(getStoredTheme)

  const lenis = useLenis()

  const toggleTheme = () => {
    const next = theme === 'light' ? 'dark' : 'light'

    const apply = () => {
      localStorage.setItem('theme', next)
      document.documentElement.setAttribute('data-theme', next)
      setTheme(next)
    }

    if (document.startViewTransition) {
      document.startViewTransition(apply)
    } else {
      apply()
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)

      const scrollPosition = window.scrollY + 120
      for (const section of ALL_SECTIONS) {
        const el = document.getElementById(section.id)
        if (el) {
          const top = el.offsetTop
          const height = el.offsetHeight
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section.id)
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleScrollTo = (e, targetId) => {
    if (e) e.preventDefault()
    setIsOpen(false)
    const el = document.getElementById(targetId)
    if (el) {
      const offsetTop = el.offsetTop - 72
      if (lenis) {
        lenis.scrollTo(offsetTop)
      } else {
        window.scrollTo({ top: offsetTop, behavior: 'smooth' })
      }
      setActiveSection(targetId)
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-line ${
        scrolled ? 'bg-base/95 backdrop-blur-md py-3.5' : 'bg-base py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Brand Mark */}
        <a
          href="#home"
          onClick={(e) => handleScrollTo(e, 'home')}
          className="font-serif text-xl text-ink hover:text-accent transition-colors duration-150"
        >
          Ayush Soni
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => {
            const targetId = link.href.slice(1)
            const isActive = activeSection === targetId
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleScrollTo(e, targetId)}
                className={`font-sans text-sm transition-colors duration-150 ${
                  isActive ? 'text-accent' : 'text-ink-muted hover:text-ink'
                }`}
              >
                {link.label}
              </a>
            )
          })}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-3">
          {/* Theme Toggle */}
          <motion.button
            onClick={toggleTheme}
            whileTap={{ scale: 1.35 }}
            transition={{ type: 'spring', stiffness: 400, damping: 15 }}
            className="p-2 text-ink-muted hover:text-accent transition-colors duration-150 cursor-pointer"
            aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
          >
            <AnimatePresence mode="wait">
              <motion.span
                key={theme}
                initial={{ scale: 0, rotate: -90 }}
                animate={{ scale: 1, rotate: 0 }}
                exit={{ scale: 0, rotate: 90 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
                className="flex"
              >
                {theme === 'light' ? <FiSun size={18} /> : <FiMoon size={18} />}
              </motion.span>
            </AnimatePresence>
          </motion.button>

          <a
            href="https://drive.google.com/file/d/1NSBH94j34LY_SjHJsJv7tk_PZ33ooFAx/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary text-xs py-1.5 px-4"
            aria-label="View Resume"
          >
            <FiFileText />
            <span>Resume</span>
          </a>
          <a
            href="#contact"
            onClick={(e) => handleScrollTo(e, 'contact')}
            className="btn-primary text-xs py-1.5 px-5"
            aria-label="Get in touch"
          >
            <span>Get in touch</span>
            <FiArrowUpRight />
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="lg:hidden flex items-center gap-2">
          <motion.button
            onClick={toggleTheme}
            whileTap={{ scale: 1.35 }}
            transition={{ type: 'spring', stiffness: 400, damping: 15 }}
            className="p-2 text-ink-muted hover:text-accent transition-colors duration-150 cursor-pointer"
            aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
          >
            <AnimatePresence mode="wait">
              <motion.span
                key={theme}
                initial={{ scale: 0, rotate: -90 }}
                animate={{ scale: 1, rotate: 0 }}
                exit={{ scale: 0, rotate: 90 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
                className="flex"
              >
                {theme === 'light' ? <FiSun size={18} /> : <FiMoon size={18} />}
              </motion.span>
            </AnimatePresence>
          </motion.button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-ink hover:text-accent cursor-pointer"
            aria-label={isOpen ? 'Close Menu' : 'Open Menu'}
          >
            {isOpen ? <FiX size={20} /> : <FiMenu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-base border-t border-line px-6 py-6"
          >
            <div className="flex flex-col gap-2 text-left">
              {ALL_SECTIONS.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  onClick={(e) => handleScrollTo(e, section.id)}
                  className="font-sans text-base text-ink-muted hover:text-ink py-2.5 border-b border-line/60"
                >
                  {section.label}
                </a>
              ))}

              <div className="pt-4 flex items-center justify-between gap-3">
                <a
                  href="https://drive.google.com/file/d/1NSBH94j34LY_SjHJsJv7tk_PZ33ooFAx/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary text-xs py-2 px-4 flex-1 justify-center"
                >
                  Resume
                </a>
                <a
                  href="#contact"
                  onClick={(e) => handleScrollTo(e, 'contact')}
                  className="btn-primary text-xs py-2 px-4 flex-1 justify-center"
                >
                  Contact
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}