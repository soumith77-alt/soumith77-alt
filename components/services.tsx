import { Card } from "@/components/ui/card"
import { Phone, Mail, Calendar, Workflow, BarChart3 } from "lucide-react"

export function Services() {
  const services = [
    {
      icon: Phone,
      title: "AI Receptionist",
      description: "Call + voicemail handling with natural conversation 24/7",
    },
    {
      icon: Mail,
      title: "Lead capture & follow-ups",
      description: "Automated SMS and email sequences to nurture and convert leads",
    },
    {
      icon: Calendar,
      title: "Appointment booking",
      description: "Direct calendar integration with automatic scheduling and reminders",
    },
    {
      icon: Workflow,
      title: "Marketing automations",
      description: "Seamless integration with n8n, Zapier, and popular CRM platforms",
    },
    {
      icon: BarChart3,
      title: "Call analytics dashboard",
      description: "Track call volume, conversion rates, and ROI with detailed insights",
    },
  ]

  return (
    <section className="bg-slate-50 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Everything you need to scale
          </h2>
          <p className="mt-4 text-pretty text-lg text-muted-foreground">
            Complete AI automation suite for service businesses
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Card key={index} className="bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <service.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-card-foreground">{service.title}</h3>
              <p className="text-sm text-muted-foreground">{service.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
