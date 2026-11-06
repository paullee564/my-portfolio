import type { ProjectVisual as Visual } from '../content'

/* Picks the illustration for a project card from its `visual.kind`. */
export function ProjectVisual({ visual, dark }: { visual: Visual; dark: boolean }) {
  switch (visual.kind) {
    case 'factsLabel':
      return <FactsLabel {...visual} />
    case 'phone':
      return <PhoneSketch stickers={visual.stickers} />
    case 'cards':
      return <StepCards steps={visual.steps} highlight={visual.highlight} />
    case 'steps':
      return <StepChips steps={visual.steps} dark={dark} />
  }
}

/* Styled like a food nutrition label. */
function FactsLabel({ title, subtitle, rows, meter, footnote }: Extract<Visual, { kind: 'factsLabel' }>) {
  return (
    <div className="mx-auto w-full max-w-sm rotate-[1.5deg] border-2 border-night bg-white p-4 font-sans text-night shadow-[0_24px_40px_-20px_rgb(27_35_50/.6)] transition-transform duration-700 ease-spring group-hover:rotate-0">
      <p className="font-display text-3xl font-semibold leading-none tracking-tight">{title}</p>
      <p className="mt-1 border-b-[10px] border-night pb-1.5 text-xs">{subtitle}</p>
      <p className="border-b-4 border-night py-1 text-xs font-bold">Amount per serving</p>
      {rows.map(([label, value]) => (
        <p key={label} className="flex justify-between gap-4 border-b border-night/40 py-1.5 text-sm"><span className="font-bold">{label}</span><span className="text-right">{value}</span></p>
      ))}
      {meter && (
        <div className="flex items-center justify-between gap-4 border-b-[6px] border-night py-1.5 text-sm">
          <span className="font-bold">{meter.label}</span>
          <span className="flex items-center gap-2"><span className="h-2 w-16 overflow-hidden rounded-full bg-night/15"><span className="block h-full bg-coral" style={{ width: `${meter.percent}%` }} /></span>{meter.percent}%</span>
        </div>
      )}
      {footnote && <p className="pt-1.5 text-[10px] leading-4 text-night/70">{footnote}</p>}
    </div>
  )
}

/* A wireframe phone: shapes only, no invented profiles. */
function PhoneSketch({ stickers }: { stickers: [string, string] }) {
  return (
    <div className="relative mx-auto flex h-64 w-full max-w-xs items-end justify-center" aria-hidden="true">
      <div className="absolute bottom-8 left-4 z-10 rotate-[-8deg] rounded-2xl bg-white/70 px-3 py-2 font-mono text-[10px] font-bold uppercase tracking-widest shadow-lg">{stickers[0]}</div>
      <div className="absolute bottom-24 right-4 z-10 rotate-[6deg] rounded-2xl bg-night px-3 py-2 font-mono text-[10px] font-bold uppercase tracking-widest text-butter shadow-lg">{stickers[1]}</div>
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

/* Offset notification cards that line up on hover. */
function StepCards({ steps, highlight }: { steps: string[]; highlight?: number }) {
  const offsets = ['', 'translate-x-4', 'translate-x-8', 'translate-x-12']
  return (
    <ol className="mx-auto w-full max-w-xs space-y-2">
      {steps.map((step, index) => (
        <li key={step} className={`flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-semibold shadow-[inset_0_1px_0_rgb(255_255_255/.12)] ring-1 ring-white/10 transition-transform duration-700 ease-spring group-hover:translate-x-0 ${index === highlight ? 'bg-butter text-night' : 'bg-white/10'} ${offsets[index] ?? offsets[offsets.length - 1]}`}>
          <span className="grid size-6 shrink-0 place-items-center rounded-full bg-current/15 font-mono text-[10px]">{index + 1}</span>
          {step}
        </li>
      ))}
    </ol>
  )
}

/* The default: numbered chips joined by arrows. */
function StepChips({ steps, dark }: { steps: string[]; dark: boolean }) {
  return (
    <ol className={`flex flex-wrap items-center gap-2 rounded-[1.25rem] p-5 ${dark ? 'bg-white/8' : 'bg-white/60'}`}>
      {steps.map((step, index) => (
        <li key={step} className="flex items-center gap-2 text-sm font-semibold">
          {index > 0 && <span aria-hidden="true" className="opacity-50">→</span>}
          <span className={`grid size-6 place-items-center rounded-full border-2 font-mono text-[10px] ${dark ? 'border-butter text-butter' : 'border-night'}`}>{index + 1}</span>
          {step}
        </li>
      ))}
    </ol>
  )
}
