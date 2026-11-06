import { projects } from '../content'
import { ProjectVisual } from '../components/ProjectVisual'
import { StopHeading } from '../components/ui'

export function Work() {
  return (
    <section id="work" aria-labelledby="work-heading" className="scroll-mt-8 pb-16 sm:pb-24">
      <StopHeading number="02" kicker="Selected work" id="work-heading">
        Projects with <em className="text-coral">purpose.</em>
      </StopHeading>
      <div className="grid gap-4 md:grid-cols-2">
        {projects.map((project, index) => (
          <div key={project.title} className={`shell group ${project.featured ? 'md:col-span-2' : ''}`} data-reveal>
            <article className={`core project-tile textured grid h-full gap-6 ${project.featured ? 'lg:grid-cols-[1.15fr_.85fr] lg:items-center lg:gap-10' : ''}`} style={{ background: project.background, color: project.dark ? '#fff' : '#1b2332' }}>
              <span className="pointer-events-none absolute -right-2 -top-8 select-none font-display text-[9rem] leading-none opacity-[.07] sm:text-[12rem]" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
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
                <ProjectVisual visual={project.visual} dark={project.dark} />
              </div>
            </article>
          </div>
        ))}
      </div>
    </section>
  )
}
