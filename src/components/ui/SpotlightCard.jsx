/**
 * SpotlightCard
 *
 * A card wrapper with:
 *  1. Mouse-tracked radial gradient spotlight
 *  2. Spring-damped 3D tilt (rotateX / rotateY) — adds real depth to every card
 *
 * Usage:
 *   <SpotlightCard className="rounded-2xl">
 *     <div className="p-6"> ... </div>
 *   </SpotlightCard>
 *
 * Props:
 *   tilt          - enable 3D tilt (default true)
 *   tiltStrength  - max tilt degrees (default 6)
 */

import { useRef } from 'react'
import { motion, useMotionTemplate, useMotionValue, useSpring } from 'framer-motion'

const SPRING = { stiffness: 280, damping: 28, mass: 0.5 }

export function SpotlightCard({
  children,
  className = '',
  spotlightColor = 'rgba(99,102,241,0.08)',
  spotlightSize = 320,
  tilt = true,
  tiltStrength = 6,
}) {
  const cardRef = useRef(null)

  // Spotlight
  const mouseX = useMotionValue(-999)
  const mouseY = useMotionValue(-999)
  const background = useMotionTemplate`radial-gradient(${spotlightSize}px circle at ${mouseX}px ${mouseY}px, ${spotlightColor}, transparent 80%)`

  // 3D tilt — raw values snapped, smoothed by springs
  const rawX = useMotionValue(0)
  const rawY = useMotionValue(0)
  const tiltX = useSpring(rawX, SPRING)
  const tiltY = useSpring(rawY, SPRING)

  const handleMouseMove = (e) => {
    const rect = cardRef.current?.getBoundingClientRect()
    if (!rect) return
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    mouseX.set(x)
    mouseY.set(y)
    if (tilt) {
      const cx = rect.width / 2
      const cy = rect.height / 2
      rawX.set(((y - cy) / cy) * -tiltStrength)
      rawY.set(((x - cx) / cx) * tiltStrength)
    }
  }

  const handleMouseLeave = () => {
    mouseX.set(-999)
    mouseY.set(-999)
    if (tilt) {
      rawX.set(0)
      rawY.set(0)
    }
  }

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.012, transition: { duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] } }}
      style={
        tilt
          ? { rotateX: tiltX, rotateY: tiltY, transformPerspective: 900, willChange: 'transform' }
          : { willChange: 'transform' }
      }
      className={`relative group ${className}`}
    >
      {/* Spotlight */}
      <motion.div
        className="pointer-events-none absolute inset-0 z-[1] rounded-[inherit]"
        style={{ background }}
      />
      {/* Sheen edge — intensifies on tilt to sell the 3D depth */}
      <motion.div
        className="pointer-events-none absolute inset-0 z-[1] rounded-[inherit] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background:
            'linear-gradient(135deg, rgba(255,255,255,0.025) 0%, transparent 50%, rgba(0,0,0,0.08) 100%)',
        }}
      />
      {/* Hover glow ring */}
      <motion.div
        className="pointer-events-none absolute -inset-px z-[0] rounded-[inherit] opacity-0 group-hover:opacity-100 transition-opacity duration-400"
        style={{ boxShadow: '0 0 0 1px rgba(99,102,241,0.14), 0 8px 28px rgba(99,102,241,0.08)' }}
      />
      {/* Content */}
      <div className="relative z-[2] h-full">{children}</div>
    </motion.div>
  )
}
