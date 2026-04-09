import { motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Education from './components/Education'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import DSA from './components/DSA'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import ScrollProgress from './components/ui/ScrollProgress'
import CursorGlow from './components/ui/CursorGlow'
import { SectionDivider } from './components/ui/SectionDivider'

// ─── Global ambient particles overlay (full page, z=0, non-blocking) ──────────
const GLOBAL_PARTICLES = [
  { top: '8%',  left: '1%',  delay: 0,   dur: 7 },
  { top: '15%', left: '98%', delay: 2.1, dur: 8 },
  { top: '32%', left: '0%',  delay: 4.5, dur: 6 },
  { top: '48%', left: '99%', delay: 1.3, dur: 9 },
  { top: '65%', left: '2%',  delay: 3.0, dur: 7 },
  { top: '78%', left: '97%', delay: 5.2, dur: 8 },
  { top: '92%', left: '1%',  delay: 0.8, dur: 6 },
  { top: '25%', left: '50%', delay: 6.0, dur: 10 },
  { top: '55%', left: '48%', delay: 2.8, dur: 9 },
]

function GlobalParticles() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden" aria-hidden>
      {GLOBAL_PARTICLES.map((p, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-indigo-400/20"
          style={{ top: p.top, left: p.left }}
          animate={{ y: [0, -20, 0], opacity: [0.1, 0.4, 0.1] }}
          transition={{ duration: p.dur, repeat: Infinity, ease: 'easeInOut', delay: p.delay }}
        />
      ))}
    </div>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#07090f] text-slate-100 noise-overlay">
      <GlobalParticles />
      <ScrollProgress />
      <CursorGlow />
      <Navbar />
      <main>
        <Hero />
        <SectionDivider />
        <About />
        <SectionDivider color="purple" />
        <Education />
        <SectionDivider color="cyan" />
        <Experience />
        <SectionDivider />
        <Projects />
        <SectionDivider color="purple" />
        <Skills />
        <SectionDivider color="cyan" />
        <DSA />
        <SectionDivider />
        <Certifications />
        <SectionDivider color="purple" />
        <Contact />
      </main>
    </div>
  )
}
