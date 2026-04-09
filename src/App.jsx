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

export default function App() {
  return (
    <div className="min-h-screen bg-[#07090f] text-slate-100">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Education />
        <Experience />
        <Projects />
        <Skills />
        <DSA />
        <Certifications />
        <Contact />
      </main>
    </div>
  )
}
