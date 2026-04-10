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
import ParticleField from './components/ui/ParticleField'
import { SectionDivider } from './components/ui/SectionDivider'

export default function App() {
  return (
    <div className="min-h-screen bg-[#010408] text-slate-200 noise-overlay">
      <ParticleField />
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
