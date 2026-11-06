import { useEffect, useState, type ReactNode } from 'react'

type IconName = 'arrow' | 'github' | 'linkedin' | 'mail' | 'moon' | 'music' | 'sun'

interface Project {
  title: string
  description: string
  impact: string
  tags: string[]
  period: string
  visual: 'label' | 'phone' | 'states'
  background: string
  dark: boolean
  featured?: boolean
}

interface Metric {
  value: string
  label: string
  ratio?: number
}

interface Stop {
  id: string
  label: string
}

const stops: Stop[] = [
  { id: 'about', label: 'About' },
  { id: 'work', label: 'Work' },
  { id: 'experience', label: 'Experience' },
  { id: 'life', label: 'Life' },
  { id: 'contact', label: 'Contact' },
]

const projects: Project[] = [
  {
    title: 'Recipe Nutrition Engine',
    description: 'Turns recipes from blog text, PDFs, and scanned images into traceable per-serving nutrition facts.',
    impact: 'JSON-LD extraction and Tesseract OCR, a deterministic ingredient parser, and USDA FoodData Central matching. Built test-first with 210 backend tests and 91% core coverage.',
    tags: ['Python', 'FastAPI', 'PostgreSQL', 'Redis', 'React', 'TypeScript', 'Docker'],
    period: '2026 — Present',
    visual: 'label',
    background: 'linear-gradient(155deg, #d3defd 0%, #aec2f6 100%)',
    dark: false,
    featured: true,
  },
  {
    title: 'Hoos In Love',
    description: 'A React Native dating app for the UVA community, built with Project Code.',
    impact: 'A 15-table relational schema for swipes, matches, chats, and safety tools, plus compatibility scoring and multi-photo onboarding.',
    tags: ['React Native', 'PostgreSQL', 'Supabase'],
    period: '2025 — Present',
    visual: 'phone',
    background: 'linear-gradient(155deg, #f8dc8f 0%, #f0bd4a 100%)',
    dark: false,
  },
  {
    title: 'UVA Sustainability Marketplace',
    description: 'A full-stack marketplace for the UVA community, built and deployed by an Agile team of four.',
    impact: 'Notification triggers, a transaction-state and buyer-request system, and a moderator dashboard with role-based suspension.',
    tags: ['Django', 'Python', 'PostgreSQL', 'AWS S3', 'Heroku'],
    period: '2025',
    visual: 'states',
    background: 'linear-gradient(155deg, #2f5068 0%, #1d3346 100%)',
    dark: true,
  },
]

const stackGroups: { name: string; code: string; items: string[] }[] = [
  { name: 'Languages', code: 'L1', items: ['Python', 'TypeScript', 'Java', 'JavaScript', 'SQL', 'C'] },
  { name: 'Frameworks', code: 'F2', items: ['Mastra', 'CrewAI', 'Agno', 'n8n', 'React Native', 'Django', 'FastAPI'] },
  { name: 'Cloud & data', code: 'C3', items: ['Kubernetes', 'Docker', 'AWS S3', 'Supabase', 'PostgreSQL', 'Redis'] },
]

const facts: Metric[] = [
  { value: '3.92', label: 'GPA at UVA' },
  { value: '2028', label: 'Graduating' },
  { value: '3', label: 'AI agents built at Lockheed Martin' },
  { value: '210', label: 'Backend tests on my latest project' },
]

const internshipResults: Metric[] = [
  { value: '80%', label: 'GitLab codebase agent correct on a 50-question test set', ratio: 0.8 },
  { value: '17/20', label: 'Kubernetes failure scenarios diagnosed correctly', ratio: 0.85 },
  { value: '60%', label: 'Failing builds resolved by the MR reviewer across 30 MRs', ratio: 0.6 },
  { value: '3', label: 'Agent frameworks benchmarked for an air-gapped environment' },
]

const photos = [
  { src: '/images/baking.jpg', alt: 'Freshly baked chocolate-glazed donuts', caption: 'Baking, then sharing.' },
  { src: '/images/lake.jpg', alt: 'A mountain lake framed by evergreens', caption: 'More time outside.' },
  { src: '/images/caving.jpg', alt: 'A caving trip with a friend', caption: 'Always up to explore.' },
]

const hobbies = ['Running', 'Baking', 'Bodybuilding', 'Reading', 'Rubik’s cube']

function Icon({ name, className = 'size-5' }: { name: IconName; className?: string }) {
  const paths: Record<IconName, ReactNode> = {
    arrow: <><path d="M7 17 17 7" /><path d="M7 7h10v10" /></>,
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
function ArrowBadge({ tone = 'light' }: { tone?: 'light' | 'dark' }) {
  return (
    <span className={`grid size-8 shrink-0 place-items-center rounded-full transition-transform duration-500 ease-spring group-hover:-translate-y-px group-hover:translate-x-0.5 group-hover:scale-105 ${tone === 'light' ? 'bg-white/20' : 'bg-night/8 dark:bg-white/10'}`}>
      <Icon name="arrow" className="size-3.5" />
    </span>
  )
}

function StopHeading({ number, kicker, children, id }: { number: string; kicker: string; children: ReactNode; id: string }) {
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

/* Styled like a food nutrition label, filled with the project's real numbers. */
function PipelineLabel() {
  const rows: [string, string][] = [
    ['Input formats', 'Blog · PDF · scan'],
    ['Ingredient data', 'USDA FoodData Central'],
    ['Backend tests', '210'],
  ]
  return (
    <div className="mx-auto w-full max-w-sm rotate-[1.5deg] border-2 border-night bg-white p-4 font-sans text-night shadow-[0_24px_40px_-20px_rgb(27_35_50/.6)] transition-transform duration-700 ease-spring group-hover:rotate-0">
      <p className="font-display text-3xl font-semibold leading-none tracking-tight">Pipeline Facts</p>
      <p className="mt-1 border-b-[10px] border-night pb-1.5 text-xs">Per recipe imported</p>
      <p className="border-b-4 border-night py-1 text-xs font-bold">Amount per serving</p>
      {rows.map(([label, value]) => (
        <p key={label} className="flex justify-between gap-4 border-b border-night/40 py-1.5 text-sm"><span className="font-bold">{label}</span><span>{value}</span></p>
      ))}
      <div className="flex items-center justify-between gap-4 border-b-[6px] border-night py-1.5 text-sm">
        <span className="font-bold">Core coverage</span>
        <span className="flex items-center gap-2"><span className="h-2 w-16 overflow-hidden rounded-full bg-night/15"><span className="block h-full w-[91%] bg-coral" /></span>91%</span>
      </div>
      <p className="pt-1.5 text-[10px] leading-4 text-night/70">Parse → classify → match → compute per-serving macro- and micronutrients.</p>
    </div>
  )
}

/* A wireframe phone: shapes only, no invented profiles. */
function PhoneSketch() {
  return (
    <div className="relative mx-auto flex h-64 w-full max-w-xs items-end justify-center" aria-hidden="true">
      <div className="absolute bottom-8 left-4 z-10 rotate-[-8deg] rounded-2xl bg-white/70 px-3 py-2 font-mono text-[10px] font-bold uppercase tracking-widest shadow-lg">15 tables</div>
      <div className="absolute bottom-24 right-4 z-10 rotate-[6deg] rounded-2xl bg-night px-3 py-2 font-mono text-[10px] font-bold uppercase tracking-widest text-butter shadow-lg">It&apos;s a match</div>
      <div className="h-60 w-36 translate-y-10 rounded-[1.75rem] border-[5px] border-night bg-[#fff7e3] p-2 shadow-[0_24px_40px_-16px_rgb(120_80_10/.6)] transition-transform duration-700 ease-spring group-hover:translate-y-6">
        <div className="mx-auto mb-2 h-1.5 w-10 rounded-full bg-night/80" />
        <div className="relative h-32 rounded-2xl bg-gradient-to-br from-coral/70 to-butter">
          <div className="absolute inset-x-2 bottom-2 space-y-1"><div className="h-2 w-16 rounded bg-white/90" /><div className="h-1.5 w-10 rounded bg-white/70" /></div>
        </div>
        <div className="mt-3 flex justify-center gap-3">
          <span className="grid size-8 place-items-center rounded-full bg-white text-sm font-bold text-night/60 shadow">✕</span>
          <span className="grid size-8 place-items-center rounded-full bg-coral text-sm text-white shadow">♥</span>
        </div>
      </div>
    </div>
  )
}

/* The buyer-request lifecycle as stacked notification cards. */
function RequestStates() {
  const states = [
    { label: 'Buyer request sent', tone: 'bg-white/10' },
    { label: 'Seller approved', tone: 'bg-butter text-night' },
    { label: 'Chat opened', tone: 'bg-white/10' },
  ]
  return (
    <ol className="mx-auto w-full max-w-xs space-y-2" aria-label="Request lifecycle">
      {states.map((state, index) => (
        <li key={state.label} className={`flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-semibold shadow-[inset_0_1px_0_rgb(255_255_255/.12)] ring-1 ring-white/10 transition-transform duration-700 ease-spring group-hover:translate-x-0 ${state.tone} ${index === 1 ? 'translate-x-4' : index === 2 ? 'translate-x-8' : ''}`}>
          <span className="grid size-6 shrink-0 place-items-center rounded-full bg-current/15 font-mono text-[10px]">{index + 1}</span>
          {state.label}
        </li>
      ))}
    </ol>
  )
}

function readTheme(): boolean {
  try {
    const saved = localStorage.getItem('theme')
    if (saved) return saved === 'dark'
  } catch {
    // Storage can be blocked; fall back to the system setting.
  }
  return window.matchMedia('(prefers-color-scheme: dark)').matches
}

function useReveal() {
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

function App() {
  const [darkMode, setDarkMode] = useState(readTheme)
  useReveal()

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode)
    try {
      localStorage.setItem('theme', darkMode ? 'dark' : 'light')
    } catch {
      // Not saving the preference is fine.
    }
  }, [darkMode])

  return (
    <div className="grain min-h-[100dvh] overflow-x-clip bg-cream text-ink transition-colors duration-500 dark:bg-night dark:text-paper">
      <a href="#top" className="sr-only rounded-full bg-night px-4 py-2 text-white focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50">Skip to content</a>

      <header className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 pt-5 sm:px-8 sm:pt-6">
        <a href="#top" className="flex items-center gap-2.5 text-lg font-bold tracking-tight">
          <span className="grid size-9 place-items-center rounded-xl bg-night font-mono text-xs text-butter shadow-[inset_0_1px_0_rgb(255_255_255/.15)] dark:bg-butter dark:text-night">PL</span>
          Paul Lee
        </a>
        <nav className="hidden items-center gap-1 rounded-full bg-white/60 p-1.5 text-sm font-semibold shadow-[0_8px_30px_-12px_rgb(27_35_50/.25)] ring-1 ring-ink/5 backdrop-blur md:flex dark:bg-white/5 dark:ring-white/10" aria-label="Main navigation">
          {stops.map((stop, index) => (
            <a key={stop.id} href={`#${stop.id}`} className="nav-link rounded-full px-3.5 py-2"><span className="mr-1.5 font-mono text-[10px] text-coral">0{index + 1}</span>{stop.label}</a>
          ))}
        </nav>
        <button type="button" onClick={() => setDarkMode((value) => !value)} className="grid size-10 place-items-center rounded-full bg-white shadow-[0_8px_24px_-10px_rgb(27_35_50/.3)] ring-1 ring-ink/5 transition duration-500 ease-spring hover:rotate-12 active:scale-95 dark:bg-white/10 dark:ring-white/15" aria-label={`Switch to ${darkMode ? 'light' : 'dark'} mode`}>
          <Icon name={darkMode ? 'sun' : 'moon'} className="size-4" />
        </button>
      </header>

      <main id="top" className="mx-auto max-w-6xl px-4 pb-32 sm:px-8 md:pb-24">
        <section className="grid gap-10 pb-16 pt-6 sm:pt-10 lg:grid-cols-[1.15fr_.85fr] lg:items-center lg:gap-14 lg:pb-24">
          <div data-reveal>
            <div className="mb-8 inline-flex max-w-full items-center gap-3 rounded-xl bg-night px-4 py-2.5 font-mono text-xs font-bold uppercase tracking-[.14em] text-butter shadow-[0_12px_30px_-12px_rgb(27_35_50/.6),inset_0_1px_0_rgb(255_255_255/.1)] sm:text-sm dark:bg-white/8 dark:ring-1 dark:ring-white/15">
              <span className="size-2 shrink-0 animate-pulse rounded-full bg-coral" />
              <span className="truncate">Next stop · <span className="sm:hidden">SWE intern ’27</span><span className="hidden sm:inline">Summer 2027 SWE internship</span></span>
            </div>
            <h1 className="text-balance font-display text-[clamp(3rem,9vw,5.75rem)] font-medium leading-[.95] tracking-[-.03em] text-heading dark:text-paper">
              Building useful things, <em className="text-coral">thoughtfully.</em>
            </h1>
            <p className="mt-7 max-w-md text-pretty text-lg leading-8 text-ink/75 dark:text-white/75">I&apos;m Paul, a UVA computer science student building full-stack products, developer tools, and agentic AI.</p>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a href="#work" className="pill-button group bg-coral py-2 pl-6 pr-2 text-white shadow-[0_14px_30px_-12px_rgb(233_106_78/.7)]">See my work <ArrowBadge /></a>
              <a href="/Paul-Lee-Resume.pdf" target="_blank" rel="noreferrer" className="link-underline px-3 py-2 text-sm font-bold">Download résumé</a>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-md lg:max-w-none" data-reveal>
            <div className="dots-butter absolute -inset-3 rotate-3 rounded-[2.4rem] sm:-inset-4" aria-hidden="true" />
            <div className="relative rounded-[2rem] bg-white/50 p-2 shadow-[0_40px_80px_-30px_rgb(27_35_50/.5)] ring-1 ring-white/60 dark:bg-white/10 dark:ring-white/10">
              <img src="/images/paullee.jpg" alt="Paul in a white hoodie on a mountain trail during a snowfall" width={965} height={1146} fetchPriority="high" className="aspect-[4/5] w-full rounded-[1.6rem] object-cover object-[center_30%]" />
            </div>
            <p className="absolute -bottom-6 -left-3 grid size-28 rotate-[-10deg] place-items-center rounded-full bg-coral p-3 text-center font-mono text-[10px] font-bold uppercase leading-tight tracking-wider text-white shadow-[0_18px_30px_-10px_rgb(233_106_78/.7),inset_0_2px_0_rgb(255_255_255/.25)] ring-4 ring-cream sm:size-32 sm:text-[11px] dark:ring-night">
              CDL holder · drives buses for UTS
            </p>
          </div>
        </section>

        <section id="about" aria-labelledby="about-heading" className="scroll-mt-8 pb-16 sm:pb-24">
          <StopHeading number="01" kicker="About" id="about-heading">
            Curious about how complex systems work, and how to make them <em className="text-coral">better for people.</em>
          </StopHeading>
          <div className="grid gap-6 md:grid-cols-12" data-reveal>
            <p className="max-w-[60ch] text-pretty text-lg leading-8 text-ink/75 md:col-span-7 dark:text-white/75">
              At UVA I study algorithms, systems, compilers, software engineering, and LLMs. I turn those foundations into products for real communities and tools that help engineers move faster.
            </p>
            <div className="flex flex-wrap items-start gap-3 md:col-span-5 md:justify-end">
              <a href="https://github.com/paullee564" target="_blank" rel="noreferrer" className="pill-button group bg-night py-2 pl-5 pr-2 text-white dark:bg-white/10"><Icon name="github" className="size-4" />GitHub <ArrowBadge /></a>
              <a href="https://www.linkedin.com/in/paullee2028" target="_blank" rel="noreferrer" className="pill-button group bg-white py-2 pl-5 pr-2 ring-1 ring-ink/10 dark:bg-white/5 dark:ring-white/15"><Icon name="linkedin" className="size-4" />LinkedIn <ArrowBadge tone="dark" /></a>
            </div>
          </div>

          <div className="shell mt-8" data-reveal>
            <dl className="core grid grid-cols-2 bg-night text-white lg:grid-cols-4 dark:bg-[#222a3a]">
              {facts.map((fact) => (
                <div key={fact.label} className="border-white/10 p-5 sm:p-7 [&:nth-child(-n+2)]:border-b lg:border-b-0 lg:[&:not(:last-child)]:border-r [&:nth-child(odd)]:border-r">
                  <dt className="sr-only">{fact.label}</dt>
                  <dd className="font-display text-4xl tabular-nums text-butter sm:text-5xl">{fact.value}</dd>
                  <dd className="mt-2 text-sm leading-5 text-white/70">{fact.label}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="shell mt-4" data-reveal>
            <div className="core board p-5 sm:p-8">
              <div className="flex items-center justify-between gap-4 border-b border-dashed border-white/15 pb-4">
                <p className="font-mono text-[11px] font-bold uppercase tracking-[.2em] text-butter">Departures · Tools I build with</p>
                <span className="hidden items-center gap-2 font-mono text-[10px] font-bold uppercase tracking-widest text-white/55 sm:flex"><span className="size-1.5 animate-pulse rounded-full bg-emerald-400" />On time</span>
              </div>
              <ul>
                {stackGroups.map((group) => (
                  <li key={group.name} className="grid gap-3 border-b border-dashed border-white/10 py-5 last:border-0 last:pb-0 sm:grid-cols-[11rem_1fr] sm:items-center">
                    <p className="flex items-center gap-3">
                      <span className="grid h-7 w-9 place-items-center rounded-md bg-coral font-mono text-[11px] font-bold text-white">{group.code}</span>
                      <span className="font-display text-xl text-white">{group.name}</span>
                    </p>
                    <ul className="flex flex-wrap gap-1.5">
                      {group.items.map((item) => <li key={item} className="flap">{item}</li>)}
                    </ul>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section id="work" aria-labelledby="work-heading" className="scroll-mt-8 pb-16 sm:pb-24">
          <StopHeading number="02" kicker="Selected work" id="work-heading">
            Projects with <em className="text-coral">purpose.</em>
          </StopHeading>
          <div className="grid gap-4 md:grid-cols-2">
            {projects.map((project, index) => (
              <div key={project.title} className={`shell group ${project.featured ? 'md:col-span-2' : ''}`} data-reveal>
                <article className={`core project-tile textured grid h-full gap-6 ${project.featured ? 'lg:grid-cols-[1.15fr_.85fr] lg:items-center lg:gap-10' : ''}`} style={{ background: project.background, color: project.dark ? '#fff' : '#1b2332' }}>
                  <span className="pointer-events-none absolute -right-2 -top-8 select-none font-display text-[9rem] leading-none opacity-[.07] sm:text-[12rem]" aria-hidden="true">0{index + 1}</span>
                  <div className="relative">
                    <p className="inline-flex items-center gap-2 rounded-full bg-current/10 px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-[.18em]">
                      {project.featured && <span className="size-1.5 rounded-full bg-coral" />}{project.featured ? 'Latest · ' : ''}{project.period}
                    </p>
                    <h3 className="mt-3 text-balance font-display text-3xl leading-[1.05] tracking-tight sm:text-[2.4rem]">{project.title}</h3>
                    <p className="mt-2.5 max-w-[55ch] text-base leading-7 opacity-85">{project.description}</p>
                    <p className="mt-2.5 max-w-[60ch] text-sm leading-6 opacity-75">{project.impact}</p>
                    <ul className="mt-5 flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => <li key={tag} className="rounded-md bg-current/8 px-2 py-1 font-mono text-[10px] font-bold uppercase tracking-wide ring-1 ring-current/10">{tag}</li>)}
                    </ul>
                  </div>
                  <div className="relative self-end">
                    {project.visual === 'label' && <PipelineLabel />}
                    {project.visual === 'phone' && <PhoneSketch />}
                    {project.visual === 'states' && <RequestStates />}
                  </div>
                </article>
              </div>
            ))}
          </div>
        </section>

        <section id="experience" aria-labelledby="experience-heading" className="scroll-mt-8 pb-16 sm:pb-24">
          <StopHeading number="03" kicker="Experience" id="experience-heading">
            Where I&apos;ve <em className="text-coral">shipped.</em>
          </StopHeading>
          <div className="grid gap-5 lg:grid-cols-12">
            <div className="shell lg:col-span-8" data-reveal>
              <article className="core h-full bg-white p-6 sm:p-8 dark:bg-[#222a3a]">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-display text-3xl tracking-tight">Software Engineer Intern</h3>
                  <p className="rounded-full bg-coral/10 px-3 py-1 font-mono text-[11px] font-bold uppercase tracking-widest text-[#c9482c] dark:text-coral">May — Aug. 2026</p>
                </div>
                <p className="mt-1 font-semibold">Lockheed Martin <span className="font-normal text-ink/60 dark:text-white/60">· Zeta Associates</span></p>
                <p className="mt-4 max-w-[60ch] leading-7 text-ink/75 dark:text-white/75">Built autonomous AI agents in Python for codebase Q&amp;A, Kubernetes diagnostics, and merge-request review.</p>
                <dl className="mt-7 grid gap-3 sm:grid-cols-2">
                  {internshipResults.map((result) => (
                    <div key={result.label} className="rounded-2xl bg-cream p-4 shadow-[inset_0_1px_0_rgb(255_255_255/.8)] dark:bg-white/5 dark:shadow-none">
                      <dt className="sr-only">{result.label}</dt>
                      <dd className="font-display text-3xl tabular-nums text-coral">{result.value}</dd>
                      <dd className="mt-1 text-sm leading-5 text-ink/70 dark:text-white/70">{result.label}</dd>
                      {result.ratio !== undefined && (
                        <dd className="mt-3 h-1.5 overflow-hidden rounded-full bg-ink/8 dark:bg-white/10" aria-hidden="true">
                          <span className="block h-full rounded-full bg-gradient-to-r from-coral to-[#f19a6d]" style={{ width: `${result.ratio * 100}%` }} />
                        </dd>
                      )}
                    </div>
                  ))}
                </dl>
              </article>
            </div>
            <div className="grid gap-5 lg:col-span-4">
              <div className="shell" data-reveal>
                <article className="core textured h-full bg-night p-6 text-white sm:p-7 dark:bg-[#222a3a]">
                  <p className="relative font-mono text-[11px] font-bold uppercase tracking-widest text-butter">Oct. 2025 — Present</p>
                  <h3 className="relative mt-2 font-display text-2xl">Software Engineer</h3>
                  <p className="relative mt-1 font-semibold">Project Code</p>
                  <p className="relative mt-3 text-sm leading-6 text-white/75">Building Hoos In Love with Supabase auth, storage, and PostgreSQL-backed matching and messaging.</p>
                </article>
              </div>
              <div className="shell" data-reveal>
                <article className="core textured h-full p-6 text-night sm:p-7" style={{ background: 'linear-gradient(155deg, #d3defd 0%, #aec2f6 100%)' }}>
                  <p className="relative font-mono text-[11px] font-bold uppercase tracking-widest text-night/70">2024 — 2028</p>
                  <h3 className="relative mt-2 font-display text-2xl">University of Virginia</h3>
                  <p className="relative mt-1 font-semibold">B.A. Computer Science · 3.92 GPA</p>
                  <p className="relative mt-3 text-sm leading-6 text-night/75">Algorithms, systems, compilers, software engineering, and LLMs.</p>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section id="life" aria-labelledby="life-heading" className="scroll-mt-8 pb-16 sm:pb-24">
          <StopHeading number="04" kicker="Outside the editor" id="life-heading">
            A life beyond <em className="text-coral">the code.</em>
          </StopHeading>

          <div className="shell" data-reveal>
            <article className="core grid bg-night text-white sm:h-96 sm:grid-cols-[.8fr_1fr] dark:bg-[#222a3a]">
              <img src="/images/paul-portrait.jpg" alt="Paul in the driver's seat of a UTS bus, turning to smile at the camera" className="aspect-[4/3] size-full object-cover object-[center_25%] sm:aspect-auto sm:h-96" loading="lazy" />
              <div className="textured flex flex-col justify-center p-6 sm:p-10">
                <p className="relative self-start rounded-lg bg-black/40 px-3 py-1.5 font-mono text-[11px] font-bold uppercase tracking-[.14em] text-butter ring-1 ring-white/10">On the job</p>
                <h3 className="relative mt-4 font-display text-3xl leading-tight sm:text-4xl">Driving for UTS</h3>
                <p className="relative mt-3 max-w-[50ch] leading-7 text-white/80">
                  Fun fact: I hold a commercial driver&apos;s license, so my part-time job is driving a transit bus for University Transit Service, UVA&apos;s bus system.
                </p>
              </div>
            </article>
          </div>

          <ul className="-mx-4 mt-4 flex snap-x snap-mandatory gap-3 overflow-x-auto px-4 pb-2 sm:mx-0 sm:grid sm:grid-cols-3 sm:gap-4 sm:overflow-visible sm:px-0 sm:pb-0" aria-label="Photos">
            {photos.map((photo, index) => (
              <li key={photo.src} className={`w-[78%] shrink-0 snap-start sm:w-auto ${index === 1 ? 'sm:translate-y-6' : ''}`} data-reveal>
                <figure className="shell">
                  <div className="core relative aspect-[4/5]">
                    <img src={photo.src} alt={photo.alt} className="absolute inset-0 size-full object-cover transition-transform duration-700 ease-spring hover:scale-105" loading="lazy" />
                    <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent px-5 pb-4 pt-16 font-display text-xl text-white">{photo.caption}</figcaption>
                  </div>
                </figure>
              </li>
            ))}
          </ul>

          <div className="mt-4 grid gap-4 sm:mt-10 md:grid-cols-3">
            <div className="shell" data-reveal>
              <div className="core h-full bg-white p-6 dark:bg-[#222a3a]">
                <p className="font-mono text-[11px] font-bold uppercase tracking-[.16em] text-ink/60 dark:text-white/60">Also into</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {hobbies.map((hobby) => <li key={hobby} className="rounded-lg bg-cream px-3 py-1.5 text-sm font-semibold ring-1 ring-ink/5 dark:bg-white/10 dark:ring-white/5">{hobby}</li>)}
                </ul>
              </div>
            </div>
            <div className="shell" data-reveal>
              <article className="core flex h-full items-center gap-5 bg-white p-6 dark:bg-[#222a3a]">
                <img src="/images/mistborn-cover.jpg" alt="Cover of Mistborn: The Final Empire by Brandon Sanderson" className="w-16 shrink-0 rotate-[-4deg] rounded shadow-[0_12px_20px_-8px_rgb(27_35_50/.6)]" loading="lazy" />
                <div>
                  <p className="font-mono text-[11px] font-bold uppercase tracking-[.16em] text-ink/60 dark:text-white/60">Reading</p>
                  <h3 className="mt-1 font-display text-xl leading-tight">Mistborn: The Final Empire</h3>
                  <p className="text-sm text-ink/70 dark:text-white/70">Brandon Sanderson</p>
                </div>
              </article>
            </div>
            <article className="ticket flex items-stretch text-night drop-shadow-[0_14px_20px_rgb(160_110_20/.25)]" data-reveal>
              <div className="flex flex-1 items-center gap-4 p-6">
                <span className="grid size-14 shrink-0 place-items-center rounded-xl bg-night text-butter">
                  <Icon name="music" className="size-6" />
                </span>
                <div>
                  <p className="font-mono text-[11px] font-bold uppercase tracking-[.16em] text-night/70">On repeat</p>
                  <h3 className="mt-1 font-display text-xl leading-tight">True Romance</h3>
                  <p className="text-sm text-night/75">Citizens!</p>
                </div>
              </div>
              <div className="flex w-14 items-center justify-center border-l-2 border-dashed border-night/25">
                <span className="rotate-90 whitespace-nowrap font-mono text-[10px] font-bold uppercase tracking-[.2em] text-night/60">Admit one</span>
              </div>
            </article>
          </div>
        </section>

        <section id="contact" aria-labelledby="contact-heading" className="scroll-mt-8">
          <StopHeading number="05" kicker="End of the line" id="contact-heading">
            Let&apos;s build something <em className="text-coral">useful.</em>
          </StopHeading>
          <div className="shell" data-reveal>
            <div className="core textured flex flex-col gap-4 p-4 text-white sm:flex-row sm:items-center sm:justify-between sm:p-5" style={{ background: 'linear-gradient(155deg, #ef8466 0%, #e05a3c 100%)' }}>
              <a href="mailto:paullee1606@gmail.com" className="group relative flex min-w-0 items-center gap-3">
                <span className="grid size-11 shrink-0 place-items-center rounded-full bg-white/20"><Icon name="mail" className="size-5" /></span>
                <span className="min-w-0">
                  <span className="block font-mono text-[10px] font-bold uppercase tracking-[.2em] text-white/80">Email me</span>
                  <span className="link-underline block truncate font-display text-xl sm:text-2xl">paullee1606@gmail.com</span>
                </span>
              </a>
              <a href="/Paul-Lee-Resume.pdf" target="_blank" rel="noreferrer" className="pill-button group relative justify-between bg-white py-2 pl-5 pr-2 text-night sm:justify-start">Résumé · PDF <ArrowBadge tone="dark" /></a>
            </div>
          </div>
        </section>

        <footer className="mt-10 flex flex-col justify-between gap-2 border-t border-ink/10 pt-6 text-xs text-ink/60 sm:flex-row dark:border-white/10 dark:text-white/60">
          <p>© 2026 Paul Lee · Designed &amp; coded in Charlottesville</p>
          <p>React · TypeScript · Tailwind</p>
        </footer>
      </main>

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
    </div>
  )
}

export default App
