import { Phone, PhoneCall, Calendar, MessageSquare, Zap, GitBranch, BarChart3, Voicemail, Users } from "lucide-react"

export function Features() {
  const features = [
    {
      icon: Phone,
      title: "24/7 AI Call Answering",
      description: "Natural voice, multilingual, follows your script perfectly",
    },
    {
      icon: PhoneCall,
      title: "Missed Call → Instant Callback",
      description: "Call back in 30–60 seconds, never lose a hot lead",
    },
    {
      icon: Calendar,
      title: "Appointment Booking",
      description: "Integrates with Calendly, Google Calendar, or custom systems",
    },
    {
      icon: MessageSquare,
      title: "Lead Capture & Nurture",
      description: "SMS/email follow-up sequences on autopilot",
    },
    {
      icon: Zap,
      title: "CRM & Tool Integrations",
      description: "Zapier, n8n, Make, HubSpot, Pipedrive — all supported",
    },
    {
      icon: GitBranch,
      title: "Custom Call Flows",
      description: "Sales, support, routing by department or priority",
    },
    {
      icon: BarChart3,
      title: "Call Analytics Dashboard",
      description: "See calls handled, bookings, and conversion rates",
    },
    {
      icon: Voicemail,
      title: "Voicemail to Text / Email",
      description: "Automatic transcription and logging of all messages",
    },
    {
      icon: Users,
      title: "Human Escalation",
      description: "When AI can't answer, seamlessly transfer to your team",
    },
  ]

  return (
    <section id="solutions" className="py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 lg:px-6">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-bold tracking-tight text-slate-900">More than just a call bot.</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-teal-100">
                <feature.icon className="h-6 w-6 text-teal-600" />
              </div>
              <h3 className="mb-2 text-lg font-bold text-slate-900">{feature.title}</h3>
              <p className="text-sm leading-relaxed text-slate-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-slate-600">
            Need something custom? Keel can run on your own n8n / VPS / private stack.
          </p>
        </div>
      </div>
    </section>
  )
}
