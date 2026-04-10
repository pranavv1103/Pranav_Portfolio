import { useEffect } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

export default function CursorGlow() {
  const mouseX = useMotionValue(-1000)
  const mouseY = useMotionValue(-1000)

  // Outer glow — lazy spring
  const slowX = useSpring(mouseX, { stiffness: 55, damping: 18 })
  const slowY = useSpring(mouseY, { stiffness: 55, damping: 18 })
  // Inner ring — snappier spring
  const fastX = useSpring(mouseX, { stiffness: 200, damping: 22 })
  const fastY = useSpring(mouseY, { stiffness: 200, damping: 22 })

  const outerX = useTransform(slowX, (v) => v - 300)
  const outerY = useTransform(slowY, (v) => v - 300)
  const innerX = useTransform(fastX, (v) => v - 20)
  const innerY = useTransform(fastY, (v) => v - 20)

  useEffect(() => {
    const update = (e) => { mouseX.set(e.clientX); mouseY.set(e.clientY) }
    window.addEventListener('mousemove', update)
    return () => window.removeEventListener('mousemove', update)
  }, [mouseX, mouseY])

  return (
    <>
      {/* Large ambient glow blob */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[4] w-[600px] h-[600px] rounded-full"
        style={{
          x: outerX, y: outerY,
          background: 'radial-gradient(circle, rgba(99,102,241,0.07) 0%, rgba(139,92,246,0.035) 40%, transparent 70%)',
        }}
      />
      {/* Inner ring dot */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[6] w-10 h-10 rounded-full"
        style={{
          x: innerX, y: innerY,
          background: 'radial-gradient(circle, rgba(165,180,252,0.55) 0%, rgba(129,140,248,0.10) 60%, transparent 100%)',
          boxShadow: '0 0 12px 2px rgba(129,140,248,0.28)',
        }}
      />
    </>
  )
}
