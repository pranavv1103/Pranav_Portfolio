/**
 * Waterfall Animation System
 *
 * Every component here is tuned to create a top-to-bottom cascading flow
 * where content pours into place in a layered, cinematic sequence.
 *
 * Hierarchy:
 *   WaterfallSection  — outer section observer; triggers the entire section cascade
 *   WaterfallGroup    — stagger container for a group of children
 *   WaterfallItem     — individual animated child (used inside WaterfallGroup)
 *   RevealUp          — standalone reveal for one-off elements
 *
 * Legacy aliases RevealStagger / RevealItem remain so existing code compiles.
 */

import { motion } from 'framer-motion'

// ─── Shared easing ─────────────────────────────────────────────────────────────
export const EASE_FLOW = [0.16, 1, 0.3, 1]          // expo out — snappy but smooth
export const EASE_SOFT = [0.25, 0.46, 0.45, 0.94]   // quart out — gentle

// ─── Base variants ─────────────────────────────────────────────────────────────
const flowIn = {
  hidden: { opacity: 0, y: 32, filter: 'blur(3px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.72, ease: EASE_FLOW },
  },
}

const cascadeItem = {
  hidden: { opacity: 0, y: 24, filter: 'blur(2px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.6, ease: EASE_FLOW },
  },
}

// ─── WaterfallSection ──────────────────────────────────────────────────────────
// Wraps an entire section and triggers child staggering as the section enters viewport.
export function WaterfallSection({ children, className = '', stagger = 0.12, margin = '-80px' }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: stagger, delayChildren: 0.05 } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// ─── WaterfallGroup ────────────────────────────────────────────────────────────
// Nested stagger container — use inside WaterfallSection for sub-groupings.
export function WaterfallGroup({ children, className = '', stagger = 0.09 }) {
  return (
    <motion.div
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: stagger } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// ─── WaterfallItem ─────────────────────────────────────────────────────────────
// Each animated child inside a group.
export function WaterfallItem({ children, className = '' }) {
  return (
    <motion.div variants={cascadeItem} className={className}>
      {children}
    </motion.div>
  )
}

// ─── RevealUp ──────────────────────────────────────────────────────────────────
// Standalone reveal for isolated elements; not part of a stagger container.
export function RevealUp({ children, delay = 0, className = '' }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      variants={{
        hidden: { opacity: 0, y: 28, filter: 'blur(3px)' },
        visible: {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          transition: { duration: 0.7, ease: EASE_FLOW, delay },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// ─── Legacy aliases (keep existing components compiling) ──────────────────────
export function RevealStagger({ children, className = '', stagger = 0.09 }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: stagger } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function RevealItem({ children, className = '' }) {
  return (
    <motion.div variants={cascadeItem} className={className}>
      {children}
    </motion.div>
  )
}
