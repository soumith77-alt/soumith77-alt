import { CheckCircle2, PhoneOff, Clock, MessageSquareOff, PhoneMissed } from "lucide-react"

export function ProblemSolution() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 lg:px-6">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left: Problems */}
          <div>
            <h2 className="mb-8 text-3xl font-bold text-slate-900">Why businesses lose leads</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-4 rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-red-50">
                  <PhoneOff className="h-5 w-5 text-red-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">Calls outside business hours</h3>
                  <p className="mt-1 text-sm text-slate-600">Most leads call when you're closed</p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-red-50">
                  <PhoneMissed className="h-5 w-5 text-red-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">Front desk is already on another call</h3>
                  <p className="mt-1 text-sm text-slate-600">Can't handle multiple calls at once</p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-red-50">
                  <MessageSquareOff className="h-5 w-5 text-red-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">No structured follow-up</h3>
                  <p className="mt-1 text-sm text-slate-600">Leads slip through the cracks</p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-red-50">
                  <Clock className="h-5 w-5 text-red-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">Leads forget to call back</h3>
                  <p className="mt-1 text-sm text-slate-600">They move on to your competitor</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Solutions */}
          <div>
            <h2 className="mb-8 text-3xl font-bold text-slate-900">What Keel does instead</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-4 rounded-xl border border-teal-200 bg-teal-50/50 p-5 shadow-sm">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-teal-500">
                  <CheckCircle2 className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">Answers every call in under 2 seconds</h3>
                  <p className="mt-1 text-sm text-slate-700">24/7 coverage, no wait times</p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-xl border border-teal-200 bg-teal-50/50 p-5 shadow-sm">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-teal-500">
                  <CheckCircle2 className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">Speaks in your script and tone</h3>
                  <p className="mt-1 text-sm text-slate-700">Customized to your brand voice</p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-xl border border-teal-200 bg-teal-50/50 p-5 shadow-sm">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-teal-500">
                  <CheckCircle2 className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">Books straight into your calendar/software</h3>
                  <p className="mt-1 text-sm text-slate-700">Automatic scheduling and syncing</p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-xl border border-teal-200 bg-teal-50/50 p-5 shadow-sm">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-teal-500">
                  <CheckCircle2 className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">Sends SMS/email confirmations right away</h3>
                  <p className="mt-1 text-sm text-slate-700">Instant follow-up, every time</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
