/**
 * SectionDivider
 *
 * An elegant animated divider placed between major sections.
 * Renders a gradient horizontal line with a glowing centre node.
 */

import { motion } from 'framer-motion'

export function SectionDivider({ color = 'indigo' }) {
  const glow =
    color === 'cyan'
      ? 'rgba(6,182,212,0.5)'
      : color === 'purple'
      ? 'rgba(139,92,246,0.5)'
      : 'rgba(99,102,241,0.5)'

  const via =
    color === 'cyan'
      ? 'via-cyan-500/25'
      : color === 'purple'
      ? 'via-purple-500/25'
      : 'via-indigo-500/25'

  return (
    <div className="relative flex items-center justify-center h-px mx-4 sm:mx-8 lg:mx-24 overflow-visible pointer-events-none select-none">
      {/* Left arm */}
      <div className={`flex-1 h-px bg-gradient-to-r from-transparent ${via} to-transparent`} />

      {/* Centre node */}
      <motion.div
        className="relative mx-3 flex items-center justify-center"
        animate={{ scale: [1, 1.25, 1], opacity: [0.55, 1, 0.55] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
      >
        {/* Outer glow ring */}
        <div
          className="absolute w-4 h-4 rounded-full"
          style={{ boxShadow: `0 0 14px 4px ${glow}`, background: 'transparent' }}
        />
        {/* Inner dot */}
        <div
          className="w-1.5 h-1.5 rounded-full"
          style={{ background: glow.replace('0.5', '0.9') }}
        />
      </motion.div>

      {/* Right arm */}
      <div className={`flex-1 h-px bg-gradient-to-l from-transparent ${via} to-transparent`} />
    </div>
  )
}
