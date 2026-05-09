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
      className="rounded-2xl border border-slate-200 bg-slate-50 p-6"
      aria-label="Current date and time"
    >
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-600">
        Live Clock
      </p>
      <time
        className="mt-4 block font-mono text-5xl font-semibold tracking-tight text-slate-950 sm:text-6xl"
        dateTime={currentDate.toISOString()}
      >
        {time}
      </time>
      <time
        className="mt-3 block text-base text-slate-600 sm:text-lg"
        dateTime={currentDate.toISOString().slice(0, 10)}
      >
        {date}
      </time>
    </section>
  )
}
