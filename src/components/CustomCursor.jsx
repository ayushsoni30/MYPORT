import { useEffect, useState, useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function CustomCursor() {
  const canvasRef = useRef(null)
  const mouseX = useMotionValue(-100)
  const mouseY = useMotionValue(-100)
  const ringTargetX = useMotionValue(-100)
  const ringTargetY = useMotionValue(-100)
  
  const ringWidth = useMotionValue(36)
  const ringHeight = useMotionValue(36)
  const ringBorderRadius = useMotionValue('50%')

  // Springs for smooth tracking
  const dotX = useSpring(mouseX, { stiffness: 850, damping: 45, mass: 0.1 })
  const dotY = useSpring(mouseY, { stiffness: 850, damping: 45, mass: 0.1 })

  const ringX = useSpring(ringTargetX, { stiffness: 220, damping: 28, mass: 0.6 })
  const ringY = useSpring(ringTargetY, { stiffness: 220, damping: 28, mass: 0.6 })
  const widthSpring = useSpring(ringWidth, { stiffness: 220, damping: 28 })
  const heightSpring = useSpring(ringHeight, { stiffness: 220, damping: 28 })

  const [cursorState, setCursorState] = useState('default')
  const [isVisible, setIsVisible] = useState(false)
  const [isTouchDevice, setIsTouchDevice] = useState(true)
  const [hoveredEl, setHoveredEl] = useState(null)

  // Cursor Stardust Canvas Trail Effect
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas || isTouchDevice) return
    
    const ctx = canvas.getContext('2d')
    let animationFrameId
    let particles = []

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener('resize', handleResize)
    handleResize()

    class Spark {
      constructor(x, y) {
        this.x = x
        this.y = y
        // Floating drift speeds
        this.vx = (Math.random() - 0.5) * 1.5
        this.vy = (Math.random() - 0.5) * 1.5 - 0.4 // slide upwards slightly
        this.size = Math.random() * 2.5 + 1.2
        this.color = Math.random() > 0.5 ? 'rgba(96, 165, 250, 0.75)' : 'rgba(168, 85, 247, 0.75)' // Blue/Purple glow
        this.alpha = 1.0
        this.decay = 0.015 + Math.random() * 0.02
      }

      update() {
        this.x += this.vx
        this.y += this.vy
        this.alpha -= this.decay
      }

      draw() {
        ctx.save()
        ctx.globalAlpha = this.alpha
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fillStyle = this.color
        // Add a premium shadow blur effect
        ctx.shadowBlur = 6
        ctx.shadowColor = this.color
        ctx.fill()
        ctx.restore()
      }
    }

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      particles = particles.filter(p => {
        p.update()
        p.draw()
        return p.alpha > 0
      })

      animationFrameId = requestAnimationFrame(render)
    }
    render()

    const emitSparks = (e) => {
      // Emit 2 sparks per frame on mouse moves
      for (let i = 0; i < 2; i++) {
        particles.push(new Spark(e.clientX, e.clientY))
      }
    }

    window.addEventListener('mousemove', emitSparks)

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('mousemove', emitSparks)
    }
  }, [isTouchDevice])

  useEffect(() => {
    const mediaQuery = window.matchMedia('(pointer: fine)')
    setIsTouchDevice(!mediaQuery.matches)

    const handleMediaChange = (e) => {
      setIsTouchDevice(!e.matches)
    }

    mediaQuery.addEventListener('change', handleMediaChange)

    const moveCursor = (e) => {
      const x = e.clientX
      const y = e.clientY
      mouseX.set(x)
      mouseY.set(y)
      if (!isVisible) setIsVisible(true)

      // Magnetic snapping logic
      if (hoveredEl) {
        const rect = hoveredEl.getBoundingClientRect()
        const centerX = rect.left + rect.width / 2
        const centerY = rect.top + rect.height / 2
        
        // Snaps ring towards the center with a slight drag following the mouse (magnetic pull)
        const targetRingX = centerX + (x - centerX) * 0.22
        const targetRingY = centerY + (y - centerY) * 0.22
        
        ringTargetX.set(targetRingX)
        ringTargetY.set(targetRingY)
        
        // Frame size matching the hovered item
        ringWidth.set(rect.width + 16)
        ringHeight.set(rect.height + 12)
        
        const style = window.getComputedStyle(hoveredEl)
        ringBorderRadius.set(style.borderRadius !== '50%' && style.borderRadius !== '0px' ? style.borderRadius : '8px')
      } else {
        ringTargetX.set(x)
        ringTargetY.set(y)
        ringWidth.set(36)
        ringHeight.set(36)
        ringBorderRadius.set('50%')
      }
    }

    const handleMouseLeave = () => setIsVisible(false)
    const handleMouseEnter = () => setIsVisible(true)

    // Detect hovered items and pull them magnetically
    const handleMouseOver = (e) => {
      const target = e.target
      if (!target) return

      // Find if we are hovering over an interactive element
      const interactiveTarget = target.closest('a, button, [role="button"], input[type="submit"], .magnetic')
      
      if (interactiveTarget) {
        setHoveredEl(interactiveTarget)
        setCursorState('pointer')
        return
      }

      // Check for headings/magnify content
      const isHeading = target.tagName === 'H1' || target.tagName === 'H2' || target.tagName === 'H3' || target.closest('h1') || target.closest('h2') || target.closest('h3')
      const hasMagnifyClass = target.classList.contains('cursor-magnify') || target.closest('.cursor-magnify')

      if (isHeading || hasMagnifyClass) {
        setCursorState('magnify')
      } else {
        setCursorState('default')
      }
    }

    const handleMouseOut = (e) => {
      const target = e.target
      if (!target) return
      
      const interactiveTarget = target.closest('a, button, [role="button"], input[type="submit"], .magnetic')
      if (interactiveTarget) {
        // Reset the translation styles of the interactive target
        interactiveTarget.style.transform = ''
        interactiveTarget.style.transition = 'transform 0.3s cubic-bezier(0.25, 1, 0.5, 1)'
        setHoveredEl(null)
        setCursorState('default')
      }
    }

    // Move the hovered element slightly towards the mouse (magnetic pull effect)
    const handleMouseMoveMagnetic = (e) => {
      if (hoveredEl) {
        const rect = hoveredEl.getBoundingClientRect()
        const centerX = rect.left + rect.width / 2
        const centerY = rect.top + rect.height / 2
        const dx = e.clientX - centerX
        const dy = e.clientY - centerY
        
        // Translate the button slightly towards mouse coordinate
        hoveredEl.style.transform = `translate(${dx * 0.2}px, ${dy * 0.2}px)`
        hoveredEl.style.transition = 'transform 0.05s ease-out'
      }
    }

    window.addEventListener('mousemove', moveCursor)
    window.addEventListener('mousemove', handleMouseMoveMagnetic)
    document.addEventListener('mouseleave', handleMouseLeave)
    document.addEventListener('mouseenter', handleMouseEnter)
    window.addEventListener('mouseover', handleMouseOver)
    window.addEventListener('mouseout', handleMouseOut)

    return () => {
      mediaQuery.removeEventListener('change', handleMediaChange)
      window.removeEventListener('mousemove', moveCursor)
      window.removeEventListener('mousemove', handleMouseMoveMagnetic)
      document.removeEventListener('mouseleave', handleMouseLeave)
      document.removeEventListener('mouseenter', handleMouseEnter)
      window.removeEventListener('mouseover', handleMouseOver)
      window.removeEventListener('mouseout', handleMouseOut)
    }
  }, [mouseX, mouseY, isVisible, hoveredEl])

  if (isTouchDevice) return null

  // Rings and dots variants styling
  const ringVariants = {
    default: {
      scale: 1,
      backgroundColor: 'rgba(59, 130, 246, 0)',
      borderColor: '#3b82f6',
      borderWidth: '2px',
      boxShadow: '0 0 0px rgba(59, 130, 246, 0)',
    },
    pointer: {
      scale: 1.0,
      backgroundColor: 'rgba(59, 130, 246, 0.15)',
      borderColor: 'rgba(96, 165, 250, 0.9)',
      borderWidth: '1.5px',
      boxShadow: '0 0 8px rgba(59, 130, 246, 0.2)',
    },
    magnify: {
      scale: 2.2,
      backgroundColor: 'rgba(59, 130, 246, 0.05)',
      borderColor: 'rgba(59, 130, 246, 0.8)',
      borderWidth: '1.5px',
      boxShadow: '0 0 15px rgba(59, 130, 246, 0.25)',
    }
  }

  const dotVariants = {
    default: {
      scale: 1,
      backgroundColor: '#3b82f6',
    },
    pointer: {
      scale: 0.5,
      backgroundColor: '#60a5fa',
    },
    magnify: {
      scale: 0,
      backgroundColor: '#ffffff',
    }
  }

  return (
    <>
      {/* Canvas Stardust sparks trail - mounted immediately */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full pointer-events-none z-[9998]"
      />

      {isVisible && (
        <>
          {/* Outer Magnetic Ring */}
          <motion.div
            className={`fixed top-0 left-0 pointer-events-none z-[9999] hidden md:block border ${
              cursorState !== 'magnify' ? 'mix-blend-difference' : ''
            }`}
            style={{
              x: ringX,
              y: ringY,
              width: widthSpring,
              height: heightSpring,
              borderRadius: ringBorderRadius,
              translateX: '-50%',
              translateY: '-50%',
              backdropFilter: cursorState === 'magnify' 
                ? 'saturate(1.8) brightness(1.2)' 
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
      )}
    </>
  )
}

