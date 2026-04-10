import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'
import { SectionHeader } from './ui/SectionHeader'
import { SpotlightCard } from './ui/SpotlightCard'
import { WaterfallSection, WaterfallGroup, WaterfallItem } from './ui/Reveal'
import { certifications } from '../data'

const colorTokens = {
  indigo: {
    border: 'border-indigo-500/20',
    hoverBorder: 'group-hover:border-indigo-500/40',
    iconBg: 'bg-indigo-500/10 border-indigo-500/20',
    eyebrow: 'text-indigo-400',
    iconText: 'text-indigo-400',
    check: 'text-indigo-400',
    glow: 'from-indigo-500/[0.06]',
    spotlight: 'rgba(99,102,241,0.07)',
  },
  cyan: {
    border: 'border-cyan-500/20',
    hoverBorder: 'group-hover:border-cyan-500/40',
    iconBg: 'bg-cyan-500/10 border-cyan-500/20',
    eyebrow: 'text-cyan-400',
    iconText: 'text-cyan-400',
    check: 'text-cyan-400',
    glow: 'from-cyan-500/[0.05]',
    spotlight: 'rgba(6,182,212,0.07)',
  },
  violet: {
    border: 'border-violet-500/20',
    hoverBorder: 'group-hover:border-violet-500/40',
    iconBg: 'bg-violet-500/10 border-violet-500/20',
    eyebrow: 'text-violet-400',
    iconText: 'text-violet-400',
    check: 'text-violet-400',
    glow: 'from-violet-500/[0.05]',
    spotlight: 'rgba(139,92,246,0.07)',
  },
  slate: {
    border: 'border-slate-500/20',
    hoverBorder: 'group-hover:border-slate-500/35',
    iconBg: 'bg-slate-500/10 border-slate-500/20',
    eyebrow: 'text-slate-400',
    iconText: 'text-slate-400',
    check: 'text-slate-400',
    glow: 'from-slate-500/[0.04]',
    spotlight: 'rgba(100,116,139,0.07)',
  },
}

export default function Certifications() {
  return (
    <section id="certifications" className="relative py-20 bg-[#070e1c] overflow-hidden">
      {/* Dot pattern background */}
      <div className="absolute inset-0 bg-dot-pattern opacity-30 pointer-events-none" />
      {/* Ambient orbs */}
      <motion.div
        className="absolute -top-16 left-1/4 w-[400px] h-[400px] rounded-full bg-indigo-700/[0.035] blur-3xl pointer-events-none"
        animate={{ x: [0, 20, 0], y: [0, -14, 0], scale: [1, 1.08, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-[320px] h-[320px] rounded-full bg-cyan-700/[0.03] blur-3xl pointer-events-none"
        animate={{ x: [0, -16, 0], y: [0, 12, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut', delay: 5 }}
      />
      {/* Accent beam */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute w-px h-52 bg-gradient-to-b from-transparent via-violet-400/10 to-transparent"
          style={{ top: '22%', right: '10%', rotate: '16deg', transformOrigin: 'top' }}
          animate={{ opacity: [0.08, 0.3, 0.08] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        />
      </div>
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-indigo-500/15 to-transparent" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Certifications"
          title="Validated beyond the classroom."
          subtitle="Industry certifications across cloud, AI, data science, and software engineering fundamentals."
        />

        <WaterfallSection>
          <WaterfallGroup className="grid grid-cols-1 sm:grid-cols-2 gap-5" stagger={0.12}>
            {certifications.map(({ category, icon, color, items }) => {
              const c = colorTokens[color] ?? colorTokens.indigo
              return (
                <WaterfallItem key={category} className="h-full">
                <SpotlightCard
                  spotlightColor={c.spotlight}
                  className={`h-full rounded-2xl border ${c.border} ${c.hoverBorder} bg-[#0e1f3a] backdrop-blur-sm shadow-[0_4px_24px_rgba(0,0,0,0.4)] transition-all duration-300`}
                >
                <motion.div
                  whileHover={{ y: -3, boxShadow: '0 12px 40px rgba(0,0,0,0.5)' }}
                  transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="relative overflow-hidden h-full p-6 rounded-2xl"
                >
                  {/* Top gradient glow */}
                  <div className={`absolute top-0 left-0 right-0 h-20 bg-gradient-to-b ${c.glow} to-transparent pointer-events-none`} />

                  <div className="relative flex items-center gap-3 mb-5">
                    <div className={`p-2.5 rounded-xl border ${c.iconBg} text-xl leading-none`}>
                      {icon}
                    </div>
                    <span className={`text-xs font-mono font-semibold tracking-[0.15em] uppercase ${c.eyebrow}`}>
                      {category}
                    </span>
                  </div>

                  <ul className="relative flex flex-col gap-3">
                    {items.map(({ title, issuer }) => (
                      <li key={title} className="flex items-start gap-2.5">
                        <CheckCircle2 size={13} className={`${c.check} shrink-0 mt-0.5`} />
                        <div>
                          <div className="text-sm font-medium text-slate-200 leading-snug">{title}</div>
                          <div className="text-xs text-slate-400 mt-0.5">{issuer}</div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </motion.div>
                </SpotlightCard>
                </WaterfallItem>
              )
            })}
          </WaterfallGroup>
        </WaterfallSection>
      </div>
    </section>
  )
}

