import { Button } from "@/components/ui/button"
import { ArrowRight, Phone, Calendar, TrendingUp, Clock } from "lucide-react"
import { CALENDAR_LINK } from "@/lib/constants"
import { KeelWebGL } from "@/components/keel-webgl"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-950">
      {/* Radial gradient glow */}
      <KeelWebGL variant="graph" accent="#14b8a6" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 py-20 sm:py-28 lg:px-6 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: Copy */}
          <div className="flex flex-col justify-center">
            {/* Eyebrow pill */}
            <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white backdrop-blur">
              AI Receptionist for service businesses · 24/7 coverage
            </div>

            <h1 className="text-balance text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
              Turn every missed call into a booked client.
            </h1>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-slate-300 sm:text-xl">
              Keel answers in 2 seconds, speaks in your tone, books to your calendar, and sends SMS/email confirmations
              — without hiring another person.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button asChild size="lg" className="bg-teal-500 text-base hover:bg-teal-600">
                <a href={CALENDAR_LINK} target="_blank" rel="noreferrer">
                  Book a demo
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/20 bg-white/5 text-base text-white hover:bg-white/10"
              >
                <a href="#call-flow">See call flow</a>
              </Button>
            </div>

            {/* Stats trio */}
            <div className="mt-10 grid grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-teal-400">+42%</div>
                <div className="text-xs text-slate-400">Recovered</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-teal-400">3 min</div>
                <div className="text-xs text-slate-400">Avg. response</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-teal-400">24/7</div>
                <div className="text-xs text-slate-400">Human-like AI</div>
              </div>
            </div>
          </div>

          {/* Right: Glass card panel */}
          <div className="relative flex items-center justify-center">
            <div className="relative w-full">
              {/* Glass card with ring and blur */}
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-xl ring-1 ring-white/5">
                {/* Live call card */}
                <div className="mb-4 rounded-lg border border-teal-500/20 bg-teal-500/10 p-4 backdrop-blur">
                  <div className="mb-3 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-teal-500">
                        <Phone className="h-4 w-4 text-white" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold uppercase tracking-wide text-teal-400">Incoming call</div>
                        <div className="text-sm text-slate-300">(555) 123-4567</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="h-2 w-2 animate-pulse rounded-full bg-teal-400" />
                      <span className="text-xs font-medium text-teal-400">Live</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <div className="mt-1 h-2 w-2 rounded-full bg-slate-400" />
                      <div className="text-sm text-slate-300">"Hi, I'd like to book a consultation"</div>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="mt-1 h-2 w-2 rounded-full bg-teal-400" />
                      <div className="text-sm font-medium text-white">"I can help with that. What day works best?"</div>
                    </div>
                  </div>
                </div>

                {/* Booking confirmation */}
                <div className="mb-4 flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 p-4 backdrop-blur">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-teal-500">
                    <Calendar className="h-5 w-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-semibold text-white">Booked: 3:30 PM</div>
                    <div className="text-xs text-slate-400">with confirmation note</div>
                  </div>
                </div>

                {/* Mini stats row */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-lg border border-white/10 bg-white/5 p-3 backdrop-blur">
                    <div className="flex items-center gap-2">
                      <TrendingUp className="h-4 w-4 text-teal-400" />
                      <div className="text-xs font-medium text-slate-400">Conversion</div>
                    </div>
                    <div className="mt-1 text-xl font-bold text-white">87%</div>
                  </div>
                  <div className="rounded-lg border border-white/10 bg-white/5 p-3 backdrop-blur">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-teal-400" />
                      <div className="text-xs font-medium text-slate-400">Response</div>
                    </div>
                    <div className="mt-1 text-xl font-bold text-white">2s</div>
                  </div>
                </div>

                {/* Secondary link button */}
                <div className="mt-4 text-center">
                  <a href="#contact" className="text-sm font-medium text-teal-400 hover:text-teal-300">
                    Send to my CRM →
                  </a>
                </div>
              </div>

              {/* Glow effect */}
              <div className="absolute -inset-4 -z-10 rounded-2xl bg-gradient-to-br from-teal-500/20 to-transparent blur-3xl" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade to light body */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-slate-50" />
    </section>
  )
}
