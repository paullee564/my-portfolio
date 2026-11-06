import { hobbies, job, nowReading, onRepeat, photos } from '../content'
import { Icon, StopHeading } from '../components/ui'

export function Life() {
  return (
    <section id="life" aria-labelledby="life-heading" className="scroll-mt-8 pb-16 sm:pb-24">
      <StopHeading number="04" kicker="Outside the editor" id="life-heading">
        A life beyond <em className="text-coral">the code.</em>
      </StopHeading>

      <div className="shell" data-reveal>
        <article className="core grid bg-night text-white sm:h-96 sm:grid-cols-[.8fr_1fr] dark:bg-[#222a3a]">
          <img src={job.photo.src} alt={job.photo.alt} className="aspect-[4/3] size-full object-cover object-[center_25%] sm:aspect-auto sm:h-96" loading="lazy" />
          <div className="textured flex flex-col justify-center p-6 sm:p-10">
            <p className="relative self-start rounded-lg bg-black/40 px-3 py-1.5 font-mono text-[11px] font-bold uppercase tracking-[.14em] text-butter ring-1 ring-white/10">{job.label}</p>
            <h3 className="relative mt-4 font-display text-3xl leading-tight sm:text-4xl">{job.title}</h3>
            <p className="relative mt-3 max-w-[50ch] leading-7 text-white/80">{job.text}</p>
          </div>
        </article>
      </div>

      <ul className="-mx-4 mt-4 flex snap-x snap-mandatory gap-3 overflow-x-auto px-4 pb-2 sm:mx-0 sm:grid sm:grid-cols-3 sm:gap-4 sm:overflow-visible sm:px-0 sm:pb-0" aria-label="Photos">
        {photos.map((photo, index) => (
          <li key={photo.src} className={`w-[78%] shrink-0 snap-start sm:w-auto ${index % 3 === 1 ? 'sm:translate-y-6' : ''}`} data-reveal>
            <figure className="shell">
              <div className="core relative aspect-[4/5]">
                <img src={photo.src} alt={photo.alt} className="absolute inset-0 size-full object-cover transition-transform duration-700 ease-spring hover:scale-105" loading="lazy" />
                {photo.caption && <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent px-5 pb-4 pt-16 font-display text-xl text-white">{photo.caption}</figcaption>}
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
            {nowReading.cover ? (
              <img src={nowReading.cover.src} alt={nowReading.cover.alt} className="w-16 shrink-0 rotate-[-4deg] rounded shadow-[0_12px_20px_-8px_rgb(27_35_50/.6)]" loading="lazy" />
            ) : (
              <span className="grid h-24 w-16 shrink-0 rotate-[-4deg] place-items-center rounded bg-night text-butter shadow-[0_12px_20px_-8px_rgb(27_35_50/.6)]"><Icon name="book" className="size-6" /></span>
            )}
            <div>
              <p className="font-mono text-[11px] font-bold uppercase tracking-[.16em] text-ink/60 dark:text-white/60">Reading</p>
              <h3 className="mt-1 font-display text-xl leading-tight">{nowReading.title}</h3>
              <p className="text-sm text-ink/70 dark:text-white/70">{nowReading.author}</p>
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
              <h3 className="mt-1 font-display text-xl leading-tight">{onRepeat.title}</h3>
              <p className="text-sm text-night/75">{onRepeat.artist}</p>
            </div>
          </div>
          <div className="flex w-14 items-center justify-center border-l-2 border-dashed border-night/25">
            <span className="rotate-90 whitespace-nowrap font-mono text-[10px] font-bold uppercase tracking-[.2em] text-night/60">Admit one</span>
          </div>
        </article>
      </div>
    </section>
  )
}
