import { useDarkMode, useReveal } from './hooks'
import { profile } from './content'
import { Header, MobileNav } from './sections/Nav'
import { Hero } from './sections/Hero'
import { About } from './sections/About'
import { Work } from './sections/Work'
import { Experience } from './sections/Experience'
import { Life } from './sections/Life'
import { Contact } from './sections/Contact'

function App() {
  const [darkMode, toggleDarkMode] = useDarkMode()
  useReveal()

  return (
    <div className="grain min-h-[100dvh] overflow-x-clip bg-cream text-ink transition-colors duration-500 dark:bg-night dark:text-paper">
      <a href="#top" className="sr-only rounded-full bg-night px-4 py-2 text-white focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50">Skip to content</a>
      <Header darkMode={darkMode} onToggleTheme={toggleDarkMode} />

      <main id="top" className="mx-auto max-w-6xl px-4 pb-32 sm:px-8 md:pb-24">
        <Hero />
        <About />
        <Work />
        <Experience />
        <Life />
        <Contact />

        <footer className="mt-10 flex flex-col justify-between gap-2 border-t border-ink/10 pt-6 text-xs text-ink/60 sm:flex-row dark:border-white/10 dark:text-white/60">
          <p>© {new Date().getFullYear()} {profile.name} · Designed &amp; coded in Charlottesville</p>
          <p>React · TypeScript · Tailwind</p>
        </footer>
      </main>

      <MobileNav />
    </div>
  )
}

export default App
