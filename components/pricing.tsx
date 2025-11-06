import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import { CALENDAR_LINK } from "@/lib/constants"

export function Pricing() {
  return (
    <section id="pricing" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 lg:px-6">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-bold tracking-tight text-slate-900">
            Simple plans that scale with your call volume.
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Starter */}
          <div className="rounded-xl border border-slate-200 bg-white p-8 shadow-sm">
            <h3 className="mb-2 text-2xl font-bold text-slate-900">Starter</h3>
            <div className="mb-4">
              <span className="text-4xl font-bold text-slate-900">$149</span>
              <span className="text-slate-600">/mo</span>
            </div>
            <p className="mb-6 text-sm text-slate-600">Perfect for solo clinics and small teams</p>
            <ul className="mb-8 space-y-3">
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 shrink-0 text-teal-500" />
                <span className="text-sm text-slate-700">200 calls/month</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 shrink-0 text-teal-500" />
                <span className="text-sm text-slate-700">AI answering</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 shrink-0 text-teal-500" />
                <span className="text-sm text-slate-700">Basic booking</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 shrink-0 text-teal-500" />
                <span className="text-sm text-slate-700">Email support</span>
              </li>
            </ul>
            <Button asChild className="w-full bg-teal-500 hover:bg-teal-600">
              <a href={CALENDAR_LINK} target="_blank" rel="noreferrer">
                Get started
              </a>
            </Button>
          </div>

          {/* Growth - Highlighted */}
          <div className="relative rounded-xl border-2 border-teal-500 bg-white p-8 shadow-lg">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-teal-500 px-4 py-1 text-sm font-semibold text-white">
              Most Popular
            </div>
            <h3 className="mb-2 text-2xl font-bold text-slate-900">Growth</h3>
            <div className="mb-4">
              <span className="text-4xl font-bold text-slate-900">$299</span>
              <span className="text-slate-600">/mo</span>
            </div>
            <p className="mb-6 text-sm text-slate-600">For multi-location or medspa</p>
            <ul className="mb-8 space-y-3">
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 shrink-0 text-teal-500" />
                <span className="text-sm text-slate-700">500 calls/month</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 shrink-0 text-teal-500" />
                <span className="text-sm text-slate-700">Custom script</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 shrink-0 text-teal-500" />
                <span className="text-sm text-slate-700">2 integrations</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 shrink-0 text-teal-500" />
                <span className="text-sm text-slate-700">Call analytics</span>
              </li>
            </ul>
            <Button asChild className="w-full bg-teal-500 hover:bg-teal-600">
              <a href={CALENDAR_LINK} target="_blank" rel="noreferrer">
                Book a demo
              </a>
            </Button>
          </div>

          {/* Custom */}
          <div className="rounded-xl border border-slate-200 bg-white p-8 shadow-sm">
            <h3 className="mb-2 text-2xl font-bold text-slate-900">Custom / White-label</h3>
            <div className="mb-4">
              <span className="text-4xl font-bold text-slate-900">Let's talk</span>
            </div>
            <p className="mb-6 text-sm text-slate-600">Run on your stack</p>
            <ul className="mb-8 space-y-3">
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 shrink-0 text-teal-500" />
                <span className="text-sm text-slate-700">Unlimited calls</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 shrink-0 text-teal-500" />
                <span className="text-sm text-slate-700">Custom integrations</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 shrink-0 text-teal-500" />
                <span className="text-sm text-slate-700">Account manager</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 shrink-0 text-teal-500" />
                <span className="text-sm text-slate-700">White-label option</span>
              </li>
            </ul>
            <Button asChild variant="outline" className="w-full bg-transparent">
              <a href="#contact">Talk to us</a>
            </Button>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-slate-600">
            One-time setup available if you want us to connect it to n8n / Zapier / your CRM.
          </p>
        </div>
      </div>
    </section>
  )
}
