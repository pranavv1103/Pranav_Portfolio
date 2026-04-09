import { motion } from 'framer-motion'

const colorMap = {
  indigo: 'bg-indigo-500/10 text-indigo-300 border-indigo-500/20',
  cyan:   'bg-cyan-500/10   text-cyan-300   border-cyan-500/20',
  purple: 'bg-purple-500/10 text-purple-300 border-purple-500/20',
  emerald:'bg-emerald-500/10 text-emerald-300 border-emerald-500/20',
  sky:    'bg-sky-500/10    text-sky-300    border-sky-500/20',
  amber:  'bg-amber-500/10  text-amber-300  border-amber-500/20',
  default:'bg-white/5       text-slate-300  border-white/10',
}

export function Badge({ children, color = 'default', className = '' }) {
  const styles = colorMap[color] ?? colorMap.default
  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${styles} ${className}`}
    >
      {children}
    </span>
  )
}

export function TechBadge({ children }) {
  return (
    <motion.span
      whileHover={{ scale: 1.08, y: -2, boxShadow: '0 0 18px rgba(99,102,241,0.22)' }}
      transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
      className="inline-flex items-center px-2.5 py-1 rounded-md text-[11px] font-mono font-medium bg-white/[0.04] text-slate-400 border border-white/[0.07] hover:bg-indigo-500/[0.12] hover:text-indigo-200 hover:border-indigo-500/30 transition-colors duration-200 cursor-default"
    >
      {children}
    </motion.span>
  )
}
