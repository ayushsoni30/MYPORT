import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMenu, FiX, FiSearch, FiArrowUpRight, FiFileText } from 'react-icons/fi'
import { useLenis } from 'lenis/react'

const NAV_LINKS = [
  { label: 'ABOUT', href: '#about' },
  { label: 'PROJECTS', href: '#projects' },
  { label: 'BENCHMARKS', href: '#benchmarks' },
  { label: 'STACK', href: '#skills' },
  { label: 'EXPERIENCE', href: '#experience' },
]

const ALL_SECTIONS = [
  { id: 'home', label: 'OVERVIEW', desc: 'Main telemetry & engineer introduction' },
  { id: 'about', label: 'ARCHITECTURE', desc: 'Core principles and 01-03 capabilities' },
  { id: 'projects', label: 'DEPLOYED SYSTEMS', desc: 'Live production web apps and AI services' },
  { id: 'benchmarks', label: 'BENCHMARKS', desc: 'Independent latency and performance metrics' },
  { id: 'skills', label: 'TECH STACK', desc: 'Languages, frameworks, and infrastructure matrix' },
  { id: 'experience', label: 'EXPERIENCE', desc: 'Professional timeline and internship history' },
  { id: 'education', label: 'EDUCATION', desc: 'B.Tech CSE (AI & ML) academic credentials' },
  { id: 'certifications', label: 'CREDENTIALS', desc: 'Verified certifications & specializations' },
  { id: 'contact', label: 'CONTACT', desc: 'Direct email, telephone, and social channels' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [scrolled, setScrolled] = useState(false)
  
  // Command Palette State
  const [isPaletteOpen, setIsPaletteOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedIndex, setSelectedIndex] = useState(0)
  const searchInputRef = useRef(null)

  const lenis = useLenis()

  // Track scroll position
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

  // Command Palette keyboard shortcut (Ctrl+K or Cmd+K)
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
      const offsetTop = el.offsetTop - 72
      if (lenis) {
        lenis.scrollTo(offsetTop)
      } else {
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth',
        })
      }
      setActiveSection(targetId)
    }
  }

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
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-150 border-b border-[#252525] ${
          scrolled ? 'bg-[#0B0B0B]/95 backdrop-blur-md py-3.5' : 'bg-[#0B0B0B] py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          
          {/* Brand Mark */}
          <div className="flex items-center gap-3">
            <a
              href="#home"
              onClick={(e) => handleScrollTo(e, 'home')}
              className="flex items-center gap-2.5 font-mono text-xs font-bold tracking-widest text-[#F2F2F0] hover:text-[#FF6900] transition-colors duration-150"
            >
              <span className="w-2 h-2 bg-[#FF6900]" />
              <span>AYUSH SONI // SYS</span>
            </a>
            <span className="hidden sm:inline-block font-mono text-[10px] text-[#555555] border-l border-[#252525] pl-3 select-none">
              v2.0.0-PROD
            </span>
          </div>

          {/* Desktop Navigation Links (DESIGN.md Section 7) */}
          <nav className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => {
              const targetId = link.href.slice(1)
              const isActive = activeSection === targetId
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleScrollTo(e, targetId)}
                  className={`font-mono text-xs tracking-[0.14em] uppercase transition-colors duration-150 py-1 ${
                    isActive ? 'text-[#FF6900] font-semibold' : 'text-[#777777] hover:text-[#F2F2F0]'
                  }`}
                >
                  {link.label}
                </a>
              )
            })}
          </nav>

          {/* Right Action Controls */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Search Bar Button */}
            <button
              onClick={() => setIsPaletteOpen(true)}
              className="flex items-center gap-2 px-3 py-1.5 bg-[#111111] border border-[#252525] hover:border-[#303030] text-[#777777] hover:text-[#F2F2F0] font-mono text-xs transition-colors duration-150 cursor-pointer"
              aria-label="Open Command Palette"
            >
              <FiSearch className="text-xs" />
              <span>FIND</span>
              <kbd className="text-[10px] bg-[#151515] border border-[#252525] px-1.5 py-0.2 rounded text-[#555555]">
                ⌘K
              </kbd>
            </button>

            {/* Outlined Resume Button */}
            <a
              href="https://drive.google.com/file/d/1NSBH94j34LY_SjHJsJv7tk_PZ33ooFAx/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-xs py-1.5 px-4"
              aria-label="View Resume"
            >
              <FiFileText />
              <span>RESUME</span>
            </a>

            {/* Primary Pill Button (DESIGN.md Section 7 & 12) */}
            <a
              href="#contact"
              onClick={(e) => handleScrollTo(e, 'contact')}
              className="btn-primary text-xs py-1.5 px-5"
              aria-label="Get Started / Contact"
            >
              <span>GET IN TOUCH</span>
              <FiArrowUpRight />
            </a>
          </div>

          {/* Mobile Menu & Search Trigger */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={() => setIsPaletteOpen(true)}
              className="p-2 text-[#777777] hover:text-[#F2F2F0] cursor-pointer"
              aria-label="Search"
            >
              <FiSearch size={18} />
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-[#F2F2F0] hover:text-[#FF6900] cursor-pointer"
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
              className="lg:hidden bg-[#0B0B0B] border-t border-[#252525] px-6 py-6"
            >
              <div className="flex flex-col gap-3 text-left">
                {ALL_SECTIONS.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    onClick={(e) => handleScrollTo(e, section.id)}
                    className="font-mono text-xs uppercase tracking-wider text-[#777777] hover:text-[#F2F2F0] py-2 border-b border-[#181818]"
                  >
                    {section.label}
                  </a>
                ))}
                
                <div className="pt-4 flex items-center justify-between">
                  <a
                    href="https://drive.google.com/file/d/1NSBH94j34LY_SjHJsJv7tk_PZ33ooFAx/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary text-xs py-2 px-4 w-1/2 justify-center"
                  >
                    RESUME
                  </a>
                  <a
                    href="#contact"
                    onClick={(e) => handleScrollTo(e, 'contact')}
                    className="btn-primary text-xs py-2 px-4 w-1/2 justify-center ml-3"
                  >
                    CONTACT
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Industrial Command Palette Modal */}
      <AnimatePresence>
        {isPaletteOpen && (
          <div className="fixed inset-0 z-100 flex items-start justify-center pt-[15vh] px-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsPaletteOpen(false)}
              className="fixed inset-0 bg-black/75"
            />

            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.15 }}
              className="relative w-full max-w-xl bg-[#111111] border border-[#252525] rounded-[4px] shadow-2xl overflow-hidden flex flex-col z-10"
            >
              {/* Search Header */}
              <div className="flex items-center gap-3 px-4 py-3.5 border-b border-[#252525]">
                <FiSearch className="text-[#555555] text-sm shrink-0" />
                <input
                  ref={searchInputRef}
                  type="text"
                  placeholder="Navigate sections (projects, benchmarks, stack)..."
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value)
                    setSelectedIndex(0)
                  }}
                  onKeyDown={handlePaletteKeyDown}
                  className="w-full bg-transparent outline-none text-[#F2F2F0] font-mono text-xs placeholder-[#555555]"
                />
                <button
                  onClick={() => setIsPaletteOpen(false)}
                  className="font-mono text-[10px] text-[#555555] hover:text-[#F2F2F0] border border-[#252525] px-1.5 py-0.5"
                >
                  ESC
                </button>
              </div>

              {/* Search Results */}
              <div className="max-h-[300px] overflow-y-auto p-2">
                {filteredSections.length > 0 ? (
                  filteredSections.map((section, index) => {
                    const isSelected = index === selectedIndex
                    return (
                      <div
                        key={section.id}
                        onClick={() => handleScrollTo(null, section.id)}
                        onMouseEnter={() => setSelectedIndex(index)}
                        className={`px-3 py-2.5 cursor-pointer text-left transition-colors duration-100 ${
                          isSelected ? 'bg-[#151515] border-l-2 border-[#FF6900]' : 'hover:bg-[#141414]'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-mono text-xs font-semibold text-[#F2F2F0]">
                            {section.label}
                          </span>
                          {isSelected && (
                            <span className="font-mono text-[10px] text-[#FF6900]">JUMP ↵</span>
                          )}
                        </div>
                        <div className="font-mono text-[11px] text-[#555555] mt-0.5">
                          {section.desc}
                        </div>
                      </div>
                    )
                  })
                ) : (
                  <div className="py-8 text-center font-mono text-xs text-[#555555]">
                    No sections matched your query.
                  </div>
                )}
              </div>

              {/* Modal Footer */}
              <div className="px-4 py-2 bg-[#0E0E0E] border-t border-[#252525] flex items-center justify-between font-mono text-[10px] text-[#555555]">
                <span>NAVIGATE: ↑↓ • SELECT: ENTER</span>
                <span>AS-PORTFOLIO // PROD</span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  )
}
