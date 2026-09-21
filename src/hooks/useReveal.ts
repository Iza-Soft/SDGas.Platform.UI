import { useEffect, useRef, useState } from 'react'

export type RevealDirection = 'up' | 'left' | 'right'

const BASE_CLASS: Record<RevealDirection, string> = {
  up: 'reveal',
  left: 'reveal-left',
  right: 'reveal-right',
}

/**
 * Adds an `is-visible` class the first time the returned element scrolls
 * into view, so CSS can animate it in. Fires once — scrolling back up
 * doesn't re-hide it, which reads as more deliberate than a flicker.
 *
 * `direction` picks which entrance the CSS plays: 'up' (default) fades in
 * from below, 'left'/'right' fly in from that side — used to alternate
 * sections down a page for a more obvious, directional feel.
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>(direction: RevealDirection = 'up') {
  const ref = useRef<T | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (typeof IntersectionObserver === 'undefined') {
      setIsVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -10% 0px' },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return { ref, isVisible, className: BASE_CLASS[direction] + (isVisible ? ' is-visible' : '') }
}
