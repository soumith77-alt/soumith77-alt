"use client"

import { useState } from "react"
import { Sparkles, Stethoscope, Dumbbell, Building2, Home, Activity, UtensilsCrossed } from "lucide-react"

export function Industries() {
  const [activeIndustry, setActiveIndustry] = useState(0)

  const industries = [
    {
      icon: Sparkles,
      name: "Med Spa",
      description: "Stop losing patients to after-hours calls.",
    },
    {
      icon: Stethoscope,
      name: "Dental",
      description: "Send intake form right after the call.",
    },
    {
      icon: Dumbbell,
      name: "Physiotherapy / Pilates",
      description: "Book sessions and send class schedules automatically.",
    },
    {
      icon: Building2,
      name: "Real Estate",
      description: "Route VIP or repeat clients differently.",
    },
    {
      icon: Activity,
      name: "Clinics",
      description: "Handle appointment scheduling and patient inquiries 24/7.",
    },
    {
      icon: Home,
      name: "Home Services",
      description: "Capture service requests and schedule appointments instantly.",
    },
    {
      icon: UtensilsCrossed,
      name: "Restaurants",
      description: "Capture phone-in orders, reservations, and missed calls automatically.",
    },
  ]

  return (
    <section id="industries" className="py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 lg:px-6">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-bold tracking-tight text-slate-900">
            Built for high-intent, high-lead businesses.
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          {industries.map((industry, index) => (
            <button
              key={index}
              onClick={() => setActiveIndustry(index)}
              className={`flex items-center gap-2 rounded-full border px-5 py-3 text-sm font-medium transition-all ${
                activeIndustry === index
                  ? "border-teal-500 bg-teal-50 text-teal-700"
                  : "border-slate-200 bg-white text-slate-700 hover:border-slate-300"
              }`}
            >
              <industry.icon className="h-4 w-4" />
              {industry.name}
            </button>
          ))}
        </div>

        <div className="mt-8 text-center">
          <div className="rounded-xl border border-teal-200 bg-teal-50/50 p-6">
            <p className="text-lg font-medium text-slate-900">{industries[activeIndustry].description}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
