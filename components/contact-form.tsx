"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useState } from "react"
import { CALENDAR_LINK } from "@/lib/constants"
import { Calendar } from "lucide-react"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    business: "",
    industry: "",
    callVolume: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  return (
    <section id="contact" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 lg:px-6">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-bold tracking-tight text-slate-900">Talk to us</h2>
          <p className="text-lg text-slate-600">Choose how you'd like to connect with our team</p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Left: Lead form */}
          <div className="rounded-xl border border-slate-200 bg-white p-8 shadow-sm">
            <h3 className="mb-6 text-xl font-bold text-slate-900">Send us a message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Work email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@business.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="business">Business name</Label>
                <Input
                  id="business"
                  placeholder="Your Business Name"
                  value={formData.business}
                  onChange={(e) => setFormData({ ...formData, business: e.target.value })}
                  required
                />
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="industry">Industry</Label>
                  <Select
                    value={formData.industry}
                    onValueChange={(value) => setFormData({ ...formData, industry: value })}
                  >
                    <SelectTrigger id="industry">
                      <SelectValue placeholder="Select industry" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="medspa">Med Spa</SelectItem>
                      <SelectItem value="dental">Dental / Ortho</SelectItem>
                      <SelectItem value="physio">Physiotherapy / Pilates</SelectItem>
                      <SelectItem value="realestate">Real Estate</SelectItem>
                      <SelectItem value="clinic">Clinic / Aesthetic</SelectItem>
                      <SelectItem value="home">Home Services</SelectItem>
                      <SelectItem value="restaurants">Restaurants</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="callVolume">Monthly call volume</Label>
                  <Select
                    value={formData.callVolume}
                    onValueChange={(value) => setFormData({ ...formData, callVolume: value })}
                  >
                    <SelectTrigger id="callVolume">
                      <SelectValue placeholder="Select volume" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="0-100">0-100 calls</SelectItem>
                      <SelectItem value="100-300">100-300 calls</SelectItem>
                      <SelectItem value="300-500">300-500 calls</SelectItem>
                      <SelectItem value="500+">500+ calls</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your call management challenges..."
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              <Button type="submit" size="lg" className="w-full bg-teal-500 hover:bg-teal-600">
                Send to Keel
              </Button>
            </form>
          </div>

          {/* Right: Calendar embed */}
          <div className="rounded-xl border border-slate-200 bg-white p-8 shadow-sm">
            <div className="mb-6 flex items-center gap-2">
              <Calendar className="h-5 w-5 text-teal-500" />
              <h3 className="text-xl font-bold text-slate-900">Prefer to pick a time?</h3>
            </div>
            <p className="mb-6 text-slate-600">Book directly on our calendar and we'll show up.</p>

            {/* Calendar iframe */}
            <iframe
              src={CALENDAR_LINK}
              className="h-[520px] w-full rounded-lg border border-slate-200"
              loading="lazy"
              title="Book a demo with Keel"
            />

            <p className="mt-2 text-xs text-slate-500">
              If the calendar doesn't load,{" "}
              <a href={CALENDAR_LINK} target="_blank" rel="noreferrer" className="text-teal-600 underline">
                open it here
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
