import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { SectionHeader } from './ui/SectionHeader'
import { RevealUp, RevealStagger, RevealItem } from './ui/Reveal'
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
          const duration = 1800
          const steps = 60
          const increment = target / steps
          let current = 0
          const timer = setInterval(() => {
            current += increment
            if (current >= target) {
              setCount(target)
              clearInterval(timer)
            } else {
              setCount(Math.floor(current))
            }
          }, duration / steps)
        }
      },
      { threshold: 0.3 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [target])

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}{count}{suffix}
    </span>
  )
}

const accentMap = {
  indigo: 'bg-indigo-500/10 border-indigo-500/25 text-indigo-300',
  cyan:   'bg-cyan-500/10   border-cyan-500/25   text-cyan-300',
  purple: 'bg-purple-500/10 border-purple-500/25 text-purple-300',
  amber:  'bg-amber-500/10  border-amber-500/25  text-amber-300',
  emerald:'bg-emerald-500/10 border-emerald-500/25 text-emerald-300',
}

export default function DSA() {
  return (
    <section id="dsa" className="relative py-28 bg-[#07090f]">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="DSA & Achievements"
          title="Consistency over cleverness."
          subtitle="Problem solving is a discipline. Here's the track record."
        />

        {/* Stat counters */}
        <RevealStagger className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-14">
          {dsaStats.map(({ label, value, prefix = '', suffix = '', color }) => (
            <RevealItem key={label}>
              <motion.div
                whileHover={{ y: -4, scale: 1.03 }}
                transition={{ duration: 0.22, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="flex flex-col items-center py-8 px-4 rounded-2xl bg-[#0b1120] border border-white/[0.06] hover:border-indigo-500/20 shadow-[0_2px_16px_rgba(0,0,0,0.3)] transition-colors duration-300 text-center group">
                <div className="text-4xl sm:text-5xl font-extrabold mb-2">
                  <span className={`${color === 'indigo' ? 'text-indigo-300' : color === 'cyan' ? 'text-cyan-300' : 'text-purple-300'}`}>
                    <AnimatedCounter target={value} prefix={prefix} suffix={suffix} />
                  </span>
                </div>
                <div className="text-sm text-slate-500 font-medium">{label}</div>
              </motion.div>
            </RevealItem>
          ))}
        </RevealStagger>

        {/* Achievements cards */}
        <RevealUp>
          <h3 className="text-xs font-mono font-medium text-slate-500 tracking-widest uppercase mb-5">
            Recognitions
          </h3>
        </RevealUp>
        <RevealStagger className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-14">
          {achievements.map(({ title, subtitle, detail, icon, color }) => {
            const c = accentMap[color] ?? accentMap.indigo
            return (
              <RevealItem key={title}>
                  <motion.div
                    whileHover={{ y: -3, boxShadow: '0 12px 32px rgba(0,0,0,0.5)' }}
                    transition={{ duration: 0.22, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className={`flex items-start gap-4 p-5 rounded-xl border ${c} transition-colors duration-300`}
                  >
                  <div className="text-2xl shrink-0">{icon}</div>
                  <div>
                    <div className="text-sm font-bold text-slate-200">{title}</div>
                    <div className="text-xs text-slate-500 mt-0.5">{subtitle}</div>
                    <div className="text-xs text-slate-400 mt-1.5 leading-relaxed">{detail}</div>
                  </div>
                </motion.div>
              </RevealItem>
            )
          })}
        </RevealStagger>

        {/* Coding badge grid */}
        <RevealUp>
          <h3 className="text-xs font-mono font-medium text-slate-500 tracking-widest uppercase mb-5">
            Coding Milestones
          </h3>
        </RevealUp>
        <RevealStagger className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {codingBadges.map(({ label, icon, desc, active }) => (
            <RevealItem key={label}>
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                className={`group relative flex flex-col items-center text-center p-4 rounded-xl border transition-all duration-300 cursor-default overflow-hidden ${
                  active
                    ? 'bg-indigo-500/[0.08] border-indigo-500/50 shadow-[0_0_24px_rgba(99,102,241,0.18)]'
                    : 'bg-white/[0.03] border-white/[0.07] hover:border-indigo-500/25 hover:bg-indigo-500/[0.04]'
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
                <span className="text-2xl mb-2 relative">{icon}</span>
                <span className={`text-xs font-semibold leading-tight relative ${active ? 'text-indigo-200' : 'text-slate-300'}`}>
                  {label}
                </span>
                <span className="text-[10px] text-slate-600 mt-1 leading-tight hidden group-hover:block relative">
                  {desc}
                </span>
              </motion.div>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  )
}
