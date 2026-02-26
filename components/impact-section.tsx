"use client"

import { ScrollReveal } from "./scroll-reveal"
import { Users, Cpu, ShieldCheck, Globe } from "lucide-react"

const impacts = [
  {
    icon: Users,
    title: "Create Employment",
    description:
      "Building a workforce of company employees and self-serving agents. Long-term impact on millions of lives across India.",
    highlight: "Millions of lives",
    stat: "10M+",
    statLabel: "Lives Impacted",
  },
  {
    icon: Cpu,
    title: "AI-Driven Advanced Tech",
    description:
      "Deep AI integration powering real-time commerce intelligence. Future-ready infrastructure built to scale.",
    highlight: "Future-ready",
    stat: "AI-First",
    statLabel: "Architecture",
  },
  {
    icon: ShieldCheck,
    title: "Support Small Businesses",
    description:
      "Protecting local shops from being overshadowed by online giants. Leveling the playing field for self-employed entrepreneurs.",
    highlight: "Level playing field",
    stat: "50M+",
    statLabel: "Small Businesses",
  },
  {
    icon: Globe,
    title: "Universal Inclusion",
    description:
      "Scalable to every city, town, and village across the country. True inclusion at the grassroots level.",
    highlight: "Every village",
    stat: "100%",
    statLabel: "Coverage Goal",
  },
]

export function ImpactSection() {
  return (
    <section
      id="impact"
      className="section-shell relative overflow-hidden py-28 md:py-36 lg:py-44"
    >
      {/* Background accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, transparent 0%, rgba(0,255,132,0.02) 50%, transparent 100%)",
        }}
        aria-hidden="true"
      />

      {/* Decorative side glow */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-10 pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(0,255,132,0.15) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="text-center max-w-3xl mx-auto">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-neon/20 bg-neon/5 px-4 py-1.5 mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-neon animate-pulse-neon" />
              <span className="text-xs font-semibold uppercase tracking-widest text-neon">
                Our Impact
              </span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl text-balance">
              Built to Transform
              <br />
              <span className="text-neon neon-text-glow">Local India</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <p className="mx-auto mt-6 max-w-xl text-muted-foreground leading-relaxed md:text-lg">
              Our mission extends beyond technology. We are building infrastructure that empowers communities and transforms livelihoods.
            </p>
          </ScrollReveal>
        </div>

        <div className="mt-20 grid gap-6 sm:grid-cols-2 md:mt-24">
          {impacts.map((impact, i) => (
            <ScrollReveal key={impact.title} delay={0.1 * (i + 1)}>
              <div className="motion-panel group relative h-full overflow-hidden rounded-2xl border border-border/50 bg-surface/80 p-8 backdrop-blur-sm transition-all duration-500 hover:border-neon/40 lg:p-10">
                {/* Background gradient on hover */}
                <div
                  className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(circle at top right, rgba(0,255,132,0.05) 0%, transparent 60%)",
                  }}
                  aria-hidden="true"
                />

                {/* Hover glow */}
                <div className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none neon-border-glow" aria-hidden="true" />

                <div className="relative">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-4">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-neon/10 text-neon transition-all duration-300 group-hover:bg-neon/20 group-hover:scale-105">
                        <impact.icon size={28} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-foreground">
                          {impact.title}
                        </h3>
                        <span className="text-xs font-semibold text-neon uppercase tracking-wider">
                          {impact.highlight}
                        </span>
                      </div>
                    </div>
                    {/* Stat badge */}
                    <div className="hidden sm:block text-right">
                      <p className="text-3xl font-bold text-neon">{impact.stat}</p>
                      <p className="text-[10px] text-muted-foreground uppercase tracking-wider">{impact.statLabel}</p>
                    </div>
                  </div>

                  <p className="mt-6 text-sm text-muted-foreground leading-relaxed">
                    {impact.description}
                  </p>
                </div>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-neon/30 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
