import { Play } from "lucide-react"
import { AUDIO_DEMO } from "@/lib/constants"

export function AudioDemo() {
  return (
    <section id="demo" className="bg-slate-50 py-16 lg:py-20">
      <div className="mx-auto max-w-6xl px-4 lg:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-slate-900">Listen to a sample AI call</h2>
          <p className="mb-8 text-lg text-slate-600">Replace the audio source with your own demo link.</p>

          <div className="rounded-xl border border-slate-200 bg-white p-8 shadow-sm">
            <div className="mb-4 flex items-center justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-teal-100">
                <Play className="h-8 w-8 text-teal-600" />
              </div>
            </div>

            <audio id="keel-demo-audio" controls src={AUDIO_DEMO} className="mx-auto w-full max-w-lg">
              Your browser does not support the audio element.
            </audio>

            <p className="mt-4 text-sm text-slate-500">
              Update the AUDIO_DEMO constant in lib/constants.ts with your demo file URL.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
