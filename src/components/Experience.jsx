import { motion } from 'framer-motion'
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react'
import { SectionHeader } from './ui/SectionHeader'
import { TechBadge } from './ui/Badge'
import { RevealUp } from './ui/Reveal'
import { experience } from '../data'

export default function Experience() {
  return (
    <section id="experience" className="relative py-28 bg-[#080c16]">
      {/* Subtle top border glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-indigo-500/20 via-indigo-500/10 to-transparent pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Experience"
          title="Where I've shipped real things."
          subtitle="Production engineering across backend services, cloud infrastructure, and full-stack products."
        />

        <div className="relative">
          {/* Timeline spine */}
          <div className="absolute left-0 md:left-6 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500/40 via-indigo-500/20 to-transparent" />

          <div className="flex flex-col gap-12 pl-8 md:pl-20">
            {experience.map((job, i) => (
              <RevealUp key={job.id} delay={i * 0.1}>
                <div className="relative group">
                  {/* Timeline dot */}
                  <div className="absolute -left-[2.35rem] md:-left-[3.35rem] top-5 w-3 h-3 rounded-full bg-indigo-500 border-2 border-[#080c16] shadow-[0_0_10px_rgba(99,102,241,0.5)] group-hover:scale-125 transition-transform duration-300" />

                  <div className="p-6 sm:p-7 rounded-2xl bg-[#0b1120] border border-white/[0.06] hover:border-indigo-500/20 hover:bg-[#0d1428] shadow-[0_2px_16px_rgba(0,0,0,0.35)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.5)] transition-all duration-300">
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-5">
                      <div>
                        <h3 className="text-lg font-bold text-slate-100 leading-tight">
                          {job.role}
                        </h3>
                        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-1.5">
                          <span className="flex items-center gap-1.5 text-sm font-semibold text-indigo-400">
                            <Briefcase size={13} />
                            {job.company}
                          </span>
                          <span className="flex items-center gap-1 text-xs text-slate-500">
                            <MapPin size={11} />
                            {job.location}
                          </span>
                        </div>
                      </div>
                      <div className="shrink-0 flex items-center gap-1.5 text-xs text-slate-500 font-mono bg-white/[0.03] border border-white/[0.06] px-3 py-1.5 rounded-lg">
                        <Calendar size={12} />
                        {job.period}
                      </div>
                    </div>

                    {/* Highlights */}
                    <ul className="flex flex-col gap-2.5 mb-5">
                      {job.highlights.map((h) => (
                        <li key={h} className="flex items-start gap-2.5 text-sm text-slate-400 leading-relaxed">
                          <CheckCircle2 size={14} className="text-indigo-500 shrink-0 mt-0.5" />
                          {h}
                        </li>
                      ))}
                    </ul>

                    {/* Tech */}
                    <div className="flex flex-wrap gap-1.5">
                      {job.tech.map((t) => (
                        <TechBadge key={t}>{t}</TechBadge>
                      ))}
                    </div>
                  </div>
                </div>
              </RevealUp>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
