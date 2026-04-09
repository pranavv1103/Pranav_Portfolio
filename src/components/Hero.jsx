import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Github, Linkedin, Mail, Download, ChevronDown } from 'lucide-react'

// ─── Cascading entrance timing ────────────────────────────────────────────────
const EASE = [0.16, 1, 0.3, 1]

function flowIn(delay = 0) {
  return {
    initial: { opacity: 0, y: 36, filter: 'blur(4px)' },
    animate: { opacity: 1, y: 0, filter: 'blur(0px)' },
    transition: { duration: 0.8, ease: EASE, delay },
  }
}

// ─── Rotating role typewriter ────────────────────────────────────────────────
const roles = [
  'Full Stack Engineer',
  'Software Engineer',
  'Product-Focused Builder',
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
      }, 340)
    }, 2800)
    return () => clearTimeout(id)
  }, [index])

  return (
    <span
      className="inline-block min-w-[200px]"
      style={{
        opacity: phase === 'visible' ? 1 : 0,
        transform: phase === 'visible' ? 'translateY(0)' : 'translateY(8px)',
        transition: 'opacity 0.32s ease, transform 0.32s ease',
      }}
    >
      {roles[index]}
    </span>
  )
}

// ─── Animated ambient orbs ────────────────────────────────────────────────────
function Orb({ className, dy = -20, duration = 16 }) {
  return (
    <motion.div
      className={`absolute rounded-full blur-3xl pointer-events-none ${className}`}
      animate={{ y: [0, dy, 0] }}
      transition={{ duration, repeat: Infinity, ease: 'easeInOut' }}
    />
  )
}

// ─── Decorative ring ─────────────────────────────────────────────────────────
function DecorativeRing({ size, className, duration = 40 }) {
  return (
    <motion.div
      className={`absolute rounded-full border pointer-events-none ${className}`}
      style={{ width: size, height: size, marginLeft: -size / 2, marginTop: -size / 2 }}
      animate={{ rotate: 360 }}
      transition={{ duration, repeat: Infinity, ease: 'linear' }}
    />
  )
}

// ─── Floating particle dots ───────────────────────────────────────────────────
const DOTS = [
  { top: '14%', left: '6%',  w: 2.5, delay: 0 },
  { top: '20%', left: '89%', w: 2,   delay: 1.2 },
  { top: '44%', left: '3%',  w: 3,   delay: 2.4 },
  { top: '70%', left: '91%', w: 2,   delay: 0.6 },
  { top: '82%', left: '14%', w: 2.5, delay: 1.9 },
  { top: '9%',  left: '54%', w: 2,   delay: 3.1 },
  { top: '57%', left: '76%', w: 3,   delay: 0.3 },
  { top: '34%', left: '97%', w: 2,   delay: 2.1 },
  { top: '62%', left: '45%', w: 1.5, delay: 1.5 },
  { top: '28%', left: '32%', w: 2,   delay: 4.0 },
  { top: '88%', left: '68%', w: 1.5, delay: 2.8 },
  { top: '5%',  left: '78%', w: 2,   delay: 3.5 },
]

function FloatingDots() {
  return (
    <>
      {DOTS.map((d, i) => (
        <motion.span
          key={i}
          className="absolute rounded-full bg-indigo-400/25 pointer-events-none"
          style={{ top: d.top, left: d.left, width: d.w, height: d.w }}
          animate={{ y: [0, -18, 0], opacity: [0.15, 0.5, 0.15] }}
          transition={{ duration: 5 + i * 0.4, repeat: Infinity, ease: 'easeInOut', delay: d.delay }}
        />
      ))}
    </>
  )
}

// ─── Stats ────────────────────────────────────────────────────────────────────
const statsData = [
  { value: '650+', label: 'LeetCode solved' },
  { value: '3.97', label: 'GPA at UCF' },
  { value: '#119', label: 'Smart Interviews' },
]

// ─── Main component ───────────────────────────────────────────────────────────
export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#07090f]"
    >
      {/* Drifting grid background */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none animate-grid-drift"
        style={{
          backgroundImage:
            'linear-gradient(rgba(99,102,241,1) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Radial spotlight — slow breathing */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{ opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          background:
            'radial-gradient(ellipse 85% 65% at 50% -5%, rgba(99,102,241,0.18) 0%, transparent 70%)',
        }}
      />

      {/* Secondary deep glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 50% 40% at 50% 100%, rgba(139,92,246,0.08) 0%, transparent 70%)',
        }}
      />

      {/* Ambient orbs */}
      <Orb className="w-[800px] h-[800px] bg-indigo-600/[0.07] -top-52 -left-64" dy={-30} duration={18} />
      <Orb className="w-[600px] h-[600px] bg-violet-700/[0.06] top-1/3 -right-56" dy={26} duration={14} />
      <Orb className="w-[350px] h-[350px] bg-cyan-600/[0.04] bottom-16 left-1/4" dy={-18} duration={20} />
      <Orb className="w-[250px] h-[250px] bg-indigo-500/[0.05] top-1/4 right-1/4" dy={14} duration={12} />

      {/* Decorative rings */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        <DecorativeRing size={520} className="border-indigo-500/[0.05]" duration={55} />
        <DecorativeRing size={760} className="border-purple-500/[0.035]" duration={80} />
        <DecorativeRing size={1020} className="border-indigo-500/[0.02]" duration={110} />
      </div>

      {/* Diagonal accent beams */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute w-px h-72 bg-gradient-to-b from-transparent via-indigo-500/18 to-transparent"
          style={{ top: '8%', left: '72%', rotate: '22deg', transformOrigin: 'top' }}
          animate={{ opacity: [0.25, 0.65, 0.25] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
        />
        <motion.div
          className="absolute w-px h-56 bg-gradient-to-b from-transparent via-purple-500/15 to-transparent"
          style={{ top: '28%', left: '18%', rotate: '-18deg', transformOrigin: 'top' }}
          animate={{ opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
        />
        <motion.div
          className="absolute w-px h-40 bg-gradient-to-b from-transparent via-cyan-500/12 to-transparent"
          style={{ bottom: '20%', right: '22%', rotate: '12deg', transformOrigin: 'top' }}
          animate={{ opacity: [0.15, 0.4, 0.15] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 5 }}
        />
      </div>

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
            className="group relative flex items-center gap-2.5 px-6 py-3 rounded-xl font-semibold text-sm text-white overflow-hidden transition-all duration-300 shadow-[0_0_24px_rgba(99,102,241,0.28)] hover:shadow-[0_0_44px_rgba(99,102,241,0.48)]"
            style={{
              background: 'linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)',
            }}
          >
            {/* Shimmer overlay */}
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.08] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            View Projects
            <ArrowRight size={15} className="relative group-hover:translate-x-1 transition-transform duration-200" />
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
          className="w-full max-w-xl"
        >
          {/* Gradient border wrapper */}
          <div className="p-[1px] rounded-2xl bg-gradient-to-r from-indigo-500/20 via-purple-500/10 to-cyan-500/15">
            <div className="grid grid-cols-3 gap-px rounded-[calc(1rem-1px)] overflow-hidden bg-white/[0.015]">
              {statsData.map(({ value, label }) => (
                <motion.div
                  key={label}
                  whileHover={{ backgroundColor: 'rgba(99,102,241,0.08)' }}
                  transition={{ duration: 0.2 }}
                  className="px-4 py-5 text-center bg-[#0d1221]/80 backdrop-blur-sm cursor-default"
                >
                  <div className="text-xl sm:text-2xl font-bold tabular-nums mb-0.5"
                    style={{
                      background: 'linear-gradient(135deg, #a5b4fc 0%, #c4b5fd 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}>
                    {value}
                  </div>
                  <div className="text-[11px] text-slate-500 font-medium leading-tight">{label}</div>
                </motion.div>
              ))}
            </div>
          </div>
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
