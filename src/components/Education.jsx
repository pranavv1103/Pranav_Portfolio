import { motion } from 'framer-motion'
import { MapPin, Award } from 'lucide-react'
import { SectionHeader } from './ui/SectionHeader'
import { SpotlightCard } from './ui/SpotlightCard'
import { WaterfallSection, WaterfallGroup, WaterfallItem } from './ui/Reveal'
import { education } from '../data'

const degreeColors = [
  {
    gradient: 'from-indigo-500/20 via-purple-500/10 to-transparent',
    border: 'border-indigo-500/25',
    hoverBorder: 'group-hover:border-indigo-500/50',
    iconBg: 'bg-indigo-500/10 border-indigo-500/20',
    iconColor: 'text-indigo-400',
    gpaBadge: 'bg-indigo-500/10 text-indigo-300 border-indigo-500/20',
    dot: 'bg-indigo-500 shadow-[0_0_12px_rgba(99,102,241,0.7)]',
    spotlight: 'rgba(99,102,241,0.07)',
  },
  {
    gradient: 'from-cyan-500/15 via-sky-500/8 to-transparent',
    border: 'border-cyan-500/20',
    hoverBorder: 'group-hover:border-cyan-500/45',
    iconBg: 'bg-cyan-500/10 border-cyan-500/20',
    iconColor: 'text-cyan-400',
    gpaBadge: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/20',
    dot: 'bg-cyan-500 shadow-[0_0_12px_rgba(6,182,212,0.7)]',
    spotlight: 'rgba(6,182,212,0.07)',
  },
]

const instituteLogos = {
  1: {
    src: '/images/education-ucf-logo.png',
    alt: 'University of Central Florida logo',
    frameClass: 'bg-black/85 border-[#f7c948]/18 p-1.5',
    imageClass: 'w-full h-full object-contain',
  },
  2: {
    src: '/images/education-griet-logo.png',
    alt: 'GRIET logo',
    frameClass: 'bg-white border-white/15 p-1.5',
    imageClass: 'w-full h-full object-cover object-left',
  },
}

export default function Education() {
  return (
    <section id="education" className="relative py-20 bg-[#070e1c] overflow-hidden">
      {/* Dot pattern background */}
      <div className="absolute inset-0 bg-dot-pattern opacity-35 pointer-events-none" />
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
                const logo = instituteLogos[edu.id]
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
                      <div className={`relative w-full h-full rounded-full border-2 border-[#070e1c] ${c.dot} group-hover:scale-125 transition-transform duration-300`} />
                    </div>

                    <SpotlightCard
                      spotlightColor={c.spotlight}
                      className={`rounded-2xl border ${c.border} ${c.hoverBorder} transition-colors duration-300`}
                    >
                    <motion.div
                      whileHover={{ y: -3, boxShadow: '0 14px 48px rgba(0,0,0,0.55)' }}
                      transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                      className={`relative overflow-hidden p-6 sm:p-8 rounded-2xl bg-[#0e1f3a]`}
                    >
                      {/* Gradient accent */}
                      <div
                        className={`absolute top-0 left-0 right-0 h-40 bg-gradient-to-b ${c.gradient} pointer-events-none opacity-60`}
                      />

                      <div className="relative flex flex-col sm:flex-row sm:items-start gap-5">
                        {/* Icon */}
                        <div className={`w-12 h-12 rounded-xl border overflow-hidden shrink-0 self-start shadow-[0_8px_24px_rgba(0,0,0,0.28)] ${logo ? logo.frameClass : c.iconBg}`}>
                          {logo ? (
                            <img
                              src={logo.src}
                              alt={logo.alt}
                              className={logo.imageClass}
                            />
                          ) : null}
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
                    </SpotlightCard>
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
