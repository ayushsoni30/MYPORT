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
   
    gsap.registerPlugin(ScrollTrigger)

    const isMobile = window.innerWidth < 768

   
    const sections = document.querySelectorAll('main > section:not(#home)')

    sections.forEach((section, index) => {
      if (isMobile) {
     
        gsap.set(section, {
          opacity: 0,
          y: 25, 
          rotateX: 0,
          rotateY: 0,
          z: 0,
          scale: 1,
        })

        gsap.to(section, {
          opacity: 1,
          y: 0,
          scrollTrigger: {
            trigger: section,
            start: 'top 100%', // start immediately when entering screen bottom
            end: 'top 78%', // finish transition earlier
            scrub: 1.0,
            toggleActions: 'play none none reverse',
          },
        })
      } else {
        const isEven = index % 2 === 0
        const rotateYStart = isEven ? 12 : -12 // Gentler angles

        // Initial 3D carousel transform states
        gsap.set(section, {
          opacity: 0,
          y: 75, // Reduced vertical offset to settle faster
          z: -140, // Gentler depth skewing
          rotateY: rotateYStart,
          rotateX: 6,
          scale: 0.9,
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
            start: 'top 100%', // start immediately when entering screen bottom
            end: 'top 74%', // finish transition earlier, settling section at the lower third
            scrub: 1.5,
            toggleActions: 'play none none reverse',
          },
        })
      }
    })
const headings = document.querySelectorAll("main h2");

headings.forEach((heading) => {
  gsap.fromTo(
    heading,
    {
      opacity: 0,
      y: 40,
    },
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: heading,
        start: "top 85%",
        toggleActions: "play none none reverse",
      },
    }
  );
});

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
    
        <ThreeBackground />

       
        <CustomCursor />

        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-primary z-100 origin-left"
          style={{ scaleX }}
        />

        <Navbar />

        
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

