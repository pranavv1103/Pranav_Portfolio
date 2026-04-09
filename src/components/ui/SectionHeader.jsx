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
      className="text-3xl sm:text-[2.25rem] font-bold text-slate-100 leading-tight tracking-tight flex flex-wrap gap-x-[0.35em] gap-y-0 justify-center"
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
    <div className={`flex flex-col gap-3 mb-16 ${alignClass}`}>
      {eyebrow && (
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="inline-flex items-center gap-2.5 text-[10px] font-mono font-semibold tracking-[0.2em] text-indigo-400/80 uppercase"
        >
          <motion.span
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="w-5 h-px bg-indigo-500/40 origin-right block"
          />
          {eyebrow}
          <motion.span
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="w-5 h-px bg-indigo-500/40 origin-left block"
          />
        </motion.span>
      )}

      <motion.h2
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className={`text-3xl sm:text-[2.25rem] font-bold text-slate-100 leading-tight tracking-tight flex flex-wrap gap-x-[0.35em] gap-y-0 ${titleAlignClass}`}
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
          className="max-w-xl text-slate-500 text-[0.9375rem] leading-relaxed"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  )
}
