import { useEffect, useRef } from 'react'

export default function GridGlow({
  cellSize = 80,
  glowRadius = 2.4,
  cellAlpha = 0.55,
  gridOpacity = 0.8,
}) {
  const canvasRef = useRef(null)
  const props = useRef({ cellSize, glowRadius, cellAlpha, gridOpacity })

  props.current = { cellSize, glowRadius, cellAlpha, gridOpacity }

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')

    const { cellSize: cell, glowRadius: influence, cellAlpha: glowAlpha, gridOpacity: lineOpacity } = props.current

    let rafId
    let cssW = 0
    let cssH = 0
    let cols = 0
    let rows = 0
    let cellVals = new Float32Array(0)
    let baseCanvas = null
    let colors = { line: '#252525', accent: '#FF6900' }

    const mouse = { x: -99999, y: -99999, sx: -99999, sy: -99999 }

    const readColors = () => {
      const cs = getComputedStyle(document.documentElement)
      colors = {
        line: cs.getPropertyValue('--line').trim() || '#252525',
        accent: cs.getPropertyValue('--accent').trim() || '#FF6900',
      }
    }

    const buildBaseGrid = () => {
      if (!baseCanvas) baseCanvas = document.createElement('canvas')
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      baseCanvas.width = cssW * dpr
      baseCanvas.height = cssH * dpr
      const bctx = baseCanvas.getContext('2d')
      bctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      bctx.clearRect(0, 0, cssW, cssH)
      bctx.beginPath()
      for (let x = 0; x <= cssW; x += cell) {
        bctx.moveTo(x + 0.5, 0)
        bctx.lineTo(x + 0.5, cssH)
      }
      for (let y = 0; y <= cssH; y += cell) {
        bctx.moveTo(0, y + 0.5)
        bctx.lineTo(cssW, y + 0.5)
      }
      bctx.strokeStyle = colors.line
      bctx.globalAlpha = lineOpacity
      bctx.lineWidth = 1
      bctx.stroke()
    }

    // Size is relative to the hosting container, so the grid stays
    // scoped to its section rather than the whole viewport.
    const host = canvas.parentElement || canvas

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      cssW = host.clientWidth
      cssH = host.clientHeight
      canvas.width = cssW * dpr
      canvas.height = cssH * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

      cols = Math.ceil(cssW / cell) + 1
      rows = Math.ceil(cssH / cell) + 1
      cellVals = new Float32Array(cols * rows)
      baseCanvas = null
      buildBaseGrid()
    }

    const handleMouseMove = (e) => {
      const rect = host.getBoundingClientRect()
      const px = e.clientX - rect.left
      const py = e.clientY - rect.top
      const inside = px >= 0 && px <= rect.width && py >= 0 && py <= rect.height
      mouse.x = inside ? px : -99999
      mouse.y = inside ? py : -99999
    }

    const handleThemeChange = () => {
      readColors()
      buildBaseGrid()
    }

    const tick = () => {
      rafId = requestAnimationFrame(tick)

      // Smoothly interpolate cursor so the glow glides between cells
      mouse.sx += (mouse.x - mouse.sx) * 0.16
      mouse.sy += (mouse.y - mouse.sy) * 0.16

      ctx.clearRect(0, 0, cssW, cssH)
      if (baseCanvas) ctx.drawImage(baseCanvas, 0, 0, cssW, cssH)

      const span = Math.ceil(influence) + 1
      const centerCol = Math.floor(mouse.sx / cell)
      const centerRow = Math.floor(mouse.sy / cell)

      // Per-cell brightness in cell units — steep falloff so the center cell
      // is clearly brightest, the neighboring ring is medium, outer ring faint.
      for (let row = Math.max(0, centerRow - span); row <= Math.min(rows - 1, centerRow + span); row++) {
        const cy = row * cell + cell / 2
        for (let col = Math.max(0, centerCol - span); col <= Math.min(cols - 1, centerCol + span); col++) {
          const cx = col * cell + cell / 2
          const dx = (cx - mouse.sx) / cell
          const dy = (cy - mouse.sy) / cell
          const dist = Math.sqrt(dx * dx + dy * dy)
          const falloff = Math.max(0, 1 - dist / influence)
          const target = Math.pow(falloff, 2.2)
          const i = row * cols + col
          cellVals[i] += (target - cellVals[i]) * 0.12
        }
      }

      // Decay everything for a soft trailing fade after the cursor leaves
      for (let i = 0; i < cellVals.length; i++) {
        if (cellVals[i] > 0.001) {
          cellVals[i] *= 0.94
        }
      }

      // Draw each lit cell as an individual glowing tile, inset by a hairline
      // so the dark grid separates the squares cleanly.
      ctx.fillStyle = colors.accent
      ctx.globalCompositeOperation = 'source-over'
      const inset = 1
      for (let i = 0; i < cellVals.length; i++) {
        const v = cellVals[i]
        if (v > 0.02) {
          const col = i % cols
          const row = Math.floor(i / cols)
          ctx.globalAlpha = v * glowAlpha
          ctx.fillRect(col * cell + inset, row * cell + inset, cell - inset * 2, cell - inset * 2)
        }
      }
      ctx.globalAlpha = 1
    }

    readColors()
    resize()
    tick()

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('resize', resize)
    const themeObserver = new MutationObserver(handleThemeChange)
    themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] })

    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('resize', resize)
      themeObserver.disconnect()
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
    />
  )
}