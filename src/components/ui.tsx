import type { ReactNode } from 'react'

export type IconName = 'arrow' | 'book' | 'github' | 'linkedin' | 'mail' | 'moon' | 'music' | 'sun'

export function Icon({ name, className = 'size-5' }: { name: IconName; className?: string }) {
  const paths: Record<IconName, ReactNode> = {
    arrow: <><path d="M7 17 17 7" /><path d="M7 7h10v10" /></>,
    book: <><path d="M4 19.5V5a2 2 0 0 1 2-2h14v16H6.5A2.5 2.5 0 0 0 4 21.5v-2Z" /><path d="M8 7h8" /></>,
    github: <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3.3-.4 6.8-1.6 6.8-7A5.4 5.4 0 0 0 19.4 4 5 5 0 0 0 19.3.5S18.2.1 15 1.8a13.4 13.4 0 0 0-7 0C4.8.1 3.7.5 3.7.5A5 5 0 0 0 3.6 4a5.4 5.4 0 0 0-1.4 3.7c0 5.4 3.5 6.6 6.8 7A4.8 4.8 0 0 0 8 18v4" />,
    linkedin: <><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6Z" /><path d="M2 9h4v12H2zM4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" /></>,
    mail: <><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-10 6L2 7" /></>,
    moon: <path d="M21 12.8A9 9 0 1 1 11.2 3 7 7 0 0 0 21 12.8Z" />,
    music: <><path d="M9 18V5l12-2v13" /><circle cx="6" cy="18" r="3" /><circle cx="18" cy="16" r="3" /></>,
    sun: <><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.42-1.42M17.66 6.34l1.41-1.41" /></>,
  }

  return (
    <svg aria-hidden="true" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      {paths[name]}
    </svg>
  )
}

/* Trailing arrow nested in its own circle, nudged on hover. */
export function ArrowBadge({ tone = 'light' }: { tone?: 'light' | 'dark' }) {
  return (
    <span className={`grid size-8 shrink-0 place-items-center rounded-full transition-transform duration-500 ease-spring group-hover:-translate-y-px group-hover:translate-x-0.5 group-hover:scale-105 ${tone === 'light' ? 'bg-white/20' : 'bg-night/8 dark:bg-white/10'}`}>
      <Icon name="arrow" className="size-3.5" />
    </span>
  )
}

export function StopHeading({ number, kicker, children, id }: { number: string; kicker: string; children: ReactNode; id: string }) {
  return (
    <div className="mb-7 sm:mb-10" data-reveal>
      <div className="flex items-center gap-3">
        <span className="grid size-9 shrink-0 place-items-center rounded-full border-[3px] border-coral bg-cream font-mono text-xs font-bold text-coral dark:bg-night">{number}</span>
        <span className="route-line h-[3px] flex-1" />
        <span className="rounded-full bg-ink/5 px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-[.2em] text-ink/65 dark:bg-white/8 dark:text-white/65">{kicker}</span>
      </div>
      <h2 id={id} className="mt-5 max-w-3xl text-balance font-display text-[2.1rem] leading-[1.05] tracking-[-.02em] text-heading sm:text-5xl dark:text-paper">{children}</h2>
    </div>
  )
}
