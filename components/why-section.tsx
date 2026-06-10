"use client"

import { ScrollReveal } from "./scroll-reveal"
import { Target, Cpu, Zap } from "lucide-react"

const pillars = [
  {
    icon: Target,
    title: "Vision-led",
    description: "We identify and solve large structural problems in local commerce — the kind that have been ignored for decades.",
  },
  {
    icon: Cpu,
    title: "Technology-first",
    description: "Everything we build is AI-native from day one. Not a bolt-on. Not an upgrade. Built for intelligence at the core.",
  },
  {
    icon: Zap,
    title: "Execution-focused",
    description: "We build practical products that work in the real world, not experiments. Shipping matters.",
  },
]

export function WhySection() {
  return (
    <section className="section-shell relative overflow-hidden py-14 md:py-20">
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full opacity-10 pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(76,29,149,0.15) 0%, transparent 70%)" }}
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <ScrollReveal>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-neon/20 bg-neon/5 px-4 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-neon" />
              <span className="text-xs font-semibold uppercase tracking-widest text-neon">Why Hyperlocalventures</span>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
              Built Different,{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-neon">
                By Design
              </span>
            </h2>
          </ScrollReveal>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {pillars.map((pillar, i) => (
            <ScrollReveal key={pillar.title} delay={0.1 * (i + 2)}>
              <div className="motion-panel group relative h-full overflow-hidden rounded-2xl border border-border/50 bg-surface/80 p-8 backdrop-blur-sm transition-all duration-500 hover:border-neon/40 text-center">
                <div
                  className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none"
                  style={{ background: "radial-gradient(circle at top center, rgba(76,29,149,0.06) 0%, transparent 60%)" }}
                  aria-hidden="true"
                />
                <div className="relative">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-neon/10 text-neon transition-all duration-300 group-hover:bg-neon/20 group-hover:scale-105">
                    <pillar.icon size={32} />
                  </div>
                  <h3 className="mt-6 text-xl font-bold text-foreground">{pillar.title}</h3>
                  <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{pillar.description}</p>
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
