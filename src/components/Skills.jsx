import { motion } from 'framer-motion'
import {
  Code2, Server, Monitor, Database, Cloud, Wrench
} from 'lucide-react'
import { SectionHeader } from './ui/SectionHeader'
import { SpotlightCard } from './ui/SpotlightCard'
import { WaterfallSection, WaterfallGroup, WaterfallItem } from './ui/Reveal'
import { skillGroups } from '../data'

const iconMap = { Code2, Server, Monitor, Database, Cloud, Wrench }

const colorMap = {
  indigo:  { icon: 'text-indigo-400',  bg: 'bg-indigo-500/10',  border: 'border-indigo-500/20',  chip: 'bg-indigo-500/10 text-indigo-300 border-indigo-500/15 hover:bg-indigo-500/20', spotlight: 'rgba(99,102,241,0.07)', hoverBorder: 'group-hover:border-indigo-500/30' },
  purple:  { icon: 'text-purple-400',  bg: 'bg-purple-500/10',  border: 'border-purple-500/20',  chip: 'bg-purple-500/10 text-purple-300 border-purple-500/15 hover:bg-purple-500/20', spotlight: 'rgba(168,85,247,0.07)', hoverBorder: 'group-hover:border-purple-500/30' },
  cyan:    { icon: 'text-cyan-400',    bg: 'bg-cyan-500/10',    border: 'border-cyan-500/20',    chip: 'bg-cyan-500/10   text-cyan-300   border-cyan-500/15   hover:bg-cyan-500/20', spotlight: 'rgba(6,182,212,0.07)', hoverBorder: 'group-hover:border-cyan-500/30' },
  emerald: { icon: 'text-emerald-400', bg: 'bg-emerald-500/10', border: 'border-emerald-500/20', chip: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/15 hover:bg-emerald-500/20', spotlight: 'rgba(16,185,129,0.07)', hoverBorder: 'group-hover:border-emerald-500/30' },
  sky:     { icon: 'text-sky-400',     bg: 'bg-sky-500/10',     border: 'border-sky-500/20',     chip: 'bg-sky-500/10    text-sky-300    border-sky-500/15    hover:bg-sky-500/20', spotlight: 'rgba(14,165,233,0.07)', hoverBorder: 'group-hover:border-sky-500/30' },
  amber:   { icon: 'text-amber-400',   bg: 'bg-amber-500/10',   border: 'border-amber-500/20',   chip: 'bg-amber-500/10  text-amber-300  border-amber-500/15  hover:bg-amber-500/20', spotlight: 'rgba(245,158,11,0.07)', hoverBorder: 'group-hover:border-amber-500/30' },
}

export default function Skills() {
  return (
    <section id="skills" className="relative py-20 bg-[#080c16] overflow-hidden">
      {/* Animated orb */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-indigo-600/[0.025] blur-3xl pointer-events-none"
        animate={{ scale: [1, 1.08, 1], opacity: [0.4, 0.65, 0.4] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      />
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Skills"
          title="The tech I build with."
          subtitle="A focused stack built up through production use, not just coursework."
        />

        <WaterfallSection>
          <WaterfallGroup className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5" stagger={0.09}>
            {skillGroups.map(({ category, icon: iconName, color, skills }) => {
              const Icon = iconMap[iconName]
              const c = colorMap[color]
              return (
                <WaterfallItem key={category}>
                <SpotlightCard
                  spotlightColor={c.spotlight}
                  className={`h-full rounded-2xl bg-[#0b1120] border border-white/[0.06] ${c.hoverBorder} shadow-[0_2px_16px_rgba(0,0,0,0.3)] transition-all duration-300`}
                >
                  <motion.div
                    whileHover={{ y: -3, boxShadow: '0 16px 48px rgba(0,0,0,0.55)' }}
                    transition={{ duration: 0.22, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="h-full p-5">
                    {/* Category header */}
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`p-2 rounded-lg ${c.bg} border ${c.border} transition-shadow duration-300 group-hover:shadow-[0_0_14px_rgba(99,102,241,0.2)]`}>
                        {Icon && <Icon size={16} className={c.icon} />}
                      </div>
                      <h3 className="text-sm font-semibold text-slate-300">{category}</h3>
                    </div>

                    {/* Skill chips */}
                    <div className="flex flex-wrap gap-2">
                      {skills.map((skill) => (
                        <motion.span
                          key={skill}
                          whileHover={{ scale: 1.06, y: -1 }}
                          transition={{ duration: 0.15 }}
                          className={`inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-medium border transition-colors duration-200 cursor-default ${c.chip}`}
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
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
