import { facts, profile, stackGroups } from '../content'
import { ArrowBadge, Icon, StopHeading } from '../components/ui'

export function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="scroll-mt-8 pb-16 sm:pb-24">
      <StopHeading number="01" kicker="About" id="about-heading">
        Curious about how complex systems work, and how to make them <em className="text-coral">better for people.</em>
      </StopHeading>
      <div className="grid gap-6 md:grid-cols-12" data-reveal>
        <p className="max-w-[60ch] text-pretty text-lg leading-8 text-ink/75 md:col-span-7 dark:text-white/75">{profile.about}</p>
        <div className="flex flex-wrap items-start gap-3 md:col-span-5 md:justify-end">
          <a href={profile.github} target="_blank" rel="noreferrer" className="pill-button group bg-night py-2 pl-5 pr-2 text-white dark:bg-white/10"><Icon name="github" className="size-4" />GitHub <ArrowBadge /></a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="pill-button group bg-white py-2 pl-5 pr-2 ring-1 ring-ink/10 dark:bg-white/5 dark:ring-white/15"><Icon name="linkedin" className="size-4" />LinkedIn <ArrowBadge tone="dark" /></a>
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
  )
}
