import { profile } from '../content'
import { ArrowBadge } from '../components/ui'

export function Hero() {
  const photo = profile.heroPhoto
  return (
    <section className="grid gap-10 pb-16 pt-6 sm:pt-10 lg:grid-cols-[1.15fr_.85fr] lg:items-center lg:gap-14 lg:pb-24">
      <div data-reveal>
        <div className="mb-8 inline-flex max-w-full items-center gap-3 rounded-xl bg-night px-4 py-2.5 font-mono text-xs font-bold uppercase tracking-[.14em] text-butter shadow-[0_12px_30px_-12px_rgb(27_35_50/.6),inset_0_1px_0_rgb(255_255_255/.1)] sm:text-sm dark:bg-white/8 dark:ring-1 dark:ring-white/15">
          <span className="size-2 shrink-0 animate-pulse rounded-full bg-coral" />
          <span className="truncate">Next stop · <span className="sm:hidden">{profile.nextStop.short}</span><span className="hidden sm:inline">{profile.nextStop.long}</span></span>
        </div>
        <h1 className="text-balance font-display text-[clamp(3rem,9vw,5.75rem)] font-medium leading-[.95] tracking-[-.03em] text-heading dark:text-paper">
          Building useful things, <em className="text-coral">thoughtfully.</em>
        </h1>
        <p className="mt-7 max-w-md text-pretty text-lg leading-8 text-ink/75 dark:text-white/75">{profile.intro}</p>
        <div className="mt-9 flex flex-wrap items-center gap-3">
          <a href="#work" className="pill-button group bg-coral py-2 pl-6 pr-2 text-white shadow-[0_14px_30px_-12px_rgb(233_106_78/.7)]">See my work <ArrowBadge /></a>
          <a href={profile.resume} target="_blank" rel="noreferrer" className="link-underline px-3 py-2 text-sm font-bold">Download résumé</a>
        </div>
      </div>
      <div className="relative mx-auto w-full max-w-md lg:max-w-none" data-reveal>
        <div className="dots-butter absolute -inset-3 rotate-3 rounded-[2.4rem] sm:-inset-4" aria-hidden="true" />
        <div className="relative rounded-[2rem] bg-white/50 p-2 shadow-[0_40px_80px_-30px_rgb(27_35_50/.5)] ring-1 ring-white/60 dark:bg-white/10 dark:ring-white/10">
          <img src={photo.src} alt={photo.alt} width={photo.width} height={photo.height} fetchPriority="high" className="aspect-[4/5] w-full rounded-[1.6rem] object-cover object-[center_30%]" />
        </div>
        <p className="absolute -bottom-6 -left-3 grid size-28 rotate-[-10deg] place-items-center rounded-full bg-coral p-3 text-center font-mono text-[10px] font-bold uppercase leading-tight tracking-wider text-white shadow-[0_18px_30px_-10px_rgb(233_106_78/.7),inset_0_2px_0_rgb(255_255_255/.25)] ring-4 ring-cream sm:size-32 sm:text-[11px] dark:ring-night">
          {profile.sticker}
        </p>
      </div>
    </section>
  )
}
