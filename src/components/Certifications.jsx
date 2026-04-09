import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'
import { SectionHeader } from './ui/SectionHeader'
import { RevealStagger, RevealItem } from './ui/Reveal'
import { certifications } from '../data'

const colorTokens = {
  indigo: {
    border: 'border-indigo-500/20 hover:border-indigo-500/40',
    iconBg: 'bg-indigo-500/10 border-indigo-500/20',
    eyebrow: 'text-indigo-400',
    iconText: 'text-indigo-400',
    check: 'text-indigo-400',
    glow: 'from-indigo-500/[0.06]',
  },
  cyan: {
    border: 'border-cyan-500/20 hover:border-cyan-500/40',
    iconBg: 'bg-cyan-500/10 border-cyan-500/20',
    eyebrow: 'text-cyan-400',
    iconText: 'text-cyan-400',
    check: 'text-cyan-400',
    glow: 'from-cyan-500/[0.05]',
  },
  violet: {
    border: 'border-violet-500/20 hover:border-violet-500/40',
    iconBg: 'bg-violet-500/10 border-violet-500/20',
    eyebrow: 'text-violet-400',
    iconText: 'text-violet-400',
    check: 'text-violet-400',
    glow: 'from-violet-500/[0.05]',
  },
  slate: {
    border: 'border-slate-500/20 hover:border-slate-500/35',
    iconBg: 'bg-slate-500/10 border-slate-500/20',
    eyebrow: 'text-slate-400',
    iconText: 'text-slate-400',
    check: 'text-slate-400',
    glow: 'from-slate-500/[0.04]',
  },
}

export default function Certifications() {
  return (
    <section id="certifications" className="relative py-28 bg-[#080c16]">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-indigo-500/15 to-transparent" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Certifications"
          title="Validated beyond the classroom."
          subtitle="Industry certifications across cloud, AI, data science, and software engineering fundamentals."
        />

        <RevealStagger className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {certifications.map(({ category, icon, color, items }) => {
            const c = colorTokens[color] ?? colorTokens.indigo
            return (
              <RevealItem key={category}>
                <motion.div
                  whileHover={{ y: -3, boxShadow: '0 12px 40px rgba(0,0,0,0.5)' }}
                  transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className={`relative overflow-hidden h-full p-6 rounded-2xl bg-[#0b1120] border ${c.border} shadow-[0_2px_16px_rgba(0,0,0,0.3)] transition-colors duration-300`}
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
                          <div className="text-xs text-slate-500 mt-0.5">{issuer}</div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </RevealItem>
            )
          })}
        </RevealStagger>
      </div>
    </section>
  )
}

