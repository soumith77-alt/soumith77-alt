export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-12 lg:px-6">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div>
            <span className="text-2xl font-bold tracking-tight text-slate-900">Keel</span>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <a href="#" className="text-slate-600 hover:text-slate-900">
              Privacy
            </a>
            <a href="#" className="text-slate-600 hover:text-slate-900">
              Terms
            </a>
          </div>
        </div>

        <div className="mt-8 text-center text-sm text-slate-600">
          <p>&copy; {new Date().getFullYear()} Keel AI Receptionist</p>
        </div>
      </div>
    </footer>
  )
}
