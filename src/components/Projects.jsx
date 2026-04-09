import { useState } from 'react'
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { X, Sparkles, ChevronRight, Zap } from 'lucide-react'
import { SectionHeader } from './ui/SectionHeader'
import { SpotlightCard } from './ui/SpotlightCard'
import { TechBadge } from './ui/Badge'
import { WaterfallSection, WaterfallGroup, WaterfallItem } from './ui/Reveal'
import { projects } from '../data'

function MetricPill({ label, value }) {
  return (
    <div className="flex flex-col items-center px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.05]">
      <span className="text-lg font-bold text-indigo-300 tabular-nums">{value}</span>
      <span className="text-[10px] text-slate-500 mt-0.5 font-medium tracking-wide text-center leading-tight">{label}</span>
    </div>
  )
}

function TiltCard({ children, className, onClick }) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const rotateX = useTransform(y, [-0.5, 0.5], [10, -10])
  const rotateY = useTransform(x, [-0.5, 0.5], [-10, 10])
  const springRotX = useSpring(rotateX, { stiffness: 250, damping: 30 })
  const springRotY = useSpring(rotateY, { stiffness: 250, damping: 30 })

  const glowX = useTransform(x, [-0.5, 0.5], [0, 100])
  const glowY = useTransform(y, [-0.5, 0.5], [0, 100])

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    x.set((e.clientX - rect.left) / rect.width - 0.5)
    y.set((e.clientY - rect.top) / rect.height - 0.5)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      style={{ rotateX: springRotX, rotateY: springRotY, transformStyle: 'preserve-3d', transformPerspective: 800 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      className={className}
    >
      {children}
    </motion.div>
  )
}

function ProjectModal({ project, onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.18 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/75 backdrop-blur-sm" />

      <motion.div
        initial={{ opacity: 0, scale: 0.97, y: 12 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.97, y: 8 }}
        transition={{ duration: 0.24, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="relative z-10 w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl shadow-[0_48px_100px_rgba(0,0,0,0.7)]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Gradient border wrapper */}
        <div className="p-[1px] rounded-2xl bg-gradient-to-br from-indigo-500/30 via-white/[0.04] to-purple-500/20">
        <div className="rounded-[calc(1rem-1px)] bg-[#0b1222] border border-white/[0.04] overflow-hidden">
        {/* Header */}
        <div className={`relative h-32 bg-gradient-to-br ${project.gradient} rounded-t-2xl overflow-hidden`}>
          <div className="absolute inset-0 bg-[#0b1222]/75" />
          <div
            className="absolute inset-0 opacity-[0.05]"
            style={{
              backgroundImage:
                'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
              backgroundSize: '28px 28px',
            }}
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-1.5 rounded-lg bg-black/30 text-white/50 hover:text-white hover:bg-black/50 transition-colors duration-150"
          >
            <X size={16} />
          </button>
          <div className="absolute bottom-5 left-6">
            <span className="text-[10px] font-mono font-medium text-white/35 tracking-widest uppercase">
              {project.category}
            </span>
            <h2 className="text-2xl font-bold text-white mt-1 leading-snug">{project.name}</h2>
          </div>
        </div>

        <div className="p-6 sm:p-8 flex flex-col gap-6">
          <p className="text-sm text-slate-300 leading-relaxed">{project.description}</p>

          {project.highlight && (
            <div className="flex items-start gap-3 p-4 rounded-xl bg-indigo-500/[0.06] border border-indigo-500/[0.14]">
              <Zap size={13} className="text-indigo-400 shrink-0 mt-0.5" />
              <p className="text-xs text-indigo-200/75 leading-relaxed">{project.highlight}</p>
            </div>
          )}

          {project.metrics?.length > 0 && (
            <div>
              <h3 className="text-[10px] font-mono font-medium text-slate-600 tracking-widest uppercase mb-3">
                By the numbers
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {project.metrics.map((m) => (
                  <MetricPill key={m.label} {...m} />
                ))}
              </div>
            </div>
          )}

          <div>
            <h3 className="text-[10px] font-mono font-medium text-slate-600 tracking-widest uppercase mb-3">
              Engineering highlights
            </h3>
            <ul className="flex flex-col gap-2.5">
              {project.features.map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-sm text-slate-400 leading-relaxed">
                  <ChevronRight size={13} className="text-indigo-500/70 shrink-0 mt-0.5" />
                  {f}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[10px] font-mono font-medium text-slate-600 tracking-widest uppercase mb-3">
              Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <TechBadge key={t}>{t}</TechBadge>
              ))}
            </div>
          </div>
        </div>
        </div>{/* inner dark bg */}
        </div>{/* gradient border wrapper */}
      </motion.div>
    </motion.div>
  )
}

// ── Shared chrome bar ─────────────────────────────────────────────────────────
function BrowserChrome({ gradient, category }) {
  return (
    <div className="absolute top-0 left-0 right-0 h-8 bg-black/40 border-b border-white/[0.08] flex items-center gap-1.5 px-3 z-10">
      <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
      <span className="w-2.5 h-2.5 rounded-full bg-amber-400/70" />
      <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
      <div className="flex-1 mx-2 h-4 rounded-sm bg-white/[0.08] flex items-center px-2">
        <div className="h-1.5 w-1/2 rounded-full bg-white/20" />
      </div>
      <span className={`text-[8px] font-mono font-bold tracking-widest uppercase px-2 py-0.5 rounded-full bg-gradient-to-r ${gradient} text-white shadow-lg`}>
        {category}
      </span>
    </div>
  )
}

// ── Phoenix banner — publishing editor UI ─────────────────────────────────────
function PhoenixBanner() {
  return (
    <div className="relative h-48 w-full overflow-hidden bg-gradient-to-br from-indigo-950 via-[#10102a] to-violet-950 flex-shrink-0">
      <BrowserChrome gradient="from-indigo-500 to-violet-600" category="Full-Stack" />
      {/* Sidebar */}
      <div className="absolute left-3 top-10 bottom-3 w-24 rounded-lg bg-white/[0.04] border border-white/[0.08] flex flex-col gap-1.5 p-2 overflow-hidden">
        <div className="h-2 w-14 rounded-full bg-indigo-400/60" />
        <div className="h-px w-full bg-white/[0.06]" />
        {['Posts','Drafts','Analytics','Users','Settings'].map((l, i) => (
          <div key={l} className={`h-5 rounded px-1.5 flex items-center gap-1 ${i === 0 ? 'bg-indigo-500/30 border border-indigo-500/40' : ''}`}>
            <div className={`w-1.5 h-1.5 rounded-full ${i === 0 ? 'bg-indigo-400' : 'bg-white/20'}`} />
            <div className={`h-1.5 rounded-full ${i === 0 ? 'bg-indigo-300/70 w-8' : 'bg-white/15 w-10'}`} />
          </div>
        ))}
      </div>
      {/* Main editor area */}
      <div className="absolute left-30 right-3 top-10 bottom-3 ml-28 flex flex-col gap-2">
        {/* Toolbar */}
        <div className="flex gap-1.5">
          {['B','I','H1','AI'].map((t, i) => (
            <div key={t} className={`h-5 w-6 rounded text-[7px] font-bold flex items-center justify-center border ${i === 3 ? 'bg-violet-500/30 border-violet-400/50 text-violet-300' : 'bg-white/[0.05] border-white/[0.08] text-white/40'}`}>{t}</div>
          ))}
          <div className="flex-1 h-5 rounded bg-white/[0.03] border border-white/[0.05]" />
          <div className="h-5 w-14 rounded bg-indigo-500/50 border border-indigo-400/40 text-[7px] text-indigo-200 font-bold flex items-center justify-center">Publish</div>
        </div>
        {/* Post content lines */}
        <div className="flex-1 rounded-lg bg-white/[0.025] border border-white/[0.06] p-2 flex flex-col gap-1.5">
          <div className="h-3 w-3/4 rounded-full bg-white/30" />
          <div className="h-1.5 w-full rounded-full bg-white/10" />
          <div className="h-1.5 w-5/6 rounded-full bg-white/10" />
          <div className="h-1.5 w-2/3 rounded-full bg-white/10" />
          <div className="h-px w-full bg-white/[0.06] my-1" />
          <div className="flex gap-1">
            <div className="h-4 w-12 rounded bg-indigo-500/20 border border-indigo-400/30 text-[6px] text-indigo-300 flex items-center justify-center">#tech</div>
            <div className="h-4 w-14 rounded bg-violet-500/20 border border-violet-400/30 text-[6px] text-violet-300 flex items-center justify-center">#backend</div>
          </div>
          <div className="h-1.5 w-full rounded-full bg-white/10" />
          <div className="h-1.5 w-4/5 rounded-full bg-white/10" />
        </div>
        {/* Stats row */}
        <div className="flex gap-1.5">
          {[['20+','APIs'],['15+','Features'],['AI','Summary']].map(([v,l]) => (
            <div key={l} className="flex-1 h-7 rounded-lg bg-white/[0.04] border border-white/[0.07] flex flex-col items-center justify-center">
              <span className="text-[8px] font-bold text-indigo-300">{v}</span>
              <span className="text-[6px] text-white/30">{l}</span>
            </div>
          ))}
        </div>
      </div>
      {/* Glow */}
      <div className="absolute bottom-0 left-1/3 w-1/2 h-10 bg-indigo-500/20 blur-2xl pointer-events-none" />
    </div>
  )
}

// ── DevCollab banner — chat / messaging UI ────────────────────────────────────
function DevCollabBanner() {
  const messages = [
    { side: 'left',  text: 'Can you review the auth PR?', bg: 'bg-white/[0.08]' },
    { side: 'right', text: '✔ On it — pushed a fix',      bg: 'bg-blue-600/40' },
    { side: 'left',  text: '[AI] Thread summary ready',    bg: 'bg-indigo-500/25' },
  ]
  return (
    <div className="relative h-48 w-full overflow-hidden bg-gradient-to-br from-blue-950 via-[#0a0f28] to-indigo-950 flex-shrink-0">
      <BrowserChrome gradient="from-blue-600 to-indigo-600" category="Full-Stack" />
      {/* Server list */}
      <div className="absolute left-2 top-10 bottom-3 w-10 flex flex-col items-center gap-2 pt-2">
        {['#','D','B','S'].map((s, i) => (
          <div key={i} className={`w-8 h-8 rounded-xl flex items-center justify-center text-[9px] font-bold border ${i === 0 ? 'bg-blue-500/40 border-blue-400/50 text-blue-200' : 'bg-white/[0.05] border-white/[0.08] text-white/30'}`}>{s}</div>
        ))}
      </div>
      {/* Channel list */}
      <div className="absolute left-14 top-10 bottom-3 w-24 flex flex-col gap-0.5 pt-1">
        <div className="text-[7px] text-white/30 font-mono px-1 mb-1">CHANNELS</div>
        {['# general','# backend','# frontend','# devops'].map((c, i) => (
          <div key={c} className={`h-5 rounded px-2 text-[8px] flex items-center ${i === 1 ? 'bg-blue-500/25 text-blue-200 font-semibold' : 'text-white/30'}`}>{c}</div>
        ))}
      </div>
      {/* Chat area */}
      <div className="absolute left-40 right-3 top-10 bottom-3 flex flex-col justify-between">
        <div className="flex flex-col gap-2 flex-1 overflow-hidden pt-1">
          {messages.map((m, i) => (
            <div key={i} className={`flex ${m.side === 'right' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[75%] px-2.5 py-1.5 rounded-xl text-[8px] text-white/80 ${m.bg} border border-white/[0.06]`}>{m.text}</div>
            </div>
          ))}
        </div>
        {/* Input bar */}
        <div className="h-7 rounded-xl bg-white/[0.05] border border-white/[0.10] flex items-center px-3 gap-2">
          <div className="flex-1 h-1.5 rounded-full bg-white/15" />
          <div className="w-5 h-5 rounded-lg bg-blue-500/50 flex items-center justify-center">
            <div className="w-2 h-2 border-t border-r border-white/80 rotate-45 translate-x-[-0.5px]" />
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-1/2 w-1/2 h-10 bg-blue-500/15 blur-2xl pointer-events-none" />
    </div>
  )
}

// ── StudySync banner — shared goal dashboard ──────────────────────────────────
function StudySyncBanner() {
  return (
    <div className="relative h-48 w-full overflow-hidden bg-gradient-to-br from-violet-950 via-[#0f0a28] to-blue-950 flex-shrink-0">
      <BrowserChrome gradient="from-violet-600 to-blue-600" category="Full-Stack" />
      {/* Two user avatars */}
      <div className="absolute top-11 left-3 right-3 flex items-center gap-2">
        <div className="w-7 h-7 rounded-full bg-violet-500/50 border-2 border-violet-400/60 flex items-center justify-center text-[8px] text-white/80 font-bold">A</div>
        <div className="w-7 h-7 rounded-full bg-blue-500/50 border-2 border-blue-400/60 flex items-center justify-center text-[8px] text-white/80 font-bold">B</div>
        <div className="flex-1 h-1 rounded-full bg-gradient-to-r from-violet-400/50 to-blue-400/50 mx-1" />
        <div className="text-[8px] text-green-400 font-bold bg-green-500/15 border border-green-500/30 px-1.5 py-0.5 rounded-full">Synced</div>
      </div>
      {/* Goals list */}
      <div className="absolute top-22 left-3 right-3 mt-1 flex flex-col gap-1.5" style={{top:'4.5rem'}}>
        {[['LeetCode Daily','85%','violet'],['DSA Chapter 7','60%','blue'],['Mock Interview','40%','indigo']].map(([g, pct, c]) => (
          <div key={g} className="flex flex-col gap-0.5">
            <div className="flex justify-between">
              <span className="text-[8px] text-white/60">{g}</span>
              <span className={`text-[8px] font-bold text-${c}-400`}>{pct}</span>
            </div>
            <div className="h-1.5 w-full rounded-full bg-white/[0.06]">
              <div className={`h-full rounded-full bg-gradient-to-r from-${c}-500/70 to-${c}-400/50`} style={{width: pct}} />
            </div>
          </div>
        ))}
      </div>
      {/* 7-day streak row */}
      <div className="absolute bottom-3 left-3 right-3 flex gap-1">
        {['M','T','W','T','F','S','S'].map((d, i) => (
          <div key={i} className="flex-1 flex flex-col items-center gap-0.5">
            <div className={`w-full h-5 rounded-md ${i < 5 ? 'bg-violet-500/45 border border-violet-400/40' : 'bg-white/[0.04] border border-white/[0.06]'}`} />
            <span className="text-[6px] text-white/30">{d}</span>
          </div>
        ))}
      </div>
      <div className="absolute bottom-0 left-1/3 w-1/2 h-10 bg-violet-500/15 blur-2xl pointer-events-none" />
    </div>
  )
}

// ── Attendance banner — face detection UI ─────────────────────────────────────
function AttendanceBanner() {
  return (
    <div className="relative h-48 w-full overflow-hidden bg-gradient-to-br from-slate-900 via-[#0a1020] to-blue-950 flex-shrink-0">
      <BrowserChrome gradient="from-slate-500 to-blue-700" category="AI / ML" />
      {/* Camera viewfinder */}
      <div className="absolute top-11 left-3 w-36 bottom-3">
        <div className="relative h-full rounded-lg bg-black/60 border border-white/[0.10] overflow-hidden">
          {/* Face outline */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-20 rounded-full border-2 border-green-400/70" />
          {/* Corner brackets */}
          {[['top-2 left-2','border-t-2 border-l-2'],['top-2 right-2','border-t-2 border-r-2'],['bottom-2 left-2','border-b-2 border-l-2'],['bottom-2 right-2','border-b-2 border-r-2']].map(([pos, cls], i) => (
            <div key={i} className={`absolute ${pos} w-4 h-4 ${cls} border-green-400/80`} />
          ))}
          {/* Scan line animation */}
          <motion.div
            className="absolute left-0 right-0 h-0.5 bg-green-400/50"
            animate={{ top: ['20%', '80%', '20%'] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          />
          {/* 97% overlay */}
          <div className="absolute bottom-2 left-0 right-0 flex justify-center">
            <span className="text-[9px] font-bold text-green-400 bg-green-500/20 border border-green-500/30 px-2 py-0.5 rounded-full">97% match</span>
          </div>
        </div>
      </div>
      {/* Attendance list */}
      <div className="absolute top-11 left-42 right-3 bottom-3 flex flex-col gap-1.5 ml-40">
        <div className="text-[7px] text-white/30 font-mono mb-0.5">ATTENDANCE LOG</div>
        {[['S. Raj','09:02','✓'],['P. Kumar','09:05','✓'],['A. Mehta','09:11','✓'],['T. Singh','—','✗']].map(([n, t, s]) => (
          <div key={n} className="flex items-center gap-1.5 h-6 rounded-lg bg-white/[0.04] border border-white/[0.06] px-2">
            <div className="w-4 h-4 rounded-full bg-white/[0.10] flex items-center justify-center text-[6px] text-white/50">{n[0]}</div>
            <span className="text-[8px] text-white/60 flex-1">{n}</span>
            <span className="text-[7px] text-white/30">{t}</span>
            <span className={`text-[9px] font-bold ${s === '✓' ? 'text-green-400' : 'text-red-400'}`}>{s}</span>
          </div>
        ))}
        {/* QR badge */}
        <div className="flex items-center gap-1.5 mt-auto">
          <div className="w-8 h-8 rounded-md bg-white/[0.08] border border-white/[0.12] grid grid-cols-3 gap-0.5 p-1">
            {Array(9).fill(0).map((_, i) => <div key={i} className={`rounded-[1px] ${[0,2,4,6,8].includes(i) ? 'bg-white/60' : 'bg-transparent'}`} />)}
          </div>
          <span className="text-[7px] text-white/40">Time-bound QR gate</span>
        </div>
      </div>
      <div className="absolute bottom-0 left-1/4 w-1/2 h-10 bg-blue-500/10 blur-2xl pointer-events-none" />
    </div>
  )
}

// ── Dispatcher ────────────────────────────────────────────────────────────────
function ProjectBanner({ project }) {
  if (project.id === 1) return <PhoenixBanner />
  if (project.id === 2) return <DevCollabBanner />
  if (project.id === 3) return <StudySyncBanner />
  return <AttendanceBanner />
}

function ProjectCard({ project, onClick }) {
  return (
    <TiltCard
      onClick={onClick}
      className="group relative flex flex-col h-full rounded-2xl bg-[#0b1120]/85 backdrop-blur-sm border border-white/[0.06] overflow-hidden cursor-pointer shadow-[0_2px_20px_rgba(0,0,0,0.4)] hover:border-indigo-500/30 hover:shadow-[0_8px_40px_rgba(0,0,0,0.6),0_0_0_1px_rgba(99,102,241,0.12)] transition-all duration-300"
      style={{ willChange: 'transform' }}
    >
      {/* ── Project visual banner ── */}
      <ProjectBanner project={project} />

      {/* Subtle hover glow overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

      <div className="relative flex flex-col flex-1 p-6">
        <div className="flex items-center justify-end mb-4">
          {project.featured && (
            <span className="flex items-center gap-1 text-[10px] font-semibold text-slate-500 bg-white/[0.04] border border-white/[0.07] px-2 py-0.5 rounded-full">
              <Sparkles size={9} />
              Featured
            </span>
          )}
        </div>

        <h3 className="text-xl font-bold text-slate-100 mb-2.5 leading-tight group-hover:text-indigo-200 transition-colors duration-200">
          {project.name}
        </h3>
        <p className="text-sm text-slate-500 leading-relaxed mb-5 flex-1">
          {project.tagline}
        </p>

        {project.metrics?.length > 0 && (
          <div
            className={`grid gap-2 mb-5 ${
              project.metrics.length === 1
                ? 'grid-cols-1'
                : project.metrics.length === 2
                ? 'grid-cols-2'
                : 'grid-cols-3'
            }`}
          >
            {project.metrics.slice(0, 3).map((m) => (
              <div
                key={m.label}
                className="text-center py-2.5 px-3 rounded-xl bg-white/[0.025] border border-white/[0.05]"
              >
                <div className="text-sm font-bold text-indigo-300 tabular-nums">{m.value}</div>
                <div className="text-[9px] text-slate-600 mt-0.5 leading-tight">{m.label}</div>
              </div>
            ))}
          </div>
        )}

        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tech.slice(0, 5).map((t) => (
            <TechBadge key={t}>{t}</TechBadge>
          ))}
          {project.tech.length > 5 && (
            <span className="text-[11px] text-slate-600 px-2 py-1">
              +{project.tech.length - 5}
            </span>
          )}
        </div>

        <div className="flex items-center gap-1.5 text-xs font-semibold text-indigo-500 group-hover:text-indigo-400 group-hover:gap-2.5 transition-all duration-200">
          View details
          <ChevronRight size={12} className="group-hover:translate-x-0.5 transition-transform duration-200" />
        </div>
      </div>
    </TiltCard>
  )
}

export default function Projects() {
  const [selected, setSelected] = useState(null)

  return (
    <section id="projects" className="relative py-20 bg-[#07090f] overflow-hidden">
      {/* Dot pattern background */}
      <div className="absolute inset-0 bg-dot-pattern opacity-35 pointer-events-none" />
      {/* Ambient orbs */}
      <motion.div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-indigo-900/[0.1] rounded-full blur-3xl pointer-events-none"
        animate={{ x: [0, 20, 0], y: [0, -14, 0], scale: [1, 1.06, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute -top-20 -right-24 w-[360px] h-[360px] rounded-full bg-purple-700/[0.04] blur-3xl pointer-events-none"
        animate={{ x: [0, -16, 0], y: [0, 18, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
      />
      {/* Accent beam */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute w-px h-60 bg-gradient-to-b from-transparent via-indigo-400/08 to-transparent"
          style={{ top: '15%', left: '6%', rotate: '18deg', transformOrigin: 'top' }}
          animate={{ opacity: [0.08, 0.25, 0.08] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Projects"
          title="Things I've built from scratch."
          subtitle="Full-stack, production-grade systems built with real architecture decisions."
        />

        <WaterfallSection>
          <WaterfallGroup className="grid grid-cols-1 md:grid-cols-2 gap-5" stagger={0.13}>
            {projects.map((project) => (
              <WaterfallItem key={project.id}>
                <ProjectCard project={project} onClick={() => setSelected(project)} />
              </WaterfallItem>
            ))}
          </WaterfallGroup>
        </WaterfallSection>
      </div>

      <AnimatePresence>
        {selected && (
          <ProjectModal project={selected} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>
    </section>
  )
}
