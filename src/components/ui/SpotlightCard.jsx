/**
 * SpotlightCard
 *
 * A card wrapper that renders a mouse-tracked radial gradient spotlight on hover.
 * Works with any bordered/rounded card — just wrap the card content inside.
 *
 * Usage:
 *   <SpotlightCard className="rounded-2xl">
 *     <div className="p-6"> ... </div>
 *   </SpotlightCard>
 */

import { useRef } from 'react'
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion'

export function SpotlightCard({
  children,
  className = '',
  spotlightColor = 'rgba(99,102,241,0.08)',
  spotlightSize = 320,
}) {
  const cardRef = useRef(null)
  const mouseX = useMotionValue(-999)
  const mouseY = useMotionValue(-999)

  const background = useMotionTemplate`radial-gradient(${spotlightSize}px circle at ${mouseX}px ${mouseY}px, ${spotlightColor}, transparent 80%)`

  return (
    <div
      ref={cardRef}
      onMouseMove={(e) => {
        const rect = cardRef.current?.getBoundingClientRect()
        if (!rect) return
        mouseX.set(e.clientX - rect.left)
        mouseY.set(e.clientY - rect.top)
      }}
      onMouseLeave={() => {
        mouseX.set(-999)
        mouseY.set(-999)
      }}
      className={`relative group ${className}`}
    >
      {/* Spotlight layer — sits above background but below content via z-index */}
      <motion.div
        className="pointer-events-none absolute inset-0 z-[1] rounded-[inherit]"
        style={{ background }}
      />
      {/* Content sits above the spotlight */}
      <div className="relative z-[2]">{children}</div>
    </div>
  )
}
