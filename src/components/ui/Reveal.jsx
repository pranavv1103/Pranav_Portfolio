import { motion } from 'framer-motion'

const ease = [0.25, 0.46, 0.45, 0.94]

const variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease, delay },
  }),
}

export function RevealUp({ children, delay = 0, className = '' }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      custom={delay}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function RevealStagger({ children, className = '' }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.09 } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function RevealItem({ children, className = '' }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 18, scale: 0.98 },
        visible: {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: { duration: 0.55, ease },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
