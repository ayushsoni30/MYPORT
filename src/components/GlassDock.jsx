import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring } from 'framer-motion'
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
  blurAmount: 0.6,
  refraction: 0.35,
  chromAberration: 0.04,
  edgeHighlight: 0.28,
  specular: 0.6,
  fresnel: 1,
  distortion: 0,
  cornerRadius: 32,
  zRadius: 40,
  opacity: 0.95,
  saturation: 0,
  tintStrength: 0,
  brightness: -0.08,
  shadowOpacity: 0.55,
  shadowSpread: 22,
  shadowOffsetY: 10,
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

/**
 * DockItem: Individual dock item that scales & lifts with macOS-style magnification
 * based on proximity to the cursor's horizontal coordinate (mouseX).
 */
function DockItem({
  mouseX,
  children,
  className = '',
  tooltip = '',
  isResume = false,
  href,
  onClick,
  ariaLabel,
  target,
  rel,
  whileTap,
}) {
  const ref = useRef(null)
  const [isHovered, setIsHovered] = useState(false)

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 }
    return val - (bounds.x + bounds.width / 2)
  })

  // Distance range: [-140, 140] px from item center
  const scaleSync = useTransform(
    distance,
    [-140, -70, 0, 70, 140],
    isResume ? [1, 1.1, 1.25, 1.1, 1] : [1, 1.18, 1.4, 1.18, 1]
  )
  const scale = useSpring(scaleSync, { mass: 0.1, stiffness: 220, damping: 15 })

  const ySync = useTransform(
    distance,
    [-140, -70, 0, 70, 140],
    isResume ? [0, -3, -7, -3, 0] : [0, -3, -9, -3, 0]
  )
  const y = useSpring(ySync, { mass: 0.1, stiffness: 220, damping: 15 })

  const marginSync = useTransform(distance, [-140, 0, 140], [0, 4, 0])
  const margin = useSpring(marginSync, { mass: 0.1, stiffness: 220, damping: 15 })

  const commonProps = {
    ref,
    style: {
      scale,
      y,
      marginLeft: margin,
      marginRight: margin,
      transformOrigin: 'bottom center',
    },
    onMouseEnter: () => setIsHovered(true),
    onMouseLeave: () => setIsHovered(false),
    whileTap,
    'aria-label': ariaLabel || tooltip,
    className: `relative z-[2] select-none flex items-center justify-center ${className}`,
  }

  const tooltipElement = (
    <AnimatePresence>
      {isHovered && tooltip && (
        <motion.div
          initial={{ opacity: 0, y: 6, scale: 0.85 }}
          animate={{ opacity: 1, y: -12, scale: 1 }}
          exit={{ opacity: 0, y: 4, scale: 0.85 }}
          transition={{ duration: 0.15, ease: 'easeOut' }}
          className="absolute -top-7 left-1/2 -translate-x-1/2 pointer-events-none z-50 flex flex-col items-center"
        >
          <div className="px-2.5 py-0.5 rounded-md bg-neutral-900/95 text-neutral-100 font-mono text-[10px] font-medium tracking-wider uppercase shadow-xl border border-white/15 whitespace-nowrap backdrop-blur-md">
            {tooltip}
          </div>
          <div className="w-1.5 h-1.5 bg-neutral-900/95 rotate-45 border-r border-b border-white/15 -mt-0.5" />
        </motion.div>
      )}
    </AnimatePresence>
  )

  if (href) {
    return (
      <motion.a href={href} target={target} rel={rel} {...commonProps}>
        {tooltipElement}
        {children}
      </motion.a>
    )
  }

  return (
    <motion.button type="button" onClick={onClick} {...commonProps}>
      {tooltipElement}
      {children}
    </motion.button>
  )
}

export default function GlassDock({ rootRef }) {
  const glassRef = useRef(null)
  const mouseX = useMotionValue(Infinity)
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
      onMouseMove={(e) => mouseX.set(e.clientX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      onTouchMove={(e) => {
        if (e.touches && e.touches[0]) mouseX.set(e.touches[0].clientX)
      }}
      onTouchEnd={() => mouseX.set(Infinity)}
      className="glass fixed bottom-6 left-1/2 -translate-x-1/2 z-40 flex items-center gap-2 sm:gap-3.5 rounded-full bg-neutral-950/85 backdrop-blur-2xl border border-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.6),0_10px_20px_rgba(0,0,0,0.4),inset_0_1px_1px_0_rgba(255,255,255,0.2)] px-4 sm:px-6 py-2.5 sm:py-3 transition-[box-shadow,border-color] duration-300 overflow-visible"
    >
      <DockItem
        mouseX={mouseX}
        href={RESUME_URL}
        target="_blank"
        rel="noopener noreferrer"
        tooltip="Resume"
        isResume
        className="rounded-full bg-accent text-white font-mono text-[11px] sm:text-xs font-semibold uppercase tracking-[0.09em] px-4 sm:px-5 py-2 sm:py-2.5 shadow-[0_4px_14px_rgba(194,65,12,0.35)] hover:shadow-[0_6px_20px_rgba(194,65,12,0.5)] transition-[box-shadow,filter] duration-150 gap-2 shrink-0"
      >
        <FiFileText className="text-sm sm:text-base shrink-0" />
        <span>Resume</span>
      </DockItem>

      {LINKS.map(({ label, href, Icon }) => (
        <DockItem
          key={label}
          mouseX={mouseX}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          tooltip={label}
          className="w-10 h-10 sm:w-11 sm:h-11 rounded-full text-neutral-300 hover:text-white hover:bg-white/12 active:bg-white/20 transition-colors duration-150 shrink-0"
        >
          <Icon className="text-lg sm:text-xl" />
        </DockItem>
      ))}

      <span className="relative z-[2] h-6 w-px bg-white/20 my-auto mx-1 sm:mx-1.5 shrink-0 select-none" />

      <DockItem
        mouseX={mouseX}
        onClick={toggleTheme}
        whileTap={{ scale: 1.2 }}
        tooltip={theme === 'light' ? 'Dark Mode' : 'Light Mode'}
        className="w-10 h-10 sm:w-11 sm:h-11 rounded-full text-neutral-300 hover:text-accent hover:bg-white/12 active:bg-white/20 transition-colors duration-150 cursor-pointer shrink-0"
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
            {theme === 'light' ? (
              <FiSun className="text-lg sm:text-xl" />
            ) : (
              <FiMoon className="text-lg sm:text-xl" />
            )}
          </motion.span>
        </AnimatePresence>
      </DockItem>
    </nav>
  )
}