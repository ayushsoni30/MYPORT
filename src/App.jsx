import { useEffect } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Achievements from './components/Achievements'
import Education from './components/Education'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import Footer from './components/Footer'
import CustomCursor from './components/CustomCursor'
import ThreeBackground from './components/ThreeBackground'
import { ReactLenis } from 'lenis/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function App() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  useEffect(() => {
    // Register GSAP plugins
    gsap.registerPlugin(ScrollTrigger)

    // Select all main page sections (except Hero which animates on load)
    const sections = document.querySelectorAll('main > section:not(#home)')

    sections.forEach((section, index) => {
      const isEven = index % 2 === 0
      const rotateYStart = isEven ? 24 : -24

      // Initial 3D carousel transform states
      gsap.set(section, {
        opacity: 0,
        y: 140,
        z: -450,
        rotateY: rotateYStart,
        rotateX: 12,
        scale: 0.85,
        transformPerspective: 1600,
        transformOrigin: isEven ? 'left center' : 'right center',
      })

      // Animates on scroll trigger
      gsap.to(section, {
        opacity: 1,
        y: 0,
        z: 0,
        rotateY: 0,
        rotateX: 0,
        scale: 1,
        scrollTrigger: {
          trigger: section,
          start: 'top 95%', // start when section top enters 95% of viewport height
          end: 'top 55%',
          scrub: 1.6, // buttery smooth scrub lag
          toggleActions: 'play none none reverse',
        },
      })
    })

    // Heading reveal animations (clip-path/translateY slide up)
    const headings = document.querySelectorAll('main h2')
    headings.forEach((heading) => {
      const originalText = heading.innerHTML
      heading.innerHTML = `<span style="display: block; transform: translateY(105%); transition: transform 0.8s cubic-bezier(0.25, 1, 0.5, 1);">${originalText}</span>`
      heading.style.overflow = 'hidden'
      heading.style.display = 'block'
      
      ScrollTrigger.create({
        trigger: heading,
        start: 'top 92%',
        onEnter: () => {
          const span = heading.querySelector('span')
          if (span) span.style.transform = 'translateY(0%)'
        },
        onLeaveBack: () => {
          const span = heading.querySelector('span')
          if (span) span.style.transform = 'translateY(105%)'
        }
      })
    })

    // Entrance Timeline
    const tl = gsap.timeline({ defaults: { ease: 'power4.out', duration: 1.4 } })

    gsap.set('nav', { y: -80, opacity: 0 })
    gsap.set('#home', { opacity: 0, scale: 0.95 })

    tl.to('nav', { y: 0, opacity: 1, delay: 0.1 })
      .to('#home', { opacity: 1, scale: 1, duration: 1.6 }, '-=1.0')

  }, [])

  return (
    <ReactLenis root>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="min-h-screen bg-bg-dark text-text-light selection:bg-primary/30 selection:text-text-light transition-colors duration-300 relative"
      >
        {/* Global 3D Particle Field */}
        <ThreeBackground />

        {/* Custom smooth spring cursor */}
        <CustomCursor />

        {/* Top Scroll Progress Bar */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-primary z-100 origin-left"
          style={{ scaleX }}
        />

        {/* Navigation Bar */}
        <Navbar />

        {/* Page Sections */}
        <main className="relative z-10">
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Achievements />
          <Education />
          <Certifications />
          <Contact />
        </main>

        {/* Footer */}
        <Footer />
      </motion.div>
    </ReactLenis>
  )
}

