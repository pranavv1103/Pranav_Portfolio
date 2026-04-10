import { useState } from 'react'
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { X, Sparkles, ChevronRight, Zap, Github } from 'lucide-react'
import { SectionHeader } from './ui/SectionHeader'
import { SpotlightCard } from './ui/SpotlightCard'
import { TechBadge } from './ui/Badge'
import { WaterfallSection, WaterfallGroup, WaterfallItem } from './ui/Reveal'
import { projects } from '../data'

function MetricPill({ label, value }) {
  return (
    <div className="flex flex-col items-center px-4 py-3 rounded-xl bg-[#091422] border border-white/[0.06]">
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
        <div className="rounded-[calc(1rem-1px)] bg-[#0e1f3a] border border-white/[0.06] overflow-hidden">
        {/* Header */}
        <div className={`relative h-32 bg-gradient-to-br ${project.gradient} rounded-t-2xl overflow-hidden`}>
          <div className="absolute inset-0 bg-[#0e1f3a]/78" />
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

// ── Project image banner ──────────────────────────────────────────────────────
const bannerImages = {
  1: '/images/project-phoenix-web.png',
  2: '/images/project-devcollab-web.png',
  3: '/images/project-studysync-web.png',
  4: '/images/project-attendance-web.svg',
}

const bannerImageClasses = {
  1: 'object-top brightness-[1.08] contrast-[1.05] saturate-[0.98]',
  2: 'object-top brightness-[1.04] contrast-[1.07] saturate-[0.96]',
  3: 'object-top brightness-[1.02] contrast-[1.03] saturate-[0.96]',
  4: 'object-center brightness-[1.02] contrast-[1.03] saturate-[1.0]',
}

const bannerHighlights = {
  1: 'Editor + publishing dashboard',
  2: 'Workspace chat + AI tools',
  3: 'Goal tracking + accountability UI',
  4: 'Face recognition + attendance dashboard',
}

function ProjectBanner({ project }) {
  return (
    <div className="relative aspect-[16/10] w-full overflow-hidden flex-shrink-0 border-b border-white/[0.08] bg-[#091422]">
      <img
        src={bannerImages[project.id]}
        alt={project.name}
        className={`absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.07] group-hover:-translate-y-1.5 group-hover:translate-x-[0.5%] ${bannerImageClasses[project.id]}`}
      />
      <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-[0.08] mix-blend-screen`} />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.12),transparent_28%)] pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-[#010408]/46 via-[#010408]/18 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-[#0e1f3a]/78 via-[#0e1f3a]/14 to-transparent" />
      <div className="absolute inset-0 ring-1 ring-inset ring-white/[0.05] pointer-events-none" />
      {/* Top chrome row */}
      <div className="absolute top-0 left-0 right-0 h-8 bg-black/40 backdrop-blur-sm border-b border-white/[0.08] flex items-center gap-1.5 px-3">
        <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
        <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
        <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
        <div className="flex-1 mx-2 h-4 rounded-sm bg-white/[0.08] flex items-center px-2">
          <div className="h-1.5 w-1/3 rounded-full bg-white/25" />
        </div>
        <span className={`text-[8px] font-mono font-bold tracking-widest uppercase px-2 py-0.5 rounded-full bg-gradient-to-r ${project.gradient} text-white shadow-lg`}>
          {project.category}
        </span>
      </div>
      <div className="absolute bottom-3 left-4 right-4 flex items-end justify-between gap-3">
        <div className="max-w-[72%] rounded-full border border-white/[0.08] bg-[#08111f]/72 px-3 py-1.5 backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.28)]">
          <span className="text-[11px] font-semibold text-white/88 tracking-wide drop-shadow-[0_1px_8px_rgba(0,0,0,0.45)]">
            {bannerHighlights[project.id]}
          </span>
        </div>
        <div className="hidden sm:flex items-center gap-1.5 rounded-full border border-white/[0.08] bg-black/24 px-2.5 py-1 text-[10px] font-mono text-white/72 backdrop-blur-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400/85 shadow-[0_0_8px_rgba(52,211,153,0.7)]" />
          Live UI
        </div>
      </div>
    </div>
  )
}

function ProjectCard({ project, onClick }) {
  return (
    <TiltCard
      onClick={onClick}
      className="group relative flex flex-col h-full rounded-2xl bg-[#0e1f3a] border border-white/[0.11] overflow-hidden cursor-pointer shadow-[0_10px_34px_rgba(0,0,0,0.46),0_1px_0_rgba(255,255,255,0.03)_inset] hover:border-indigo-500/38 hover:shadow-[0_18px_64px_rgba(0,0,0,0.62),0_0_0_1px_rgba(99,102,241,0.18)] transition-all duration-300"
      style={{ willChange: 'transform' }}
    >
      {/* ── Project visual banner ── */}
      <ProjectBanner project={project} />

      {/* Subtle hover glow overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

      <div className="relative flex flex-col flex-1 p-6">
        <div className="flex items-center justify-between mb-4 gap-3">
          <a
            href={project.repoUrl || undefined}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => {
              e.stopPropagation()
              if (!project.repoUrl) {
                e.preventDefault()
              }
            }}
            aria-label={project.repoUrl ? `${project.name} GitHub repository` : `${project.name} repository unavailable`}
            title={project.repoUrl ? 'Open GitHub repository' : 'Repository URL not added yet'}
            className={`inline-flex items-center justify-center w-9 h-9 rounded-xl border transition-all duration-200 ${
              project.repoUrl
                ? 'text-slate-400 border-white/[0.08] bg-white/[0.03] hover:text-white hover:border-white/18 hover:bg-white/[0.06] hover:-translate-y-0.5'
                : 'text-slate-600 border-white/[0.05] bg-white/[0.02] cursor-not-allowed opacity-60'
            }`}
          >
            <Github size={16} />
          </a>

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
        <p className="text-sm text-slate-400 leading-relaxed mb-5 flex-1">
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
                className="text-center py-2.5 px-3 rounded-xl bg-[#091422] border border-white/[0.07]"
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
    <section id="projects" className="relative py-20 bg-[#03060c] overflow-hidden">
      {/* Dot pattern background */}
      <div className="absolute inset-0 bg-dot-pattern opacity-[0.16] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.015),transparent_22%,transparent_78%,rgba(255,255,255,0.015))] pointer-events-none" />
      {/* Ambient orbs */}
      <motion.div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[760px] h-[340px] bg-indigo-950/[0.08] rounded-full blur-3xl pointer-events-none"
        animate={{ x: [0, 16, 0], y: [0, -10, 0], scale: [1, 1.04, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute -top-20 -right-24 w-[320px] h-[320px] rounded-full bg-slate-700/[0.035] blur-3xl pointer-events-none"
        animate={{ x: [0, -12, 0], y: [0, 14, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
      />
      {/* Accent beam */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute w-px h-56 bg-gradient-to-b from-transparent via-indigo-400/[0.05] to-transparent"
          style={{ top: '15%', left: '6%', rotate: '18deg', transformOrigin: 'top' }}
          animate={{ opacity: [0.04, 0.14, 0.04] }}
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
