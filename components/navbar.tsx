"use client"

import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"
import { CALENDAR_LINK } from "@/lib/constants"

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`sticky top-0 z-50 w-full transition-all duration-200 ${
        scrolled ? "border-b border-slate-200 bg-white/80 shadow-sm backdrop-blur-md" : "bg-white/80 backdrop-blur-md"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 lg:px-6">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold tracking-tight text-slate-900">Keel</span>
        </div>

        <div className="hidden items-center gap-8 md:flex">
          <a href="#call-flow" className="text-sm font-medium text-slate-600 hover:text-slate-900">
            Solutions
          </a>
          <a href="#industries" className="text-sm font-medium text-slate-600 hover:text-slate-900">
            Industries
          </a>
          <a href="#pricing" className="text-sm font-medium text-slate-600 hover:text-slate-900">
            Pricing
          </a>
          <a href="#resources" className="text-sm font-medium text-slate-600 hover:text-slate-900">
            Resources
          </a>
        </div>

        <div className="flex items-center gap-3">
          <Button asChild className="bg-teal-500 hover:bg-teal-600">
            <a href={CALENDAR_LINK} target="_blank" rel="noreferrer">
              Book a demo
            </a>
          </Button>
          <Button asChild variant="ghost" className="hidden sm:inline-flex">
            <a href="#contact">Talk to us</a>
          </Button>
        </div>
      </div>
    </nav>
  )
}
