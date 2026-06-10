"use client"

import { ScrollReveal } from "./scroll-reveal"
import { Brain, MapPin, BarChart3, Server } from "lucide-react"

const capabilities = [
  { icon: Brain, title: "AI & Agentic Systems", description: "Merchant copilots, automation, insights." },
  { icon: MapPin, title: "Local Commerce", description: "Discovery, engagement, conversion, loyalty." },
  { icon: BarChart3, title: "Data Intelligence", description: "Consumer behavior and market intelligence." },
  { icon: Server, title: "Digital Infrastructure", description: "Scalable platforms and ecosystems." },
]

export function CapabilitiesSection() {
  return (
    <section className="section-shell relative overflow-hidden py-14 md:py-20">
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <ScrollReveal>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-neon/20 bg-neon/5 px-4 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-neon" />
              <span className="text-xs font-semibold uppercase tracking-widest text-neon">Core Capabilities</span>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
              What We{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-neon">
                Do Best
              </span>
            </h2>
          </ScrollReveal>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {capabilities.map((cap, i) => (
            <ScrollReveal key={cap.title} delay={0.1 * (i + 1)}>
              <div className="motion-panel group relative h-full overflow-hidden rounded-2xl border border-border/50 bg-surface/80 p-8 backdrop-blur-sm transition-all duration-500 hover:border-neon/40">
                <div
                  className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none"
                  style={{ background: "radial-gradient(circle at top left, rgba(76,29,149,0.06) 0%, transparent 60%)" }}
                  aria-hidden="true"
                />
                <div className="relative">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-neon/10 text-neon transition-all duration-300 group-hover:bg-neon/20 group-hover:scale-105">
                    <cap.icon size={28} />
                  </div>
                  <h3 className="mt-6 text-lg font-bold text-foreground">{cap.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{cap.description}</p>
                </div>
                <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-neon/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
