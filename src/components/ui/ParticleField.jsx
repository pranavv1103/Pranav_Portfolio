import { useEffect, useRef } from 'react'

/**
 * Full-viewport fixed canvas — slowly drifting dots connected by faint lines.
 * Density auto-scales to viewport area. Completely passive (pointer-events:none).
 */
export default function ParticleField() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')

    let w, h, particles, animId

    const init = () => {
      w = canvas.width = window.innerWidth
      h = canvas.height = window.innerHeight
      const raw = Math.floor((w * h) / 26000)
      const count = Math.min(Math.max(raw, 20), 48)
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.18,
        vy: (Math.random() - 0.5) * 0.18,
        r: Math.random() * 1.2 + 0.5,
        a: Math.random() * 0.18 + 0.1,
      }))
    }

    const MAX_D = 132
    const MAX_D2 = MAX_D * MAX_D

    const draw = () => {
      ctx.clearRect(0, 0, w, h)

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]

        // drift + wrap
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0) p.x = w
        else if (p.x > w) p.x = 0
        if (p.y < 0) p.y = h
        else if (p.y > h) p.y = 0

        // dot
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(99,102,241,${p.a})`
        ctx.fill()

        // connections to subsequent particles only (N*(N-1)/2)
        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j]
          const dx = p.x - q.x
          const dy = p.y - q.y
          const d2 = dx * dx + dy * dy
          if (d2 < MAX_D2) {
            const alpha = (1 - Math.sqrt(d2) / MAX_D) * 0.07
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(q.x, q.y)
            ctx.strokeStyle = `rgba(99,102,241,${alpha})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      }

      animId = requestAnimationFrame(draw)
    }

    init()
    draw()

    const onResize = () => { init() }
    window.addEventListener('resize', onResize, { passive: true })

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 1, opacity: 0.38 }}
      aria-hidden="true"
    />
  )
}
