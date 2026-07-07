import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function CustomCursor() {
  const mouseX = useMotionValue(-100)
  const mouseY = useMotionValue(-100)

  // Fast tracking spring for the inner dot
  const dotX = useSpring(mouseX, { stiffness: 850, damping: 45, mass: 0.1 })
  const dotY = useSpring(mouseY, { stiffness: 850, damping: 45, mass: 0.1 })

  // Trailing spring for the outer ring
  const ringX = useSpring(mouseX, { stiffness: 220, damping: 28, mass: 0.6 })
  const ringY = useSpring(mouseY, { stiffness: 220, damping: 28, mass: 0.6 })

  // Cursor states: 'default' | 'pointer' | 'magnify'
  const [cursorState, setCursorState] = useState('default')
  const [isVisible, setIsVisible] = useState(false)
  const [isTouchDevice, setIsTouchDevice] = useState(true)

  useEffect(() => {
    // Check if the device is a desktop / pointer device
    const mediaQuery = window.matchMedia('(pointer: fine)')
    setIsTouchDevice(!mediaQuery.matches)

    const handleMediaChange = (e) => {
      setIsTouchDevice(!e.matches)
    }

    mediaQuery.addEventListener('change', handleMediaChange)

    const moveCursor = (e) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
      if (!isVisible) setIsVisible(true)
    }

    const handleMouseLeave = () => setIsVisible(false)
    const handleMouseEnter = () => setIsVisible(true)

    // Event listener to check if we are hovering over interactive or magnifiable elements
    const handleMouseOver = (e) => {
      const target = e.target
      if (!target) return

      // Magnify triggers:
      // 1. All elements in the header / navbar (links, buttons, search)
      // 2. Headings (h1, h2, h3)
      // 3. Elements with explicit class 'cursor-magnify'
      const isHeaderItem = target.closest('header a') || target.closest('header button') || target.closest('header [role="button"]')
      const isHeading = target.tagName === 'H1' || target.tagName === 'H2' || target.tagName === 'H3' || target.closest('h1') || target.closest('h2') || target.closest('h3')
      const hasMagnifyClass = target.classList.contains('cursor-magnify') || target.closest('.cursor-magnify')

      if (isHeaderItem || isHeading || hasMagnifyClass) {
        setCursorState('magnify')
        return
      }

      // Pointer triggers:
      const isInteractive =
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.tagName === 'INPUT' ||
        target.tagName === 'TEXTAREA' ||
        target.tagName === 'SELECT' ||
        target.closest('a') ||
        target.closest('button') ||
        target.closest('[role="button"]') ||
        target.classList.contains('cursor-pointer') ||
        window.getComputedStyle(target).cursor === 'pointer'

      if (isInteractive) {
        setCursorState('pointer')
      } else {
        setCursorState('default')
      }
    }

    window.addEventListener('mousemove', moveCursor)
    document.addEventListener('mouseleave', handleMouseLeave)
    document.addEventListener('mouseenter', handleMouseEnter)
    window.addEventListener('mouseover', handleMouseOver)

    return () => {
      mediaQuery.removeEventListener('change', handleMediaChange)
      window.removeEventListener('mousemove', moveCursor)
      document.removeEventListener('mouseleave', handleMouseLeave)
      document.removeEventListener('mouseenter', handleMouseEnter)
      window.removeEventListener('mouseover', handleMouseOver)
    }
  }, [mouseX, mouseY, isVisible])

  // Don't render custom cursor on touch devices or if not moved yet
  if (isTouchDevice || !isVisible) return null

  // Define animations based on cursor state
  const ringVariants = {
    default: {
      scale: 1,
      backgroundColor: 'rgba(59, 130, 246, 0)',
      borderColor: '#3b82f6',
      borderWidth: '2px',
      boxShadow: '0 0 0px rgba(59, 130, 246, 0)',
    },
    pointer: {
      scale: 1.6,
      backgroundColor: 'rgba(59, 130, 246, 0.25)',
      borderColor: 'rgba(255, 255, 255, 0.8)',
      borderWidth: '2px',
      boxShadow: '0 0 0px rgba(59, 130, 246, 0)',
    },
    magnify: {
      scale: 5.2,
      backgroundColor: 'rgba(59, 130, 246, 0.06)',
      borderColor: 'rgba(59, 130, 246, 0.8)',
      borderWidth: '1.5px',
      boxShadow: '0 0 25px rgba(59, 130, 246, 0.45)',
    }
  }

  const dotVariants = {
    default: {
      scale: 1,
      backgroundColor: '#3b82f6',
    },
    pointer: {
      scale: 0,
      backgroundColor: '#3b82f6',
    },
    magnify: {
      scale: 0,
      backgroundColor: '#ffffff',
    }
  }

  return (
    <>
      {/* Outer Spring Ring */}
      <motion.div
        className={`fixed top-0 left-0 w-9 h-9 rounded-full pointer-events-none z-[9999] hidden md:block ${
          cursorState !== 'magnify' ? 'mix-blend-difference' : ''
        }`}
        style={{
          x: ringX,
          y: ringY,
          translateX: '-50%',
          translateY: '-50%',
          backdropFilter: cursorState === 'magnify' 
            ? 'saturate(2) brightness(1.3) blur(0.5px)' 
            : 'none',
        }}
        animate={cursorState}
        variants={ringVariants}
        transition={{ type: 'spring', stiffness: 320, damping: 24 }}
      />
      {/* Inner Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2.5 h-2.5 rounded-full pointer-events-none z-[9999] mix-blend-difference hidden md:block"
        style={{
          x: dotX,
          y: dotY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={cursorState}
        variants={dotVariants}
        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
      />
    </>
  )
}
