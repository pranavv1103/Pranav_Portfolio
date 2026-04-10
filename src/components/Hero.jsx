import { useState, useEffect, useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { ArrowRight, Github, Linkedin, Mail, Download, ChevronDown } from 'lucide-react'

// ─── Cascading entrance timing ────────────────────────────────────────────────
const EASE = [0.16, 1, 0.3, 1]

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

// ─── Full name: per-letter 3D flip-in + uniform aurora wave ─────────────────
const FULL_NAME = 'Pranav Tej Lalapeta'

function AnimatedName() {
  return (
    <div
      className="font-black tracking-tight leading-[1.06] mb-2 flex flex-wrap justify-center"
      style={{ fontSize: 'clamp(2.6rem, 7vw, 4.5rem)', perspective: '900px' }}
    >
      {FULL_NAME.split('').map((ch, i) => (
        <motion.span
          key={i}
          className={`inline-block ${ch === ' ' ? 'w-[0.28em]' : ''}`}
          initial={{ opacity: 0, rotateX: -90, y: 24, scale: 0.8 }}
          animate={{ opacity: 1, rotateX: 0, y: 0, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.08 + i * 0.038, ease: [0.16, 1, 0.3, 1] }}
          style={{
            backgroundImage: 'linear-gradient(135deg, #c4b5fd 0%, #818cf8 30%, #7c3aed 60%, #a5b4fc 100%)',
            backgroundSize: '300% auto',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            filter: 'drop-shadow(0 2px 12px rgba(129,140,248,0.40))',
            animation: ch !== ' ' ? `lWave 5s ease-in-out ${i * 0.18}s infinite alternate` : undefined,
            transformStyle: 'preserve-3d',
          }}
        >
          {ch}
        </motion.span>
      ))}
    </div>
  )
}

// ─── Floating tech badges ─────────────────────────────────────────────────────
const TECH_FLOAT = [
  { label: 'Java',        color: '#fb923c', bg: 'rgba(251,146,60,0.08)',   border: 'rgba(251,146,60,0.28)',   top: '22%', left:  '4.5%', delay: 0,   dy: -14, dur: 7   },
  { label: 'Spring Boot', color: '#4ade80', bg: 'rgba(74,222,128,0.08)',   border: 'rgba(74,222,128,0.28)',   top: '38%', right: '4%',   delay: 1.4, dy: -18, dur: 9   },
  { label: 'React',       color: '#38bdf8', bg: 'rgba(56,189,248,0.08)',   border: 'rgba(56,189,248,0.28)',   top: '63%', left:  '3%',   delay: 0.7, dy: -12, dur: 8   },
  { label: 'PostgreSQL',  color: '#818cf8', bg: 'rgba(129,140,248,0.08)',  border: 'rgba(129,140,248,0.28)',  top: '71%', right: '4.5%', delay: 2.1, dy: -16, dur: 10  },
  { label: 'Python',      color: '#facc15', bg: 'rgba(250,204,21,0.08)',   border: 'rgba(250,204,21,0.28)',   top: '15%', right: '11%',  delay: 1.0, dy: -10, dur: 6.5 },
  { label: 'WebSockets',  color: '#a78bfa', bg: 'rgba(167,139,250,0.08)', border: 'rgba(167,139,250,0.28)',  top: '53%', left:  '2%',   delay: 2.8, dy: -20, dur: 11  },
]

function FloatingTechBadges() {
  return (
    <>
      {TECH_FLOAT.map((b, i) => (
        <motion.div
          key={i}
          className="absolute hidden xl:flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-mono font-semibold pointer-events-none select-none z-10"
          style={{
            top: b.top, left: b.left, right: b.right,
            color: b.color, background: b.bg,
            border: `1px solid ${b.border}`,
            backdropFilter: 'blur(10px)',
          }}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 0.62, scale: 1, y: [0, b.dy, 0] }}
          transition={{
            opacity: { duration: 0.6, delay: 0.9 + b.delay },
            scale:   { duration: 0.6, delay: 0.9 + b.delay, ease: [0.16, 1, 0.3, 1] },
            y:       { duration: b.dur, delay: b.delay, repeat: Infinity, ease: 'easeInOut' },
          }}
        >
          <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: b.color, boxShadow: `0 0 6px ${b.color}` }} />
          {b.label}
        </motion.div>
      ))}
    </>
  )
}

// ─── Stats ────────────────────────────────────────────────────────────────────
const statsData = [
  {
    value: '650+',
    label: 'LeetCode solved',
    accent: 'from-indigo-500/30 via-indigo-400/10 to-transparent',
    glow: 'shadow-[0_20px_50px_rgba(79,70,229,0.18)]',
  },
  {
    value: '3.97',
    label: 'GPA at UCF',
    accent: 'from-violet-500/28 via-fuchsia-400/10 to-transparent',
    glow: 'shadow-[0_20px_50px_rgba(139,92,246,0.18)]',
  },
  {
    value: '#119',
    label: 'Smart Interviews',
    accent: 'from-cyan-500/28 via-sky-400/10 to-transparent',
    glow: 'shadow-[0_20px_50px_rgba(6,182,212,0.16)]',
  },
]

// ─── Main component ───────────────────────────────────────────────────────────
export default function Hero() {
  // Mouse-parallax for background depth
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const smoothX = useSpring(mouseX, { stiffness: 60, damping: 20 })
  const smoothY = useSpring(mouseY, { stiffness: 60, damping: 20 })
  const parallaxX1 = useTransform(smoothX, [-1, 1], ['-12px', '12px'])
  const parallaxY1 = useTransform(smoothY, [-1, 1], ['-10px', '10px'])
  const parallaxX2 = useTransform(smoothX, [-1, 1], ['8px', '-8px'])
  const parallaxY2 = useTransform(smoothY, [-1, 1], ['6px', '-6px'])

  const handleMouseMove = (e) => {
    const w = window.innerWidth
    const h = window.innerHeight
    mouseX.set((e.clientX / w - 0.5) * 2)
    mouseY.set((e.clientY / h - 0.5) * 2)
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#060b18]"
      onMouseMove={handleMouseMove}
    >
      {/* Drifting grid background — two layers at different scales */}
      <div
        className="absolute inset-0 opacity-[0.022] pointer-events-none animate-grid-drift"
        style={{
          backgroundImage:
            'linear-gradient(rgba(99,102,241,1) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.012] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(139,92,246,1) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,1) 1px, transparent 1px)',
          backgroundSize: '200px 200px',
          animation: 'grid-drift 35s linear infinite reverse',
        }}
      />

      {/* Radial spotlight — slow breathing */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{ opacity: [0.5, 0.76, 0.5] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          background:
            'radial-gradient(ellipse 85% 65% at 50% -5%, rgba(99,102,241,0.13) 0%, transparent 70%)',
        }}
      />

      {/* Secondary deep glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 50% 40% at 50% 100%, rgba(139,92,246,0.05) 0%, transparent 70%)',
        }}
      />

      {/* Ambient orbs — multi-axis drift + mouse parallax */}
      <motion.div
        className="absolute w-[800px] h-[800px] rounded-full bg-indigo-600/[0.045] -top-52 -left-64 blur-3xl pointer-events-none"
        style={{ x: parallaxX1, y: parallaxY1 }}
        animate={{ x: [0, 30, 0], y: [0, -30, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full bg-violet-700/[0.04] top-1/3 -right-56 blur-3xl pointer-events-none"
        style={{ x: parallaxX2, y: parallaxY2 }}
        animate={{ x: [0, -25, 0], y: [0, 26, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute w-[350px] h-[350px] rounded-full bg-cyan-600/[0.028] bottom-16 left-1/4 blur-3xl pointer-events-none"
        style={{ x: parallaxX1 }}
        animate={{ x: [0, 18, 0], y: [0, -18, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute w-[250px] h-[250px] rounded-full bg-indigo-500/[0.032] top-1/4 right-1/4 blur-3xl pointer-events-none"
        style={{ x: parallaxX2, y: parallaxY2 }}
        animate={{ x: [0, -12, 0], y: [0, 14, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />
      {/* Extra subtle rose glow — bottom centre */}
      <motion.div
        className="absolute w-[500px] h-[300px] rounded-full bg-purple-700/[0.025] bottom-0 left-1/2 -translate-x-1/2 blur-3xl pointer-events-none"
        animate={{ scale: [1, 1.12, 1], opacity: [0.5, 0.85, 0.5] }}
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut', delay: 6 }}
      />

      {/* Decorative rings — mouse-parallax depth */}
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{ x: parallaxX2, y: parallaxY2 }}
      >
        <DecorativeRing size={520} className="border-indigo-500/[0.05]" duration={55} />
        <DecorativeRing size={760} className="border-purple-500/[0.035]" duration={80} />
        <DecorativeRing size={1020} className="border-indigo-500/[0.02]" duration={110} />
      </motion.div>

      {/* 3D perspective floor grid — creates depth illusion */}
      <div
        className="absolute bottom-0 left-0 right-0 h-72 pointer-events-none overflow-hidden"
        style={{ perspective: '600px' }}
      >
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(99,102,241,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.8) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
            transform: 'rotateX(55deg) translateY(-20px)',
            transformOrigin: 'bottom center',
          }}
        />
        {/* Fade mask at top of the perspective grid */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#010408] via-transparent to-transparent" />
      </div>

      {/* Diagonal accent beams */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute w-px h-72 bg-gradient-to-b from-transparent via-indigo-500/[0.12] to-transparent"
          style={{ top: '8%', left: '72%', rotate: '22deg', transformOrigin: 'top' }}
          animate={{ opacity: [0.12, 0.28, 0.12] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
        />
        <motion.div
          className="absolute w-px h-56 bg-gradient-to-b from-transparent via-purple-500/[0.1] to-transparent"
          style={{ top: '28%', left: '18%', rotate: '-18deg', transformOrigin: 'top' }}
          animate={{ opacity: [0.1, 0.24, 0.1] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
        />
        <motion.div
          className="absolute w-px h-40 bg-gradient-to-b from-transparent via-cyan-500/[0.08] to-transparent"
          style={{ bottom: '20%', right: '22%', rotate: '12deg', transformOrigin: 'top' }}
          animate={{ opacity: [0.08, 0.2, 0.08] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 5 }}
        />
        {/* Horizontal light sweep — passes through once every ~20s */}
        <motion.div
          className="absolute h-px w-3/4 bg-gradient-to-r from-transparent via-indigo-400/[0.14] to-transparent"
          style={{ top: '38%', left: '0%' }}
          animate={{ x: ['-100%', '180%'], opacity: [0, 0.32, 0.32, 0] }}
          transition={{ duration: 4, repeat: Infinity, repeatDelay: 16, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute h-px w-1/2 bg-gradient-to-r from-transparent via-cyan-400/[0.1] to-transparent"
          style={{ top: '62%', right: '0%' }}
          animate={{ x: ['100%', '-180%'], opacity: [0, 0.22, 0.22, 0] }}
          transition={{ duration: 3.5, repeat: Infinity, repeatDelay: 22, ease: 'easeInOut', delay: 8 }}
        />
      </div>

      {/* Floating tech badges */}
      <FloatingTechBadges />

      {/* Decorative floating geometry — behind text, slow independent motion */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Morphing blob — top left */}
        <motion.div
          className="absolute w-48 h-48 opacity-[0.028] bg-indigo-500 blur-2xl animate-morph"
          style={{ top: '12%', left: '8%' }}
          animate={{ x: [0, 22, 0], y: [0, -14, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
        />
        {/* Morphing blob — bottom right */}
        <motion.div
          className="absolute w-36 h-36 opacity-[0.025] bg-violet-500 blur-2xl animate-morph"
          style={{ bottom: '18%', right: '9%', animationDelay: '6s' }}
          animate={{ x: [0, -18, 0], y: [0, 16, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
        />
        {/* Floating diamond shape */}
        <motion.div
          className="absolute w-5 h-5 border border-indigo-400/18 opacity-35"
          style={{ top: '30%', left: '14%', rotate: '45deg' }}
          animate={{ y: [0, -20, 0], rotate: [45, 65, 45], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        />
        {/* Floating ring */}
        <motion.div
          className="absolute w-12 h-12 rounded-full border border-cyan-400/[0.12]"
          style={{ top: '55%', right: '12%' }}
          animate={{ y: [0, -16, 0], scale: [1, 1.15, 1], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        />
        {/* Triangle — right mid */}
        <motion.div
          className="absolute opacity-15"
          style={{ top: '40%', right: '16%' }}
          animate={{ y: [0, -12, 0], rotate: [0, 20, 0], opacity: [0.15, 0.35, 0.15] }}
          transition={{ duration: 13, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
        >
          <svg width="20" height="18" viewBox="0 0 20 18"><polygon points="10,0 20,18 0,18" fill="none" stroke="rgba(139,92,246,0.6)" strokeWidth="1.2"/></svg>
        </motion.div>
        {/* Small floating cross */}
        <motion.div
          className="absolute text-indigo-400/15 text-2xl font-thin select-none"
          style={{ bottom: '28%', left: '20%' }}
          animate={{ y: [0, -10, 0], rotate: [0, 15, 0], opacity: [0.2, 0.45, 0.2] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 5.5 }}
        >+</motion.div>
        {/* Orbiting ring around center */}
        <motion.div
          className="absolute rounded-full border border-indigo-500/[0.035] pointer-events-none"
          style={{ width: 440, height: 440, top: '50%', left: '50%', marginLeft: -220, marginTop: -220 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 65, repeat: Infinity, ease: 'linear' }}
        >
          {/* Dot on the ring */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-indigo-400/60 shadow-[0_0_6px_rgba(129,140,248,0.8)]" />
        </motion.div>
        {/* Second orbiting ring — reverse */}
        <motion.div
          className="absolute rounded-full border border-purple-500/[0.025] pointer-events-none"
          style={{ width: 620, height: 620, top: '50%', left: '50%', marginLeft: -310, marginTop: -310 }}
          animate={{ rotate: -360 }}
          transition={{ duration: 90, repeat: Infinity, ease: 'linear' }}
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-1 rounded-full bg-purple-400/50 shadow-[0_0_4px_rgba(167,139,250,0.7)]" />
        </motion.div>
      </div>

      {/* Top fade */}
      <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-[#010408] to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center pt-24 pb-16">

        {/* Status chip */}
        <motion.div
          initial={{ opacity: 0, y: 16, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.55, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          className="mb-7 inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono font-medium text-indigo-300 bg-indigo-500/10 border border-indigo-500/20 select-none cursor-default animate-glow-border"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.8)] animate-pulse" />
          Open to full-time roles
        </motion.div>

        {/* Name — uniform 3D flip-in + aurora wave for every letter */}
        <AnimatedName />
        {/* Glowing name underline with a light sweep */}
        <motion.div
          className="relative h-px w-60 mx-auto mb-5 overflow-hidden rounded-full"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ delay: 1.0, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          style={{ originX: 'left' }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/0 via-indigo-400/80 to-purple-500/0" />
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/70 to-transparent"
            animate={{ x: ['-100%', '200%'] }}
            transition={{ duration: 1.6, delay: 1.9, repeat: Infinity, repeatDelay: 6, ease: 'easeInOut' }}
          />
        </motion.div>

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
          className="max-w-2xl text-base sm:text-lg text-slate-300 leading-relaxed mb-10 text-balance"
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
            href="mailto:pranavlalapeta@gmail.com"
            className="inline-flex items-center justify-center px-4 py-3 rounded-xl text-slate-400 hover:text-slate-200 border border-white/[0.08] hover:border-white/20 hover:bg-white/5 transition-all duration-200"
            aria-label="Email"
          >
            <Mail size={17} />
          </a>
        </motion.div>

        {/* Stats cards */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.68 }}
          className="w-full max-w-4xl"
        >
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-5">
            {statsData.map(({ value, label, accent, glow }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.55, delay: 0.82 + i * 0.1, ease: EASE }}
                whileHover={{ y: -5, scale: 1.02 }}
                className={`group relative overflow-hidden rounded-[24px] border border-white/[0.11] bg-[#0e1f3a] px-6 py-6 text-center backdrop-blur-sm ${glow}`}
              >
                <div className={`absolute inset-x-0 top-0 h-24 bg-gradient-to-b ${accent} opacity-90 pointer-events-none`} />
                <div className="absolute inset-0 rounded-[24px] ring-1 ring-inset ring-white/[0.03] pointer-events-none" />
                <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />

                <motion.div
                  className="relative text-[2rem] sm:text-[2.35rem] font-extrabold tabular-nums tracking-tight mb-1"
                  initial={{ opacity: 0, scale: 0.7 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.45, delay: 0.96 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                  style={{
                    background: 'linear-gradient(135deg, #c7d2fe 0%, #c4b5fd 48%, #67e8f9 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  {value}
                </motion.div>
                <div className="relative text-sm text-slate-400 font-medium leading-snug">{label}</div>
              </motion.div>
            ))}
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
      <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-[#010408] to-transparent pointer-events-none" />

    </section>
  )
}
