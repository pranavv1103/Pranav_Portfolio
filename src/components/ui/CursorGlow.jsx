import { useEffect } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

export default function CursorGlow() {
  const mouseX = useMotionValue(-1000)
  const mouseY = useMotionValue(-1000)

  const springX = useSpring(mouseX, { stiffness: 70, damping: 18, restDelta: 0.5 })
  const springY = useSpring(mouseY, { stiffness: 70, damping: 18, restDelta: 0.5 })

  const x = useTransform(springX, (v) => v - 300)
  const y = useTransform(springY, (v) => v - 300)

  useEffect(() => {
    const update = (e) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }
    window.addEventListener('mousemove', update)
    return () => window.removeEventListener('mousemove', update)
  }, [mouseX, mouseY])

  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 z-[5] w-[600px] h-[600px] rounded-full"
      style={{
        x,
        y,
        background:
          'radial-gradient(circle, rgba(99,102,241,0.065) 0%, rgba(139,92,246,0.03) 40%, transparent 70%)',
      }}
    />
  )
}
