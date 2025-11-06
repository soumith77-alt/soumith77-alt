import { Check, X } from "lucide-react"

export function Comparison() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 lg:px-6">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-bold tracking-tight text-slate-900">
            AI receptionist vs hiring another front-desk person
          </h2>
        </div>

        <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">Feature</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-teal-700">Keel AI</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-slate-900">Human Staff</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr>
                  <td className="px-6 py-4 font-medium text-slate-900">Availability</td>
                  <td className="px-6 py-4 text-center">
                    <div className="flex items-center justify-center gap-2">
                      <Check className="h-5 w-5 text-teal-600" />
                      <span className="font-medium text-slate-900">24/7</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <div className="flex items-center justify-center gap-2">
                      <X className="h-5 w-5 text-slate-400" />
                      <span className="text-slate-600">8 hours</span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-slate-900">Cost</td>
                  <td className="px-6 py-4 text-center">
                    <div className="flex items-center justify-center gap-2">
                      <Check className="h-5 w-5 text-teal-600" />
                      <span className="font-medium text-slate-900">from $149/mo</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <div className="flex items-center justify-center gap-2">
                      <X className="h-5 w-5 text-slate-400" />
                      <span className="text-slate-600">$2,500+/mo</span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-slate-900">Speed</td>
                  <td className="px-6 py-4 text-center">
                    <div className="flex items-center justify-center gap-2">
                      <Check className="h-5 w-5 text-teal-600" />
                      <span className="font-medium text-slate-900">answers in 2s</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <div className="flex items-center justify-center gap-2">
                      <X className="h-5 w-5 text-slate-400" />
                      <span className="text-slate-600">depends</span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-slate-900">Follow-ups</td>
                  <td className="px-6 py-4 text-center">
                    <div className="flex items-center justify-center gap-2">
                      <Check className="h-5 w-5 text-teal-600" />
                      <span className="font-medium text-slate-900">automatic</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <div className="flex items-center justify-center gap-2">
                      <X className="h-5 w-5 text-slate-400" />
                      <span className="text-slate-600">manual</span>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}
