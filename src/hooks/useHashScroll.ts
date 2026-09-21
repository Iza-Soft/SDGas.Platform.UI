import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * Scrolls the element matching the current URL hash into view whenever the
 * location changes. Keyed on `location.key` (not just `location.hash`) so
 * clicking the same "#contact" link twice in a row still scrolls the second
 * time — React Router gives every navigation a fresh key even when the
 * hash string itself is unchanged, but the hash string alone doesn't
 * change, so an effect keyed only on it would silently no-op on repeat clicks.
 */
export function useHashScroll() {
  const location = useLocation()

  useEffect(() => {
    if (!location.hash) return
    const el = document.getElementById(location.hash.slice(1))
    el?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.hash, location.key])
}
