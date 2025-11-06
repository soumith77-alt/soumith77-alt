"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: "Do I need to change my phone number?",
      answer:
        "No. Keel wraps around your existing phone number. We can forward calls, integrate with your phone system, or work alongside your current setup.",
    },
    {
      question: "Can Keel speak in my tone or language?",
      answer:
        "Yes. We customize the AI voice, script, and tone to match your brand. Keel supports multiple languages and can switch between them during calls.",
    },
    {
      question: "Can it book into my current software?",
      answer:
        "Absolutely. Keel integrates with Calendly, Google Calendar, practice management systems, and custom booking platforms. We can also connect via API or Zapier/n8n.",
    },
    {
      question: "What if the caller asks something AI can't answer?",
      answer:
        "Keel can escalate to a human team member, take a message, or schedule a callback. You have full control over the fallback behavior.",
    },
    {
      question: "Can I get call logs/transcripts?",
      answer:
        "Yes. Every call is logged with full transcripts, recordings (if enabled), and analytics. You can access everything through the dashboard or export to your CRM.",
    },
    {
      question: "How long does setup take?",
      answer:
        "Most clients are live within 3-5 business days. We handle the technical setup, script customization, and integration testing for you.",
    },
  ]

  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-4 lg:px-6">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-bold tracking-tight text-slate-900">Frequently asked questions</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="rounded-xl border border-slate-200 bg-white shadow-sm">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex w-full items-center justify-between p-6 text-left"
              >
                <span className="font-semibold text-slate-900">{faq.question}</span>
                <ChevronDown
                  className={`h-5 w-5 text-slate-600 transition-transform ${openIndex === index ? "rotate-180" : ""}`}
                />
              </button>
              {openIndex === index && (
                <div className="border-t border-slate-200 px-6 pb-6 pt-4">
                  <p className="text-slate-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
