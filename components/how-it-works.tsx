import { Phone, Bot, Calendar, Zap } from "lucide-react"
import { CALENDAR_LINK } from "@/lib/constants"

export function HowItWorks() {
  return (
    <section id="call-flow" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 lg:px-6">
        <div className="mb-4 text-center">
          <h2 className="mb-4 text-4xl font-bold tracking-tight text-slate-900">How Keel plugs into your business</h2>
          <p className="text-lg text-slate-600">
            No number change. We wrap around your existing calls, answer in your script, and push data to your tools.
          </p>
        </div>

        {/* Top-right link */}
        <div className="mb-8 text-right">
          <a
            href={CALENDAR_LINK}
            target="_blank"
            rel="noreferrer"
            className="text-sm font-medium text-teal-600 hover:text-teal-700"
          >
            Book a setup call →
          </a>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Step 1 */}
          <div className="relative rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="absolute -top-4 left-6 flex h-8 w-8 items-center justify-center rounded-full bg-teal-500 text-sm font-bold text-white">
              1
            </div>
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-slate-100">
              <Phone className="h-6 w-6 text-slate-700" />
            </div>
            <h3 className="mb-2 font-bold text-slate-900">Caller dials in</h3>
            <p className="text-sm text-slate-600">Phone call or message comes in</p>
          </div>

          {/* Step 2 */}
          <div className="relative rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="absolute -top-4 left-6 flex h-8 w-8 items-center justify-center rounded-full bg-teal-500 text-sm font-bold text-white">
              2
            </div>
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-teal-100">
              <Bot className="h-6 w-6 text-teal-600" />
            </div>
            <h3 className="mb-2 font-bold text-slate-900">AI answers (under 2s, your tone, your FAQs)</h3>
            <p className="text-sm text-slate-600">Speaks in your script and tone</p>
          </div>

          {/* Step 3 */}
          <div className="relative rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="absolute -top-4 left-6 flex h-8 w-8 items-center justify-center rounded-full bg-teal-500 text-sm font-bold text-white">
              3
            </div>
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-slate-100">
              <Calendar className="h-6 w-6 text-slate-700" />
            </div>
            <h3 className="mb-2 font-bold text-slate-900">Book / route (calendar or human handoff)</h3>
            <p className="text-sm text-slate-600">Synced to your calendar instantly</p>
          </div>

          {/* Step 4 */}
          <div className="relative rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="absolute -top-4 left-6 flex h-8 w-8 items-center justify-center rounded-full bg-teal-500 text-sm font-bold text-white">
              4
            </div>
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-slate-100">
              <Zap className="h-6 w-6 text-slate-700" />
            </div>
            <h3 className="mb-2 font-bold text-slate-900">Sync (CRM / WhatsApp / Email / n8n / Zapier)</h3>
            <p className="text-sm text-slate-600">Data pushed to your tools</p>
          </div>
        </div>
      </div>
    </section>
  )
}
