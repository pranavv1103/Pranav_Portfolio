import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Github, Linkedin, Mail, Download, ChevronDown } from 'lucide-react'

const roles = [
  'Full Stack Engineer',
  'Software Engineer',
  'Product-Focused Builder',
  'Full Stack Developer',
  'System Designer',
]

function RotatingRole() {
  const [index, setIndex] = useState(0)
  const [phase, setPhase] = useState('visible')

  useEffect(() => {
    const id = setTimeout(() => {
      setPhase('fading')
      setTimeout(() => {
        setIndex((i) => (i + 1) % roles.length)
        setPhase('visible')
      }, 320)
    }, 2600)
    return () => clearTimeout(id)
  }, [index])

  return (
    <span
      className="inline-block transition-all duration-300"
      style={{
        opacity: phase === 'visible' ? 1 : 0,
        transform: phase === 'visible' ? 'translateY(0)' : 'translateY(6px)',
      }}
    >
      {roles[index]}
    </span>
  )
}

function Orb({ className, dy = -20 }) {
  return (
    <motion.div
      className={`absolute rounded-full blur-3xl pointer-events-none ${className}`}
      animate={{ y: [0, dy, 0] }}
      transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
    />
  )
}

const DOTS = [
  { top: '12%', left: '7%',  w: 2.5, delay: 0 },
  { top: '22%', left: '88%', w: 2,   delay: 1.1 },
  { top: '45%', left: '4%',  w: 3,   delay: 2.3 },
  { top: '68%', left: '90%', w: 2,   delay: 0.7 },
  { top: '80%', left: '15%', w: 2.5, delay: 1.8 },
  { top: '10%', left: '55%', w: 2,   delay: 3.0 },
  { top: '58%', left: '75%', w: 3,   delay: 0.4 },
  { top: '35%', left: '96%', w: 2,   delay: 2.0 },
]

function FloatingDots() {
  return (
    <>
      {DOTS.map((d, i) => (
        <motion.span
          key={i}
          className="absolute rounded-full bg-indigo-400/20 pointer-events-none"
          style={{ top: d.top, left: d.left, width: d.w, height: d.w }}
          animate={{ y: [0, -14, 0], opacity: [0.2, 0.55, 0.2] }}
          transition={{ duration: 4.5 + i * 0.5, repeat: Infinity, ease: 'easeInOut', delay: d.delay }}
        />
      ))}
    </>
  )
}

const statsData = [
  { value: '650+', label: 'LeetCode solved' },
  { value: '3.97', label: 'GPA at UCF' },
  { value: '#119', label: 'Smart Interviews' },
]

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#07090f]"
    >
      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(99,102,241,1) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />
      {/* Radial spotlight */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{ opacity: [0.8, 1, 0.8] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(99,102,241,0.15) 0%, transparent 70%)',
        }}
      />

      {/* Ambient orbs */}
      <Orb className="w-[700px] h-[700px] bg-indigo-600/[0.07] -top-40 -left-52" dy={-28} />
      <Orb className="w-[500px] h-[500px] bg-violet-700/[0.05] top-1/2 -right-48" dy={22} />
      <Orb className="w-[300px] h-[300px] bg-indigo-600/[0.04] bottom-16 left-1/4" dy={-16} />

      {/* Floating particles */}
      <FloatingDots />

      {/* Top fade */}
      <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-[#07090f] to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center pt-24 pb-16">

        {/* Status chip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.05 }}
          className="mb-7 inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono font-medium text-indigo-300 bg-indigo-500/10 border border-indigo-500/20 select-none"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.8)] animate-pulse" />
          Open to full-time roles
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="text-5xl sm:text-6xl md:text-[4.5rem] font-black tracking-tight text-slate-100 leading-[1.06] mb-5"
        >
          Pranav Tej{' '}
          <span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage:
                'linear-gradient(135deg, #a5b4fc 0%, #818cf8 50%, #7c3aed 100%)',
              backgroundSize: '200% auto',
              animation: 'shimmer 6s linear infinite',
            }}
          >
            Lalapeta
          </span>
        </motion.h1>

        {/* Rotating role */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.28 }}
          className="mb-4 flex flex-wrap items-center justify-center gap-x-2.5 gap-y-1 text-xl sm:text-2xl font-semibold"
        >
          <span className="text-slate-400">I build as a</span>
          <span className="text-indigo-300 min-w-[230px] text-left">
            <RotatingRole />
          </span>
        </motion.div>

        {/* Value prop */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="max-w-2xl text-base sm:text-lg text-slate-400 leading-relaxed mb-10 text-balance"
        >
          MS Computer Science at UCF (GPA 3.97), building scalable full-stack systems,
          secure REST APIs, and real-time applications that hold up in production.
        </motion.p>

        {/* CTA row */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.52 }}
          className="flex flex-wrap items-center justify-center gap-3 mb-16"
        >
          <button
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="group flex items-center gap-2.5 px-6 py-3 rounded-xl font-semibold text-sm text-white bg-indigo-600 hover:bg-indigo-500 transition-all duration-200 shadow-[0_0_20px_rgba(99,102,241,0.22)] hover:shadow-[0_0_36px_rgba(99,102,241,0.35)]"
          >
            View Projects
            <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform duration-200" />
          </button>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-slate-200 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-200"
          >
            <Download size={15} />
            Resume
          </a>

          <a
            href="https://github.com/pranavv1103"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-4 py-3 rounded-xl text-slate-400 hover:text-slate-200 border border-white/[0.08] hover:border-white/20 hover:bg-white/5 transition-all duration-200"
            aria-label="GitHub"
          >
            <Github size={17} />
          </a>

          <a
            href="https://linkedin.com/in/pranavtejlalapeta"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-4 py-3 rounded-xl text-slate-400 hover:text-slate-200 border border-white/[0.08] hover:border-white/20 hover:bg-white/5 transition-all duration-200"
            aria-label="LinkedIn"
          >
            <Linkedin size={17} />
          </a>

          <a
            href="mailto:pranavtej.lalapeta@gmail.com"
            className="inline-flex items-center justify-center px-4 py-3 rounded-xl text-slate-400 hover:text-slate-200 border border-white/[0.08] hover:border-white/20 hover:bg-white/5 transition-all duration-200"
            aria-label="Email"
          >
            <Mail size={17} />
          </a>
        </motion.div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.68 }}
          className="w-full max-w-xl grid grid-cols-3 gap-px rounded-2xl overflow-hidden border border-white/[0.07] bg-white/[0.025]"
        >
          {statsData.map(({ value, label }) => (
            <motion.div
              key={label}
              whileHover={{ backgroundColor: 'rgba(99,102,241,0.07)' }}
              transition={{ duration: 0.2 }}
              className="px-4 py-5 text-center bg-white/[0.015] backdrop-blur-sm cursor-default"
            >
              <div className="text-xl sm:text-2xl font-bold text-slate-100 tabular-nums mb-0.5">
                {value}
              </div>
              <div className="text-[11px] text-slate-500 font-medium leading-tight">{label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 0.6 }}
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        className="absolute bottom-8 flex flex-col items-center gap-2 text-slate-600 hover:text-slate-400 transition-colors duration-200 cursor-pointer"
      >
        <span className="text-[9px] font-mono tracking-[0.2em] uppercase">scroll</span>
        <ChevronDown size={15} className="animate-bounce" />
      </motion.button>

      {/* Bottom fade */}
      <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-[#07090f] to-transparent pointer-events-none" />

      <style>{`
        @keyframes shimmer {
          0% { background-position: 200% center; }
          100% { background-position: -200% center; }
        }
      `}</style>
    </section>
  )
}
