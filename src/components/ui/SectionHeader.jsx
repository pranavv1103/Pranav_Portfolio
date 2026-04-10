import { motion } from 'framer-motion'

const wordVariants = {
  hidden: { opacity: 0, y: 22, filter: 'blur(4px)' },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94], delay: i * 0.07 },
  }),
}

function AnimatedTitle({ text }) {
  const words = text.split(' ')
  return (
    <motion.h2
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="text-3xl sm:text-[2.25rem] font-bold text-white leading-tight tracking-tight flex flex-wrap gap-x-[0.35em] gap-y-0 justify-center"
    >
      {words.map((word, i) => (
        <motion.span key={i} custom={i} variants={wordVariants} className="inline-block">
          {word}
        </motion.span>
      ))}
    </motion.h2>
  )
}

export function SectionHeader({ eyebrow, title, subtitle, align = 'center' }) {
  const alignClass = align === 'left' ? 'items-start text-left' : 'items-center text-center'
  const titleAlignClass = align === 'left' ? 'justify-start' : 'justify-center'

  return (
    <div className={`flex flex-col gap-3.5 mb-12 ${alignClass}`}>
      {eyebrow && (
        <motion.div
          initial={{ opacity: 0, y: 14, scale: 0.92 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="relative inline-flex items-center gap-2"
        >
          {/* Glow bloom behind the pill */}
          <motion.div
            className="absolute inset-0 rounded-full blur-md opacity-60 pointer-events-none"
            style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(99,102,241,0.14), transparent 70%)' }}
            animate={{ scale: [1, 1.18, 1], opacity: [0.22, 0.42, 0.22] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          />
          <span className="relative inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/[0.09] border border-indigo-500/24 text-[10px] font-mono font-semibold tracking-[0.2em] text-indigo-300 uppercase shadow-[0_0_16px_rgba(99,102,241,0.08)]">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 shadow-[0_0_6px_rgba(99,102,241,0.7)] animate-pulse" />
            {eyebrow}
          </span>
        </motion.div>
      )}

      <motion.h2
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className={`text-3xl sm:text-[2.25rem] font-bold text-white leading-tight tracking-tight flex flex-wrap gap-x-[0.35em] gap-y-0 ${titleAlignClass}`}
      >
        {title.split(' ').map((word, i) => (
          <motion.span key={i} custom={i} variants={wordVariants} className="inline-block">
            {word}
          </motion.span>
        ))}
      </motion.h2>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.3, ease: 'easeOut' }}
          className="max-w-2xl text-slate-300 text-[0.9375rem] leading-relaxed"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  )
}
