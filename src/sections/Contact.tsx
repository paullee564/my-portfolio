import { profile } from '../content'
import { ArrowBadge, Icon, StopHeading } from '../components/ui'

export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-heading" className="scroll-mt-8">
      <StopHeading number="05" kicker="End of the line" id="contact-heading">
        Let&apos;s build something <em className="text-coral">useful.</em>
      </StopHeading>
      <div className="shell" data-reveal>
        <div className="core textured flex flex-col gap-4 p-4 text-white sm:flex-row sm:items-center sm:justify-between sm:p-5" style={{ background: 'linear-gradient(155deg, #ef8466 0%, #e05a3c 100%)' }}>
          <a href={`mailto:${profile.email}`} className="group relative flex min-w-0 items-center gap-3">
            <span className="grid size-11 shrink-0 place-items-center rounded-full bg-white/20"><Icon name="mail" className="size-5" /></span>
            <span className="min-w-0">
              <span className="block font-mono text-[10px] font-bold uppercase tracking-[.2em] text-white/80">Email me</span>
              <span className="link-underline block truncate font-display text-xl sm:text-2xl">{profile.email}</span>
            </span>
          </a>
          <a href={profile.resume} target="_blank" rel="noreferrer" className="pill-button group relative justify-between bg-white py-2 pl-5 pr-2 text-night sm:justify-start">Résumé · PDF <ArrowBadge tone="dark" /></a>
        </div>
      </div>
    </section>
  )
}
