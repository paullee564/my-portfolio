import { useEffect, useState } from 'react'

function readTheme(): boolean {
  try {
    const saved = localStorage.getItem('theme')
    if (saved) return saved === 'dark'
  } catch {
    // Storage can be blocked; fall back to the system setting.
  }
  return window.matchMedia('(prefers-color-scheme: dark)').matches
}

/* Dark-mode state, mirrored onto <html class="dark"> and remembered between visits. */
export function useDarkMode() {
  const [darkMode, setDarkMode] = useState(readTheme)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode)
    try {
      localStorage.setItem('theme', darkMode ? 'dark' : 'light')
    } catch {
      // Not saving the preference is fine.
    }
  }, [darkMode])

  return [darkMode, () => setDarkMode((value) => !value)] as const
}

/* Fades in every [data-reveal] element the first time it scrolls into view. */
export function useReveal() {
  useEffect(() => {
    const items = document.querySelectorAll<HTMLElement>('[data-reveal]')
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) {
      items.forEach((item) => item.classList.add('is-visible'))
      return
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      })
    }, { rootMargin: '0px 0px -40px 0px' })
    items.forEach((item) => observer.observe(item))
    return () => observer.disconnect()
  }, [])
}
