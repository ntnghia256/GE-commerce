import { useEffect, useRef, useState } from 'react'

/**
 * Custom hook for smooth scroll reveal animation.
 * When element enters viewport, isVisible becomes true.
 *
 * @param {Object} options - IntersectionObserver options
 * @param {number} options.threshold - Visibility ratio to trigger (default 0.15)
 * @param {string} options.rootMargin - Margin around the root (default '0px 0px -40px 0px')
 * @param {boolean} options.triggerOnce - Whether to trigger only once (default true)
 * @returns {[React.RefObject, boolean]}
 */
export function useScrollReveal({
  threshold = 0.15,
  rootMargin = '0px 0px -40px 0px',
  triggerOnce = true,
} = {}) {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    // Fallback if IntersectionObserver is not supported
    if (!('IntersectionObserver' in window)) {
      setIsVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (triggerOnce) {
            observer.unobserve(element)
          }
        } else if (!triggerOnce) {
          setIsVisible(false)
        }
      },
      { threshold, rootMargin }
    )

    observer.observe(element)

    return () => {
      observer.disconnect()
    }
  }, [threshold, rootMargin, triggerOnce])

  return [ref, isVisible]
}

export default useScrollReveal
