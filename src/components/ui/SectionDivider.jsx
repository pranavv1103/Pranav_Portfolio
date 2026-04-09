/**
 * SectionDivider
 *
 * An elegant animated divider placed between major sections.
 * Renders gradient arms + glowing centre node + flanking floating particles.
 */

import { motion } from 'framer-motion'

export function SectionDivider({ color = 'indigo' }) {
  const glow =
    color === 'cyan'
      ? 'rgba(6,182,212,0.55)'
      : color === 'purple'
      ? 'rgba(139,92,246,0.55)'
      : 'rgba(99,102,241,0.55)'

  const glowFaint =
    color === 'cyan'
      ? 'rgba(6,182,212,0.08)'
      : color === 'purple'
      ? 'rgba(139,92,246,0.08)'
      : 'rgba(99,102,241,0.08)'

  const via =
    color === 'cyan'
      ? 'via-cyan-500/30'
      : color === 'purple'
      ? 'via-purple-500/30'
      : 'via-indigo-500/30'

  const dotColor =
    color === 'cyan'
      ? 'bg-cyan-400'
      : color === 'purple'
      ? 'bg-purple-400'
      : 'bg-indigo-400'

  return (
    <div className="relative flex items-center justify-center h-8 mx-4 sm:mx-8 lg:mx-16 overflow-visible pointer-events-none select-none">
      {/* Ambient bloom behind the whole divider */}
      <div
        className="absolute inset-x-0 h-10 rounded-full blur-2xl opacity-30"
        style={{ background: `radial-gradient(ellipse at 50% 50%, ${glowFaint}, transparent 70%)` }}
      />

      {/* Left arm */}
      <div className={`flex-1 h-px bg-gradient-to-r from-transparent ${via} to-transparent`} />

      {/* Left flanking particle */}
      <motion.div
        className={`absolute w-1 h-1 rounded-full ${dotColor}/40`}
        style={{ left: '30%' }}
        animate={{ y: [-3, 3, -3], opacity: [0.2, 0.6, 0.2] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
      />

      {/* Centre node */}
      <motion.div
        className="relative mx-3 flex items-center justify-center"
        animate={{ scale: [1, 1.3, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
      >
        {/* Outer glow ring */}
        <motion.div
          className="absolute w-5 h-5 rounded-full"
          style={{ boxShadow: `0 0 18px 6px ${glow}`, background: 'transparent' }}
          animate={{ scale: [1, 1.4, 1], opacity: [0.4, 0.9, 0.4] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
        />
        {/* Inner dot */}
        <div
          className="w-2 h-2 rounded-full"
          style={{ background: glow.replace('0.55', '0.95') }}
        />
      </motion.div>

      {/* Right flanking particle */}
      <motion.div
        className={`absolute w-1 h-1 rounded-full ${dotColor}/40`}
        style={{ right: '30%' }}
        animate={{ y: [3, -3, 3], opacity: [0.2, 0.6, 0.2] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 1.2 }}
      />

      {/* Right arm */}
      <div className={`flex-1 h-px bg-gradient-to-l from-transparent ${via} to-transparent`} />
    </div>
  )
}
