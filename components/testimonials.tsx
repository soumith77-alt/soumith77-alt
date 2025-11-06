import { Star } from "lucide-react"

export function Testimonials() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 lg:px-6">
        <div className="mb-12 text-center">
          <div className="mb-4 flex items-center justify-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-6 w-6 fill-teal-500 text-teal-500" />
            ))}
            <span className="ml-2 text-lg font-semibold text-slate-900">4.9/5</span>
          </div>
          <h2 className="text-4xl font-bold tracking-tight text-slate-900">What our clients say</h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-xl border border-slate-200 bg-white p-8 shadow-sm">
            <div className="mb-4 flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-teal-500 text-teal-500" />
              ))}
            </div>
            <blockquote className="mb-6 text-lg text-slate-700">
              "We plugged Keel in and the front desk finally stopped panicking."
            </blockquote>
            <div className="text-sm">
              <div className="font-semibold text-slate-900">Clinic owner</div>
              <div className="text-slate-600">California</div>
            </div>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-8 shadow-sm">
            <div className="mb-4 flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-teal-500 text-teal-500" />
              ))}
            </div>
            <blockquote className="mb-6 text-lg text-slate-700">
              "We thought AI would feel robotic, but this actually sounds professional."
            </blockquote>
            <div className="text-sm">
              <div className="font-semibold text-slate-900">Med spa founder</div>
              <div className="text-slate-600">New York</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
