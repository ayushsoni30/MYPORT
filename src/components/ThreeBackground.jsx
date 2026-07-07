import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export default function ThreeBackground() {
  const canvasRef = useRef(null)

  useEffect(() => {
    if (!canvasRef.current) return

    const width = window.innerWidth
    const height = window.innerHeight
    const isMobile = width < 768

    // Three.js Scene Setup
    const scene = new THREE.Scene()
    
    // Camera
    const camera = new THREE.PerspectiveCamera(65, width / height, 0.1, 100)
    camera.position.z = 24

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
      antialias: !isMobile,
      powerPreference: 'high-performance',
    })
    renderer.setSize(width, height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

    // Create glowing dot texture
    const createParticleTexture = () => {
      const canvas = document.createElement('canvas')
      canvas.width = 32
      canvas.height = 32
      const ctx = canvas.getContext('2d')
      
      const gradient = ctx.createRadialGradient(16, 16, 0, 16, 16, 16)
      gradient.addColorStop(0, 'rgba(255, 255, 255, 1)')
      gradient.addColorStop(0.2, 'rgba(147, 51, 234, 0.8)') // violet purple glow
      gradient.addColorStop(0.6, 'rgba(59, 130, 246, 0.2)') // blue glow
      gradient.addColorStop(1, 'rgba(59, 130, 246, 0)')
      
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, 32, 32)
      return new THREE.CanvasTexture(canvas)
    }

    const particleTexture = createParticleTexture()

    // 1. Particle Formations Setup
    const particleCount = isMobile ? 220 : 650
    const geometry = new THREE.BufferGeometry()
    
    // Initialize coordinate buffers for interpolations
    const posHero = new Float32Array(particleCount * 3)
    const posAbout = new Float32Array(particleCount * 3)
    const posProjects = new Float32Array(particleCount * 3)
    const posContact = new Float32Array(particleCount * 3)

    // Formations Mathematics
    // Formation A: Sphere (Hero)
    for (let i = 0; i < particleCount; i++) {
      const u = Math.random()
      const v = Math.random()
      const theta = u * 2.0 * Math.PI
      const phi = Math.acos(2.0 * v - 1.0)
      const r = 5.0 + Math.random() * 2.2 // sphere radius
      posHero[i * 3] = r * Math.sin(phi) * Math.cos(theta)
      posHero[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
      posHero[i * 3 + 2] = r * Math.cos(phi)
    }

    // Formation B: Wavy Terrain Grid (About & Skills)
    const cols = Math.ceil(Math.sqrt(particleCount))
    for (let i = 0; i < particleCount; i++) {
      const col = i % cols
      const row = Math.floor(i / cols)
      const x = ((col / cols) - 0.5) * 45
      const z = ((row / cols) - 0.5) * 45
      // Height deformation
      const y = Math.sin(x * 0.2) * Math.cos(z * 0.2) * 3.5 - 6
      posAbout[i * 3] = x
      posAbout[i * 3 + 1] = y
      posAbout[i * 3 + 2] = z
    }

    // Formation C: Helix Vortex/Tunnel (Projects & Experience)
    for (let i = 0; i < particleCount; i++) {
      const fraction = i / particleCount
      const angle = fraction * Math.PI * 24.0 // multiple wraps
      const r = 5.5 + Math.sin(fraction * Math.PI * 5) * 1.5 // pulsating radius
      const x = r * Math.cos(angle)
      const z = r * Math.sin(angle)
      const y = (fraction - 0.5) * 36 // spans along vertical axis
      posProjects[i * 3] = x
      posProjects[i * 3 + 1] = y - 10
      posProjects[i * 3 + 2] = z
    }

    // Formation D: Cosmic Chaos / Starfield (Contact & Achievements)
    for (let i = 0; i < particleCount; i++) {
      posContact[i * 3] = (Math.random() - 0.5) * 60
      posContact[i * 3 + 1] = (Math.random() - 0.5) * 60 - 20
      posContact[i * 3 + 2] = (Math.random() - 0.5) * 50
    }

    // Initialize Active Buffers on geometry
    const positions = new Float32Array(particleCount * 3)
    const colors = new Float32Array(particleCount * 3)
    
    // Copy initial hero positions
    for (let i = 0; i < particleCount * 3; i++) {
      positions[i] = posHero[i]
      colors[i] = 1.0
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3))

    // Material with vertex colors enabled
    const material = new THREE.PointsMaterial({
      size: isMobile ? 0.38 : 0.55,
      map: particleTexture,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      vertexColors: true,
    })

    const particles = new THREE.Points(geometry, material)
    scene.add(particles)

    // Interactive Mouse Target
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 }

    const handleMouseMove = (event) => {
      mouse.targetX = (event.clientX / window.innerWidth) * 2 - 1
      mouse.targetY = -(event.clientY / window.innerHeight) * 2 + 1
    }

    window.addEventListener('mousemove', handleMouseMove)

    // Window Resize
    const handleResize = () => {
      const w = window.innerWidth
      const h = window.innerHeight
      camera.aspect = w / h
      camera.updateProjectionMatrix()
      renderer.setSize(w, h)
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    }

    window.addEventListener('resize', handleResize)

    // Animation loop setup
    let animationFrameId
    const clock = new THREE.Clock()

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate)

      const time = clock.getElapsedTime()

      // LERP Mouse position
      mouse.x += (mouse.targetX - mouse.x) * 0.05
      mouse.y += (mouse.targetY - mouse.y) * 0.05

      // Calculate scroll progress percentage (0.0 to 1.0)
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollPercent = scrollHeight > 0 ? Math.max(0, Math.min(window.scrollY / scrollHeight, 1)) : 0

      // Buffers to write to
      const positionsArray = geometry.attributes.position.array
      const colorsArray = geometry.attributes.color.array

      // Project 2D normalized mouse coordinates into approximate 3D world coordinates at Z=0
      const aspect = camera.aspect
      const fovRad = (camera.fov * Math.PI) / 180
      const planeHeight = 2.0 * Math.tan(fovRad / 2.0) * camera.position.z
      const planeWidth = planeHeight * aspect

      const mouse3D = {
        x: mouse.x * (planeWidth / 2.0),
        y: camera.position.y + mouse.y * (planeHeight / 2.0),
        z: 0
      }

      // Interpolate positions and colors based on Scroll percentage
      for (let i = 0; i < particleCount; i++) {
        let x1, y1, z1, x2, y2, z2
        let r1, g1, b1, r2, g2, b2
        let t = 0

        if (scrollPercent < 0.33) {
          // Hero (Sphere) to About/Skills (Terrain)
          t = scrollPercent / 0.33
          
          x1 = posHero[i * 3]; y1 = posHero[i * 3 + 1]; z1 = posHero[i * 3 + 2]
          x2 = posAbout[i * 3]; y2 = posAbout[i * 3 + 1]; z2 = posAbout[i * 3 + 2]

          r1 = 0.23; g1 = 0.51; b1 = 0.96 // Electric Blue (#3b82f6)
          r2 = 0.85; g2 = 0.27; b2 = 0.94 // Cyber Magenta (#d946ef)
        } else if (scrollPercent < 0.66) {
          // About/Skills (Terrain) to Experience/Projects (Vortex)
          t = (scrollPercent - 0.33) / 0.33
          
          x1 = posAbout[i * 3]; y1 = posAbout[i * 3 + 1]; z1 = posAbout[i * 3 + 2]
          x2 = posProjects[i * 3]; y2 = posProjects[i * 3 + 1]; z2 = posProjects[i * 3 + 2]

          r1 = 0.85; g1 = 0.27; b1 = 0.94 // Cyber Magenta (#d946ef)
          r2 = 0.02; g2 = 0.71; b2 = 0.83 // Cyber Cyan (#06b6d4)
        } else {
          // Experience/Projects (Vortex) to Contact (Chaos)
          t = Math.min((scrollPercent - 0.66) / 0.34, 1.0)
          
          x1 = posProjects[i * 3]; y1 = posProjects[i * 3 + 1]; z1 = posProjects[i * 3 + 2]
          x2 = posContact[i * 3]; y2 = posContact[i * 3 + 1]; z2 = posContact[i * 3 + 2]

          r1 = 0.02; g1 = 0.71; b1 = 0.83 // Cyber Cyan (#06b6d4)
          r2 = 0.85; g2 = 0.85; b2 = 0.92 // Silver Grey
        }

        // Apply LERP transition
        positionsArray[i * 3] = x1 + (x2 - x1) * t
        positionsArray[i * 3 + 1] = y1 + (y2 - y1) * t
        positionsArray[i * 3 + 2] = z1 + (z2 - z1) * t

        colorsArray[i * 3] = r1 + (r2 - r1) * t
        colorsArray[i * 3 + 1] = g1 + (g2 - g1) * t
        colorsArray[i * 3 + 2] = b1 + (b2 - b1) * t

        // Add subtle floating noise offset to keep the visual simulation alive
        const waveSpeed = 0.7
        positionsArray[i * 3] += Math.sin(time * waveSpeed + i) * 0.03
        positionsArray[i * 3 + 1] += Math.cos(time * waveSpeed * 0.8 + i) * 0.03
        positionsArray[i * 3 + 2] += Math.sin(time * waveSpeed * 0.6 + i) * 0.03

        // Apply mouse gravity warp ripple (push particles away from cursor)
        const dx = positionsArray[i * 3] - mouse3D.x
        const dy = positionsArray[i * 3 + 1] - mouse3D.y
        const dz = positionsArray[i * 3 + 2] - mouse3D.z
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz)
        
        const warpRadius = 7.0 // radius of warp influence
        if (dist < warpRadius && dist > 0.1) {
          const force = (warpRadius - dist) / warpRadius // 0 to 1
          const pushAmount = force * 1.5 // max units displacement
          positionsArray[i * 3] += (dx / dist) * pushAmount
          positionsArray[i * 3 + 1] += (dy / dist) * pushAmount
          positionsArray[i * 3 + 2] += (dz / dist) * pushAmount
        }
      }

      geometry.attributes.position.needsUpdate = true
      geometry.attributes.color.needsUpdate = true

      // Slow global mesh rotations + add cursor influence
      particles.rotation.y = time * 0.05 + mouse.x * 0.35
      particles.rotation.x = time * 0.02 - mouse.y * 0.25

      // Slide camera position downward following the flight path of particles
      const targetCamY = -scrollPercent * (isMobile ? 8.0 : 16.0)
      camera.position.y += (targetCamY - camera.position.y) * 0.15
      camera.lookAt(0, camera.position.y, 0)

      renderer.render(scene, camera)
    }

    animate()

    // Cleanup resources
    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('resize', handleResize)

      geometry.dispose()
      material.dispose()
      particleTexture.dispose()
      renderer.dispose()
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-[-1] bg-[#0b1120]"
      style={{ mixBlendMode: 'screen' }}
    />
  )
}
