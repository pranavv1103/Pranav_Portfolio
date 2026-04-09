import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { SectionHeader } from './ui/SectionHeader'
import { WaterfallSection, WaterfallGroup, WaterfallItem } from './ui/Reveal'
import { dsaStats, achievements } from '../data'

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
  indigo:  { card: 'bg-indigo-500/[0.06] border-indigo-500/20', num: 'text-indigo-300', hover: 'hover:border-indigo-500/40' },
  cyan:    { card: 'bg-cyan-500/[0.06]   border-cyan-500/20',   num: 'text-cyan-300',   hover: 'hover:border-cyan-500/40' },
  purple:  { card: 'bg-purple-500/[0.06] border-purple-500/20', num: 'text-purple-300', hover: 'hover:border-purple-500/40' },
  amber:   { card: 'bg-amber-500/[0.06]  border-amber-500/20',  num: 'text-amber-300',  hover: 'hover:border-amber-500/40' },
  emerald: { card: 'bg-emerald-500/[0.06] border-emerald-500/20', num: 'text-emerald-300', hover: 'hover:border-emerald-500/40' },
}

export default function DSA() {
  return (
    <section id="dsa" className="relative py-28 bg-[#07090f]">
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
                  <motion.div
                    whileHover={{ y: -5, scale: 1.03, boxShadow: '0 16px 48px rgba(0,0,0,0.5)' }}
                    transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                    className={`flex flex-col items-center py-9 px-4 rounded-2xl border ${c.card} ${c.hover} shadow-[0_2px_16px_rgba(0,0,0,0.3)] transition-colors duration-300 text-center cursor-default`}
                  >
                    <div className={`text-4xl sm:text-5xl font-extrabold mb-2.5 ${c.num}`}>
                      <AnimatedCounter target={value} prefix={prefix} suffix={suffix} />
                    </div>
                    <div className="text-sm text-slate-500 font-medium">{label}</div>
                  </motion.div>
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
                <WaterfallItem key={title}>
                  <motion.div
                    whileHover={{ y: -3, boxShadow: '0 14px 40px rgba(0,0,0,0.5)' }}
                    transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                    className={`flex items-start gap-4 p-5 rounded-xl border ${c.card} ${c.hover} transition-colors duration-300`}
                  >
                    <div className="text-2xl shrink-0 mt-0.5">{icon}</div>
                    <div>
                      <div className="text-sm font-bold text-slate-200 mb-0.5">{title}</div>
                      <div className="text-xs text-slate-500 mb-1.5">{subtitle}</div>
                      <div className="text-xs text-slate-400 leading-relaxed">{detail}</div>
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
