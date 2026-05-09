import { Clock } from './components/Clock'

const appTitle = import.meta.env.VITE_APP_TITLE?.trim() || 'Alex Hou Clock'

function App() {
  return (
    <main className="grid min-h-screen place-items-center p-8">
      <section
        className="w-full max-w-2xl rounded-2xl border border-slate-200 bg-white p-8 shadow-xl shadow-slate-900/5"
        aria-labelledby="app-title"
      >
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-600">
          Tailwind Ready
        </p>
        <h1
          id="app-title"
          className="mt-3 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl"
        >
          {appTitle}
        </h1>
        <p className="mt-4 text-base text-slate-700">
          A live clock powered by a custom React hook and formatted with the
          browser&apos;s internationalization APIs.
        </p>
        <div className="mt-6">
          <Clock />
        </div>
        <div className="mt-6 inline-flex rounded-full bg-sky-100 px-4 py-2 text-sm font-medium text-sky-700">
          Set <code className="font-semibold">VITE_APP_TITLE</code> in{' '}
          <code className="font-semibold">.env</code> to customize the title.
        </div>
      </section>
    </main>
  )
}

export default App
