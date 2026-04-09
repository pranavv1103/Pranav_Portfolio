import { motion } from 'framer-motion'
import {
  Code2, Server, Monitor, Database, Cloud, Wrench
} from 'lucide-react'
import { SectionHeader } from './ui/SectionHeader'
import { WaterfallSection, WaterfallGroup, WaterfallItem } from './ui/Reveal'
import { skillGroups } from '../data'

const iconMap = { Code2, Server, Monitor, Database, Cloud, Wrench }

const colorMap = {
  indigo:  { icon: 'text-indigo-400',  bg: 'bg-indigo-500/10',  border: 'border-indigo-500/20',  chip: 'bg-indigo-500/10 text-indigo-300 border-indigo-500/15 hover:bg-indigo-500/20' },
  purple:  { icon: 'text-purple-400',  bg: 'bg-purple-500/10',  border: 'border-purple-500/20',  chip: 'bg-purple-500/10 text-purple-300 border-purple-500/15 hover:bg-purple-500/20' },
  cyan:    { icon: 'text-cyan-400',    bg: 'bg-cyan-500/10',    border: 'border-cyan-500/20',    chip: 'bg-cyan-500/10   text-cyan-300   border-cyan-500/15   hover:bg-cyan-500/20' },
  emerald: { icon: 'text-emerald-400', bg: 'bg-emerald-500/10', border: 'border-emerald-500/20', chip: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/15 hover:bg-emerald-500/20' },
  sky:     { icon: 'text-sky-400',     bg: 'bg-sky-500/10',     border: 'border-sky-500/20',     chip: 'bg-sky-500/10    text-sky-300    border-sky-500/15    hover:bg-sky-500/20' },
  amber:   { icon: 'text-amber-400',   bg: 'bg-amber-500/10',   border: 'border-amber-500/20',   chip: 'bg-amber-500/10  text-amber-300  border-amber-500/15  hover:bg-amber-500/20' },
}

export default function Skills() {
  return (
    <section id="skills" className="relative py-28 bg-[#080c16]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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
                <motion.div
                  whileHover={{ y: -3, boxShadow: '0 14px 40px rgba(0,0,0,0.5)' }}
                  transition={{ duration: 0.22, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="h-full p-5 rounded-2xl bg-[#0b1120] border border-white/[0.06] hover:border-white/[0.11] shadow-[0_2px_16px_rgba(0,0,0,0.3)] transition-colors duration-300 group">
                  {/* Category header */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-2 rounded-lg ${c.bg} border ${c.border}`}>
                      {Icon && <Icon size={16} className={c.icon} />}
                    </div>
                    <h3 className="text-sm font-semibold text-slate-300">{category}</h3>
                  </div>

                  {/* Skill chips */}
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill) => (
                      <motion.span
                        key={skill}
                        whileHover={{ scale: 1.04 }}
                        className={`inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-medium border transition-colors duration-200 cursor-default ${c.chip}`}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
                </WaterfallItem>
              )
            })}
          </WaterfallGroup>
        </WaterfallSection>
      </div>
    </section>
  )
}
