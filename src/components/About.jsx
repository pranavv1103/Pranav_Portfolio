import { motion } from 'framer-motion'
import { GraduationCap, MapPin, Layers, Code2, Zap } from 'lucide-react'
import { SectionHeader } from './ui/SectionHeader'
import { SpotlightCard } from './ui/SpotlightCard'
import { WaterfallSection, WaterfallGroup, WaterfallItem } from './ui/Reveal'

const pillars = [
  {
    icon: Layers,
    color: 'indigo',
    title: 'Full Stack Development',
    desc: 'I build across the entire product surface, from React UIs to RESTful APIs to database schemas, with a strong emphasis on correctness and maintainability at every layer.',
  },
  {
    icon: Zap,
    color: 'cyan',
    title: 'Real-Time and Scalable Systems',
    desc: 'I design systems that stay consistent under load: WebSocket-powered collaboration, scheduled jobs, event deduplication, and production-ready API architecture.',
  },
  {
    icon: Code2,
    color: 'purple',
    title: 'Problem Solving and DSA',
    desc: '650+ LeetCode problems and ranked #119 out of 55,000 at Smart Interviews. I bring algorithmic rigor to everyday engineering decisions.',
  },
]

const colorMap = {
  indigo: {
    bg: 'bg-indigo-500/10',
    border: 'border-indigo-500/20',
    text: 'text-indigo-400',
    hover: 'hover:border-indigo-500/40',
    spotlight: 'rgba(99,102,241,0.07)',
    glow: 'group-hover:shadow-[0_0_20px_rgba(99,102,241,0.12)]',
  },
  cyan: {
    bg: 'bg-cyan-500/10',
    border: 'border-cyan-500/20',
    text: 'text-cyan-400',
    hover: 'hover:border-cyan-500/40',
    spotlight: 'rgba(6,182,212,0.07)',
    glow: 'group-hover:shadow-[0_0_20px_rgba(6,182,212,0.12)]',
  },
  purple: {
    bg: 'bg-purple-500/10',
    border: 'border-purple-500/20',
    text: 'text-purple-400',
    hover: 'hover:border-purple-500/40',
    spotlight: 'rgba(168,85,247,0.07)',
    glow: 'group-hover:shadow-[0_0_20px_rgba(168,85,247,0.12)]',
  },
}

export default function About() {
  return (
    <section id="about" className="relative py-20 bg-[#071019] overflow-hidden">
      {/* Dot pattern background */}
      <div className="absolute inset-0 bg-dot-pattern opacity-[0.12] pointer-events-none" />
      {/* Animated ambient orbs — multi-axis drift */}
      <motion.div
        className="absolute -top-40 -right-40 w-[560px] h-[560px] rounded-full bg-indigo-600/[0.028] blur-3xl pointer-events-none"
        animate={{ x: [0, -18, 0], y: [0, 16, 0], scale: [1, 1.04, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-0 -left-32 w-[360px] h-[360px] rounded-full bg-purple-600/[0.02] blur-3xl pointer-events-none"
        animate={{ x: [0, 14, 0], y: [0, -12, 0], scale: [1, 1.06, 1] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[620px] h-[240px] rounded-full bg-cyan-600/[0.015] blur-3xl pointer-events-none"
        animate={{ scale: [1, 1.04, 1], opacity: [0.24, 0.42, 0.24] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut', delay: 7 }}
      />
      {/* Diagonal accent beams */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute w-px h-64 bg-gradient-to-b from-transparent via-indigo-400/[0.07] to-transparent"
          style={{ top: '12%', left: '10%', rotate: '22deg', transformOrigin: 'top' }}
          animate={{ opacity: [0.08, 0.2, 0.08] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute w-px h-48 bg-gradient-to-b from-transparent via-purple-400/[0.06] to-transparent"
          style={{ bottom: '18%', right: '12%', rotate: '-16deg', transformOrigin: 'top' }}
          animate={{ opacity: [0.05, 0.16, 0.05] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
        />
      </div>
      {/* Section separator line */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="About"
          title="I build things that actually work."
          subtitle="Full stack engineer with a focus on scalable systems, secure APIs, and high-quality product delivery."
        />

        <WaterfallSection>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <WaterfallItem>
              <div className="flex flex-col gap-5">
              <p className="text-slate-300 text-base leading-[1.85]">
                I am a full stack software engineer pursuing my MS in Computer Science at the{' '}
                <span className="text-slate-100 font-medium">University of Central Florida</span>{' '}
                (GPA 3.97/4.0). I also work as a Graduate Assistant, building data pipelines,
                React dashboards, and production APIs that serve real users.
              </p>
              <p className="text-slate-300 text-base leading-[1.85]">
                I have shipped 20+ REST APIs, secured distributed systems with Spring Security
                and JWT, designed relational and document-based data models, built real-time
                collaboration features using WebSockets, and deployed services to AWS and
                Kubernetes. I care about the whole product, not just the back end.
              </p>
              <p className="text-slate-300 text-base leading-[1.85]">
                Outside of work, I stay sharp through competitive problem solving: 650+ LeetCode
                problems solved, ranked #119 out of 55,000 at Smart Interviews, and consistent
                participation in weekly contests.
              </p>

              <div className="mt-2 p-5 rounded-xl bg-[#091422] border border-white/[0.10] hover:border-indigo-500/25 flex items-start gap-4 transition-colors duration-300 shadow-[0_2px_16px_rgba(0,0,0,0.3)]">
                <div className="p-2.5 rounded-lg bg-indigo-500/10 border border-indigo-500/20 shrink-0">
                  <GraduationCap size={18} className="text-indigo-400" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-slate-200">MS Computer Science</div>
                  <div className="text-sm text-slate-400 mt-0.5">University of Central Florida</div>
                  <div className="flex items-center gap-3 mt-1.5">
                    <span className="text-xs text-slate-500 font-mono">Aug 2024 to May 2026</span>
                    <span className="text-xs text-indigo-400 font-mono font-medium">GPA 3.97 / 4.0</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 text-sm text-slate-500">
                <MapPin size={13} />
                USA · Open to remote and relocation
              </div>
              </div>
            </WaterfallItem>

            <WaterfallGroup className="flex flex-col gap-4" stagger={0.13}>
              {pillars.map(({ icon: Icon, color, title, desc }, pIdx) => {
                const c = colorMap[color]
                return (
                  <WaterfallItem key={title}>
                  <SpotlightCard
                    spotlightColor={c.spotlight}
                    className={`rounded-xl border ${c.border} ${c.hover} ${c.glow} shadow-[0_4px_20px_rgba(0,0,0,0.4)] transition-all duration-300 cursor-default bg-[#0e1f3a] backdrop-blur-sm`}
                  >
                    <motion.div
                      whileHover={{ y: -5, boxShadow: '0 20px 60px rgba(0,0,0,0.55)' }}
                      transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                      className="p-5"
                    >
                      <div className="flex items-start gap-4">
                        <motion.div
                          animate={{ y: [0, -4, 0], rotate: [0, -3, 3, 0] }}
                          transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: pIdx * 0.8 }}
                          className={`p-2.5 rounded-lg ${c.bg} border ${c.border} shrink-0 group-hover:shadow-[0_0_14px_currentColor] transition-shadow duration-300`}
                        >
                          <Icon size={18} className={c.text} />
                        </motion.div>
                        <div>
                          <h3 className="text-sm font-semibold text-slate-200 mb-1.5">{title}</h3>
                          <p className="text-sm text-slate-400 leading-relaxed">{desc}</p>
                        </div>
                      </div>
                    </motion.div>
                  </SpotlightCard>
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
