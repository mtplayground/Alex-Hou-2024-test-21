import { Clock } from './components/Clock'

const appTitle = import.meta.env.VITE_APP_TITLE?.trim() || 'Alex Hou Clock'

function App() {
  return (
    <main className="flex min-h-screen items-center justify-center px-4 py-8 sm:px-6 lg:px-8">
      <section
        className="w-full max-w-4xl rounded-[2rem] border border-[rgb(var(--color-border))] bg-[rgb(var(--color-panel))/0.9] px-5 py-8 shadow-2xl shadow-slate-950/10 backdrop-blur sm:px-8 sm:py-10 lg:px-12 lg:py-12"
        aria-labelledby="app-title"
      >
        <p className="text-center text-xs font-semibold uppercase tracking-[0.28em] text-[rgb(var(--color-accent))] sm:text-sm">
          Live Clock
        </p>
        <h1
          id="app-title"
          className="mx-auto mt-4 max-w-2xl text-center text-[clamp(2.5rem,8vw,5.5rem)] font-bold leading-none tracking-[-0.06em] text-[rgb(var(--color-text))]"
        >
          {appTitle}
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-center text-[clamp(1rem,2.8vw,1.2rem)] text-[rgb(var(--color-text-muted))]">
          A live clock powered by a custom React hook and formatted with the
          browser&apos;s internationalization APIs.
        </p>
        <div className="mx-auto mt-8 max-w-2xl">
          <Clock />
        </div>
        <p className="mt-6 text-center text-sm text-[rgb(var(--color-text-soft))] sm:text-base">
          Set{' '}
          <code className="font-semibold text-[rgb(var(--color-text-muted))]">
            VITE_APP_TITLE
          </code>{' '}
          in <code className="font-semibold text-slate-700">.env</code> to
          customize the title.
        </p>
      </section>
    </main>
  )
}

export default App
