import { Card } from "@/components/ui/card"
import { TrendingUp, Clock, Zap } from "lucide-react"

export function SocialProof() {
  const metrics = [
    {
      icon: TrendingUp,
      stat: "+42% more booked calls",
      description: "in 14 days",
    },
    {
      icon: Clock,
      stat: "78% calls answered",
      description: "after-hours",
    },
    {
      icon: Zap,
      stat: "3 min average",
      description: "response time",
    },
  ]

  return (
    <section className="bg-slate-50 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Real results from real businesses
          </h2>
          <p className="mt-4 text-pretty text-lg text-muted-foreground">
            See the impact Keel has on service businesses like yours
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {metrics.map((metric, index) => (
            <Card key={index} className="bg-white p-8 text-center shadow-sm">
              <div className="mb-4 flex justify-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <metric.icon className="h-6 w-6 text-primary" />
                </div>
              </div>
              <div className="text-3xl font-bold text-foreground">{metric.stat}</div>
              <div className="mt-2 text-sm text-muted-foreground">{metric.description}</div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
