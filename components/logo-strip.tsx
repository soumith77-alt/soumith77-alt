export function LogoStrip() {
  const industries = ["Med spa", "Dental", "Clinics", "Home services", "Restaurants"]

  return (
    <section className="border-b border-slate-200 bg-white py-8">
      <div className="mx-auto max-w-6xl px-4 lg:px-6">
        <div className="flex flex-wrap items-center justify-center gap-3">
          {industries.map((industry) => (
            <div
              key={industry}
              className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700"
            >
              {industry}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
