import { education, roles } from '../content'
import { StopHeading } from '../components/ui'

export function Experience() {
  const [lead, ...others] = roles

  return (
    <section id="experience" aria-labelledby="experience-heading" className="scroll-mt-8 pb-16 sm:pb-24">
      <StopHeading number="03" kicker="Experience" id="experience-heading">
        Where I&apos;ve <em className="text-coral">shipped.</em>
      </StopHeading>
      <div className="grid gap-5 lg:grid-cols-12">
        {lead && (
          <div className="shell lg:col-span-8" data-reveal>
            <article className="core h-full bg-white p-6 sm:p-8 dark:bg-[#222a3a]">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-display text-3xl tracking-tight">{lead.title}</h3>
                <p className="rounded-full bg-coral/10 px-3 py-1 font-mono text-[11px] font-bold uppercase tracking-widest text-[#c9482c] dark:text-coral">{lead.period}</p>
              </div>
              <p className="mt-1 font-semibold">{lead.company}{lead.companyNote && <span className="font-normal text-ink/60 dark:text-white/60"> · {lead.companyNote}</span>}</p>
              <p className="mt-4 max-w-[60ch] leading-7 text-ink/75 dark:text-white/75">{lead.summary}</p>
              {lead.results && (
                <dl className="mt-7 grid gap-3 sm:grid-cols-2">
                  {lead.results.map((result) => (
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
              )}
            </article>
          </div>
        )}
        <div className="grid gap-5 lg:col-span-4">
          {others.map((role) => (
            <div key={`${role.company}-${role.title}`} className="shell" data-reveal>
              <article className="core textured h-full bg-night p-6 text-white sm:p-7 dark:bg-[#222a3a]">
                <p className="relative font-mono text-[11px] font-bold uppercase tracking-widest text-butter">{role.period}</p>
                <h3 className="relative mt-2 font-display text-2xl">{role.title}</h3>
                <p className="relative mt-1 font-semibold">{role.company}</p>
                <p className="relative mt-3 text-sm leading-6 text-white/75">{role.summary}</p>
              </article>
            </div>
          ))}
          <div className="shell" data-reveal>
            <article className="core textured h-full p-6 text-night sm:p-7" style={{ background: 'linear-gradient(155deg, #d3defd 0%, #aec2f6 100%)' }}>
              <p className="relative font-mono text-[11px] font-bold uppercase tracking-widest text-night/70">{education.period}</p>
              <h3 className="relative mt-2 font-display text-2xl">{education.school}</h3>
              <p className="relative mt-1 font-semibold">{education.degree}</p>
              <p className="relative mt-3 text-sm leading-6 text-night/75">{education.summary}</p>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}
