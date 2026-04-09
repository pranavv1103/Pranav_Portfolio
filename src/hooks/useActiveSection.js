import { useState, useEffect } from 'react'

/**
 * Returns the id of the section currently visible in the viewport.
 * Used for active nav link highlighting.
 */
export function useActiveSection(ids = []) {
  const [active, setActive] = useState(ids[0] ?? '')

  useEffect(() => {
    const observers = []

    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id)
        },
        { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
      )

      observer.observe(el)
      observers.push(observer)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [ids.join(',')])

  return active
}
