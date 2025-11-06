import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { LogoStrip } from "@/components/logo-strip"
import { HowItWorks } from "@/components/how-it-works"
import { AudioDemo } from "@/components/audio-demo"
import { Features } from "@/components/features"
import { Industries } from "@/components/industries"
import { Comparison } from "@/components/comparison"
import { Pricing } from "@/components/pricing"
import { Resources } from "@/components/resources"
import { ContactForm } from "@/components/contact-form"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />
      <Hero />
      <LogoStrip />
      <HowItWorks />
      <AudioDemo />
      <Features />
      <Industries />
      <Comparison />
      <Pricing />
      <Resources />
      <ContactForm />
      <Footer />
    </main>
  )
}
