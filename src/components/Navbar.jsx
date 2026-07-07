import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMenu, FiX, FiSearch, FiGithub, FiLinkedin, FiSun, FiMoon } from 'react-icons/fi'

const PRIMARY_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

const ALL_SECTIONS = [
  { id: 'home', label: 'Home', desc: 'Main banner and introduction' },
  { id: 'about', label: 'About Me', desc: 'Short bio, path and career goals' },
  { id: 'skills', label: 'Skills', desc: 'Languages, frameworks and tech stack' },
  { id: 'experience', label: 'Experience', desc: 'Professional internships and roles' },
  { id: 'projects', label: 'Projects', desc: 'Personal and academic builds' },
  { id: 'achievements', label: 'Achievements', desc: 'Events, contests and coding milestones' },
  { id: 'education', label: 'Education', desc: 'Degrees, schools and academics' },
  { id: 'certifications', label: 'Certifications', desc: 'Courses and technical credentials' },
  { id: 'contact', label: 'Contact', desc: 'Social channels and resume downloads' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [scrolled, setScrolled] = useState(false)
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') || 'dark'
    }
    return 'dark'
  })

  // Command Palette State
  const [isPaletteOpen, setIsPaletteOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedIndex, setSelectedIndex] = useState(0)
  const searchInputRef = useRef(null)

  // Track theme changes
  useEffect(() => {
    const root = document.documentElement
    if (theme === 'light') {
      root.classList.add('light')
    } else {
      root.classList.remove('light')
    }
    localStorage.setItem('theme', theme)
  }, [theme])

  // Track scroll position to change background styling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)

      // Intersection tracker
      const scrollPosition = window.scrollY + 120
      for (const link of ALL_SECTIONS) {
        const el = document.getElementById(link.id)
        if (el) {
          const top = el.offsetTop
          const height = el.offsetHeight
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(link.id)
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Keyboard shortcut listener for Command Palette (Ctrl+K or Cmd+K)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault()
        setIsPaletteOpen((prev) => !prev)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  // Auto focus input when Command Palette opens
  useEffect(() => {
    if (isPaletteOpen) {
      setTimeout(() => {
        searchInputRef.current?.focus()
      }, 50)
      setSearchQuery('')
      setSelectedIndex(0)
    }
  }, [isPaletteOpen])

  // Smooth scroll handler
  const handleScrollTo = (e, targetId) => {
    if (e) e.preventDefault()
    setIsOpen(false)
    setIsPaletteOpen(false)
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

  // Handle Command Palette arrow keys & enter selection
  const filteredSections = ALL_SECTIONS.filter((section) =>
    section.label.toLowerCase().includes(searchQuery.toLowerCase()) ||
    section.desc.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const handlePaletteKeyDown = (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setSelectedIndex((prev) => (prev + 1) % filteredSections.length)
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setSelectedIndex((prev) => (prev - 1 + filteredSections.length) % filteredSections.length)
    } else if (e.key === 'Enter') {
      e.preventDefault()
      if (filteredSections[selectedIndex]) {
        handleScrollTo(null, filteredSections[selectedIndex].id)
      }
    } else if (e.key === 'Escape') {
      e.preventDefault()
      setIsPaletteOpen(false)
    }
  }

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-bg-dark/85 backdrop-blur-md border-b border-border-dark py-3.5 shadow-lg'
            : 'bg-transparent py-5'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Brand Logo */}
          <div className="flex items-center gap-3">
            <a
              href="#home"
              onClick={(e) => handleScrollTo(e, 'home')}
              className="font-display font-bold text-xl tracking-wider text-primary flex items-center gap-2 group cursor-pointer"
            >
              <span className="bg-primary text-white w-7 h-7 rounded-full flex items-center justify-center text-xs font-sans transition-transform duration-300 group-hover:rotate-12">
                AS
              </span>
              <span className="text-text-light group-hover:text-primary transition-colors duration-200">
                Ayush Soni
              </span>
            </a>
            <span className="hidden sm:inline-block font-mono text-[10px] bg-card-dark border border-border-dark text-text-muted px-2 py-0.5 rounded-full select-none">
              v1.0.0
            </span>
          </div>

          {/* Center: Docs navigation & Search */}
          <div className="hidden lg:flex items-center gap-6">
            <nav className="flex items-center gap-6 border-r border-border-dark pr-6">
              {PRIMARY_LINKS.map((link) => {
                const sectionId = link.href.slice(1)
                const isActive = activeSection === sectionId
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => handleScrollTo(e, sectionId)}
                    className={`relative font-sans text-xs font-medium tracking-wide transition-colors duration-200 py-1 ${
                      isActive ? 'text-primary' : 'text-text-muted hover:text-text-light'
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

            {/* Docs Search Button Mockup */}
            <button
              onClick={() => setIsPaletteOpen(true)}
              className="flex items-center gap-2.5 px-3 py-1.5 rounded-lg bg-card-dark border border-border-dark hover:border-primary/50 text-text-muted hover:text-text-light font-sans text-xs transition-all duration-200 cursor-pointer select-none"
            >
              <FiSearch className="text-sm text-text-muted" />
              <span>Search sections...</span>
              <kbd className="font-mono text-[9px] bg-bg-dark border border-border-dark px-1.5 py-0.5 rounded text-text-muted leading-none ml-2">
                ⌘K
              </kbd>
            </button>
          </div>

          {/* Right Controls: Socials & Theme Toggle */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="https://github.com/ayushsoni30"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted hover:text-primary text-lg transition-all duration-200 hover:scale-105 cursor-pointer"
              aria-label="GitHub Profile"
            >
              <FiGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/ayushsoni3030"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted hover:text-primary text-lg transition-all duration-200 hover:scale-105 cursor-pointer"
              aria-label="LinkedIn Profile"
            >
              <FiLinkedin />
            </a>
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="text-text-muted hover:text-primary text-lg transition-all duration-200 hover:scale-105 cursor-pointer p-1 rounded-md"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <FiSun /> : <FiMoon />}
            </button>
          </div>

          {/* Mobile controls */}
          <div className="lg:hidden flex items-center gap-3">
            <button
              onClick={() => setIsPaletteOpen(true)}
              className="p-2 text-text-muted hover:text-primary cursor-pointer"
              aria-label="Search"
            >
              <FiSearch size={20} />
            </button>
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 text-text-muted hover:text-primary cursor-pointer"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <FiSun size={18} /> : <FiMoon size={18} />}
            </button>
            <button
              className="text-text-light hover:text-primary p-2 focus:outline-none cursor-pointer"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
              {isOpen ? <FiX size={22} /> : <FiMenu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-bg-dark border-b border-border-dark overflow-hidden"
            >
              <div className="px-6 py-6 flex flex-col gap-5">
                <div className="text-[11px] font-bold text-text-muted tracking-wider uppercase select-none">
                  Navigation
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {ALL_SECTIONS.map((section) => {
                    const isActive = activeSection === section.id
                    return (
                      <a
                        key={section.id}
                        href={`#${section.id}`}
                        onClick={(e) => handleScrollTo(e, section.id)}
                        className={`font-sans text-sm font-medium px-3 py-2 rounded-lg border transition-all duration-200 ${
                          isActive
                            ? 'bg-primary/10 text-primary border-primary/20'
                            : 'bg-card-dark border-border-dark text-text-muted hover:text-text-light'
                        }`}
                      >
                        {section.label}
                      </a>
                    )
                  })}
                </div>

                <div className="border-t border-border-dark pt-4 flex items-center justify-between">
                  <span className="text-xs text-text-muted">Follow Me:</span>
                  <div className="flex gap-4">
                    <a
                      href="https://github.com/ayushsoni30"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-text-muted hover:text-primary text-xl cursor-pointer"
                      aria-label="GitHub Profile"
                    >
                      <FiGithub />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/ayushsoni3030"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-text-muted hover:text-primary text-xl cursor-pointer"
                      aria-label="LinkedIn Profile"
                    >
                      <FiLinkedin />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Interactive Command Palette Modal */}
      <AnimatePresence>
        {isPaletteOpen && (
          <div className="fixed inset-0 z-[100] flex items-start justify-center pt-[15vh]">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsPaletteOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-xl bg-card-dark border border-border-dark rounded-xl shadow-2xl overflow-hidden mx-4 flex flex-col"
            >
              {/* Search Header */}
              <div className="flex items-center gap-3 px-4 py-3.5 border-b border-border-dark">
                <FiSearch className="text-text-muted text-lg shrink-0" />
                <input
                  ref={searchInputRef}
                  type="text"
                  placeholder="Type to search sections (e.g. projects, skills)..."
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value)
                    setSelectedIndex(0)
                  }}
                  onKeyDown={handlePaletteKeyDown}
                  className="w-full bg-transparent border-0 outline-none text-text-light font-sans text-sm placeholder-text-muted/70 focus:ring-0"
                />
                <button
                  onClick={() => setIsPaletteOpen(false)}
                  className="text-[10px] bg-bg-dark border border-border-dark px-2 py-1 rounded text-text-muted hover:text-text-light shrink-0"
                >
                  ESC
                </button>
              </div>

              {/* Search Results */}
              <div className="max-h-[320px] overflow-y-auto p-2">
                {filteredSections.length > 0 ? (
                  filteredSections.map((section, index) => {
                    const isSelected = index === selectedIndex
                    return (
                      <div
                        key={section.id}
                        onClick={() => handleScrollTo(null, section.id)}
                        onMouseEnter={() => setSelectedIndex(index)}
                        className={`flex flex-col gap-0.5 px-3 py-2.5 rounded-lg cursor-pointer transition-all duration-150 ${
                          isSelected
                            ? 'bg-primary text-white'
                            : 'hover:bg-bg-dark text-text-light'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-sans text-sm font-semibold tracking-wide">
                            {section.label}
                          </span>
                          {isSelected && (
                            <span className="font-mono text-[9px] bg-white/20 px-1.5 py-0.5 rounded leading-none">
                              Jump to ↵
                            </span>
                          )}
                        </div>
                        <span
                          className={`font-sans text-xs ${
                            isSelected ? 'text-white/80' : 'text-text-muted'
                          }`}
                        >
                          {section.desc}
                        </span>
                      </div>
                    )
                  })
                ) : (
                  <div className="py-8 text-center font-sans text-sm text-text-muted">
                    No sections matched your search.
                  </div>
                )}
              </div>

              {/* Search Footer */}
              <div className="px-4 py-2 bg-bg-dark/40 border-t border-border-dark flex items-center justify-between text-[10px] text-text-muted select-none">
                <div className="flex items-center gap-3">
                  <span>
                    <kbd className="font-mono bg-bg-dark px-1.5 py-0.5 rounded border border-border-dark mr-1">↑↓</kbd>
                    Navigate
                  </span>
                  <span>
                    <kbd className="font-mono bg-bg-dark px-1.5 py-0.5 rounded border border-border-dark mr-1">Enter</kbd>
                    Select
                  </span>
                </div>
                <div>Ayush Soni Portfolio</div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  )
}
