import { useState } from 'react'
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { X, Sparkles, ChevronRight, Zap } from 'lucide-react'
import { SectionHeader } from './ui/SectionHeader'
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

  const rotateX = useTransform(y, [-0.5, 0.5], [7, -7])
  const rotateY = useTransform(x, [-0.5, 0.5], [-7, 7])
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
        className="relative z-10 w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[#0b1222] border border-white/[0.07] shadow-[0_48px_100px_rgba(0,0,0,0.7),0_0_0_1px_rgba(99,102,241,0.07)]"
        onClick={(e) => e.stopPropagation()}
      >
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
      </motion.div>
    </motion.div>
  )
}

function ProjectCard({ project, onClick }) {
  return (
    <TiltCard
      onClick={onClick}
      className="group relative flex flex-col h-full rounded-2xl bg-[#0b1120] border border-white/[0.06] overflow-hidden cursor-pointer shadow-[0_2px_20px_rgba(0,0,0,0.4)] hover:border-indigo-500/20 transition-colors duration-300"
      style={{ willChange: 'transform' }}
    >
      {/* Top accent bar */}
      <div className={`h-[2px] w-full bg-gradient-to-r ${project.gradient} opacity-55`} />

      {/* Subtle hover glow overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

      <div className="relative flex flex-col flex-1 p-6">
        <div className="flex items-center justify-between mb-4">
          <span className="text-[10px] font-mono text-slate-600 tracking-widest uppercase">
            {project.category}
          </span>
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
    <section id="projects" className="relative py-28 bg-[#07090f]">
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-indigo-900/[0.1] rounded-full blur-3xl pointer-events-none" />

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
