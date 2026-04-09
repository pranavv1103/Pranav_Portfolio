import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { SectionHeader } from './ui/SectionHeader'
import { SpotlightCard } from './ui/SpotlightCard'
import { WaterfallSection, WaterfallGroup, WaterfallItem } from './ui/Reveal'
import { dsaStats, achievements, codingBadges } from '../data'

function AnimatedCounter({ target, prefix = '', suffix = '' }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const steps = 60
          const increment = target / steps
          let current = 0
          const timer = setInterval(() => {
            current += increment
            if (current >= target) { setCount(target); clearInterval(timer) }
            else setCount(Math.floor(current))
          }, 1800 / steps)
        }
      },
      { threshold: 0.3 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [target])

  return <span ref={ref} className="tabular-nums">{prefix}{count}{suffix}</span>
}

const accentMap = {
  indigo:  { card: 'bg-indigo-500/[0.06] border-indigo-500/20', num: 'text-indigo-300', hover: 'group-hover:border-indigo-500/40', spotlight: 'rgba(99,102,241,0.08)', glow: 'rgba(99,102,241,0.15)' },
  cyan:    { card: 'bg-cyan-500/[0.06]   border-cyan-500/20',   num: 'text-cyan-300',   hover: 'group-hover:border-cyan-500/40',   spotlight: 'rgba(6,182,212,0.08)',  glow: 'rgba(6,182,212,0.15)' },
  purple:  { card: 'bg-purple-500/[0.06] border-purple-500/20', num: 'text-purple-300', hover: 'group-hover:border-purple-500/40', spotlight: 'rgba(168,85,247,0.08)', glow: 'rgba(168,85,247,0.15)' },
  amber:   { card: 'bg-amber-500/[0.06]  border-amber-500/20',  num: 'text-amber-300',  hover: 'group-hover:border-amber-500/40',  spotlight: 'rgba(245,158,11,0.08)', glow: 'rgba(245,158,11,0.15)' },
  emerald: { card: 'bg-emerald-500/[0.06] border-emerald-500/20', num: 'text-emerald-300', hover: 'group-hover:border-emerald-500/40', spotlight: 'rgba(16,185,129,0.08)', glow: 'rgba(16,185,129,0.15)' },
}

export default function DSA() {
  return (
    <section id="dsa" className="relative py-20 bg-[#07090f] overflow-hidden">
      <div className="absolute inset-0 bg-dot-pattern opacity-35 pointer-events-none" />
      {/* Ambient orbs */}
      <motion.div
        className="absolute -top-20 -left-20 w-[450px] h-[450px] rounded-full bg-indigo-700/[0.04] blur-3xl pointer-events-none"
        animate={{ x: [0, 22, 0], y: [0, -18, 0], scale: [1, 1.08, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute -bottom-10 -right-10 w-[380px] h-[380px] rounded-full bg-amber-600/[0.03] blur-3xl pointer-events-none"
        animate={{ x: [0, -18, 0], y: [0, 14, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut', delay: 6 }}
      />
      {/* Twinkling star particles in badge area */}
      {[
        { top: '68%', left: '3%', delay: 0 },
        { top: '72%', left: '96%', delay: 1.2 },
        { top: '80%', left: '50%', delay: 2.1 },
        { top: '75%', left: '22%', delay: 0.8 },
        { top: '65%', left: '78%', delay: 1.7 },
      ].map((p, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-amber-400/40 pointer-events-none"
          style={{ top: p.top, left: p.left }}
          animate={{ opacity: [0.1, 0.55, 0.1], scale: [0.8, 1.4, 0.8] }}
          transition={{ duration: 3.5 + i * 0.5, repeat: Infinity, ease: 'easeInOut', delay: p.delay }}
        />
      ))}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="DSA and Achievements"
          title="Consistency over cleverness."
          subtitle="Problem solving is a discipline. Here is the track record."
        />

        {/* Waterfall: header -> stats -> recognitions label -> achievement cards */}
        <WaterfallSection stagger={0.14}>

          {/* Stat counters */}
          <WaterfallGroup className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-16" stagger={0.12}>
              {dsaStats.map(({ label, value, prefix = '', suffix = '', color }) => {
              const c = accentMap[color] ?? accentMap.indigo
              return (
                <WaterfallItem key={label}>
                  <SpotlightCard
                    spotlightColor={c.spotlight}
                    className={`rounded-2xl border ${c.card} ${c.hover} shadow-[0_2px_16px_rgba(0,0,0,0.3)] transition-all duration-300`}
                  >
                  <motion.div
                    whileHover={{ y: -5, scale: 1.03, boxShadow: '0 16px 48px rgba(0,0,0,0.5)' }}
                    transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-col items-center py-9 px-4 text-center cursor-default"
                  >
                    {/* Radial glow behind number */}
                    <div
                      className="absolute inset-x-0 top-4 h-20 rounded-full blur-2xl opacity-30 pointer-events-none"
                      style={{ background: `radial-gradient(ellipse at 50% 50%, ${c.glow}, transparent 70%)` }}
                    />
                    <div className={`relative text-4xl sm:text-5xl font-extrabold mb-2.5 ${c.num}`}>
                      <AnimatedCounter target={value} prefix={prefix} suffix={suffix} />
                    </div>
                    <div className="text-sm text-slate-500 font-medium">{label}</div>
                  </motion.div>
                  </SpotlightCard>
                </WaterfallItem>
              )
            })}
          </WaterfallGroup>

          {/* Recognitions label */}
          <WaterfallItem>
            <p className="text-xs font-mono font-medium text-slate-500 tracking-[0.18em] uppercase mb-6">
              Recognitions
            </p>
          </WaterfallItem>

          {/* Achievement cards */}
          <WaterfallGroup className="grid grid-cols-1 sm:grid-cols-2 gap-4" stagger={0.1}>
            {achievements.map(({ title, subtitle, detail, icon, color }) => {
              const c = accentMap[color] ?? accentMap.indigo
              return (
                <WaterfallItem key={title} className="h-full">
                  <SpotlightCard
                    spotlightColor={c.spotlight}
                    className={`h-full rounded-xl border ${c.card} ${c.hover} transition-all duration-300`}
                  >
                  <motion.div
                    whileHover={{ y: -3, boxShadow: '0 14px 40px rgba(0,0,0,0.5)' }}
                    transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                    className="flex items-start gap-4 p-5 h-full"
                  >
                    <div className="text-2xl shrink-0 mt-0.5">{icon}</div>
                    <div>
                      <div className="text-sm font-bold text-slate-200 mb-0.5">{title}</div>
                      <div className="text-xs text-slate-500 mb-1.5">{subtitle}</div>
                      <div className="text-xs text-slate-400 leading-relaxed">{detail}</div>
                    </div>
                  </motion.div>
                  </SpotlightCard>
                </WaterfallItem>
              )
            })}
          </WaterfallGroup>

          {/* Coding Milestones label */}
          <WaterfallItem>
            <div className="relative mt-10 mb-5">
              <p className="text-xs font-mono font-medium text-slate-500 tracking-[0.18em] uppercase">
                Coding Milestones
              </p>
              {/* Glow beneath label */}
              <motion.div
                className="absolute -bottom-3 left-0 w-40 h-4 rounded-full blur-xl bg-amber-400/10 pointer-events-none"
                animate={{ opacity: [0.4, 1, 0.4], scaleX: [0.8, 1.2, 0.8] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              />
            </div>
          </WaterfallItem>

          {/* Badge grid */}
          <WaterfallGroup className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3" stagger={0.08}>
            {codingBadges.map(({ label, icon, desc, active, count, years }) => (
              <WaterfallItem key={label}>
                <motion.div
                  whileHover={{ scale: 1.04, y: -3, boxShadow: '0 12px 36px rgba(0,0,0,0.5)' }}
                  transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                  className={`group relative flex flex-col items-center text-center p-4 rounded-xl border transition-all duration-300 cursor-default overflow-hidden ${
                    active
                      ? 'bg-indigo-500/[0.08] border-indigo-500/50 shadow-[0_0_24px_rgba(99,102,241,0.18)]'
                      : 'bg-white/[0.03] border-white/[0.07] hover:border-indigo-500/30 hover:bg-indigo-500/[0.05]'
                  }`}
                >
                  {active && (
                    <>
                      <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/10 to-transparent pointer-events-none" />
                      <span className="absolute top-1.5 right-1.5 text-[9px] font-bold text-indigo-300 bg-indigo-500/20 border border-indigo-500/30 px-1.5 py-0.5 rounded-full tracking-wide leading-none">
                        ACTIVE
                      </span>
                    </>
                  )}
                  {count && !active && (
                    <span className="absolute top-1.5 right-1.5 text-[9px] font-bold text-amber-300 bg-amber-500/15 border border-amber-500/30 px-1.5 py-0.5 rounded-full tracking-wide leading-none">
                      ×{count}
                    </span>
                  )}
                  <span className="text-2xl mb-2 relative group-hover:scale-110 transition-transform duration-300">{icon}</span>
                  <span className={`text-xs font-semibold leading-tight relative ${active ? 'text-indigo-200' : 'text-slate-300'}`}>
                    {label}
                  </span>
                  {/* Hover reveal — year dots for multi-year badges, desc text for others */}
                  <div className="mt-1.5 min-h-[26px] flex flex-col items-center justify-start w-full">
                    {years ? (
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-250 flex flex-col items-center gap-1">
                        <div className="flex gap-1 flex-wrap justify-center">
                          {years.map(y => (
                            <span key={y} className="text-[9px] font-mono font-semibold text-amber-300 bg-amber-500/10 border border-amber-500/25 px-1.5 py-0.5 rounded-full">
                              {y}
                            </span>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <span className="text-[10px] text-slate-400 leading-tight opacity-0 group-hover:opacity-100 transition-opacity duration-250 px-1 text-center">
                        {desc}
                      </span>
                    )}
                  </div>
                </motion.div>
              </WaterfallItem>
            ))}
          </WaterfallGroup>

        </WaterfallSection>
      </div>
    </section>
  )
}
