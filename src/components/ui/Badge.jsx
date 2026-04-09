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
    <span className="inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-mono font-medium bg-white/5 text-slate-300 border border-white/10 hover:bg-indigo-500/10 hover:text-indigo-300 hover:border-indigo-500/20 transition-colors duration-200">
      {children}
    </span>
  )
}
