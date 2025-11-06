import { Button } from "@/components/ui/button"
import { FileText, GitBranch, TrendingUp } from "lucide-react"

export function Resources() {
  return (
    <section id="resources" className="py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 lg:px-6">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-bold tracking-tight text-slate-900">
            We don't just sell AI. We make it work in your business.
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-teal-100">
              <FileText className="h-6 w-6 text-teal-600" />
            </div>
            <h3 className="mb-2 text-lg font-bold text-slate-900">Playbook: Stop losing leads</h3>
            <p className="mb-4 text-sm text-slate-600">How to stop losing leads to missed calls</p>
            <Button variant="outline" size="sm">
              View resource
            </Button>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-teal-100">
              <GitBranch className="h-6 w-6 text-teal-600" />
            </div>
            <h3 className="mb-2 text-lg font-bold text-slate-900">Automation map</h3>
            <p className="mb-4 text-sm text-slate-600">From call → booking → CRM → SMS</p>
            <Button variant="outline" size="sm">
              View resource
            </Button>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-teal-100">
              <TrendingUp className="h-6 w-6 text-teal-600" />
            </div>
            <h3 className="mb-2 text-lg font-bold text-slate-900">Case study</h3>
            <p className="mb-4 text-sm text-slate-600">42% more booked med spa appointments in 14 days</p>
            <Button variant="outline" size="sm">
              View resource
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
