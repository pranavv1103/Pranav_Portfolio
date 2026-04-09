import { motion } from 'framer-motion'

export function SectionHeader({ eyebrow, title, subtitle, align = 'center' }) {
  const alignClass = align === 'left' ? 'items-start text-left' : 'items-center text-center'

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`flex flex-col gap-3 mb-16 ${alignClass}`}
    >
      {eyebrow && (
        <span className="inline-flex items-center gap-2.5 text-[10px] font-mono font-semibold tracking-[0.2em] text-indigo-400/80 uppercase">
          <span className="w-5 h-px bg-indigo-500/40" />
          {eyebrow}
          <span className="w-5 h-px bg-indigo-500/40" />
        </span>
      )}
      <h2 className="text-3xl sm:text-[2.25rem] font-bold text-slate-100 leading-tight tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="max-w-xl text-slate-500 text-[0.9375rem] leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}
