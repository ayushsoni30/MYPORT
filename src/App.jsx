import { useRef } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Education from './components/Education'
import Milestones from './components/Milestones'
import Contact from './components/Contact'
import Footer from './components/Footer'
import SectionIndicator from './components/SectionIndicator'
import GlassDock from './components/GlassDock'
import { ReactLenis } from 'lenis/react'

export default function App() {
  const rootRef = useRef(null)
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <ReactLenis
      root
      options={{
        duration: 1.2,
        lerp: 0.09,
        smoothTouch: true,
        wheelMultiplier: 0.9,
        touchMultiplier: 1.4,
        infinite: false,
      }}
    >
      <div
        ref={rootRef}
        className="min-h-screen bg-base text-ink selection:bg-accent selection:text-base relative"
      >

        {/* Minimal Thin Top Progress Line */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-[2px] bg-accent z-100 origin-left"
          style={{ scaleX }}
        />

        <main className="relative z-10">
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Experience />
          <Education />
          <Milestones />
          <Contact />
        </main>

        <Footer />

        {/* Floating Controls */}
        <SectionIndicator />
        <GlassDock rootRef={rootRef} />

      </div>
    </ReactLenis>
  )
}