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
        <span className="inline-flex items-center gap-2 text-xs font-mono font-medium tracking-widest text-indigo-400 uppercase">
          <span className="w-6 h-[1px] bg-indigo-400/60" />
          {eyebrow}
          <span className="w-6 h-[1px] bg-indigo-400/60" />
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="max-w-xl text-slate-400 text-base leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}
