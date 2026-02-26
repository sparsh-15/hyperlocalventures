"use client"

import { ScrollReveal } from "./scroll-reveal"
import { Brain, MapPin, Clock, ArrowUpRight } from "lucide-react"

const pillars = [
  {
    icon: Brain,
    title: "Real-time Offer Intelligence",
    description:
      "AI-driven discovery engine that surfaces the most relevant deals to customers in their vicinity, in real time.",
    metric: "< 100ms",
    metricLabel: "Response Time",
  },
  {
    icon: MapPin,
    title: "Pin-code Level Targeting",
    description:
      "Hyper-granular targeting that connects customers with stores in their immediate neighborhood, down to the pin code.",
    metric: "19,000+",
    metricLabel: "Pin Codes",
  },
  {
    icon: Clock,
    title: "Timing-based Deal Matching",
    description:
      "Intelligent matching of offers based on time sensitivity, customer intent, and proximity to maximize conversions.",
    metric: "2X",
    metricLabel: "Revenue Growth",
  },
]

export function AboutSection() {
  return (
    <section
      id="about"
      className="section-shell relative overflow-hidden py-28 md:py-36 lg:py-44"
    >
      {/* Subtle gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, transparent 0%, rgba(0,255,132,0.02) 50%, transparent 100%)",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center lg:mx-0 lg:text-left">
          <ScrollReveal>
            <div className="mb-6 inline-flex items-center justify-center gap-2 rounded-full border border-neon/20 bg-neon/5 px-4 py-1.5 lg:justify-start">
              <span className="h-1.5 w-1.5 rounded-full bg-neon animate-pulse-neon" />
              <span className="text-xs font-semibold uppercase tracking-widest text-neon">
                What We Are Building
              </span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
              AI-Native Hyperlocal
              <br />
              <span className="text-neon neon-text-glow">Commerce Platform</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground lg:mx-0">
              We are building an AI-native hyperlocal commerce platform that
              connects customers to the right nearby store in real time. Not
              ecommerce. Not a marketplace.{" "}
              <span className="text-foreground font-medium">A true intelligence layer.</span>
            </p>
          </ScrollReveal>
        </div>

        {/* Pillars */}
        <div className="mt-20 grid gap-6 md:grid-cols-3 md:mt-24">
          {pillars.map((pillar, i) => (
            <ScrollReveal key={pillar.title} delay={0.1 * (i + 3)}>
              <div className="motion-panel group relative h-full overflow-hidden rounded-2xl border border-border/50 bg-surface/80 p-8 backdrop-blur-sm transition-all duration-500 hover:border-neon/40">
                {/* Hover gradient */}
                <div
                  className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(circle at top left, rgba(0,255,132,0.06) 0%, transparent 60%)",
                  }}
                  aria-hidden="true"
                />

                {/* Hover glow */}
                <div className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none neon-border-glow" aria-hidden="true" />

                <div className="relative">
                  {/* Top row: icon + metric */}
                  <div className="flex items-start justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-neon/10 text-neon transition-all duration-300 group-hover:bg-neon/20 group-hover:scale-105">
                      <pillar.icon size={28} />
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-neon">{pillar.metric}</p>
                      <p className="text-[10px] text-muted-foreground uppercase tracking-wider">{pillar.metricLabel}</p>
                    </div>
                  </div>

                  <h3 className="mt-8 text-xl font-bold text-foreground">
                    {pillar.title}
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                    {pillar.description}
                  </p>

                  {/* Arrow */}
                  <div className="mt-6 flex items-center gap-1.5 text-neon/50 transition-colors group-hover:text-neon">
                    <span className="text-xs font-medium uppercase tracking-wider">Learn more</span>
                    <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>

                {/* Bottom glow line */}
                <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-neon/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
