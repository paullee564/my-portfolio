import { profile } from '../content'
import { Icon } from '../components/ui'

const stops = [
  { id: 'about', label: 'About' },
  { id: 'work', label: 'Work' },
  { id: 'experience', label: 'Experience' },
  { id: 'life', label: 'Life' },
  { id: 'contact', label: 'Contact' },
]

export function Header({ darkMode, onToggleTheme }: { darkMode: boolean; onToggleTheme: () => void }) {
  return (
    <header className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 pt-5 sm:px-8 sm:pt-6">
      <a href="#top" className="flex items-center gap-2.5 text-lg font-bold tracking-tight">
        <span className="grid size-9 place-items-center rounded-xl bg-night font-mono text-xs text-butter shadow-[inset_0_1px_0_rgb(255_255_255/.15)] dark:bg-butter dark:text-night">{profile.initials}</span>
        {profile.name}
      </a>
      <nav className="hidden items-center gap-1 rounded-full bg-white/60 p-1.5 text-sm font-semibold shadow-[0_8px_30px_-12px_rgb(27_35_50/.25)] ring-1 ring-ink/5 backdrop-blur md:flex dark:bg-white/5 dark:ring-white/10" aria-label="Main navigation">
        {stops.map((stop, index) => (
          <a key={stop.id} href={`#${stop.id}`} className="nav-link rounded-full px-3.5 py-2"><span className="mr-1.5 font-mono text-[10px] text-coral">0{index + 1}</span>{stop.label}</a>
        ))}
      </nav>
      <button type="button" onClick={onToggleTheme} className="grid size-10 place-items-center rounded-full bg-white shadow-[0_8px_24px_-10px_rgb(27_35_50/.3)] ring-1 ring-ink/5 transition duration-500 ease-spring hover:rotate-12 active:scale-95 dark:bg-white/10 dark:ring-white/15" aria-label={`Switch to ${darkMode ? 'light' : 'dark'} mode`}>
        <Icon name={darkMode ? 'sun' : 'moon'} className="size-4" />
      </button>
    </header>
  )
}

export function MobileNav() {
  return (
    <nav className="fixed inset-x-3 bottom-3 z-40 md:hidden" aria-label="Section navigation">
      <ol className="route-bar flex items-center justify-between rounded-full bg-night/90 px-2 py-2 shadow-[0_20px_40px_-12px_rgb(27_35_50/.6)] ring-1 ring-white/10 backdrop-blur-xl">
        {stops.map((stop) => (
          <li key={stop.id} className="relative z-10">
            <a href={`#${stop.id}`} className="flex flex-col items-center gap-1 rounded-full px-2 py-1 text-[11px] font-bold text-white/85 transition active:scale-95 active:text-butter">
              <span className="size-2.5 rounded-full border-2 border-butter bg-night" aria-hidden="true" />
              {stop.label}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  )
}
