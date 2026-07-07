import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function CustomCursor() {
  const mouseX = useMotionValue(-100)
  const mouseY = useMotionValue(-100)

  // Fast tracking spring for the inner dot
  const dotX = useSpring(mouseX, { stiffness: 800, damping: 45, mass: 0.1 })
  const dotY = useSpring(mouseY, { stiffness: 800, damping: 45, mass: 0.1 })

  // Trailing spring for the outer ring
  const ringX = useSpring(mouseX, { stiffness: 220, damping: 28, mass: 0.6 })
  const ringY = useSpring(mouseY, { stiffness: 220, damping: 28, mass: 0.6 })

  const [isHovered, setIsHovered] = useState(false)
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

    // Event listener to check if we are hovering over interactive elements
    const handleMouseOver = (e) => {
      const target = e.target
      if (!target) return

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

      setIsHovered(isInteractive)
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

  return (
    <>
      {/* Outer Spring Ring */}
      <motion.div
        className="fixed top-0 left-0 w-9 h-9 rounded-full border-2 border-primary pointer-events-none z-[9999] mix-blend-difference hidden md:block"
        style={{
          x: ringX,
          y: ringY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isHovered ? 1.5 : 1,
          backgroundColor: isHovered ? 'rgba(59, 130, 246, 0.3)' : 'rgba(59, 130, 246, 0)',
          borderColor: isHovered ? 'rgba(255, 255, 255, 0.8)' : '#3b82f6',
        }}
        transition={{ type: 'spring', stiffness: 350, damping: 25 }}
      />
      {/* Inner Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2.5 h-2.5 rounded-full bg-primary pointer-events-none z-[9999] mix-blend-difference hidden md:block"
        style={{
          x: dotX,
          y: dotY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isHovered ? 0 : 1,
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
      />
    </>
  )
}
