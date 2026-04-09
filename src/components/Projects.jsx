import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ExternalLink, Github, Sparkles, ChevronRight } from 'lucide-react'
import { SectionHeader } from './ui/SectionHeader'
import { TechBadge } from './ui/Badge'
import { RevealStagger, RevealItem } from './ui/Reveal'
import { projects } from '../data'

function MetricPill({ label, value }) {
  return (
    <div className="flex flex-col items-center px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
      <span className="text-xl font-bold text-indigo-300 tabular-nums">{value}</span>
      <span className="text-[10px] text-slate-500 mt-0.5 font-medium tracking-wide text-center">{label}</span>
    </div>
  )
}

function ProjectModal({ project, onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-md" />

      <motion.div
        initial={{ opacity: 0, scale: 0.94, y: 24 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.94, y: 24 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className="relative z-10 w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[#0f1629] border border-white/[0.08] shadow-[0_32px_80px_rgba(0,0,0,0.6)]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with gradient */}
        <div className={`relative h-40 bg-gradient-to-br ${project.gradient} opacity-80 rounded-t-2xl overflow-hidden`}>
          <div className="absolute inset-0 bg-[#0f1629]/60" />
          <div className="absolute inset-0 bg-dots opacity-30" />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-lg bg-black/30 text-white/70 hover:text-white hover:bg-black/50 transition-colors"
          >
            <X size={18} />
          </button>
          <div className="absolute bottom-5 left-6">
            <span className="text-[11px] font-mono font-medium text-white/50 tracking-widest uppercase">
              {project.category}
            </span>
            <h2 className="text-2xl font-bold text-white mt-1">{project.name}</h2>
          </div>
        </div>

        {/* Body */}
        <div className="p-6 sm:p-8 flex flex-col gap-7">
          {/* Tagline */}
          <p className="text-base text-slate-300 leading-relaxed">{project.description}</p>

          {/* Metrics */}
          {project.metrics?.length > 0 && (
            <div>
              <h3 className="text-xs font-mono font-medium text-slate-500 tracking-widest uppercase mb-3">
                By the numbers
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {project.metrics.map((m) => (
                  <MetricPill key={m.label} {...m} />
                ))}
              </div>
            </div>
          )}

          {/* Features */}
          <div>
            <h3 className="text-xs font-mono font-medium text-slate-500 tracking-widest uppercase mb-3">
              Engineering highlights
            </h3>
            <ul className="flex flex-col gap-2">
              {project.features.map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-sm text-slate-400 leading-relaxed">
                  <ChevronRight size={14} className="text-indigo-400 shrink-0 mt-0.5" />
                  {f}
                </li>
              ))}
            </ul>
          </div>

          {/* Tech */}
          <div>
            <h3 className="text-xs font-mono font-medium text-slate-500 tracking-widest uppercase mb-3">
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
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className="group relative flex flex-col h-full rounded-2xl bg-white/[0.03] border border-white/[0.07] hover:border-indigo-500/30 overflow-hidden cursor-pointer transition-colors duration-300"
      onClick={onClick}
    >
      {/* Top gradient accent */}
      <div className={`h-1 w-full bg-gradient-to-r ${project.gradient} opacity-70`} />

      {/* Hover glow */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-indigo-500/[0.06] to-transparent" />
      </div>

      <div className="relative flex flex-col flex-1 p-6">
        {/* Category + featured */}
        <div className="flex items-center justify-between mb-3">
          <span className="text-[10px] font-mono text-slate-600 tracking-widest uppercase">{project.category}</span>
          {project.featured && (
            <span className="flex items-center gap-1 text-[10px] font-medium text-amber-400 bg-amber-400/10 border border-amber-400/20 px-2 py-0.5 rounded-full">
              <Sparkles size={10} />
              Featured
            </span>
          )}
        </div>

        <h3 className="text-xl font-bold text-slate-100 mb-2 group-hover:text-indigo-300 transition-colors duration-200">
          {project.name}
        </h3>
        <p className="text-sm text-slate-400 leading-relaxed mb-5 flex-1">
          {project.tagline}
        </p>

        {/* Metrics strip */}
        <div className="grid grid-cols-3 gap-2 mb-5">
          {project.metrics.slice(0, 3).map((m) => (
            <div key={m.label} className="text-center py-2 rounded-lg bg-white/[0.02] border border-white/[0.05]">
              <div className="text-sm font-bold text-indigo-300 tabular-nums">{m.value}</div>
              <div className="text-[9px] text-slate-600 mt-0.5 leading-tight px-1">{m.label}</div>
            </div>
          ))}
        </div>

        {/* Tech chips */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tech.slice(0, 5).map((t) => (
            <TechBadge key={t}>{t}</TechBadge>
          ))}
          {project.tech.length > 5 && (
            <span className="text-xs text-slate-600 px-2 py-1">+{project.tech.length - 5}</span>
          )}
        </div>

        {/* Expand CTA */}
        <div className="flex items-center gap-1.5 text-xs font-medium text-indigo-400 group-hover:gap-2.5 transition-all duration-200">
          View details
          <ChevronRight size={13} />
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const [selected, setSelected] = useState(null)

  return (
    <section id="projects" className="relative py-28 bg-[#07090f]">
      {/* Ambient glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-indigo-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Projects"
          title="Things I've built from scratch."
          subtitle="Full-stack, production-grade systems — not school projects."
        />

        <RevealStagger className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {projects.map((project) => (
            <RevealItem key={project.id}>
              <ProjectCard project={project} onClick={() => setSelected(project)} />
            </RevealItem>
          ))}
        </RevealStagger>
      </div>

      <AnimatePresence>
        {selected && (
          <ProjectModal project={selected} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>
    </section>
  )
}
