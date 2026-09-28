function App() {
  const targetRole: string = 'Software Engineering Intern'

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 px-6 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <section className="max-w-2xl text-center">
        <p className="mb-3 font-medium text-indigo-600 dark:text-indigo-400">
          Portfolio setup complete
        </p>

        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            Paul Lee
        </h1>

        <p className="mt-5 text-lg text-slate-600 dark:text-slate-300">
          Aspiring {targetRole} building thoughtful, reliable software.
        </p>

        <button
          type="button"
          className="mt-8 rounded-lg bg-indigo-600 px-5 py-3 font-medium text-white transition hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          View my work
        </button>
      </section>
    </main>
  )
}

export default App