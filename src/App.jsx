import { motion, useScroll, useSpring } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import MetricStrip from './components/MetricStrip'
import About from './components/About'
import Projects from './components/Projects'
import Benchmarks from './components/Benchmarks'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Education from './components/Education'
import Achievements from './components/Achievements'
import Certifications from './components/Certifications'
import CodeSection from './components/CodeSection'
import Contact from './components/Contact'
import CTASection from './components/CTASection'
import Footer from './components/Footer'
import { ReactLenis } from 'lenis/react'

export default function App() {
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
      <div className="min-h-screen bg-[#0B0B0B] text-[#F2F2F0] selection:bg-[#FF6900] selection:text-[#0B0B0B] relative technical-grid">
        
        {/* Minimal Thin Top Progress Line */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-[2px] bg-[#FF6900] z-100 origin-left"
          style={{ scaleX }}
        />

        {/* Global Navigation */}
        <Navbar />

        {/* Centered Page Container with Vertical Boundary Lines (DESIGN.md Section 3) */}
        <div className="page-container relative bg-[#0B0B0B]">
          <main className="relative z-10">
            <Hero />
            <MetricStrip />
            <About />
            <Projects />
            <Benchmarks />
            <Skills />
            <Experience />
            <Education />
            <Achievements />
            <Certifications />
            <CodeSection />
            <Contact />
            <CTASection />
          </main>

          {/* Documentation Footer */}
          <Footer />
        </div>

      </div>
    </ReactLenis>
  )
}
