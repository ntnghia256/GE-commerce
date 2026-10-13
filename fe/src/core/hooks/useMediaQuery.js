import { useSyncExternalStore } from 'react'

/**
 * Generic hook to evaluate a CSS media query using useSyncExternalStore.
 * @param {string} query - A CSS media query string
 * @returns {boolean} Whether the media query currently matches
 */
export function useMediaQuery(query) {
  return useSyncExternalStore(
    (callback) => {
      const media = window.matchMedia(query)
      media.addEventListener('change', callback)
      return () => media.removeEventListener('change', callback)
    },
    () => window.matchMedia(query).matches,
    () => false
  )
}

/**
 * Responsive breakpoint hooks per SRS requirements:
 * - Mobile:  375px – 640px
 * - Tablet:  641px – 1024px
 * - Desktop: >= 1025px
 */
export function useIsMobile() {
  return useMediaQuery('(max-width: 640px)')
}

export function useIsTablet() {
  return useMediaQuery('(min-width: 641px) and (max-width: 1024px)')
}

export function useIsDesktop() {
  return useMediaQuery('(min-width: 1025px)')
}
