import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { LiquidGlass } from '@ybouane/liquidglass'
import { FiFileText, FiGithub, FiLinkedin, FiMail, FiSun, FiMoon } from 'react-icons/fi'

const RESUME_URL =
  'https://drive.google.com/file/d/1NSBH94j34LY_SjHJsJv7tk_PZ33ooFAx/view?usp=sharing'

const LINKS = [
  { label: 'GitHub', href: 'https://github.com/ayushsoni30', Icon: FiGithub },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/ayushsoni3030', Icon: FiLinkedin },
  { label: 'Email', href: 'https://mail.google.com/mail/?view=cm&to=ayushsoni55aa@gmail.com', Icon: FiMail },
]

const GLASS_CONFIG = {
  blurAmount: 0.55,
  refraction: 0.4,
  chromAberration: 0.05,
  edgeHighlight: 0.22,
  specular: 0.5,
  fresnel: 1,
  distortion: 0,
  cornerRadius: 30,
  zRadius: 40,
  opacity: 0.92,
  saturation: 0,
  tintStrength: 0,
  brightness: 0,
  shadowOpacity: 0.35,
  shadowSpread: 14,
  shadowOffsetY: 6,
  floating: false,
  button: false,
  bevelMode: 0,
}

const getStoredTheme = () => {
  try {
    return localStorage.getItem('theme') === 'light' ? 'light' : 'dark'
  } catch {
    return 'dark'
  }
}

export default function GlassDock({ rootRef }) {
  const glassRef = useRef(null)
  const [theme, setTheme] = useState(getStoredTheme)

  useEffect(() => {
    const rootEl = rootRef.current
    const glassEl = glassRef.current
    if (!rootEl || !glassEl) return

    let cancelled = false
    let instance = null

    ;(async () => {
      try {
        const inst = await LiquidGlass.init({
          root: rootEl,
          glassElements: [glassEl],
        })
        if (cancelled) {
          inst.destroy()
          return
        }
        instance = inst
        rootEl.style.removeProperty('user-select')
        rootEl.style.removeProperty('-webkit-user-select')
      } catch (err) {
        console.warn('[GlassDock] LiquidGlass init failed:', err)
      }
    })()

    return () => {
      cancelled = true
      instance?.destroy()
      rootEl.style.removeProperty('user-select')
      rootEl.style.removeProperty('-webkit-user-select')
    }
  }, [rootRef, theme])

  const toggleTheme = () => {
    const next = theme === 'light' ? 'dark' : 'light'
    const apply = () => {
      try {
        localStorage.setItem('theme', next)
      } catch {
        /* private mode / restricted storage — still flip the theme */
      }
      document.documentElement.setAttribute('data-theme', next)
      setTheme(next)
    }
    if (document.startViewTransition) document.startViewTransition(apply)
    else apply()
  }

  return (
    <nav
      ref={glassRef}
      data-config={JSON.stringify(GLASS_CONFIG)}
      className="glass fixed bottom-6 left-1/2 -translate-x-1/2 z-40 flex items-center gap-1 sm:gap-1.5 rounded-full bg-base/50 backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.25)] px-2 py-2"
    >
      <a
        href={RESUME_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="View resume"
        className="relative z-[2] flex items-center gap-1.5 rounded-full bg-ink text-base font-mono text-[11px] font-semibold uppercase tracking-[0.08em] px-3.5 py-2 transition-transform duration-150 hover:-translate-y-0.5"
      >
        <FiFileText className="text-sm" />
        <span>Resume</span>
      </a>

      {LINKS.map(({ label, href, Icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="relative z-[2] p-2 text-ink-muted hover:text-accent transition-colors duration-150"
        >
          <Icon className="text-base" />
        </a>
      ))}

      <span className="relative z-[2] h-5 w-px bg-line my-0.5 mx-0.5" />

      <motion.button
        onClick={toggleTheme}
        whileTap={{ scale: 1.25 }}
        transition={{ type: 'spring', stiffness: 400, damping: 16 }}
        aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
        className="relative z-[2] p-2 text-ink-muted hover:text-accent transition-colors duration-150 cursor-pointer"
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={theme}
            initial={{ opacity: 0, rotate: -90 }}
            animate={{ opacity: 1, rotate: 0 }}
            exit={{ opacity: 0, rotate: 90 }}
            transition={{ duration: 0.2 }}
            className="flex"
          >
            {theme === 'light' ? <FiSun className="text-base" /> : <FiMoon className="text-base" />}
          </motion.span>
        </AnimatePresence>
      </motion.button>
    </nav>
  )
}