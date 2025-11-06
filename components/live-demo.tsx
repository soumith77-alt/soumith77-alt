import { Button } from "@/components/ui/button"
import { Play, GitBranch } from "lucide-react"

export function LiveDemo() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 lg:px-6">
        <div className="grid gap-8 md:grid-cols-2">
          {/* Listen to sample call */}
          <div className="rounded-xl border border-slate-200 bg-gradient-to-br from-teal-50 to-white p-8 shadow-sm">
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-teal-500">
              <Play className="h-7 w-7 text-white" />
            </div>
            <h3 className="mb-3 text-2xl font-bold text-slate-900">Listen to a sample call</h3>
            <p className="mb-6 text-slate-600">
              Hear how Keel handles real customer inquiries with natural conversation.
            </p>
            <Button className="bg-teal-500 hover:bg-teal-600">
              <Play className="mr-2 h-4 w-4" />
              Play sample AI call
            </Button>
            <p className="mt-4 text-sm text-slate-600">We match your tone, domain, and FAQs.</p>
          </div>

          {/* See the workflow */}
          <div className="rounded-xl border border-slate-200 bg-white p-8 shadow-sm">
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-slate-100">
              <GitBranch className="h-7 w-7 text-slate-700" />
            </div>
            <h3 className="mb-3 text-2xl font-bold text-slate-900">See the workflow</h3>
            <p className="mb-6 text-slate-600">Understand how calls flow through intent detection to booking.</p>
            <div className="space-y-3 rounded-lg bg-slate-50 p-4 text-sm">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-teal-500" />
                <span className="text-slate-700">Incoming call</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-teal-500" />
                <span className="text-slate-700">Intent detection (new lead, existing client, reschedule)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-teal-500" />
                <span className="text-slate-700">Output (book, SMS, email, CRM sync)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
