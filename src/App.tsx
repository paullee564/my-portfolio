import { useEffect, useState, type ReactNode } from 'react'

type IconName = 'arrow' | 'github' | 'linkedin' | 'mail' | 'moon' | 'sun'

interface Project {
  title: string
  description: string
  impact: string
  tags: string[]
  period: string
  color: string
  dark: boolean
}

interface Hobby {
  name: string
  detail: string
}

const projects: Project[] = [
  {
    title: 'Hoos In Love',
    description: 'A mobile dating platform designed for the UVA community.',
    impact: '14+ normalized tables and a collaborative-filtering algorithm for a planned community of 500+ students.',
    tags: ['React Native', 'PostgreSQL', 'Supabase'],
    period: '2025 — Present',
    color: '#f3c959',
    dark: false,
  },
  {
    title: 'UVA Sustainability Marketplace',
    description: 'A full-stack marketplace for exchanging items across the UVA community.',
    impact: 'Real-time notifications, buyer requests, messaging, moderation tools, OAuth, and cloud media storage.',
    tags: ['Django', 'Python', 'AWS S3'],
    period: '2025',
    color: '#253f53',
    dark: true,
  },
  {
    title: 'Course Review System',
    description: 'A desktop course-evaluation platform built with a three-person team.',
    impact: 'Owned the normalized database design and improved SQLite query performance through indexing.',
    tags: ['Java', 'JavaFX', 'SQLite'],
    period: '2025',
    color: '#b9ceff',
    dark: false,
  },
]

const stack = [
  'Python', 'TypeScript', 'Java', 'JavaScript', 'SQL', 'React Native',
  'Django', 'Kubernetes', 'Docker', 'AWS S3', 'Supabase', 'PostgreSQL',
  'Agentic AI', 'MCP', 'CI/CD', 'REST APIs',
]

const hobbies: Hobby[] = [
  { name: 'Running', detail: 'Road miles and trails whenever I can.' },
  { name: 'Baking', detail: 'Trying new recipes and sharing the results.' },
  { name: 'Bodybuilding', detail: 'Training keeps me consistent and goal-oriented.' },
  { name: 'Reading', detail: 'Fantasy is my favorite way to unwind.' },
  { name: 'Rubik’s cube', detail: 'A small puzzle I keep coming back to.' },
]

function Icon({ name, className = 'size-5' }: { name: IconName; className?: string }) {
  const paths: Record<IconName, ReactNode> = {
    arrow: <><path d="M7 17 17 7" /><path d="M7 7h10v10" /></>,
    github: <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3.3-.4 6.8-1.6 6.8-7A5.4 5.4 0 0 0 19.4 4 5 5 0 0 0 19.3.5S18.2.1 15 1.8a13.4 13.4 0 0 0-7 0C4.8.1 3.7.5 3.7.5A5 5 0 0 0 3.6 4a5.4 5.4 0 0 0-1.4 3.7c0 5.4 3.5 6.6 6.8 7A4.8 4.8 0 0 0 8 18v4" />,
    linkedin: <><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6Z" /><path d="M2 9h4v12H2zM4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" /></>,
    mail: <><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-10 6L2 7" /></>,
    moon: <path d="M21 12.8A9 9 0 1 1 11.2 3 7 7 0 0 0 21 12.8Z" />,
    sun: <><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.42-1.42M17.66 6.34l1.41-1.41" /></>,
  }

  return (
    <svg aria-hidden="true" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      {paths[name]}
    </svg>
  )
}

function Label({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return (
    <span className={`inline-flex self-start items-center gap-2 rounded-full px-3 py-1.5 font-mono text-[10px] font-semibold uppercase tracking-[.14em] ${light ? 'bg-white/12 text-white/80' : 'bg-black/[.06] text-ink/65 dark:bg-white/10 dark:text-white/70'}`}>
      <span className="size-1.5 rounded-full bg-current" />{children}
    </span>
  )
}

function App() {
  const [darkMode, setDarkMode] = useState(() => window.matchMedia('(prefers-color-scheme: dark)').matches)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode)
  }, [darkMode])

  return (
    <div className="min-h-screen bg-cream text-ink transition-colors duration-500 dark:bg-[#1a1c1f] dark:text-[#f5f1ea]">
      <header className="mx-auto flex max-w-7xl items-center justify-between px-5 py-6 sm:px-8 lg:px-10">
        <a href="#top" className="text-lg font-bold tracking-tight">Paul Lee<span className="text-coral">.</span></a>
        <nav className="hidden items-center gap-8 text-sm font-semibold md:flex" aria-label="Main navigation">
          <a href="#about" className="nav-link">About</a>
          <a href="#work" className="nav-link">Work</a>
          <a href="#experience" className="nav-link">Experience</a>
          <a href="#personal" className="nav-link">Personal</a>
          <a href="#reading" className="nav-link">Reading</a>
        </nav>
        <a href="mailto:paullee1606@gmail.com" className="group flex items-center gap-2 rounded-full border border-ink/15 px-4 py-2 text-sm font-semibold transition hover:bg-ink hover:text-white dark:border-white/20 dark:hover:bg-white dark:hover:text-ink">
          Say hello <Icon name="arrow" className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </header>

      <main id="top" className="mx-auto max-w-7xl px-5 pb-24 sm:px-8 lg:px-10">
        <section className="grid items-center gap-8 pb-10 pt-4 sm:pb-14 sm:pt-8 lg:grid-cols-[1fr_1.1fr] lg:gap-12">
          <div>
            <p className="mb-5 font-mono text-xs font-semibold uppercase tracking-[.18em] text-coral">Software engineer · UVA CS · Class of 2028</p>
            <h1 className="font-display text-[clamp(2.5rem,5.5vw,4.75rem)] font-medium leading-[1.04] tracking-[-.02em] text-heading dark:text-[#f5f1ea]">
              Building useful things, <em className="text-coral">thoughtfully.</em>
            </h1>
            <p className="mt-6 max-w-md text-lg leading-8 text-ink/70 dark:text-white/70">I&apos;m Paul, a computer science student exploring the intersection of full-stack products, developer tools, and agentic AI.</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href="#work" className="pill-button bg-ink text-white dark:bg-[#f5f1ea] dark:text-ink">See my work <Icon name="arrow" className="size-4" /></a>
              <a href="/Paul-Lee-Resume.pdf" target="_blank" rel="noreferrer" className="pill-button border border-ink/20 dark:border-white/20">Résumé</a>
            </div>
          </div>
          <img src="/images/snow-day.jpg" alt="Paul, in a white hoodie, and a friend on a mountain road during a snowfall" width={1400} height={1050} fetchPriority="high" className="tile aspect-[4/3] w-full object-cover" />
        </section>

        <section id="about" className="bento-grid scroll-mt-6">
          <article className="tile col-span-full bg-white p-7 dark:bg-[#181818] md:col-span-7 md:p-8 xl:col-span-8">
            <Label>About</Label>
            <div className="mt-6 max-w-3xl">
              <h2 className="font-display text-3xl leading-[1.12] tracking-tight sm:text-4xl">I&apos;m curious about how complex systems work—and how to make them work <em className="text-coral">better for people.</em></h2>
              <p className="mt-4 max-w-2xl leading-7 text-ink/65 dark:text-white/65">At UVA, I study algorithms, systems, compilers, software engineering, and LLMs. I turn those foundations into products for real communities and tools that help engineers move faster.</p>
            </div>
          </article>

          <article className="tile relative col-span-full overflow-hidden bg-coral p-7 text-white md:col-span-5 md:p-8 xl:col-span-4">
            <Label light>Now</Label>
            <div className="absolute -right-12 -top-12 size-56 rounded-full border-[30px] border-white/10" />
            <div className="relative mt-6">
              <p className="font-display text-3xl leading-tight">Seeking a Summer <em>2027</em> software engineering internship.</p>
              <p className="mt-4 text-sm leading-6 text-white/75">Open to teams working on meaningful, technically ambitious products.</p>
            </div>
          </article>

          <a href="https://github.com/paullee564" target="_blank" rel="noreferrer" className="tile group col-span-6 flex min-h-36 flex-col justify-between gap-6 bg-[#1b2332] p-6 text-white md:col-span-3 xl:col-span-3">
            <Icon name="github" className="size-9 transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110" />
            <div><p className="font-mono text-[10px] uppercase tracking-widest text-white/55">Find me on</p><p className="mt-1 font-display text-2xl">GitHub <span className="text-coral">↗</span></p></div>
          </a>

          <a href="https://www.linkedin.com/in/paullee2028" target="_blank" rel="noreferrer" className="tile group col-span-6 flex min-h-36 flex-col justify-between gap-6 bg-[#b9ceff] p-6 text-[#1b2332] md:col-span-3 xl:col-span-3">
            <Icon name="linkedin" className="size-9 transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110" />
            <div><p className="font-mono text-[10px] uppercase tracking-widest opacity-55">Connect on</p><p className="mt-1 font-display text-2xl">LinkedIn <span className="text-coral">↗</span></p></div>
          </a>

          <article className="tile col-span-full flex flex-col bg-butter p-7 text-[#1b2332] md:col-span-6 xl:col-span-6">
            <Label>Stack</Label>
            <h3 className="mt-3 font-display text-2xl">Tools I&apos;m building with.</h3>
            <div className="mt-5 flex flex-wrap gap-2">{stack.map((item) => <span key={item} className="rounded-full bg-black/8 px-3.5 py-2 text-xs font-semibold">{item}</span>)}</div>
          </article>
        </section>

        <section id="work" className="scroll-mt-10 py-14 sm:py-20">
          <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div><p className="section-kicker">Selected work</p><h2 className="font-display text-4xl tracking-tight sm:text-5xl">Projects with <em className="text-coral">purpose.</em></h2></div>
            <p className="max-w-sm text-sm leading-6 text-ink/60 dark:text-white/60">Products shaped around community, usability, and the engineering decisions behind the interface.</p>
          </div>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-12">
            {projects.map((project, index) => (
              <article key={project.title} className={`project-tile group ${index === 0 ? 'xl:col-span-7' : index === 1 ? 'xl:col-span-5' : 'md:col-span-2 xl:col-span-12'}`} style={{ backgroundColor: project.color, color: project.dark ? '#fff' : '#1b2332' }}>
                <div className="flex items-start justify-between gap-6"><span className="font-mono text-[10px] uppercase tracking-widest opacity-60">0{index + 1} · {project.period}</span><span className="grid size-11 shrink-0 place-items-center rounded-full bg-current/10 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"><Icon name="arrow" /></span></div>
                <div className="mt-8"><h3 className="font-display text-3xl leading-tight tracking-tight sm:text-4xl">{project.title}</h3><p className="mt-3 max-w-xl text-base leading-7 opacity-75">{project.description}</p><p className="mt-4 max-w-2xl text-sm leading-6 opacity-60">{project.impact}</p><div className="mt-5 flex flex-wrap gap-2">{project.tags.map((tag) => <span key={tag} className="rounded-full border border-current/20 px-3 py-1.5 font-mono text-[10px] uppercase tracking-wide">{tag}</span>)}</div></div>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="grid scroll-mt-8 gap-5 md:grid-cols-2">
          <article className="tile bg-white p-7 dark:bg-[#181818] sm:p-8">
            <Label>Experience</Label>
            <p className="mt-6 font-mono text-xs uppercase tracking-widest text-coral">May — Aug. 2026</p>
            <h2 className="mt-2 font-display text-3xl">Software Engineer Intern</h2>
            <p className="mt-2 font-semibold">Zeta Associates <span className="font-normal opacity-50">· Lockheed Martin subsidiary</span></p>
            <p className="mt-4 leading-7 text-ink/65 dark:text-white/65">Built autonomous agents for GitLab codebase analysis, Kubernetes diagnostics, and merge-request review. Evaluated agentic AI frameworks for an air-gapped environment.</p>
          </article>
          <article className="tile bg-[#253f53] p-7 text-white sm:p-8">
            <Label light>Education</Label>
            <p className="mt-6 font-mono text-xs uppercase tracking-widest text-[#f4c95d]">2024 — 2028</p>
            <h2 className="mt-2 font-display text-3xl text-white">University of Virginia</h2>
            <p className="mt-2 font-semibold">B.A. Computer Science <span className="font-normal text-white/50">· 3.92 GPA</span></p>
            <p className="mt-4 leading-7 text-white/65">Coursework includes data structures and algorithms, systems, software engineering, compilers, discrete mathematics, and LLMs.</p>
          </article>
        </section>

        <section id="personal" className="scroll-mt-8 py-14 sm:py-20">
          <div className="mb-8 max-w-3xl">
            <p className="section-kicker">Outside the editor</p>
            <h2 className="font-display text-4xl leading-tight tracking-tight sm:text-5xl">
              A life beyond <em className="text-coral">the code.</em>
            </h2>
            <p className="mt-4 max-w-xl text-base leading-7 text-ink/60 dark:text-white/60">
              Outside class, I drive buses for UTS and make time for movement, good food, a challenging puzzle, and a few chapters before bed.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-12">
            <article className="tile grid bg-[#1b2332] text-white sm:col-span-2 sm:grid-cols-[.8fr_1fr] lg:col-span-7">
              <img src="/images/paul-portrait.jpg" alt="Paul in the driver's seat of a UTS bus, turning to smile at the camera" className="aspect-[4/3] size-full object-cover object-top sm:aspect-auto" loading="lazy" />
              <div className="flex flex-col justify-center p-6 sm:p-8">
                <Label light>On the job</Label>
                <h3 className="mt-4 font-display text-3xl leading-tight">Driving for UTS</h3>
                <p className="mt-3 leading-7 text-white/75">
                  I drive a transit bus for University Transit Service, UVA&apos;s bus system, getting students and staff around Grounds safely and on schedule.
                </p>
              </div>
            </article>
            <figure className="tile relative min-h-64 sm:col-span-2 lg:col-span-5">
              <img src="/images/baking.jpg" alt="Freshly baked chocolate-glazed donuts" className="absolute inset-0 size-full object-cover" loading="lazy" />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent px-6 pb-5 pt-16 text-white">
                <span className="font-mono text-[10px] uppercase tracking-widest text-white/70">From the kitchen</span>
                <p className="mt-1 font-display text-2xl">Baking, then sharing.</p>
              </figcaption>
            </figure>
            <figure className="tile relative min-h-56 lg:col-span-4">
              <img src="/images/lake.jpg" alt="A mountain lake framed by evergreens" className="absolute inset-0 size-full object-cover" loading="lazy" />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent px-6 pb-5 pt-16 text-white">
                <span className="font-mono text-[10px] uppercase tracking-widest text-white/70">Out of office</span>
                <p className="mt-1 font-display text-2xl">More time outside.</p>
              </figcaption>
            </figure>
            <figure className="tile relative min-h-56 lg:col-span-3">
              <img src="/images/caving.jpg" alt="A caving trip with a friend" className="absolute inset-0 size-full object-cover" loading="lazy" />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent px-6 pb-5 pt-16 text-white">
                <span className="font-mono text-[10px] uppercase tracking-widest text-white/70">A little adventure</span>
                <p className="mt-1 font-display text-2xl">Always up to explore.</p>
              </figcaption>
            </figure>
            <div className="grid content-center gap-x-6 gap-y-4 border-y border-ink/10 py-5 dark:border-white/10 sm:col-span-2 sm:grid-cols-2 lg:col-span-5">
              {hobbies.map((hobby) => (
                <article key={hobby.name}>
                  <h3 className="font-display text-xl">{hobby.name}</h3>
                  <p className="mt-1 text-sm leading-6 text-ink/60 dark:text-white/60">{hobby.detail}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="reading" className="grid scroll-mt-8 items-center gap-8 border-y border-ink/10 py-10 dark:border-white/10 sm:grid-cols-[auto_1fr] sm:gap-12 sm:py-12">
          <img src="/images/mistborn-cover.jpg" alt="Cover of Mistborn: The Final Empire by Brandon Sanderson" className="mx-auto w-32 rotate-[-2deg] shadow-2xl shadow-black/20 sm:mx-0 sm:w-36" loading="lazy" />
          <div className="max-w-2xl">
            <p className="section-kicker">What I&apos;m reading</p>
            <h2 className="font-display text-3xl leading-tight tracking-tight sm:text-4xl">Mistborn: The Final Empire</h2>
            <p className="mt-2 text-lg text-ink/65 dark:text-white/65">Brandon Sanderson</p>
            <p className="mt-4 max-w-xl leading-7 text-ink/60 dark:text-white/60">A fantasy favorite full of clever world-building, high-stakes plans, and a magic system that rewards close attention.</p>
          </div>
        </section>

        <section className="bento-grid mt-10">
          <a href="mailto:paullee1606@gmail.com" className="tile group col-span-full flex flex-col justify-between gap-8 bg-coral p-7 text-white md:col-span-5 sm:p-8">
            <p className="font-mono text-[10px] uppercase tracking-widest text-white/65">Get in touch</p>
            <div className="flex items-end justify-between gap-5"><p className="font-display text-3xl leading-tight sm:text-4xl">Let&apos;s build something <em>useful.</em></p><Icon name="arrow" className="size-7 shrink-0 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /></div>
          </a>
          <a href="/Paul-Lee-Resume.pdf" target="_blank" rel="noreferrer" className="tile group col-span-full flex items-end justify-between gap-6 bg-white p-7 dark:bg-[#181818] md:col-span-7 sm:p-8">
            <div><p className="font-mono text-[10px] uppercase tracking-widest opacity-50">Résumé · PDF · 1 page</p><p className="mt-3 font-display text-3xl leading-tight sm:text-4xl">The detailed version, <em className="text-coral">printable.</em></p><p className="mt-4 font-mono text-[10px] uppercase tracking-widest opacity-45">Education · Experience · Projects · Skills</p></div>
            <span className="grid size-14 shrink-0 place-items-center rounded-full bg-ink text-white transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 dark:bg-white dark:text-ink"><Icon name="arrow" /></span>
          </a>
        </section>

        <footer className="mt-10 flex flex-col justify-between gap-4 border-t border-ink/10 pt-8 text-xs text-ink/50 dark:border-white/10 dark:text-white/50 sm:flex-row">
          <p>© 2026 Paul Lee · Designed & coded in Charlottesville</p>
          <p>paullee1606@gmail.com</p>
        </footer>
      </main>

      <div className="fixed bottom-5 left-1/2 z-50 -translate-x-1/2">
        <button type="button" onClick={() => setDarkMode((value) => !value)} className="flex items-center gap-1 rounded-full bg-white p-1.5 shadow-xl ring-1 ring-black/5 dark:bg-[#292b2f] dark:ring-white/10" aria-label={`Switch to ${darkMode ? 'light' : 'dark'} mode`}>
          <span className={`rounded-full p-2 transition ${!darkMode ? 'bg-[#edeef2] text-ink' : 'text-white/50'}`}><Icon name="sun" className="size-4" /></span>
          <span className={`rounded-full p-2 transition ${darkMode ? 'bg-[#1a1c1f] text-white' : 'text-ink/40'}`}><Icon name="moon" className="size-4" /></span>
        </button>
      </div>
    </div>
  )
}

export default App
