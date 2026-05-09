import { useClock } from '../hooks/useClock'

const timeFormatter = new Intl.DateTimeFormat('en-US', {
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
  hour12: false,
})

const dateFormatter = new Intl.DateTimeFormat('en-US', {
  weekday: 'long',
  month: 'long',
  day: 'numeric',
  year: 'numeric',
})

export function Clock() {
  const currentDate = useClock()
  const time = timeFormatter.format(currentDate)
  const date = dateFormatter.format(currentDate)

  return (
    <section
      className="rounded-[1.75rem] border border-[rgb(var(--color-border))] bg-[rgb(var(--color-panel-muted))] px-4 py-6 text-center shadow-inner shadow-white/10 sm:px-6 sm:py-8"
      aria-label="Current date and time"
    >
      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[rgb(var(--color-accent))] sm:text-sm">
        Current Time
      </p>
      <time
        className="mt-4 block font-mono text-[clamp(2.75rem,12vw,6.5rem)] font-semibold leading-none tracking-[-0.06em] text-[rgb(var(--color-text))]"
        dateTime={currentDate.toISOString()}
      >
        {time}
      </time>
      <time
        className="mt-4 block text-[clamp(1rem,3vw,1.35rem)] text-[rgb(var(--color-text-muted))]"
        dateTime={currentDate.toISOString().slice(0, 10)}
      >
        {date}
      </time>
    </section>
  )
}
