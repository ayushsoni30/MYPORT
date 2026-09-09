import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

export default function WolfEyes() {
  const containerRef = useRef(null)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [isBlinking, setIsBlinking] = useState(false)

  // Mouse tracking for eyes
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2

      // Normalized offset (-1 to 1)
      const dx = (e.clientX - centerX) / (window.innerWidth / 2)
      const dy = (e.clientY - centerY) / (window.innerHeight / 2)

      // Clamped eye pupil movement (max 6px horizontal, max 4px vertical)
      setMousePos({
        x: Math.max(-1, Math.min(1, dx)) * 6.5,
        y: Math.max(-1, Math.min(1, dy)) * 4.5,
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  // Natural periodic blink cycle
  useEffect(() => {
    const triggerBlink = () => {
      setIsBlinking(true)
      setTimeout(() => {
        setIsBlinking(false)
      }, 180) // 180ms quick blink

      // Next blink in 3.5 to 6.5 seconds
      const nextDelay = 3500 + Math.random() * 3000
      timeoutId = setTimeout(triggerBlink, nextDelay)
    }

    let timeoutId = setTimeout(triggerBlink, 3000)
    return () => clearTimeout(timeoutId)
  }, [])

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-[4/3] max-w-lg mx-auto bg-[#070707] border border-[#252525] rounded-[4px] overflow-hidden flex items-center justify-center select-none shadow-2xl group"
    >
      {/* 1. Deep Atmospheric Fog / Mist Layers (Animated) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Deep base vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-transparent to-[#0B0B0B] z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B0B] via-transparent to-[#0B0B0B] z-10" />

        {/* Fog Cloud 1 (Drifting slow right) */}
        <motion.div
          animate={{
            x: ['-25%', '15%', '-25%'],
            opacity: [0.25, 0.45, 0.25],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-1/2 -left-1/4 w-[160%] h-[200%] bg-[radial-gradient(ellipse_at_center,rgba(45,45,48,0.22)_0%,rgba(15,15,18,0.1)_45%,transparent_70%)] filter blur-3xl"
        />

        {/* Fog Cloud 2 (Drifting slow left) */}
        <motion.div
          animate={{
            x: ['20%', '-20%', '20%'],
            opacity: [0.15, 0.35, 0.15],
            scale: [1.1, 0.95, 1.1],
          }}
          transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -bottom-1/3 -right-1/4 w-[150%] h-[180%] bg-[radial-gradient(ellipse_at_center,rgba(255,105,0,0.06)_0%,rgba(35,35,40,0.18)_50%,transparent_75%)] filter blur-2xl"
        />

        {/* Fog Cloud 3 (Low rolling mist across bottom) */}
        <motion.div
          animate={{
            x: ['-10%', '10%', '-10%'],
            opacity: [0.3, 0.55, 0.3],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-0 left-0 right-0 h-36 bg-[radial-gradient(ellipse_at_bottom,rgba(50,50,55,0.28)_0%,transparent_70%)] filter blur-xl"
        />

        {/* Subtle dynamic orange eye reflection in the surrounding fog */}
        <motion.div
          animate={{
            opacity: [0.15, 0.35, 0.15],
            scale: [0.95, 1.05, 0.95],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
        >
          <div className="w-80 h-32 bg-[radial-gradient(ellipse_at_center,rgba(255,105,0,0.16)_0%,rgba(255,105,0,0.04)_50%,transparent_70%)] filter blur-2xl" />
        </motion.div>
      </div>

      {/* 2. Wolf Eyes SVG with Interactive Pupillary Tracking & Animated Eyelids */}
      <div className="relative z-20 w-full max-w-[420px] px-6">
        <svg
          viewBox="0 0 400 160"
          className="w-full h-auto filter drop-shadow-[0_0_20px_rgba(255,105,0,0.45)]"
        >
          <defs>
            {/* Glowing Amber Iris Gradient */}
            <radialGradient id="wolfIrisGrad" cx="50%" cy="48%" r="50%">
              <stop offset="0%" stopColor="#FFF1B0" />
              <stop offset="35%" stopColor="#FFA200" />
              <stop offset="70%" stopColor="#FF6900" />
              <stop offset="92%" stopColor="#A83200" />
              <stop offset="100%" stopColor="#250800" />
            </radialGradient>

            {/* Glowing Eye Halo Filter */}
            <filter id="eyeGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur1" />
              <feGaussianBlur in="SourceGraphic" stdDeviation="14" result="blur2" />
              <feMerge>
                <feMergeNode in="blur2" />
                <feMergeNode in="blur1" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            {/* Left Eye Slanted Mask */}
            <clipPath id="leftEyeClip">
              <path d="M 68 88 C 88 56, 142 54, 182 82 C 158 106, 102 108, 68 88 Z" />
            </clipPath>

            {/* Right Eye Slanted Mask */}
            <clipPath id="rightEyeClip">
              <path d="M 332 88 C 312 56, 258 54, 218 82 C 242 106, 298 108, 332 88 Z" />
            </clipPath>
          </defs>

          {/* Eye Socket Shading / Brow Silhouette Emerging from Darkness */}
          <path
            d="M 50 82 C 90 44, 150 42, 190 76 C 210 76, 250 44, 310 82"
            fill="none"
            stroke="#161618"
            strokeWidth="8"
            strokeLinecap="round"
            className="filter blur-[3px]"
          />
          <path
            d="M 60 86 C 92 52, 145 50, 184 80"
            fill="none"
            stroke="#080808"
            strokeWidth="5"
          />
          <path
            d="M 340 86 C 308 52, 255 50, 216 80"
            fill="none"
            stroke="#080808"
            strokeWidth="5"
          />

          {/* ================= LEFT EYE ================= */}
          <g
            style={{
              transformOrigin: '125px 80px',
              transform: isBlinking ? 'scaleY(0.04)' : 'scaleY(1)',
              transition: 'transform 90ms cubic-bezier(0.4, 0, 0.2, 1)',
            }}
          >
            {/* Eye Background / Black Sclera with Amber Fill */}
            <path
              d="M 68 88 C 88 56, 142 54, 182 82 C 158 106, 102 108, 68 88 Z"
              fill="#180B02"
              stroke="#070707"
              strokeWidth="2.5"
            />

            {/* Inner Glowing Iris with Mouse Tracking */}
            <g clipPath="url(#leftEyeClip)">
              {/* Outer Amber Ambient Glow */}
              <circle
                cx={126 + mousePos.x * 0.4}
                cy={80 + mousePos.y * 0.4}
                r="30"
                fill="url(#wolfIrisGrad)"
                filter="url(#eyeGlow)"
                opacity="0.9"
              />

              {/* Iris Disc */}
              <circle
                cx={126 + mousePos.x}
                cy={80 + mousePos.y}
                r="24"
                fill="url(#wolfIrisGrad)"
              />

              {/* Fine Iris Striae / Ring Texture */}
              <circle
                cx={126 + mousePos.x}
                cy={80 + mousePos.y}
                r="20"
                fill="none"
                stroke="#FFE082"
                strokeWidth="0.75"
                strokeDasharray="2 3"
                opacity="0.6"
              />
              <circle
                cx={126 + mousePos.x}
                cy={80 + mousePos.y}
                r="15"
                fill="none"
                stroke="#FF6900"
                strokeWidth="1.2"
                strokeDasharray="3 2"
                opacity="0.7"
              />

              {/* Predatory Vertical Slit Pupil */}
              <ellipse
                cx={126 + mousePos.x}
                cy={80 + mousePos.y}
                rx="4.2"
                ry="17"
                fill="#050505"
              />

              {/* Intense Specular Catchlight (Point of light in eye) */}
              <circle
                cx={122 + mousePos.x * 0.8}
                cy={73 + mousePos.y * 0.8}
                r="2.8"
                fill="#FFFFFF"
                opacity="0.95"
              />
              <circle
                cx={129 + mousePos.x * 0.8}
                cy={86 + mousePos.y * 0.8}
                r="1.4"
                fill="#FFF6D1"
                opacity="0.8"
              />
            </g>

            {/* Upper & Lower Eyelid Crease Shading */}
            <path
              d="M 68 88 C 88 56, 142 54, 182 82"
              fill="none"
              stroke="#090909"
              strokeWidth="4.5"
            />
            <path
              d="M 68 88 C 102 108, 158 106, 182 82"
              fill="none"
              stroke="#0B0B0B"
              strokeWidth="3.5"
            />
            {/* Inner Canthus Highlight */}
            <circle cx="180" cy="82" r="1.5" fill="#FF8C42" opacity="0.8" />
          </g>

          {/* ================= RIGHT EYE ================= */}
          <g
            style={{
              transformOrigin: '275px 80px',
              transform: isBlinking ? 'scaleY(0.04)' : 'scaleY(1)',
              transition: 'transform 90ms cubic-bezier(0.4, 0, 0.2, 1)',
            }}
          >
            {/* Eye Background / Black Sclera with Amber Fill */}
            <path
              d="M 332 88 C 312 56, 258 54, 218 82 C 242 106, 298 108, 332 88 Z"
              fill="#180B02"
              stroke="#070707"
              strokeWidth="2.5"
            />

            {/* Inner Glowing Iris with Mouse Tracking */}
            <g clipPath="url(#rightEyeClip)">
              {/* Outer Amber Ambient Glow */}
              <circle
                cx={274 + mousePos.x * 0.4}
                cy={80 + mousePos.y * 0.4}
                r="30"
                fill="url(#wolfIrisGrad)"
                filter="url(#eyeGlow)"
                opacity="0.9"
              />

              {/* Iris Disc */}
              <circle
                cx={274 + mousePos.x}
                cy={80 + mousePos.y}
                r="24"
                fill="url(#wolfIrisGrad)"
              />

              {/* Fine Iris Striae / Ring Texture */}
              <circle
                cx={274 + mousePos.x}
                cy={80 + mousePos.y}
                r="20"
                fill="none"
                stroke="#FFE082"
                strokeWidth="0.75"
                strokeDasharray="2 3"
                opacity="0.6"
              />
              <circle
                cx={274 + mousePos.x}
                cy={80 + mousePos.y}
                r="15"
                fill="none"
                stroke="#FF6900"
                strokeWidth="1.2"
                strokeDasharray="3 2"
                opacity="0.7"
              />

              {/* Predatory Vertical Slit Pupil */}
              <ellipse
                cx={274 + mousePos.x}
                cy={80 + mousePos.y}
                rx="4.2"
                ry="17"
                fill="#050505"
              />

              {/* Intense Specular Catchlight */}
              <circle
                cx={270 + mousePos.x * 0.8}
                cy={73 + mousePos.y * 0.8}
                r="2.8"
                fill="#FFFFFF"
                opacity="0.95"
              />
              <circle
                cx={277 + mousePos.x * 0.8}
                cy={86 + mousePos.y * 0.8}
                r="1.4"
                fill="#FFF6D1"
                opacity="0.8"
              />
            </g>

            {/* Upper & Lower Eyelid Crease Shading */}
            <path
              d="M 332 88 C 312 56, 258 54, 218 82"
              fill="none"
              stroke="#090909"
              strokeWidth="4.5"
            />
            <path
              d="M 332 88 C 298 108, 242 106, 218 82"
              fill="none"
              stroke="#0B0B0B"
              strokeWidth="3.5"
            />
            {/* Inner Canthus Highlight */}
            <circle cx="220" cy="82" r="1.5" fill="#FF8C42" opacity="0.8" />
          </g>

          {/* Central Nose Bridge Shadow Shadowing out snout */}
          <path
            d="M 185 82 Q 200 88 215 82 L 200 130 Z"
            fill="#050505"
            opacity="0.9"
            filter="blur(4px)"
          />
        </svg>
      </div>

      {/* 3. Subtle HUD Coordinates Overlay matching DESIGN.md technical rules */}
      <div className="absolute top-3 left-4 right-4 flex items-center justify-between font-mono text-[9px] text-[#555555] pointer-events-none z-30">
        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 bg-[#FF6900] animate-pulse" />
          <span className="tracking-widest uppercase text-[#777777]">TARGET_LOCK // EYES_ONLY</span>
        </div>
        <span>FOG_DENSITY: 84%</span>
      </div>

      <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between font-mono text-[9px] text-[#444444] pointer-events-none z-30">
        <span>PREDATORY_GAZE // ACTIVE</span>
        <span className="text-[#FF6900]/80">UNBLINKING PERSISTENCE</span>
      </div>
    </div>
  )
}
