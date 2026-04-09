import { motion } from 'framer-motion'
import { GraduationCap, MapPin, Award } from 'lucide-react'
import { SectionHeader } from './ui/SectionHeader'
import { WaterfallSection, WaterfallGroup, WaterfallItem } from './ui/Reveal'
import { education } from '../data'

const degreeColors = [
  {
    gradient: 'from-indigo-500/20 via-purple-500/10 to-transparent',
    border: 'border-indigo-500/25 hover:border-indigo-500/50',
    iconBg: 'bg-indigo-500/10 border-indigo-500/20',
    iconColor: 'text-indigo-400',
    gpaBadge: 'bg-indigo-500/10 text-indigo-300 border-indigo-500/20',
    dot: 'bg-indigo-500 shadow-[0_0_12px_rgba(99,102,241,0.7)]',
    lineColor: 'from-indigo-500/40',
  },
  {
    gradient: 'from-cyan-500/15 via-sky-500/8 to-transparent',
    border: 'border-cyan-500/20 hover:border-cyan-500/45',
    iconBg: 'bg-cyan-500/10 border-cyan-500/20',
    iconColor: 'text-cyan-400',
    gpaBadge: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/20',
    dot: 'bg-cyan-500 shadow-[0_0_12px_rgba(6,182,212,0.7)]',
    lineColor: 'from-cyan-500/40',
  },
]

export default function Education() {
  return (
    <section id="education" className="relative py-28 bg-[#07090f]">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-indigo-500/15 to-transparent" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Education"
          title="Academic background."
          subtitle="Strong CS fundamentals across two countries, two programs, and consistent high performance."
        />

        <WaterfallSection>
          <div className="relative">
            {/* Timeline spine */}
            <div className="absolute left-0 md:left-6 top-2 bottom-2 w-px bg-gradient-to-b from-indigo-500/30 via-cyan-500/20 to-transparent" />

            <WaterfallGroup className="flex flex-col gap-8 pl-8 md:pl-20" stagger={0.14}>
              {education.map((edu, i) => {
                const c = degreeColors[i] ?? degreeColors[1]
                return (
                  <WaterfallItem key={edu.id}>
                    <div className="relative group">
                    {/* Timeline dot */}
                    <div className="absolute -left-[2.35rem] md:-left-[3.35rem] top-7 w-3 h-3">
                      <motion.div
                        animate={{ scale: [1, 2.2, 1], opacity: [0.4, 0, 0.4] }}
                        transition={{ duration: 3, repeat: Infinity, ease: 'easeOut' }}
                        className="absolute inset-0 rounded-full bg-indigo-500/50"
                      />
                      <div className={`relative w-full h-full rounded-full border-2 border-[#07090f] ${c.dot} group-hover:scale-125 transition-transform duration-300`} />
                    </div>

                    <motion.div
                      whileHover={{ y: -3, boxShadow: '0 14px 48px rgba(0,0,0,0.5)' }}
                      transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                      className={`relative overflow-hidden p-6 sm:p-8 rounded-2xl bg-white/[0.03] border ${c.border} transition-colors duration-300`}
                    >
                      {/* Gradient accent */}
                      <div
                        className={`absolute top-0 left-0 right-0 h-40 bg-gradient-to-b ${c.gradient} pointer-events-none opacity-60`}
                      />

                      <div className="relative flex flex-col sm:flex-row sm:items-start gap-5">
                        {/* Icon */}
                        <div className={`p-3 rounded-xl border ${c.iconBg} shrink-0 self-start`}>
                          <GraduationCap size={22} className={c.iconColor} />
                        </div>

                        <div className="flex-1 min-w-0">
                          {/* Degree */}
                          <h3 className="text-lg font-bold text-slate-100 leading-snug mb-1.5">
                            {edu.degree}
                          </h3>

                          {/* Institution */}
                          <p className="text-sm font-semibold text-slate-300 mb-1">
                            {edu.institution}
                          </p>

                          {/* Location */}
                          <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-4">
                            <MapPin size={11} />
                            {edu.location}
                          </div>

                          {/* Meta row */}
                          <div className="flex flex-wrap items-center gap-3">
                            {/* Period */}
                            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-medium text-slate-400 bg-white/[0.04] border border-white/[0.07]">
                              {edu.period}
                            </span>

                            {/* GPA badge */}
                            <span
                              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-bold border ${c.gpaBadge}`}
                            >
                              <Award size={11} />
                              GPA {edu.gpa}
                            </span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                  </WaterfallItem>
                )
              })}
            </WaterfallGroup>
          </div>
        </WaterfallSection>
      </div>
    </section>
  )
}
